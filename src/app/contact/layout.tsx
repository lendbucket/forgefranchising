import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Schedule a free franchise feasibility call with Forge Franchising Group. Tell us about your business and get a straight answer on whether franchising is right for you.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
