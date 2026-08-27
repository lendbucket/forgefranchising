import { CONTACT_EMAIL, SITE_URL } from './constants'

/**
 * Email bodies for the proposal signature flow.
 * Kept out of the route so the route stays thin and these stay testable.
 *
 * Both messages are table based with inline styles. The only head level CSS is
 * a media query for mobile padding, which clients that ignore it simply fall
 * back from to the inline values. No flexbox, no grid, no web fonts, no
 * external stylesheets, no background images.
 */

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Pricing is resolved server side from the tier name rather than trusted from
 * the request body, so a tampered payload cannot put a wrong price in front of
 * the client.
 */
export const TIER_PRICING: Record<string, string> = {
  'Engine Launch': '$24,500',
  'Engine Growth': '$49,500',
  'Engine Empire': 'from $89,500',
}

const NEXT_STEPS: [string, string][] = [
  [
    'Engagement agreement',
    'You will receive the agreement for electronic signature within one business day. It sets out scope, deliverables, milestones, and the payment schedule.',
  ],
  [
    'Kickoff session',
    'Once the agreement is executed we schedule a working session to align on scope and confirm the documents and access we will need from your team.',
  ],
  [
    'Phase one, the business audit',
    'We review your financials, trademark position, entity structure, leases, and wellness partner agreements, along with your unit economics.',
  ],
  [
    'Written readiness verdict',
    'Phase one ends with a straight assessment and a real timeline built from your documentation rather than an estimate.',
  ],
]

const DISCLAIMER =
  'This message confirms selection of a professional services engagement and is not a franchise offering. A franchise may be offered only through a Franchise Disclosure Document delivered in accordance with the FTC Franchise Rule and applicable state law. Nothing in this message is a representation or guarantee of financial performance or results. Forge Franchising Group is not a law firm. All legal documents are prepared by licensed counsel.'

/* ---------------------------------------------------------------- */
/*  Design tokens                                                    */
/* ---------------------------------------------------------------- */

const SERIF = "Georgia, 'Times New Roman', Times, serif"
const SANS = 'Helvetica, Arial, sans-serif'

const CREAM = '#FAF6EF'
const WHITE = '#FFFFFF'
const ESPRESSO = '#281010'
const AMBER = '#F87000'
const BODY_TEXT = '#55504C'
const MUTED = '#8A8078'
const HAIRLINE = '#E5DED2'

/** Absolute, because email clients cannot resolve relative paths. */
const FORGE_LOGO = `${SITE_URL}/forge-franchising-logo-white.png`

/* ---------------------------------------------------------------- */
/*  Shared blocks                                                    */
/* ---------------------------------------------------------------- */

/**
 * Espresso band carrying the logo image and, directly beneath it, the same
 * wordmark as live text. The text is deliberate redundancy: with images
 * blocked the header still identifies the sender. Do not remove it.
 */
function headerBand(logoWidth: number): string {
  return `
        <tr>
          <td bgcolor="${ESPRESSO}" align="center" style="background-color:${ESPRESSO};padding:28px 24px 22px 24px;">
            <img src="${FORGE_LOGO}" alt="Forge Franchising Group" width="${logoWidth}" border="0" style="width:${logoWidth}px;height:auto;display:block;margin:0 auto;border:0;outline:none;text-decoration:none;" />
            <div style="font-family:${SERIF};font-size:12px;font-weight:bold;color:${CREAM};letter-spacing:0.18em;padding-top:12px;">FORGE FRANCHISING GROUP</div>
          </td>
        </tr>
        <tr>
          <td height="3" bgcolor="${AMBER}" style="background-color:${AMBER};font-size:0;line-height:0;height:3px;">&nbsp;</td>
        </tr>`
}

/** Receipt style key and value table. */
function detailsTable(rows: [string, string][]): string {
  return `
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${CREAM}" style="background-color:${CREAM};border:1px solid ${HAIRLINE};border-collapse:separate;">
              ${rows
                .map(
                  ([label, value], i) => `
              <tr>
                <td width="150" valign="top" style="padding:14px 16px;font-family:${SANS};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${MUTED};${
                  i < rows.length - 1 ? `border-bottom:1px solid ${HAIRLINE};` : ''
                }">${escapeHtml(label)}</td>
                <td valign="top" style="padding:14px 16px;font-family:${SANS};font-size:16px;font-weight:bold;color:${ESPRESSO};${
                  i < rows.length - 1 ? `border-bottom:1px solid ${HAIRLINE};` : ''
                }">${escapeHtml(value)}</td>
              </tr>`
                )
                .join('')}
            </table>`
}

