'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { stickyFor } from '@/lib/cta'

/**
 * Mobile sticky call to action (under 720px only).
 *
 * Appears once the visitor has scrolled past the hero. Steps aside whenever
 * a form or the footer is on screen, or a form field has focus, so it never
 * covers form fields or the footer disclaimer.
 */
export function StickyCTA({ text, href }: { text: string; href: string }) {
  const [pastHero, setPastHero] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [typing, setTyping] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('main section')
    const blockers = Array.from(document.querySelectorAll('main form, footer'))
    const onScreen = new Set<Element>()

    const heroObserver = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.bottom < 0)
    })
    if (hero) heroObserver.observe(hero)
    else setPastHero(true)

    const blockObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target)
        else onScreen.delete(e.target)
      }
      setBlocked(onScreen.size > 0)
    })
    blockers.forEach((el) => blockObserver.observe(el))

    const onFocus = () => {
      const el = document.activeElement
      setTyping(Boolean(el && ['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName)))
    }
    document.addEventListener('focusin', onFocus)
    document.addEventListener('focusout', onFocus)

    return () => {
      heroObserver.disconnect()
      blockObserver.disconnect()
      document.removeEventListener('focusin', onFocus)
      document.removeEventListener('focusout', onFocus)
    }
  }, [])

  if (dismissed) return null
  const visible = pastHero && !blocked && !typing

  return (
    <div
      data-sticky-cta
      aria-hidden={!visible}
      className={`min-[720px]:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-graphite safe-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="wrap py-3 flex items-center gap-2">
          <Link href={href} tabIndex={visible ? 0 : -1} data-cta-location="sticky" className="btn-primary flex-1 !min-h-[52px] !w-auto">
            {text}
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            tabIndex={visible ? 0 : -1}
            className="text-mist hover:text-white transition-colors flex items-center justify-center w-11 h-11 flex-shrink-0"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

/** The site wide bar: picks the route's primary action from src/lib/cta.ts. */
export function SiteStickyCTA() {
  const pathname = usePathname() ?? '/'
  const action = stickyFor(pathname)
  if (!action) return null
  // Keyed by path so the observers reset on client side navigation.
  return <StickyCTA key={pathname} text={action.label} href={action.href} />
}
