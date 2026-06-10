import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { StickyCTA } from '@/components/StickyCTA'
import { INDUSTRIES } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Franchise Industries We Serve',
  description:
    'Explore franchise development across 10 major industries. Learn which business types franchise best and what it takes to scale your concept nationally.',
  path: '/industries',
})

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Industries</p>
            <h1 className="heading-1 mb-8">
              Every Industry Franchises Differently. Here Is What Matters in Yours.
            </h1>
            <p className="body-large mb-6">
              Franchising is not one size fits all. A restaurant franchise has almost nothing in common
              with a home services franchise when it comes to buildout costs, training requirements,
              territory structure, or regulatory exposure. The fundamentals of the FDD are the same across
              every industry, but the strategy behind it changes completely.
            </p>
            <p className="body-large">
              We have studied franchise development across every major industry vertical. Below, you will
              find detailed guides on what franchising looks like in each sector: the investment ranges,
              the operational challenges, the success factors, and the mistakes that kill franchise systems
              before they reach ten units. Pick your industry and learn what it actually takes to franchise
              in your space.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card-interactive group"
              >
                <h2 className="heading-4 mb-3 group-hover:text-amber transition-colors">
                  {industry.name}
                </h2>
                <p className="text-muted-brown text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <span className="text-amber font-semibold text-sm inline-flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-6">What Makes an Industry Franchise Well?</h2>
          <p className="body-large max-w-3xl mx-auto mb-12">
            Not every business model is built for franchising. The industries that scale best through
            franchising share a few common characteristics.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Repeatable Operations',
                body: 'The business can be documented, trained, and replicated by someone who did not build it. If the founder is the secret ingredient, franchising will not work.',
              },
              {
                title: 'Proven Unit Economics',
                body: 'There is a clear financial model: known costs, predictable revenue patterns, and margins that support both the franchisee and the franchisor royalty structure.',
              },
              {
                title: 'Local Demand, National Appeal',
                body: 'The concept works in the local market and there is evidence that demand exists in other geographies. Consumers in different cities want the same thing.',
              },
            ].map((item) => (
              <div key={item.title} className="card text-left">
                <h3 className="heading-4 mb-3">{item.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open loop: curiosity about what makes certain industries fail */}
      <OpenLoop
        teaser="Some of the most profitable local businesses make terrible franchises. The difference comes down to three structural factors that most owners never think about until it is too late."
        linkText="Learn what makes a business franchisable"
        href="/blog/is-your-business-ready-to-franchise"
        variant="section"
      />

      <ContinueLearning
        heading="Keep Exploring"
        links={[
          { label: 'How Our Process Works', href: '/how-it-works', description: 'The four phases that take a business from proven concept to franchise brand.' },
          { label: 'Franchise Glossary', href: '/glossary', description: 'Over 40 franchise terms defined in plain language with real context.' },
          { label: 'Franchise Laws by State', href: '/franchise-laws', description: 'Know the regulatory landscape before you plan your expansion.' },
        ]}
      />

      <SectionCTA
        heading="Not Sure If Your Industry Is Right for Franchising?"
        body="Take our two-minute assessment and get an honest answer. Your score reflects your specific business, not just your industry."
        buttonText="See If Your Business Qualifies"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or talk to our team directly"
        secondaryHref="/contact"
      />

      <StickyCTA
        text="See If Your Business Qualifies"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
