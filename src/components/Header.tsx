'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Our Services', href: '/services' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Packages', href: '/packages' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'All Industries', href: '/industries' },
      { label: 'Restaurants & Food', href: '/industries/restaurants' },
      { label: 'Salons & Beauty', href: '/industries/salons-beauty' },
      { label: 'Fitness & Gyms', href: '/industries/fitness' },
      { label: 'Home Services', href: '/industries/home-services' },
    ],
  },
  {
    label: 'Resources',
    href: '/learn',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Franchise Glossary', href: '/glossary' },
      { label: 'Franchise Laws', href: '/franchise-laws' },
      { label: 'Calculator', href: '/calculator' },
      { label: 'Financing', href: '/financing' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-deep-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Forge Franchising Group"
              width={44}
              height={44}
              className="w-11 h-11"
              priority
            />
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-espresso">Forge</span>{' '}
              <span className="text-amber">Franchising</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-espresso/80 hover:text-espresso transition-colors rounded-lg hover:bg-deep-cream/50"
                >
                  {link.label}
                  {link.children && (
                    <svg className="inline-block ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-deep-cream/50 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-espresso/80 hover:text-espresso hover:bg-cream transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm py-3 px-6">
              Book a Free Call
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-espresso"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-deep-cream bg-cream">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-espresso hover:bg-deep-cream/50 rounded-lg"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-brown hover:text-espresso hover:bg-deep-cream/50 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center text-sm py-3"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
