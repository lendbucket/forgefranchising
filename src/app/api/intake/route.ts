import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT_EMAIL, INQUIRY_TYPES } from '@/lib/constants'
import { INTAKE_FIELDS, isInquiryType } from '@/lib/intake'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || '')
}

const CONTACT_FIELDS = [
  { name: 'fullName', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'phone', label: 'Phone' },
] as const

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, 2000)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(label: string, value: string, last: boolean): string {
  const border = last ? '' : ' border-bottom: 1px solid #D9D5CF;'
  return `<tr><td style="padding: 10px 12px; font-weight: bold; color: #1C1F23; vertical-align: top; width: 38%;${border}">${escapeHtml(label)}</td><td style="padding: 10px 12px; color: #4E5A62;${border}">${escapeHtml(value || 'Not provided').replace(/\n/g, '<br>')}</td></tr>`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot: real visitors never see or fill this field.
    if (sanitize(body.website)) {
      return NextResponse.json({ success: true })
    }

    const type: unknown = body.inquiryType
    if (!isInquiryType(type)) {
      return NextResponse.json(
        { success: false, error: 'Please choose an inquiry type.' },
        { status: 400 }
      )
    }

    const fields = INTAKE_FIELDS[type]

    const missing = [
      ...CONTACT_FIELDS.map((f) => f.name),
      ...fields.filter((f) => f.required).map((f) => f.name),
    ].filter((name) => !sanitize(body[name]))

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    const email = sanitize(body.email)
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Only whitelisted fields for this inquiry type reach the email.
    const rows = [
      ...CONTACT_FIELDS.map((f) => ({ label: f.label, value: sanitize(body[f.name]) })),
      ...fields.map((f) => ({ label: f.label, value: sanitize(body[f.name]) })),
    ]

    const typeLabel = INQUIRY_TYPES[type]
    const fullName = sanitize(body.fullName)
    const subjectDetail = sanitize(body.businessName) || sanitize(body.franchiseBrand) || fullName
    const fromEmail = process.env.LEAD_FROM_EMAIL || 'Forge Franchising <leads@forgefranchising.com>'

    const htmlBody = `
      <table role="presentation" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, Helvetica, sans-serif;">
        <tr><td style="background: #1C1F23; padding: 20px 24px;">
          <p style="margin: 0; color: #E97554; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">${escapeHtml(typeLabel)}</p>
          <h2 style="margin: 6px 0 0; color: #FFFFFF; font-size: 20px;">New Brokerage Inquiry</h2>
        </td></tr>
        <tr><td style="background: #FFFFFF; padding: 8px 12px; border: 1px solid #D9D5CF; border-top: none;">
          <table role="presentation" style="border-collapse: collapse; width: 100%;">
            ${rows.map((r, i) => row(r.label, r.value, i === rows.length - 1)).join('')}
          </table>
        </td></tr>
      </table>
    `

    const text = [`New Brokerage Inquiry: ${typeLabel}`, '', ...rows.map((r) => `${r.label}: ${r.value || 'Not provided'}`)].join('\n')

    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      subject: `${typeLabel} Inquiry: ${subjectDetail}`,
      html: htmlBody,
      text,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: `Failed to send your inquiry. Please try again or email us directly at ${CONTACT_EMAIL}.` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Intake form error:', err)
    return NextResponse.json(
      { success: false, error: `Something went wrong. Please try again or email us directly at ${CONTACT_EMAIL}.` },
      { status: 500 }
    )
  }
}
