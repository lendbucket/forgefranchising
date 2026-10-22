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
import { SITE_URL } from '@/lib/constants'
import { sentenceCase } from '@/lib/text'
import { webPageSchema, breadcrumbSchema, articleSchema, faqSchema, renderSchema } from '@/lib/schema'

const PATH = '/become-a-franchisor'
const TITLE = 'How to Become a Franchisor'
const DESCRIPTION =
  'How to become a franchisor, step by step: readiness, unit economics, trademarks, franchisor entity, brand system, FDD, state registration, and franchise sales.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

type Step = {
  id: string
  title: string
  what: string[]
  produces: string
  skipped: string
  link?: { href: string; label: string }
}

const steps: Step[] = [
  {
    id: 'readiness',
    title: 'Readiness and Feasibility',
    what: [
      'A franchisor sells a business model to people who will run it without you. Before anything is drafted, the model has to prove it can survive that handoff. Feasibility tests four things: whether the unit is profitable after a royalty, whether the operation can be taught, whether the brand carries weight outside your home market, and whether demand exists in the markets you would sell into.',
      'This is also where you decide whether franchising is the right structure at all. Some businesses are better served by company owned growth, licensing, or a sale.',
    ],
    produces: 'A written go, no go, or not yet decision, backed by your actual financials, with a list of gaps to close before development starts.',
    skipped: 'Owners who skip feasibility pay for legal documents built on numbers that do not hold. The problem surfaces later as franchisees who cannot cover rent, labor, and royalty from the revenue the model was supposed to produce.',
    link: { href: '/readiness-method', label: 'The Forge Franchise Readiness Method' },
  },
  {
    id: 'unit-economics',
    title: 'Unit Economics and the Franchise Model',
    what: [
      'The franchise model is the set of commercial terms every franchisee signs: the initial franchise fee, the ongoing royalty, the brand fund contribution, technology or other recurring fees, and the territory policy. These numbers are not picked from industry averages. They are worked backward from what a franchisee can pay and still earn a return on their investment, and forward from what it costs you to support each unit.',
      'Territory policy is part of the model. You decide whether territories are exclusive, protected, or open, how they are drawn (population, zip codes, drive time, or a radius), and whether you will offer multi unit or area development rights.',
    ],
    produces: 'A franchisee pro forma, a franchisor operating budget, and a fee and territory schedule that feeds Items 5, 6, 7, and 12 of the Franchise Disclosure Document.',
    skipped: 'Fees set by guesswork tend to fail in one of two directions. Set too high, franchisees fall behind on royalties and the system stalls. Set too low, the franchisor cannot fund the training and field support it promised, and support quality drops as the system grows.',
    link: { href: '/calculator', label: 'Model your franchise economics' },
  },
  {
    id: 'trademark',
    title: 'Trademark Search and Federal Registration',
    what: [
      'A franchise is a license to use your brand. If you do not control the brand, you have nothing to license. The first legal step is a comprehensive clearance search on your name and logo, followed by an application with the United States Patent and Trademark Office for registration on the Principal Register.',
      'Do this before you sell a single franchise. Federal registration takes many months, and a conflict discovered after franchisees have signed can force a rebrand of every location.',
    ],
    produces: 'A clearance opinion, filed federal applications for your principal marks, and the trademark facts disclosed in Item 13 of the FDD.',
    skipped: 'If your principal mark is not registered on the Principal Register, Item 13 must say so, and prospects read that as risk. Worse, a prior user in another market can block you from expanding into it, which limits the territories you can sell.',
    link: { href: '/franchise-branding/protecting-your-brand', label: 'Protecting your franchise brand' },
  },
  {
    id: 'entity',
    title: 'Franchisor Entity Formation',
    what: [
      'The franchisor is usually a new company formed for one purpose: to own the franchise system and sign franchise agreements. Your existing operating business stays separate and often becomes an affiliate, and in many structures the trademarks are held by a separate entity that licenses them to the franchisor.',
      'Your franchise attorney and CPA set the structure. The decision affects liability, taxes, how intellectual property is held, and what the FDD has to disclose about parents, predecessors, and affiliates in Item 1.',
    ],
    produces: 'A formed franchisor entity with its own bank account, its own books, and documented agreements with the operating company and any IP holding company.',
    skipped: 'Selling franchises out of the operating company mixes the liabilities of both businesses and puts every restaurant, shop, or crew under the same legal roof as your franchise obligations. It also makes the Item 21 audit harder and more expensive, because the auditor has to work through years of operating history that has nothing to do with franchising.',
    link: { href: '/blog/franchisor-entity-structure', label: 'Why the franchisor is a separate company' },
  },
  {
    id: 'brand-system',
    title: 'The Brand System',
    what: [
      'When you franchise, the brand is the product a franchisee buys. A brand system turns your identity into something other operators can reproduce exactly: the logo and its variants, the color and type specifications, signage and buildout standards, photography rules, voice, and approved templates for local marketing.',
      'The brand book defines what the brand looks like. Brand standards define what a franchisee must do, and they sit inside the franchise agreement and operations manual so they can be enforced.',
    ],
    produces: 'A brand identity, a brand book, location and marketing standards, and a process for approving franchisee marketing.',
    skipped: 'Without a written system, each franchisee interprets the brand. Within a few years the locations stop looking like the same company, customers lose the recognition that made the brand worth buying, and the franchisor has no written standard to enforce.',
    link: { href: '/franchise-branding', label: 'The franchise branding guide' },
  },
  {
    id: 'operations',
    title: 'Operations Manual and Training Program',
    what: [
      'The operations manual is the written version of how your business runs: opening and closing procedures, service standards, product specifications, hiring and staffing, vendor and supply rules, reporting, and the standards that protect the brand. The training program teaches it, with a curriculum, a schedule, and a certification step before a franchisee opens.',
      'The FDD discloses the manual table of contents and page count, along with the training program, in Item 11.',
    ],
    produces: 'A confidential operations manual, a training curriculum with hours and locations, and the certification criteria a new owner must meet before opening.',
    skipped: 'A franchisor without a manual is selling access to the founder. The first franchisees call constantly, every answer is different, and each new location takes more of your time than the last.',
    link: { href: '/services', label: 'Operations manual development' },
  },
  {
    id: 'fdd',
    title: 'The Franchise Disclosure Document and Franchise Agreement',
    what: [
      'Under the FTC Franchise Rule, every franchisor must give prospects a Franchise Disclosure Document containing 23 prescribed items, from the franchisor background and litigation history through fees, initial investment, territory, trademarks, financial statements, and the contracts the franchisee will sign. The FDD must be delivered at least 14 calendar days before the prospect signs a binding agreement or pays any money.',
      'The FDD and franchise agreement are legal documents and must be prepared by a franchise attorney. Forge builds the business inputs they rely on, the economics, the operating standards, and the brand system, and coordinates with your counsel so the documents describe the business you actually run.',
    ],
    produces: 'A complete FDD with all 23 items, a franchise agreement, and the ancillary agreements disclosed as exhibits, reviewed and issued by franchise counsel.',
    skipped: 'An offer made without a compliant FDD, or a sale closed before the 14 day period runs, can give the buyer rescission and damages claims and can draw state enforcement. Template documents that do not match your operations create a different problem: franchisees hold you to what the documents say.',
    link: { href: '/blog/franchise-disclosure-document', label: 'The Franchise Disclosure Document explained' },
  },
  {
    id: 'audit',
    title: 'Audited Financial Statements for Item 21',
    what: [
      'Item 21 requires the franchisor financial statements, prepared under generally accepted accounting principles and audited by an independent certified public accountant. The FTC Rule allows a new franchisor to phase in audited statements, but several registration states expect audited financials before they will register the offering.',
      'State examiners also review capitalization. When a new franchisor looks thinly capitalized, a state can require the initial franchise fee to be deferred until the franchisor meets its pre opening obligations, held in escrow, or backed by a surety bond.',
    ],
    produces: 'An audited opening balance sheet or full audited statements for the franchisor entity, and a capitalization plan that holds up to state review.',
    skipped: 'Missing or late audits delay registration, which delays every sale in a registration state. Thin capitalization without a plan can mean collecting no franchise fees until each franchisee opens.',
    link: { href: '/blog/audited-financial-statements-new-franchisors', label: 'Audited financial statements for new franchisors' },
  },
  {
    id: 'registration',
    title: 'State Registration and Filing Strategy',
    what: [
      'Fourteen states require a franchisor to register the FDD with a state regulator before offering franchises there, and a further group requires a notice filing or exemption filing. Each state has its own forms, fees, renewal dates, and examiner practices, and some impose addenda that change the franchise agreement for franchisees in that state.',
      'A filing strategy decides where you sell first. Most new franchisors start in their home state and nearby markets they can support, then add registration states as the support team grows.',
    ],
    produces: 'A state by state filing plan, approved registrations or completed filings for your launch markets, and a renewal calendar.',
    skipped: 'Offering a franchise in a registration state before the registration is effective is a violation of that state law, even if the conversation started online. Registrations also lapse if annual renewals are missed, which stops sales in that state until the filing is current.',
    link: { href: '/franchise-laws', label: 'Franchise laws by state' },
  },
  {
    id: 'sales-system',
    title: 'The Franchise Sales System',
    what: [
      'Franchise sales is a regulated process, not a marketing campaign. A sales system defines who you will award a franchise to, how leads are generated, how candidates are qualified on capital, experience, and fit, when the FDD is delivered and the receipt collected, how discovery day runs, and who approves the award.',
      'Compliance runs through every step. Sales staff cannot make financial performance claims that are not in Item 19, cannot promise territories the FDD does not grant, and must respect the 14 day waiting period.',
    ],
    produces: 'Written qualification criteria, a documented sales process with FDD delivery and receipt tracking, a discovery day format, and compliant sales materials.',
    skipped: 'Systems that sell to anyone with a check build their own failure rate. Undercapitalized or poorly matched franchisees close early, and Item 20 discloses those closures to every future prospect.',
    link: { href: '/blog/franchise-sales-compliance', label: 'Franchise sales compliance' },
  },
  {
    id: 'first-franchisees',
    title: 'Selecting, Training, and Opening the First Franchisees',
    what: [
      'The first franchisees carry more weight than any later ones. Their results become the validation that every future prospect will hear when they call existing owners. Selection should favor operators with the capital, experience, and temperament to follow the system, in markets you can reach and support.',
      'Opening support covers site selection or territory setup, buildout and vendor onboarding, initial training, and on site help through the first weeks of operation.',
    ],
    produces: 'Signed franchise agreements with well matched owners, completed training, and opened units with a documented opening checklist you can repeat.',
    skipped: 'A weak first cohort is hard to recover from. Struggling early units show up in validation calls and Item 20, and they absorb the support capacity you need for the next round of openings.',
  },
  {
    id: 'support',
    title: 'Support Infrastructure',
    what: [
      'Once units are open, the franchisor becomes a service company. That means royalty and brand fund collection, usually by automated draft against reported sales; field support visits and performance reviews; the technology stack franchisees use to run and report; marketing support from the brand fund; and a standards enforcement process with written notices, cure periods, and escalation.',
      'Support is what franchisees pay royalties for. Its cost belongs in the franchisor budget from the first unit, not after the system grows.',
    ],
    produces: 'A royalty reporting and collection process, a field support schedule, a technology platform, a brand fund policy, and a written standards enforcement procedure.',
    skipped: 'Franchisors who underbuild support see royalty delinquency, drift from brand standards, and franchisee disputes. Each of those becomes harder to fix as the number of units grows.',
    link: { href: '/franchise-branding/brand-standards-enforcement', label: 'Brand standards enforcement' },
  },
]

