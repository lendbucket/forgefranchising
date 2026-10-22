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
      <div className="bg-graphite safe-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="wrap py-3 flex items-center justify-between gap-4">
          <p className="text-mist text-sm hidden sm:block flex-1">{text}</p>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link href={href} className="btn-primary flex-1 sm:flex-initial !min-h-[52px] !w-auto">
              {text}
            </Link>
            <button
              onClick={() => setDismissed(true)}
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
    </div>
  )
}
