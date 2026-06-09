import Link from 'next/link'
import { MISSION_STATEMENT } from '@/lib/constants'

const footerLinks = {
  Services: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable' },
  ],
  Industries: [
    { label: 'Restaurants & Food', href: '/industries/restaurants' },
    { label: 'Salons & Beauty', href: '/industries/salons-beauty' },
    { label: 'Fitness & Gyms', href: '/industries/fitness' },
    { label: 'Home Services', href: '/industries/home-services' },
    { label: 'All Industries', href: '/industries' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Franchise Glossary', href: '/glossary' },
    { label: 'Franchise Laws by State', href: '/franchise-laws' },
    { label: 'Franchise Calculator', href: '/calculator' },
    { label: 'Financing Options', href: '/financing' },
    { label: 'FAQ', href: '/faq' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="font-display font-bold text-2xl tracking-tight mb-6">
              <span className="text-cream">Forge</span>{' '}
              <span className="text-amber">Franchising</span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-md">
              {MISSION_STATEMENT}
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-cream text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Forge Franchising Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-cream/40 hover:text-cream/60 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-cream/40 hover:text-cream/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
