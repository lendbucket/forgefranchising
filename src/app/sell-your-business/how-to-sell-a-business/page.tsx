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
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, articleSchema, faqSchema, renderSchema } from '@/lib/schema'

const PATH = '/sell-your-business/how-to-sell-a-business'
const TITLE = 'How to Sell a Business, Step by Step'
const DESCRIPTION =
  'How to sell a business step by step: exit options, preparation, value, broker or by owner, LOI terms, due diligence, SBA financing, closing, and transition.'
const HEADLINE = 'How to Sell a Business: A Step by Step Guide for Owners'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const inlineLink = 'text-accent font-semibold hover:underline'
const bodyText = 'text-steel text-[17px] leading-relaxed mb-5'

type Step = {
  id: string
  title: string
  what: string[]
  bullets?: { label: string; text: string }[]
  documents: string[]
  mistakes: string
  link?: { href: string; label: string }
}

const steps: Step[] = [
  {
    id: 'exit-options',
    title: 'Decide to sell and choose your exit',
    what: [
      'Start by writing down why you are selling and what you need from the sale: a clean break, a gradual step back, income after closing, or a future for the employees and the name. Those answers decide which exit fits, and they are worth settling before you talk to any buyer.',
    ],
    bullets: [
      {
        label: 'Sale to a third party',
        text: 'An outside individual or company buys the business. This route reaches the widest pool of buyers and usually involves bank financing, a formal marketing process, and full due diligence.',
      },
      {
        label: 'Sale to employees or a partner',
        text: 'A manager, a key employee, or an existing partner buys you out. The buyer already knows the business, which shortens diligence, but they often have less cash, so seller financing or a longer payout is common. Review any buy sell agreement you already have, because it may set the terms.',
      },
      {
        label: 'Family transfer',
        text: 'Ownership passes to children or relatives by sale, gift, or a combination over time. The tax and estate planning questions are significant, and this path should be designed with your CPA and an estate planning attorney.',
      },
      {
        label: 'Closing the business',
        text: 'Some businesses are worth more as assets than as an operating company, or have no realistic buyer. Closing means selling equipment and inventory, ending the lease, settling obligations, and winding down the entity under Texas law.',
      },
    ],
    documents: [
      'A short written statement of your goals, timing, and role after the sale',
      'Any existing buy sell, partnership, or operating agreement',
      'A list of advisors: attorney, CPA, financial planner',
    ],
    mistakes:
      'Deciding to sell during a bad month and rushing to market. Owners who sell under pressure tend to accept the first offer and the worst terms. The other common mistake is not involving co owners or a spouse early, then discovering a disagreement after an offer is on the table.',
  },
  {
    id: 'preparation',
    title: 'Prepare the business 12 to 24 months ahead',
    what: [
      'Buyers pay for earnings they can verify and risks they can measure. The year or two before a sale is when you make both visible. Preparation does not mean dressing the business up. It means removing the issues that cause buyers to discount the price or walk away in due diligence.',
    ],
    bullets: [
      {
        label: 'Clean books',
        text: 'Have your CPA produce financial statements that reconcile to your tax returns. Stop running personal expenses through the business, or document each one clearly so it can be added back.',
      },
      {
        label: 'Reduce owner dependence',
        text: 'If customers call you directly, if you are the only one who can quote a job, or if vendor relationships are personal to you, start moving those duties to a manager or a documented process.',
      },
      {
        label: 'Document processes',
        text: 'Write down how the work gets done: pricing, scheduling, purchasing, hiring, quality control, and the reports you rely on. A buyer is more confident when the operation is written down.',
      },
      {
        label: 'Resolve legal issues',
        text: 'Settle pending disputes where you can, confirm the entity is in good standing with the Texas Secretary of State and the Comptroller, register trademarks you depend on, and put informal arrangements with customers or contractors into written contracts.',
      },
      {
        label: 'Lease assignment',
        text: 'Read your lease for the assignment clause. Many leases require landlord consent, and some allow the landlord to change terms or require a personal guarantee from the buyer. If the remaining term is short, discuss a renewal or extension with your attorney before you go to market.',
      },
    ],
    documents: [
      'Three years of tax returns and CPA prepared financial statements',
      'A list of add backs with receipts or statements for each',
      'Written procedures and an organization chart',
      'The lease, all amendments, and any landlord correspondence',
      'Certificates of good standing and copies of licenses and permits',
    ],
    mistakes:
      'Waiting until the business is listed to clean up the books. Buyers and lenders rely on tax returns, and earnings that appear only in a spreadsheet are discounted or ignored. Another frequent problem is a lease with little time left, which can stop a lender from financing the deal.',
  },
  {
    id: 'value',
    title: 'Understand how value is set',
    what: [
      'Value is not a number you choose. Buyers and lenders arrive at it from the earnings the business produces for an owner, the risks they see, the condition of the assets, and what similar businesses have sold for. Owner dependence, customer concentration, a short lease, and unverifiable earnings all push value down.',
      'A broker opinion of value gives you an evidence based asking price for marketing. It is not a certified appraisal and is not a substitute for one. If you need a formal appraisal for a partner buyout, estate planning, or a lender, that is a separate engagement with a credentialed appraiser. Get a value estimate early, before you decide on timing, so the decision to sell is made with realistic expectations.',
    ],
    documents: [
      'Three years of financial statements and tax returns, plus a current interim P&L',
      'Add back schedule with supporting records',
      'Equipment list with approximate age and condition',
      'Revenue by customer and by service or product line',
    ],
    mistakes:
      'Anchoring on a figure heard from a friend, an industry rule of thumb, or what you need for retirement. Buyers will not pay for a need, and lenders will not lend against it. An overpriced listing sits on the market, and a business that sits becomes harder to sell at any price.',
    link: { href: '/business-valuation', label: 'How a broker opinion of value is prepared' },
  },
  {
    id: 'broker-or-owner',
    title: 'Choose between selling by owner and hiring a broker',
    what: [
      'Both paths can work. Selling by owner avoids a broker fee and can make sense when you already have a buyer, such as a partner, a manager, or a competitor who approached you, and when you have the time and experienced advisors to run the process. The cost is your time, the difficulty of staying confidential while marketing your own business, and the lack of a buffer between you and the buyer in negotiation.',
      'A broker adds pricing support, confidential marketing, buyer screening, and management of the process through closing. The cost is the fee set out in the engagement agreement, and the arrangement only works if the broker is responsive and knows your type of business. Whichever path you choose, you still need your own attorney and CPA.',
    ],
    documents: [
      'For a broker: the proposed engagement agreement, read in full before signing',
      'For a sale by owner: an NDA drafted by your attorney and a plan for screening buyers',
    ],
    mistakes:
      'Signing an engagement agreement without reading the term, the exclusivity clause, and the tail provision that covers buyers introduced during the agreement. On the by owner side, the common mistake is sharing financials with an interested party before an NDA and proof of funds are in hand.',
    link: { href: '/texas-business-broker', label: 'What a Texas business broker engagement covers' },
  },
  {
    id: 'confidentiality',
    title: 'Set up confidentiality before anyone is told',
    what: [
      'Decide in advance who will know about the sale and when. In most sales that means only you, any co owners, your advisors, and possibly one trusted manager until the deal is close to closing. Buyers learn the name of the business only after signing an NDA and showing they can complete the purchase.',
      'Plan the practical details too. Choose where buyer meetings will happen, how documents will be shared, and what you will say if an employee asks why strangers are touring the shop. A data room with access controls is far safer than emailing attachments.',
    ],
    documents: [
      'A nondisclosure agreement for buyers, reviewed by your attorney',
      'A blind teaser that describes the business without identifying it',
      'An access controlled data room for due diligence documents',
    ],
    mistakes:
      'Telling employees too early. Staff may leave, and the rumor tends to reach customers and competitors. The opposite mistake is waiting too long to involve a manager the buyer will depend on, which can surprise the buyer late in diligence.',
  },
  {
    id: 'marketing',
    title: 'Market the business and screen buyers',
    what: [
      'Marketing a business for sale has two documents. The blind teaser circulates widely and draws inquiries. The confidential information memorandum describes the business in full, with history, operations, staff structure, customers in summary, financials, and the reason for sale, and is released only to qualified buyers.',
      'Screen every buyer before the memorandum goes out. Ask for a signed NDA, proof of funds, a personal financial statement, a summary of relevant experience, and lender prequalification if they will borrow. Then hold meetings with the most credible buyers, off site or after hours, to test fit on both sides.',
    ],
    documents: [
      'Blind teaser and confidential information memorandum',
      'Buyer questionnaire and NDA log',
      'Proof of funds and financial statements from each qualified buyer',
    ],
    mistakes:
      'Spending weeks with a buyer who never showed proof of funds. A second mistake is overstating the business in the memorandum. Anything you claim will be checked in due diligence, and an overstatement found there damages the deal and can create legal exposure.',
  },
  {
    id: 'loi',
    title: 'Negotiate the letter of intent',
    what: [
      'The letter of intent sets the business terms before attorneys draft the purchase agreement. Most of it is nonbinding, though confidentiality and exclusivity clauses usually are binding. Negotiate it carefully; terms you concede here are hard to win back later.',
    ],
    bullets: [
      {
        label: 'Price and structure',
        text: 'The headline price matters less than how and when it is paid. Cash at closing, a seller note, an earnout, and an employment or consulting agreement each carry different risk for you.',
      },
      {
        label: 'Asset sale or stock sale',
        text: 'In an asset sale the buyer purchases selected assets and usually leaves most liabilities with the seller. In a stock or membership interest sale the buyer acquires the entity itself, along with its history. Buyers often prefer asset sales, and the choice has major tax and legal consequences for both sides. Your CPA and attorney should advise on structure before you sign the LOI.',
      },
      {
        label: 'Seller financing',
        text: 'You agree to receive part of the price over time through a promissory note. It can widen the buyer pool and support the price, but you carry the risk that the buyer cannot pay. If an SBA lender is involved, it will set conditions on any seller note.',
      },
      {
        label: 'Earnouts',
        text: 'Part of the price depends on the business hitting future targets. Earnouts can bridge a gap in price expectations, but you no longer control the business that has to hit the target, so define the measures and reporting precisely.',
      },
      {
        label: 'Working capital',
        text: 'Decide what stays with the business at closing: inventory, receivables, cash, and payables. Many deals set a target level of working capital, with a price adjustment if the actual figure differs.',
      },
      {
        label: 'Noncompete',
        text: 'Buyers expect you to agree not to compete for a period of time within a defined area. Texas law generally enforces a noncompete given as part of a business sale when its duration, geography, and scope of activity are reasonable. Your attorney drafts it.',
      },
      {
        label: 'Transition',
        text: 'Agree on how long you will stay, in what role, and whether you are paid for that time.',
      },
    ],
    documents: [
      'Each written offer, compared side by side',
      'Your CPA’s view of the after tax result under each structure',
      'Your attorney’s review of the LOI before you sign it',
    ],
    mistakes:
      'Choosing the offer with the highest headline price without comparing how much is paid at closing and how much depends on the buyer’s future performance. Another is granting a long exclusivity period without a clear due diligence timeline, which takes the business off the market with no commitment in return.',
  },
  {
    id: 'due-diligence',
    title: 'Get through due diligence',
    what: [
      'Due diligence is the buyer verifying everything you have said. Expect detailed requests covering financial records, bank statements, tax filings, contracts, the lease, employee matters, licenses, equipment, insurance, litigation, and environmental issues where relevant. The buyer’s CPA may perform a quality of earnings review.',
      'Organize the documents in the data room before the LOI is signed, answer requests quickly, and disclose problems yourself rather than letting the buyer find them. A known issue can be priced or structured around. A hidden one found late usually reopens negotiation or ends the deal.',
      'Keep running the business as if you were not selling. Revenue that drops during diligence becomes a reason to renegotiate.',
    ],
    documents: [
      'Monthly financial statements and bank statements for the review period',
      'Sales tax filings and payroll records',
      'All material contracts, the lease, and insurance policies',
      'Licenses, permits, and certificates of good standing',
      'A certificate from the Texas Comptroller showing state taxes are paid, which the buyer’s attorney will typically request',
    ],
    mistakes:
      'Letting performance slip while attention is on the sale, and answering diligence requests slowly. Both signal risk to the buyer and the lender. Owners also underestimate how much time diligence takes; plan your schedule for it.',
  },
  {
    id: 'financing',
    title: 'Support the buyer’s financing',
    what: [
      'Many buyers of small and midsize businesses finance the purchase. A common source is the SBA 7(a) loan program, under which banks and other approved lenders make loans partially guaranteed by the U.S. Small Business Administration. The maximum 7(a) loan amount is $5 million. Lenders require the buyer to make an equity injection, and the SBA sets minimum requirements that have changed over time, so the buyer’s lender will explain the current rules.',
      'The lender underwrites both the buyer and the business. It reviews your tax returns, may order an independent business valuation, and may set conditions on any seller note, such as requiring payments to be deferred for a period. SBA rules also limit how long a seller may stay on after a change of ownership financed with a 7(a) loan. Learn those conditions early, because they shape the deal terms you can agree to.',
    ],
    documents: [
      'Business tax returns the lender can verify, typically for three years',
      'Interim financial statements and a debt schedule',
      'The lease, or a landlord consent to assignment',
      'The signed letter of intent',
    ],
    mistakes:
      'Accepting an offer before the buyer has spoken to a lender, and assuming the lender will accept earnings that do not appear on the tax returns. Lender requirements can also change the structure you negotiated, so leave room for that in the LOI.',
    link: { href: '/financing', label: 'Financing options for business buyers' },
  },
  {
    id: 'closing',
    title: 'Sign the purchase agreement and close',
    what: [
      'The purchase agreement replaces the LOI with binding terms. It includes the price and payment terms, a list of what is being sold, your representations and warranties about the business, indemnification if those statements prove untrue, closing conditions, and the noncompete and transition terms. Your attorney negotiates it; your CPA confirms the allocation of the purchase price and the tax treatment.',
      'Closing is usually handled by a title company or the attorneys. The buyer’s funds and the lender’s funds are delivered, existing liens are paid off, ownership documents are signed, and the lease assignment, bill of sale, and any notes or security agreements take effect.',
    ],
    documents: [
      'Definitive purchase agreement with all schedules',
      'Payoff letters for any loans or liens',
      'Landlord consent and lease assignment',
      'Bill of sale or stock transfer documents',
      'Seller note and security agreement, if any',
    ],
    mistakes:
      'Treating the purchase agreement as a formality once the LOI is signed. Representations, warranties, and indemnification terms determine your exposure after closing. Another is failing to plan for the payoff of existing debt, which delays closing.',
  },
  {
    id: 'transition',
    title: 'Hand over the business',
    what: [
      'The transition period is when you introduce the buyer to employees, customers, vendors, and the landlord, and teach them how the business runs. The length and terms are set in the purchase agreement. A buyer who succeeds after closing is also the best protection for any seller note or earnout you are owed.',
      'Plan the announcement to employees with the buyer. Most owners tell key staff first, then the full team, then customers and vendors. Keep your commitments in the transition agreement, and then step back as agreed.',
    ],
    documents: [
      'Transition or consulting agreement',
      'Customer and vendor introduction list',
      'Handover checklist covering passwords, accounts, keys, and recurring tasks',
    ],
    mistakes:
      'Staying too involved and undermining the new owner, or leaving before the buyer is ready. Either can damage the business, and if part of your price is still owed through a note or an earnout, its performance still affects you.',
  },
]

