/**
 * KeyTakeaways: Summary box shown at the top of long content.
 *
 * Psychology: Chunking (Miller's law) breaks complex content into
 * scannable pieces. A skimmer gets value in 10 seconds, which builds
 * enough interest to keep reading (the curiosity gap between the
 * summary and the full explanation). Also reduces cognitive load
 * by setting expectations for what the page covers.
 */

type KeyTakeawaysProps = {
  items: string[]
  readTime?: string
}

export function KeyTakeaways({ items, readTime }: KeyTakeawaysProps) {
  return (
    <div
      className="bg-deep-cream p-6 sm:p-8 mb-10"
      style={{ borderRadius: '4px', borderLeft: '3px solid #F87000' }}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="eyebrow">Key Takeaways</p>
        {readTime && (
          <span className="text-xs text-muted-brown/60">{readTime}</span>
        )}
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <svg className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-espresso leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
