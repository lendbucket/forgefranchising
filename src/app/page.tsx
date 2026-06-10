import type { Viewport } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { GuidedPath } from '@/components/GuidedPath'
import { HomeClient } from '@/components/HomeClient'
import { CredibilityBand } from '@/components/CredibilityBand'

export const metadata = createMetadata({
  title: 'Franchise Your Proven Business',
  description:
    'Forge Franchising helps profitable business owners turn their proven concept into a scalable franchise brand. Feasibility, FDD, operations, and franchise sales under one roof.',
  path: '',
})

export const viewport: Viewport = {
  themeColor: '#281010',
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
      {/* HERO: Full-bleed with centered logo, transparent header overlays this */}
      <section
        className="relative bg-espresso overflow-hidden dark-depth"
        style={{ marginTop: 'calc(-5rem - env(safe-area-inset-top, 0px))' }}
      >
        {/* Background image: desktop right split */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-y-0 right-0 w-1/2 hero-image-warm">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
              alt="Forge Franchising team planning a franchise development strategy in a modern office"
              fill
              className="object-cover hero-image-breathe"
              priority
              sizes="50vw"
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-espresso via-espresso/70 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-1/2 mix-blend-multiply bg-amber/20" />
        </div>

        {/* Background image: mobile subtle overlay */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=75"
            alt="Forge Franchising franchise development consulting session"
            fill
            className="object-cover opacity-15 hero-image-breathe"
            priority
            sizes="100vw"
          />
        </div>

        {/* Safe area spacer so content clears the status bar */}
        <div className="relative z-10 safe-top" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28 lg:pb-16">
          {/* Centered animated logo: mobile and tablet only */}
          <div className="flex justify-center mb-8 sm:mb-10 lg:hidden">
            <Image
              src="/forge-franchising-logo-white.png"
              alt="Forge Franchising Group, franchise development and consulting company"
              width={400}
              height={108}
              className="h-24 sm:h-28 w-auto hero-logo-animate"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Hero copy: centered on mobile, left-aligned on desktop */}
          <div className="max-w-3xl lg:max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="heading-1 text-cream mb-6 text-balance hero-entrance hero-entrance-2">
              You Built a Business Worth Replicating. Now Build the System That Does It.
            </h1>
            <p className="text-lg sm:text-xl text-cream/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 hero-entrance hero-entrance-3">
              Forge turns profitable, owner-operated businesses into franchise brands that grow on other people's capital, in other people's markets, under your name.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-entrance hero-entrance-4">
              <Link href="/is-my-business-franchisable" className="btn-primary text-lg py-5 px-10">
                Get Your Free Readiness Score
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-cream/20 text-cream font-semibold hover:bg-cream hover:text-espresso transition-all duration-200 text-lg active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-2"
                style={{ borderRadius: '3px' }}
              >
                See the Process
              </Link>
            </div>
            <p className="text-cream/35 text-sm mt-4 hero-entrance hero-entrance-4 text-center lg:text-left">
              Two minutes. Eight questions. No sales pitch.
            </p>
          </div>
        </div>

        {/* Credibility stat band */}
        <CredibilityBand />
      </section>

      {/* Client-side interactive sections */}
      <HomeClient phases={phases} industries={industries} />

      {/* Guided learning path */}
      <GuidedPath
        heading="New to Franchising? Start Here."
        subheading="Five steps, each one building on the last. By the end you will know whether franchising fits your business and exactly what the path forward looks like."
        steps={[
          { step: 1, title: 'Find out if your business qualifies', description: 'Eight questions, two minutes, and you will know where you stand.', href: '/is-my-business-franchisable', time: '2 min' },
          { step: 2, title: 'Understand the four phases', description: 'See how a proven business becomes a franchise brand, step by step.', href: '/how-it-works', time: '5 min read' },
          { step: 3, title: 'Model your franchise economics', description: 'Plug in your numbers and see projected royalty income at 10, 25, or 50 units.', href: '/calculator', time: '3 min' },
          { step: 4, title: 'Read the complete franchise guide', description: 'Feasibility through FDD filing and first franchise sale, all in one guide.', href: '/blog/how-to-franchise-your-business', time: '14 min read' },
          { step: 5, title: 'Book your free feasibility call', description: 'Talk to our team. We will tell you honestly whether franchising is the right move.', href: '/contact', time: '30 min call' },
        ]}
      />

      {/* Continue Learning */}
      <ContinueLearning
        heading="Explore by Topic"
        links={[
          { label: 'What Does It Actually Cost?', href: '/blog/cost-to-franchise-a-business', description: 'Real numbers on franchise development investment and what drives the price.' },
          { label: 'Franchise Laws by State', href: '/franchise-laws', description: 'Registration states, filing states, and what each one requires before you sell.' },
          { label: 'Browse All Industries', href: '/industries', description: 'How franchising works in restaurants, salons, fitness, home services, and more.' },
        ]}
      />

      {/* Final CTA */}
      <SectionCTA
        heading="See What Your Business Looks Like as a Franchise"
        body="Take our two-minute assessment and get a franchise readiness score with specific recommendations for your business. No cost, no obligation."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or model your franchise economics with our calculator"
        secondaryHref="/calculator"
      />
    </>
  )
}