/**
 * Bulletproof button. The background lives on the table cell rather than on a
 * styled anchor, which is what keeps it filled in Outlook.
 */
function button(href: string, label: string): string {
  return `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
              <tr>
                <td align="center" bgcolor="${AMBER}" style="background-color:${AMBER};padding:16px 32px;">
                  <a href="${href}" style="font-family:${SANS};font-size:14px;font-weight:bold;color:${ESPRESSO};text-decoration:none;text-transform:uppercase;letter-spacing:0.1em;display:inline-block;">${escapeHtml(label)}</a>
                </td>
              </tr>
            </table>`
}

function footerBand(): string {
  return `
        <tr>
          <td bgcolor="${CREAM}" style="background-color:${CREAM};padding:24px 32px;border-top:1px solid ${HAIRLINE};">
            <div style="font-family:${SANS};font-size:11px;line-height:1.6;color:${MUTED};">
              ${escapeHtml(DISCLAIMER)}
            </div>
            <div style="font-family:${SANS};font-size:11px;line-height:1.6;color:${MUTED};padding-top:12px;">
              <a href="${SITE_URL}" style="color:${AMBER};text-decoration:none;">forgefranchising.com</a>
            </div>
          </td>
        </tr>`
}

/** Shell shared by both messages. */
function shell(title: string, inner: string): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<style type="text/css">
  @media only screen and (max-width:600px) {
    .card-pad { padding-left:24px !important; padding-right:24px !important; }
    .card-pad-top { padding-top:24px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:${CREAM};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${CREAM}" style="background-color:${CREAM};margin:0;padding:0;">
  <tr>
    <td align="center" style="padding:24px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${WHITE};">
${inner}
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

/* ---------------------------------------------------------------- */
/*  Client confirmation                                              */
/* ---------------------------------------------------------------- */

export function clientConfirmationHtml({
  engagement,
  fullName,
  date,
}: {
  engagement: string
  fullName: string
  date: string
}): string {
  const inner = `${headerBand(180)}

        <tr>
          <td class="card-pad card-pad-top" style="padding:40px 40px 0 40px;">
            <h1 style="margin:0 0 8px 0;font-family:${SERIF};font-size:28px;line-height:1.2;color:${ESPRESSO};font-weight:bold;">Engagement Confirmed</h1>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="56"><tr><td height="3" bgcolor="${AMBER}" style="background-color:${AMBER};font-size:0;line-height:0;">&nbsp;</td></tr></table>
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:24px 40px 0 40px;font-family:${SANS};font-size:15px;line-height:1.65;color:${BODY_TEXT};">
            Cody, thank you for selecting your engagement with Forge Franchising Group. Your selection has been recorded and our team has been notified. This message confirms what you selected and what happens next.
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:24px 40px 0 40px;">${detailsTable([
            ['Engagement', engagement],
            ['Signed by', fullName],
            ['Date', date],
          ])}
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:36px 40px 0 40px;">
            <h2 style="margin:0 0 4px 0;font-family:${SERIF};font-size:19px;line-height:1.3;color:${ESPRESSO};font-weight:bold;">What Happens Next</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="40"><tr><td height="2" bgcolor="${AMBER}" style="background-color:${AMBER};font-size:0;line-height:0;">&nbsp;</td></tr></table>
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:12px 40px 0 40px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${NEXT_STEPS.map(
                ([title, body], i) => `
              <tr>
                <td width="36" valign="top" style="padding:18px 12px 18px 0;${
                  i < NEXT_STEPS.length - 1 ? `border-bottom:1px solid ${HAIRLINE};` : ''
                }">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="26"><tr>
                    <td align="center" height="26" bgcolor="${AMBER}" style="background-color:${AMBER};width:26px;height:26px;border-radius:13px;font-family:${SANS};font-size:13px;font-weight:bold;color:${ESPRESSO};line-height:26px;">${i + 1}</td>
                  </tr></table>
                </td>
                <td valign="top" style="padding:18px 0;${
                  i < NEXT_STEPS.length - 1 ? `border-bottom:1px solid ${HAIRLINE};` : ''
                }">
                  <div style="font-family:${SANS};font-size:15px;font-weight:bold;color:${ESPRESSO};padding-bottom:4px;">${escapeHtml(title)}</div>
                  <div style="font-family:${SANS};font-size:14px;line-height:1.6;color:${BODY_TEXT};">${escapeHtml(body)}</div>
                </td>
              </tr>`
              ).join('')}
            </table>
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:32px 40px 0 40px;font-family:${SANS};font-size:15px;line-height:1.65;color:${BODY_TEXT};">
            If anything needs clarifying before the agreement arrives, reply to this message or write to <a href="mailto:${CONTACT_EMAIL}" style="color:${AMBER};text-decoration:none;">${CONTACT_EMAIL}</a>.
          </td>
        </tr>

        <tr>
          <td class="card-pad" align="center" style="padding:28px 40px 0 40px;">${button(
            `mailto:${CONTACT_EMAIL}`,
            'Reply With Questions'
          )}
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:32px 40px 40px 40px;font-family:${SANS};font-size:15px;line-height:1.7;color:${ESPRESSO};">
            Robert Reyna<br />
            Forge Franchising Group<br />
            <a href="${SITE_URL}" style="color:${AMBER};text-decoration:none;">forgefranchising.com</a>
          </td>
        </tr>

${footerBand()}`

  return shell('Engagement Confirmed', inner)
}

