import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'

type BreadcrumbItem = {
  label: string
  href?: string
}

/**
 * withSchema emits a standalone BreadcrumbList. Pages that already include
 * breadcrumbSchema() in their @graph pass withSchema={false} to avoid a duplicate.
 */
export function Breadcrumbs({ items, withSchema = true }: { items: BreadcrumbItem[]; withSchema?: boolean }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  return (
    <>
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: allItems.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.label,
                ...(item.href && { item: `${SITE_URL}${item.href}` }),
              })),
            }),
          }}
        />
      )}
      <nav aria-label="Breadcrumb" className="py-1">
        <ol className="flex flex-wrap items-center gap-x-2 text-sm text-steel">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-steel">/</span>}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href} className="inline-flex items-center min-h-[44px] hover:text-graphite transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-graphite font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
