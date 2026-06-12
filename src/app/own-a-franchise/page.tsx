import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Own a Forge Franchise',
  description:
    'Build a franchise consulting and brokerage business with the Forge brand, proprietary technology, complete training, and ongoing support. Apply for a protected territory today.',
  path: '/own-a-franchise',
})

const valueStackItems = [
  {
    title: 'The Forge Brand and Reputation',
    description:
      'You launch under a recognized name in franchise development. Not a generic certificate. A brand that business owners already associate with serious franchise consulting. Learn why brand is the product in franchising.',
  },
  {
    title: 'Proprietary CRM and Software Platform',
    description:
      'Our custom-built technology handles lead management, client onboarding, project tracking, document generation, and pipeline reporting. You do not need to stitch together five different tools.',
  },
  {
    title: 'Complete Dual Training Program',
    description:
      'Full certification in both franchise consulting (helping owners franchise their business) and franchise brokerage (matching buyers with franchise brands). Two revenue streams from day one.',
  },
  {
    title: 'FDD Preparation Methodology and Templates',
    description:
      'Our proven system for building Franchise Disclosure Documents. Tested across dozens of brands and built to pass state examiner review the first time.',
  },
  {
    title: 'Lead Generation Systems',
    description:
      'Inbound marketing infrastructure, SEO assets, and referral frameworks that drive qualified prospects to your pipeline. You are not starting from zero.',
  },
  {
    title: 'Ongoing Coaching and Support',
    description:
      'Weekly group coaching, on-demand one-on-one sessions, and a private community of Forge franchise owners sharing deals, strategies, and referrals.',
  },
  {
    title: 'Low, Flat Monthly Royalties',
    description:
      'A predictable flat monthly royalty. Not a percentage of your revenue. As your income grows, your royalty stays the same. The math gets better every month.',
  },
  {
    title: 'Virtual, Work From Home Model',
    description:
      'No lease, no buildout, no storefront. Run your business from a home office, a co-working space, or a beach house. The overhead stays low.',
  },
  {
    title: 'Protected Territory',
    description:
      'Your territory is yours. No other Forge franchisee operates in your market. You own the relationships in your geography.',
  },
]

const faqItems = [
  {
    q: 'Do I need franchise industry experience to qualify?',
    a: 'No. Our training program covers everything from franchise law fundamentals to FDD preparation to brokerage sales processes. What matters more than industry experience is your professional background, your drive, and your ability to build relationships with business owners.',
  },
  {
    q: 'How long does it take to start generating revenue?',
    a: 'Most franchise owners begin prospecting during training and have their first consulting engagement within 60 to 90 days of completing certification. Brokerage commissions typically follow within 3 to 6 months, depending on your pipeline activity and territory.',
  },
  {
    q: 'What does a typical day look like?',
    a: 'You spend your time on three things: business development (meeting business owners and building referral relationships), client delivery (guiding owners through the franchise development process), and brokerage (matching qualified buyers with franchise brands). Most owners work from home and set their own schedule.',
  },
  {
    q: 'What are the ongoing costs beyond the franchise fee?',
    a: 'Your primary ongoing costs are the flat monthly royalty, a marketing fund contribution, and your own operating expenses (technology, travel, professional development). Because this is a virtual model with no inventory and no employees required to start, the overhead is dramatically lower than most franchise concepts.',
  },
  {
    q: 'Can I hire a team or bring on staff?',
    a: 'Yes. Many Forge franchise owners start as solo operators and add team members as their revenue grows. The model supports both solo practice and small team configurations.',
  },
  {
    q: 'What territories are available?',
    a: 'Territory availability changes as we award new franchises. We define territories by market size and population density. The best way to find out what is available in your area is to apply and schedule a discovery call.',
  },
  {
    q: 'Is there a minimum net worth or liquid capital requirement?',
    a: 'Yes. We require a minimum liquid capital threshold to ensure you can sustain the business through the ramp-up period. Specific requirements are disclosed during the application review process and outlined in our Franchise Disclosure Document.',
  },
  {
    q: 'What if I decide this is not for me after I start?',
    a: 'The terms of the franchise agreement, including termination and transfer provisions, are fully disclosed in our FDD before you sign anything. We encourage every candidate to review the FDD thoroughly with an attorney before making a commitment.',
  },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-muted-brown/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M14 6l-8 8" />
    </svg>
  )
}

