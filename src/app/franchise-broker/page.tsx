import Link from 'next/link'
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
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'

const PATH = '/franchise-broker'
const TITLE = 'Franchise Broker in Texas'
const DESCRIPTION =
  'Franchise broker in Texas for buyers evaluating a franchise: setting goals and capital, narrowing brands, reading the FDD, validation calls, and financing.'

/** Robert's approved wording, pending final compensation terms. Change only on his instruction. */
const COMPENSATION_STATEMENT =
  'Forge discloses in writing how it is compensated on any franchise placement, including any fee paid by a franchisor, before you sign an agreement with Forge or a franchisor.'

export const metadata = createMetadata({ title: TITLE, description: DESCRIPTION, path: PATH })

const p = 'text-steel text-[17px] leading-relaxed mb-5'
const link = 'text-accent font-semibold hover:underline'

const steps = [
  {
    term: 'Clarifying goals and capital',
    text: 'What you want the business to do for you, the role you want to play, how much liquid capital you can commit, and how much you would borrow. Every later step depends on these answers.',
  },
  {
    term: 'Narrowing brands',
    text: 'Turning a long list of franchise concepts into a few that fit your goals, budget, and skills, and setting aside the ones that do not before you spend time on them.',
  },
  {
    term: 'Reading the FDD with you',
    text: 'Working through each brand\'s Franchise Disclosure Document item by item, so you know what the fees, obligations, and disclosures mean before you meet the franchisor.',
  },
  {
    term: 'Validation calls',
    text: 'Preparing questions for current and former franchisees listed in the FDD, and helping you compare what different owners tell you.',
  },
  {
    term: 'Financing options',
    text: 'Explaining the common ways buyers fund a franchise, such as SBA loans, conventional bank loans, and cash, so you can talk to lenders early.',
  },
  {
    term: 'Coordinating with your franchise attorney',
    text: 'Keeping your questions, the FDD, and the franchise agreement organized for your attorney, who reviews the documents and advises you on them.',
  },
]

const fddItems = [
  { item: 'Item 5', name: 'Initial fees', text: 'The initial franchise fee and any other fees paid before opening, and whether any are refundable.' },
  { item: 'Item 6', name: 'Other fees', text: 'Royalties, advertising fund contributions, technology fees, transfer fees, and other recurring charges.' },
  { item: 'Item 7', name: 'Estimated initial investment', text: 'The franchisor\'s estimate of what it costs to open, including additional funds for the first months of operation.' },
  { item: 'Item 11', name: 'Franchisor\'s assistance', text: 'Training, opening support, advertising, and the systems the franchisor provides, and when it provides them.' },
  { item: 'Item 12', name: 'Territory', text: 'Whether you receive a territory, what protection it offers, and what the franchisor may do inside it.' },
  { item: 'Item 17', name: 'Renewal, termination, transfer, and dispute resolution', text: 'How the relationship can end, what renewal requires, how you could sell later, and how disputes are handled.' },
  { item: 'Item 19', name: 'Financial performance representations', text: 'Any earnings or performance information the franchisor chooses to provide, with its basis and assumptions.' },
  { item: 'Item 20', name: 'Outlets and franchisee information', text: 'Openings, closures, transfers, and the contact list for current and former franchisees you can call.' },
  { item: 'Item 21', name: 'Financial statements', text: 'The franchisor\'s audited financial statements, which show whether it can support its system.' },
]

const faqs = [
  {
    question: 'What does a franchise broker do?',
    answer:
      'A franchise broker works with people who want to buy a franchise. The work covers clarifying goals and capital, narrowing brands, reading the Franchise Disclosure Document with the buyer, preparing validation calls with existing franchisees, explaining financing options, and coordinating with the buyer\'s franchise attorney.',
  },
  {
    question: 'Are there franchise brokers near me in Texas?',
    answer:
      'Forge works with franchise buyers across Texas. Meetings can be held remotely or in person, and the FDD review and validation calls work the same way wherever you live in the state.',
  },
  {
    question: 'How is a franchise broker paid?',
    answer:
      'Ask every broker before you begin who pays them, when, and whether the brands they show you are limited to those that pay them. Forge describes how it is paid in the How Forge is paid section on this page.',
  },
  {
    question: 'Can a franchise broker tell me how much I will earn?',
    answer:
      'No. A franchise broker does not make earnings representations. Under the FTC Franchise Rule, a franchisor may make financial performance representations only in Item 19 of its FDD. If a brand does not include an Item 19, no one should give you earnings figures for it.',
  },
  {
    question: 'Do I still need a franchise attorney if I work with a franchise broker?',
    answer:
      'Yes. A franchise broker does not give legal or tax advice. A franchise attorney should review the FDD and the franchise agreement before you sign, and a CPA should review the financial side.',
  },
  {
    question: 'What should I have ready for a first conversation?',
    answer:
      'A sense of the kinds of businesses that interest you, the role you want to play, roughly how much liquid capital you can commit, how you would finance the rest, and when you would like to open.',
  },
]

