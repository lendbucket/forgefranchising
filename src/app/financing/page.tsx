import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import { faqSchema, webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'How to Finance Franchise Development',
  description:
    'Most franchise development is funded through financing, not cash on hand. Learn the common paths, what lenders look for, and how to prepare your business case.',
  path: '/financing',
})

const faqs = [
  {
    q: 'Can I finance franchise development with an SBA loan?',
    a: 'Yes. SBA 7(a) loans can be used for business services like franchise development. The key is demonstrating a clear use of funds and a credible plan for how the investment generates revenue. Your lender will want to see clean financials, a defined scope of work, and a realistic projection of franchise fee income. Forge helps you prepare that documentation.',
  },
  {
    q: 'Do I need to pay for everything upfront?',
    a: 'Not necessarily. Forge offers milestone based payment structures on signed engagements. You pay a deposit to begin, and subsequent payments are tied to specific deliverables. The exact schedule depends on the package and scope, and it is outlined before any agreement is signed.',
  },
  {
    q: 'What credit score do lenders look for on a business services loan?',
    a: 'Most lenders want to see a personal credit score of 680 or higher for SBA and term loan products. Some lenders work with scores in the 650 range if the borrower has strong business financials, collateral, or time in business. Business credit history also matters, especially for unsecured lines.',
  },
  {
    q: 'How does Forge help me qualify for financing?',
    a: 'Forge is not a lender. What we do is help you build the business case that lenders need to see. That includes organizing your financials, defining the scope and deliverables of the engagement, and preparing a use of funds statement and a basic revenue projection for your franchise system. Lenders respond well to borrowers who show up prepared.',
  },
  {
    q: 'What if my business does not qualify for a loan right now?',
    a: 'That happens. If your financials or credit profile need work before you can qualify, we will tell you that honestly during the feasibility conversation. Some owners spend 6 to 12 months cleaning up their books, building business credit, or improving cash flow before starting the engagement. That is a smarter path than forcing a timeline.',
  },
]