const faqs = [
  {
    question: 'What is the difference between franchising a business and becoming a franchisor?',
    answer:
      'Franchising describes the growth strategy. Becoming a franchisor describes the company you have to build to run it: a separate legal entity, a disclosure document, registrations, a sales process, and a support organization that serves franchisees as customers. The business you operate today becomes one unit in a system you manage.',
  },
  {
    question: 'How long does it take to become a franchisor?',
    answer:
      'It depends on the business. Development of the model, documents, and manual typically runs several months, and state registration adds its own review time on top. Audit timing, trademark status, and how quickly you supply financial information are the usual variables. We give a range after feasibility, not before.',
  },
  {
    question: 'Do I need a franchise attorney if I work with a franchise development firm?',
    answer:
      'Yes. The Franchise Disclosure Document, the franchise agreement, and state filings are legal work and should be prepared by franchise counsel. A development firm builds the business side, including the economics, operations manual, brand system, and sales process, and works alongside your attorney.',
  },
  {
    question: 'Does the franchisor have to be a separate company from my operating business?',
    answer:
      'It is not required by the FTC Rule, but it is the standard structure. A separate franchisor entity keeps the liabilities of the franchise system apart from your operating business, gives the auditor a clean set of books for Item 21, and makes the disclosures in Item 1 simpler. Your attorney and CPA decide the exact structure.',
  },
  {
    question: 'Can I sell franchises before my trademark is registered?',
    answer:
      'You can, but the FDD must disclose that the principal mark is not federally registered, and that disclosure tells prospects the brand may not be protected. A conflict found later can force a rebrand of every location, which is why clearance and filing come before the first sale.',
  },
  {
    question: 'What does it cost to become a franchisor?',
    answer:
      'Costs vary with the business, the number of states you register in, and how much of the system already exists. The main categories are franchise legal fees, the audit, state filing fees, trademark work, the operations manual, the brand system, and the working capital to fund support before royalties cover it. Our packages page explains what each level of engagement includes.',
  },
]

