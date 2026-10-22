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
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'

const PATH = '/sell-your-franchise'
const TITLE = 'Sell My Franchise Business in Texas'
const DESCRIPTION =
  'Sell my franchise business: how transfer approval, right of first refusal, transfer fees, and buyer qualification work, and how a franchise unit is valued.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const linkClass = 'text-accent font-semibold hover:underline'
const p = 'text-steel leading-relaxed text-base sm:text-lg mb-5'

const steps: { title: string; body: string }[] = [
  {
    title: 'Read your agreement and Item 17',
    body: 'Start with the transfer section of your franchise agreement and the Item 17 table in the FDD you received when you bought. Note the conditions for transfer, the notice you must give, any right of first refusal, and the transfer fee. If your agreement has been amended or renewed, the current version controls.',
  },
  {
    title: 'Get your records in order',
    body: 'Assemble several years of financial statements and tax returns for the unit, the royalty and brand fund reports you have filed with the franchisor, your lease, equipment lists, and staffing records. Confirm you are current on royalties and in compliance with brand standards, because defaults usually must be cured before the franchisor will approve a sale.',
  },
  {
    title: 'Talk to your franchisor',
    body: 'Most franchise agreements require notice to the franchisor before or when you begin marketing the unit, and many franchisors have a written transfer process with forms, a fee, and a contact. Some will tell you the current buyer qualification criteria and the remodel or upgrade obligations a buyer will face. Ask for these in writing.',
  },
  {
    title: 'Value the unit',
    body: 'A franchise unit is valued on its earnings like any business, adjusted for the terms that come with it: remaining term, renewal rights, territory, and royalty load. These are covered below.',
  },
  {
    title: 'Market to qualified buyers confidentially',
    body: 'Buyers sign a nondisclosure agreement before they receive the unit name or financials. Screening buyers early against the franchisor qualification criteria saves time, because a buyer the franchisor will not approve cannot close.',
  },
  {
    title: 'Accept an offer and submit the transfer application',
    body: 'Once you have a signed letter of intent, the buyer applies to the franchisor. The franchisor reviews the buyer, and if it holds a right of first refusal, decides whether to exercise it. Financing, due diligence, and lease assignment run alongside this review.',
  },
  {
    title: 'Close and complete the handoff',
    body: 'At closing the buyer signs the franchisor documents required for the transfer, you sign the purchase agreement and usually a general release, the transfer fee is paid, and the new owner completes or schedules required training.',
  },
]

const faqs = [
  {
    question: 'Do I need my franchisor’s approval to sell my franchise?',
    answer:
      'Almost always. Franchise agreements typically require the franchisor’s written consent before a franchise, the franchised business, or a controlling ownership interest can be transferred. The conditions for consent are set out in the transfer section of your agreement and summarized in Item 17 of the FDD.',
  },
  {
    question: 'What is a right of first refusal in a franchise agreement?',
    answer:
      'A right of first refusal lets the franchisor buy your unit on the same terms a third party buyer has offered, within a set period after you give notice. If the franchisor declines, you can proceed with the buyer. Whether your franchisor has this right, and how it works, is disclosed in Item 17 and stated in your agreement.',
  },
  {
    question: 'How much is a franchise transfer fee?',
    answer:
      'Transfer fees vary by franchise system. The amount, or how it is calculated, is disclosed in Item 6 of the FDD and stated in your franchise agreement. Some franchisors charge a different fee when the buyer is an existing franchisee or a family member.',
  },
  {
    question: 'Will the buyer have to sign a new franchise agreement?',
    answer:
      'Many franchisors require the buyer to sign the then current form of franchise agreement, which may carry different terms from yours, such as a different royalty, brand fund contribution, or term length. Some instead allow the buyer to assume your existing agreement. Your agreement states which applies.',
  },
  {
    question: 'How long does it take to sell a franchise?',
    answer:
      'It depends on the business and on the franchisor’s approval process. Buyer qualification review, any right of first refusal period, training scheduling, and lease assignment all affect timing, along with the usual financing and due diligence work. We discuss a typical range once we know your franchisor’s transfer requirements.',
  },
  {
    question: 'Is a franchise unit valued differently from an independent business?',
    answer:
      'The starting point is the same: the earnings the business produces for an owner. Franchise specific terms then affect what a buyer will pay, including the remaining term, renewal rights, territory protection, royalty and fee load, and any remodel the franchisor requires at transfer. Any opinion of value from Forge is a broker opinion of value, not a certified appraisal.',
  },
]