export default function FinancingPage() {
  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/financing`,
              name: 'How to Finance Franchise Development',
              description: 'Most franchise development is funded through financing, not cash on hand. Learn the common paths, what lenders look for, and how to prepare your business case.',
            }),
            breadcrumbSchema(`${SITE_URL}/financing`, [
              { name: 'Resources', url: `${SITE_URL}/learn` },
              { name: 'Franchise Financing' },
            ]),
            faqSchema({
              url: `${SITE_URL}/financing`,
              questions: faqs.map((faq) => ({
                question: faq.q,
                answer: faq.a,
              })),
            }),
          ]),
        }}
      />

      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Resources', href: '/learn' }, { label: 'Franchise Financing' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Finance Franchise Development</p>
            <h1 className="heading-1 mb-8">
              How to Finance Your Franchise Development
            </h1>
            <p className="body-large mb-6">
              Franchise development is a business investment with a defined scope, clear deliverables, and
              a direct path to revenue. Most business owners who finance franchise development do it the
              same way they fund other growth initiatives: through a combination of financing and cash flow,
              not by writing a single check.
            </p>
            <p className="body-large mb-8">
              If you have been looking at franchise development pricing and wondering how to fund it, this
              page walks through the common financing paths, what lenders look for, and how Forge helps you
              prepare a business case that gets approved.
            </p>
            <KeyTakeaways
              items={[
                'Franchise development is a defined business investment, not an open ended expense',
                'SBA 7(a) loans, business lines of credit, and term loans are all viable funding paths',
                'Lenders want clean books, a clear use of funds, and a credible revenue projection',
                'Forge helps you prepare the business case, but is not a lender or financial advisor',
                'Milestone payment structures are available on signed engagements',
              ]}
              readTime="7 min read"
            />
          </div>
        </div>
      </section>

      {/* The Honest Cost Conversation */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">The Honest Cost Conversation</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Franchise development has a real cost. You are paying for feasibility analysis, legal
              document preparation, operations manual development, state registration, and launch support.
              These are professional services with measurable deliverables, and they produce a franchise
              system that generates recurring revenue through franchise fees and royalties.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The investment is not trivial, but it is defined. You know what you are paying for before
              you start, and you know what you receive at each stage. That is different from hiring a
              consultant who bills by the hour with no clear endpoint.
            </p>
            <p className="text-muted-brown leading-relaxed mb-8">
              Most of our clients do not fund the engagement entirely from cash on hand. They use one
              or more of the financing paths described below, and they structure the payments around
              milestones so the capital deployment matches the work being delivered. For current scope
              and deliverables at each level, see our{' '}
              <Link href="/packages" className="text-amber font-semibold hover:underline">
                franchise development packages
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Common Funding Paths */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">Common Funding Paths for Franchise Development</h2>
            <p className="text-muted-brown leading-relaxed mb-8">
              There is no single right way to finance franchise development. The best path depends on
              your business financials, credit profile, available cash, and how quickly you want to move.
              Here are the options most owners consider.
            </p>

            <div className="space-y-8">
              <div className="card">
                <h3 className="heading-3 mb-3">SBA 7(a) Loans for Business Services</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  SBA 7(a) loans can be used to fund business services, including franchise development.
                  The SBA does not lend directly. It guarantees a portion of the loan made by an approved
                  lender, which reduces the lender's risk and opens up access for small business borrowers.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">What it is:</strong> A government backed small business
                  loan with favorable terms, typically 7 to 10 year repayment on working capital and
                  business services.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">Who it tends to fit:</strong> Established businesses
                  with at least two years of operating history, clean tax returns, and a personal credit
                  score of 680 or higher. Lenders want to see that your existing business can service the
                  debt while the franchise system ramps up.
                </p>
                <p className="text-muted-brown leading-relaxed">
                  <strong className="text-espresso">What lenders generally look for:</strong> Two years of
                  business tax returns, personal financial statement, a clear use of funds document, a basic
                  projection showing how franchise fees and royalties will service the loan, and a personal
                  guarantee from any owner holding 20% or more.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Business Lines of Credit</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  A business line of credit gives you access to a pool of capital that you draw from as
                  needed. You only pay interest on what you use, which makes it flexible for a phased
                  engagement where payments are tied to milestones.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">What it is:</strong> A revolving credit facility,
                  typically ranging from $25,000 to $250,000, secured or unsecured depending on the
                  lender and your credit profile.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">Who it tends to fit:</strong> Business owners who want
                  flexibility and already have a relationship with a lender. Lines of credit work well when
                  you want to fund the engagement in stages rather than taking a lump sum.
                </p>
                <p className="text-muted-brown leading-relaxed">
                  <strong className="text-espresso">What lenders generally look for:</strong> Business
                  credit history, annual revenue, time in business, and personal credit. Unsecured lines
                  typically require stronger credit profiles. Secured lines may use business assets or
                  receivables as collateral.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Unsecured Term Loans</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  An unsecured term loan is a fixed amount borrowed and repaid over a set period, without
                  requiring specific collateral. These are faster to close than SBA loans and work well for
                  business owners with strong credit who need capital on a shorter timeline.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">What it is:</strong> A fixed loan amount, typically
                  $25,000 to $500,000, repaid over 1 to 5 years with a fixed or variable rate.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">Who it tends to fit:</strong> Business owners who want
                  a straightforward loan without SBA paperwork and who have the credit profile to qualify
                  without collateral. The trade off is a higher interest rate compared to SBA products.
                </p>
                <p className="text-muted-brown leading-relaxed">
                  <strong className="text-espresso">What lenders generally look for:</strong> Strong
                  personal and business credit, documented revenue, and a clear repayment plan. Some
                  lenders also look at industry risk and the borrower's net worth.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Reinvested Cash Flow</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  Some business owners fund franchise development directly from their existing business
                  cash flow. This avoids debt entirely and keeps the franchise system fully owner financed
                  from the start.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">What it is:</strong> Using profits from your current
                  business to fund franchise development over time, often paired with a milestone payment
                  schedule that matches the pace of cash generation.
                </p>
                <p className="text-muted-brown leading-relaxed mb-4">
                  <strong className="text-espresso">Who it tends to fit:</strong> Profitable businesses with
                  consistent cash flow and owners who prefer to avoid taking on debt. This works especially
                  well when the business has strong margins and the owner can fund the engagement without
                  cutting into operating capital.
                </p>
                <p className="text-muted-brown leading-relaxed">
                  <strong className="text-espresso">What to consider:</strong> Make sure the cash allocation
                  does not starve your existing operations. Franchise development takes months, and your core
                  business needs to keep running at full capacity while the franchise system is being built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Ready to Qualify */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">How to Get Ready to Qualify</h2>
            <p className="text-muted-brown leading-relaxed mb-8">
              If you plan to finance your franchise development, preparation matters. Lenders approve
              borrowers who show up organized, with a clear plan and clean documentation. Here is what
              to focus on before you apply.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Clean Books and Tax Returns',
                  body: 'Lenders want to see at least two years of business tax returns that match your bank statements. If your books are messy or your P&L does not reflect reality, clean that up first. A CPA review before you apply saves time and prevents declines.',
                },
                {
                  title: 'A Clear Use of Funds',
                  body: 'Lenders do not fund vague plans. They want to see exactly what the money will be used for: feasibility, FDD preparation, operations manual, state registration, and launch support. Forge provides a detailed scope of work that serves as your use of funds document.',
                },
                {
                  title: 'A Simple Revenue Projection',
                  body: 'You do not need a 50 page business plan. You need a credible one page projection showing how franchise fees and royalties will generate revenue over the first 12 to 24 months. Forge helps you build this as part of the feasibility process.',
                },
                {
                  title: 'Time in Business',
                  body: 'Most lenders want at least two years of operating history for the business you are franchising. If your business is newer, you may need to rely more on personal credit, collateral, or alternative lending products.',
                },
                {
                  title: 'Personal and Business Credit',
                  body: 'Check both before you apply. Personal credit scores below 650 limit your options significantly. Business credit is separate and matters for larger loan amounts and unsecured products. If either needs work, address it before starting the financing process.',
                },
                {
                  title: 'Forge Helps You Prepare the Case',
                  body: 'We are not lenders, and we do not make financing decisions. What we do is help you organize the business case that lenders need. A well structured scope of work, a clear deliverable schedule, and a credible projection make the difference between approval and decline.',
                },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="heading-4 mb-3">{item.title}</h3>
                  <p className="text-muted-brown text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Payment Option */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">Milestone Payment Structure</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Forge engagements can be structured with a deposit and milestone payments tied to specific
              deliverables. This means you are not paying the full investment before any work begins.
              Payments align with the phases of the engagement, so each payment corresponds to completed
              work product.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The specific payment schedule depends on the package and scope, and it is outlined in the
              signed agreement before any work begins. This structure works particularly well for owners
              funding the engagement through cash flow or a line of credit, because the capital deployment
              matches the pace of the project.
            </p>
            <p className="text-muted-brown leading-relaxed mb-8">
              Milestone payment structures are available as an option, not a guarantee. The terms are
              established during the proposal process and formalized in the engagement agreement. If you
              have questions about payment options for your specific situation,{' '}
              <Link href="/contact" className="text-amber font-semibold hover:underline">
                start with a conversation
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What Your Investment Builds */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">What Your Investment Builds</h2>
            <p className="text-muted-brown leading-relaxed mb-8">
              Franchise development is not a consulting fee that disappears after a conversation. It
              produces tangible deliverables that form the legal, operational, and commercial foundation
              of your franchise system.
            </p>

            <div className="card mb-8">
              <ul className="space-y-4">
                {[
                  'A complete feasibility analysis that tells you whether your business should franchise, backed by data',
                  'A Franchise Disclosure Document (FDD) with all 23 items, built from your actual numbers and reviewed by franchise counsel',
                  'A Franchise Agreement that protects your brand and defines the franchisor/franchisee relationship',
                  'An operations manual that captures how your business runs, written so someone else can replicate it',
                  'State registration and filing, so you can legally sell franchises where you plan to operate',
                  'Launch support, including franchisee qualification criteria, territory mapping, and sales preparation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-brown leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-muted-brown leading-relaxed mb-4">
              These deliverables are not theoretical. They are the documents and systems that every
              functioning franchise operates on. For a detailed walkthrough of what each phase produces,
              see{' '}
              <Link href="/how-it-works" className="text-amber font-semibold hover:underline">
                how the four phase process works
              </Link>. For the brand strategy that runs alongside the legal and operational build, see our{' '}
              <Link href="/franchise-branding" className="text-amber font-semibold hover:underline">
                franchise branding guide
              </Link>. If you are still deciding between franchising and licensing,{' '}
              <Link href="/franchise-vs-license" className="text-amber font-semibold hover:underline">
                compare both growth paths
              </Link>{' '}
              before committing to a development engagement.
            </p>
          </div>
        </div>
      </section>

      <OpenLoop
        teaser="The franchise development process has four distinct phases, each building on the one before it. Understanding the sequence removes the uncertainty and lets you plan your capital deployment with precision."
        linkText="See the four phase process from feasibility to scale"
        href="/how-it-works"
        variant="section"
      />

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Frequently Asked Questions</p>
            <h2 className="heading-2 mb-10">Franchise Development Financing FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="heading-4 mb-3">{faq.q}</h3>
                  <p className="text-muted-brown leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-deep-cream border-t border-espresso/10">
        <div className="container-wide py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-brown/60 mb-3">Important Notice</p>
            <p className="text-muted-brown/70 text-sm leading-relaxed mb-4">
              Forge Franchising is not a lender, bank, or financial advisor and does not provide loans,
              credit, or financial, tax, or legal advice. Financing options, terms, and approval depend
              entirely on third party lenders and the borrower's qualifications. Nothing on this page is
              a promise or guarantee of funding, approval, or results.
            </p>
            <p className="text-muted-brown/70 text-sm leading-relaxed mb-4">
              Consult a qualified financial advisor, accountant, and attorney before making financing
              decisions. No earnings claims are made on this page. No statement here should be interpreted
              as a promise or projection of income, profit, or return from owning or developing a franchise.
            </p>
            <p className="text-muted-brown/70 text-sm leading-relaxed">
              Franchise offerings are made only through a Franchise Disclosure Document where applicable.
            </p>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Continue Your Research"
        links={[
          { label: 'Franchise Development Packages', href: '/packages', description: 'See the scope, deliverables, and structure at each engagement level.' },
          { label: 'How the Process Works', href: '/how-it-works', description: 'The four phases from feasibility to scale, step by step.' },
          { label: 'Is My Business Franchisable?', href: '/is-my-business-franchisable', description: 'Take the free readiness assessment and get a clear answer in five minutes.' },
        ]}
      />

      <SectionCTA
        heading="Start With a Readiness Conversation"
        body="Before you think about financing, find out if your business is ready to franchise. Take the free assessment or book a call to discuss your specific situation and timeline."
        buttonText="Take the Free Assessment"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a call to discuss your situation"
        secondaryHref="/contact"
        variant="light"
      />

      <StickyCTA
        text="Get Your Free Franchise Evaluation"
        href="/contact"
      />
    </>
  )
}
