import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || '')
}

const REQUIRED_FIELDS = [
  'fullName',
  'businessName',
  'email',
  'phone',
  'industry',
  'reasonForFranchising',
] as const

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, 2000)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    const missing: string[] = []
    for (const field of REQUIRED_FIELDS) {
      if (!body[field] || typeof body[field] !== 'string' || body[field].trim() === '') {
        missing.push(field)
      }
    }

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const fullName = sanitize(body.fullName)
    const businessName = sanitize(body.businessName)
    const email = sanitize(body.email)
    const phone = sanitize(body.phone)
    const industry = sanitize(body.industry)
    const yearsInBusiness = sanitize(body.yearsInBusiness)
    const currentLocations = sanitize(body.currentLocations)
    const annualRevenueRange = sanitize(body.annualRevenueRange)
    const currentlyProfitable = sanitize(body.currentlyProfitable)
    const reasonForFranchising = sanitize(body.reasonForFranchising)
    const targetTimeline = sanitize(body.targetTimeline)
    const biggestQuestion = sanitize(body.biggestQuestion)

    const fromEmail = process.env.LEAD_FROM_EMAIL || 'onboarding@resend.dev'

    const htmlBody = `
      <h2>New Franchise Inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Business</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${businessName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Industry</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${industry}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Years in Business</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${yearsInBusiness || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Current Locations</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${currentLocations || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Annual Revenue Range</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${annualRevenueRange || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Currently Profitable</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${currentlyProfitable || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Reason for Franchising</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${reasonForFranchising}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Target Timeline</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${targetTimeline || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">Biggest Question</td><td style="padding: 8px;">${biggestQuestion || 'Not provided'}</td></tr>
      </table>
    `

    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: 'ceo@36west.org',
      subject: `Franchise Inquiry: ${businessName} (${industry})`,
      html: htmlBody,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send your inquiry. Please try again or email us directly at ceo@36west.org.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again or email us directly at ceo@36west.org.' },
      { status: 500 }
    )
  }
}
