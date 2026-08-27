import { CONTACT_EMAIL } from './constants'

/**
 * Email bodies for the proposal signature flow.
 * Kept out of the route so the route stays thin and these stay testable.
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

const SERIF = "Georgia, 'Times New Roman', Times, serif"
const SANS = 'Helvetica, Arial, sans-serif'

/**
 * Table based confirmation email. Inline styles only, no flexbox, no grid, no
 * web fonts, so it holds up in Outlook, Gmail, and Apple Mail. The wordmark is
 * live text rather than an image so it still reads with images blocked.
 */
export function clientConfirmationHtml({
  engagement,
  fullName,
  date,
}: {
  engagement: string
  fullName: string
  date: string
}): string {
  const detailRows: [string, string][] = [
    ['Engagement', engagement],
    ['Signed by', fullName],
    ['Date', date],
  ]

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Engagement Confirmed</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF6EF;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FAF6EF" style="background-color:#FAF6EF;margin:0;padding:0;">
  <tr>
    <td align="center" style="padding:24px 12px;">

      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#FFFFFF;">

        <tr>
          <td bgcolor="#281010" style="background-color:#281010;padding:26px 32px;">
            <span style="font-family:${SERIF};font-size:19px;font-weight:bold;color:#FAF6EF;letter-spacing:0.06em;">FORGE FRANCHISING GROUP</span>
          </td>
        </tr>

        <tr>
          <td style="padding:36px 32px 0 32px;">
            <h1 style="margin:0 0 8px 0;font-family:${SERIF};font-size:28px;line-height:1.2;color:#281010;font-weight:bold;">Engagement Confirmed</h1>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="56"><tr><td height="3" bgcolor="#F87000" style="background-color:#F87000;font-size:0;line-height:0;">&nbsp;</td></tr></table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px 0 32px;font-family:${SANS};font-size:15px;line-height:1.65;color:#55504C;">
            Cody, thank you for selecting your engagement with Forge Franchising Group. Your selection has been recorded and our team has been notified. This message confirms what you selected and what happens next.
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px 0 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FAF6EF" style="background-color:#FAF6EF;">
              ${detailRows
                .map(
                  ([label, value], i) => `
              <tr>
                <td width="140" style="padding:14px 16px;font-family:${SANS};font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#8A827C;${
                  i < detailRows.length - 1 ? 'border-bottom:1px solid #E5DED2;' : ''
                }" valign="top">${escapeHtml(label)}</td>
                <td style="padding:14px 16px;font-family:${SANS};font-size:15px;color:#281010;font-weight:bold;${
                  i < detailRows.length - 1 ? 'border-bottom:1px solid #E5DED2;' : ''
                }" valign="top">${escapeHtml(value)}</td>
              </tr>`
                )
                .join('')}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:36px 32px 0 32px;">
            <h2 style="margin:0 0 4px 0;font-family:${SERIF};font-size:19px;line-height:1.3;color:#281010;font-weight:bold;">What Happens Next</h2>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="40"><tr><td height="2" bgcolor="#F87000" style="background-color:#F87000;font-size:0;line-height:0;">&nbsp;</td></tr></table>
          </td>
        </tr>

        <tr>
          <td style="padding:8px 32px 0 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${NEXT_STEPS.map(
                ([title, body], i) => `
              <tr>
                <td width="30" valign="top" style="padding:16px 0 16px 0;font-family:${SERIF};font-size:17px;font-weight:bold;color:#F87000;${
                  i < NEXT_STEPS.length - 1 ? 'border-bottom:1px solid #E5DED2;' : ''
                }">${i + 1}.</td>
                <td valign="top" style="padding:16px 0 16px 0;font-family:${SANS};font-size:15px;line-height:1.6;color:#55504C;${
                  i < NEXT_STEPS.length - 1 ? 'border-bottom:1px solid #E5DED2;' : ''
                }">
                  <span style="color:#281010;font-weight:bold;">${escapeHtml(title)}.</span> ${escapeHtml(body)}
                </td>
              </tr>`
              ).join('')}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px 0 32px;font-family:${SANS};font-size:15px;line-height:1.65;color:#55504C;">
            If anything needs clarifying before the agreement arrives, reply to this message or write to <a href="mailto:${CONTACT_EMAIL}" style="color:#F87000;text-decoration:none;">${CONTACT_EMAIL}</a>.
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px 36px 32px;font-family:${SANS};font-size:15px;line-height:1.7;color:#281010;">
            Robert Reyna<br />
            Forge Franchising Group<br />
            <a href="https://forgefranchising.com" style="color:#F87000;text-decoration:none;">forgefranchising.com</a>
          </td>
        </tr>

        <tr>
          <td style="padding:0 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td height="1" bgcolor="#E5DED2" style="background-color:#E5DED2;font-size:0;line-height:0;">&nbsp;</td></tr></table>
          </td>
        </tr>

        <tr>
          <td style="padding:20px 32px 32px 32px;font-family:${SANS};font-size:11px;line-height:1.6;color:#8A827C;">
            ${escapeHtml(DISCLAIMER)}
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
</body>
</html>`
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
    'Robert Reyna',
    'Forge Franchising Group',
    'forgefranchising.com',
    '',
    '---',
    DISCLAIMER,
  ].join('\n')
}
