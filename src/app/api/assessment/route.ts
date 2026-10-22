import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT_EMAIL } from '@/lib/constants'
import { parseAnswers, scoreAssessment } from '@/lib/assessment'
import {
  internalHtml,
  internalSubject,
  internalText,
  reportHtml,
  reportSubject,
  reportText,
  type AssessmentLead,
} from '@/lib/assessment-email'
import { clientIp, rateLimit } from '@/lib/rate-limit'

/**
 * Readiness assessment submissions. The browser sends answers and contact
 * details only; the score is always recomputed here with scoreAssessment.
 */

const GENERIC_ERROR = `We could not send your report. Please try again, or email us at ${CONTACT_EMAIL}.`
const INVALID = 'Please check your details and try again.'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

function text(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const v = value.trim()
  if (v.length > max) return null
  return v
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  const limited = rateLimit('assessment', clientIp(request), { limit: 5, windowMs: 10 * 60 * 1000 })
  if (!limited.ok) {
    return NextResponse.json(
      { success: false, error: 'Too many submissions. Please wait a few minutes and try again.' },
      { status: 429, headers: { 'Retry-After': String(limited.retryAfterSeconds) } }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: INVALID }, { status: 400 })
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ success: false, error: INVALID }, { status: 400 })
  }

  // Honeypot: people never see this field. Answer as if it worked.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ success: true })
  }

  const fullName = text(body.fullName, 120)
  const email = text(body.email, 254)
  const businessName = text(body.businessName, 160)
  const industry = text(body.industry, 120)
  const location = text(body.location, 120)
  const phone = body.phone === undefined || body.phone === '' ? '' : text(body.phone, 40)
  const wantsCall = body.wantsCall === true
  const source = body.source === undefined ? '' : text(body.source, 200)
  const answers = parseAnswers(body.answers)

  const problems: string[] = []
  if (!fullName) problems.push('fullName')
  if (!email || !isEmail(email)) problems.push('email')
  if (!businessName) problems.push('businessName')
  if (!industry) problems.push('industry')
  if (!location) problems.push('location')
  if (phone === null || (phone && !/^[0-9+().\s-]{7,40}$/.test(phone))) problems.push('phone')
  if (source === null) problems.push('source')
  if (body.wantsCall !== undefined && typeof body.wantsCall !== 'boolean') problems.push('wantsCall')
  if (!answers) problems.push('answers')

  const utm: Record<string, string> = {}
  if (body.utm !== undefined) {
    if (!body.utm || typeof body.utm !== 'object') problems.push('utm')
    else {
      const raw = body.utm as Record<string, unknown>
      for (const key of UTM_KEYS) {
        if (raw[key] === undefined) continue
        const v = text(raw[key], 200)
        if (v === null) problems.push(key)
        else if (v) utm[key] = v
      }
    }
  }

  if (problems.length > 0 || !answers) {
    console.warn('Assessment rejected, invalid fields:', problems.join(', '))
    return NextResponse.json({ success: false, error: INVALID }, { status: 400 })
  }

  const result = scoreAssessment(answers)
  const lead: AssessmentLead = {
    fullName: fullName!,
    email: email!,
    phone: phone || '',
    businessName: businessName!,
    industry: industry!,
    location: location!,
    wantsCall,
    answers,
    result,
    submittedAt: new Date(),
    source: source || '',
    utm,
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Assessment email not sent: RESEND_API_KEY is not set.')
    return NextResponse.json({ success: false, error: GENERIC_ERROR }, { status: 500 })
  }
  const resend = new Resend(process.env.RESEND_API_KEY)
  const fromEmail = process.env.LEAD_FROM_EMAIL || 'Forge Franchising <leads@forgefranchising.com>'

  const [internal, report] = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      subject: internalSubject(lead),
      html: internalHtml(lead),
      text: internalText(lead),
      replyTo: lead.email,
    }),
    resend.emails.send({
      from: fromEmail,
      to: lead.email,
      subject: reportSubject(result),
      html: reportHtml(lead),
      text: reportText(lead),
      replyTo: CONTACT_EMAIL,
    }),
  ])

  const failed = (r: PromiseSettledResult<{ error: unknown }>) => r.status === 'rejected' || Boolean(r.value.error)
  const internalFailed = failed(internal)
  const reportFailed = failed(report)
  if (internalFailed) console.error('Assessment internal email failed:', internal.status === 'rejected' ? internal.reason : internal.value.error)
  if (reportFailed) console.error('Assessment report email failed:', report.status === 'rejected' ? report.reason : report.value.error)

  if (internalFailed && reportFailed) {
    return NextResponse.json({ success: false, error: GENERIC_ERROR }, { status: 500 })
  }

  return NextResponse.json({ success: true, result, reportEmailed: !reportFailed })
}
