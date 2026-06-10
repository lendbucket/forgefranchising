'use client'

import { useState } from 'react'

/**
 * GlossaryTerms: Progressive disclosure for the glossary.
 *
 * Psychology: Showing 40+ full definitions at once creates a wall of text
 * that triggers cognitive overload and immediate exits. Expandable terms
 * show the term name (scannable), let the visitor pick what they care about,
 * and reveal depth on demand. This respects attention budgets while keeping
 * all content accessible (no content removed, just re-sequenced).
 */

type GlossaryTerm = {
  term: string
  slug: string
  definition: string
  whyItMatters: string
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-amber flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function GlossaryTerms({
  grouped,
  letters,
}: {
  grouped: Record<string, GlossaryTerm[]>
  letters: string[]
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  function toggle(slug: string) {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      return next
    })
  }

  return (
    <>
      {letters.map((letter) => (
        <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-amber">{letter}</span>
            <div className="h-px flex-1 bg-espresso/10" />
          </div>
          <div className="space-y-3">
            {grouped[letter].map((term) => {
              const isOpen = openItems.has(term.slug)
              return (
                <article
                  key={term.slug}
                  id={term.slug}
                  className="scroll-mt-24 border border-espresso/8 bg-white overflow-hidden"
                  style={{ borderRadius: '4px' }}
                >
                  <button
                    type="button"
                    onClick={() => toggle(term.slug)}
                    className="flex items-center justify-between gap-4 w-full text-left px-6 py-4 hover:bg-cream/50 transition-colors min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <h2 className="font-semibold text-espresso">{term.term}</h2>
                    <ChevronIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-espresso/10 pt-4">
                        <p className="text-muted-brown leading-relaxed mb-4">{term.definition}</p>
                        <div className="bg-deep-cream p-5" style={{ borderRadius: '4px', borderLeft: '3px solid #F87000' }}>
                          <p className="text-sm font-semibold text-espresso mb-1">
                            Why this matters for your franchise:
                          </p>
                          <p className="text-muted-brown text-sm leading-relaxed">
                            {term.whyItMatters}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
