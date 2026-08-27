import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Franchise Development Blog',
  description:
    'Franchise development guides, case studies, and compliance breakdowns for owners who want to franchise a proven business. Covering FDDs, royalties, and sales.',
  path: '/blog',
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
