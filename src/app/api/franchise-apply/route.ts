import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT_EMAIL } from '@/lib/constants'

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

    const fromEmail = process.env.LEAD_FROM_EMAIL || 'Forge Franchising <leads@forgefranchising.com>'

    const htmlBody = `
      <table role="presentation" style="border-collapse: collapse; width: 100%; max-width: 600px;"><tr><td style="background: #1C1F23; padding: 20px 24px;"><h2 style="margin: 0; color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; font-size: 20px;">New Forge Franchise Application</h2></td></tr></table>
      <p style="color: #AD4223; font-weight: bold;">Franchise Opportunity Candidate</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; background: #FFFFFF; border: 1px solid #D9D5CF;">
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Name</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${fullName}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Email</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Phone</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">City</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${city}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">State</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${state}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Liquid Capital</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${liquidCapital}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Net Worth Range</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${netWorth || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Current Profession</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${currentProfession || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Why Forge</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${whyForge}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Timeline</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${timeline || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Franchise Experience</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${franchiseExperience || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23; border-bottom: 1px solid #D9D5CF;">Sales Experience</td><td style="padding: 8px; color: #4E5A62; border-bottom: 1px solid #D9D5CF;">${salesExperience || 'Not provided'}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; color: #1C1F23;">How They Heard About Us</td><td style="padding: 8px; color: #4E5A62;">${heardAboutUs || 'Not provided'}</td></tr>
      </table>
    `

    const { error } = await getResend().emails.send({
      from: fromEmail,
      to: CONTACT_EMAIL,
      subject: `Forge Franchise Application: ${fullName} (${city}, ${state})`,
      html: htmlBody,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, error: `Failed to send your application. Please try again or email us directly at ${CONTACT_EMAIL}.` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Franchise application error:', err)
    return NextResponse.json(
      { success: false, error: `Something went wrong. Please try again or email us directly at ${CONTACT_EMAIL}.` },
      { status: 500 }
    )
  }
}
