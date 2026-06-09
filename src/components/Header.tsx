'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const megaMenu = {
  Services: {
    links: [
      { label: 'How It Works', href: '/how-it-works', desc: 'Our four-phase franchise development process' },
      { label: 'The Process', href: '/services', desc: 'Seven core services under one roof' },
      { label: 'Packages', href: '/packages', desc: 'Engagement tiers for every stage' },
      { label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable', desc: 'Free five-minute assessment' },
      { label: 'Franchise Calculator', href: '/calculator', desc: 'Model your franchise economics' },
      { label: 'Financing', href: '/financing', desc: 'Funding options for franchise development' },
    ],
  },
  Industries: {
    links: [
      { label: 'All Industries', href: '/industries', desc: 'Every sector we serve' },
      { label: 'Restaurants & Food', href: '/industries/restaurants', desc: 'Franchise your restaurant concept' },
      { label: 'Salons & Beauty', href: '/industries/salons-beauty', desc: 'Scale your salon or med spa' },
      { label: 'Fitness & Gyms', href: '/industries/fitness', desc: 'Build a national fitness brand' },
      { label: 'Home Services', href: '/industries/home-services', desc: 'Replicate your home services model' },
      { label: 'Health & Medical', href: '/industries/health-medical', desc: 'Franchise healthcare services' },
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

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-cream/97 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-sm' : ''
        }`}
        style={{ borderBottom: '1px solid rgba(40, 16, 16, 0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo - image only, no text wordmark */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Forge Franchising Group"
                width={220}
                height={60}
                className={`transition-all duration-300 ${
                  scrolled ? 'h-9 w-auto' : 'h-11 w-auto'
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
                      openPanel === key ? 'text-espresso' : 'text-espresso/70 hover:text-espresso'
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
              className="lg:hidden p-2 text-espresso min-w-[44px] min-h-[44px] flex items-center justify-center"
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
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-deep-cream/30 shadow-lg z-50"
            onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current) }}
            onMouseLeave={handleMouseLeave}
            role="menu"
          >
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-12 gap-8">
                {/* Menu links */}
                <div className="col-span-8">
                  <p className="eyebrow mb-6">{openPanel}</p>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                    {megaMenu[openPanel as keyof typeof megaMenu].links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group block py-3"
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

                {/* Featured CTA card */}
                <div className="col-span-4">
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
          {/* Mobile header */}
          <div className="flex items-center justify-between px-4 h-20 flex-shrink-0" style={{ borderBottom: '1px solid rgba(40, 16, 16, 0.06)' }}>
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo.png"
                alt="Forge Franchising Group"
                width={180}
                height={48}
                className="h-9 w-auto"
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {menuKeys.map((key) => (
              <div key={key} style={{ borderBottom: '1px solid rgba(40, 16, 16, 0.06)' }}>
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === key ? null : key)}
                  className="w-full flex items-center justify-between py-4 text-left min-h-[52px]"
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
                        className="block py-3 min-h-[44px] flex items-start"
                      >
                        <div>
                          <span className="text-base font-medium text-espresso">{link.label}</span>
                          <span className="block text-sm text-muted-brown/70 mt-0.5">{link.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fixed bottom CTA */}
          <div className="flex-shrink-0 px-4 pb-6 pt-4 safe-bottom" style={{ borderTop: '1px solid rgba(40, 16, 16, 0.06)' }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center text-base py-4 block"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
