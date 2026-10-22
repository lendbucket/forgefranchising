import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { PageTOC } from '@/components/PageTOC'
import { FAQList } from '@/components/FAQList'
import { ContinueLearning } from '@/components/ContinueLearning'
import { SectionCTA } from '@/components/SectionCTA'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { BrokerageNotice } from '@/components/BrokerageNotice'
import { IntakeForm } from '@/components/IntakeForm'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'

const PATH = '/business-valuation'
const TITLE = 'Business Valuation Services in Texas'
const DESCRIPTION =
  'Business valuation services for Texas owners: how SDE, EBITDA, asset and market methods work, what moves value, and how a broker opinion of value is used.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const p = 'text-steel text-[17px] leading-relaxed mb-5'
const link = 'text-accent font-semibold hover:underline'

const addBacks = [
  {
    term: 'Owner compensation',
    text: 'The salary, payroll taxes, and benefits paid to one working owner are added back, because a buyer will replace that pay with their own. Pay to a second owner or to family members who will not stay is treated separately, and a market wage for any role a buyer must fill is not added back.',
  },
  {
    term: 'Depreciation and amortization',
    text: 'These are accounting charges, not cash spent in the year. They are added back, but the buyer will still have to replace equipment over time, so the condition and age of the assets matter to the final opinion.',
  },
  {
    term: 'Interest',
    text: 'Interest on business debt is added back because the seller normally pays off debt at closing and the buyer brings their own financing.',
  },
  {
    term: 'One time expenses',
    text: 'A lawsuit settlement, a roof replacement, or a move to a new location may be added back if it is truly nonrecurring. An expense that shows up every few years under a different name is not one time.',
  },
  {
    term: 'Personal expenses',
    text: 'Personal vehicles, travel, phones, or insurance run through the business can be added back when they would not continue under a new owner.',
  },
]

const factors = [
  {
    term: 'Owner dependence',
    text: 'If customers, vendors, and employees deal only with the owner, a buyer is paying for relationships that may leave at closing. A business with a manager or lead staff who run daily operations transfers more cleanly.',
  },
  {
    term: 'Customer concentration',
    text: 'When a large share of revenue comes from a few customers, losing one changes the business. Buyers and lenders discount for that risk, and they look closely at whether contracts are assignable.',
  },
  {
    term: 'Recurring revenue',
    text: 'Service agreements, maintenance contracts, subscriptions, and repeat customers make future earnings more predictable than revenue that has to be won again every month.',
  },
  {
    term: 'Trend of earnings',
    text: 'Buyers weigh the direction of earnings as well as the level. Steady or rising results support value. A decline, or one strong year after several weak ones, raises questions a buyer will price in.',
  },
  {
    term: 'Quality of records',
    text: 'Clean books that reconcile to filed tax returns, with documented add backs, shorten diligence and give a lender something to underwrite. Missing or inconsistent records lower value and can stop financing entirely.',
  },
  {
    term: 'Lease terms',
    text: 'A location business depends on its lease. Remaining term, renewal options, rent relative to the market, and whether the landlord will consent to an assignment all affect what a buyer will pay.',
  },
  {
    term: 'Industry risk',
    text: 'Exposure to regulation, technology change, commodity prices, or a single supplier affects how buyers view the stability of earnings in a given industry.',
  },
  {
    term: 'Transferability of licenses and permits',
    text: 'Some businesses depend on licenses held by the owner personally, such as trade licenses, health permits, or alcohol permits. If a buyer cannot obtain or inherit them, the earnings may not transfer.',
  },
]

