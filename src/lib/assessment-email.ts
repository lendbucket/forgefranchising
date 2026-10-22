/**
 * Emails for the franchise readiness assessment: the internal lead
 * notification to Forge and the report sent to the visitor.
 *
 * Email safe HTML: tables, inline styles, a bulletproof button, and a plain
 * text version of each message. Server side only.
 */

import { SITE_URL } from '@/lib/constants'
import {
  DISCLAIMER,
  PILLAR_MAX,
  QUESTIONS,
  TIERS,
  answerLabel,
  pillarLabel,
  type Answers,
  type AssessmentResult,
} from '@/lib/assessment'

export type AssessmentLead = {
  fullName: string
  email: string
  phone: string
  businessName: string
  industry: string
  location: string
  wantsCall: boolean
  answers: Answers
  result: AssessmentResult
  submittedAt: Date
  source: string
  utm: Record<string, string>
}

// Direction C palette. Graphite on the ember fill button is 5.04:1; steel on
// white is 7.09:1; ember text on white is 5.51:1. Brand ember is used for
// rules and bars only.
const GRAPHITE = '#1C1F23'
const STEEL = '#4E5A62'
const EMBER = '#E4572E'
const EMBER_FILL = '#E8663F'
const EMBER_TEXT = '#B9401C'
const ASH = '#D9D5CF'
const STONE = '#F4F3F0'
const LINE = '#E5E3DF'
const WHITE = '#FFFFFF'
const MIST = '#C9CDD0'
const SANS = 'Arial, Helvetica, sans-serif'

const LOGO = `${SITE_URL}/forge-franchising-logo-white.png`

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function centralTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date) + ' Central'
}

export function reportCtaUrl(result: AssessmentResult): string {
  return `${SITE_URL}/contact?source=assessment-email&score=${result.overall}&tier=${result.tier}`
}

/* ---------------------------------------------------------------- */
/*  Internal notification                                            */
/* ---------------------------------------------------------------- */

function row(label: string, value: string, last: boolean): string {
  const border = last ? '' : ` border-bottom: 1px solid ${ASH};`
  return `<tr><td style="padding: 10px 12px; font-weight: bold; color: ${GRAPHITE}; vertical-align: top; width: 38%;${border}">${esc(label)}</td><td style="padding: 10px 12px; color: ${STEEL};${border}">${esc(value || 'Not provided').replace(/\n/g, '<br>')}</td></tr>`
}

function block(title: string, rows: [string, string][]): string {
  return `
        <tr><td style="padding: 18px 12px 6px; font-family: ${SANS}; font-size: 13px; font-weight: bold; color: ${GRAPHITE};">${esc(title)}</td></tr>
        <tr><td style="background: ${WHITE}; padding: 0 12px; border: 1px solid ${ASH};">
          <table role="presentation" style="border-collapse: collapse; width: 100%; font-family: ${SANS}; font-size: 14px;">
            ${rows.map(([l, v], i) => row(l, v, i === rows.length - 1)).join('')}
          </table>
        </td></tr>`
}

function leadSections(lead: AssessmentLead) {
  const { result } = lead
  const contact: [string, string][] = [
    ['Name', lead.fullName],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Business', lead.businessName],
    ['Industry', lead.industry],
    ['City and state', lead.location],
    ['Wants a feasibility call', lead.wantsCall ? 'Yes' : 'No'],
  ]
  const score: [string, string][] = [
    ['Overall score', `${result.overall}/100`],
    ['Tier', result.tierTitle],
    ...result.pillars.map((p): [string, string] => [p.label, `${p.score}/${PILLAR_MAX}`]),
    ['Weakest pillar', pillarLabel(result.weakest)],
  ]
  const responses: [string, string][] = QUESTIONS.map((q) => [q.question, answerLabel(q.id, lead.answers[q.id])])
  const meta: [string, string][] = [
    ['Submitted', centralTime(lead.submittedAt)],
    ['Page source', lead.source || 'Not provided'],
    ...Object.entries(lead.utm).map(([k, v]): [string, string] => [k, v]),
  ]
  return { contact, score, responses, meta }
}

export function internalSubject(lead: AssessmentLead): string {
  return `Readiness assessment: ${lead.businessName}, ${lead.result.overall}/100, ${lead.result.tierTitle}`
}

