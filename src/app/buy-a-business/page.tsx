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
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'

const PATH = '/buy-a-business'
const TITLE = 'Business for Sale in Texas: Buyer Guide'
const DESCRIPTION =
  'Looking for a business for sale in Texas? Learn the buying process, SBA 7(a) financing, and due diligence, then share a buyer profile to see opportunities.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const linkClass = 'text-accent font-semibold hover:underline'

type ProcessStep = {
  title: string
  body: string
}

const processSteps: ProcessStep[] = [
  {
    title: 'Define your acquisition criteria',
    body: 'Write down the industry or industries you will consider, the Texas markets you can operate in, the deal size you can finance, and the role you plan to take after closing. An owner operator buying a field service company needs different things from an investor who wants a manager already in place. Criteria that are written down keep you from spending weeks on businesses you would never close on.',
  },
  {
    title: 'Get prequalified for financing',
    body: 'Talk to a lender before you talk to sellers. A prequalification conversation tells you what deal size a lender will consider given your liquid capital, credit, and management experience. Sellers and their brokers take a buyer more seriously when that work is done, and it prevents you from negotiating a deal you cannot fund.',
  },
  {
    title: 'Sign a nondisclosure agreement',
    body: 'Owners selling a business keep the sale quiet to protect employees, customers, and vendor relationships. Before you receive a business name or financial details, you will sign a nondisclosure agreement that limits how you use and share what you learn. Read it. Most restrict contact with employees, customers, landlords, and suppliers without the seller agreeing first.',
  },
  {
    title: 'Review the confidential information memorandum',
    body: 'The confidential information memorandum, often called the CIM, describes the business: its history, services, customers, staffing, facilities, and summary financials, usually with an adjusted earnings figure that adds back owner compensation and one time expenses. Treat the CIM as the seller presentation it is. Every adjustment should be traced to records during due diligence.',
  },
  {
    title: 'Meet with the owner',
    body: 'Management meetings, sometimes held at the business after hours, let you ask how the work actually gets done. Ask who holds the key customer relationships, which tasks only the owner performs, what has changed in the last few years, and why the owner is selling. The answers shape your offer and your transition plan.',
  },
  {
    title: 'Submit a letter of intent',
    body: 'A letter of intent sets out the proposed price, the structure (asset purchase or purchase of the ownership interests), how the price will be paid, the working capital and inventory terms, the length of due diligence, and any period of exclusivity. Most terms in an LOI are nonbinding, but confidentiality and exclusivity provisions often are binding. Your attorney should review it before you sign.',
  },
  {
    title: 'Complete due diligence',
    body: 'Due diligence is where you confirm what you were told. You and your advisors review the financial, tax, legal, and operating records, test the earnings figure, and look for liabilities that would transfer to you. The scope is covered in more detail below.',
  },
  {
    title: 'Close the financing',
    body: 'With an accepted LOI, the lender begins formal underwriting. Expect requests for the business tax returns and financial statements, your personal financial statement and tax returns, a resume showing relevant experience, and a business plan or projection. Many lenders also order a third party business valuation for a change of ownership loan.',
  },
  {
    title: 'Negotiate the purchase agreement',
    body: 'The definitive purchase agreement replaces the LOI. It contains the representations and warranties the seller makes about the business, the indemnification terms if those statements prove wrong, the noncompete, the allocation of the purchase price among the assets, and the conditions that must be met before closing. This is attorney work on both sides.',
  },
  {
    title: 'Close the transaction',
    body: 'At closing the parties sign the final documents, funds move through escrow or the closing attorney, and ownership passes to you. Leases are assigned or replaced, licenses and permits are transferred or reissued, bank accounts and payroll change hands, and the lender records its security interests.',
  },
  {
    title: 'Run the transition',
    body: 'Most purchase agreements require the seller to stay on for a defined transition period to introduce you to customers, vendors, and staff. The length and terms are negotiated in the agreement. A written transition plan that lists who you need to meet and which owner tasks you need to learn makes that period count.',
  },
]

