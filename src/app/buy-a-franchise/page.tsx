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
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema } from '@/lib/schema'

const PATH = '/buy-a-franchise'
const TITLE = 'Buy a Franchise: Brand and FDD Review'
const DESCRIPTION =
  'Planning to buy a franchise? See how to compare brands, read the FDD items that matter, validate with franchisees, and get counsel review before you sign.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const linkClass = 'text-accent font-semibold hover:underline'
const p = 'text-steel leading-relaxed text-base sm:text-lg mb-5'

function CompensationDisclosure({ className = '' }: { className?: string }) {
  return (
    <aside
      aria-label="Consultant compensation disclosure"
      className={`bg-white p-6 sm:p-8 ${className}`}
      style={{ borderRadius: '0px', border: '1px solid rgba(78, 90, 98, 0.18)', borderLeft: '3px solid #E4572E' }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-graphite mb-3">Disclosure</p>
      <ul className="space-y-2 text-sm text-steel leading-relaxed">
        <li>
          Franchise consultants are commonly compensated by the franchisors whose brands they present. Ask any consultant,
          including Forge, how they are paid before you rely on their recommendations.
        </li>
        <li>
          Every franchise is offered only through that franchisor&apos;s Franchise Disclosure Document. Nothing on this page
          is an offer to sell a franchise.
        </li>
        <li>
          This service does not sell Forge franchises. If you want to own a Forge franchise, see{' '}
          <Link href="/own-a-franchise" className={linkClass}>owning a Forge franchise</Link>.
        </li>
      </ul>
    </aside>
  )
}

const fddItems: { items: string; title: string; body: string }[] = [
  {
    items: 'Items 1 to 4',
    title: 'Background, litigation, and bankruptcy',
    body: 'Item 1 describes the franchisor, its parents, predecessors, and affiliates, and how long it has offered franchises. Item 2 gives the business experience of its officers and directors. Item 3 discloses material litigation, including suits brought by franchisees. Item 4 discloses bankruptcy history. Read Item 3 closely. A pattern of franchisee claims about the same issue tells you more than any sales presentation.',
  },
  {
    items: 'Items 5 to 7',
    title: 'Fees and initial investment',
    body: 'Item 5 lists the initial franchise fee. Item 6 lists the other fees you will pay: royalties, brand fund contributions, technology fees, training fees, transfer fees, and renewal fees, with how each is calculated. Item 7 is a table estimating your total initial investment, including buildout, equipment, inventory, and additional funds for the opening period. Treat Item 7 as the franchisor estimate it is, and test it against current local costs.',
  },
  {
    items: 'Item 11',
    title: 'Franchisor assistance and training',
    body: 'Item 11 describes what the franchisor does before you open and during operation: site selection help, training program hours and location, the operations manual, advertising, and the computer systems you must use. Compare what is promised here with what current franchisees tell you they receive.',
  },
  {
    items: 'Item 12',
    title: 'Territory',
    body: 'Item 12 states whether you receive an exclusive territory, how it is defined, and under what conditions it can be reduced. It also discloses whether the franchisor or affiliates can sell through other channels, such as online or at nontraditional locations, inside your area. A franchise with no territorial protection says so here.',
  },
  {
    items: 'Item 17',
    title: 'Renewal, termination, transfer, and dispute resolution',
    body: 'Item 17 is a table summarizing the agreement terms that govern how the relationship ends. It covers the length of the term, renewal conditions, the defaults that allow termination, your obligations after termination including any noncompete, the conditions for transferring the franchise, any right of first refusal the franchisor holds, and where and how disputes are resolved.',
  },
  {
    items: 'Item 19',
    title: 'Financial performance representations',
    body: 'Item 19 is optional. If a franchisor provides financial performance information, it must appear here with a reasonable basis and written substantiation. Read the notes as carefully as the numbers: which units are included, which are excluded, and whether the figures are revenue or profit. If Item 19 is blank, the franchisor and its sales staff should not give you performance figures any other way.',
  },
  {
    items: 'Item 20',
    title: 'Outlets and franchisee information',
    body: 'Item 20 contains tables showing openings, transfers, terminations, nonrenewals, and closures over the last three fiscal years, plus contact information for current franchisees and for franchisees who left the system during the last fiscal year. Turnover in these tables is one of the clearest signals in the document.',
  },
  {
    items: 'Item 21',
    title: 'Financial statements',
    body: 'Item 21 contains the franchisor financial statements. You are looking at whether the franchisor has the resources to deliver the support it promises, and how much of its income depends on selling new franchises rather than on royalties from operating units. Have your CPA review them.',
  },
]

const faqs = [
  {
    question: 'How are franchise consultants paid?',
    answer:
      'Franchise consultants are commonly compensated by the franchisors whose brands they present, usually when a buyer signs. That arrangement can influence which brands a consultant shows you. Ask any consultant, including Forge, how they are paid for each brand before you rely on their recommendations.',
  },
  {
    question: 'What is the 14 day rule for a Franchise Disclosure Document?',
    answer:
      'Under the FTC Franchise Rule, a franchisor must give you its Franchise Disclosure Document at least 14 calendar days before you sign a binding agreement or pay any money. If the franchisor makes material changes to the agreement on its own, you must also receive the final version at least 7 calendar days before signing.',
  },
  {
    question: 'Which FDD items matter most to a franchise buyer?',
    answer:
      'All 23 items matter, but buyers usually focus on Items 1 to 4 for background and litigation, Items 5 to 7 for fees and initial investment, Item 11 for training and support, Item 12 for territory, Item 17 for renewal, termination, and transfer, Item 19 for any financial performance information, Item 20 for outlet turnover and franchisee contacts, and Item 21 for the franchisor financial statements.',
  },
  {
    question: 'How do I validate a franchise with existing owners?',
    answer:
      'Use the franchisee contact lists in Item 20 of the FDD. Call current owners and former owners, including some the franchisor did not suggest. Ask about their actual opening costs, how long it took to reach break even, the quality of training and field support, and whether they would buy again.',
  },
  {
    question: 'Do I need a franchise attorney to review the FDD?',
    answer:
      'We recommend it. A franchise attorney can explain your obligations under the franchise agreement, identify terms that differ from what you were told, and advise whether anything is negotiable. Your CPA should review the Item 7 estimate, any Item 19 figures, and the Item 21 financial statements.',
  },
  {
    question: 'Can Forge help me buy a Forge franchise?',
    answer:
      'No. This service helps buyers evaluate franchise brands from other franchisors and does not sell Forge franchises. If you are interested in owning a Forge franchise, visit the Own a Forge Franchise page, where any offer is made only through the Forge Franchise Disclosure Document.',
  },
]

const toc = [
  { id: 'how-we-help', label: 'How Forge Helps' },
  { id: 'fit', label: 'Fit With Your Goals' },
  { id: 'questions', label: 'Questions to Ask' },
  { id: 'fdd-rule', label: 'The 14 Day Rule' },
  { id: 'reading-the-fdd', label: 'Reading the FDD' },
  { id: 'validation', label: 'Validation Calls' },
  { id: 'before-signing', label: 'Before You Sign' },
  { id: 'forge-franchise', label: 'Owning a Forge Franchise' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Franchise Buyer Profile' },
]

export default function BuyAFranchisePage() {
  const url = `${SITE_URL}${PATH}`

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: TITLE, description: DESCRIPTION, hasBreadcrumb: true }),
            breadcrumbSchema(url, [{ name: 'Buy a Franchise' }]),
            serviceSchema({
              url,
              name: 'Franchise Buyer Consulting',
              description: DESCRIPTION,
              serviceType: 'Franchise Consulting',
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding !pb-12">
          <Breadcrumbs withSchema={false} items={[{ label: 'Buy a Franchise' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Franchise Buyers</p>
            <h1 className="heading-1 mb-8">Buy a Franchise With a Clear Read of the Brand and the FDD</h1>
            <p className="body-large mb-6">
              When you buy a franchise, you are buying the right to run another company&apos;s system under a long term
              contract. The decision rests on three things you can check: whether the brand fits your goals and capital,
              what the Franchise Disclosure Document says, and what current and former franchisees tell you. Forge helps
              buyers work through each of them before they sign.
            </p>
            <p className="body-large mb-8">
              If you would rather buy an independent business, start with our{' '}
              <Link href="/buy-a-business" className={linkClass}>guide for business buyers</Link>.
            </p>
            <CompensationDisclosure className="mb-10" />
            <KeyTakeaways
              readTime="12 min read"
              items={[
                'Franchise consultants are commonly paid by franchisors. Ask how any consultant is compensated.',
                'The FDD must reach you at least 14 calendar days before you sign or pay anything.',
                'Items 3, 7, 12, 17, 19, 20, and 21 deserve the closest reading.',
                'Call current and former franchisees from the Item 20 lists, not only the references you are given.',
                'Have a franchise attorney review the FDD and franchise agreement before you sign.',
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
              <article id="how-we-help" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">How Forge Helps Franchise Buyers</h2>
                <p className={p}>
                  Forge builds franchise systems for franchisors, which means we work with the documents, fee structures,
                  and support programs that buyers are asked to evaluate. We use that experience on the buyer side to help
                  you narrow a field of brands to the few worth serious study, prepare questions for each franchisor, read
                  the disclosure document with a working knowledge of how it is built, and plan validation calls.
                </p>
                <p className={p}>
                  We do not give legal or tax advice, and we do not tell you a franchise will be profitable. The decision
                  is yours, made with your franchise attorney and CPA. Our role is to make sure you are asking the right
                  questions and reading the right parts of the document before you get there.
                </p>
              </article>

              <article id="fit" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Start With Fit: Goals, Capital, and Role</h2>
                <p className={p}>
                  Before comparing brands, settle three questions about yourself. The answers remove most of the market
                  from consideration, which is the point.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Your goals</h3>
                <p className={p}>
                  Decide what the business needs to do for you. Some buyers want a full time job they own. Others want a
                  multi unit portfolio, a business a family member can run, or an asset to build over a set number of years
                  and then sell. A franchise that suits one of those goals can be a poor match for another.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Your capital</h3>
                <p className={p}>
                  Franchisors set minimum liquid capital and net worth requirements, and Item 7 estimates the initial
                  investment. Plan for the high end of the Item 7 range, the working capital you need until the unit
                  supports itself, and your own living expenses during that period. If you will borrow, talk to a lender
                  early. Many lenders that make franchise loans check whether the brand is eligible for SBA financing.
                </p>
                <h3 className="heading-4 mb-3 mt-8">Your role</h3>
                <p className={p}>
                  Be precise about how you will spend your time. Many franchisors require an owner operator for the first
                  unit, and some allow semi absentee or manager run models. The franchise agreement may require you or a
                  designated manager to complete training and to devote full time to the business. Item 15 of the FDD
                  discloses the franchisor&apos;s requirements for your participation.
                </p>
              </article>

              <article id="questions" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Industry and Unit Economics Questions to Ask</h2>
                <p className={p}>
                  Once a brand fits your profile, look at the industry and at how a single unit makes money. Ask the
                  franchisor these questions, and ask franchisees the same ones.
                </p>
                <ul className="space-y-3 mt-6 mb-5">
                  {[
                    'What drives demand in this industry, and how did it hold up in past downturns?',
                    'Who are the main competitors in my market, franchised and independent?',
                    'What are the largest operating costs for a unit: labor, rent, cost of goods, or something else?',
                    'How do royalties, brand fund contributions, and technology fees affect margin at different sales levels?',
                    'What staffing does a unit need, and how hard is it to hire for in my market?',
                    'How long did recent franchisees take to open after signing, and what caused delays?',
                    'What capital did recent franchisees need beyond the Item 7 estimate?',
                    'What required purchases from the franchisor or approved suppliers are in Item 8, and are any marked up?',
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-steel leading-relaxed">
                      <span className="text-accent font-semibold flex-shrink-0" aria-hidden="true">/</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <p className={p}>
                  Answers to cost and revenue questions should come from the FDD or from franchisees directly. A
                  franchisor that does not include financial performance information in Item 19 should not provide it in
                  conversation.
                </p>
              </article>

              <article id="fdd-rule" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">The 14 Day FDD Rule</h2>
                <p className={p}>
                  The FTC Franchise Rule requires a franchisor to give you its Franchise Disclosure Document at least 14
                  calendar days before you sign a binding agreement or pay any money to the franchisor or an affiliate. If
                  the franchisor makes material changes to the franchise agreement on its own, you must receive the final
                  version at least 7 calendar days before signing. Some states have their own registration and disclosure
                  laws on top of the federal rule; see{' '}
                  <Link href="/franchise-laws" className={linkClass}>franchise laws by state</Link>.
                </p>
                <p className={p}>
                  The waiting period is a minimum, not a schedule. Use it to read the document, make your validation calls,
                  and get your attorney&apos;s review. A franchisor that pressures you to sign as soon as the 14 days run
                  is telling you something about how it sells. For a full overview of the document, read{' '}
                  <Link href="/blog/franchise-disclosure-document" className={linkClass}>the Franchise Disclosure Document explained</Link>.
                </p>
              </article>

              <article id="reading-the-fdd" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Reading the FDD: The Items That Matter Most to a Buyer</h2>
                <p className={p}>
                  The FDD has 23 items in a fixed order, followed by exhibits that include the franchise agreement and the
                  financial statements. Every item matters, but the ones below are where buyers find the information that
                  most often changes a decision.
                </p>
                <div className="space-y-4 mt-8">
                  {fddItems.map((item) => (
                    <div key={item.items} className="bg-stone p-6" style={{ borderRadius: '0px' }}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">{item.items}</p>
                      <h3 className="heading-4 mb-2">{item.title}</h3>
                      <p className="text-steel text-sm sm:text-base leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className={`${p} mt-8`}>
                  For more on Item 19 specifically, read{' '}
                  <Link href="/blog/item-19-explained" className={linkClass}>Item 19 explained</Link>.
                </p>
              </article>

              <article id="validation" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Validate With Current and Former Franchisees</h2>
                <p className={p}>
                  Validation means talking to the people who already bought the franchise. Item 20 gives you the contact
                  information for current franchisees and for those who left the system in the last fiscal year. Use both
                  lists. Franchisors often suggest a handful of references, and those owners may be among the most
                  successful in the system. Call owners the franchisor did not pick, owners in markets like yours, and
                  owners who opened in the last few years.
                </p>
                <p className={p}>
                  Former franchisees are especially useful. Some sold their units, some closed, and some were terminated.
                  Their reasons tell you what can go wrong. Some former owners will be bound by confidentiality terms and
                  unable to talk, and that is information too.
                </p>
                <p className={p}>Questions that tend to produce useful answers:</p>
                <ul className="space-y-3 mb-5">
                  {[
                    'What did you actually spend to open, compared with the Item 7 estimate?',
                    'How long did it take before the business covered its own expenses?',
                    'How good was the initial training, and what did it leave out?',
                    'How responsive is field support when something goes wrong?',
                    'Have fees or required purchases changed since you signed?',
                    'Knowing what you know now, would you buy this franchise again?',
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-steel leading-relaxed">
                      <span className="text-accent font-semibold flex-shrink-0" aria-hidden="true">/</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
                <p className={p}>
                  Take notes on every call and compare them. One unhappy owner may reflect one location. The same
                  complaint from several owners reflects the system.
                </p>
              </article>

              <article id="before-signing" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Before You Sign: Attorney and CPA Review</h2>
                <p className={p}>
                  We recommend that every buyer have a franchise attorney review the FDD and the franchise agreement
                  before signing. The agreement is usually long, it runs for years, and the franchisor drafted it. An
                  attorney who works on franchise matters can tell you what you are agreeing to on renewal, termination,
                  transfer, personal guarantees, and post term restrictions, and whether any terms are negotiable.
                </p>
                <p className={p}>
                  Your CPA should review the Item 7 estimate against your financing plan, any Item 19 figures against
                  your own projections, and the Item 21 financial statements for the franchisor&apos;s stability. If you
                  ever plan to exit, read the transfer terms now. Our page on{' '}
                  <Link href="/sell-your-franchise" className={linkClass}>franchise resale</Link> explains what
                  franchisors commonly require when an owner sells.
                </p>
              </article>

              <article id="forge-franchise" className="scroll-mt-28">
                <h2 className="heading-3 mb-6">Interested in Owning a Forge Franchise?</h2>
                <p className={p}>
                  This buyer service does not sell Forge franchises. It helps you evaluate brands offered by other
                  franchisors. If you want to own a Forge franchise, that is a separate path with its own disclosure
                  process. See{' '}
                  <Link href="/own-a-franchise" className={linkClass}>owning a Forge franchise</Link>.
                </p>
              </article>

              <section id="faq" className="scroll-mt-28 pt-4">
                <p className="eyebrow mb-4">Questions</p>
                <h2 className="heading-3 mb-8">Questions From Franchise Buyers</h2>
                <FAQList faqs={faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-28 space-y-8">
                <CompensationDisclosure />
                <BrokerageNotice />
                <IntakeForm
                  inquiryType="franchise-buyer"
                  heading="Franchise Buyer Profile"
                  intro="Tell us what you are considering, where you would operate, and the capital you have available. We will follow up to talk through brands and the FDD review."
                  submitLabel="Send Franchise Buyer Profile"
                />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to Go From Here"
        links={[
          { label: 'The Franchise Disclosure Document', href: '/blog/franchise-disclosure-document', description: 'All 23 items of the FDD and what each one discloses.' },
          { label: 'Buying an Independent Business', href: '/buy-a-business', description: 'The buying process, financing, and due diligence for an existing business.' },
          { label: 'Selling a Franchise Unit', href: '/sell-your-franchise', description: 'How franchise transfers work, from Item 17 to the franchisor sign off.' },
        ]}
      />

      <SectionCTA
        heading="Review Franchise Brands Before You Sign"
        body="Send a franchise buyer profile. We will talk through your goals and capital, and how to read the FDD for the brands you are considering."
        buttonText="Send a Buyer Profile"
        buttonHref="#inquiry"
      />
    </>
  )
}
