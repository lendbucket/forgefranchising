import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Apply to Own a Forge Franchise',
  description:
    'Apply to own a Forge Franchising consulting and brokerage franchise. Three short steps, and we review every application personally within two business days.',
  path: '/own-a-franchise/apply',
})

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
