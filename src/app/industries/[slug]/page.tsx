import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { StickyCTA } from '@/components/StickyCTA'
import { INDUSTRIES, SITE_URL } from '@/lib/constants'
import { serviceSchema, webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'
import { INDUSTRY_DATA } from '@/data/industries'
import { sentenceCase } from '@/lib/text'

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
    title: industry.metaTitle,
    description: industry.metaDescription,
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

  const pageUrl = `${SITE_URL}/industries/${slug}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: pageUrl,
              name: industry.metaTitle,
              description: industry.metaDescription,
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(pageUrl, [
              { name: 'Industries', url: `${SITE_URL}/industries` },
              { name: industry.name },
            ]),
            serviceSchema({
              url: pageUrl,
              name: `${industry.name} Franchise Development`,
              description: industry.description,
              serviceType: `${industry.name} Franchise Consulting`,
            }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.name },
            ]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">
              {industry.h1}
            </h1>
            <p className="body-large">
              {data.heroSubhead}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-4xl">
            {data.intro.map((paragraph, i) => (
              <p key={i} className="text-steel text-[17px] leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Industry Franchises Well */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">{sentenceCase(`Why ${industry.name} Franchises Well`)}</h2>
            <div className="card">
              <ul className="space-y-4">
                {data.whyFranchisesWell.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Range */}
      <section className="section-padding bg-graphite surface-dark">
        <div className="container-wide">
          <h2 className="heading-2 text-white mb-8">Typical investment range</h2>
          <div className="numeral text-[40px] sm:text-[56px] leading-none mb-8">
            {data.investmentRange}
          </div>
          <p className="text-steel text-[17px] max-w-[880px] leading-relaxed">
            {data.investmentDetails}
          </p>
          <div className="mt-8">
            <Link href="/calculator" className="btn-primary">
              Estimate your franchise costs
            </Link>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">Key success factors</h2>
            <p className="text-steel text-[17px] leading-relaxed mb-8">
              Franchising in the {industry.name.toLowerCase()} space requires more than a good business. These
              are the factors that separate franchise systems that scale from those that stall.
            </p>
            <div className="tile-grid md:grid-cols-2">
              {data.successFactors.map((factor) => (
                <div key={factor.title} className="card">
                  <h3 className="heading-4 mb-3">{sentenceCase(factor.title)}</h3>
                  <p className="text-steel text-[17px] leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">{sentenceCase(`Common Challenges in ${industry.name} Franchising`)}</h2>
            <p className="text-steel text-[17px] leading-relaxed mb-8">
              Every industry has friction points that can derail a franchise system. Knowing these challenges
              before you start development is not pessimism. It is preparation. Here is what to watch for.
            </p>
            <div className="tile-grid md:grid-cols-2">
              {data.challenges.map((challenge) => (
                <div key={challenge.title} className="card">
                  <h3 className="heading-4 mb-3">{sentenceCase(challenge.title)}</h3>
                  <p className="text-steel text-[17px] leading-relaxed">{challenge.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What It Takes */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">{sentenceCase(`What It Takes to Franchise Your ${industry.shortName} Business`)}</h2>
            <div className="card">
              <p className="text-steel text-[17px] leading-relaxed mb-6">
                Before you invest in franchise development, make sure your business meets these baseline
                requirements. If you are missing one or two items, that does not mean franchising is off
                the table. It means there is work to do before you start the process.
              </p>
              <ul className="space-y-4">
                {data.whatItTakes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-8">Next steps</h2>
            <div className="tile-grid md:grid-cols-3">
              <Link href="/how-it-works" className="card-interactive">
                <h3 className="heading-4 mb-2">Our process</h3>
                <p className="text-steel text-sm">
                  See the four phase franchise development process we use for every concept.
                </p>
              </Link>
              <Link href="/calculator" className="card-interactive">
                <h3 className="heading-4 mb-2">Franchise calculator</h3>
                <p className="text-steel text-sm">
                  Estimate your franchise development costs and potential ROI.
                </p>
              </Link>
              <Link href="/contact" className="card-interactive">
                <h3 className="heading-4 mb-2">Talk to us</h3>
                <p className="text-steel text-sm">
                  Book a free feasibility call to discuss your {industry.name.toLowerCase()} concept.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Keep exploring"
        links={[
          { label: 'How the franchise process works', href: '/how-it-works', description: 'See the four phases every franchise we develop moves through.' },
          { label: 'Compare our packages', href: '/packages', description: 'Three tiers with clear scoping so you know exactly what you get.' },
          { label: 'Franchise laws by state', href: '/franchise-laws', description: 'Know the regulatory landscape before you plan your rollout.' },
        ]}
      />

      <SectionCTA
        heading={sentenceCase(`Ready to Franchise Your ${industry.shortName} Business?`)}
        body={`We have helped ${industry.name.toLowerCase()} businesses evaluate their franchise potential and build the systems needed to scale. Book a free call and let us take a look at your concept.`}
        buttonText={sentenceCase(`See If Your ${industry.shortName} Business Qualifies`)}
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a feasibility call directly"
        secondaryHref="/contact"
      />

      <StickyCTA
        text={sentenceCase(`See If Your ${industry.shortName} Business Qualifies`)}
        href="/is-my-business-franchisable"
      />
    </>
  )
}
