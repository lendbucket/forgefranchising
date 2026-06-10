import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { cities, getCityBySlug } from '@/data/cities'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { SectionCTA } from '@/components/SectionCTA'

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

type Props = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}

  const title = `${city.name} Franchise Consultant`
  const description = `Franchise consulting in the ${city.metroArea} metro. Forge Franchising helps ${city.name} business owners franchise their ${city.topIndustries[0]?.toLowerCase() || 'proven'} concepts and connects buyers with opportunities.`

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Forge Franchising`,
      description,
      url: `${SITE_URL}/locations/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
    },
    alternates: {
      canonical: `${SITE_URL}/locations/${slug}`,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)

  if (!city) {
    notFound()
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_NAME} - ${city.name}, ${city.stateAbbr}`,
    description: `Franchise consulting services in ${city.name}, ${city.stateAbbr}. We help business owners franchise their proven concepts and connect qualified buyers with franchise opportunities.`,
    url: `${SITE_URL}/locations/${city.slug}`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: city.state,
      },
    },
    serviceType: [
      'Franchise Consulting',
      'Franchise Development',
      'Franchise Brokerage',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
      { '@type': 'ListItem', position: 3, name: `${city.name}, ${city.stateAbbr}`, item: `${SITE_URL}/locations/${city.slug}` },
    ],
  }

  const industryLinkMap: Record<string, string> = {
    'Food & Beverage': '/industries/restaurants',
    'Fitness & Wellness': '/industries/fitness',
    'Home Services': '/industries/home-services',
    'Beauty & Personal Care': '/industries/salons-beauty',
    'Automotive Services': '/industries/automotive',
    'Pet Services': '/industries/pet-care',
    'Childcare': '/industries/childcare-education',
    'Education & Tutoring': '/industries/childcare-education',
    'Health & Wellness': '/industries/health-medical',
    'Senior Care': '/industries/health-medical',
  }

  // Get related cities from the same state (excluding current city)
  const relatedCities = cities
    .filter((c) => c.state === city.state && c.slug !== city.slug)
    .slice(0, 4)

  // If not enough same-state cities, fill with nearby entries from the list
  const additionalCities =
    relatedCities.length < 4
      ? cities
          .filter((c) => c.slug !== city.slug && !relatedCities.some((r) => r.slug === c.slug))
          .slice(0, 4 - relatedCities.length)
      : []

  const nearbyLinks = [...relatedCities, ...additionalCities]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cream/50">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cream/30">/</span>
                <Link href="/locations" className="hover:text-cream transition-colors">
                  Locations
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cream/30">/</span>
                <span className="text-cream font-medium">
                  {city.name}, {city.stateAbbr}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <p className="eyebrow mb-4">Franchise Consulting Services</p>
          <h1 className="heading-1 text-cream mb-6">
            Franchise Consultant in {city.name}, {city.stateAbbr}
          </h1>
          <p className="text-lg text-cream/60 leading-relaxed max-w-2xl">
            Franchise development and consulting across the {city.metroArea} metro,
            from {city.topIndustries[0]?.toLowerCase() || 'local'} concepts to multi-unit
            growth strategies. We help {city.name} owners build franchise systems
            and connect qualified buyers with the right opportunities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2 space-y-16">
              {/* City Landscape */}
              <div>
                <h2 className="heading-2 mb-6">
                  Franchising in {city.name}, {city.stateAbbr}
                </h2>
                <div className="space-y-6 text-muted-brown">
                  <p className="body-large">{city.localInsight}</p>
                  <p>{city.franchiseActivity}</p>
                </div>
              </div>

              {/* Top Industries */}
              <div>
                <h3 className="heading-3 mb-6">
                  Top Franchise Industries in {city.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {city.topIndustries.map((industry) => {
                    const href = industryLinkMap[industry]
                    const cardContent = (
                      <>
                        <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-amber"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="heading-4 text-espresso">{industry}</h4>
                          <p className="text-sm text-muted-brown mt-1">
                            High demand in the {city.metroArea} market
                          </p>
                        </div>
                      </>
                    )
                    return href ? (
                      <Link
                        key={industry}
                        href={href}
                        className="card-interactive p-5 flex items-start gap-4 group"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div
                        key={industry}
                        className="card p-5 flex items-start gap-4"
                      >
                        {cardContent}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Two-Way Help Section */}
              <div>
                <h3 className="heading-3 mb-6">
                  How We Help in {city.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Franchise Your Business Card */}
                  <div className="card-interactive p-6 group">
                    <div className="w-12 h-12 rounded-lg bg-espresso/10 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-espresso"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                        />
                      </svg>
                    </div>
                    <h4 className="heading-4 mb-2">Franchise Your Business</h4>
                    <p className="text-sm text-muted-brown mb-4">
                      Own a successful business in {city.name}? We help you build a franchise system
                      from the ground up, including your FDD, operations manual, and growth strategy.
                    </p>
                    <Link
                      href="/services"
                      className="text-amber text-sm font-semibold group-hover:underline"
                    >
                      Learn about our services
                    </Link>
                  </div>

                  {/* Own a Forge Franchise Card */}
                  <div className="card-interactive p-6 group">
                    <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-amber"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>
                    <h4 className="heading-4 mb-2">Own a Forge Franchise</h4>
                    <p className="text-sm text-muted-brown mb-4">
                      Interested in owning a franchise consulting business in the {city.metroArea} area?
                      Forge Franchising is expanding and looking for qualified operators.
                    </p>
                    <Link
                      href="/own-a-franchise"
                      className="text-amber text-sm font-semibold group-hover:underline"
                    >
                      Explore the opportunity
                    </Link>
                  </div>
                </div>
              </div>

              {/* City Stats */}
              <div>
                <h3 className="heading-3 mb-6">{city.name} Market Snapshot</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="card p-5 text-center">
                    <p className="text-2xl font-bold text-espresso">{city.population}</p>
                    <p className="text-xs text-muted-brown mt-1 uppercase tracking-wider">
                      Population
                    </p>
                  </div>
                  <div className="card p-5 text-center">
                    <p className="text-2xl font-bold text-espresso">
                      {city.topIndustries.length}
                    </p>
                    <p className="text-xs text-muted-brown mt-1 uppercase tracking-wider">
                      Top Industries
                    </p>
                  </div>
                  <div className="card p-5 text-center col-span-2 sm:col-span-1">
                    <p className="text-lg font-bold text-espresso leading-tight">
                      {city.metroArea}
                    </p>
                    <p className="text-xs text-muted-brown mt-1 uppercase tracking-wider">
                      Metro Area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Assessment CTA Card */}
                <div className="card p-6 bg-deep-cream">
                  <h3 className="heading-4 mb-3">Is Your Business Ready to Franchise?</h3>
                  <p className="text-sm text-muted-brown mb-4">
                    Take our free assessment to find out if your {city.name} business
                    is a strong franchise candidate. No commitment required.
                  </p>
                  <Link
                    href="/is-my-business-franchisable"
                    className="btn-primary text-sm w-full text-center block"
                  >
                    Get Your Free Readiness Score
                  </Link>
                </div>

                {/* Franchise Opportunity CTA Card */}
                <div className="card p-6">
                  <h3 className="heading-4 mb-3">Own a Franchise in {city.name}</h3>
                  <p className="text-sm text-muted-brown mb-4">
                    Qualified candidates can apply to own a Forge Franchising
                    territory in the {city.metroArea} market.
                  </p>
                  <Link
                    href="/own-a-franchise/apply"
                    className="btn-secondary text-sm w-full text-center block"
                  >
                    Apply Now
                  </Link>
                </div>

                {/* Related Resource Links */}
                <div className="card p-6">
                  <h4 className="text-sm font-semibold text-espresso mb-4 uppercase tracking-wider">
                    Related Resources
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/services"
                        className="text-sm text-muted-brown hover:text-amber transition-colors"
                      >
                        Our Franchise Development Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/how-it-works"
                        className="text-sm text-muted-brown hover:text-amber transition-colors"
                      >
                        How the Process Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/franchise-laws"
                        className="text-sm text-muted-brown hover:text-amber transition-colors"
                      >
                        Franchise Laws by State
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/calculator"
                        className="text-sm text-muted-brown hover:text-amber transition-colors"
                      >
                        Franchise Cost Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-sm text-muted-brown hover:text-amber transition-colors"
                      >
                        Franchise Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Nearby Cities */}
                {nearbyLinks.length > 0 && (
                  <div className="card p-6">
                    <h4 className="text-sm font-semibold text-espresso mb-4 uppercase tracking-wider">
                      Nearby Markets
                    </h4>
                    <ul className="space-y-3">
                      {nearbyLinks.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/locations/${c.slug}`}
                            className="text-sm text-muted-brown hover:text-amber transition-colors"
                          >
                            {c.name}, {c.stateAbbr}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-espresso/10">
                      <Link
                        href="/locations"
                        className="text-sm text-amber font-semibold hover:underline"
                      >
                        View All Locations
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <SectionCTA
        heading={`Ready to Franchise in ${city.name}?`}
        body={`Whether you want to franchise your ${city.name} business or invest in a franchise opportunity in the ${city.metroArea} area, Forge Franchising can help. Start with a free consultation.`}
        secondaryText="Or explore our services first"
        secondaryHref="/services"
      />
    </>
  )
}
