'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const megaMenu = {
  'Franchise Your Business': {
    links: [
      { label: 'How It Works', href: '/how-it-works', desc: 'Our four-phase franchise development process' },
      { label: 'Services', href: '/services', desc: 'Seven core services under one roof' },
      { label: 'Packages', href: '/packages', desc: 'Engagement tiers for every stage' },
      { label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable', desc: 'Free readiness assessment' },
      { label: 'Franchise Calculator', href: '/calculator', desc: 'Model your franchise economics' },
      { label: 'Financing', href: '/financing', desc: 'Funding options for franchise development' },
      { label: 'Industries We Serve', href: '/industries', desc: 'Restaurants, salons, fitness, and more' },
    ],
  },
  'Own a Franchise': {
    links: [
      { label: 'The Opportunity', href: '/own-a-franchise', desc: 'Build a franchise consulting business' },
      { label: 'Apply Now', href: '/own-a-franchise/apply', desc: 'Submit your franchise application' },
      { label: 'Find Your Market', href: '/locations', desc: 'Franchise consulting by city' },
      { label: 'Important Disclosures', href: '/own-a-franchise/disclosures', desc: 'Legal notices and disclaimers' },
    ],
  },
  Resources: {
    links: [
      { label: 'Blog', href: '/blog', desc: 'Guides, case studies, and insights' },
      { label: 'Learn', href: '/learn', desc: 'Free franchise development resources' },
      { label: 'Franchise Glossary', href: '/glossary', desc: '100+ franchise terms explained' },
      { label: 'Franchise Laws by State', href: '/franchise-laws', desc: 'Registration and filing requirements' },
      { label: 'FAQ', href: '/faq', desc: 'Common questions answered' },
    ],
  },
  Company: {
    links: [
      { label: 'About Us', href: '/about', desc: 'Operator built, not consultant assembled' },
      { label: 'Contact', href: '/contact', desc: 'Book a free feasibility call' },
    ],
  },
}

