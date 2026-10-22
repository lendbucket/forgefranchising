import type { Viewport } from 'next'
import { createMetadata } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, renderSchema } from '@/lib/schema'
import { HomeClient } from '@/components/HomeClient'

export const metadata = createMetadata({
  title: 'Franchise Development, Operator Built',
  description:
    'Franchise development for profitable owners who want a real system, not a stack of paperwork. Feasibility, FDD, operations, and franchise sales in one place.',
  path: '',
})

export const viewport: Viewport = {
  themeColor: '#1C1F23',
  viewportFit: 'cover',
}

const phases = [
  {
    number: '01',
    title: 'Feasibility',
    description:
      'We stress test your unit economics, market demand, and operational model. You get a clear yes or no and a roadmap if it is a yes.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'FDD, franchise agreement, operations manual, and franchisor entity. Built to pass state examiner review the first time.',
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'State registrations, training programs, sales materials, and the systems your first franchisees will depend on from day one.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Franchise sales, franchisee onboarding, and the support infrastructure that holds at 10, 50, or 100 locations.',
  },
]

// Line icons from design-reference/homepage-desktop.html.
const industries = [
  { name: 'Restaurants & Food', href: '/industries/restaurants', icon: 'M7 3v8M5 3v4a2 2 0 004 0V3M7 11v10M17 21V3c-2 0-3 2-3 6v3h3' },
  { name: 'Salons & Beauty', href: '/industries/salons-beauty', icon: 'M6 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM8.1 7.9L20 20M8.1 16.1L20 4' },
  { name: 'Fitness & Gyms', href: '/industries/fitness', icon: 'M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12' },
  { name: 'Home Services', href: '/industries/home-services', icon: 'M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-6h4v6' },
  { name: 'Health & Medical', href: '/industries/health-medical', icon: 'M9 3h6v6h6v6h-6v6H9v-6H3V9h6z' },
  { name: 'Retail', href: '/industries/retail', icon: 'M5 8h14l-1 13H6zM9 8V6a3 3 0 016 0v2' },
  { name: 'Automotive', href: '/industries/automotive', icon: 'M3 16v-4l2.5-5h13l2.5 5v4zM3 16v3h3v-3M18 16v3h3v-3M7 12.5h1M16 12.5h1' },
  { name: 'Childcare & Education', href: '/industries/childcare-education', icon: 'M4 4h7v7H4zM13 13h7v7h-7zM4 13h7v7H4zM13 4h7v7h-7z' },
  { name: 'Cleaning', href: '/industries/cleaning', icon: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8zM18.5 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z' },
  { name: 'Pet Care', href: '/industries/pet-care', icon: 'M8 9.5a2 2 0 100-4 2 2 0 000 4zM16 9.5a2 2 0 100-4 2 2 0 000 4zM4.5 14a2 2 0 100-4 2 2 0 000 4zM19.5 14a2 2 0 100-4 2 2 0 000 4zM12 21c-3 0-5-1.5-5-4s2.5-4 5-4 5 1.5 5 4-2 4-5 4z' },
]

export default function HomePage() {
  const pageUrl = SITE_URL

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: pageUrl,
              name: 'Franchise Your Proven Business',
              description: 'Forge Franchising helps profitable business owners turn their proven concept into a scalable franchise brand. Feasibility, FDD, operations, and franchise sales under one roof.',
            }),
          ]),
        }}
      />

      <HomeClient phases={phases} industries={industries} />
    </>
  )
}