const toc = [
  { id: 'what', label: 'What a franchise broker does' },
  { id: 'fdd', label: 'The FDD items to read' },
  { id: 'paid', label: 'How Forge is paid' },
  { id: 'limits', label: 'What a broker does not do' },
  { id: 'texas', label: 'Why Texas buyers' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Send a buyer profile' },
]

export default function FranchiseBrokerPage() {
  const url = `${SITE_URL}${PATH}`

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: TITLE, description: DESCRIPTION, hasBreadcrumb: true }),
            breadcrumbSchema(url, [
              { name: 'Buy a Franchise', url: `${SITE_URL}/buy-a-franchise` },
              { name: 'Franchise Broker' },
            ]),
            serviceSchema({
              url,
              name: 'Franchise Brokerage for Texas Buyers',
              description: DESCRIPTION,
              serviceType: 'Franchise Brokerage',
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
            items={[{ label: 'Buy a Franchise', href: '/buy-a-franchise' }, { label: 'Franchise Broker' }]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">Franchise broker for buyers evaluating a franchise</h1>
            <p className="body-large mb-6">
              A franchise broker works with people who want to buy a franchise. The broker helps you decide what you are
              looking for, narrows the brands worth studying, reads each Franchise Disclosure Document with you, and keeps
              your attorney, lender, and the franchisor working from the same information.
            </p>
            <p className="body-large mb-8">
              If you searched for franchise brokers near me from somewhere in Texas, Forge works with buyers across the
              state, remotely or in person. This page explains what the work covers, how Forge is paid, and what a
              franchise broker should never do.
            </p>
            <HeroActions route={PATH} />
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
              <section id="what" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What a franchise broker does for a buyer</h2>
                <p className={p}>
                  The work follows the order of a buyer&apos;s decision, from the first question about goals to the
                  final review with your attorney.
                </p>
                <div className="tile-grid md:grid-cols-2 mt-8">
                  {steps.map((s) => (
                    <div key={s.term} className="card">
                      <p className="heading-4 mb-3">{s.term}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="fdd" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">The FDD items a franchise broker reads with you</h2>
                <p className={p}>
                  The Franchise Disclosure Document has 23 items. These nine carry most of the information a buyer needs
                  to compare brands. Our{' '}
                  <Link href="/buy-a-franchise" className={link}>buy a franchise</Link> guide covers the 14 day rule and
                  the rest of the buying process.
                </p>
                <ul className="border-t border-graphite mt-6">
                  {fddItems.map((f) => (
                    <li key={f.item} className="border-b border-line py-5 grid sm:grid-cols-[110px_minmax(0,1fr)] gap-2 sm:gap-6">
                      <p className="font-display font-bold text-graphite">{f.item}</p>
                      <div>
                        <p className="font-semibold text-graphite mb-1">{f.name}</p>
                        <p className="text-steel text-[15px] leading-relaxed">{f.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="paid" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How Forge is paid</h2>
                <div className="bg-stone p-8 max-[720px]:p-6" style={{ borderLeft: '4px solid #E4572E' }}>
                  <p className="font-display text-xl font-bold text-graphite" style={{ letterSpacing: '-0.01em' }}>
                    {COMPENSATION_STATEMENT}
                  </p>
                </div>
                <p className={`${p} mt-6`}>
                  Ask any franchise broker how they are paid before you begin: who pays them, when, and whether the
                  brands they show you are limited to those that pay them. The answer tells you how to read their advice.
                </p>
              </section>

              <section id="limits" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What a franchise broker does not do</h2>
                <ul className="list-disc pl-6 space-y-3 text-steel leading-relaxed mb-6">
                  <li>Give legal or tax advice. Your franchise attorney and CPA do that.</li>
                  <li>Guarantee results. No one can promise that a franchise will succeed.</li>
                  <li>Make earnings representations about any brand.</li>
                </ul>
                <p className={p}>
                  Under the FTC Franchise Rule, a franchisor may make financial performance representations only in Item
                  19 of its FDD. If a brand&apos;s FDD has no Item 19 figures, no salesperson, broker, or franchisor
                  representative should give you earnings numbers for it. Ask current and former franchisees about their
                  experience instead, and have your CPA review what you learn.
                </p>
                <MidCTA route={PATH} />
              </section>

              <section id="texas" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Why Forge&apos;s franchise brokerage work focuses on Texas buyers</h2>
                <p className={p}>
                  Some states regulate the people who sell franchises, including franchise brokers, with their own
                  registration or filing requirements. For that reason, Forge&apos;s franchise brokerage work focuses on
                  buyers in Texas. If you plan to open in another state, check that state&apos;s rules with your
                  franchise attorney. Our <Link href="/franchise-laws" className={link}>franchise laws by state</Link>{' '}
                  guide summarizes state franchise registration and filing requirements, and the{' '}
                  <Link href="/franchise-laws/texas" className={link}>Texas franchise laws</Link> page covers Texas.
                </p>
                <BrokerageNotice className="mt-8" />
              </section>

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">Questions about working with a franchise broker</h2>
                <FAQList faqs={faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-6">Send a buyer profile</h2>
                <p className={p}>
                  Tell us what you are looking for. Your profile stays confidential, and we will reply with the questions
                  we need answered for a first conversation.
                </p>
                <IntakeForm inquiryType="franchise-buyer" submitLabel="Send buyer profile" />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          { label: 'Buy a franchise', href: '/buy-a-franchise', description: 'How to evaluate a brand, read the FDD, and validate with owners.' },
          { label: 'Sell your franchise', href: '/sell-your-franchise', description: 'How franchise resales and transfer approval work, for owners and buyers.' },
          { label: 'Texas franchise laws', href: '/franchise-laws/texas', description: 'The Texas filing requirement and related rules.' },
        ]}
      />

      <SectionCTA
        heading="Comparing franchise brands?"
        body="Send a buyer profile and Forge can work through the brands and their FDDs with you before you sign."
        buttonText="Send a buyer profile"
        buttonHref="#inquiry"
        secondaryText="Or read the buy a franchise guide"
        secondaryHref="/buy-a-franchise"
      />
    </>
  )
}
