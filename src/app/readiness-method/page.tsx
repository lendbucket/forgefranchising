import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import { faqSchema, webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'The Forge Franchise Readiness Method',
  description:
    'The Forge Franchise Readiness Method evaluates four pillars that determine whether your business can franchise: profitability, systems, brand, and replicability.',
  path: '/readiness-method',
})

const pillars = [
  {
    number: '01',
    title: 'Profitability and Unit Economics',
    what: 'This pillar measures whether your business generates enough margin to support two layers of ownership. Franchising splits the economics between you (the franchisor collecting royalties) and the franchisee (the operator paying them). If your unit economics are thin at a single location, they collapse entirely under a franchise structure.',
    why: 'A business can be profitable for its founder and still not be franchisable. The question is not whether you make money. The question is whether a new operator, paying franchise fees on top of startup costs, can also make money within a reasonable timeline. If the answer is no, franchising is premature regardless of how strong the brand or systems are.',
    questions: [
      'What are your gross margins after cost of goods and labor?',
      'What does the ramp to breakeven look like for a new location?',
      'Can the model sustain a royalty payment and still deliver a strong operator return?',
      'Are your revenue streams predictable enough to model forward?',
      'How seasonal is the business, and how does that affect cash flow during ramp?',
    ],
  },
  {
    number: '02',
    title: 'Systems and Operations',
    what: 'This pillar evaluates whether your business runs on documented systems or on the founder knowing what to do. Franchisees do not have your instincts, your relationships, or your two decades of pattern recognition. They have whatever you write down and train them on. Systems are what make replication possible without you being in the room.',
    why: 'The franchise businesses that fail at scale almost always fail here. The founder assumed their operations were transferable because they seemed simple. But "simple to do when you already know how" is not the same as "simple to teach to someone who has never done it." If your business requires constant founder intervention to maintain quality, it is not ready to franchise.',
    questions: [
      'Could a qualified person learn to run your business in 90 days or less?',
      'Are your standard operating procedures written down, or do they live in your head?',
      'Do you have documented hiring, training, and quality control processes?',
      'Can the business operate at your standard when you are not physically present?',
      'What technology systems support daily operations, and are they transferable?',
    ],
  },
  {
    number: '03',
    title: 'Brand Strength and Defensibility',
    what: 'This pillar assesses whether your brand carries enough recognition, trust, and legal protection to justify a franchise investment. Franchisees are buying the right to operate under your name. If that name does not carry weight in the market, or if it cannot be legally defended, the franchise value proposition is hollow.',
    why: 'Brand is the product in franchising. A franchisee can build their own restaurant, salon, or service company. What they cannot easily build is brand recognition, consumer trust, and market positioning. Those are the assets they are paying to access. If your brand is weak, undifferentiated, or unprotected, the franchise offering has no moat.',
    questions: [
      'Do customers recognize and seek out your brand by name?',
      'Is your trademark registered and defensible?',
      'Does your brand have a clear identity system (visual, verbal, experiential)?',
      'Can your brand translate to new markets without losing its meaning?',
      'What differentiates your brand from competitors in a way that is hard to copy?',
    ],
  },
  {
    number: '04',
    title: 'Replicability and Market Demand',
    what: 'This pillar tests whether your concept can actually be reproduced in a new geography by a new operator, and whether there is real demand for it when it gets there. Replicability is not just about whether the model works elsewhere. It is about whether the model works elsewhere without you, and whether the market in that new location actually wants what you sell.',
    why: 'Some businesses are inherently local. They depend on a specific neighborhood, a specific relationship, or a specific set of circumstances that cannot be moved. Other businesses are universally relevant but operationally complex in ways that make replication unreliable. This pillar identifies which category you are in and whether the market appetite exists to justify expansion.',
    questions: [
      'Is there demonstrated demand for your product or service in other geographies?',
      'Does your model depend on any factor that is unique to your current market?',
      'Can the real estate and staffing requirements be met in target expansion markets?',
      'Are there competitors already succeeding in those markets (validating demand)?',
      'What is the addressable market size for your concept at a national or regional level?',
    ],
  },
]

