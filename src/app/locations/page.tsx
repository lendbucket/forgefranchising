import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { cities } from '@/data/cities'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Arrow } from '@/components/Arrow'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Franchise Consultant Near You',
  description:
    'Franchise consultant coverage across 62 US metros. Get local market data, the industries franchising fastest near you, and a team that has operated units.',
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
                        {city.name} Franchise Consulting
                        <Arrow size={14} className="text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              <Link href="/own-a-franchise/apply" className="btn-secondary">Own a Forge franchise</Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: SITE_URL + '/locations' },
            ],
          }),
        }}
      />
    </>
  )
}