const toc = [
  { id: 'start-here', label: 'Start With Your Agreement' },
  { id: 'steps', label: 'How to Sell a Franchise Business' },
  { id: 'approval', label: 'Franchisor Approval' },
  { id: 'right-of-first-refusal', label: 'Right of First Refusal' },
  { id: 'fees', label: 'Transfer Fees' },
  { id: 'new-owner', label: 'The New Owner' },
  { id: 'valuation', label: 'Valuing a Franchise Unit' },
  { id: 'timing', label: 'Timing' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Confidential Inquiry' },
]

export default function SellYourFranchisePage() {
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
              { name: 'Sell Your Franchise' },
            ]),
            serviceSchema({
              url,
              name: 'Franchise Resale in Texas',
              description: DESCRIPTION,
              serviceType: 'Franchise Resale',
              areaServed: TEXAS_AREA,
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-white">
        <div className="container-wide section-padding !pb-12">
          <Breadcrumbs
            withSchema={false}
            items={[{ label: 'Sell Your Business', href: '/sell-your-business' }, { label: 'Sell Your Franchise' }]}
          />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Franchise Resale</p>
            <h1 className="heading-1 mb-8">Sell Your Franchise Business: Transfer Terms, Approval, and Value</h1>
            <p className="body-large mb-6">
              For owners asking &ldquo;how do I sell my franchise business?&rdquo;, the answer starts with someone other
              than the buyer. A franchise sale is a sale of a business plus a transfer of the franchise, and the franchisor has
              a say in the second part. Your franchise agreement sets the conditions, and the franchisor decides whether
              the buyer meets them.
            </p>
            <p className="body-large mb-8">
              This page covers how a franchise resale works in Texas: what to read first, the conditions franchisors
              commonly set, the right of first refusal, transfer fees, and how a franchise unit is valued. For selling an
              independent company, see our{' '}
              <Link href="/sell-your-business" className={linkClass}>guide for business owners planning a sale</Link>.
            </p>
            <KeyTakeaways
              readTime="11 min read"
              items={[
                'Read the transfer section of your franchise agreement and Item 17 of your FDD before anything else.',
                'Most franchisors must approve the buyer, and many require the buyer to sign the then current franchise agreement.',
                'A right of first refusal, if your franchisor has one, lets it buy the unit on the same terms as your buyer.',
                'Transfer fees are disclosed in Item 6 and vary by system.',
                'Remaining term, renewal rights, territory, and royalty load all affect what a buyer will pay.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC items={toc} />
            </aside>

            <div className="lg:col-span-9 space-y-16">
              <article id="start-here" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Start With Your Franchise Agreement and Item 17</h2>
                <p className={p}>
                  Your franchise agreement contains a section on assignment or transfer. It governs what happens when you
                  sell the franchise, sell the business assets, or sell a controlling interest in the entity that holds the
                  franchise. Most agreements treat all three as a transfer that needs the franchisor&apos;s consent.
                </p>
                <p className={p}>
                  Item 17 of the Franchise Disclosure Document summarizes those terms in a table: the conditions for
                  franchisor approval of a transfer, any right of first refusal, and your obligations after the franchise
                  ends, including any noncompete. Item 6 lists the transfer fee. If you no longer have the FDD you received
                  when you bought, ask the franchisor for its current FDD, and rely on your signed agreement for the terms
                  that bind you.
                </p>
                <p className={p}>
                  Read both before you talk to a buyer. Sellers who start marketing first sometimes learn that the
                  franchisor requires notice before marketing, restricts how the unit can be advertised, or has conditions
                  the expected buyer cannot meet.
                </p>
              </article>

              <article id="steps" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">How to Sell a Franchise Business, Step by Step</h2>
                <p className={p}>
                  The steps below describe how to sell a franchise business in the order most franchise resales follow.
                  Your agreement and your franchisor&apos;s transfer process may add steps or change the order.
                </p>
                <ol className="space-y-8 mt-8">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-5">
                      <span className="text-accent font-display font-bold text-2xl flex-shrink-0 w-10" style={{ letterSpacing: '-0.02em' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="heading-4 mb-2">{step.title}</h3>
                        <p className="text-steel leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>

              <article id="approval" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Franchisor Approval and Common Transfer Conditions</h2>
                <p className={p}>
                  Franchisors approve transfers because the buyer will operate under their brand for years. Some
                  agreements say consent will not be unreasonably withheld if stated conditions are met, and others give
                  the franchisor more discretion. The conditions below appear in many franchise agreements. Yours may include some, all,
                  or others.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      title: 'Buyer meets current criteria',
                      body: 'The buyer must meet the franchisor’s current qualification standards for new franchisees, which typically cover liquid capital, net worth, experience, and background checks.',
                    },
                    {
                      title: 'Then current franchise agreement',
                      body: 'The buyer signs the franchisor’s then current form of franchise agreement, which may carry different terms from yours, including fees, term length, or territory.',
                    },
                    {
                      title: 'Remodel or upgrade',
                      body: 'The unit must be brought up to current brand standards, which can mean a remodel, new equipment, signage, or technology. The agreement may assign this to the seller or the buyer, or leave it to negotiation.',
                    },
                    {
                      title: 'Defaults cured',
                      body: 'All royalties, brand fund contributions, and other amounts owed to the franchisor and its affiliates are paid, and any standards or compliance defaults are cured.',
                    },
                    {
                      title: 'General release',
                      body: 'The seller signs a general release of claims against the franchisor. Have your attorney review it, because it can end claims you did not know you had.',
                    },
                    {
                      title: 'Training completed',
                      body: 'The buyer, or a designated manager, completes the franchisor’s initial training program before or shortly after closing.',
                    },
                  ].map((c) => (
                    <div key={c.title} className="bg-ash-tint p-6" style={{ borderRadius: '4px' }}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-graphite mb-2">{c.title}</p>
                      <p className="text-steel text-sm leading-relaxed">{c.body}</p>
                    </div>
                  ))}
                </div>
                <p className={`${p} mt-8`}>
                  Some agreements add further conditions, such as the seller remaining liable on certain obligations, the
                  buyer assuming the lease, or the seller agreeing to a noncompete after closing. Read the whole section,
                  not only the Item 17 summary.
                </p>
              </article>

              <article id="right-of-first-refusal" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">The Right of First Refusal</h2>
                <p className={p}>
                  Many franchise agreements give the franchisor a right of first refusal. When you receive a bona fide offer
                  you intend to accept, you must give the franchisor notice and a copy of the offer, and the franchisor has
                  a set period to elect to buy the unit on the same terms. If it declines or the period expires, you may
                  proceed with your buyer, usually only on the terms you disclosed.
                </p>
                <p className={p}>
                  The right affects how you deal with buyers. Some buyers are reluctant to invest in due diligence when the
                  franchisor could step in. Tell buyers about the right early, follow the notice procedure in your
                  agreement exactly, and build the response period into your expected timeline. Item 17 tells you whether
                  your franchisor holds this right.
                </p>
              </article>

              <article id="fees" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Transfer Fees</h2>
                <p className={p}>
                  Franchisors charge a fee to process a transfer, covering their review of the buyer and the cost of
                  training the new owner. The amount varies widely by system. Some charge a flat fee, some charge a
                  percentage of the initial franchise fee then in effect, and some charge less for transfers to existing
                  franchisees, family members, or an entity the seller controls.
                </p>
                <p className={p}>
                  The transfer fee is disclosed in Item 6 of the FDD and stated in your franchise agreement. The agreement
                  may say who pays it; if it does not, it is a point to negotiate with the buyer. Budget separately for
                  any remodel costs, legal fees, and the cost of curing defaults.
                </p>
              </article>

              <article id="new-owner" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">What the Franchisor Requires of the New Owner</h2>
                <p className={p}>
                  The franchisor reviews the buyer much as it would review a new franchisee. Expect it to request a
                  personal financial statement, proof of liquid capital, credit and background checks, a resume, and often
                  an interview or a visit to headquarters. A buyer who does not meet the criteria will not be approved,
                  regardless of the price offered, so screen buyers against those criteria before you accept an offer.
                </p>
                <p className={p}>
                  Where the franchisor requires it, the buyer receives the franchisor&apos;s current Franchise Disclosure
                  Document before signing the franchisor&apos;s documents. That gives the buyer the franchisor&apos;s current
                  fees, litigation history, outlet data, and financial statements. The buyer will also complete the
                  franchisor&apos;s required training, and the closing date often depends on when a training class is
                  available.
                </p>
                <p className={p}>
                  For a buyer&apos;s view of the process, our page on{' '}
                  <Link href="/buy-a-franchise" className={linkClass}>franchise buyer consulting</Link> covers how buyers
                  read an FDD and validate a brand.
                </p>
              </article>

              <article id="valuation" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">How a Franchise Unit Is Valued</h2>
                <p className={p}>
                  A franchise unit is valued on the same foundation as any small business: the earnings it produces for an
                  owner, usually measured after adding back owner compensation and one time expenses, and the risk that
                  those earnings will continue. Our{' '}
                  <Link href="/business-valuation" className={linkClass}>valuation page</Link> explains the methods. Any
                  opinion of value from Forge is a broker opinion of value. It is not a certified appraisal, and a lender
                  may order its own.
                </p>
                <p className={p}>Franchise terms change the picture in ways an independent business does not face:</p>
                <ul className="space-y-4 mb-5">
                  <li className="text-steel leading-relaxed">
                    <span className="font-semibold text-graphite">Remaining term.</span> A buyer is buying the years left on
                    the franchise. A unit near the end of its term carries more uncertainty unless the buyer signs a new
                    agreement at transfer.
                  </li>
                  <li className="text-steel leading-relaxed">
                    <span className="font-semibold text-graphite">Renewal rights.</span> The conditions for renewal, the
                    renewal fee, and any requirement to sign the then current agreement affect how a buyer views the long
                    term.
                  </li>
                  <li className="text-steel leading-relaxed">
                    <span className="font-semibold text-graphite">Territory.</span> A protected territory with room to grow
                    is worth more to a buyer than an unprotected one where the franchisor can place another unit nearby.
                  </li>
                  <li className="text-steel leading-relaxed">
                    <span className="font-semibold text-graphite">Royalty and fee load.</span> Royalties, brand fund
                    contributions, and technology fees come out of every sale. If the buyer must sign a then current
                    agreement with higher fees, the buyer will value the unit on those fees, not yours.
                  </li>
                  <li className="text-steel leading-relaxed">
                    <span className="font-semibold text-graphite">Required capital at transfer.</span> A remodel or upgrade
                    the buyer must fund reduces what the buyer can pay you.
                  </li>
                </ul>
              </article>

              <article id="timing" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Timing Depends on the Franchisor&apos;s Process</h2>
                <p className={p}>
                  A franchise resale has every step of an independent sale plus the franchisor&apos;s review. How long that
                  review takes depends on the franchisor: how quickly it processes applications, whether it exercises or
                  waives a right of first refusal, when the next training class runs, and whether a remodel must be done
                  before closing. We give a typical range for a specific sale once we know your franchisor&apos;s transfer
                  requirements, and we do not promise a closing date.
                </p>
                <p className={p}>
                  Starting with the agreement, curing any defaults early, and screening buyers against the franchisor&apos;s
                  criteria are the parts of the timeline you control.
                </p>
              </article>

              <BrokerageNotice />

              <section id="faq" className="scroll-mt-28 pt-4">
                <p className="eyebrow mb-4">Questions</p>
                <h2 className="heading-3 mb-8">Questions From Franchise Owners</h2>
                <FAQList faqs={faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-28">
                <IntakeForm
                  inquiryType="franchise-seller"
                  heading="Talk to Us About Selling Your Franchise"
                  intro="Tell us about your unit and your franchisor. We will review your transfer terms with you before any buyer is contacted."
                />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to Go From Here"
        links={[
          { label: 'Selling a Business in Texas', href: '/sell-your-business', description: 'How Forge represents Texas owners through a confidential sale.' },
          { label: 'Business Valuation', href: '/business-valuation', description: 'How earnings, risk, and market evidence shape the price of a business.' },
          { label: 'Buying a Franchise', href: '/buy-a-franchise', description: 'How buyers evaluate brands and read the Franchise Disclosure Document.' },
        ]}
      />

      <SectionCTA
        heading="Review Your Transfer Terms Before You Sell"
        body="Send a confidential inquiry. We start with your franchise agreement and your franchisor's transfer process."
        buttonText="Send a Confidential Inquiry"
        buttonHref="#inquiry"
      />
    </>
  )
}