function OfferingDisclaimer({ variant }: { variant: 'light' | 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`${isDark ? 'bg-cream/5 border-cream/10' : 'bg-espresso/5 border-espresso/10'} border px-6 py-5`}
      style={{ borderRadius: '4px' }}
    >
      <p className={`text-sm leading-relaxed ${isDark ? 'text-cream/50' : 'text-muted-brown'}`}>
        This is not an offer to sell, or the solicitation of an offer to buy, a franchise. Forge Franchising offers franchises solely by means of its Franchise Disclosure Document. Certain jurisdictions require registration or other actions before franchises can be offered or sold there. We will not offer or sell a franchise in any jurisdiction unless we are first in compliance with applicable law.
      </p>
    </div>
  )
}

function EarningsDisclaimer({ variant }: { variant: 'light' | 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`${isDark ? 'bg-cream/5 border-cream/10' : 'bg-espresso/5 border-espresso/10'} border px-6 py-5`}
      style={{ borderRadius: '4px' }}
    >
      <p className={`text-sm leading-relaxed ${isDark ? 'text-cream/50' : 'text-muted-brown'}`}>
        Any financial figures referenced on this page are illustrative and for educational purposes only. They are not a guarantee or projection of earnings. Individual results vary based on market, effort, and other factors. No financial performance representation is made by Forge Franchising except as set out in Item 19 of its Franchise Disclosure Document.
      </p>
    </div>
  )
}