const diligenceAreas: { title: string; body: string }[] = [
  {
    title: 'Financial',
    body: 'Several years of profit and loss statements, balance sheets, and bank statements, reconciled to each other. Every add back in the adjusted earnings figure should be supported by a document. Look at revenue by customer and by month for concentration and seasonality.',
  },
  {
    title: 'Tax',
    body: 'Federal income tax returns compared to the financial statements, payroll tax filings, and Texas sales and use tax and franchise tax filings. Gaps between the returns and the books need an explanation before you rely on either.',
  },
  {
    title: 'Legal',
    body: 'Entity records, pending or threatened litigation, liens and UCC filings, material contracts and whether they can be assigned to a buyer, and any intellectual property the business depends on, such as a trade name or website domain.',
  },
  {
    title: 'Operational',
    body: 'How work is scheduled, delivered, and billed. The condition and age of equipment and vehicles, the software the business runs on, supplier terms, and which processes are written down and which live only with the owner.',
  },
  {
    title: 'Customer',
    body: 'The share of revenue from the largest customers, contract terms and renewal dates, recurring versus one time work, and whether key relationships are with the company or with the owner personally.',
  },
  {
    title: 'Employee',
    body: 'Headcount, roles, pay, benefits, tenure, and any employment or noncompete agreements. Identify the employees the business cannot run without, and confirm workers are classified correctly as employees or contractors.',
  },
  {
    title: 'Lease and real estate',
    body: 'The remaining term, renewal options, rent escalations, and the assignment clause. Many leases require landlord consent to an assignment, and a lender will want the lease term to support the loan.',
  },
  {
    title: 'Licenses and permits',
    body: 'Which licenses belong to the business and which belong to a person. Some Texas trade licenses are held by an individual, and alcohol, health, and local permits often have to be reissued to a new owner rather than transferred.',
  },
  {
    title: 'Environmental, where relevant',
    body: 'For businesses that handle fuel, chemicals, or waste, or that own or lease industrial property, an environmental review may be required by the lender and is prudent regardless.',
  },
]

const faqs = [
  {
    question: 'Where can I see a list of businesses for sale in Texas from Forge?',
    answer:
      'We do not publish listings. Sellers we represent expect their sale to stay confidential, so we share current opportunities with qualified buyers after a signed nondisclosure agreement. Submit a buyer profile and we will contact you to discuss what fits your criteria.',
  },
  {
    question: 'How much cash do I need to buy a business with an SBA 7(a) loan?',
    answer:
      'Lenders require the buyer to inject equity into the purchase, and the SBA sets minimum requirements that have changed over time. The amount a lender asks for also depends on the deal and on your credit and experience. Ask your lender what current SBA rules and their own credit policy require for the deal you are considering.',
  },
  {
    question: 'What is the maximum SBA 7(a) loan amount?',
    answer:
      'The SBA 7(a) program has a maximum loan amount of $5 million. Larger acquisitions are usually financed with a combination of conventional bank debt, seller financing, and buyer equity.',
  },
  {
    question: 'Should I buy the assets or the ownership interests of the business?',
    answer:
      'Many small business sales are structured as asset purchases, which let the buyer choose which assets and liabilities to take on. Buying the ownership interests keeps the existing entity, its contracts, and its history, including its liabilities. The right structure depends on taxes, contracts, licenses, and lender requirements, and your attorney and CPA should advise you on it.',
  },
  {
    question: 'How long does it take to buy a business?',
    answer:
      'It depends on the business, the financing, and how quickly both sides produce documents. Due diligence, lender underwriting, lease assignment, and license transfers each add time. We discuss a typical range for a specific deal once the LOI terms are known.',
  },
  {
    question: 'Does Forge represent the buyer or the seller?',
    answer:
      'On most transactions a business broker is engaged by the seller. When Forge represents the seller of a business you are considering, we tell you at the start. Buyers should retain their own attorney and CPA to advise them on every transaction.',
  },
]