export function internalHtml(lead: AssessmentLead): string {
  const s = leadSections(lead)
  return `
      <table role="presentation" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: ${SANS};">
        <tr><td style="background: ${GRAPHITE}; padding: 20px 24px;">
          <p style="margin: 0; color: #F07A52; font-size: 12px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">Readiness assessment</p>
          <h2 style="margin: 6px 0 0; color: ${WHITE}; font-size: 20px;">${esc(lead.businessName)}: ${lead.result.overall}/100, ${esc(lead.result.tierTitle)}</h2>
        </td></tr>
        ${block('Contact', s.contact)}
        ${block('Score', s.score)}
        ${block('Responses', s.responses)}
        ${block('Source', s.meta)}
      </table>
    `
}

export function internalText(lead: AssessmentLead): string {
  const s = leadSections(lead)
  const section = (title: string, rows: [string, string][]) => [title, ...rows.map(([l, v]) => `${l}: ${v || 'Not provided'}`), '']
  return [
    `Readiness assessment: ${lead.businessName}, ${lead.result.overall}/100, ${lead.result.tierTitle}`,
    '',
    ...section('CONTACT', s.contact),
    ...section('SCORE', s.score),
    ...section('RESPONSES', s.responses),
    ...section('SOURCE', s.meta),
  ].join('\n')
}

/* ---------------------------------------------------------------- */
/*  Report to the visitor                                            */
/* ---------------------------------------------------------------- */

export function reportSubject(result: AssessmentResult): string {
  return `Your Franchise Readiness Report: ${result.overall}/100`
}

function pillarBar(label: string, score: number): string {
  const pct = Math.round((score / PILLAR_MAX) * 100)
  const rest = 100 - pct
  return `
              <tr>
                <td style="padding: 12px 0 6px; font-family: ${SANS}; font-size: 14px; color: ${GRAPHITE};">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                    <td style="font-family: ${SANS}; font-size: 14px; font-weight: bold; color: ${GRAPHITE};">${esc(label)}</td>
                    <td align="right" style="font-family: ${SANS}; font-size: 14px; color: ${STEEL};">${score}/${PILLAR_MAX}</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                    ${pct > 0 ? `<td width="${pct}%" height="10" bgcolor="${EMBER}" style="background-color: ${EMBER}; height: 10px; font-size: 0; line-height: 0;">&nbsp;</td>` : ''}
                    ${rest > 0 ? `<td width="${rest}%" height="10" bgcolor="${ASH}" style="background-color: ${ASH}; height: 10px; font-size: 0; line-height: 0;">&nbsp;</td>` : ''}
                  </tr></table>
                </td>
              </tr>`
}

function button(href: string, label: string): string {
  return `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0;">
              <tr>
                <td align="center" bgcolor="${EMBER_FILL}" style="background-color: ${EMBER_FILL}; padding: 16px 28px;">
                  <a href="${esc(href)}" style="font-family: ${SANS}; font-size: 16px; font-weight: bold; color: ${GRAPHITE}; text-decoration: none; display: inline-block;">${esc(label)}</a>
                </td>
              </tr>
            </table>`
}

