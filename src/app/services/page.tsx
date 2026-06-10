import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Franchise Development Services',
  description:
    'Full service franchise development: feasibility studies, FDD preparation, operations manuals, state registration, training programs, franchise sales systems, and technology platforms.',
  path: '/services',
})

const services = [
  {
    id: 'feasibility',
    title: 'Feasibility Studies',
    tagline: 'The honest answer before the big investment',
    what: 'A feasibility study is a structured analysis of whether your business should franchise. Not whether it can (most businesses technically can), but whether it should. We evaluate your unit economics, market demand, competitive landscape, operational complexity, and replicability. The output is a written report with a clear recommendation and the data behind it.',
    why: 'Most franchise development firms skip this step because it sometimes means telling a client "not yet." That is exactly why it matters. Launching a franchise system on a concept with thin margins, inconsistent operations, or weak demand is a six figure mistake. A proper feasibility study costs a fraction of what a failed franchise launch costs. It also becomes the foundation for your FDD financial disclosures, so doing it right pays dividends through every phase that follows.',
    deliver: [
      'Unit economics deep dive: revenue, COGS, labor, rent, and margin analysis',
      'Market demand and geographic expansion assessment',
      'Competitive franchise landscape report',
      'Operational replicability score with gap identification',
      'Franchisee investment model (preliminary Item 7)',
      'Written recommendation report with data appendix',
    ],
  },
  {
    id: 'fdd',
    title: 'FDD Preparation',
    tagline: 'The 23 item document that makes or breaks your franchise',
    what: 'The Franchise Disclosure Document is federally required by the FTC before you can sell a single franchise. It contains 23 specific items covering everything from your litigation history to your financial statements to the fees you charge. We prepare every item from your actual business data, coordinate with franchise attorneys for legal review, and deliver a compliant, compelling document that stands up to state examiner scrutiny and prospective franchisee due diligence.',
    why: 'The FDD is not just a legal requirement. It is the first thing any serious franchise buyer reads, and it is the document state regulators use to decide whether you can sell in their jurisdiction. A poorly prepared FDD leads to registration rejections, legal exposure, and lost franchise sales. Prospective franchisees compare your FDD against every other opportunity they are evaluating. The brands with clear, thorough, well organized disclosures close more deals.',
    deliver: [
      'All 23 FDD items drafted from your business data',
      'Franchise Agreement (the contract between franchisor and franchisee)',
      'Item 7 initial investment table with vendor quotes and real numbers',
      'Item 19 financial performance representation (when data supports it)',
      'Coordination with franchise counsel for legal review and finalization',
      'State specific addenda for registration states',
    ],
  },
  {
    id: 'operations-manual',
    title: 'Operations Manual Development',
    tagline: 'Your business in a book, so anyone can run it your way',
    what: 'An operations manual captures every system, process, standard, and procedure that makes your business work. It is the document your franchisees use to open, operate, and grow their locations. We build it from direct observation of your operations, interviews with your team, and documentation of the decisions you make every day without thinking about them. The result is a comprehensive, training ready manual that transfers your expertise to people who have never worked in your business.',
    why: 'Franchising is the business of replication. If your franchisees cannot replicate your results, the system fails. The operations manual is what makes replication possible at scale. Without it, every new franchisee reinvents the wheel, brand consistency erodes, and customer experience varies wildly from location to location. The manual is also referenced in your FDD and required by most state regulators. A thin or generic manual is a red flag to examiners and prospective franchisees alike.',
    deliver: [
      'Complete operations manual covering pre-opening through daily operations',
      'Standard operating procedures for every key business function',
      'Brand standards guide (visual identity, customer experience, quality benchmarks)',
      'Vendor and supplier specifications',
      'Technology systems documentation',
      'Digital format optimized for training and ongoing reference',
    ],
  },
  {
    id: 'registration',
    title: 'Franchise Registration',
    tagline: '14 registration states, 8 filing states, zero shortcuts',
    what: 'Before you can sell a franchise in a regulated state, you need approval from that state\'s franchise regulator. Fourteen states require full registration (California, New York, Illinois, and 11 others), and eight additional states require notice filings. Each state has its own requirements, fees, timelines, and examiner preferences. We prepare and manage the entire registration process, handle examiner comments, and keep your registrations current through annual renewals.',
    why: 'Selling a franchise in a registration state without approval is a serious legal violation with real consequences, including rescission rights for the buyer and potential penalties for the seller. Beyond compliance, registration states represent some of the largest franchise markets in the country. California alone accounts for roughly 12% of all franchise units in the U.S. If you skip registration, you are locking yourself out of your biggest growth markets. State examiners also catch problems in your FDD that the FTC does not review, so the registration process actually improves your documents.',
    deliver: [
      'Registration applications for all target states',
      'Examiner comment responses and document revisions',
      'Filing state notice submissions',
      'Annual renewal management and timeline tracking',
      'State specific FDD addenda and amendments',
      'Registration status dashboard so you always know where you stand',
    ],
  },
  {
    id: 'training',
    title: 'Training Program Design',
    tagline: 'Turn new owners into operators in weeks, not months',
    what: 'A franchise training program is the structured process that takes a new franchisee from signing their agreement to operating independently. We design the curriculum, build the materials, and create the delivery framework for both initial training and ongoing education. This includes classroom components, on the job training at your flagship location, and post-opening support protocols.',
    why: 'Franchisee failure is almost always a training failure. The owner who struggles is typically the one who was not adequately prepared for the realities of running the business. A strong training program reduces support costs, accelerates time to profitability for new units, and protects your brand. It also matters for franchise sales. Prospective franchisees evaluate your training program as a key indicator of how much support they will receive. Item 11 of your FDD describes your training obligations, and sophisticated buyers read it carefully.',
    deliver: [
      'Training curriculum with module outlines and learning objectives',
      'Initial training program (typically 2 to 4 weeks, classroom plus on the job)',
      'Training materials: manuals, checklists, assessments, and reference guides',
      'Post-opening support framework (first 90 days)',
      'Ongoing education plan for existing franchisees',
      'Training compliance tracking system',
    ],
  },
  {
    id: 'sales',
    title: 'Franchise Sales Systems',
    tagline: 'A repeatable process for finding and closing qualified buyers',
    what: 'Franchise sales is a specific discipline with its own compliance requirements, conversion benchmarks, and best practices. We build the systems, materials, and processes you need to generate franchise leads, qualify them, and guide them through a compliant sales process. This includes everything from your franchise landing page to your lead qualification criteria to your discovery day format.',
    why: 'Building a franchise system without a sales engine is like opening a restaurant and forgetting to put up a sign. Most new franchisors underestimate how structured the sales process needs to be. The FTC and state regulators impose specific rules about what you can say, when you can say it, and what disclosures must precede any financial discussion. A compliant, well designed sales process does not just keep you legal. It converts at a higher rate because it builds trust and demonstrates professionalism. The brands that sell the most franchises are not the ones with the best pitch. They are the ones with the best process.',
    deliver: [
      'Franchise sales landing page and lead capture system',
      'Franchise overview brochure and presentation deck',
      'Lead qualification scorecard and criteria',
      'Sales process workflow with compliance checkpoints',
      'Discovery day planning and execution framework',
      'CRM setup and pipeline tracking',
    ],
  },
  {
    id: 'technology',
    title: 'Technology Platform',
    tagline: 'Software that runs your franchise network, not just reports on it',
    what: 'A franchise technology platform is the central nervous system of your franchise network. We build and deploy the software infrastructure your franchise needs to operate: franchisee portals, royalty tracking, compliance management, performance dashboards, communication tools, and integrated payment processing. This is not off the shelf software with your logo on it. It is a platform configured for how your specific franchise operates.',
    why: 'Managing five franchise locations with spreadsheets and email is possible. Managing fifty is not. The franchise systems that scale successfully are the ones that invest in technology infrastructure early. Royalty collection, franchisee communication, brand compliance, performance benchmarking. All of these become exponentially harder without the right systems. Technology also becomes a competitive advantage in franchise sales. When a prospective franchisee sees that you have a real platform (not a shared Google Drive), it signals that you are serious about supporting your network.',
    deliver: [
      'Franchisee portal with document management and communication tools',
      'Royalty and fee tracking with automated calculations',
      'Performance dashboards with unit level analytics',
      'Brand compliance monitoring tools',
      'Embedded payment processing for franchise fees',
      'Integration with your existing POS, CRM, and accounting systems',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Franchise Development Services',
            provider: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            description:
              'Full service franchise development including feasibility studies, FDD preparation, operations manuals, state registration, training programs, franchise sales systems, and technology platforms.',
            url: `${SITE_URL}/services`,
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Franchise Development Services',
              itemListElement: services.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.what,
                  url: `${SITE_URL}/services#${service.id}`,
                },
              })),
            },
          }),
        }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Services</p>
            <h1 className="heading-1 mb-8">
              Everything You Need to Franchise Your Business. Nothing You Do Not.
            </h1>
            <p className="body-large mb-6">
              Franchise development has seven core components. Skip one and you have gaps in your system.
              Outsource them to seven different vendors and you spend more time managing contractors than
              building your franchise. We handle all seven under one roof, with one team, and one process.
            </p>
            <p className="body-large mb-8">
              Every service below is available as part of our{' '}
              <Link href="/packages" className="text-amber font-semibold hover:underline">
                engagement packages
              </Link>
              , or you can learn about{' '}
              <Link href="/how-it-works" className="text-amber font-semibold hover:underline">
                how our process works
              </Link>{' '}
              from start to finish.
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="text-sm font-medium text-espresso bg-deep-cream px-4 py-2 hover:bg-amber hover:text-cream transition-colors"
                style={{ borderRadius: '3px' }}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'section-padding bg-deep-cream' : 'section-padding bg-cream'}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="sticky top-28">
                  <p className="eyebrow mb-3">
                    {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </p>
                  <h2 className="heading-2 mb-3">{service.title}</h2>
                  <p className="body-large italic text-muted-brown">{service.tagline}</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="card">
                  <h3 className="heading-4 mb-4">What it is</h3>
                  <p className="text-muted-brown leading-relaxed mb-8">{service.what}</p>

                  <h3 className="heading-4 mb-4">Why it matters</h3>
                  <p className="text-muted-brown leading-relaxed mb-8">{service.why}</p>

                  <h3 className="heading-4 mb-4">What we deliver</h3>
                  <ul className="space-y-3">
                    {service.deliver.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-muted-brown leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 text-cream mb-6">How These Services Fit Together</h2>
          <p className="text-xl text-cream/60 max-w-3xl mx-auto leading-relaxed mb-12">
            These seven services are not a menu you pick from at random. They build on each other in a
            specific sequence. Feasibility informs your FDD. Your FDD drives your registration strategy.
            Your operations manual feeds your training program. Your sales system fills your pipeline.
            Your technology platform holds it all together.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '7', label: 'Core services, all under one roof' },
              { stat: '23', label: 'FDD items prepared from your actual business data' },
              { stat: '14', label: 'Registration states we file and manage for you' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-4xl font-display font-bold text-amber mb-2">{item.stat}</div>
                <p className="text-cream/50 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="btn-primary">
              View Our Packages
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              See How the Process Works
            </Link>
          </div>
        </div>
      </section>

      {/* Open loop: curiosity gap about cost */}
      <OpenLoop
        teaser="Your franchise fee structure determines both franchisee profitability and your own revenue model. Most new franchisors set their fees wrong. We explain the math and the common mistakes."
        linkText="Read about franchise royalty structures"
        href="/blog/franchise-royalty-structures"
        variant="section"
      />

      <ContinueLearning
        heading="Explore Further"
        links={[
          { label: 'See How the Process Works', href: '/how-it-works', description: 'Four phases, one system. Understand the sequence before you start.' },
          { label: 'Compare Our Packages', href: '/packages', description: 'Three tiers with clear scoping so you know exactly what you are getting.' },
          { label: 'Get Your Readiness Score', href: '/is-my-business-franchisable', description: 'A two-minute assessment to see where your business stands today.' },
        ]}
      />

      <SectionCTA
        heading="Not Sure Which Services You Need?"
        body="Take our free franchise readiness assessment. Your score will tell you exactly which phase and services apply to your situation."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a call and we will walk through it together"
        secondaryHref="/contact"
        variant="light"
      />

      <StickyCTA
        text="Get a Tailored Service Recommendation"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
