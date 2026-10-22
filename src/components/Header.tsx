'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'

type Panel = { eyebrow: string; heading: string; body: string; cta: string; href: string }

const assessmentPanel: Panel = {
  eyebrow: 'Get Started',
  heading: 'See if your business qualifies',
  body: 'Take our free assessment and get a clear, honest answer in under five minutes.',
  cta: 'Take the Assessment',
  href: '/is-my-business-franchisable',
}

/** Feature panel shown beside each mega menu group. */
const panels: Record<string, Panel> = {
  'Franchise Your Business': assessmentPanel,
  'Sell or Buy a Business': {
    eyebrow: 'Selling a Business',
    heading: 'Start with how buyers will read your numbers',
    body: 'Request a broker opinion of value. It is not a certified appraisal, and it is the basis for pricing a sale.',
    cta: 'Request an Opinion of Value',
    href: '/business-valuation#inquiry',
  },
  'Buy a Franchise': {
    eyebrow: 'Franchise Buyers',
    heading: 'Evaluate a brand before you sign',
    body: 'Read the FDD with a team that builds franchise systems, then validate with current and former franchisees.',
    cta: 'Get Help Evaluating a Franchise',
    href: '/buy-a-franchise#inquiry',
  },
  Resources: assessmentPanel,
  Company: {
    eyebrow: 'Franchise Opportunity',
    heading: 'Build a franchise consulting business',
    body: 'Work from home. Two income streams. $15,000 franchise fee. Limited territories.',
    cta: 'Apply Now',
    href: '/own-a-franchise/apply',
  },
}

const groupFor = (label: string) => NAV_LINKS.find((g) => g.label === label)

const menuKeys = NAV_LINKS.map((g) => g.label)

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

  /* Homepage: transparent over the hero until scrolled. Everywhere else: solid graphite. */
  const isTransparent = isHome && !scrolled && !openPanel

  /* The nav group that owns the current page, for the active underline. */
  const activeKey = (() => {
    if (!pathname || pathname === '/') return null
    let best: { key: string; len: number } | null = null
    for (const group of NAV_LINKS) {
      for (const link of group.links) {
        const match = pathname === link.href || pathname.startsWith(link.href + '/')
        if (match && (!best || link.href.length > best.len)) best = { key: group.label, len: link.href.length }
      }
    }
    return best?.key ?? null
  })()

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 safe-top ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-graphite shadow-sm'
        }`}
        style={isTransparent ? {} : { borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
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
                src="/forge-franchising-logo-white.png"
                alt="Forge Franchising Group logo"
                width={232}
                height={112}
                className={`transition-all duration-300 ${
                  scrolled ? 'h-14 w-auto' : 'h-16 w-auto'
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
                    className={`relative px-2.5 xl:px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                      openPanel === key || activeKey === key ? 'text-white' : 'text-white/75 hover:text-white'
                    }`}
                    aria-expanded={openPanel === key}
                    aria-haspopup="true"
                    onKeyDown={(e) => handleKeyDown(e, key)}
                  >
                    {activeKey === key && (
                      <span className="absolute left-2.5 right-2.5 xl:left-4 xl:right-4 -bottom-0.5 h-0.5 bg-ember" aria-hidden="true" />
                    )}
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
            <div className="hidden xl:flex items-center">
              <Link href="/contact" className="btn-primary text-sm py-3 px-6">
                Book a Free Call
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95 transition-transform text-white"
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
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-ash-tint/30 shadow-lg z-50"
            onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current) }}
            onMouseLeave={handleMouseLeave}
            role="menu"
          >
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                  <p className="eyebrow mb-6">{openPanel}</p>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                    {groupFor(openPanel)?.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group block py-3 active:opacity-70"
                        onClick={() => setOpenPanel(null)}
                        role="menuitem"
                      >
                        <span className="text-sm font-semibold text-graphite group-hover:text-accent transition-colors">
                          {link.label}
                        </span>
                        <span className="block text-xs text-steel mt-0.5">
                          {link.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="col-span-4">
                  {(() => {
                    const panel = panels[openPanel] ?? assessmentPanel
                    return (
                      <div className="bg-graphite p-8 h-full flex flex-col justify-between">
                        <div>
                          <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                            {panel.eyebrow}
                          </p>
                          <h3 className="font-display font-bold text-xl text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
                            {panel.heading}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed mb-6">
                            {panel.body}
                          </p>
                        </div>
                        <Link
                          href={panel.href}
                          className="btn-primary text-sm py-3 text-center w-full"
                          onClick={() => setOpenPanel(null)}
                        >
                          {panel.cta}
                        </Link>
                      </div>
                    )
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Desktop mega menu overlay */}
      {openPanel && (
        <div
          className={`hidden lg:block fixed inset-0 bg-graphite/20 z-40 menu-overlay ${openPanel ? 'active' : ''}`}
          style={{ top: scrolled ? '64px' : '80px' }}
          onClick={() => setOpenPanel(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col safe-top"
          style={{ height: '100dvh' }}
        >
          <div className="flex items-center justify-between px-4 h-20 flex-shrink-0" style={{ borderBottom: '1px solid rgba(28, 31, 35, 0.06)' }}>
            <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image
                src="/forge-franchising-logo.png"
                alt="Forge Franchising Group logo"
                width={200}
                height={96}
                className="h-14 w-auto"
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-graphite min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 overscroll-contain">
            {menuKeys.map((key) => (
              <div key={key} style={{ borderBottom: '1px solid rgba(28, 31, 35, 0.06)' }}>
                <button
                  type="button"
                  onClick={() => setMobileAccordion(mobileAccordion === key ? null : key)}
                  className="w-full flex items-center justify-between py-4 text-left min-h-[52px] active:opacity-70 transition-opacity"
                  aria-expanded={mobileAccordion === key}
                >
                  <span className="text-lg font-display font-semibold text-graphite">{key}</span>
                  <svg
                    className={`w-5 h-5 text-steel transition-transform duration-200 ${
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
                    {groupFor(key)?.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 min-h-[44px] active:opacity-70 transition-opacity"
                      >
                        <span className="text-base font-medium text-graphite">{link.label}</span>
                        <span className="block text-sm text-steel mt-0.5">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 px-4 pb-6 pt-4 safe-bottom" style={{ borderTop: '1px solid rgba(28, 31, 35, 0.06)' }}>
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
