'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, CONTACT_EMAIL } from '@/lib/constants'
import { Arrow } from '@/components/Arrow'

/** Words that keep their capitals when a nav label is shown in sentence case. */
const KEEP_CASE = new Set(['FAQ', 'FDD', 'Forge', 'Texas'])

/** "How It Works" becomes "How it works"; proper nouns keep their case. */
function sentenceCase(label: string) {
  return label
    .split(' ')
    .map((word, i) => (i === 0 || KEEP_CASE.has(word) ? word : word.toLowerCase()))
    .join(' ')
}

function Chevron({ open, size = 10, strokeWidth = 3 }: { open: boolean; size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function Header() {
  const pathname = usePathname()
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  // Set when a menu is opened from the keyboard, so focus moves into the panel.
  const focusPanel = useRef(false)

  // Close every menu on route change.
  useEffect(() => {
    setOpenGroup(null)
    setMobileOpen(false)
  }, [pathname])

  // Escape closes the open menu; a click outside the header closes the mega menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenGroup(null)
        setMobileOpen(false)
      }
    }
    const onPointer = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenGroup(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /* The nav group that owns the current page. */
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

  const current = NAV_LINKS.find((g) => g.label === openGroup)

  useEffect(() => {
    if (openGroup && focusPanel.current) {
      document.querySelector<HTMLElement>('#mega-menu a')?.focus()
    }
    focusPanel.current = false
  }, [openGroup])
  // The open group carries the ember underline. With no menu open, the
  // group that owns the current page carries it.
  const underlined = openGroup ?? activeKey

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 bg-graphite safe-top" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="wrap flex items-center justify-between gap-6 max-[1279px]:gap-4 h-[var(--header-h)]">
          <Link href="/" aria-label="Forge Franchising Group home" className="flex flex-shrink-0 items-center">
            <Image
              src="/forge-franchising-logo-white.png"
              alt="Forge Franchising Group"
              width={900}
              height={405}
              className="h-12 min-[720px]:h-14 min-[1140px]:h-16 w-auto"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden min-[1140px]:flex items-stretch h-[var(--header-h)]">
            {NAV_LINKS.map((group) => {
              const isOpen = openGroup === group.label
              return (
                <button
                  key={group.label}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls="mega-menu"
                  onClick={() => setOpenGroup(isOpen ? null : group.label)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') focusPanel.current = true
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      setOpenGroup(group.label)
                    }
                  }}
                  className="flex items-center gap-1.5 h-full px-4 max-[1279px]:px-2.5 text-[15px] max-[1279px]:text-[14px] font-medium text-white whitespace-nowrap transition-shadow duration-200"
                  style={{ boxShadow: `inset 0 -3px 0 ${underlined === group.label ? '#E4572E' : 'transparent'}` }}
                >
                  {group.label}
                  <span className="opacity-70">
                    <Chevron open={isOpen} />
                  </span>
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              data-cta-location="header"
              className="hidden min-[720px]:inline-flex items-center justify-center min-h-[46px] px-[22px] text-sm font-semibold bg-white text-graphite hover:bg-[#ECEAE6] transition-colors"
            >
              Contact us
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="min-[1140px]:hidden flex items-center justify-center w-11 h-11 text-white"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {current && (
          <div id="mega-menu" className="hidden min-[1140px]:block absolute left-0 right-0 top-full bg-white" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.25)' }}>
            <div className="wrap grid grid-cols-12 gap-14 pt-14 pb-16">
              <div className="col-span-4 bg-graphite text-white p-9">
                <p className="font-display text-[30px] font-bold leading-[1.05] mb-3" style={{ letterSpacing: '-0.03em' }}>
                  {current.label}
                </p>
                <p className="text-[15px] leading-relaxed text-mist mb-7">{current.intro}</p>
                <Link href={current.href} className="btn-primary !min-h-[48px] !text-[15px]" onClick={() => setOpenGroup(null)}>
                  Overview
                  <Arrow />
                </Link>
              </div>
              <ul className="col-span-8 grid grid-cols-2 gap-x-10 content-start">
                {current.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpenGroup(null)}
                      className="group block py-4 text-graphite"
                      style={{ borderBottom: '1px solid #EDEBE7' }}
                    >
                      <span className="block text-base font-semibold mb-0.5 transition-colors group-hover:text-ember-text">{link.label}</span>
                      <span className="block text-sm text-steel">{link.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] bg-graphite text-white flex flex-col safe-top"
          style={{ height: '100dvh' }}
        >
          <div className="flex items-center justify-between h-[76px] px-5 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <Link href="/" aria-label="Forge Franchising Group home" className="flex items-center" onClick={() => setMobileOpen(false)}>
              <Image src="/forge-franchising-logo-white.png" alt="Forge Franchising Group" width={900} height={405} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-11 h-11"
              aria-label="Close menu"
              autoFocus
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav aria-label="Primary" className="flex-1 overflow-y-auto px-5">
            {NAV_LINKS.map((group) => {
              const isOpen = mobileGroup === group.label
              return (
                <div key={group.label} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button
                    type="button"
                    onClick={() => setMobileGroup(isOpen ? null : group.label)}
                    aria-expanded={isOpen}
                    className={`w-full flex items-center justify-between min-h-[68px] font-display text-2xl font-bold text-left transition-colors ${isOpen ? 'text-ember-hover' : 'text-white'}`}
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {sentenceCase(group.label)}
                    <Chevron open={isOpen} size={16} strokeWidth={2.5} />
                  </button>
                  {isOpen && (
                    <ul className="pb-4">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center min-h-[44px] text-base text-mist hover:text-white"
                          >
                            {sentenceCase(link.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="px-5 pt-4 pb-6 flex-shrink-0 safe-bottom">
            <Link href="/is-my-business-franchisable" onClick={() => setMobileOpen(false)} className="btn-primary w-full" data-cta-location="mobile_menu">
              Get your free readiness score
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center justify-center min-h-[44px] mt-2 text-sm text-mist hover:text-white">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

