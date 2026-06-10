import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { StickyCTA } from '@/components/StickyCTA'
import { INDUSTRIES } from '@/lib/constants'
import { INDUSTRY_DATA } from '@/data/industries'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const industry = INDUSTRIES.find((i) => i.slug === slug)
  if (!industry) return {}

  return createMetadata({
    title: `How to ${industry.keyword.charAt(0).toUpperCase() + industry.keyword.slice(1)}`,
    description: `${industry.description} Learn about investment ranges, success factors, challenges, and what it takes to franchise in the ${industry.name.toLowerCase()} industry.`,
    path: `/industries/${slug}`,
  })
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = INDUSTRIES.find((i) => i.slug === slug)
  const data = INDUSTRY_DATA[slug]

  if (!industry || !data) {
    notFound()
  }

  return (
    <>
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.name },
            ]}
          />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              {industry.name} Franchising
            </p>
            <h1 className="heading-1 mb-8">
              How to {industry.keyword.charAt(0).toUpperCase() + industry.keyword.slice(1)}: What It Actually Takes
            </h1>
            <p className="body-large">
              {data.heroSubhead}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            {data.intro.map((paragraph, i) => (
              <p key={i} className="text-muted-brown leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Industry Franchises Well */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">Why {industry.name} Franchises Well</h2>
            <div className="card">
              <ul className="space-y-4">
                {data.whyFranchisesWell.map((item, i) => (
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
      </section>

      {/* Investment Range */}
      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 text-cream mb-4">Typical Investment Range</h2>
          <div className="text-4xl sm:text-5xl font-display font-bold text-amber mb-6">
            {data.investmentRange}
          </div>
          <p className="text-cream/70 max-w-3xl mx-auto leading-relaxed">
            {data.investmentDetails}
          </p>
          <div className="mt-8">
            <Link href="/calculator" className="btn-primary">
              Estimate Your Franchise Costs
            </Link>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">Key Success Factors</h2>
            <p className="text-muted-brown leading-relaxed mb-8">
              Franchising in the {industry.name.toLowerCase()} space requires more than a good business. These
              are the factors that separate franchise systems that scale from those that stall.
            </p>
            <div className="space-y-6">
              {data.successFactors.map((factor) => (
                <div key={factor.title} className="card">
                  <h3 className="heading-4 mb-3">{factor.title}</h3>
                  <p className="text-muted-brown leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">Common Challenges in {industry.name} Franchising</h2>
            <p className="text-muted-brown leading-relaxed mb-8">
              Every industry has friction points that can derail a franchise system. Knowing these challenges
              before you start development is not pessimism. It is preparation. Here is what to watch for.
            </p>
            <div className="space-y-6">
              {data.challenges.map((challenge) => (
                <div key={challenge.title} className="card">
                  <h3 className="heading-4 mb-3">{challenge.title}</h3>
                  <p className="text-muted-brown leading-relaxed">{challenge.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What It Takes */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">What It Takes to Franchise Your {industry.shortName} Business</h2>
            <div className="card">
              <p className="text-muted-brown leading-relaxed mb-6">
                Before you invest in franchise development, make sure your business meets these baseline
                requirements. If you are missing one or two items, that does not mean franchising is off
                the table. It means there is work to do before you start the process.
              </p>
              <ul className="space-y-4">
                {data.whatItTakes.map((item, i) => (
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
      </section>

      {/* Related Resources */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">Next Steps</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/how-it-works" className="card-interactive">
                <h3 className="heading-4 mb-2">Our Process</h3>
                <p className="text-muted-brown text-sm">
                  See the four phase franchise development process we use for every concept.
                </p>
              </Link>
              <Link href="/calculator" className="card-interactive">
                <h3 className="heading-4 mb-2">Franchise Calculator</h3>
                <p className="text-muted-brown text-sm">
                  Estimate your franchise development costs and potential ROI.
                </p>
              </Link>
              <Link href="/contact" className="card-interactive">
                <h3 className="heading-4 mb-2">Talk to Us</h3>
                <p className="text-muted-brown text-sm">
                  Book a free feasibility call to discuss your {industry.name.toLowerCase()} concept.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OpenLoop
        teaser={`The franchise fee structure for ${industry.name.toLowerCase()} businesses depends on unit economics that most owners have never modeled. We walk through the math, the benchmarks, and the common mistakes.`}
        linkText="See how franchise economics work"
        href="/calculator"
        variant="section"
      />

      <ContinueLearning
        heading="Keep Exploring"
        links={[
          { label: 'How the Franchise Process Works', href: '/how-it-works', description: 'See the four phases every franchise we develop moves through.' },
          { label: 'Compare Our Packages', href: '/packages', description: 'Three tiers with clear scoping so you know exactly what you get.' },
          { label: 'Franchise Laws by State', href: '/franchise-laws', description: 'Know the regulatory landscape before you plan your rollout.' },
        ]}
      />

      <SectionCTA
        heading={`Ready to Franchise Your ${industry.shortName} Business?`}
        body={`We have helped ${industry.name.toLowerCase()} businesses evaluate their franchise potential and build the systems needed to scale. Book a free call and let us take a look at your concept.`}
        buttonText={`See If Your ${industry.shortName} Business Qualifies`}
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a feasibility call directly"
        secondaryHref="/contact"
      />

      <StickyCTA
        text={`See If Your ${industry.shortName} Business Qualifies`}
        href="/is-my-business-franchisable"
      />
    </>
  )
}