export default function OwnAFranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Own a Forge Franchise',
            description:
              'Build a franchise consulting and brokerage business with the Forge brand, proprietary technology, complete training, and ongoing support.',
            url: `${SITE_URL}/own-a-franchise`,
            publisher: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-espresso overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            alt="Professional working from a modern home office"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="relative container-wide section-padding py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="eyebrow text-amber mb-4">Franchise Opportunity</p>
            <h1 className="heading-1 text-cream mb-6">
              Build a Six-Figure Franchise Consulting Business. Work From Home. Help Business Owners Scale.
            </h1>
            <p className="text-lg sm:text-xl text-cream/60 leading-relaxed mb-4 max-w-2xl">
              You are an ambitious professional who wants to own a business, not just work a job. Forge gives you the brand, the training, the technology, and the deal flow to build a consulting practice that helps business owners franchise and grow.
            </p>
            <p className="text-lg sm:text-xl text-cream/60 leading-relaxed mb-10 max-w-2xl">
              This is how you go from employee to business owner without starting from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/own-a-franchise/apply" className="btn-primary text-center">
                Apply to Own a Forge Franchise
              </Link>
            </div>
            <p className="text-cream/40 text-sm">
              Limited territories available. No franchise experience required.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERING DISCLAIMER (after hero) */}
      <section className="bg-cream">
        <div className="container-wide pt-12 pb-0 px-6 sm:px-10 lg:px-16">
          <OfferingDisclaimer variant="light" />
        </div>
      </section>

      {/* THE PROBLEM / OPPORTUNITY */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow mb-4">The Opportunity</p>
            <h2 className="heading-2 mb-6">
              An $827 Billion Industry With a Massive Talent Gap
            </h2>
            <p className="body-large mb-6">
              The franchise industry generates over $827 billion in annual output in the United States alone. It is growing every year. Business owners across every sector are looking to franchise their concepts, and buyers with capital are actively searching for the right franchise to invest in.
            </p>
            <p className="body-large">
              The problem? There are not enough qualified franchise consultants to serve this demand. Most franchise consultants are independent operators with no brand, no technology, and no structured methodology. The market is wide open for professionals who can deliver real expertise backed by a real system.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="stat-number text-amber">$827B</p>
              <p className="text-muted-brown text-sm mt-2">U.S. franchise industry annual output</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-amber">4,000+</p>
              <p className="text-muted-brown text-sm mt-2">Active franchise brands in the U.S.</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-amber">300+</p>
              <p className="text-muted-brown text-sm mt-2">New franchise brands launched each year</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET (Value Stack) */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow mb-4">What You Get</p>
            <h2 className="heading-2 mb-6">
              A Complete Business System, Not Just Training
            </h2>
            <p className="body-large">
              Most franchise consulting programs hand you a certificate and wish you luck. Forge gives you a brand, a technology platform, a proven methodology, lead generation infrastructure, and a team behind you. Here is exactly what is included.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueStackItems.map((item) => (
              <div key={item.title} className="card" style={{ borderRadius: '4px' }}>
                <h3 className="heading-4 mb-3">{item.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODEL EXPLAINED */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="heading-2 mb-6">
              Two Revenue Streams. One Business. Zero Storefronts.
            </h2>
            <p className="body-large">
              Your Forge franchise generates income from two distinct service lines. You can focus on one or pursue both. Most owners do both because the same relationships feed both pipelines.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="card" style={{ borderRadius: '4px' }}>
              <div className="bg-amber/10 w-12 h-12 flex items-center justify-center mb-4" style={{ borderRadius: '4px' }}>
                <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Franchise Consulting</h3>
              <p className="text-muted-brown leading-relaxed mb-4">
                You help business owners turn their proven concept into a franchise brand. This includes feasibility analysis, FDD preparation, operations manual development, state registration, and launch strategy. You are the expert guiding them from "I think I should franchise" to "I am legally selling franchises."
              </p>
              <p className="text-muted-brown leading-relaxed">
                Consulting engagements are project-based, typically ranging from several months to a year. You set the scope with the client and deliver using Forge methodology and templates.
              </p>
            </div>
            <div className="card" style={{ borderRadius: '4px' }}>
              <div className="bg-amber/10 w-12 h-12 flex items-center justify-center mb-4" style={{ borderRadius: '4px' }}>
                <svg className="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Franchise Brokerage</h3>
              <p className="text-muted-brown leading-relaxed mb-4">
                You match qualified buyers with franchise brands looking for new owners. When a buyer you represent signs a franchise agreement, the franchisor pays you a referral commission. You are the matchmaker between people who want to own a franchise and brands looking to grow.
              </p>
              <p className="text-muted-brown leading-relaxed">
                Brokerage is commission-based and can produce significant recurring income as you build your referral network and pipeline of qualified buyers.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card bg-deep-cream" style={{ borderRadius: '4px' }}>
              <h3 className="heading-4 mb-4">The Lifestyle</h3>
              <ul className="space-y-3">
                {[
                  'Work from home or anywhere with an internet connection',
                  'No commercial lease, no inventory, no warehousing',
                  'No employees required to start. Add team members as you grow.',
                  'Set your own schedule and take on as many clients as you want',
                  'Your income is a direct function of your effort and pipeline',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-muted-brown text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <EarningsDisclaimer variant="light" />
          </div>
        </div>
      </section>

      {/* THE FEE */}
      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-amber mb-4">The Investment</p>
            <h2 className="heading-2 text-cream mb-8">
              Everything You Need to Launch for $15,000
            </h2>
            <p className="stat-number text-amber mb-8">$15,000</p>
            <p className="text-lg text-cream/60 leading-relaxed mb-8">
              You are getting a complete business system, brand, technology, training, and ongoing support for $15,000. That is the total franchise fee. Not a down payment. Not the first installment. The entire fee.
            </p>
            <div className="card bg-cream/5 border border-cream/10 text-left mb-8" style={{ borderRadius: '4px' }}>
              <h3 className="heading-4 text-cream mb-4">Compare That to the Alternative</h3>
              <p className="text-cream/60 leading-relaxed mb-4">
                Most franchise consultant training programs charge $10,000 to $20,000 for training alone. No brand. No technology platform. No CRM. No lead generation systems. No templates. No ongoing support. No protected territory. Just a course and a certificate.
              </p>
              <p className="text-cream/60 leading-relaxed">
                With Forge, you get the training plus the brand, the tech stack, the methodology, the deal flow infrastructure, and a team that has a financial stake in your success. The $15,000 is not a course fee. It is a business acquisition.
              </p>
            </div>
            <EarningsDisclaimer variant="dark" />
            <div className="mt-8">
              <OfferingDisclaimer variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR / NOT FOR */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow mb-4">Is This You?</p>
            <h2 className="heading-2 mb-6">
              This Opportunity Is Specific. It Is Not for Everyone.
            </h2>
            <p className="body-large">
              We are selective about who we award territories to. Not because we want to be exclusive for the sake of it, but because your success determines our reputation. Here is who thrives in this model and who does not.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card" style={{ borderRadius: '4px' }}>
              <h3 className="heading-3 text-amber mb-6">Strong Fit</h3>
              <ul className="space-y-4">
                {[
                  'Driven professionals who want to own a business, not buy a job',
                  'Former executives, consultants, or corporate leaders who know how to sell and advise',
                  'People with a sales, business development, or relationship management background',
                  'Professionals who want to help business owners grow and scale',
                  'Self-starters who are comfortable working independently',
                  'People willing to invest 12 to 18 months building a pipeline before expecting consistent high income',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-muted-brown text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ borderRadius: '4px' }}>
              <h3 className="heading-3 text-muted-brown mb-6">Not a Fit</h3>
              <ul className="space-y-4">
                {[
                  'People looking for passive income or a hands-off investment',
                  'Anyone expecting guaranteed income from day one',
                  'People who are not willing to prospect, network, and build relationships',
                  'Candidates who want a fully built business with no ramp-up period',
                  'Anyone uncomfortable with a commission and project-based income model',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XIcon />
                    <span className="text-muted-brown text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / AUTHORITY */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="eyebrow mb-4">The Industry</p>
            <h2 className="heading-2 mb-6">
              Franchising Is Not Slowing Down. The Demand for Expertise Is Accelerating.
            </h2>
            <p className="body-large">
              The numbers tell the story. Franchising is one of the most proven business expansion models in the world, and the need for qualified consultants continues to outpace supply.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '800,000+', label: 'Franchise establishments in the U.S.' },
              { stat: '8.5M', label: 'Jobs created by franchise businesses' },
              { stat: '3%+', label: 'Annual franchise industry growth rate' },
              { stat: '$827B', label: 'Total franchise industry output' },
            ].map((item) => (
              <div key={item.label} className="card text-center" style={{ borderRadius: '4px' }}>
                <p className="stat-number text-amber mb-2">{item.stat}</p>
                <p className="text-muted-brown text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card" style={{ borderRadius: '4px' }}>
              <h3 className="heading-4 mb-4">Forge&apos;s Track Record</h3>
              <p className="text-muted-brown leading-relaxed mb-4">
                Forge Franchising Group has helped businesses across dozens of industries develop their franchise systems. Our methodology has been tested in restaurants, home services, fitness, beauty, healthcare, education, and more. Every template, every process, every system in your franchise was built from real engagements with real businesses.
              </p>
              <p className="text-muted-brown leading-relaxed">
                When you join Forge, you are not getting a theoretical framework. You are getting a battle-tested playbook refined through years of franchise development work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="heading-2">Franchise Opportunity FAQ</h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="card" style={{ borderRadius: '4px' }}>
                <h3 className="heading-4 mb-3">{item.q}</h3>
                <p className="text-muted-brown leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 text-cream mb-6">
            Your Territory Is Not Going to Wait for You
          </h2>
          <p className="text-lg text-cream/60 max-w-2xl mx-auto leading-relaxed mb-4">
            Every week we receive applications from professionals who want to build a franchise consulting business under the Forge brand. Territories are awarded on a first-qualified, first-committed basis. If you are serious about owning a business that helps other business owners grow, now is the time to apply.
          </p>
          <p className="text-cream/40 text-sm max-w-2xl mx-auto mb-10">
            The application takes less than five minutes. There is no commitment and no fee to apply. We will review your background and schedule a discovery call to answer every question you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/own-a-franchise/apply" className="btn-primary text-center">
              Apply to Own a Forge Franchise
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Ask a Question First
            </Link>
          </div>
          <OfferingDisclaimer variant="dark" />
        </div>
      </section>
    </>
  )
}
