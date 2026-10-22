/**
 * PageTOC: table of contents for long service and pillar pages.
 *
 * Desktop: sticky sidebar list. Mobile: a horizontal, scrollable chip row
 * pinned under the header. Plain anchors, so it works without JavaScript.
 */

type TOCItem = {
  id: string
  label: string
}

export function PageTOC({ items, title = 'On this page' }: { items: TOCItem[]; title?: string }) {
  return (
    <>
      <nav
        aria-label={title}
        className="lg:hidden sticky top-header z-30 -mx-5 min-[721px]:-mx-14 mb-10 bg-white border-y border-line [contain:inline-size]"
      >
        <ol className="flex gap-2 overflow-x-auto px-5 min-[721px]:px-14 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <a
                href={`#${item.id}`}
                className="flex items-center min-h-[44px] px-4 border border-line text-sm font-medium text-graphite whitespace-nowrap hover:border-graphite transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <nav aria-label={title} className="hidden lg:block sticky top-header-gap max-h-[calc(100vh_-_var(--header-h)_-_48px)] overflow-y-auto">
        <p className="text-sm font-semibold text-graphite mb-3">{title}</p>
        <ol className="border-t border-line">
          {items.map((item, i) => (
            <li key={item.id} className="border-b border-line">
              <a
                href={`#${item.id}`}
                className="group flex gap-3 py-3 min-h-[44px] text-sm text-steel hover:text-graphite transition-colors leading-snug"
              >
                <span className="font-display font-bold text-accent tabular-nums flex-shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
