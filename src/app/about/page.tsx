import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { BrokerageBand } from '@/components/BrokerageBand'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import { MISSION_STATEMENT, SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Franchise Business Consultant Team',
  description:
    'Franchise business consultant team built by operators who have opened units, trained franchisees, and cleared state examiners. See exactly who you work with.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/about`,
              name: 'About Us',
              description: 'Forge Franchising Group is an operator built franchise development firm. We turn proven businesses into franchise brands with real experience and a clear path.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/about`, [
              { name: 'About Us' },
            ]),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">
              Franchise Business Consultant Work, Operator Built.
            </h1>
            <p className="body-large mb-6">
              Forge Franchising Group was founded on a simple observation: most firms selling franchise
              business consultant services have never actually operated a franchise. They have never opened a second location, trained
              a franchisee, or dealt with a state examiner who rejected their FDD filing.
            </p>
            <p className="body-large mb-8">
              We come from the operating side. We have built businesses, managed multi-unit operations,
              and learned what actually matters when you are trying to replicate something that works.
              That experience shapes everything we do.
            </p>
            <HeroActions route="/about" />
            {/* Key takeaways: skimmers get value in 10 seconds (Miller's law) */}
            <KeyTakeaways
              items={[
                'Operator built firm, not a consulting shop that has never run a business',
                'Four-phase documented process: Feasibility, Structure, Launch, Scale',
                'We say no to businesses that are not ready and explain what it would take',
                'Modern technology, not Word documents and binders',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-2 mb-6">Our mission</h2>
              <p className="body-large mb-8">{MISSION_STATEMENT}</p>
              <h3 className="heading-4 mb-4">What that means in practice:</h3>
              <ul className="space-y-4">
                {[
                  'We say no to businesses that are not ready. We would rather lose a deal than set up an owner to fail.',
                  'We build systems, not slide decks. Every deliverable is something the owner actually uses.',
                  'We stay involved past the FDD. Franchise development is not done when the documents are filed. It is done when franchisees are operating successfully.',
                  'We charge for outcomes, not hours. Our engagement tiers are designed around what needs to get built, not how long we sit in a room.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-2 mb-6">Why we are different</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'We have operated businesses',
                    body: 'We do not just consult. We have run operations, managed P&Ls, hired teams, and dealt with the day to day reality of multi-unit businesses. That perspective is impossible to fake and impossible to replace.',
                  },
                  {
                    title: 'We build with technology',
                    body: 'Most franchise consultants hand you a Word document and an invoice. We use modern software to build systems that actually scale. From your operations manual to your franchisee portal, everything is built for how businesses work today.',
                  },
                  {
                    title: 'We follow a documented process',
                    body: 'We do not improvise. Every engagement starts with the Forge Franchise Readiness Method, a four-pillar assessment that determines whether the fundamentals are in place. From there, our four-phase process (Feasibility, Structure, Launch, Scale) is proven, repeatable, and transparent.',
                  },
                  {
                    title: 'We are selective',
                    body: 'We do not take every client who contacts us. We take businesses that are genuinely ready to franchise and owners who are ready to lead a network. This selectivity protects both our reputation and the owners we work with.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="heading-4 mb-2">{item.title}</h3>
                    <p className="text-steel text-[17px] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <MidCTA route="/about" />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-6">Our approach to franchise development</h2>
          <p className="body-large max-w-[880px] mx-auto mb-12">
            We believe franchise development should be honest, thorough, and results driven. Here is how
            we approach every engagement.
          </p>
          <div className="tile-grid md:grid-cols-3">
            {[
              {
                title: 'Transparency first',
                body: 'We publish our process, our methodology, and our educational content for free. We believe the best clients come from owners who already understand what franchising requires. If you can do it yourself after reading our guides, more power to you.',
              },
              {
                title: 'Education over sales',
                body: 'We teach before we sell. Every piece of content we create, from blog posts to tools to state law guides, is designed to give you real knowledge. By the time you contact us, you should already feel confident about what you are getting into.',
              },
              {
                title: 'Built to last',
                body: 'We do not cut corners on compliance, documentation, or systems. A franchise built on shortcuts will collapse under the weight of its first ten franchisees. We build franchise systems that hold up at scale.',
              },
            ].map((item) => (
              <div key={item.title} className="card text-left">
                <h3 className="heading-4 mb-3">{item.title}</h3>
                <p className="text-steel text-[17px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrokerageBand className="bg-graphite surface-dark" />

      <ContinueLearning
        heading="Understand our approach"
        links={[
          { label: 'How our process works', href: '/how-it-works', description: 'See the four phases that take a business from proven concept to franchise brand.' },
          { label: 'Our services', href: '/services', description: 'Seven core services, all under one roof, built in a specific sequence.' },
          { label: 'Get your readiness score', href: '/is-my-business-franchisable', description: 'Answer eight questions and find out where your business stands.' },
        ]}
      />

      <SectionCTA
        heading="See if your business has what it takes"
        body="Take our two-minute franchise readiness assessment. You will get a score, specific recommendations, and a clear picture of what comes next."
        buttonText="Get your free readiness score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a feasibility call directly"
        secondaryHref="/contact"
      />
    </>
  )
}