const toc = [
  { id: 'overview', label: 'How buying works' },
  { id: 'process', label: 'The buying process' },
  { id: 'financing', label: 'Financing the purchase' },
  { id: 'due-diligence', label: 'Due diligence' },
  { id: 'texas', label: 'Texas considerations' },
  { id: 'opportunities', label: 'Current opportunities' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Buyer profile' },
]

const p = 'text-steel text-[17px] leading-relaxed mb-5'

export default function BuyABusinessPage() {
  const url = `${SITE_URL}${PATH}`

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: TITLE, description: DESCRIPTION, hasBreadcrumb: true }),
            breadcrumbSchema(url, [{ name: 'Buy a Business' }]),
            serviceSchema({
              url,
              name: 'Business Brokerage for Buyers in Texas',
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
          <Breadcrumbs withSchema={false} items={[{ label: 'Buy a Business' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">Business for Sale in Texas: How Buyers Find, Finance, and Close</h1>
            <p className="body-large mb-6">
              Finding the right business for sale in Texas starts before you see a single opportunity. Buyers who close
              have written criteria, a lender conversation behind them, and a clear view of the role they will take after
              closing. This page covers the buying process step by step, how acquisitions are financed, what due diligence
              should cover, and how Forge shares confidential opportunities with qualified buyers.
            </p>
            <p className="body-large mb-8">
              If you are considering a franchise instead of an independent business, see our{' '}
              <Link href="/buy-a-franchise" className={linkClass}>franchise buyer consulting</Link>. If you already
              own a franchise and plan to exit, see{' '}
              <Link href="/sell-your-franchise" className={linkClass}>franchise resale</Link>.
            </p>
            <HeroActions route="/buy-a-business" />
            <KeyTakeaways
              readTime="12 min read"
              items={[
                'Forge does not publish listings. We share current opportunities with qualified buyers after a signed NDA.',
                'Get prequalified with a lender before making offers so you negotiate deals you can fund.',
                'SBA 7(a) loans go up to $5 million and require an equity injection from the buyer under SBA rules that change over time.',
                'Due diligence tests every claim in the CIM against records, from tax returns to the lease assignment clause.',
                'Retain your own attorney and CPA. The purchase agreement and deal structure are their work.',
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
              <article id="overview" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How buying a business in Texas works</h2>
                <p className={p}>
                  Buying an existing company means buying a record. Unlike a startup, the business has customers, staff,
                  equipment, and several years of financial statements you can examine. The purchase price is based on
                  what that record shows the business can earn for a new owner, and your job as a buyer is to confirm the
                  record holds up.
                </p>
                <p className={p}>
                  Most small and mid sized companies in Texas change hands privately. The owner engages a broker, the
                  broker prepares a confidential information memorandum and an asking price, and qualified buyers are
                  introduced under a nondisclosure agreement. Price is set by negotiation between buyer and seller and
                  shaped by what a lender will finance. If you want to understand how sellers and brokers arrive at an
                  asking price, our page on{' '}
                  <Link href="/business-valuation" className={linkClass}>how businesses are valued</Link> explains the
                  methods. A broker opinion of value is not a certified appraisal, and a lender may order its own.
                </p>
                <p className={p}>
                  For an overview of how Forge works with owners and buyers across the state, see{' '}
                  <Link href="/texas-business-broker" className={linkClass}>our Texas brokerage practice</Link>.
                </p>
              </article>

              <article id="process" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">The buying process, step by step</h2>
                <p className={p}>
                  The order below is the order most acquisitions follow. Some steps overlap in practice, for example
                  financing work often begins while due diligence is underway.
                </p>
                <ol className="mt-10 border-t border-graphite">
                  {processSteps.map((step, i) => (
                    <li key={step.title} className="flex gap-6 max-[720px]:gap-4 py-8 border-b border-line">
                      <span className="numeral text-[40px] flex-shrink-0 w-14 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="min-w-0">
                        <h3 className="heading-4 mb-2">{step.title}</h3>
                        <p className="text-steel text-[17px] leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>

              <article id="financing" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Financing the purchase</h2>
                <p className={p}>
                  Most acquisitions are financed with a combination of sources, usually called the capital stack: senior
                  debt from a bank, the buyer&apos;s own equity, and often a note from the seller. The mix depends on the
                  deal size, the earnings of the business, the assets it owns, and your experience.
                </p>
                <h3 className="heading-4 mb-3 mt-8">SBA 7(a) loans</h3>
                <p className={p}>
                  The SBA 7(a) program is the most common source of senior debt for small business acquisitions. The SBA
                  does not lend directly. It guarantees part of a loan made by a participating lender, which lets the
                  lender finance deals it might otherwise decline. The maximum 7(a) loan amount is $5 million.
                </p>
                <p className={p}>
                  Lenders require the buyer to put equity into the purchase. The SBA sets minimum equity injection
                  requirements, and those rules have changed over time, so confirm the current requirement with your
                  lender rather than relying on a figure you read online. Lenders may ask for more than the minimum based
                  on their own credit policy. SBA loans also generally require personal guarantees from the principal
                  owners of the buying entity.
                </p>
                <p className={p}>
                  Underwriting centers on two questions. The first is whether the cash flow of the business, after a
                  reasonable salary for the owner, covers the new debt with room to spare. The second is whether you can
                  run it. Lenders look for management or industry experience that makes the plan credible, and a buyer
                  with no related experience may need a stronger equity position or a longer seller transition.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Seller financing</h3>
                <p className={p}>
                  A seller note means the seller accepts part of the price over time instead of at closing. It reduces the
                  cash needed at closing, and it keeps the seller invested in a smooth handoff. When a seller note sits
                  behind an SBA loan, the lender and SBA rules govern its terms, including whether payments can begin
                  right away and whether any of it can count toward your equity injection. Those rules are specific and
                  have changed, so the lender confirms what applies to your deal.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Conventional loans and other sources</h3>
                <p className={p}>
                  Conventional bank loans are available for buyers with strong collateral and credit, and equipment
                  financing can fund heavy asset purchases. Some deals include an earnout, where part of the price
                  depends on how the business performs after closing. Earnouts can bridge a gap on price, but the
                  measurement terms need careful drafting by your attorney.
                </p>
                <MidCTA route="/buy-a-business" />
              </article>

              <article id="due-diligence" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What due diligence should cover</h2>
                <p className={p}>
                  Due diligence is the buyer&apos;s work, done with the buyer&apos;s own advisors. Your CPA tests the
                  financial and tax records. Your attorney reviews contracts, liabilities, and the purchase agreement.
                  Industry specialists, such as an equipment appraiser or an environmental consultant, are added when
                  the business calls for them. The areas below are the core of most reviews.
                </p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  {diligenceAreas.map((area) => (
                    <div key={area.title} className="card md:odd:last:col-span-2">
                      <p className="heading-4 mb-3">{area.title}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{area.body}</p>
                    </div>
                  ))}
                </div>
                <p className={`${p} mt-8`}>
                  If due diligence turns up a material difference from what was represented, you have three usual paths:
                  renegotiate the price or terms, add protections to the purchase agreement such as an escrow or a
                  specific indemnity, or walk away within the terms of your LOI.
                </p>
              </article>

              <article id="texas" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Texas considerations for buyers</h2>
                <p className={p}>
                  A few state specific items come up on most Texas acquisitions. Your attorney and CPA should confirm how
                  each applies to your deal.
                </p>
                <ul className="mt-8 border-t border-graphite">
                  <li className="text-steel text-[17px] leading-relaxed py-5 border-b border-line">
                    <span className="font-semibold text-graphite">State tax liability.</span> Texas law can make a
                    purchaser liable for a seller&apos;s unpaid state taxes, including sales tax, unless the buyer withholds
                    enough of the purchase price or the seller obtains a certificate from the Texas Comptroller showing
                    the taxes are paid. Ask for it early in the process.
                  </li>
                  <li className="text-steel text-[17px] leading-relaxed py-5 border-b border-line">
                    <span className="font-semibold text-graphite">Sales tax permit.</span> A new owner usually needs its
                    own sales and use tax permit from the Comptroller. Permits do not transfer with the business.
                  </li>
                  <li className="text-steel text-[17px] leading-relaxed py-5 border-b border-line">
                    <span className="font-semibold text-graphite">Occupational and trade licenses.</span> Several trades
                    in Texas are licensed by the Texas Department of Licensing and Regulation, and some licenses are held
                    by an individual. If the license holder is the seller, plan for how the business will be licensed
                    after closing.
                  </li>
                  <li className="text-steel text-[17px] leading-relaxed py-5 border-b border-line">
                    <span className="font-semibold text-graphite">Alcohol and health permits.</span> Restaurants and bars
                    that sell alcohol need permits from the Texas Alcoholic Beverage Commission, and food businesses need
                    local health permits. These generally must be applied for by the new owner, and timing affects the
                    closing date.
                  </li>
                  <li className="text-steel text-[17px] leading-relaxed py-5 border-b border-line">
                    <span className="font-semibold text-graphite">Entity filings.</span> A buying entity is formed with
                    the Texas Secretary of State, and assumed name filings may be needed to keep operating under the
                    existing trade name.
                  </li>
                </ul>
              </article>

              <article id="opportunities" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How Forge shares current opportunities</h2>
                <p className={p}>
                  Forge does not post businesses for sale on this site. The owners we work with need their sale kept
                  quiet until a qualified buyer is in the room, because word of a sale can unsettle employees and invite
                  competitors to call their customers.
                </p>
                <p className={p}>
                  Here is how it works instead. You submit a buyer profile describing what you want to buy, where, and how
                  you plan to pay for it. We review it and contact you to talk through your criteria and experience. When
                  an opportunity fits, we send a short anonymous summary. If you want to go further, you sign a
                  nondisclosure agreement, and we share the business name, the CIM, and the financial information
                  available at that stage.
                </p>
                <p className={p}>
                  A complete profile gets a faster and more useful response. Be specific about the industries you will
                  and will not consider, the Texas markets you can operate in, the cash you have for a down payment, and
                  your plan for financing. Tell us about your management experience, because sellers and lenders will ask.
                </p>
                <p className="mt-6">
                  <a href="#inquiry" className={linkClass}>Submit your buyer profile</a>
                </p>
              </article>

              <BrokerageNotice />

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">Questions from buyers</h2>
                <FAQList faqs={faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-header">
                <IntakeForm
                  inquiryType="buyer"
                  heading="Buyer profile"
                  intro="Tell us what you want to buy and how you plan to finance it. We share current opportunities with qualified buyers after a signed nondisclosure agreement."
                  submitLabel="Submit buyer profile"
                />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          { label: 'Business valuation', href: '/business-valuation', description: 'How earnings, risk, and market evidence shape the price of a business.' },
          { label: 'Texas business brokerage', href: '/texas-business-broker', description: 'How Forge represents owners and works with buyers across Texas.' },
          { label: 'Buying a franchise', href: '/buy-a-franchise', description: 'How buyers assess franchise brands and read a Franchise Disclosure Document.' },
        ]}
      />

      <SectionCTA
        heading="Tell us what you want to buy"
        body="Submit a buyer profile. We review it, talk through your criteria, and share opportunities that fit after a signed NDA."
        buttonText="Submit a buyer profile"
        buttonHref="#inquiry"
      />
    </>
  )
}