export default function ReadinessMethodPage() {
  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/readiness-method`,
              name: 'The Forge Franchise Readiness Method',
              description: 'The Forge Franchise Readiness Method evaluates four pillars that determine whether your business can franchise: profitability, systems, brand, and replicability.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/readiness-method`, [
              { name: 'The Forge Franchise Readiness Method' },
            ]),
            faqSchema({
              url: `${SITE_URL}/readiness-method`,
              questions: [
                {
                  question: 'What is the Forge Franchise Readiness Method?',
                  answer: 'The Forge Franchise Readiness Method is a structured assessment framework that evaluates four pillars determining whether a business can franchise successfully: Profitability and Unit Economics, Systems and Operations, Brand Strength and Defensibility, and Replicability and Market Demand.',
                },
                {
                  question: 'What does a franchise readiness assessment evaluate?',
                  answer: 'A franchise readiness assessment evaluates whether a business has the financial margins, operational systems, brand equity, and market demand required to support a franchise model. It identifies specific gaps and provides a path to address them before launching.',
                },
                {
                  question: 'Does passing a readiness assessment guarantee franchise success?',
                  answer: 'No. A readiness assessment identifies whether the foundational conditions for franchising are present. It does not guarantee franchise success, regulatory approval, or specific financial outcomes. Franchise offerings are made only through a Franchise Disclosure Document.',
                },
                {
                  question: 'How long does the Forge Franchise Readiness Method take?',
                  answer: 'The initial readiness assessment typically takes two to four weeks depending on the complexity of the business. It includes data gathering, analysis across all four pillars, and a written report with specific findings and recommendations.',
                },
                {
                  question: 'What happens after the readiness assessment?',
                  answer: 'After the assessment, you receive a detailed report identifying strengths, gaps, and a recommended path forward. If the business is ready, the next step is franchise structure development. If gaps exist, the report outlines what needs to change before proceeding.',
                },
              ],
            }),
          ]),
        }}
      />

      {/* INTRO */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Readiness Method' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Our Methodology</p>
            <h1 className="heading-1 mb-8">
              The Forge Franchise Readiness Method
            </h1>
            <p className="body-large mb-6">
              The Forge Franchise Readiness Method is a structured franchise readiness assessment
              that evaluates the four foundational conditions a business must meet before it can
              franchise. It exists because most franchise failures trace back to one problem: the
              business launched a franchise system before confirming that the fundamentals were
              in place. This method identifies exactly where you stand across each pillar and
              what, specifically, needs to be true before you move forward.
            </p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY ROW */}
      <section className="bg-deep-cream">
        <div className="container-wide py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Four pillars evaluated', detail: 'Each one required for franchise viability' },
              { label: 'Documented process', detail: 'Written methodology with defined criteria' },
              { label: 'Operator built', detail: 'Designed by people who have run multi-unit businesses' },
              { label: 'Modern software', detail: 'Data analysis and reporting, not spreadsheets and guesswork' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display font-bold text-espresso text-lg mb-1" style={{ letterSpacing: '-0.02em' }}>
                  {item.label}
                </p>
                <p className="text-muted-brown text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FOUR PILLARS */}
      {pillars.map((pillar, index) => (
        <section
          key={pillar.number}
          id={`pillar-${pillar.number}`}
          className={index % 2 === 0 ? 'section-padding bg-cream' : 'section-padding bg-deep-cream'}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <div className="text-amber font-display text-6xl font-bold mb-4">{pillar.number}</div>
                  <h2 className="heading-2 mb-3">{pillar.title}</h2>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="card">
                  <h3 className="heading-4 mb-4">What this pillar measures</h3>
                  <p className="text-muted-brown leading-relaxed mb-8">{pillar.what}</p>

                  <h3 className="heading-4 mb-4">Why it determines franchisability</h3>
                  <p className="text-muted-brown leading-relaxed mb-8">{pillar.why}</p>

                  <h3 className="heading-4 mb-4">Questions we ask</h3>
                  <ul className="space-y-3">
                    {pillar.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-muted-brown leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* WHAT THE ASSESSMENT REVEALS */}
      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow text-amber mb-4">Diagnosis, Then Path</p>
            <h2 className="heading-2 text-cream mb-8">What the Assessment Reveals</h2>
            <p className="text-lg text-cream/60 leading-relaxed mb-8">
              The Forge Franchise Readiness Method does not produce a pass or fail verdict. It
              produces a detailed picture of where your business stands across each pillar and
              what gaps exist between where you are today and where you need to be to franchise
              responsibly.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="heading-4 text-cream mb-4">Gaps it surfaces</h3>
                <ul className="space-y-3">
                  {[
                    'Margins that cannot support a two-layer ownership model',
                    'Operations that depend on founder presence or tribal knowledge',
                    'Brand identity that is undifferentiated or legally unprotected',
                    'Market demand that is unproven or geography dependent',
                    'Systems that work at one location but break at three',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-amber rounded-full flex-shrink-0 mt-2" />
                      <span className="text-cream/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="heading-4 text-cream mb-4">What readiness looks like</h3>
                <ul className="space-y-3">
                  {[
                    'Unit economics that work for both franchisor and franchisee',
                    'Documented systems a new operator can learn in 90 days or less',
                    'A brand with recognition, trust, and legal protection',
                    'Proven demand in multiple markets or clear evidence of transferability',
                    'An owner ready to lead a network, not just manage a location',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-cream/60 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-cream/5 border border-cream/10 px-6 py-5" style={{ borderRadius: '4px' }}>
              <p className="text-cream/50 text-sm leading-relaxed">
                A readiness assessment does not guarantee franchise success, regulatory approval, or specific
                financial outcomes. It identifies whether foundational conditions are present. Franchise
                offerings are made only through a Franchise Disclosure Document in compliance with applicable law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FROM ASSESSMENT TO LAUNCH */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">From Assessment to Launch</p>
            <h2 className="heading-2 mb-6">The Method Connects to the Process</h2>
            <p className="body-large mb-10">
              The Forge Franchise Readiness Method is the first stage of our{' '}
              <Link href="/how-it-works" className="text-amber font-semibold hover:underline">
                four-phase franchise development process
              </Link>. Once the assessment confirms readiness, you move directly into Structure,
              Launch, and Scale with a clear foundation. If gaps exist, we identify exactly
              what to fix before you invest in FDD preparation or state registration.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-10">
              <div className="card">
                <h3 className="heading-4 mb-3">Ready now</h3>
                <p className="text-muted-brown text-sm leading-relaxed">
                  You move into our{' '}
                  <Link href="/how-it-works" className="text-amber font-semibold hover:underline">
                    Structure phase
                  </Link>{' '}
                  with confidence. FDD preparation, franchise agreement, and operations manual
                  development begin with a solid foundation beneath them.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-4 mb-3">Gaps to close first</h3>
                <p className="text-muted-brown text-sm leading-relaxed">
                  You get a specific roadmap of what needs to change. Some gaps close in weeks.
                  Others take months. Either way, you know exactly what to work on and why, so
                  when you do launch, the system holds.
                </p>
              </div>
            </div>
            <p className="text-muted-brown text-sm leading-relaxed">
              See our{' '}
              <Link href="/packages" className="text-amber font-semibold hover:underline">
                engagement packages
              </Link>{' '}
              for how the method connects to full franchise development scope and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="heading-2">Readiness Method FAQ</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'What is the Forge Franchise Readiness Method?',
                a: 'It is a structured assessment framework that evaluates four pillars determining whether a business can franchise: Profitability and Unit Economics, Systems and Operations, Brand Strength and Defensibility, and Replicability and Market Demand. Each pillar is analyzed using defined criteria and real business data.',
              },
              {
                q: 'What does a franchise readiness assessment evaluate?',
                a: 'It evaluates whether your business has the financial margins, operational documentation, brand equity, and market demand required to support a franchise model. The output is a detailed report identifying strengths, gaps, and a recommended path forward.',
              },
              {
                q: 'Does passing a readiness assessment guarantee franchise success?',
                a: 'No. A readiness assessment identifies whether the foundational conditions for franchising are present. It does not guarantee franchise success, regulatory approval, or specific financial outcomes. Franchise offerings are made only through a Franchise Disclosure Document.',
              },
              {
                q: 'How long does the assessment take?',
                a: 'The initial readiness assessment typically takes two to four weeks depending on the complexity of the business. It includes data gathering, analysis across all four pillars, and a written report with specific findings and recommendations.',
              },
              {
                q: 'What happens after the assessment?',
                a: 'You receive a detailed report. If the business is ready, the next step is franchise structure development (FDD, franchise agreement, operations manual). If gaps exist, the report outlines what needs to change before proceeding and approximately how long each gap takes to close.',
              },
            ].map((item) => (
              <div key={item.q} className="card" style={{ borderRadius: '4px' }}>
                <h3 className="heading-4 mb-3">{item.q}</h3>
                <p className="text-muted-brown leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Related Resources"
        links={[
          { label: 'How the Full Process Works', href: '/how-it-works', description: 'See the four phases that follow the readiness assessment.' },
          { label: 'Our Services', href: '/services', description: 'Seven core franchise development services under one roof.' },
          { label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable', description: 'Take the quick online assessment for an initial readiness signal.' },
        ]}
      />

      {/* DUAL CTA */}
      <SectionCTA
        heading="Find Out Where Your Business Stands"
        body="Start with the Forge Franchise Readiness Method. We will evaluate your business across all four pillars and give you a clear, honest picture of what is required to franchise."
        buttonText="Start Your Readiness Assessment"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a call to discuss your situation directly"
        secondaryHref="/contact"
      />

      <StickyCTA
        text="Start the Readiness Assessment"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