const faqs = [
  {
    question: 'Is a broker opinion of value the same as an appraisal?',
    answer:
      'No. A broker opinion of value is a market based estimate of the price range a business may sell for, prepared to help an owner plan or price a sale. It is not a certified appraisal, it does not follow appraisal credentialing standards, and it should not be used for tax filings, court proceedings, ESOP transactions, or any purpose that calls for a credentialed appraiser.',
  },
  {
    question: 'What is the difference between SDE and EBITDA?',
    answer:
      'Seller\'s discretionary earnings adds back the full compensation of one working owner, so it shows what the business produces for an owner operator. EBITDA treats management as a cost and deducts a market wage for it. SDE is common for smaller owner operated businesses; EBITDA is more common for larger businesses with a management team in place.',
  },
  {
    question: 'What do I need to provide for a broker opinion of value?',
    answer:
      'Typically three years of business tax returns, profit and loss statements and balance sheets for the same years plus the current year to date, a list of proposed add backs with support, an equipment and asset list, the lease, and a short description of customers, staff, and how the business operates day to day.',
  },
  {
    question: 'When do I need a certified appraisal instead?',
    answer:
      'When the value will be relied on by a third party under formal rules. Common examples are some SBA loans where the lender requires an independent business valuation, estate and gift tax filings, litigation, divorce, and ESOP transactions. Those require a credentialed appraiser, and Forge does not provide certified appraisals.',
  },
  {
    question: 'Why can I not use public company multiples to value my business?',
    answer:
      'Public companies are larger, more diversified, less dependent on any one person, and their shares can be sold in a liquid market. Those differences mean public multiples generally do not transfer to a small private company. Private transaction data is a better reference point for small businesses.',
  },
  {
    question: 'Will Forge tell me what my business is worth before I share financials?',
    answer:
      'No. Any number given without reviewing records would be a guess, and a guess can lead an owner to set the wrong price or the wrong expectations. We give an opinion of value only after reviewing the documents.',
  },
]

