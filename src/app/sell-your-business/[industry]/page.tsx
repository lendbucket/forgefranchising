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
import { SELL_INDUSTRIES, getSellIndustry } from '@/data/sell-industries'

type Props = { params: Promise<{ industry: string }> }

export function generateStaticParams() {
  return SELL_INDUSTRIES.map((i) => ({ industry: i.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { industry: slug } = await params
  const data = getSellIndustry(slug)
  if (!data) return {}
  return createMetadata({ title: data.title, description: data.description, path: `/sell-your-business/${data.slug}` })
}

const p = 'text-steel text-[17px] leading-relaxed mb-5'
const link = 'text-accent font-semibold hover:underline'

export default async function SellIndustryPage({ params }: Props) {
  const { industry: slug } = await params
  const data = getSellIndustry(slug)
  if (!data) notFound()

  const path = `/sell-your-business/${data.slug}`
  const url = `${SITE_URL}${path}`
  const siblings = data.siblings.map((s) => getSellIndustry(s)).filter((s) => s !== undefined)

  const toc = [
    { id: 'buyers', label: 'What buyers check first' },
    { id: 'records', label: 'Records to prepare' },
    { id: 'earnings', label: 'How earnings are measured' },
    { id: 'licensing', label: 'Licensing and transfer' },
    ...(data.extra ? [{ id: data.extra.id, label: data.extra.tocLabel }] : []),
    { id: 'confidentiality', label: 'Confidentiality' },
    { id: 'value', label: 'Pricing the business' },
    { id: 'faq', label: 'Questions' },
    { id: 'inquiry', label: 'Start a confidential inquiry' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: data.title, description: data.description, hasBreadcrumb: true }),
            breadcrumbSchema(url, [
              { name: 'Sell Your Business', url: `${SITE_URL}/sell-your-business` },
              { name: data.breadcrumb },
            ]),
            serviceSchema({
              url,
              name: data.serviceName,
              description: data.description,
              serviceType: 'Business Brokerage',
              areaServed: TEXAS_AREA,
            }),
            faqSchema({ url, questions: data.faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            withSchema={false}
            items={[{ label: 'Sell Your Business', href: '/sell-your-business' }, { label: data.breadcrumb }]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">{data.h1}</h1>
            {data.intro.map((text, i) => (
              <p key={i} className={`body-large ${i === data.intro.length - 1 ? 'mb-8' : 'mb-6'}`}>
                {text}
              </p>
            ))}
            {data.callout && (
              <p className="body-large mb-8">
                {data.callout.before}
                <Link href={data.callout.href} className={link}>{data.callout.label}</Link>
                {data.callout.after}
              </p>
            )}
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
              <section id="buyers" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{data.buyers.heading}</h2>
                <p className={p}>{data.buyers.intro}</p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  {data.buyers.items.map((item) => (
                    <div key={item.term} className="card">
                      <p className="heading-4 mb-3">{item.term}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="records" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{data.records.heading}</h2>
                <p className={p}>
                  {data.records.intro} The general document list is on our{' '}
                  <Link href="/sell-your-business/how-to-sell-a-business" className={link}>how to sell a business</Link> guide.
                </p>
                <ul className="border-t border-graphite mt-6">
                  {data.records.items.map((item) => (
                    <li key={item.item} className="border-b border-line py-5">
                      <p className="font-semibold text-graphite mb-1">{item.item}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{item.why}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="earnings" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{data.earnings.heading}</h2>
                {data.earnings.body.map((text, i) => (
                  <p key={i} className={p}>{text}</p>
                ))}
                <h3 className="heading-4 mt-8 mb-4">{data.earnings.addBacksHeading}</h3>
                <ul className="list-disc pl-6 space-y-3 text-steel leading-relaxed">
                  {data.earnings.addBacks.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </section>

              <section id="licensing" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{data.licensing.heading}</h2>
                {data.licensing.body.map((text, i) => (
                  <p key={i} className={p}>{text}</p>
                ))}
                {data.licensing.sources.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-graphite mb-2">Official sources</p>
                    <ul className="space-y-1">
                      {data.licensing.sources.map((s) => (
                        <li key={s.url}>
                          <a href={s.url} target="_blank" rel="noopener noreferrer" className={`${link} text-[15px] inline-flex items-center min-h-[44px]`}>
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>

              {data.extra && (
                <section id={data.extra.id} className="scroll-mt-header">
                  <h2 className="heading-2 mb-6">{data.extra.heading}</h2>
                  {data.extra.body.map((text, i) => (
                    <p key={i} className={p}>{text}</p>
                  ))}
                  {data.extra.rows && (
                    <div className="tile-grid md:grid-cols-2 mt-8">
                      {data.extra.rows.map((row) => (
                        <div key={row.term} className="card">
                          <p className="heading-4 mb-3">{row.term}</p>
                          <p className="text-steel text-[15px] leading-relaxed">{row.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              <section id="confidentiality" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{data.confidentiality.heading}</h2>
                <p className={p}>{data.confidentiality.intro}</p>
                <ul className="list-disc pl-6 space-y-3 text-steel leading-relaxed">
                  {data.confidentiality.items.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <MidCTA route={path} />
              </section>

              <section id="value" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">{data.value.heading}</h2>
                <p className={p}>{data.value.body}</p>
                <div data-shared>
                  <p className={p}>
                    Forge prepares a broker opinion of value from the recast earnings, the condition of the assets, the
                    risks a buyer would take on, and market evidence. A broker opinion of value is not a certified
                    appraisal and is not a substitute for one. If a lender, a partner, or a court needs a formal
                    appraisal, that is a separate engagement with a credentialed appraiser. Our{' '}
                    <Link href="/business-valuation" className={link}>business valuation</Link> page explains how the
                    opinion is built.
                  </p>
                </div>
              </section>

              <div data-shared>
                <BrokerageNotice />
              </div>

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">{data.faqHeading}</h2>
                <FAQList faqs={data.faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-header pt-4" data-shared>
                <h2 className="heading-2 mb-6">Talk to Forge about selling your {data.formNoun}</h2>
                <p className={p}>
                  Inquiries are confidential. Financial documents come later, after a confidentiality agreement is in place.
                </p>
                <IntakeForm inquiryType="seller" defaults={{ industry: data.formIndustry }} />
              </section>

              <section aria-labelledby="related-heading" className="pt-4">
                <h2 id="related-heading" className="heading-3 mb-6">Related pages</h2>
                <ul className="border-t border-graphite">
                  {data.industryPage && (
                    <RelatedLink href={data.industryPage.href} label={data.industryPage.label} />
                  )}
                  {data.blogPost && <RelatedLink href={data.blogPost.href} label={data.blogPost.label} />}
                  {siblings.map((s) => (
                    <RelatedLink key={s.slug} href={`/sell-your-business/${s.slug}`} label={s.h1} />
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
          { label: 'How to sell a business', href: '/sell-your-business/how-to-sell-a-business', description: 'The full step by step guide, with the documents each step needs.' },
          { label: 'Business valuation', href: '/business-valuation', description: 'How buyers and lenders value a small business, and what a broker opinion of value covers.' },
          { label: 'Sell your business', href: '/sell-your-business', description: 'How a confidential, broker led sale works in Texas.' },
        ]}
      />

      <SectionCTA
        heading={data.closing.heading}
        body={data.closing.body}
        buttonText="Start a confidential inquiry"
        buttonHref="#inquiry"
        secondaryText="Or see every industry we cover"
        secondaryHref="/sell-your-business#sell-by-industry"
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