export function clientConfirmationText({
  engagement,
  fullName,
  date,
}: {
  engagement: string
  fullName: string
  date: string
}): string {
  return [
    'FORGE FRANCHISING GROUP',
    '',
    'ENGAGEMENT CONFIRMED',
    '',
    'Cody, thank you for selecting your engagement with Forge Franchising Group. Your selection has been recorded and our team has been notified. This message confirms what you selected and what happens next.',
    '',
    'Engagement: ' + engagement,
    'Signed by: ' + fullName,
    'Date: ' + date,
    '',
    'WHAT HAPPENS NEXT',
    '',
    ...NEXT_STEPS.map(([title, body], i) => `${i + 1}. ${title}. ${body}`),
    '',
    'If anything needs clarifying before the agreement arrives, reply to this message or write to ' +
      CONTACT_EMAIL +
      '.',
    '',
    'Reply with questions: mailto:' + CONTACT_EMAIL,
    '',
    'Robert Reyna',
    'Forge Franchising Group',
    'forgefranchising.com',
    '',
    '---',
    DISCLAIMER,
  ].join('\n')
}

/* ---------------------------------------------------------------- */
/*  Internal notification                                            */
/* ---------------------------------------------------------------- */

export type InternalNotification = {
  tier: string
  fullName: string
  email: string
  date: string
  signature: string
  submittedAt: string
  clientIp: string
}

function internalRows(n: InternalNotification): [string, string][] {
  return [
    ['Selected Tier', n.tier],
    ['Full Name', n.fullName],
    ['Email', n.email],
    ['Date', n.date],
    ['Typed Signature', n.signature],
    ['Server Timestamp (UTC)', n.submittedAt],
    ['Request IP', n.clientIp],
  ]
}

export function internalNotificationHtml(n: InternalNotification): string {
  const inner = `${headerBand(150)}

        <tr>
          <td class="card-pad card-pad-top" style="padding:40px 40px 0 40px;">
            <h1 style="margin:0 0 6px 0;font-family:${SERIF};font-size:24px;line-height:1.2;color:${ESPRESSO};font-weight:bold;">PROPOSAL SIGNED</h1>
            <div style="font-family:${SANS};font-size:15px;line-height:1.5;color:${BODY_TEXT};padding-bottom:10px;">Uncaged Fitness selected ${escapeHtml(n.tier)}.</div>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="56"><tr><td height="3" bgcolor="${AMBER}" style="background-color:${AMBER};font-size:0;line-height:0;">&nbsp;</td></tr></table>
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:28px 40px 0 40px;">${detailsTable(internalRows(n))}
          </td>
        </tr>

        <tr>
          <td class="card-pad" align="center" style="padding:32px 40px 0 40px;">${button(
            `mailto:${n.email}`,
            'Reply To Client'
          )}
          </td>
        </tr>

        <tr>
          <td class="card-pad" style="padding:24px 40px 40px 40px;font-family:${SANS};font-size:13px;line-height:1.6;color:${MUTED};">
            Sent automatically from the confidential proposal page.
          </td>
        </tr>

${footerBand()}`

  return shell('Proposal Signed', inner)
}

export function internalNotificationText(n: InternalNotification): string {
  return [
    'FORGE FRANCHISING GROUP',
    '',
    'PROPOSAL SIGNED',
    '',
    'Uncaged Fitness selected ' + n.tier + '.',
    '',
    ...internalRows(n).map(([label, value]) => `${label}: ${value}`),
    '',
    'Reply to client: mailto:' + n.email,
    '',
    'Sent automatically from the confidential proposal page.',
    '',
    '---',
    DISCLAIMER,
  ].join('\n')
}
