'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * StickyCTA: Context-aware sticky call-to-action bar.
 *
 * Psychology: Isolation effect (Von Restorff) makes this single CTA
 * visually distinct from the page. Appears only after the visitor
 * has consumed value (scrolled past hero), so the ask follows the give.
 * Placement at a natural decision point, not on load.
 */

type StickyCTAProps = {
  text: string
  href: string
  /** Show after scrolling this many pixels (default 600) */
  showAfter?: number
}

export function StickyCTA({ text, href, showAfter = 600 }: StickyCTAProps) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function onScroll() {
      if (dismissed) return
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      setVisible(window.scrollY > showAfter && !atBottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [showAfter, dismissed])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-espresso/95 backdrop-blur-sm safe-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <p className="text-cream/80 text-sm hidden sm:block flex-1">{text}</p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={href}
              className="btn-primary text-sm py-2.5 px-6 flex-1 sm:flex-initial text-center"
            >
              {text}
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="text-cream/40 hover:text-cream/70 transition-colors p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Dismiss"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
