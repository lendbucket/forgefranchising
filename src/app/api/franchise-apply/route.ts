import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || '')
}

const REQUIRED_FIELDS = [
  'fullName',
  'email',
  'phone',
  'city',
  'state',
  'liquidCapital',
  'whyForge',
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
    const email = sanitize(body.email)
    const phone = sanitize(body.phone)
    const city = sanitize(body.city)
    const state = sanitize(body.state)
    const liquidCapital = sanitize(body.liquidCapital)
    const netWorth = sanitize(body.netWorth)
    const currentProfession = sanitize(body.currentProfession)
    const whyForge = sanitize(body.whyForge)
    const timeline = sanitize(body.timeline)
    const franchiseExperience = sanitize(body.franchiseExperience)
    const salesExperience = sanitize(body.salesExperience)
    const heardAboutUs = sanitize(body.heardAboutUs)

    const fromEmail = process.env.LEAD_FROM_EMAIL || 'onboarding@resend.dev'

    const htmlBody = `
      <h2>New Forge Franchise Application</h2>
      <p style="color: #F87000; font-weight: bold;">Franchise Opportunity Candidate</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">City</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${city}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">State</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${state}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Liquid Capital</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${liquidCapital}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Net Worth Range</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${netWorth || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Current Profession</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${currentProfession || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Why Forge</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${whyForge}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Timeline</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${timeline || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Franchise Experience</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${franchiseExperience || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Sales Experience</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${salesExperience || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold;">How They Heard About Us</td><td style="padding: 8px;">${heardAboutUs || 'Not provided'}</td></tr>
      </table>
    `

    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: 'ceo@36west.org',
      subject: `Forge Franchise Application: ${fullName} (${city}, ${state})`,
      html: htmlBody,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to send your application. Please try again or email us directly at ceo@36west.org.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Franchise application error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again or email us directly at ceo@36west.org.' },
      { status: 500 }
    )
  }
}
