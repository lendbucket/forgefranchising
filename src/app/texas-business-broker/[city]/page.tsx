import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageTOC } from '@/components/PageTOC'
import { FAQList } from '@/components/FAQList'
import { ContinueLearning } from '@/components/ContinueLearning'
import { SectionCTA } from '@/components/SectionCTA'
import { BrokerageNotice } from '@/components/BrokerageNotice'
import { IntakeForm } from '@/components/IntakeForm'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import { Arrow } from '@/components/Arrow'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'
import { TEXAS_BROKERAGE_MARKETS, getTexasBrokerageMarket } from '@/data/texas-brokerage-markets'
import { SELL_INDUSTRIES } from '@/data/sell-industries'

type Props = { params: Promise<{ city: string }> }

export function generateStaticParams() {
  return TEXAS_BROKERAGE_MARKETS.map((m) => ({ city: m.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params
  const market = getTexasBrokerageMarket(city)
  if (!market) return {}
  return createMetadata({ title: market.title, description: market.description, path: `/texas-business-broker/${market.slug}` })
}

const p = 'text-steel text-[17px] leading-relaxed mb-5'
const link = 'text-accent font-semibold hover:underline'

export default async function TexasBrokerageMarketPage({ params }: Props) {
  const { city } = await params
  const market = getTexasBrokerageMarket(city)
  if (!market) notFound()

  const path = `/texas-business-broker/${market.slug}`
  const url = `${SITE_URL}${path}`
  const industries = SELL_INDUSTRIES.filter((i) => i.markets.includes(market.slug))
  const otherMarkets = TEXAS_BROKERAGE_MARKETS.filter((m) => m.slug !== market.slug)

  const toc = [
    { id: 'economy', label: 'The local economy' },
    { id: 'buyers', label: 'Who buys here' },
    { id: 'plan', label: 'What to plan for' },
    { id: 'working', label: 'How Forge works' },
    { id: 'faq', label: 'Questions' },
    { id: 'inquiry', label: 'Start a confidential inquiry' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: market.title, description: market.description, hasBreadcrumb: true }),
            breadcrumbSchema(url, [
              { name: 'Sell Your Business', url: `${SITE_URL}/sell-your-business` },
              { name: 'Texas Business Broker', url: `${SITE_URL}/texas-business-broker` },
              { name: market.name },
            ]),
            serviceSchema({
              url,
              name: `Business Brokerage in ${market.name}, Texas`,
              description: market.description,
              serviceType: 'Business Brokerage',
              areaServed: { '@type': 'City', name: market.name, containedInPlace: TEXAS_AREA },
            }),
            faqSchema({ url, questions: market.faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            withSchema={false}
            items={[
              { label: 'Sell Your Business', href: '/sell-your-business' },
              { label: 'Texas Business Broker', href: '/texas-business-broker' },
              { label: market.name },
            ]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">{market.h1}</h1>
            {market.intro.map((text, i) => (
              <p key={i} className="body-large mb-8">{text}</p>
            ))}
            <HeroActions route={path} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC items={toc} />
            </aside>

            <div className="lg:col-span-9 min-w-0 space-y-24 max-[720px]:space-y-16" data-dup-scope>
              <section id="economy" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{market.economy.heading}</h2>
                {market.economy.body.map((text, i) => (
                  <p key={i} className={p}>{text}</p>
                ))}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-graphite mb-2">Sources</p>
                  <ul className="space-y-1">
                    {market.economy.sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className={`${link} text-[15px] inline-flex items-center min-h-[44px]`}>
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="buyers" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{market.buyers.heading}</h2>
                {market.buyers.body.map((text, i) => (
                  <p key={i} className={p}>{text}</p>
                ))}
              </section>

              <section id="plan" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{market.considerations.heading}</h2>
                <p className={p}>{market.considerations.intro}</p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  {market.considerations.items.map((item) => (
                    <div key={item.term} className="card">
                      <p className="heading-4 mb-3">{item.term}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{item.text}</p>
                      {item.source && (
                        <a href={item.source.url} target="_blank" rel="noopener noreferrer" className={`${link} text-sm inline-flex items-center min-h-[44px] mt-2`}>
                          {item.source.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <MidCTA route={path} />
              </section>

              <section id="working" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{market.working.heading}</h2>
                {market.working.body.map((text, i) => (
                  <p key={i} className={p}>{text}</p>
                ))}
                <div data-shared>
                  <p className={p}>
                    Pricing starts with a broker opinion of value built from the recast earnings and market evidence. It
                    is not a certified appraisal. Our{' '}
                    <Link href="/business-valuation" className={link}>business valuation</Link> page explains how it is
                    prepared, and our <Link href="/sell-your-business" className={link}>sell your business</Link> page
                    walks through the full process.
                  </p>
                  <BrokerageNotice className="mt-8" />
                </div>
              </section>

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">Questions about selling a business in {market.name}</h2>
                <FAQList faqs={market.faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-header pt-4" data-shared>
                <h2 className="heading-2 mb-6">Talk to Forge about selling your {market.name} business</h2>
                <p className={p}>
                  Inquiries are confidential. Financial documents come later, after a confidentiality agreement is in place.
                </p>
                <IntakeForm inquiryType="seller" defaults={{ location: market.formCity }} />
              </section>

              <section aria-labelledby="related-heading" className="pt-4">
                <h2 id="related-heading" className="heading-3 mb-6">Related pages</h2>
                {industries.length > 0 && (
                  <>
                    <p className="text-sm font-semibold text-graphite mb-2">Selling in a specific industry</p>
                    <ul className="border-t border-graphite mb-10">
                      {industries.map((i) => (
                        <RelatedLink key={i.slug} href={`/sell-your-business/${i.slug}`} label={i.h1} />
                      ))}
                    </ul>
                  </>
                )}
                <p className="text-sm font-semibold text-graphite mb-2">Other Texas markets</p>
                <ul className="border-t border-graphite">
                  {otherMarkets.map((m) => (
                    <RelatedLink key={m.slug} href={`/texas-business-broker/${m.slug}`} label={m.h1} />
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          { label: 'Texas business broker', href: '/texas-business-broker', description: 'What a broker does, how to choose one, and how fees and listing terms work.' },
          { label: 'How to sell a business', href: '/sell-your-business/how-to-sell-a-business', description: 'The full step by step guide, with the documents each step needs.' },
          { label: 'Business valuation', href: '/business-valuation', description: 'How buyers and lenders value a small business.' },
        ]}
      />

      <SectionCTA
        heading={market.closing.heading}
        body={market.closing.body}
        buttonText="Start a confidential inquiry"
        buttonHref="#inquiry"
        secondaryText="Or read about Texas business brokers"
        secondaryHref="/texas-business-broker"
      />
    </>
  )
}

function RelatedLink({ href, label }: { href: string; label: string }) {
  return (
    <li className="border-b border-line">
      <Link href={href} className="group flex items-center justify-between gap-4 min-h-[52px] py-3 text-[15px] text-steel hover:text-accent transition-colors">
        {label}
        <Arrow size={14} className="text-accent" />
      </Link>
    </li>
  )
}
