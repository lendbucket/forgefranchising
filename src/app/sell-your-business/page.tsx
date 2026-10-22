import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { PageTOC } from '@/components/PageTOC'
import { FAQList } from '@/components/FAQList'
import { ContinueLearning } from '@/components/ContinueLearning'
import { SectionCTA } from '@/components/SectionCTA'
import { BrokerageNotice } from '@/components/BrokerageNotice'
import { IntakeForm } from '@/components/IntakeForm'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'

const PATH = '/sell-your-business'
const TITLE = 'Sell My Business in Texas'
const DESCRIPTION =
  'Sell my business in Texas: how a confidential, broker led sale works from first call to closing, what buyers must prove, and what sellers should prepare.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const inlineLink = 'text-accent font-semibold hover:underline'
const bodyText = 'text-steel text-[17px] leading-relaxed mb-5'

type Stage = {
  title: string
  body: string
}

const stages: Stage[] = [
  {
    title: 'Initial consultation',
    body: 'A private conversation about the business, your reasons for selling, the timing you have in mind, and what you want after closing. We tell you plainly whether the business looks ready to market now or whether preparation would serve you better first.',
  },
  {
    title: 'Confidentiality agreement',
    body: 'Before you send a single financial statement, Forge signs a confidentiality agreement with you. Your information is used only to prepare and run the sale.',
  },
  {
    title: 'Financial and document gathering',
    body: 'You supply tax returns, financial statements, the lease, and the operating records listed further down this page. Gaps found here are far cheaper to fix than gaps a buyer finds in due diligence.',
  },
  {
    title: 'Broker opinion of value',
    body: 'We review the financials, normalize owner expenses, and compare the business against market evidence to form a broker opinion of value. It is a pricing recommendation for marketing purposes, not a certified appraisal.',
  },
  {
    title: 'Marketing package and blind teaser',
    body: 'Two documents are prepared. The blind teaser describes the business in general terms (industry, region, broad financial profile) without the name or address. The confidential information memorandum holds the full detail and is released only to qualified buyers.',
  },
  {
    title: 'Buyer inquiries under NDA',
    body: 'Buyers who respond to the teaser sign a nondisclosure agreement before they learn anything that could identify the business.',
  },
  {
    title: 'Buyer qualification',
    body: 'Each buyer is asked for proof of funds, a personal financial statement, and a description of relevant experience. Buyers who will use bank financing are asked for lender prequalification. Only buyers who clear this step receive the full memorandum.',
  },
  {
    title: 'Management meetings',
    body: 'Qualified buyers meet you, usually after hours or off site. These meetings test fit on both sides and give the buyer a chance to ask about operations, staff, and customers directly.',
  },
  {
    title: 'Letter of intent',
    body: 'A buyer who wants to proceed submits a letter of intent covering price, structure, financing, the due diligence period, exclusivity, and your role after closing. Most terms in an LOI are nonbinding, but they set the frame for everything that follows.',
  },
  {
    title: 'Due diligence',
    body: 'The buyer and their advisors verify the financials, contracts, lease, licenses, equipment, and legal standing of the business. Forge manages the document requests and keeps the process on schedule.',
  },
  {
    title: 'Financing and lender approval',
    body: 'If the buyer is borrowing, the lender underwrites the business and the buyer, orders any required third party valuation, and issues a commitment. Lender conditions often shape the final deal terms.',
  },
  {
    title: 'Purchase agreement',
    body: 'Attorneys for each side draft and negotiate the definitive purchase agreement, which replaces the LOI with binding terms, representations, warranties, and closing conditions.',
  },
  {
    title: 'Closing',
    body: 'Funds move, ownership transfers, and the closing documents are signed, typically through a title company or the attorneys handling the transaction.',
  },
  {
    title: 'Transition period',
    body: 'You introduce the buyer to staff, customers, and vendors and train them on the operation for the period agreed in the purchase agreement.',
  },
]