export function reportHtml(lead: AssessmentLead): string {
  const { result } = lead
  const cta = TIERS[result.tier].cta
  const firstName = lead.fullName.split(' ')[0]
  const assessments = result.recommendations
    .map(
      (p, i) => `
              <tr>
                <td style="padding: 18px 0; border-top: 1px solid ${LINE};">
                  ${i === 0 ? `<div style="font-family: ${SANS}; font-size: 12px; font-weight: bold; color: ${EMBER_TEXT}; padding-bottom: 4px;">Your priority</div>` : ''}
                  <div style="font-family: ${SANS}; font-size: 17px; font-weight: bold; color: ${GRAPHITE}; padding-bottom: 6px;">${esc(p.label)}: ${p.score}/${PILLAR_MAX}</div>
                  <div style="font-family: ${SANS}; font-size: 15px; line-height: 1.6; color: ${STEEL};">${esc(p.assessment)}</div>
                </td>
              </tr>`
    )
    .join('')
  const responses = QUESTIONS.map(
    (q) => `
              <tr>
                <td style="padding: 10px 12px 10px 0; font-family: ${SANS}; font-size: 14px; color: ${STEEL}; border-top: 1px solid ${LINE}; vertical-align: top;">${esc(q.question)}</td>
                <td style="padding: 10px 0; font-family: ${SANS}; font-size: 14px; font-weight: bold; color: ${GRAPHITE}; border-top: 1px solid ${LINE}; vertical-align: top; width: 42%;">${esc(answerLabel(q.id, lead.answers[q.id]))}</td>
              </tr>`
  ).join('')

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(reportSubject(result))}</title>
<style type="text/css">
  @media only screen and (max-width:600px) {
    .pad { padding-left: 24px !important; padding-right: 24px !important; }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: ${STONE};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${STONE}" style="background-color: ${STONE};">
  <tr>
    <td align="center" style="padding: 24px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 600px; background-color: ${WHITE};">
        <tr>
          <td bgcolor="${GRAPHITE}" class="pad" style="background-color: ${GRAPHITE}; padding: 28px 40px;">
            <img src="${LOGO}" alt="Forge Franchising Group" width="150" border="0" style="width: 150px; height: auto; display: block; border: 0; outline: none; text-decoration: none;" />
            <div style="font-family: ${SANS}; font-size: 12px; font-weight: bold; color: ${MIST}; padding-top: 12px;">Forge Franchising Group</div>
          </td>
        </tr>
        <tr><td height="3" bgcolor="${EMBER}" style="background-color: ${EMBER}; font-size: 0; line-height: 0; height: 3px;">&nbsp;</td></tr>

        <tr>
          <td class="pad" style="padding: 36px 40px 8px;">
            <div style="font-family: ${SANS}; font-size: 15px; color: ${STEEL}; padding-bottom: 8px;">${esc(firstName)}, here is your franchise readiness report for ${esc(lead.businessName)}.</div>
            <div style="font-family: ${SANS}; font-size: 64px; line-height: 1; font-weight: bold; color: ${GRAPHITE}; padding-top: 8px;">${result.overall}<span style="font-size: 24px; color: ${STEEL};">/100</span></div>
            <div style="font-family: ${SANS}; font-size: 22px; font-weight: bold; color: ${GRAPHITE}; padding-top: 12px;">${esc(result.tierTitle)}</div>
            <div style="font-family: ${SANS}; font-size: 15px; line-height: 1.6; color: ${STEEL}; padding-top: 8px;">${esc(result.tierSummary)}</div>
          </td>
        </tr>

        <tr>
          <td class="pad" style="padding: 16px 40px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${result.pillars.map((p) => pillarBar(p.label, p.score)).join('')}
            </table>
            <div style="font-family: ${SANS}; font-size: 12px; color: ${STEEL}; padding-top: 12px;">Illustrative assessment based on self-reported answers.</div>
          </td>
        </tr>

        <tr>
          <td class="pad" style="padding: 28px 40px 8px;">
            <div style="font-family: ${SANS}; font-size: 20px; font-weight: bold; color: ${GRAPHITE}; padding-bottom: 6px;">Pillar by pillar</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${assessments}
            </table>
          </td>
        </tr>

        <tr>
          <td class="pad" style="padding: 20px 40px 8px;">
            <div style="font-family: ${SANS}; font-size: 20px; font-weight: bold; color: ${GRAPHITE}; padding-bottom: 6px;">Your responses</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${responses}
            </table>
          </td>
        </tr>

        <tr>
          <td class="pad" style="padding: 28px 40px 36px;">
            ${button(reportCtaUrl(result), cta)}
          </td>
        </tr>

        <tr>
          <td bgcolor="${STONE}" class="pad" style="background-color: ${STONE}; padding: 24px 40px; border-top: 1px solid ${LINE};">
            <div style="font-family: ${SANS}; font-size: 12px; line-height: 1.6; color: ${STEEL};">${esc(DISCLAIMER)}</div>
            <div style="font-family: ${SANS}; font-size: 12px; line-height: 1.6; color: ${STEEL}; padding-top: 10px;"><a href="${SITE_URL}" style="color: ${EMBER_TEXT}; text-decoration: underline;">forgefranchising.com</a></div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

export function reportText(lead: AssessmentLead): string {
  const { result } = lead
  return [
    `${lead.fullName.split(' ')[0]}, here is your franchise readiness report for ${lead.businessName}.`,
    '',
    `Overall score: ${result.overall}/100`,
    result.tierTitle,
    result.tierSummary,
    '',
    ...result.pillars.map((p) => `${p.label}: ${p.score}/${PILLAR_MAX}`),
    'Illustrative assessment based on self-reported answers.',
    '',
    'PILLAR BY PILLAR',
    ...result.recommendations.flatMap((p, i) => [`${i === 0 ? 'Your priority: ' : ''}${p.label} (${p.score}/${PILLAR_MAX})`, p.assessment, '']),
    'YOUR RESPONSES',
    ...QUESTIONS.map((q) => `${q.question} ${answerLabel(q.id, lead.answers[q.id])}`),
    '',
    `${TIERS[result.tier].cta}: ${reportCtaUrl(result)}`,
    '',
    DISCLAIMER,
    SITE_URL,
  ].join('\n')
}
