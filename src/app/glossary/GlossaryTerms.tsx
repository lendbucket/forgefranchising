'use client'

import { useState } from 'react'
import { sentenceCase } from '@/lib/text'

/**
 * GlossaryTerms: Progressive disclosure for the glossary.
 *
 * Psychology: Showing 40+ full definitions at once creates a wall of text
 * that triggers cognitive overload and immediate exits. Expandable terms
 * show the term name (scannable), let the visitor pick what they care about,
 * and reveal depth on demand. This respects attention budgets while keeping
 * all content accessible (no content removed, just re-sequenced).
 *
 * Layout: each letter group is a hairline row list under a graphite rule.
 * Term names feed the DefinedTermSet schema, so only the visible text is
 * sentence cased.
 */

type GlossaryTerm = {
  term: string
  slug: string
  definition: string
  whyItMatters: string
}

/** Words inside term names that keep their capitals. */
const TERM_KEEP = ['Discovery', 'Day']

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
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
        <div key={letter} id={`letter-${letter}`} className="mb-16 last:mb-0 max-[720px]:mb-12 scroll-mt-[160px]">
          <span
            className="block font-display text-[44px] font-bold leading-none text-graphite mb-6"
            style={{ letterSpacing: '-0.05em' }}
          >
            {letter}
          </span>
          <div className="border-t border-graphite">
            {grouped[letter].map((term) => {
              const isOpen = openItems.has(term.slug)
              return (
                <article
                  key={term.slug}
                  id={term.slug}
                  className="scroll-mt-[160px] border-b border-line"
                >
                  <button
                    type="button"
                    onClick={() => toggle(term.slug)}
                    className="flex items-center justify-between gap-6 w-full text-left py-6 min-h-[64px]"
                    aria-expanded={isOpen}
                  >
                    <h2
                      className="font-display !text-xl max-[720px]:!text-lg font-bold !leading-[1.25] text-graphite"
                      style={{ letterSpacing: '-0.015em' }}
                    >
                      {sentenceCase(term.term, TERM_KEEP)}
                    </h2>
                    <PlusIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="pb-8 pr-12 max-[720px]:pr-0">
                      <p className="text-steel text-[17px] leading-relaxed mb-6">{term.definition}</p>
                      <div className="border-l-2 border-graphite pl-5">
                        <p className="text-sm font-semibold text-graphite mb-1">
                          Why this matters for your franchise:
                        </p>
                        <p className="text-steel text-[15px] leading-relaxed">
                          {term.whyItMatters}
                        </p>
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
