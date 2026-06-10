import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Franchise Development Blog',
  description:
    'Guides, case studies, and expert insights on how to franchise your business. Covering FDDs, compliance, franchise sales, and growth strategy.',
  path: '/blog',
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
