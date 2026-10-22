/**
 * FAQList: question and answer list for pages that also emit FAQPage schema.
 *
 * Uses native details elements so every answer is in the server HTML,
 * matching the FAQPage markup exactly.
 */

type FAQ = {
  question: string
  answer: string
}

export function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="card !p-0 group">
          <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 min-h-[52px] list-none [&::-webkit-details-marker]:hidden">
            <span className="font-semibold text-graphite pr-4">{faq.question}</span>
            <svg
              className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-6">
            <p className="border-t border-graphite/10 pt-4 text-steel leading-relaxed">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