const faqs = [
  {
    question: 'Should I sell the assets of my business or the stock?',
    answer:
      'It depends on your entity type, the buyer’s preferences, the lender’s requirements, and the tax result. Buyers often prefer asset purchases because they can leave most liabilities behind. Sellers sometimes prefer stock sales. The tax and legal consequences are significant, so ask your CPA and attorney to compare the options before you sign a letter of intent.',
  },
  {
    question: 'What is seller financing?',
    answer:
      'Seller financing means the buyer pays part of the price over time through a promissory note to you instead of paying it all at closing. It can make a deal possible and widen the pool of buyers, but you take on the risk that the buyer does not pay. If an SBA lender is involved, it will set conditions on the note.',
  },
  {
    question: 'What is an earnout?',
    answer:
      'An earnout makes part of the purchase price depend on how the business performs after closing, measured by revenue, gross profit, or another agreed figure. It can close a gap between what you want and what the buyer will pay up front. Because you no longer run the business, define the measure, the reporting, and the payment dates precisely.',
  },
  {
    question: 'Do I need my landlord’s permission to sell?',
    answer:
      'Often, yes. Many commercial leases require landlord consent to assign the lease to a buyer, and lenders usually want the lease assigned or renewed with enough remaining term to cover the loan. Read the assignment clause early and talk to your attorney about how to approach the landlord.',
  },
  {
    question: 'How long will I have to stay after the sale?',
    answer:
      'That is negotiated in the letter of intent and the purchase agreement. The period depends on how much the business relies on you and what the buyer needs to learn. When a buyer uses an SBA 7(a) loan, SBA rules limit how long the seller can remain involved, and the lender will explain the current limits.',
  },
  {
    question: 'Can I sell a business without a broker?',
    answer:
      'Yes. Owners sell without a broker most often when a buyer is already identified, such as a partner or an employee. You will still need an attorney to draft the NDA and purchase agreement and a CPA to advise on structure and taxes, and you will need to manage confidentiality, buyer screening, and due diligence yourself.',
  },
]

