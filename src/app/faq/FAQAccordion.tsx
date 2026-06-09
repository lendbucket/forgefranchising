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
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.name}>
          <h2 className="heading-3 mb-6">{category.name}</h2>
          <div className="space-y-3">
            {category.questions.map((item, qi) => {
              const key = `${category.name}-${qi}`
              const isOpen = openItems.has(key)

              return (
                <div key={key} className="card !p-0 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    className="flex items-center justify-between gap-4 w-full text-left px-6 py-5 hover:bg-cream/50 transition-colors min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-espresso pr-4">{item.question}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-espresso/10 pt-4">
                        <p className="text-muted-brown leading-relaxed">{item.answer}</p>
                      </div>
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
