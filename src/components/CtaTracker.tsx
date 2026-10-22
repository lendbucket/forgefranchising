'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

/**
 * Sends a cta_click event for any link or button marked with
 * data-cta-location. One delegated listener, so server rendered call to
 * action components need no client code of their own.
 */
export function CtaTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-cta-location]')
      if (!el) return
      const href = el.getAttribute('href') ?? ''
      trackEvent('cta_click', {
        location: el.dataset.ctaLocation ?? 'unknown',
        label: (el.dataset.ctaLabel ?? el.textContent ?? '').trim().slice(0, 80),
        // Path and query only: these are site links with no visitor data.
        destination: href.startsWith('mailto:') ? 'email' : href.slice(0, 120),
        page: window.location.pathname,
      })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
