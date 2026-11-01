'use client'

import { useEffect, useState } from 'react'

/**
 * The interactive parts of a blog post: the reading progress bar and the two
 * contents navs, which highlight the section in view. Everything else in the
 * article renders on the server.
 */

export type Heading = { id: string; text: string; level: number }

/* ------------------------------------------------------------------ */
/*  Reading Progress Bar                                               */
/* ------------------------------------------------------------------ */

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(scrollPercent, 100))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-ember transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Table of Contents                                                  */
/* ------------------------------------------------------------------ */

function useActiveHeading(headings: Heading[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    )
    for (const heading of headings) {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [headings])

  return activeId
}

/** Desktop: sticky sidebar of hairline rows. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const activeId = useActiveHeading(headings)
  if (headings.length === 0) return null

  return (
    <nav aria-label="On this page" className="sticky top-header-gap max-h-[calc(100vh_-_var(--header-h)_-_48px)] overflow-y-auto">
      <p className="text-sm font-semibold text-graphite mb-3">
        On this page
      </p>
      <ul className="border-t border-line">
        {headings.map((h) => (
          <li key={h.id} className="border-b border-line">
            <a
              href={`#${h.id}`}
              aria-current={activeId === h.id ? 'location' : undefined}
              className={`flex items-center py-3 min-h-[44px] text-sm leading-snug transition-colors ${
                h.level === 3 ? 'pl-4' : ''
              } ${
                activeId === h.id
                  ? 'text-graphite font-semibold'
                  : 'text-steel hover:text-graphite'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Mobile and tablet: a horizontal, scrollable row of square chips (section headings only). */
export function TableOfContentsChips({ headings }: { headings: Heading[] }) {
  const activeId = useActiveHeading(headings)
  const sections = headings.filter((h) => h.level === 2)
  if (sections.length === 0) return null

  return (
    <nav
      aria-label="On this page"
      className="xl:hidden sticky top-header z-30 bg-white border-y border-line mb-10 [contain:inline-size]"
    >
      <ol className="flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((h) => (
          <li key={h.id} className="flex-shrink-0">
            <a
              href={`#${h.id}`}
              aria-current={activeId === h.id ? 'location' : undefined}
              className={`flex items-center min-h-[44px] px-4 border text-sm font-medium whitespace-nowrap transition-colors ${
                activeId === h.id
                  ? 'bg-graphite border-graphite text-white'
                  : 'border-line text-graphite hover:border-graphite'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}