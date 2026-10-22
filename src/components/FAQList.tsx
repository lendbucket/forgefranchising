/**
 * FAQList: question and answer accordion for pages that also emit FAQPage
 * schema. Native details elements keep every answer in the server HTML,
 * matching the FAQPage markup exactly. The plus icon rotates to a cross.
 */

type FAQ = {
  question: string
  answer: string
}

export function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="border-t border-graphite">
      {faqs.map((faq) => (
        <details key={faq.question} className="group border-b border-line">
          <summary className="flex items-center justify-between gap-6 cursor-pointer py-6 min-h-[64px] list-none [&::-webkit-details-marker]:hidden">
            <span className="font-display text-xl max-[720px]:text-lg font-bold text-graphite" style={{ letterSpacing: '-0.015em' }}>
              {faq.question}
            </span>
            <PlusIcon />
          </summary>
          <div className="pb-7 pr-12 max-[720px]:pr-0">
            <p className="text-steel text-[17px] leading-relaxed">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

/** Plus that turns into a cross when its details element is open. */
export function PlusIcon() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
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
