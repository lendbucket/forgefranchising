import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { SectionCTA } from '@/components/SectionCTA'
import { HomeClient } from '@/components/HomeClient'

export const metadata = createMetadata({
  title: 'Forge Franchising Group | Turn Your Business Into a Franchise',
  description:
    'Forge Franchising Group turns proven local businesses into national franchise brands. Operator built franchise development with real experience, modern software, and a documented process.',
  path: '',
})

const phases = [
  {
    number: '01',
    title: 'Feasibility',
    description:
      'We evaluate your business model, unit economics, and market potential. You get a clear answer on whether franchising makes financial sense and a roadmap if it does.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'We build the legal and operational framework: your FDD, franchise agreement, operations manual, and franchisor entity. Everything an attorney reviews and the state regulators require.',
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'We prepare your franchise for market. Registration filings, training programs, franchise sales materials, and the systems your first franchisees need from day one.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We help you sell franchises, onboard owners, and build the infrastructure that supports 10, 50, or 100 units without losing what made the original business work.',
  },
]

const industries = [
  { name: 'Restaurants & Food', href: '/industries/restaurants' },
  { name: 'Salons & Beauty', href: '/industries/salons-beauty' },
  { name: 'Fitness & Gyms', href: '/industries/fitness' },
  { name: 'Home Services', href: '/industries/home-services' },
  { name: 'Health & Medical', href: '/industries/health-medical' },
  { name: 'Retail', href: '/industries/retail' },
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'Childcare & Education', href: '/industries/childcare-education' },
  { name: 'Cleaning', href: '/industries/cleaning' },
  { name: 'Pet Care', href: '/industries/pet-care' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80"
            alt="Business professionals in a boardroom"
            fill
            className="object-cover opacity-20 hero-image"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <p className="eyebrow mb-8">
              Franchise Development, Operator Built
            </p>
            <h1 className="heading-1 text-cream mb-8 text-balance">
              Turn Your Proven Business Into a Franchise Brand That Scales
            </h1>
            <p className="text-xl sm:text-2xl text-cream/60 leading-relaxed mb-12 max-w-2xl">
              You built a business that works. We build the system that lets other people replicate it.
              No binders. No guesswork. A documented process backed by operating experience and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg py-5 px-10">
                Book a Free Feasibility Call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-cream/20 text-cream font-semibold hover:bg-cream hover:text-espresso transition-all duration-200 text-lg"
                style={{ borderRadius: '3px' }}
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client-side interactive sections */}
      <HomeClient phases={phases} industries={industries} />

      {/* Final CTA */}
      <SectionCTA
        heading="Ready to See If Your Business Can Franchise?"
        body="Book a free feasibility call with our team. We will review your business model, your numbers, and your goals. If franchising is a fit, we will show you the exact roadmap. If it is not, we will tell you why."
        buttonText="Book Your Free Call"
        buttonHref="/contact"
      />
    </>
  )
}
