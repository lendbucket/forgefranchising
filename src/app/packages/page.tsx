import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { StickyCTA } from '@/components/StickyCTA'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Franchise Development Packages',
  description:
    'Franchise development packages in three tiers: Launch, Growth, and Empire. Each is tailored to your business stage and goals. Contact us for a custom quote.',
  path: '/packages',
})

const tiers = [
  {
    name: 'Launch',
    tagline: 'For single concept brands ready to franchise',
    description:
      'The Launch package is built for business owners with one proven concept who want to enter franchising with a compliant, professional foundation. This is the minimum viable franchise system: everything you need to legally sell your first franchise, and nothing extra to slow you down.',
    priceHint: 'Starting in the mid five figures. Contact us for a tailored quote.',
    features: [
      'Feasibility assessment with written recommendation report',
      'Franchisor entity formation and legal structure guidance',
      'Federal FDD preparation (all 23 items, built from your data)',
      'Home state registration or filing',
      'Franchise Agreement drafted and reviewed by franchise counsel',
      'Foundational operations manual covering core systems and procedures',
      'Item 7 initial investment model with real vendor quotes',
    ],
    ideal: 'Owner operators with a single profitable location (or a small number of locations) and clear evidence of demand for their concept. You know your business works. You want to prove it can work for someone else.',
    notIdeal: 'Businesses that need extensive multi-state registration, a full training curriculum, or franchise sales support from day one. Those needs are covered in the Growth and Empire packages.',
  },
  {
    name: 'Growth',
    tagline: 'The complete package most brands choose',
    popular: true,
    description:
      'Growth includes everything in Launch, plus the systems that actually drive franchise sales and franchisee success. This is the package for owners who do not just want to be legally ready to franchise. They want to be operationally ready to scale. Most of our clients choose Growth because it covers the gap between "we have an FDD" and "we are actually selling and supporting franchises."',
    priceHint: 'The complete package most brands choose. Contact us for a tailored quote.',
    features: [
      'Everything in the Launch package',
      'Full operations manual: comprehensive, training ready, digitally delivered',
      'Item 19 financial performance representation (when your data supports it)',
      'Multi-state registration guidance and filing management',
      'Training program framework with curriculum, materials, and delivery plan',
      'Franchise sales starter kit: landing page, franchise overview brochure, lead capture form',
      'Lead qualification criteria and sales process workflow',
    ],
    ideal: 'Businesses with strong unit economics and a clear growth thesis. You want to franchise in multiple states and need the sales infrastructure to actually find and close qualified buyers. This is where most serious franchise brands start.',
    notIdeal: 'Owners who only need a basic FDD for a single state (Launch handles that), or owners who want a fully managed, done with you sales and technology buildout (that is Empire).',
  },
  {
    name: 'Empire',
    tagline: 'The full system for brands building a national network',
    description:
      'Empire is the complete franchise development and infrastructure package. It includes everything in Growth, plus the brand, technology, and sales systems that separate regional franchise concepts from national franchise brands. This package is for owners who are not just entering franchising. They are building a franchise company.',
    priceHint: 'A six figure investment for a complete system. Contact us for scope and a tailored quote.',
    features: [
      'Everything in the Growth package',
      'Complete franchise brand identity and website',
      'Custom software platform: franchisee portal, royalty tracking, performance dashboards',
      'Embedded payment processing for franchise fee collection',
      'Franchisee financing access and lender introductions',
      'Done with you franchise sales playbook: scripts, objection handling, discovery day format, pipeline management',
      'Ongoing strategic advisory during your first year of franchise sales',
    ],
    ideal: 'Established businesses with multiple locations, proven demand, and the resources to invest in building a franchise brand (not just a franchise offering). You want to come to market with the infrastructure of a brand that has been franchising for years.',
    notIdeal: 'First time franchisors testing the waters or businesses with limited capital. Starting with Launch or Growth and upgrading later is a smarter path if your budget is constrained.',
  },
]

