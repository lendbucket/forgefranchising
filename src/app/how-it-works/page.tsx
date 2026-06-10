import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'How It Works: 4 Phase Process',
  description:
    'Our four phase franchise development process covers Feasibility, Structure, Launch, and Scale. See how we turn proven businesses into scalable franchise brands.',
  path: '/how-it-works',
})

const phases = [
  {
    number: '01',
    title: 'Feasibility',
    duration: '2 to 4 weeks',
    summary: 'We determine if your business should franchise, not just if it can.',
    details: [
      'Deep analysis of your unit economics, including revenue, margins, cost structure, and cash flow patterns across seasons',
      'Market demand assessment: is there real appetite for your concept in other geographies?',
      'Competitive franchise landscape review: who else operates in your space and what do they charge?',
      'Operational replicability audit: can someone who is not you run this business to your standard?',
      'Financial modeling: what does the franchisee investment look like, and what returns can they expect?',
      'A written feasibility report with a clear recommendation: franchise, do not franchise, or franchise after fixing specific gaps',
    ],
    outcome: 'You get a clear, data backed answer and a roadmap for the phases ahead.',
  },
  {
    number: '02',
    title: 'Structure',
    duration: '8 to 14 weeks',
    summary: 'We build the legal, operational, and financial framework that makes your franchise compliant and compelling.',
    details: [
      'Franchisor entity formation: the correct legal structure for your franchise company',
      'Franchise Disclosure Document (FDD) preparation: all 23 items, built from your actual numbers, reviewed by franchise counsel',
      'Franchise Agreement drafting: the contract between you and every future franchisee',
      'Operations Manual: a comprehensive, training ready document that captures how your business actually runs',
      'Item 7 financial model: the initial investment table that every prospective franchisee evaluates first',
      'Item 19 financial performance representation (if eligible): the single most powerful franchise sales tool available',
      'Trademark and intellectual property strategy: protecting the brand before it scales',
    ],
    outcome: 'You have a complete, legally reviewed franchise system ready for state registration.',
  },
  {
    number: '03',
    title: 'Launch',
    duration: '4 to 8 weeks',
    summary: 'We prepare your franchise for market and get you registered in the states where you plan to sell.',
    details: [
      'State registration filings: we handle the registration states (California, New York, Illinois, and 11 others) and filing states',
      'Franchise sales materials: a professional franchise overview, brochure, and lead capture system',
      'Training program framework: how you will onboard and certify new franchisees',
      'Franchisee qualification criteria: defining who you will (and will not) award franchises to',
      'Territory mapping: defining your franchise territories based on population, demographics, and market density',
      'Pre-sale compliance review: ensuring every step of your sales process meets FTC and state requirements',
    ],
    outcome: 'You are legally registered, sales ready, and prepared to award your first franchise.',
  },
  {
    number: '04',
    title: 'Scale',
    duration: 'Ongoing',
    summary: 'We help you sell franchises, support your franchisees, and build the infrastructure that sustains growth.',
    details: [
      'Franchise sales process: from lead generation to qualification to signing',
      'Franchisee onboarding systems: the first 90 days for every new owner',
      'Multi-unit and area development structures: how to sell larger territories when the demand is there',
      'Annual FDD renewal and compliance: keeping your documents current and your registrations active',
      'Technology infrastructure: the systems that let you manage 10, 50, or 100 units without losing control',
      'Performance benchmarking: tracking unit economics across your network and identifying what drives success',
    ],
    outcome: 'You scale with confidence, backed by systems that grow with you.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Franchise Your Business',
            description: 'The four phase process for turning a proven business into a franchise brand.',
            step: phases.map((phase, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: phase.title,
              text: phase.summary,
              url: `${SITE_URL}/how-it-works#phase-${phase.number}`,
            })),
          }),
        }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'How It Works' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Process</p>
            <h1 className="heading-1 mb-8">
              How to Franchise Your Business: The Four Phase Process
            </h1>
            <p className="body-large mb-6">
              Franchising is not a single event. It is a structured process that moves through four
              distinct phases, each building on the one before it. Skipping a phase or rushing through
              it is how franchise systems fail. Doing it right is how they scale to 50 or 100 units.
            </p>
            <p className="body-large mb-8">
              Here is exactly how we take a proven business and turn it into a franchise brand.
              No mysteries, no hand waving, no surprises.
            </p>
            {/* Key takeaways: skimmers get value in 10 seconds */}
            <KeyTakeaways
              items={[
                'Phase 1 Feasibility: 2 to 4 weeks to determine if franchising makes financial sense',
                'Phase 2 Structure: 8 to 14 weeks to build your FDD, franchise agreement, and operations manual',
                'Phase 3 Launch: 4 to 8 weeks for state registration and franchise sales preparation',
                'Phase 4 Scale: Ongoing support to sell franchises and build network infrastructure',
                'Total timeline from start to franchise ready: typically 4 to 8 months',
              ]}
              readTime="8 min read"
            />
          </div>
        </div>
      </section>

      {phases.map((phase, index) => (
        <section
          key={phase.number}
          id={`phase-${phase.number}`}
          className={index % 2 === 0 ? 'section-padding bg-deep-cream' : 'section-padding bg-cream'}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <div className="text-amber font-display text-6xl font-bold mb-4">{phase.number}</div>
                  <h2 className="heading-2 mb-3">{phase.title}</h2>
                  <p className="text-muted-brown text-sm mb-4">Timeline: {phase.duration}</p>
                  <p className="body-large">{phase.summary}</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="card">
                  <h3 className="heading-4 mb-6">What happens in this phase:</h3>
                  <ul className="space-y-4">
                    {phase.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-muted-brown leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-6 bg-deep-cream" style={{ borderRadius: '4px' }}>
                    <p className="font-semibold text-espresso mb-1">Phase Outcome:</p>
                    <p className="text-muted-brown">{phase.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 text-cream mb-6">Why This Process Works</h2>
          <p className="text-xl text-cream/60 max-w-3xl mx-auto leading-relaxed mb-12">
            Every step in this process exists because skipping it has cost real business owners real money.
            We have studied the franchise systems that scaled successfully and the ones that collapsed.
            The difference is almost always in the foundation.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { stat: '23', label: 'Items in every FDD, each one required by federal law' },
              { stat: '14', label: 'Registration states with their own filing requirements' },
              { stat: '4', label: 'Phases that separate franchise brands from franchise failures' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-4xl font-display font-bold text-amber mb-2">{item.stat}</div>
                <p className="text-cream/50 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open loop: curiosity gap points to packages page */}
      <OpenLoop
        teaser="The investment for franchise development varies by complexity, but a single franchise sale can generate more than the entire development cost. See exactly what each engagement tier includes."
        linkText="Compare our three packages"
        href="/packages"
        variant="section"
      />

      <ContinueLearning
        heading="Go Deeper"
        links={[
          { label: 'What Each Service Includes', href: '/services', description: 'Seven services that build on each other in a specific sequence.' },
          { label: 'Compare Our Packages', href: '/packages', description: 'Three engagement tiers. See exactly what is included at each level.' },
          { label: 'What Does It Cost?', href: '/blog/cost-to-franchise-a-business', description: 'Real cost ranges, what drives them, and what to watch for.' },
        ]}
      />

      <SectionCTA
        heading="Find Out Where Your Business Stands"
        body="Take our two-minute franchise readiness assessment. You will get a score, personalized recommendations, and a clear picture of which phase you are ready for."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a feasibility call to discuss your specific situation"
        secondaryHref="/contact"
        variant="light"
      />

      <StickyCTA
        text="See Which Phase You Are Ready For"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
