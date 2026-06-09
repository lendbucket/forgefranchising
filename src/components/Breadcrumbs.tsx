import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'

type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  return (
    <>
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
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-muted-brown">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span className="text-muted-brown/40">/</span>}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href} className="hover:text-espresso transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-espresso font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
