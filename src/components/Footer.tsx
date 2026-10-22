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

const footerLinks = Object.fromEntries(
  NAV_LINKS.map((group) => [
    group.label,
    [...group.links.map(({ label, href }) => ({ label, href })), ...(footerExtras[group.label] ?? [])],
  ]),
)

export function Footer() {
  return (
    <footer className="bg-graphite text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 lg:gap-8">
          {/* Brand column with white logo */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/forge-franchising-logo-white.png"
                alt="Forge Franchising Group franchise development company logo"
                width={240}
                height={112}
                className="h-20 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              {MISSION_STATEMENT}
            </p>
            <p className="mt-6 text-sm text-white/60">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white text-xs uppercase tracking-widest mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offering disclaimer */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <p className="text-white/60 text-xs leading-relaxed max-w-4xl">
            This website is not an offer to sell, or the solicitation of an offer to buy, a franchise.
            Forge Franchising offers franchises solely by means of its Franchise Disclosure Document.
            Certain jurisdictions require registration or other actions before franchises can be offered
            or sold there. We will not offer or sell a franchise in any jurisdiction unless we are first
            in compliance with applicable law.
          </p>
          {BROKER_LICENSE_DISCLOSURE && (
            <p className="mt-4 text-white/60 text-xs leading-relaxed max-w-4xl">{BROKER_LICENSE_DISCLOSURE}</p>
          )}
          {TREC_IABS_URL && TREC_CPN_URL && (
            <ul className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-8 text-xs">
              <li>
                <a href={TREC_IABS_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline">
                  Texas Real Estate Commission Information About Brokerage Services
                </a>
              </li>
              <li>
                <a href={TREC_CPN_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline">
                  Texas Real Estate Commission Consumer Protection Notice
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Forge Franchising Group. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-sm text-white/60 hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/60 hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link href="/own-a-franchise/disclosures" className="text-sm text-white/60 hover:text-white/60 transition-colors">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
