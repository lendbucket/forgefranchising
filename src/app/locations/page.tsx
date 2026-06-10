import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { cities } from '@/data/cities'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Franchise Consulting by City',
  description: 'Find a Forge Franchising franchise consultant near you. We serve business owners and franchise candidates in over 60 major US markets.',
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
      <section className="bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cream/50">
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span className="text-cream/30">/</span><span className="text-cream font-medium">Locations</span></li>
            </ol>
          </nav>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <p className="eyebrow mb-4">Service Areas</p>
          <h1 className="heading-1 text-cream mb-6">Franchise Consulting and Brokerage Services Across the United States</h1>
          <p className="text-lg text-cream/60 leading-relaxed max-w-2xl">
            Forge Franchising helps business owners franchise their proven concepts and connects qualified buyers
            with franchise opportunities. Find franchise consulting services in your city.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sortedStates.map((state) => (
              <div key={state}>
                <h2 className="heading-4 mb-4">{state}</h2>
                <ul className="space-y-2">
                  {stateGroups[state].map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={"/locations/" + city.slug}
                        className="text-sm text-muted-brown hover:text-amber transition-colors"
                      >
                        {city.name} Franchise Consulting
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="heading-3 mb-4">Do Not See Your City?</h2>
            <p className="body-large mb-8 max-w-xl mx-auto">
              We serve business owners nationwide. Contact us to discuss franchise consulting
              or brokerage services in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Franchise Your Business</Link>
              <Link href="/own-a-franchise/apply" className="btn-secondary">Own a Forge Franchise</Link>
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
