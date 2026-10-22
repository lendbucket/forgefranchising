import Link from 'next/link'
import Image from 'next/image'
import {
  MISSION_STATEMENT,
  CONTACT_EMAIL,
  BROKER_LICENSE_DISCLOSURE,
  TREC_IABS_URL,
  TREC_CPN_URL,
  NAV_LINKS,
} from '@/lib/constants'

/** Footer only links, added to the end of the matching nav group. */
const footerExtras: Record<string, { label: string; href: string }[]> = {
  'Franchise Your Business': [{ label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable' }],
  Company: [
    { label: 'Apply to Own a Franchise', href: '/own-a-franchise/apply' },
    { label: 'Find Your Market', href: '/locations' },
  ],
}

const footerGroups = NAV_LINKS.map((group) => ({
  label: group.label,
  links: [...group.links.map(({ label, href }) => ({ label, href })), ...(footerExtras[group.label] ?? [])],
}))

const linkClass = 'flex items-center min-h-[34px] text-sm text-fog hover:text-white transition-colors'

export function Footer() {
  return (
    <footer className="bg-graphite-deep text-fog">
      <div className="wrap pt-24 pb-10 max-[720px]:pt-[72px]">
        <div
          className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20 pb-16 mb-16 max-[720px]:mb-0"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <div>
            <Link href="/" aria-label="Forge Franchising Group home" className="inline-flex mb-5">
              <Image src="/forge-franchising-logo-white.png" alt="Forge Franchising Group" width={900} height={405} className="h-[60px] w-auto" />
            </Link>
            <p className="font-display text-[22px] font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
              Build Stronger Franchises.
            </p>
          </div>
          <div>
            <p className="text-[15px] leading-[1.75] mb-5">{MISSION_STATEMENT}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center font-semibold text-white underline decoration-ember decoration-2 underline-offset-[6px] hover:text-ember-hover transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Link columns: five across on desktop */}
        <div className="hidden min-[721px]:grid grid-cols-3 lg:grid-cols-5 gap-8">
          {footerGroups.map((group) => (
            <div key={group.label}>
              <h3 className="!font-sans !text-sm !font-semibold !tracking-normal !leading-normal text-white mb-[18px]">{group.label}</h3>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Link columns: accordions on mobile */}
        <div className="min-[721px]:hidden">
          {footerGroups.map((group) => (
            <details key={group.label} className="group" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <summary className="flex items-center justify-between min-h-[56px] cursor-pointer list-none [&::-webkit-details-marker]:hidden text-white font-semibold text-[15px]">
                {group.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <ul className="pb-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center min-h-[44px] text-[15px] text-fog hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {/* Offering disclaimer and brokerage disclosures */}
        <div className="mt-16 max-[720px]:mt-10 pt-7 text-[13px] leading-[1.75]" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p className="max-w-[940px]">
            This website is not an offer to sell, or the solicitation of an offer to buy, a franchise.
            Forge Franchising offers franchises solely by means of its Franchise Disclosure Document.
            Certain jurisdictions require registration or other actions before franchises can be offered
            or sold there. We will not offer or sell a franchise in any jurisdiction unless we are first
            in compliance with applicable law.
          </p>
          {BROKER_LICENSE_DISCLOSURE && <p className="mt-4 max-w-[940px]">{BROKER_LICENSE_DISCLOSURE}</p>}
          {TREC_IABS_URL && TREC_CPN_URL && (
            <ul className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-8">
              <li>
                <a href={TREC_IABS_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Texas Real Estate Commission Information About Brokerage Services
                </a>
              </li>
              <li>
                <a href={TREC_CPN_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Texas Real Estate Commission Consumer Protection Notice
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Forge Franchising Group. All rights reserved.</p>
          <div className="flex gap-7">
            <Link href="/privacy" className="inline-flex items-center hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex items-center hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/own-a-franchise/disclosures" className="inline-flex items-center hover:text-white transition-colors">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