const sellerDocuments = [
  {
    item: 'Three years of business tax returns and financial statements',
    why: 'Buyers and lenders compare the returns to the statements. Differences between the two need an explanation in writing.',
  },
  {
    item: 'Current year interim profit and loss statement',
    why: 'Shows whether the business is tracking with prior years. Keep it updated monthly while the business is on the market.',
  },
  {
    item: 'Add back documentation',
    why: 'Seller’s discretionary earnings (SDE) adds back owner compensation, personal expenses run through the business, and one time costs. Every add back needs a receipt, a statement, or another record a buyer can check.',
  },
  {
    item: 'The lease and any amendments',
    why: 'Buyers and lenders need to know the remaining term, renewal options, and whether the landlord must consent to an assignment.',
  },
  {
    item: 'Equipment and asset list',
    why: 'List major equipment and vehicles with approximate age and condition, and note anything leased or financed.',
  },
  {
    item: 'Customer and vendor concentration',
    why: 'A summary of how much revenue comes from your largest customers and how dependent you are on key suppliers. Names can be withheld until late in the process.',
  },
  {
    item: 'Licenses and permits',
    why: 'Identify which licenses belong to the business, which belong to you personally, and which a buyer will have to obtain in their own name.',
  },
  {
    item: 'Employee roster, without names in early stages',
    why: 'Roles, tenure, pay, and full or part time status. Names are released only when a buyer is near closing.',
  },
  {
    item: 'Process documentation',
    why: 'Written procedures, checklists, and training materials show the business can run without you, which is often what a buyer is most worried about.',
  },
]

const faqs = [
  {
    question: 'How long does it take to sell a business in Texas?',
    answer:
      'It depends on the business, its records, the price, the industry, and how buyers will finance the purchase. Preparation and marketing take weeks to months, and due diligence and lender approval add more time once an offer is accepted. We give you a typical range for your business after we review the financials, and we do not promise a closing date.',
  },
  {
    question: 'How are business brokers paid?',
    answer:
      'Broker compensation is set in a written engagement agreement signed before any marketing begins. Many business brokers are paid mainly through a success fee at closing, and some agreements include other fees. Read the agreement closely, including the term, the exclusivity provisions, and what happens if a buyer you introduced closes after the agreement ends. Forge explains its terms in writing before you sign.',
  },
  {
    question: 'Will my employees find out that the business is for sale?',
    answer:
      'The process is designed to prevent that. Listings are blind, every buyer signs an NDA and is qualified before learning the name, meetings happen off site or after hours, and employee names are withheld until late in the sale. Most owners tell key staff near closing, often with the buyer, once the deal is secure.',
  },
  {
    question: 'Do I need a valuation before I list my business?',
    answer:
      'You need a supportable asking price, and that starts with a broker opinion of value built from your financials and market evidence. A broker opinion of value is not a certified appraisal. If a lender, a partner, or a court needs a formal appraisal, that is a separate engagement with a credentialed appraiser.',
  },
  {
    question: 'Can I sell my business if my books are not in good shape?',
    answer:
      'Usually, but disorganized books cost time and credibility. Buyers and lenders rely on tax returns and financial statements, and they discount earnings they cannot verify. If your records need work, the better path is often to have your CPA clean them up before the business goes to market.',
  },
  {
    question: 'I own a franchise. Is the sale process different?',
    answer:
      'Yes. A franchise sale needs the franchisor’s approval of the buyer, and the franchise agreement may give the franchisor a right of first refusal, require a transfer fee, and require the buyer to complete training. Those terms are disclosed in Items 6 and 17 of the brand’s FDD. Our page on selling a franchise covers that process.',
  },
]

