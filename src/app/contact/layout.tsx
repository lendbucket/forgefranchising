import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Franchise My Business: Start Here',
  description:
    'Franchise my business is the first thing owners tell us. Book a free feasibility call and get a straight answer on whether your concept is ready to franchise.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
