/**
 * PageTOC: sticky table of contents for long service and pillar pages.
 *
 * Renders as a sticky sidebar on large screens and as a collapsible
 * disclosure above the content on small screens. Plain anchors, so it
 * works without JavaScript.
 */

type TOCItem = {
  id: string
  label: string
}

export function PageTOC({ items, title = 'On This Page' }: { items: TOCItem[]; title?: string }) {
  const list = (
    <ol className="space-y-1">
      {items.map((item, i) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="flex gap-3 py-1.5 text-sm text-steel hover:text-accent transition-colors leading-snug"
          >
            <span className="text-accent font-semibold tabular-nums flex-shrink-0 w-5">{i + 1}</span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <>
      <details className="lg:hidden mb-10 bg-stone p-5" style={{ borderRadius: '0px' }}>
        <summary className="cursor-pointer font-semibold text-graphite text-sm uppercase tracking-widest min-h-[44px] flex items-center">
          {title}
        </summary>
        <nav aria-label={title} className="mt-3">
          {list}
        </nav>
      </details>
      <nav aria-label={title} className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="eyebrow mb-4">{title}</p>
        {list}
      </nav>
    </>
  )
}
