import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { MidCTA } from '@/components/MidCTA'

export const metadata = createMetadata({
  title: 'Own a Forge Franchise',
  description:
    'Own a Forge franchise consulting and brokerage business. A defined territory, proprietary technology, complete training, and ongoing support from operators.',
  path: '/own-a-franchise',
})

/** IFA 2026 Franchising Economic Outlook, released February 19, 2026. */
const IFA_OUTLOOK_URL = 'https://www.franchise.org/franchising-economic-outlook/'

const valueStackItems = [
  {
    title: 'The Forge brand and reputation',
    description:
      'You launch under the Forge brand, not a generic certificate. Learn why brand is the product in franchising.',
  },
  {
    title: 'Proprietary CRM and software platform',
    description:
      'Our custom-built technology handles lead management, client onboarding, project tracking, document generation, and pipeline reporting. You do not need to stitch together five different tools.',
  },
  {
    title: 'Complete dual training program',
    description:
      'Full certification in both franchise consulting (helping owners franchise their business) and franchise brokerage (matching buyers with franchise brands).',
  },
  {
    title: 'The Forge Franchise Readiness Method',
    description:
      'Our proprietary four-pillar assessment framework that evaluates profitability, systems, brand, and replicability before any franchise development begins. You deliver this methodology to your consulting clients.',
  },
  {
    title: 'Lead generation systems',
    description:
      'Inbound marketing infrastructure, SEO assets, and referral frameworks.',
  },
  {
    title: 'Ongoing coaching and support',
    description:
      'Weekly group coaching, on-demand one-on-one sessions, and a private network where Forge franchise owners can share deals, strategies, and referrals.',
  },
  {
    title: 'Low, flat monthly royalties',
    description:
      'A predictable flat monthly royalty. Not a percentage of your revenue.',
  },
  {
    title: 'Virtual, work from home model',
    description:
      'No lease, no buildout, no storefront. Run your business from a home office, a co-working space, or a beach house. The overhead stays low.',
  },
  {
    title: 'A defined territory',
    description:
      'Territories are defined in the Franchise Disclosure Document.',
  },
]

const faqItems = [
  {
    q: 'Do I need franchise industry experience to qualify?',
    a: 'No. Our training program covers everything from franchise law fundamentals to FDD preparation to brokerage sales processes. What matters more than industry experience is your professional background, your drive, and your ability to build relationships with business owners.',
  },
  {
    q: 'How long does it take to start generating revenue?',
    a: 'There is no set timeline, and revenue is not guaranteed. When revenue starts depends on your market, your pipeline, and your own activity. After certification, Forge supports you with weekly group coaching and on-demand one-on-one sessions, the Forge CRM and software platform, the lead generation systems, the Forge Franchise Readiness Method and templates for client work, and a private network where Forge franchise owners can share deals, strategies, and referrals.',
  },
  {
    q: 'What does a typical day look like?',
    a: 'You spend your time on three things: business development (meeting business owners and building referral relationships), client delivery (guiding owners through the franchise development process), and brokerage (matching qualified buyers with franchise brands). The business can be run from a home office, and owners set their own schedule.',
  },
  {
    q: 'What are the ongoing costs beyond the franchise fee?',
    a: 'Your primary ongoing costs are the flat monthly royalty, a marketing fund contribution, and your own operating expenses (technology, travel, professional development). Because this is a virtual model with no inventory and no employees required to start, it carries lower overhead than a traditional office based firm.',
  },
  {
    q: 'Can I hire a team or bring on staff?',
    a: 'Yes. An owner can start as a solo operator and add team members over time. The model supports both solo practice and small team configurations.',
  },
  {
    q: 'What territories are available?',
    a: 'Territories are defined in the Franchise Disclosure Document. You can ask about a specific area during a discovery call.',
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
    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="w-5 h-5 text-steel flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M14 6l-8 8" />
    </svg>
  )
}