const tocItems = [
  { id: 'process', label: 'The process' },
  { id: 'broker-role', label: 'What a broker does' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'buyer-qualification', label: 'Qualifying buyers' },
  { id: 'seller-preparation', label: 'What you prepare' },
  { id: 'value', label: 'Setting the price' },
  { id: 'franchise-owners', label: 'Franchise owners' },
  { id: 'how-we-work', label: 'How we work' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Start a conversation' },
]

export default function SellYourBusinessPage() {
  const url = `${SITE_URL}${PATH}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: TITLE, description: DESCRIPTION, hasBreadcrumb: true }),
            breadcrumbSchema(url, [{ name: 'Sell Your Business' }]),
            serviceSchema({
              url,
              name: 'Business Brokerage for Texas Business Owners',
              description: DESCRIPTION,
              serviceType: 'Business Brokerage',
              areaServed: TEXAS_AREA,
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs withSchema={false} items={[{ label: 'Sell Your Business' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">Sell Your Business in Texas: From First Call to Closing</h1>
            <p className="body-large mb-6">
              Once an owner reaches the point of saying &ldquo;it is time to sell my business,&rdquo; the decision is the
              easy part. The sale itself is a
              sequence of controlled steps: pricing the business on evidence, finding buyers without alerting employees or
              competitors, qualifying those buyers before they see anything sensitive, and carrying one of them through due
              diligence, financing, and closing. Forge Franchising Group represents owners of Texas businesses through
              each of those steps.
            </p>
            <p className="body-large mb-8">
              This page explains how a brokered sale works and what is expected of you along the way. For a detailed,
              step by step plan you can start working on now, read{' '}
              <Link href="/sell-your-business/how-to-sell-a-business" className={inlineLink}>
                our guide on how to sell a business
              </Link>
              .
            </p>
            <HeroActions route="/sell-your-business" />
            <KeyTakeaways
              readTime="12 min read"
              items={[
                'A brokered sale runs in a set order, from the first consultation and NDA through the letter of intent, due diligence, financing, closing, and a transition period.',
                'Confidentiality is managed with blind listings, NDAs, and staged release of information. Buyers are qualified before they learn the name of the business.',
                'Buyers show proof of funds, a financial statement, relevant experience, and lender prequalification where financing is involved.',
                'Sellers prepare three years of tax returns and financial statements, an interim P&L, add back support, the lease, and operating records.',
                'A broker opinion of value sets an asking price for marketing. It is not a certified appraisal.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC items={tocItems} />
            </aside>

            <div className="lg:col-span-9 min-w-0 space-y-24 max-[720px]:space-y-16">
              <section id="process" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How a business sale works, from first call to closing</h2>
                <p className={bodyText}>
                  Every sale is different in its details, but the order of work is consistent. Each stage below has to be
                  finished before the next one can start well. Skipping ahead, for example sending financials to a buyer
                  who has not signed an NDA or accepting an offer before the buyer has shown proof of funds, is how
                  confidential sales leak and accepted offers fall apart.
                </p>
                <ol className="mt-10 border-t border-graphite">
                  {stages.map((stage, i) => (
                    <li key={stage.title} className="flex gap-6 max-[720px]:gap-4 py-8 border-b border-line">
                      <span className="numeral text-[40px] flex-shrink-0 w-14 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <h3 className="heading-4 mb-2">{stage.title}</h3>
                        <p className="text-steel text-[17px] leading-relaxed">{stage.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className={`${bodyText} mt-8`}>
                  The total time from consultation to closing is a typical range that depends on the business, the
                  quality of its records, the asking price, and the buyer&apos;s financing. Lender underwriting and due
                  diligence are often the longest stages, and they are also the stages where preparation done months
                  earlier pays off. The{' '}
                  <Link href="/sell-your-business/how-to-sell-a-business" className={inlineLink}>
                    full selling guide
                  </Link>{' '}
                  walks through each stage with the documents it needs and the mistakes owners make.
                </p>
              </section>

              <section id="broker-role" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What a business broker does and does not do</h2>
                <p className={bodyText}>
                  A business broker represents the seller in finding a buyer and getting a transaction to closing. The
                  work combines pricing, marketing, buyer screening, and project management. It is also limited
                  in specific ways, and you should know those limits before you sign an engagement agreement.
                </p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  <div className="card">
                    <p className="heading-4 mb-4">What a broker does</p>
                    <ul className="space-y-2 text-steel text-[15px] leading-relaxed list-disc pl-5">
                      <li>Reviews your financials and prepares a broker opinion of value with a recommended asking price.</li>
                      <li>Writes the blind teaser and the confidential information memorandum.</li>
                      <li>Markets the business to buyers without revealing its identity.</li>
                      <li>Collects NDAs and qualifies buyers before releasing information.</li>
                      <li>Arranges and prepares you for buyer meetings.</li>
                      <li>Helps you compare offers and negotiate the letter of intent.</li>
                      <li>Coordinates due diligence requests, lender questions, and the closing timeline with your attorney and CPA.</li>
                    </ul>
                  </div>
                  <div className="card">
                    <p className="heading-4 mb-4">What a broker does not do</p>
                    <ul className="space-y-2 text-steel text-[15px] leading-relaxed list-disc pl-5">
                      <li>Give legal advice or draft the purchase agreement. Your attorney does that.</li>
                      <li>Give tax advice or decide how the sale should be structured for tax purposes. Your CPA does that.</li>
                      <li>Issue a certified appraisal. A broker opinion of value is not one.</li>
                      <li>Guarantee a price, a buyer, or a closing date.</li>
                      <li>Make lending decisions. Lenders underwrite and approve their own loans.</li>
                    </ul>
                  </div>
                </div>
                <p className={`${bodyText} mt-8`}>
                  Some owners sell without a broker, especially when a buyer is already identified, such as a partner or a
                  long time manager. The guide compares that path fairly. If you are weighing representation, our page on
                  working with a{' '}
                  <Link href="/texas-business-broker" className={inlineLink}>
                    Texas business broker
                  </Link>{' '}
                  explains how Forge represents sellers across the state and what the engagement covers.
                </p>
              </section>

              <section id="confidentiality" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Keeping the sale private until it closes</h2>
                <p className={bodyText}>
                  A rumor that the business is for sale can cost you employees, customers, and negotiating position before
                  a buyer ever makes an offer. Competitors can use it in sales conversations. Key staff may start
                  interviewing elsewhere. Confidentiality is therefore built into every stage of the process rather than
                  handled as a single agreement.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Blind listings</h3>
                <p className={bodyText}>
                  The teaser describes the business by industry, general region, and broad financial profile. It leaves out
                  the name, the address, and any detail specific enough to identify the company, such as a distinctive
                  service line or an unusual founding story.
                </p>
                <h3 className="heading-4 mb-3 mt-8">NDAs before identifying information</h3>
                <p className={bodyText}>
                  No buyer learns the name of the business until they have signed a nondisclosure agreement and passed
                  qualification. The NDA restricts how the buyer can use what they learn and typically bars them from
                  contacting your employees, customers, suppliers, or landlord without permission.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Controlled release of information</h3>
                <p className={bodyText}>
                  Information is released in stages that match the buyer&apos;s commitment. A qualified buyer receives the
                  memorandum. A buyer with a signed letter of intent receives detailed records in due diligence. Customer
                  names, employee names, and supplier pricing are held back until the buyer is close to closing, and some
                  may be shared only with the buyer&apos;s attorney or CPA.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Employees, customers, and competitors</h3>
                <p className={bodyText}>
                  Buyer meetings happen after hours or away from the business. Site visits are scheduled when staff are
                  not present or are presented as routine visits. Forge screens out competitors who appear to be
                  gathering information rather than buying, and when a competitor is a serious buyer, the most sensitive
                  data is shared late and in summary form. Most owners tell key employees near closing, often together
                  with the buyer, once the transaction is secure.
                </p>
                <MidCTA route="/sell-your-business" />
              </section>

              <section id="buyer-qualification" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How buyers are qualified</h2>
                <p className={bodyText}>
                  Many inquiries on a business for sale come from people who are not in a position to close. Qualification
                  separates them from real buyers before your information leaves the building. Forge asks every buyer for the following before
                  releasing the confidential memorandum:
                </p>
                <ul className="space-y-4 mt-6 mb-6">
                  {[
                    ['Signed NDA', 'Required before the buyer receives anything that identifies the business.'],
                    ['Proof of funds', 'Bank or brokerage statements showing the cash the buyer would put into the purchase.'],
                    ['Personal financial statement', 'Assets, liabilities, and net worth, which lenders will also require.'],
                    ['Lender prequalification', 'For buyers using financing, a letter or conversation with a lender showing the buyer fits its criteria.'],
                    ['Relevant experience', 'Management, industry, or ownership background that makes the buyer credible to you and to a lender.'],
                  ].map(([label, detail]) => (
                    <li key={label} className="flex gap-3">
                      <span className="w-1.5 h-1.5 bg-ember flex-shrink-0 mt-2.5" aria-hidden="true" />
                      <p className="text-steel leading-relaxed">
                        <span className="font-semibold text-graphite">{label}.</span> {detail}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className={bodyText}>
                  Qualification protects you twice. It keeps sensitive information away from people who are only curious,
                  and it reduces the chance that you take the business off the market for an accepted offer that later
                  fails at the lender.
                </p>
              </section>

              <section id="seller-preparation" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What the seller prepares</h2>
                <p className={bodyText}>
                  Buyers pay for what they can verify. The documents below are what buyers, their advisors, and lenders
                  ask for, and having them ready before marketing begins shortens due diligence and supports the asking
                  price.
                </p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  {sellerDocuments.map((doc) => (
                    <div key={doc.item} className="card md:odd:last:col-span-2">
                      <h3 className="heading-4 mb-3">{doc.item}</h3>
                      <p className="text-steel text-[15px] leading-relaxed">{doc.why}</p>
                    </div>
                  ))}
                </div>
                <p className={`${bodyText} mt-8`}>
                  Two Texas specific items are worth raising with your attorney early. A buyer can become liable for
                  the seller&apos;s unpaid state taxes unless the seller provides a certificate from the Texas
                  Comptroller showing those taxes are paid, so expect the buyer&apos;s counsel to ask for one. And some
                  permits do not transfer with the business; a buyer of a business that sells alcohol, for example, must
                  obtain its own permit from the Texas Alcoholic Beverage Commission.
                </p>
              </section>

              <section id="value" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Setting the asking price</h2>
                <p className={bodyText}>
                  The asking price comes from evidence: the earnings the business produces for an owner, the risks a
                  buyer would take on, the condition of its assets, and what comparable businesses have sold for. Forge
                  prepares a broker opinion of value from those inputs and explains the reasoning so you can test it.
                </p>
                <p className={bodyText}>
                  A broker opinion of value is not a certified appraisal and is not a substitute for one. It is a
                  pricing recommendation for marketing the business. Buyers and lenders reach their own conclusions,
                  and a lender may order an independent valuation as part of underwriting. If you want to understand the
                  value of the business before deciding whether to sell, start with our{' '}
                  <Link href="/business-valuation" className={inlineLink}>
                    business valuation page
                  </Link>
                  .
                </p>
              </section>

              <section id="franchise-owners" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Selling a franchised location</h2>
                <p className={bodyText}>
                  If your business operates under a franchise agreement, the franchisor is part of the sale. Most
                  agreements require the franchisor to approve the buyer, and many require a transfer fee, completion of
                  training, a new franchise agreement on current terms, or a general release. Some give the franchisor a
                  right of first refusal to buy the business on the terms you negotiated. Item 6 of the brand&apos;s FDD
                  lists transfer fees, and Item 17 summarizes the transfer and first refusal provisions.
                </p>
                <p className={bodyText}>
                  Those requirements change the timeline and the buyer pool, so plan for them from the first
                  conversation. Our page for franchise owners explains{' '}
                  <Link href="/sell-your-franchise" className={inlineLink}>
                    how to sell a franchised location
                  </Link>{' '}
                  and how Forge coordinates with the franchisor.
                </p>
              </section>

              <section id="how-we-work" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How Forge represents sellers</h2>
                <p className={bodyText}>
                  Forge represents owners of Texas businesses under a written engagement agreement. Before you sign, we
                  explain the scope of work, how we are paid, and how long the agreement runs. We work alongside your
                  attorney and CPA, who handle the legal and tax sides of the sale.
                </p>
                <BrokerageNotice className="mt-8" />
              </section>

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">Questions from owners preparing to sell</h2>
                <FAQList faqs={faqs} />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-white scroll-mt-header">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="heading-2 mb-6">Talk to Forge about selling your business</h2>
              <p className="text-steel text-[17px] leading-relaxed mb-5">
                Tell us about the business and your timing. We reply within one business day, and nothing you send is
                shared with anyone outside Forge.
              </p>
              <p className="text-steel text-[17px] leading-relaxed">
                If you are not ready to talk yet, start with the{' '}
                <Link href="/sell-your-business/how-to-sell-a-business" className={inlineLink}>
                  step by step selling guide
                </Link>{' '}
                or learn how a{' '}
                <Link href="/business-valuation" className={inlineLink}>
                  broker opinion of value
                </Link>{' '}
                is prepared.
              </p>
            </div>
            <div className="lg:col-span-7">
              <IntakeForm
                inquiryType="seller"
                heading="Start a confidential conversation"
                intro="A few details help us prepare for the first call. Financial documents come later, after a confidentiality agreement is in place."
              />
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          {
            label: 'How to sell a business',
            href: '/sell-your-business/how-to-sell-a-business',
            description: 'The full step by step guide, with the documents each step needs and the common mistakes.',
          },
          {
            label: 'Business valuation',
            href: '/business-valuation',
            description: 'How a broker opinion of value is prepared and how it differs from a certified appraisal.',
          },
          {
            label: 'Texas business broker',
            href: '/texas-business-broker',
            description: 'How Forge represents Texas sellers and what a brokerage engagement includes.',
          },
        ]}
      />

      <SectionCTA
        heading="Start with a confidential conversation"
        body="The first call commits you to nothing. We review your situation, explain the process, and tell you what we would need to see before taking the business to market."
        buttonText="Send a confidential inquiry"
        buttonHref="#inquiry"
        secondaryText="Or contact us directly"
        secondaryHref="/contact"
      />

    </>
  )
}