export default function HowToSellABusinessPage() {
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
              { name: 'How to Sell a Business' },
            ]),
            articleSchema({
              url,
              headline: HEADLINE,
              description: DESCRIPTION,
              datePublished: '2026-10-22',
              dateModified: '2026-10-22',
              image: `${SITE_URL}/og-image.png`,
              articleType: 'Article',
              articleSection: 'Selling a Business',
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            withSchema={false}
            items={[{ label: 'Sell Your Business', href: '/sell-your-business' }, { label: 'How to Sell a Business' }]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">{HEADLINE}</h1>
            <p className="body-large mb-6">
              Knowing how to sell a business comes down to doing the right work in the right order. Much of that work
              happens before the business is listed: deciding what kind of exit you want, cleaning up the records a
              buyer and lender will review, and planning how the sale will stay confidential. This guide lays out the steps a seller
              follows, with what to do at each one, the documents it needs, and the mistakes that cost owners time or
              money.
            </p>
            <p className="body-large mb-8">
              For an overview of how Forge represents Texas sellers, see our{' '}
              <Link href="/sell-your-business" className={inlineLink}>
                sell your business page
              </Link>
              .
            </p>
            <KeyTakeaways
              readTime="16 min read"
              items={[
                'Choose your exit first: a third party sale, a sale to employees or a partner, a family transfer, or closing the business.',
                'Start preparing 12 to 24 months ahead. Clean books, less owner dependence, written processes, and a lease that can be assigned all matter.',
                'A broker opinion of value sets an asking price for marketing. It is not a certified appraisal.',
                'The letter of intent decides structure, seller financing, earnouts, working capital, the noncompete, and the transition. Have your attorney and CPA review it before you sign.',
                'Lenders, including SBA 7(a) lenders, underwrite the business as well as the buyer, and their conditions shape the deal.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-stone">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC
                items={[
                  { id: 'overview', label: 'The short version' },
                  ...steps.map((s) => ({ id: s.id, label: s.title })),
                  { id: 'advisors', label: 'Your advisors' },
                  { id: 'faq', label: 'Questions' },
                  { id: 'inquiry', label: 'Talk to Forge' },
                ]}
              />
            </aside>

            <div className="lg:col-span-9 min-w-0 space-y-24 max-[720px]:space-y-16">
              <section id="overview" className="scroll-mt-28">
                <h2 className="heading-2 mb-6">How to sell my business: The short version</h2>
                <p className={bodyText}>
                  Owners who ask how to sell my business are usually asking two questions at once: what the steps are,
                  and how long each one takes. The steps are listed below. The time each takes is a typical range that
                  depends on the business, the state of its records, and how the buyer will pay, so this guide describes
                  the work rather than promising a schedule.
                </p>
                <ol className="space-y-2 text-steel text-[17px] leading-relaxed list-decimal pl-6 mb-5">
                  {steps.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="hover:text-accent transition-colors">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className={bodyText}>
                  The first five steps happen before any buyer hears about the business. They are also the easiest to rush,
                  and gaps left there tend to surface later, in due diligence or at the lender, when they are harder to
                  fix.
                </p>
              </section>

              {steps.map((step, i) => (
                <article key={step.id} id={step.id} className="scroll-mt-28">
                  <p className="numeral text-[56px] mb-6">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="heading-2 mb-6">{step.title}</h2>
                  {step.what.map((p) => (
                    <p key={p.slice(0, 32)} className={bodyText}>
                      {p}
                    </p>
                  ))}
                  {step.bullets && (
                    <ul className="space-y-4 mt-6 mb-6">
                      {step.bullets.map((b) => (
                        <li key={b.label} className="flex gap-3">
                          <span className="w-1.5 h-1.5 bg-ember flex-shrink-0 mt-2.5" aria-hidden="true" />
                          <p className="text-steel text-[17px] leading-relaxed">
                            <span className="font-semibold text-graphite">{b.label}.</span> {b.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="tile-grid md:grid-cols-2 mt-8">
                    <div className="card">
                      <p className="heading-4 mb-4">Documents you need</p>
                      <ul className="space-y-1.5 text-steel text-[15px] leading-relaxed list-disc pl-5">
                        {step.documents.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="card">
                      <p className="heading-4 mb-4">Common mistakes</p>
                      <p className="text-steel text-[15px] leading-relaxed">{step.mistakes}</p>
                    </div>
                  </div>
                  {step.link && (
                    <p className="mt-5 text-sm">
                      <Link href={step.link.href} className={inlineLink}>
                        {step.link.label}
                      </Link>
                    </p>
                  )}
                </article>
              ))}

              <section id="advisors" className="scroll-mt-28">
                <h2 className="heading-2 mb-6">Bring in an attorney and a CPA early</h2>
                <p className={bodyText}>
                  This guide does not give tax or legal advice, and neither does a business broker. The structure of a
                  sale, the allocation of the purchase price, the treatment of a seller note or earnout, and the terms of
                  the purchase agreement all carry tax and legal consequences that depend on your situation. Retain an
                  attorney who handles business acquisitions and a CPA who has advised on business sales, and involve them
                  before you sign a letter of intent, not after.
                </p>
                <p className={bodyText}>
                  If you decide to work with a broker, the broker coordinates with your advisors on timing and documents.
                  Our page on the{' '}
                  <Link href="/texas-business-broker" className={inlineLink}>
                    Texas business broker
                  </Link>{' '}
                  engagement explains that coordination, and the{' '}
                  <Link href="/sell-your-business" className={inlineLink}>
                    sell your business overview
                  </Link>{' '}
                  covers how Forge keeps a sale confidential and qualifies buyers. Franchise owners should also read our
                  page on{' '}
                  <Link href="/sell-your-franchise" className={inlineLink}>
                    selling a franchised location
                  </Link>
                  , because franchisor approval adds steps to the process.
                </p>
                <BrokerageNotice className="mt-8" />
              </section>

              <section id="faq" className="scroll-mt-28 pt-4">
                <h2 className="heading-2 mb-8">Questions about deal terms and the sale process</h2>
                <FAQList faqs={faqs} />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-white scroll-mt-28">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="heading-2 mb-6">Plan your sale with Forge</h2>
              <p className="text-steel text-[17px] leading-relaxed mb-5">
                If you are working through these steps and want a second view of where your business stands, tell us
                about it. We reply within one business day, and what you send stays between you and Forge.
              </p>
              <p className="text-steel text-[17px] leading-relaxed">
                To understand pricing first, read how a{' '}
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
            label: 'Sell your business',
            href: '/sell-your-business',
            description: 'How Forge runs a confidential sale for Texas owners, from first call to closing.',
          },
          {
            label: 'Business valuation',
            href: '/business-valuation',
            description: 'How a broker opinion of value is prepared and when you need a certified appraisal instead.',
          },
          {
            label: 'Texas business broker',
            href: '/texas-business-broker',
            description: 'What a brokerage engagement covers and how a broker works with your attorney and CPA.',
          },
        ]}
      />

      <SectionCTA
        heading="Talk through your exit before you start"
        body="A first conversation can tell you which steps in this guide your business has already covered and which still need work."
        buttonText="Send a confidential inquiry"
        buttonHref="#inquiry"
        secondaryText="Or contact us directly"
        secondaryHref="/contact"
      />

      <StickyCTA text="Plan your sale with Forge" href="#inquiry" />
    </>
  )
}