export default function BecomeAFranchisorPage() {
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
              { name: 'Services', url: `${SITE_URL}/services` },
              { name: 'Become a Franchisor' },
            ]),
            articleSchema({
              url,
              headline: 'How to Become a Franchisor: Building the Company Behind the Brand',
              description: DESCRIPTION,
              datePublished: '2026-10-22',
              dateModified: '2026-10-22',
              image: `${SITE_URL}/og-image.png`,
              articleSection: 'Franchise Development',
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding !pb-12">
          <Breadcrumbs
            withSchema={false}
            items={[{ label: 'Services', href: '/services' }, { label: 'Become a Franchisor' }]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">How to Become a Franchisor: Building the Company Behind the Brand</h1>
            <p className="body-large mb-6">
              Learning how to become a franchisor means learning to run a second company. Your current business makes and
              sells a product or service. The franchisor company makes and sells a business system, and its customers are
              the franchisees who buy it. That company needs its own legal entity, its own books, a federal disclosure
              document, state registrations, a sales process, and a support team.
            </p>
            <p className="body-large mb-8">
              This guide covers the franchisor organization step by step, in the order the work has to happen, with the
              brand system built in from the start. For the engagement itself, phase by phase, see{' '}
              <Link href="/how-it-works" className="text-accent font-semibold hover:underline">how our franchise development process works</Link>.
            </p>
            <KeyTakeaways
              readTime="15 min read"
              items={[
                'A franchisor is a separate company whose product is your business system and whose customers are franchisees.',
                'Trademark clearance and a separate franchisor entity come before any franchise is offered.',
                'The FDD has 23 items, must be prepared by franchise counsel, and must reach a prospect at least 14 calendar days before signing or payment.',
                'Audited financial statements, state registration, and capitalization review set when and where you can sell.',
                'Support infrastructure is what royalties pay for. Budget it from the first unit.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC
                items={[
                  ...steps.map((s) => ({ id: s.id, label: sentenceCase(s.title) })),
                  { id: 'faq', label: 'Questions' },
                ]}
              />
            </aside>

            <div className="lg:col-span-9 space-y-16">
              {steps.map((step, i) => (
                <article key={step.id} id={step.id} className="scroll-mt-28">
                  <p className="numeral text-[56px] mb-6">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="heading-3 mb-6">{sentenceCase(step.title)}</h2>
                  {step.what.map((p) => (
                    <p key={p.slice(0, 32)} className="text-steel text-[17px] leading-relaxed mb-5">
                      {p}
                    </p>
                  ))}
                  <div className="tile-grid sm:grid-cols-2 mt-8">
                    <div className="bg-stone p-6">
                      <p className="text-sm font-semibold text-graphite mb-2">What it produces</p>
                      <p className="text-steel text-sm leading-relaxed">{step.produces}</p>
                    </div>
                    <div className="bg-white p-6">
                      <p className="text-sm font-semibold text-graphite mb-2">When it is skipped</p>
                      <p className="text-steel text-sm leading-relaxed">{step.skipped}</p>
                    </div>
                  </div>
                  {step.link && (
                    <p className="mt-5 text-sm">
                      <Link href={step.link.href} className="text-accent font-semibold hover:underline">
                        {step.link.label}
                      </Link>
                    </p>
                  )}
                </article>
              ))}

              <section id="faq" className="scroll-mt-28 pt-4">
                <h2 className="heading-3 mb-8">Questions about becoming a franchisor</h2>
                <FAQList faqs={faqs} />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          { label: 'Our development process', href: '/how-it-works', description: 'The four phases of a Forge engagement and what each one delivers.' },
          { label: 'Engagement packages', href: '/packages', description: 'What each level of franchise development includes.' },
          { label: 'Franchise branding', href: '/franchise-branding', description: 'Why the brand is the product a franchisee buys, and how to build one.' },
        ]}
      />

      <SectionCTA
        heading="Find out if your business is ready to become a franchisor"
        body="Step one is readiness. Take the two minute assessment and see how your business scores on profitability, systems, brand, and replicability."
        buttonText="Take the readiness assessment"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a feasibility call"
        secondaryHref="/contact"
      />

      <StickyCTA text="See if your business is ready to franchise" href="/is-my-business-franchisable" />
    </>
  )
}
