import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { cities, getCityBySlug } from '@/data/cities'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/constants'
import { composeDescription } from '@/lib/metadata'
import {
  webPageSchema,
  breadcrumbSchema as breadcrumbSchemaHelper,
  serviceSchema,
  renderSchema,
} from '@/lib/schema'
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
  const description = composeDescription(
    `Franchise consultant services in ${city.name}, ${city.stateAbbr}.`,
    [
      ` Local market data for the ${city.metroArea} metro.`,
      ` See which industries are franchising fastest here.`,
      ` We help owners turn proven concepts into franchise systems.`,
      ` Book a free feasibility call.`,
      ` No obligation.`,
    ],
  )

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Forge Franchising`,
      description,
      url: `${SITE_URL}/locations/${slug}`,
      siteName: SITE_NAME,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
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

  const cityUrl = `${SITE_URL}/locations/${city.slug}`

  const cityGraphJson = renderSchema([
    webPageSchema({
      url: cityUrl,
      name: `${city.name} Franchise Consultant`,
      description: `Franchise consulting in the ${city.metroArea} metro. Forge Franchising helps ${city.name} business owners franchise their proven concepts.`,
      hasBreadcrumb: true,
    }),
    breadcrumbSchemaHelper(cityUrl, [
      { name: 'Locations', url: `${SITE_URL}/locations` },
      { name: `${city.name}, ${city.stateAbbr}` },
    ]),
    serviceSchema({
      url: cityUrl,
      name: `Franchise Consulting in ${city.name}, ${city.stateAbbr}`,
      description: `Franchise consulting services in ${city.name}, ${city.stateAbbr}. We help business owners franchise their proven concepts and connect qualified buyers with franchise opportunities.`,
      serviceType: 'Franchise Consulting',
    }),
  ])

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
        dangerouslySetInnerHTML={{ __html: cityGraphJson }}
      />

      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link href="/" className="transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>/</span>
                <Link href="/locations" className="transition-colors">
                  Locations
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>/</span>
                <span className="text-graphite font-medium">
                  {city.name}, {city.stateAbbr}
                </span>
              </li>
            </ol>
          </nav>
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-6">
              Franchise Consultant in {city.name}, {city.stateAbbr}
            </h1>
            <p className="body-large">
              Franchise development and consulting across the {city.metroArea} metro,
              from {city.topIndustries[0]?.toLowerCase() || 'local'} concepts to multi-unit
              growth strategies. We help {city.name} owners build franchise systems
              and connect qualified buyers with the right opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2 space-y-20 min-w-0">
              {/* City Landscape */}
              <div>
                <h2 className="heading-2 mb-8">
                  Franchising in {city.name}, {city.stateAbbr}
                </h2>
                <div className="space-y-6 text-steel text-[17px] leading-relaxed">
                  <p className="body-large">{city.localInsight}</p>
                  <p>{city.franchiseActivity}</p>
                </div>
              </div>

              {/* Top Industries */}
              <div>
                <h3 className="heading-3 mb-8">
                  Top franchise industries in {city.name}
                </h3>
                <div className="tile-grid md:grid-cols-2">
                  {city.topIndustries.map((industry) => {
                    const href = industryLinkMap[industry]
                    const cardContent = (
                      <>
                        <svg
                          className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                          />
                        </svg>
                        <div>
                          <h4 className="heading-4 text-graphite">{industry}</h4>
                          <p className="text-sm text-steel leading-relaxed mt-2">
                            High demand in the {city.metroArea} market
                          </p>
                        </div>
                      </>
                    )
                    return href ? (
                      <Link
                        key={industry}
                        href={href}
                        className="card-interactive flex items-start gap-4 group"
                      >
                        {cardContent}
                      </Link>
                    ) : (
                      <div
                        key={industry}
                        className="card flex items-start gap-4"
                      >
                        {cardContent}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Two-Way Help Section */}
              <div>
                <h3 className="heading-3 mb-8">
                  How we help in {city.name}
                </h3>
                <div className="tile-grid md:grid-cols-2">
                  {/* Franchise Your Business Card */}
                  <div className="card flex flex-col">
                    <svg
                      className="w-7 h-7 text-accent mb-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                      />
                    </svg>
                    <h4 className="heading-4 mb-3">Franchise your business</h4>
                    <p className="text-steel text-[17px] leading-relaxed mb-6">
                      Own a successful business in {city.name}? We help you build a franchise system
                      from the ground up, including your FDD, operations manual, and growth strategy.
                    </p>
                    <Link
                      href="/services"
                      className="text-link text-sm font-semibold mt-auto inline-flex items-center min-h-[44px] self-start"
                    >
                      Learn about our services
                    </Link>
                  </div>

                  {/* Own a Forge Franchise Card */}
                  <div className="card flex flex-col">
                    <svg
                      className="w-7 h-7 text-accent mb-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <h4 className="heading-4 mb-3">Own a Forge franchise</h4>
                    <p className="text-steel text-[17px] leading-relaxed mb-6">
                      Interested in owning a franchise consulting business in the {city.metroArea} area?
                      Forge Franchising is expanding and looking for qualified operators.
                    </p>
                    <Link
                      href="/own-a-franchise"
                      className="text-link text-sm font-semibold mt-auto inline-flex items-center min-h-[44px] self-start"
                    >
                      Explore the opportunity
                    </Link>
                  </div>
                </div>
              </div>

              {/* City Stats */}
              <div>
                <h3 className="heading-3 mb-8">{city.name} market snapshot</h3>
                <div className="tile-grid grid-cols-2 md:grid-cols-3">
                  <div className="card">
                    <p className="heading-3 text-graphite">{city.population}</p>
                    <p className="text-sm text-steel mt-2">
                      Population
                    </p>
                  </div>
                  <div className="card">
                    <p className="heading-3 text-graphite">
                      {city.topIndustries.length}
                    </p>
                    <p className="text-sm text-steel mt-2">
                      Top industries
                    </p>
                  </div>
                  <div className="card col-span-2 md:col-span-1">
                    <p className="heading-4 text-graphite">
                      {city.metroArea}
                    </p>
                    <p className="text-sm text-steel mt-2">
                      Metro area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 min-w-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Assessment CTA Card */}
                <div className="card bg-stone border-stone">
                  <h3 className="heading-4 mb-3">Is your business ready to franchise?</h3>
                  <p className="text-sm text-steel leading-relaxed mb-6">
                    Take our free assessment to find out if your {city.name} business
                    is a strong franchise candidate. No commitment required.
                  </p>
                  <Link
                    href="/is-my-business-franchisable"
                    className="btn-primary w-full"
                  >
                    Get your free readiness score
                  </Link>
                </div>

                {/* Franchise Opportunity CTA Card */}
                <div className="card">
                  <h3 className="heading-4 mb-3">Own a franchise in {city.name}</h3>
                  <p className="text-sm text-steel leading-relaxed mb-6">
                    Qualified candidates can apply to own a Forge Franchising
                    territory in the {city.metroArea} market.
                  </p>
                  <Link
                    href="/own-a-franchise/apply"
                    className="btn-secondary w-full"
                  >
                    Apply now
                  </Link>
                </div>

                {/* Related Resource Links */}
                <div className="card">
                  <h4 className="heading-4 mb-4">
                    Related resources
                  </h4>
                  <ul className="border-t border-graphite">
                    <li className="border-b border-line">
                      <Link
                        href="/services"
                        className="flex items-center min-h-[44px] py-2 text-sm text-steel hover:text-accent transition-colors"
                      >
                        Our franchise development services
                      </Link>
                    </li>
                    <li className="border-b border-line">
                      <Link
                        href="/how-it-works"
                        className="flex items-center min-h-[44px] py-2 text-sm text-steel hover:text-accent transition-colors"
                      >
                        How the process works
                      </Link>
                    </li>
                    <li className="border-b border-line">
                      <Link
                        href="/franchise-laws"
                        className="flex items-center min-h-[44px] py-2 text-sm text-steel hover:text-accent transition-colors"
                      >
                        Franchise laws by state
                      </Link>
                    </li>
                    <li className="border-b border-line">
                      <Link
                        href="/calculator"
                        className="flex items-center min-h-[44px] py-2 text-sm text-steel hover:text-accent transition-colors"
                      >
                        Franchise cost calculator
                      </Link>
                    </li>
                    <li className="border-b border-line">
                      <Link
                        href="/blog"
                        className="flex items-center min-h-[44px] py-2 text-sm text-steel hover:text-accent transition-colors"
                      >
                        Franchise blog
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Nearby Cities */}
                {nearbyLinks.length > 0 && (
                  <div className="card">
                    <h4 className="heading-4 mb-4">
                      Nearby markets
                    </h4>
                    <ul className="border-t border-graphite">
                      {nearbyLinks.map((c) => (
                        <li key={c.slug} className="border-b border-line">
                          <Link
                            href={`/locations/${c.slug}`}
                            className="flex items-center min-h-[44px] py-2 text-sm text-steel hover:text-accent transition-colors"
                          >
                            {c.name}, {c.stateAbbr}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Link
                        href="/locations"
                        className="text-link text-sm font-semibold inline-flex items-center min-h-[44px]"
                      >
                        View all locations
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
        heading={`Ready to franchise in ${city.name}?`}
        body={`Whether you want to franchise your ${city.name} business or invest in a franchise opportunity in the ${city.metroArea} area, Forge Franchising can help. Start with a free consultation.`}
        secondaryText="Or explore our services first"
        secondaryHref="/services"
      />
    </>
  )
}