const comparisonFeatures = [
  { feature: 'Feasibility assessment', launch: true, growth: true, empire: true },
  { feature: 'Franchisor entity formation', launch: true, growth: true, empire: true },
  { feature: 'Federal FDD (all 23 items)', launch: true, growth: true, empire: true },
  { feature: 'Franchise Agreement', launch: true, growth: true, empire: true },
  { feature: 'Home state registration', launch: true, growth: true, empire: true },
  { feature: 'Item 7 investment model', launch: true, growth: true, empire: true },
  { feature: 'Foundational operations manual', launch: true, growth: true, empire: true },
  { feature: 'Full operations manual', launch: false, growth: true, empire: true },
  { feature: 'Item 19 financial performance model', launch: false, growth: true, empire: true },
  { feature: 'Multi-state registration guidance', launch: false, growth: true, empire: true },
  { feature: 'Training program framework', launch: false, growth: true, empire: true },
  { feature: 'Franchise sales starter kit', launch: false, growth: true, empire: true },
  { feature: 'Lead qualification and sales process', launch: false, growth: true, empire: true },
  { feature: 'Complete brand identity and website', launch: false, growth: false, empire: true },
  { feature: 'Custom software platform', launch: false, growth: false, empire: true },
  { feature: 'Embedded payment processing', launch: false, growth: false, empire: true },
  { feature: 'Franchisee financing access', launch: false, growth: false, empire: true },
  { feature: 'Done with you sales playbook', launch: false, growth: false, empire: true },
  { feature: 'First year strategic advisory', launch: false, growth: false, empire: true },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function DashIcon() {
  return (
    <svg className="w-5 h-5 text-muted-brown/30" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 10h8" />
    </svg>
  )
}

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Franchise Development Packages',
            provider: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            description:
              'Three engagement tiers for franchise development: Launch, Growth, and Empire. Each tailored to your business stage and growth goals.',
            url: `${SITE_URL}/packages`,
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Franchise Development Packages',
              itemListElement: tiers.map((tier) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${tier.name} Package`,
                  description: tier.description,
                },
              })),
            },
          }),
        }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Packages' },
            ]}
          />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Packages</p>
            <h1 className="heading-1 mb-8">
              Three Tiers. Zero Guesswork. Pick the Level That Matches Your Business.
            </h1>
            <p className="body-large mb-6">
              Every franchise development engagement is different, but the core components are not. We have
              structured our services into three packages so you can see exactly what is included at each
              level. No hidden fees, no surprise add-ons, no line items that only make sense to an accountant.
            </p>
            <p className="body-large">
              Not sure which tier fits? That is what the{' '}
              <Link href="/contact" className="text-amber font-semibold hover:underline">
                free feasibility call
              </Link>{' '}
              is for. We will assess your business and recommend the right starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`card relative flex flex-col ${
                  tier.popular
                    ? 'ring-2 ring-amber lg:scale-105 lg:z-10'
                    : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber text-cream text-xs font-bold uppercase tracking-widest px-4 py-1.5" style={{ borderRadius: '3px', letterSpacing: '0.1em' }}>
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="heading-2 mb-2">{tier.name}</h2>
                  <p className="text-amber font-semibold text-sm">{tier.tagline}</p>
                </div>
                <p className="text-muted-brown leading-relaxed mb-6 text-sm">{tier.description}</p>
                <div className="bg-deep-cream p-4 mb-6" style={{ borderRadius: '4px' }}>
                  <p className="text-espresso font-medium text-sm">{tier.priceHint}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-brown text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary text-center w-full">
                  Get a Tailored Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who each tier is for */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <h2 className="heading-2 text-center mb-4">Which Package Is Right for You?</h2>
          <p className="body-large text-center max-w-3xl mx-auto mb-12">
            The right package depends on where your business is today and where you want it to be in
            12 to 24 months. Here is a straightforward breakdown.
          </p>
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="card">
                <h3 className="heading-3 mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <h4 className="heading-4 mb-2 text-amber">Ideal for</h4>
                  <p className="text-muted-brown text-sm leading-relaxed">{tier.ideal}</p>
                </div>
                <div>
                  <h4 className="heading-4 mb-2 text-muted-brown">Not the best fit if</h4>
                  <p className="text-muted-brown text-sm leading-relaxed">{tier.notIdeal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <h2 className="heading-2 text-center mb-4">Side by Side Comparison</h2>
          <p className="body-large text-center max-w-3xl mx-auto mb-12">
            Every feature in every package, laid out so you can compare at a glance.
          </p>
          <div className="overflow-scroll-x">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-espresso/10">
                  <th className="text-left py-4 pr-4 text-sm font-semibold text-espresso">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-espresso">Launch</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-amber">Growth</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-espresso">Empire</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="border-b border-espresso/5">
                    <td className="py-3 pr-4 text-sm text-muted-brown">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{row.launch ? <CheckIcon /> : <DashIcon />}</div>
                    </td>
                    <td className="py-3 px-4 text-center bg-amber/5">
                      <div className="flex justify-center">{row.growth ? <CheckIcon /> : <DashIcon />}</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">{row.empire ? <CheckIcon /> : <DashIcon />}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ-style section */}
      <section className="section-padding bg-cream">
        <div className="container-narrow">
          <h2 className="heading-2 text-center mb-12">Common Questions About Our Packages</h2>
          <div className="space-y-8">
            {[
              {
                q: 'Can I start with Launch and upgrade later?',
                a: 'Yes. Every package builds on the one before it, so nothing is wasted if you start smaller and scale up. Many of our clients begin with Launch to validate the model, then move to Growth once they are ready to sell in multiple states. The work we do in Launch carries forward directly.',
              },
              {
                q: 'Why are there no prices listed?',
                a: 'Because every business is different. A single location restaurant and a 15 location home services company both need FDDs, but the scope, complexity, and timeline are different. We provide tailored quotes after a feasibility conversation so the number you see is the number you pay. No bait and switch.',
              },
              {
                q: 'How long does each package take to complete?',
                a: 'Launch typically takes 10 to 16 weeks from kickoff to your first state registration. Growth adds 4 to 8 weeks for the expanded deliverables. Empire timelines vary based on the technology and brand buildout scope, but most engagements complete within 5 to 7 months. We will give you a specific timeline during your feasibility call.',
              },
              {
                q: 'What if I only need one or two services?',
                a: 'We occasionally take on standalone projects for businesses that already have part of their franchise system built. If you have an FDD but need an operations manual, or you have a manual but need registration support, reach out. We will tell you honestly whether a standalone engagement makes sense or whether a package is the better value.',
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes. We structure payments around project milestones so you are never paying for work that has not been delivered. The specific payment schedule depends on the package and scope, and we finalize it before any engagement begins.',
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="heading-4 mb-3">{item.q}</h3>
                <p className="text-muted-brown leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 text-cream mb-6">The Math Is Simple</h2>
          <p className="text-xl text-cream/60 max-w-3xl mx-auto leading-relaxed mb-12">
            A single franchise sale generates an initial franchise fee (typically between $25,000 and $50,000)
            plus ongoing royalties for the life of the agreement. Five franchise sales in your first year can
            generate more revenue than the entire cost of your franchise development. Ten sales changes the
            trajectory of your business permanently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Your Tailored Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Open loop: curiosity about what happens after choosing a package */}
      <OpenLoop
        teaser="Choosing a package is step one. There is a specific sequence of events that happens after you commit, and knowing it in advance removes 90% of the uncertainty. We walk through the entire timeline."
        linkText="See the four-phase process"
        href="/how-it-works"
        variant="section"
      />

      <ContinueLearning
        heading="Continue Your Research"
        links={[
          { label: 'How the Process Works', href: '/how-it-works', description: 'The four phases every franchise we build moves through, from feasibility to scale.' },
          { label: 'What Does It Actually Cost?', href: '/blog/cost-to-franchise-a-business', description: 'Honest cost ranges, what drives them, and red flags to watch for.' },
          { label: 'Model Your Franchise Economics', href: '/calculator', description: 'See what your franchise system could generate in fees and royalties.' },
        ]}
      />

      <SectionCTA
        heading="Not Sure Which Package Fits?"
        body="Take our free assessment first. Your franchise readiness score will tell you which tier matches your business today and what the roadmap looks like."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a call for a tailored quote"
        secondaryHref="/contact"
        variant="light"
      />

      <StickyCTA
        text="Get Your Tailored Quote"
        href="/contact"
      />
    </>
  )
}
