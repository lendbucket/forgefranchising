import Link from 'next/link'
import Image from 'next/image'
import { MISSION_STATEMENT } from '@/lib/constants'

const footerLinks = {
  'Franchise Your Business': [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable' },
    { label: 'All Industries', href: '/industries' },
  ],
  'Own a Franchise': [
    { label: 'The Opportunity', href: '/own-a-franchise' },
    { label: 'Apply Now', href: '/own-a-franchise/apply' },
    { label: 'Find Your Market', href: '/locations' },
    { label: 'Disclosures', href: '/own-a-franchise/disclosures' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Franchise Branding', href: '/franchise-branding' },
    { label: 'Franchise Glossary', href: '/glossary' },
    { label: 'Franchise Laws by State', href: '/franchise-laws' },
    { label: 'Franchise Calculator', href: '/calculator' },
    { label: 'FAQ', href: '/faq' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Financing', href: '/financing' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand column with white logo */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/forge-franchising-logo-white.png"
                alt="Forge Franchising Group franchise development company logo"
                width={200}
                height={54}
                className="h-14 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed max-w-md">
              {MISSION_STATEMENT}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-cream text-xs uppercase tracking-widest mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/50 hover:text-amber transition-colors"
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
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(250, 246, 239, 0.06)' }}>
          <p className="text-cream/25 text-xs leading-relaxed max-w-4xl">
            This website is not an offer to sell, or the solicitation of an offer to buy, a franchise.
            Forge Franchising offers franchises solely by means of its Franchise Disclosure Document.
            Certain jurisdictions require registration or other actions before franchises can be offered
            or sold there. We will not offer or sell a franchise in any jurisdiction unless we are first
            in compliance with applicable law.
          </p>
        </div>

        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid rgba(250, 246, 239, 0.08)' }}>
          <p className="text-cream/30 text-sm">
            &copy; {new Date().getFullYear()} Forge Franchising Group. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-sm text-cream/30 hover:text-cream/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-cream/30 hover:text-cream/50 transition-colors">
              Terms
            </Link>
            <Link href="/own-a-franchise/disclosures" className="text-sm text-cream/30 hover:text-cream/50 transition-colors">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
