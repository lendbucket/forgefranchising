import { ContactRows } from '@/components/ContactRows'
import { CONTACT_EMAIL } from '@/lib/constants'

/**
 * SectionCTA: the ember contact section that closes every service and hub
 * page. It carries the page's own call to action copy, laid out like the
 * homepage contact section: heading and lead on the left, linked rows on
 * the right, with the inquiry email as the last row.
 */

type SectionCTAProps = {
  heading: string
  body: string
  buttonText?: string
  buttonHref?: string
  /** Kept for existing call sites. Every variant renders as the ember section. */
  variant?: 'dark' | 'light'
  /** Optional second row */
  secondaryText?: string
  secondaryHref?: string
}

export function SectionCTA({
  heading,
  body,
  buttonText = 'Get your free franchise readiness score',
  buttonHref = '/is-my-business-franchisable',
  secondaryText,
  secondaryHref,
}: SectionCTAProps) {
  const rows = [
    { title: buttonText, href: buttonHref },
    ...(secondaryText && secondaryHref ? [{ title: secondaryText, href: secondaryHref }] : []),
    { title: CONTACT_EMAIL, desc: 'Write to us directly.', href: `mailto:${CONTACT_EMAIL}` },
  ]
  return <ContactRows heading={heading} body={body} rows={rows} id="get-started" />
}
