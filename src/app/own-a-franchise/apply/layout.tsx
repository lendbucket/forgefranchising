import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Apply to Own a Forge Franchise',
  description: 'Submit your application to own a Forge Franchising consulting and brokerage franchise. Three steps. We review every application personally within two business days.',
  path: '/own-a-franchise/apply',
})

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