function OfferingDisclaimer({ variant }: { variant: 'light' | 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`${isDark ? 'border-white/15' : 'border-line'} border px-6 py-5`}
    >
      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-steel'}`}>
        This is not an offer to sell, or the solicitation of an offer to buy, a franchise. Forge Franchising offers franchises solely by means of its Franchise Disclosure Document. Certain jurisdictions require registration or other actions before franchises can be offered or sold there. We will not offer or sell a franchise in any jurisdiction unless we are first in compliance with applicable law.
      </p>
    </div>
  )
}

function EarningsDisclaimer({ variant }: { variant: 'light' | 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`${isDark ? 'border-white/15' : 'border-line'} border px-6 py-5`}
    >
      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-steel'}`}>
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
      <section className="relative bg-graphite surface-dark overflow-hidden">
        <div className="relative z-10 container-wide section-padding">
          <div className="max-w-[880px]">
            <h1 className="heading-1 text-white mb-6">
              Own a franchise consulting and brokerage business
            </h1>
            <p className="body-large mb-4 max-w-2xl">
              You are an ambitious professional who wants to own a business, not just work a job. Forge gives you the brand, the training, and the technology to build a consulting practice that helps business owners franchise and grow.
            </p>
            <p className="body-large mb-4 max-w-2xl">
              This is how you go from employee to business owner without starting from scratch.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-10 max-w-2xl">
              Wondering how to fund the investment? See our{' '}
              <Link href="/financing" className="text-link">
                financing options for franchise development
              </Link>. Not sure if franchising or licensing fits your goals? Read our{' '}
              <Link href="/franchise-vs-license" className="text-link">
                franchise vs license comparison
              </Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/own-a-franchise/apply" className="btn-primary text-center">
                Apply to own a Forge franchise
              </Link>
            </div>
            <p className="text-white/60 text-sm">
              Territories are defined in the Franchise Disclosure Document. No franchise experience required.
            </p>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
            alt="Professional working from a modern home office"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
      </section>

      {/* OFFERING DISCLAIMER (after hero) */}
      <div className="bg-white gutter pt-12">
        <div className="container-wide">
          <OfferingDisclaimer variant="light" />
        </div>
      </div>

      {/* THE PROBLEM / OPPORTUNITY */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6">
              A $921 billion industry
            </h2>
            <p className="body-large">
              The franchise industry is projected to generate $921.4 billion in output in 2026, across about 845,000 franchise establishments, according to the{' '}
              <a href={IFA_OUTLOOK_URL} target="_blank" rel="noopener noreferrer" className="text-link">
                International Franchise Association
              </a>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-line max-w-4xl mx-auto">
            <div className="text-center">
              <p className="stat-number text-accent">$921.4B</p>
              <p className="text-steel text-sm mt-2">2026 projected franchise output</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-accent">845,000</p>
              <p className="text-steel text-sm mt-2">Franchise establishments</p>
            </div>
            <div className="text-center">
              <p className="stat-number text-accent">8.9M</p>
              <p className="text-steel text-sm mt-2">Franchise jobs</p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-steel">
            <a href={IFA_OUTLOOK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px] hover:text-graphite">
              Source: International Franchise Association, 2026 Franchising Economic Outlook
            </a>
          </p>
        </div>
      </section>

      {/* WHAT YOU GET (Value Stack) */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6">
              A complete business system, not just training
            </h2>
            <p className="body-large">
              Forge gives you a brand, a technology platform, a documented methodology, lead generation infrastructure, and a team behind you. Here is exactly what is included.
            </p>
          </div>
          <div className="tile-grid md:grid-cols-2 lg:grid-cols-3">
            {valueStackItems.map((item) => (
              <div key={item.title} className="card">
                <h3 className="heading-4 mb-3">{item.title}</h3>
                <p className="text-steel text-[17px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODEL EXPLAINED */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6">
              Two service lines: franchise development consulting and franchise brokerage
            </h2>
            <p className="body-large">
              A Forge franchise has two distinct service lines. You can focus on one or pursue both. Owners can do both because the same relationships feed both pipelines.
            </p>
          </div>
          <div className="tile-grid md:grid-cols-2 mb-12">
            <div className="card">
              <div className="mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Franchise consulting</h3>
              <p className="text-steel text-[17px] leading-relaxed mb-4">
                You help business owners turn their proven concept into a franchise brand. This includes feasibility analysis, FDD preparation, operations manual development, state registration, and launch strategy. You are the expert guiding them from "I think I should franchise" to "I am legally selling franchises."
              </p>
              <p className="text-steel text-[17px] leading-relaxed">
                Consulting engagements are project-based, typically ranging from several months to a year. You set the scope with the client and deliver using Forge methodology and templates.
              </p>
            </div>
            <div className="card">
              <div className="mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-3 mb-3">Franchise brokerage</h3>
              <p className="text-steel text-[17px] leading-relaxed">
                You match qualified buyers with franchise brands looking for new owners. When a buyer you represent signs a franchise agreement, the franchisor pays you a referral commission. You are the matchmaker between people who want to own a franchise and brands looking to grow.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card bg-stone border-stone">
              <h3 className="heading-4 mb-4">The lifestyle</h3>
              <ul className="space-y-3">
                {[
                  'Work from home or anywhere with an internet connection',
                  'No commercial lease, no inventory, no warehousing',
                  'No employees required to start. Add team members over time.',
                  'Set your own schedule and take on as many clients as you want',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 max-w-3xl mx-auto">
            <EarningsDisclaimer variant="light" />
          </div>
          <MidCTA route="/own-a-franchise" />
        </div>
      </section>

      {/* THE FEE */}
      <section className="section-padding bg-graphite surface-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-8">
              Everything you need to launch for $15,000
            </h2>
            <p className="stat-number text-accent mb-8">$15,000</p>
            <p className="body-large mb-8">
              You are getting a complete business system, brand, technology, training, and ongoing support for $15,000. That is the total franchise fee. Not a down payment. Not the first installment. The entire fee.
            </p>
            <EarningsDisclaimer variant="dark" />
            <div className="mt-8">
              <OfferingDisclaimer variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR / NOT FOR */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6">
              This opportunity is specific. It is not for everyone.
            </h2>
            <p className="body-large">
              Territories are defined in the Franchise Disclosure Document. Here is who this model suits and who it does not.
            </p>
          </div>
          <div className="tile-grid md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="heading-3 text-accent mb-6">Strong fit</h3>
              <ul className="space-y-4">
                {[
                  'Driven professionals who want to own a business, not buy a job',
                  'Former executives, consultants, or corporate leaders who know how to sell and advise',
                  'People with a sales, business development, or relationship management background',
                  'Professionals who want to help business owners grow and scale',
                  'Self-starters who are comfortable working independently',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="heading-3 text-steel mb-6">Not a fit</h3>
              <ul className="space-y-4">
                {[
                  'People looking for a hands-off investment',
                  'People who are not willing to prospect, network, and build relationships',
                  'Candidates who want a fully built business with no ramp-up period',
                  'Anyone uncomfortable with a commission and project-based business model',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XIcon />
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-stone">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="heading-2">Franchise opportunity FAQ</h2>
          </div>
          <div className="border-t border-graphite">
            {faqItems.map((item) => (
              <div key={item.q} className="border-b border-line py-8">
                <h3 className="heading-4 mb-3">{item.q}</h3>
                <p className="text-steel text-[17px] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-ember-fill surface-ember">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-6">
            Apply to own a Forge franchise
          </h2>
          <p className="body-large max-w-2xl mx-auto mb-4">
            Territories are defined in the Franchise Disclosure Document.
          </p>
          <p className="text-sm max-w-2xl mx-auto mb-10">
            The application takes less than five minutes. There is no commitment and no fee to apply. We will review your background and schedule a discovery call to answer every question you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/own-a-franchise/apply" className="btn-primary text-center">
              Apply to own a Forge franchise
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Ask a question first
            </Link>
          </div>
          <OfferingDisclaimer variant="light" />
        </div>
      </section>
    </>
  )
}
