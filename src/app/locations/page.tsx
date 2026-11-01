import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { cities, cityLabel } from '@/data/cities'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Arrow } from '@/components/Arrow'
import { SectionCTA } from '@/components/SectionCTA'
import { HeroActions } from '@/components/HeroActions'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Franchise Consultant Near You',
  description:
    'Find a franchise consultant near you. Pages for 60 US metros cover local market data, state franchise law, and how Forge helps owners franchise a business.',
  path: '/locations',
})

export default function LocationsPage() {
  const stateGroups: Record<string, typeof cities> = {}
  for (const city of cities) {
    if (!stateGroups[city.state]) stateGroups[city.state] = []
    stateGroups[city.state].push(city)
  }
  const sortedStates = Object.keys(stateGroups).sort()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/locations`,
              name: 'Franchise Consulting by City',
              description: 'Find a Forge Franchising franchise consultant near you. We serve business owners and franchise candidates in over 60 major US markets.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/locations`, [
              { name: 'Locations' },
            ]),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Locations' }]} withSchema={false} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">Franchise Consultant Coverage Across the United States</h1>
            <p className="body-large">
              Forge Franchising helps business owners franchise their proven concepts and connects qualified buyers
              with franchise opportunities. Find a franchise consultant in your city.
            </p>
            <HeroActions route="/locations" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {sortedStates.map((state) => (
              <div key={state}>
                <h2 className="heading-4 mb-4">{state}</h2>
                <ul className="border-t border-graphite">
                  {stateGroups[state].map((city) => (
                    <li key={city.slug} className="border-b border-line">
                      <Link
                        href={"/locations/" + city.slug}
                        className="group flex items-center justify-between gap-4 min-h-[52px] py-3 text-[15px] text-steel hover:text-accent transition-colors"
                      >
                        Franchise consultant in {cityLabel(city)}
                        <Arrow size={14} className="text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t-2 border-graphite pt-8 grid min-[961px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-6 min-[961px]:gap-20 items-center">
            <div>
              <h2 className="heading-3 mb-3">Looking for a franchise broker near you?</h2>
              <p className="text-steel text-[17px] leading-relaxed max-w-[620px]">
                If you want to buy a franchise rather than franchise your own business, Forge works with buyers across
                Texas to compare brands and read the FDD before they sign.
              </p>
            </div>
            <div className="min-[961px]:justify-self-end">
              <Link href="/franchise-broker" className="btn-secondary">Franchise broker in Texas</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-2 gap-10 min-[961px]:gap-20 items-end">
            <div>
              <h2 className="heading-2 mb-6">Do not see your city?</h2>
              <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
                We serve business owners nationwide. Contact us to discuss franchise consulting
                or brokerage services in your market.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 min-[961px]:justify-end">
              <Link href="/contact" className="btn-primary">Franchise your business</Link>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Talk to Forge about your business"
        body="Get a franchise readiness score with specific recommendations for your business. Eight questions across the four pillars of the Forge Franchise Readiness Method. About two minutes. No cost, no obligation."
        buttonText="Get your free readiness score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Book a free feasibility call"
        secondaryHref="/contact"
      />
    </>
  )
}