const toc = [
  { id: 'what-it-is', label: 'What valuation means for a sale' },
  { id: 'sde', label: 'Seller\'s discretionary earnings' },
  { id: 'ebitda', label: 'EBITDA multiples' },
  { id: 'asset', label: 'Asset based approaches' },
  { id: 'market', label: 'Market comparables' },
  { id: 'factors', label: 'What moves value' },
  { id: 'service', label: 'Our small business valuation services' },
  { id: 'appraisal', label: 'When you need a certified appraisal' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Request an opinion of value' },
]

export default function BusinessValuationPage() {
  const url = `${SITE_URL}${PATH}`

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: TITLE, description: DESCRIPTION, hasBreadcrumb: true }),
            breadcrumbSchema(url, [
              { name: 'Sell Your Business', url: `${SITE_URL}/sell-your-business` },
              { name: 'Business Valuation' },
            ]),
            serviceSchema({
              url,
              name: 'Business Valuation Services',
              description: DESCRIPTION,
              serviceType: 'Business Valuation',
              areaServed: TEXAS_AREA,
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            withSchema={false}
            items={[{ label: 'Sell Your Business', href: '/sell-your-business' }, { label: 'Business Valuation' }]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">Business Valuation Services: How Buyers and Lenders Value a Small Business</h1>
            <p className="body-large mb-6">
              Our business valuation services start from the way buyers and lenders actually look at a small business. They
              do not value a company on revenue or on what the owner has invested. They value the earnings a new owner can
              expect to keep, adjusted for the risk that those earnings will not continue after the sale.
            </p>
            <p className="body-large mb-8">
              This page explains the methods used to value a privately held business, the factors that move value up or
              down, and the broker opinion of value Forge prepares for Texas owners. It also explains, plainly, where a broker
              opinion ends and a certified appraisal is required. If you are preparing for a sale, start with{' '}
              <Link href="/sell-your-business" className={link}>selling your business</Link>.
            </p>
            <KeyTakeaways
              readTime="12 min read"
              items={[
                'Small businesses are usually valued on seller\'s discretionary earnings, and larger businesses with management in place on EBITDA.',
                'Every add back must be documented. Buyers and lenders remove the ones that cannot be supported.',
                'Asset based and market approaches are cross checks, and public company multiples do not transfer to small private businesses.',
                'A broker opinion of value is not a certified appraisal. Tax, litigation, divorce, ESOP, and some SBA loan purposes require a credentialed appraiser.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC items={toc} />
            </aside>

            <div className="lg:col-span-9 min-w-0 space-y-24 max-[720px]:space-y-16">
              <article id="what-it-is" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What valuation means when you plan to sell</h2>
                <p className={p}>
                  A valuation for a sale answers a narrow question: what price range a qualified buyer is likely to pay, on
                  terms a lender is likely to finance. That is different from what the business means to the owner, what it
                  would cost to start from scratch, or what a similar company sold for in another state five years ago.
                </p>
                <p className={p}>
                  Many small businesses that change hands in Texas are bought by individuals or small companies, and many of
                  those purchases are financed in part with bank or SBA loans. That makes the lender a second audience for any
                  valuation. A lender underwrites the cash flow the business shows on its tax returns and supporting statements,
                  and it needs that cash flow to cover the buyer&apos;s debt payments with room to spare. A price that the
                  earnings cannot support will not be financed, whatever the seller believes it is worth.
                </p>
                <p className={p}>
                  Four approaches cover nearly every small business: seller&apos;s discretionary earnings, EBITDA, asset
                  based methods, and market comparables. A sound opinion usually starts with one primary method and uses the
                  others to test it.
                </p>
              </article>

              <article id="sde" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Seller&apos;s discretionary earnings</h2>
                <p className={p}>
                  Seller&apos;s discretionary earnings, or SDE, is the total financial benefit the business produces for one
                  full time owner operator. It starts with pretax net income from the tax return or financial statements and
                  adds back items that are either noncash, financing related, discretionary to the current owner, or not
                  expected to recur. The result shows a buyer what the business would have produced for them if they had owned
                  it during the same period.
                </p>
                <p className={p}>
                  SDE is the standard measure for owner operated businesses: trades and home services, restaurants, retail,
                  personal services, and small professional practices. A buyer applies a multiple to SDE that reflects the
                  risk of the business, and that multiple comes from the market for comparable businesses, not from a formula.
                </p>
                <h3 className="heading-4 mb-4 mt-8">Standard add backs</h3>
                <div className="border-t border-graphite mb-10">
                  {addBacks.map((a) => (
                    <div key={a.term} className="grid md:grid-cols-[240px_1fr] gap-2 md:gap-8 py-6 border-b border-line">
                      <p className="heading-4">{a.term}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{a.text}</p>
                    </div>
                  ))}
                </div>
                <h3 className="heading-4 mb-4">Why add backs must be documented</h3>
                <p className={p}>
                  An add back increases SDE, so every one of them increases the implied price. Buyers, their accountants, and
                  lenders know this, and they test each one. An add back backed by invoices, bank statements, payroll records,
                  or a clear entry on the general ledger usually survives diligence. An add back supported only by the
                  owner&apos;s memory usually does not.
                </p>
                <p className={p}>
                  Unsupported add backs cause a predictable problem. The buyer agrees to a price based on the seller&apos;s
                  SDE, the lender or the buyer&apos;s CPA removes the add backs that cannot be proven, and the deal is either
                  repriced or lost. Documenting add backs before going to market avoids that. Cash income that was not reported
                  on tax returns is a separate issue: buyers and lenders generally will not credit it, and it should be
                  discussed with your CPA rather than presented as an add back.
                </p>
              </article>

              <article id="ebitda" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">EBITDA multiples</h2>
                <p className={p}>
                  EBITDA is earnings before interest, taxes, depreciation, and amortization. For valuation it is normalized in
                  the same way as SDE, with nonrecurring and personal items removed, but with one important difference: the
                  cost of management stays in. If the owner works in the business, EBITDA deducts a market rate salary for
                  the role, because a buyer would have to pay someone to do it.
                </p>
                <p className={p}>
                  EBITDA becomes the primary measure when the business is large enough to have a management team in place and
                  the buyer is likely to be an investor or another company rather than an owner operator. Private equity firms,
                  family offices, and strategic acquirers typically price on EBITDA because they do not plan to run the
                  business themselves. Using SDE for a business of that size, or EBITDA for a small owner operated shop, gives
                  a misleading result, so the choice of earnings measure is one of the first decisions in any opinion.
                </p>
              </article>

              <article id="asset" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Asset based approaches</h2>
                <p className={p}>
                  Asset based methods value the business by what it owns rather than what it earns. They matter most for
                  businesses whose earnings are thin compared with their assets, and as a floor for any business with
                  significant equipment, vehicles, inventory, or real property.
                </p>
                <h3 className="heading-4 mb-4">Adjusted net asset value</h3>
                <p className={p}>
                  The book value on a balance sheet reflects historical cost less depreciation, which rarely matches what the
                  assets are worth today. Adjusted net asset value restates each asset and liability to current fair market
                  value. Equipment is restated to what it would cost to buy in similar condition, inventory to what is
                  saleable, and receivables to what is collectible.
                </p>
                <h3 className="heading-4 mb-4">Liquidation value</h3>
                <p className={p}>
                  Liquidation value estimates what the assets would bring if the business closed and they were sold, either in
                  an orderly sale over time or in a forced sale. It is the lowest reference point and is relevant when a
                  business is not profitable enough to sell as a going concern, or when an owner is weighing a sale against
                  closing.
                </p>
              </article>

              <article id="market" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Market comparables</h2>
                <p className={p}>
                  The market approach looks at what buyers have paid for similar businesses. For private companies the data
                  comes from subscription transaction databases that collect reported sales of privately held businesses,
                  including price, revenue, earnings, and deal terms. The comparison is usually expressed as a ratio of price
                  to SDE, EBITDA, or revenue for businesses in the same industry and size range.
                </p>
                <p className={p}>
                  Comparable data has limits. Reported sales vary in quality, earnings definitions differ between sources, and
                  two businesses with the same code can operate very differently. The data gives a range, and the factors in
                  the next section decide where in that range a specific business falls.
                </p>
                <h3 className="heading-4 mb-4">Why public company multiples do not transfer</h3>
                <p className={p}>
                  Owners sometimes see valuation ratios for publicly traded companies in their industry and assume the same
                  ratio applies to them. It generally does not. Public companies are far larger, serve many customers and
                  markets, have management teams that do not depend on a founder, and have shares that can be sold any trading
                  day. A small private business carries more risk on each of those points, and its ownership cannot be sold
                  quickly. Buyers price that difference, which is why private transaction data is the relevant reference.
                </p>
              </article>

              <article id="factors" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">The factors that move value up or down</h2>
                <p className={p}>
                  Two businesses with the same earnings can sell for very different prices. The difference comes from how
                  confident a buyer and a lender are that the earnings will continue under a new owner. These are the factors
                  we review in every opinion.
                </p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  {factors.map((f) => (
                    <div key={f.term} className="card">
                      <p className="heading-4 mb-3">{f.term}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{f.text}</p>
                    </div>
                  ))}
                </div>
                <p className={`${p} mt-8`}>
                  Many of these factors can be improved before a sale. Delegating customer relationships, putting service
                  agreements in writing, extending a lease, and cleaning up the books all take time, which is one reason to get
                  an opinion of value well before you plan to list. Our guide on{' '}
                  <Link href="/sell-your-business/how-to-sell-a-business" className={link}>how to sell a business</Link>{' '}
                  covers preparation in more detail.
                </p>
              </article>

              <article id="service" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Our small business valuation services: The broker opinion of value</h2>
                <p className={p}>
                  Forge provides small business valuation services in the form of a broker opinion of value. It is the
                  estimate a business broker prepares to show where a business is likely to price in the current market, based
                  on its financial records and on the factors buyers and lenders weigh.
                </p>
                <div className="card border-t-2 border-t-graphite max-[720px]:p-6 mb-8">
                  <p className="text-sm font-semibold text-graphite mb-3">Read this first</p>
                  <p className="text-graphite font-semibold leading-relaxed mb-2">
                    A broker opinion of value is not a certified appraisal.
                  </p>
                  <p className="text-steel text-sm leading-relaxed">
                    It is prepared by a broker for planning and pricing a sale. It is not prepared by a credentialed appraiser,
                    and it should not be used where a certified appraisal is required.
                  </p>
                </div>
                <h3 className="heading-4 mb-4">What you provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-steel leading-relaxed mb-8">
                  <li>Business tax returns for the last three years</li>
                  <li>Profit and loss statements and balance sheets for the same years, plus the current year to date</li>
                  <li>A list of proposed add backs with supporting records</li>
                  <li>An equipment and asset list, with approximate age and condition</li>
                  <li>The current lease and any amendments</li>
                  <li>A short description of staff, customers, suppliers, and how the business runs day to day</li>
                </ul>
                <h3 className="heading-4 mb-4">What the opinion includes</h3>
                <ul className="list-disc pl-6 space-y-2 text-steel leading-relaxed mb-8">
                  <li>A recast of earnings showing each add back and its support</li>
                  <li>The earnings measure used, SDE or EBITDA, and why</li>
                  <li>A market based price range with the reasoning behind it, cross checked against asset value</li>
                  <li>The strengths and risks a buyer or lender is likely to raise</li>
                  <li>Specific steps that could improve how the business presents to buyers</li>
                </ul>
                <h3 className="heading-4 mb-4">How owners use it</h3>
                <p className={p}>
                  The most common use is pricing a sale: setting an asking price that the earnings can support and that a
                  lender can finance. Owners also use an opinion of value for planning, to decide whether to sell now or work on
                  the business first, and for discussions between partners about a buyout. When an opinion is used between
                  partners, each side should have its own advisors, and a binding buyout under a partnership agreement may
                  call for a certified appraisal.
                </p>
                <p className={p}>
                  If you decide to sell, the opinion becomes the starting point for the listing. Owners who want to understand
                  how a broker markets a business across the state can read about our{' '}
                  <Link href="/texas-business-broker" className={link}>Texas business brokerage</Link> work.
                </p>
              </article>

              <article id="appraisal" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">When you need a certified appraisal instead</h2>
                <p className={p}>
                  A certified appraisal is a formal valuation prepared by a credentialed business appraiser under recognized
                  professional standards. Credentials in the field include the Accredited Senior Appraiser designation from
                  the American Society of Appraisers, Accredited in Business Valuation from the AICPA, and Certified Valuation
                  Analyst from NACVA. Situations that commonly call for one include:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-steel leading-relaxed mb-8">
                  <li>
                    <span className="font-semibold text-graphite">SBA lending.</span> On some SBA loans used to buy a business,
                    the lender is required to obtain an independent business valuation from a qualified source. Whether one is
                    required depends on the loan and on current SBA rules, and the lender orders it.
                  </li>
                  <li>
                    <span className="font-semibold text-graphite">Estate and gift tax.</span> Transfers of business interests
                    reported to the IRS are typically supported by a qualified appraisal.
                  </li>
                  <li>
                    <span className="font-semibold text-graphite">Litigation.</span> Shareholder disputes, damages claims, and
                    other court matters rely on valuation experts who can testify to their methods.
                  </li>
                  <li>
                    <span className="font-semibold text-graphite">Divorce.</span> Dividing a business interest in a divorce
                    typically requires a valuation that will hold up in court.
                  </li>
                  <li>
                    <span className="font-semibold text-graphite">ESOPs.</span> Employee stock ownership plans must use an
                    independent appraiser to value the company stock.
                  </li>
                </ul>
                <p className={p}>
                  Each of these requires a credentialed appraiser. Forge does not provide certified appraisals. If your
                  purpose falls into one of these categories, we will tell you so and recommend that you engage an appraiser,
                  your attorney, and your CPA.
                </p>
              </article>

              <BrokerageNotice />

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">Questions about business valuation services</h2>
                <FAQList faqs={faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-6">Request a broker opinion of value</h2>
                <p className={p}>
                  Tell us about the business and why you want a valuation. We will reply with the documents we need and how
                  the review works. Your inquiry is confidential.
                </p>
                <IntakeForm inquiryType="valuation" />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          { label: 'Sell your business', href: '/sell-your-business', description: 'How Forge represents Texas owners through a confidential sale.' },
          { label: 'How to sell a business', href: '/sell-your-business/how-to-sell-a-business', description: 'The steps from preparation to closing, and what each one requires.' },
          { label: 'Texas business broker', href: '/texas-business-broker', description: 'What a broker does and how to choose one, with notes on major Texas markets.' },
        ]}
      />

      <SectionCTA
        heading="Know where your business stands before you sell"
        body="A broker opinion of value shows how buyers and lenders are likely to read your financials, and what to improve before going to market."
        buttonText="Request an opinion of value"
        buttonHref="#inquiry"
        secondaryText="Or read about selling your business"
        secondaryHref="/sell-your-business"
      />

      <StickyCTA text="Request a broker opinion of value" href="#inquiry" />
    </>
  )
}
