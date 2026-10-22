/**
 * KeyTakeaways: summary panel at the top of long content. On a graphite
 * hero it renders as a raised graphite panel (see .takeaways in
 * globals.css); on light sections it sits on stone.
 */

type KeyTakeawaysProps = {
  items: string[]
  readTime?: string
}

export function KeyTakeaways({ items, readTime }: KeyTakeawaysProps) {
  return (
    <div className="takeaways mt-12 mb-2 p-8 max-[720px]:p-6" style={{ borderTop: '3px solid #E4572E' }}>
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <p className="font-display text-xl font-bold" style={{ letterSpacing: '-0.02em' }}>
          Key takeaways
        </p>
        {readTime && <span className="takeaways-meta text-sm">{readTime}</span>}
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="takeaways-item grid grid-cols-[32px_minmax(0,1fr)] py-3 text-[15px] leading-relaxed">
            <span className="font-display font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
