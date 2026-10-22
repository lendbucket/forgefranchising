'use client'

import { useState } from 'react'

type FAQItem = {
  question: string
  answer: string
}

type FAQCategory = {
  name: string
  questions: FAQItem[]
}

/** Plus that turns into a cross when its row is open. */
function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-6 h-6 flex-shrink-0 text-accent transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function FAQAccordion({ categories }: { categories: FAQCategory[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  function toggle(key: string) {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  return (
    <div className="space-y-20">
      {categories.map((category) => (
        <div key={category.name}>
          <h2 className="heading-3 mb-8">{category.name}</h2>
          <div className="border-t border-graphite">
            {category.questions.map((item, qi) => {
              const key = `${category.name}-${qi}`
              const isOpen = openItems.has(key)

              return (
                <div key={key} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    className="flex items-center justify-between gap-6 w-full text-left py-6 min-h-[64px]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl max-[720px]:text-lg font-bold text-graphite" style={{ letterSpacing: '-0.015em' }}>
                      {item.question}
                    </span>
                    <PlusIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="pb-7 pr-12 max-[720px]:pr-0">
                      <p className="text-steel text-[17px] leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
