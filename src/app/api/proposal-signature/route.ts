import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT_EMAIL } from '@/lib/constants'
import {
  clientConfirmationHtml,
  clientConfirmationText,
  internalNotificationHtml,
  internalNotificationText,
  TIER_PRICING,
} from '@/lib/proposal-email'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || '')
}

const REQUIRED_FIELDS = ['tier', 'fullName', 'email', 'date', 'signature'] as const

const FIELD_LABELS: Record<(typeof REQUIRED_FIELDS)[number], string> = {
  tier: 'Selected Tier',
  fullName: 'Full Name',
  email: 'Email',
  date: 'Date',
  signature: 'Typed Signature',
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, 2000)
}


/** Best effort client IP. Absent in local dev, present behind the Vercel proxy. */
function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'Not available'
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const missing: string[] = []
    for (const field of REQUIRED_FIELDS) {
      if (!body[field] || typeof body[field] !== 'string' || body[field].trim() === '') {
        missing.push(FIELD_LABELS[field])
      }
    }

    if (missing.length > 0) {
      const isTierOnly = missing.length === 1 && missing[0] === FIELD_LABELS.tier
      return NextResponse.json(
        {
          success: false,
          error: isTierOnly
            ? 'Please select a tier before signing.'
            : `Please complete the following: ${missing.join(', ')}.`,
        },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const tier = sanitize(body.tier)
    const fullName = sanitize(body.fullName)
    const email = sanitize(body.email)
    const date = sanitize(body.date)
    const signature = sanitize(body.signature)

    const submittedAt = new Date().toISOString()
    const clientIp = getClientIp(request)

    const notification = {
      tier,
      fullName,
      email,
      date,
      signature,
      submittedAt,
      clientIp,
    }

    const fromEmail = process.env.LEAD_FROM_EMAIL || 'Forge Franchising <leads@forgefranchising.com>'

    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      subject: 'Proposal signed: Uncaged Fitness',
      html: internalNotificationHtml(notification),
      text: internalNotificationText(notification),
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        {
          success: false,
          error: `We could not record your signature. Please email us directly at ${CONTACT_EMAIL}.`,
        },
        { status: 500 }
      )
    }

    // Courtesy confirmation to the client. The signature is already recorded by
    // this point, so a failure here is logged and swallowed. It must never turn
    // a successful submission into an error for the person who signed.
    try {
      const price = TIER_PRICING[tier]
      const engagement = price ? `${tier}, ${price}` : tier
      const clientFrom =
        process.env.CLIENT_FROM_EMAIL ||
        process.env.LEAD_FROM_EMAIL ||
        'Forge Franchising Group <inquiry@forgefranchising.com>'

      const { error: clientError } = await getResend().emails.send({
        from: clientFrom,
        to: email,
        subject: 'Engagement confirmed, Uncaged Fitness',
        html: clientConfirmationHtml({ engagement, fullName, date }),
        text: clientConfirmationText({ engagement, fullName, date }),
        replyTo: CONTACT_EMAIL,
      })

      if (clientError) {
        console.error('Client confirmation email failed:', clientError)
      }
    } catch (clientErr) {
      console.error('Client confirmation email threw:', clientErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Proposal signature error:', err)
    return NextResponse.json(
      {
        success: false,
        error: `Something went wrong. Please email us directly at ${CONTACT_EMAIL}.`,
      },
      { status: 500 }
    )
  }
}