const menuKeys = Object.keys(megaMenu) as (keyof typeof megaMenu)[]

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [mobileOpen, setMobileOpen] = useState(false)
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = useCallback((key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenPanel(key)
  }, [])

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenPanel(null), 150)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent, key: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpenPanel(prev => prev === key ? null : key)
    }
    if (e.key === 'Escape') {
      setOpenPanel(null)
    }
  }, [])

  /* Homepage: transparent until scrolled. All other pages: always solid cream. */
  const isTransparent = isHome && !scrolled && !openPanel

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 safe-top ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/97 backdrop-blur-md shadow-sm'
        }`}
        style={isTransparent ? {} : { borderBottom: '1px solid rgba(40, 16, 16, 0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Corner logo: hidden on mobile homepage when transparent, always visible otherwise */}
            <Link
              href="/"
              className={`flex items-center flex-shrink-0 py-1 transition-opacity duration-300 ${
                isHome && !scrolled ? 'lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto' : 'opacity-100'
              }`}
              tabIndex={isHome && !scrolled ? -1 : 0}
              aria-hidden={isHome && !scrolled ? true : undefined}
            >
              <Image
                src={isTransparent ? '/forge-franchising-logo-white.png' : '/forge-franchising-logo.png'}
                alt="Forge Franchising Group logo"
                width={220}
                height={60}
                className={`transition-all duration-300 ${
                  scrolled ? 'h-12 w-auto' : 'h-14 w-auto'
                }`}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {menuKeys.map((key) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isTransparent
                        ? (openPanel === key ? 'text-cream' : 'text-cream/70 hover:text-cream')
                        : (openPanel === key ? 'text-espresso' : 'text-espresso/70 hover:text-espresso')
                    }`}
                    aria-expanded={openPanel === key}
                    aria-haspopup="true"
                    onKeyDown={(e) => handleKeyDown(e, key)}
                  >
                    {key}
                    <svg
                      className={`inline-block ml-1 w-3 h-3 transition-transform duration-200 ${
                        openPanel === key ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link href="/contact" className="btn-primary text-sm py-3 px-6">
                Book a Free Call
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95 transition-transform ${
                isTransparent ? 'text-cream' : 'text-espresso'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Panel */}
        {openPanel && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full bg-cream border-t border-deep-cream/30 shadow-lg z-50"
            onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current) }}
            onMouseLeave={handleMouseLeave}
            role="menu"
          >
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                  <p className="eyebrow mb-6">{openPanel}</p>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                    {megaMenu[openPanel as keyof typeof megaMenu].links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group block py-3 active:opacity-70"
                        onClick={() => setOpenPanel(null)}
                        role="menuitem"
                      >
                        <span className="text-sm font-semibold text-espresso group-hover:text-amber transition-colors">
                          {link.label}
                        </span>
                        <span className="block text-xs text-muted-brown/70 mt-0.5">
                          {link.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-4">
                  {openPanel === 'Own a Franchise' ? (
                    <div className="bg-espresso rounded p-8 h-full flex flex-col justify-between">
                      <div>
                        <p className="text-amber text-xs font-semibold uppercase tracking-widest mb-3">
                          Franchise Opportunity
                        </p>
                        <h3 className="font-display font-bold text-xl text-cream mb-3" style={{ letterSpacing: '-0.02em' }}>
                          Build a franchise consulting business
                        </h3>
                        <p className="text-cream/60 text-sm leading-relaxed mb-6">
                          Work from home. Two income streams. $15,000 franchise fee. Limited territories.
                        </p>
                      </div>
                      <Link
                        href="/own-a-franchise/apply"
                        className="btn-primary text-sm py-3 text-center w-full"
                        onClick={() => setOpenPanel(null)}
                      >
                        Apply Now
                      </Link>
                    </div>
                  ) : (
                    <div className="bg-espresso rounded p-8 h-full flex flex-col justify-between">
                      <div>
                        <p className="text-amber text-xs font-semibold uppercase tracking-widest mb-3">
                          Get Started
                        </p>
                        <h3 className="font-display font-bold text-xl text-cream mb-3" style={{ letterSpacing: '-0.02em' }}>
                          See if your business qualifies
                        </h3>
                        <p className="text-cream/60 text-sm leading-relaxed mb-6">
                          Take our free assessment and get a clear, honest answer in under five minutes.
                        </p>
                      </div>
                      <Link
                        href="/is-my-business-franchisable"
                        className="btn-primary text-sm py-3 text-center w-full"
                        onClick={() => setOpenPanel(null)}
                      >
                        Take the Assessment
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Desktop mega menu overlay */}
      {openPanel && (
        <div
          className={`hidden lg:block fixed inset-0 bg-espresso/20 z-40 menu-overlay ${openPanel ? 'active' : ''}`}
          style={{ top: scrolled ? '64px' : '80px' }}
          onClick={() => setOpenPanel(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-cream flex flex-col safe-top"
          style={{ height: '100dvh' }}
        >
          <div className="flex items-center justify-between px-4 h-20 flex-shrink-0" style={{ borderBottom: '1px solid rgba(40, 16, 16, 0.06)' }}>
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/forge-franchising-logo.png"
                alt="Forge Franchising Group logo"
                width={180}
                height={48}
                className="h-12 w-auto"
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 overscroll-contain">
            {menuKeys.map((key) => (
              <div key={key} style={{ borderBottom: '1px solid rgba(40, 16, 16, 0.06)' }}>
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === key ? null : key)}
                  className="w-full flex items-center justify-between py-4 text-left min-h-[52px] active:opacity-70 transition-opacity"
                  aria-expanded={mobileAccordion === key}
                >
                  <span className="text-lg font-display font-semibold text-espresso">{key}</span>
                  <svg
                    className={`w-5 h-5 text-muted-brown transition-transform duration-200 ${
                      mobileAccordion === key ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileAccordion === key && (
                  <div className="pb-4 pl-2">
                    {megaMenu[key].links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 min-h-[44px] active:opacity-70 transition-opacity"
                      >
                        <span className="text-base font-medium text-espresso">{link.label}</span>
                        <span className="block text-sm text-muted-brown/70 mt-0.5">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 px-4 pb-6 pt-4 safe-bottom" style={{ borderTop: '1px solid rgba(40, 16, 16, 0.06)' }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center text-base py-4 block active:scale-[0.98] transition-transform"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
