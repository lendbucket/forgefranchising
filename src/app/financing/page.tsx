import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { OpenLoop } from '@/components/OpenLoop'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'

export const metadata = createMetadata({
  title: 'Franchise Financing Options',
  description:
    'Learn about franchise financing options including SBA 7(a) loans, ROBS rollovers, unsecured credit lines, and equipment financing. Educational guide for franchise business owners.',
  path: '/financing',
})

export default function FinancingPage() {
  return (
    <>
      <ReadingProgress />
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Resources', href: '/learn' }, { label: 'Franchise Financing' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Franchise Financing</p>
            <h1 className="heading-1 mb-8">
              How to Finance a Franchise: The Options Most Consultants Never Explain
            </h1>
            <p className="body-large mb-6">
              Every franchise system needs capital. Whether you are the franchisor building the infrastructure
              or the franchisee opening a location, the money has to come from somewhere. The problem is that
              most franchise development firms gloss over the financing conversation entirely. They build your
              FDD, file your documents, and leave you to figure out the money side on your own.
            </p>
            <p className="body-large mb-8">
              That is a problem. Because financing is not just a franchisee concern. It directly affects how you
              structure your Item 7 (estimated initial investment), what territories you can realistically sell,
              and how fast your system can grow. This guide breaks down the major franchise financing vehicles
              so you understand what is available, what the trade offs are, and how each option fits into the
              broader franchise development picture.
            </p>
            <KeyTakeaways
              items={[
                'SBA 7(a) loans are the most common franchise financing vehicle, with up to $5M available',
                'ROBS lets franchisees use retirement funds without penalties, but carries real risk',
                'Your FDD quality (especially Items 7 and 19) directly impacts franchisee loan approvals',
                'Getting listed on the SBA Franchise Directory should be an early priority',
                'Financing strategy should be part of franchise development, not an afterthought',
              ]}
              readTime="10 min read"
            />
          </div>
        </div>
      </section>

      {/* SBA Loans Section */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">SBA Loans: The Gold Standard for Franchise Financing</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              The U.S. Small Business Administration (SBA) does not lend money directly. Instead, it guarantees
              a portion of loans made by approved lenders, which reduces the risk for banks and makes them more
              willing to lend to franchise businesses. For most franchise systems, SBA loans are the primary
              financing vehicle that franchisees use to open their locations.
            </p>

            <h3 className="heading-3 mb-4">The SBA 7(a) Loan Program</h3>
            <p className="text-muted-brown leading-relaxed mb-6">
              The 7(a) program is the SBA's flagship lending product and the most common loan type used in
              franchising. It can be used for working capital, equipment purchases, leasehold improvements,
              and real estate acquisition. The maximum loan amount is $5 million, and the SBA guarantees up
              to 85% of loans of $150,000 or less and 75% of loans above that threshold.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Typical terms for a 7(a) loan depend on the use of funds. Working capital loans usually carry
              terms of 7 to 10 years. Equipment loans match the useful life of the equipment, typically 10 to
              25 years. Real estate loans can extend to 25 years. Interest rates are variable, usually pegged
              to the prime rate plus a spread of 2.25% to 2.75% depending on loan size and term.
            </p>

            <div className="card mb-8">
              <h4 className="heading-4 mb-4">SBA 7(a) Loan Requirements for Franchise Businesses</h4>
              <ul className="space-y-3">
                {[
                  'The franchise must appear on the SBA Franchise Directory. If your brand is not listed, franchisees cannot use SBA financing, which significantly limits your buyer pool.',
                  'Borrowers typically need a personal credit score of 680 or higher, though some lenders accept 650 with compensating factors like strong collateral or industry experience.',
                  'Most lenders require the borrower to inject 10% to 30% of the total project cost as equity. This is real cash, not borrowed money.',
                  'The borrower needs to demonstrate relevant management or industry experience. Lenders want to see that the person running the business has a reasonable chance of succeeding.',
                  'Lenders will require a personal guarantee from any individual owning 20% or more of the franchisee entity.',
                  'Collateral is preferred but not always required. The SBA does not decline loans solely for lack of collateral, but lenders may.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="heading-3 mb-4">How Your FDD Affects Loan Approval</h3>
            <p className="text-muted-brown leading-relaxed mb-6">
              Here is something most franchise development firms never tell you: the quality of your FDD
              directly impacts whether your franchisees can get financing. Lenders review the Franchise
              Disclosure Document as part of their underwriting process. Two items matter more than the rest.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Item 7 (Estimated Initial Investment) tells lenders exactly how much capital the franchisee needs.
              If your Item 7 is vague, unrealistic, or missing key line items, lenders will either decline the
              loan or require additional documentation that slows down the process. A well built Item 7 with
              detailed, defensible cost estimates makes the lender's job easier and increases approval rates.
            </p>
            <p className="text-muted-brown leading-relaxed mb-8">
              Item 19 (Financial Performance Representations) is optional, but it is enormously powerful for
              financing. If you include audited financial performance data in your FDD, lenders can underwrite
              against actual unit economics rather than projections. Franchise systems with a strong Item 19
              see faster loan approvals, higher approval rates, and better terms for their franchisees. This is
              one of the strongest arguments for including an Item 19 even though the FTC does not require it.
            </p>

            <h3 className="heading-3 mb-4">SBA Express Loans</h3>
            <p className="text-muted-brown leading-relaxed mb-8">
              For smaller capital needs, the SBA Express program offers loans up to $500,000 with a faster
              turnaround (typically 36 hours for a decision). The SBA guarantees 50% of Express loans, which
              means lenders take on more risk and may charge slightly higher rates. These are useful for
              working capital, minor buildouts, or bridging the gap between signing a lease and opening.
            </p>
          </div>
        </div>
      </section>

      {/* ROBS Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">ROBS: Rollover for Business Startups</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              ROBS is one of the most misunderstood financing mechanisms in franchising. It allows an individual
              to use funds from an existing retirement account (typically a 401(k) or IRA) to finance a new
              business without paying early withdrawal penalties or taxes. When structured correctly, it is a
              legitimate, IRS compliant method for accessing capital. When structured incorrectly, it is a
              compliance nightmare.
            </p>

            <h3 className="heading-3 mb-4">How ROBS Works</h3>
            <p className="text-muted-brown leading-relaxed mb-6">
              The process involves creating a new C corporation, establishing a qualified retirement plan
              (typically a 401(k)) within that corporation, rolling existing retirement funds into the new
              plan, and then using those plan funds to purchase stock in the C corporation. The business
              then has access to the capital through the stock purchase. The key is that the retirement
              plan is investing in the stock of the operating company, not distributing funds to the individual.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="card">
                <h4 className="heading-4 mb-4 text-green-700">Benefits of ROBS</h4>
                <ul className="space-y-3">
                  {[
                    'No debt service. The money is equity, not a loan. There are no monthly payments, no interest charges, and no personal guarantee.',
                    'No early withdrawal penalty. You avoid the 10% penalty that normally applies to retirement distributions before age 59.5.',
                    'No taxable event at rollover. The transfer between qualified plans is not a distribution, so no income tax is owed.',
                    'Full control of the capital. Unlike an SBA loan where the bank dictates terms, ROBS capital is yours to deploy as needed.',
                    'Can be combined with other financing. Many franchisees use ROBS for the equity injection and an SBA loan for the rest.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-brown text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h4 className="heading-4 mb-4 text-red-700">Risks and Considerations</h4>
                <ul className="space-y-3">
                  {[
                    'Retirement at risk. If the business fails, you lose both the business and the retirement savings used to fund it. There is no safety net.',
                    'IRS scrutiny. The IRS has increased audits of ROBS transactions. Proper structuring and ongoing compliance are not optional.',
                    'C corporation requirement. ROBS requires a C corp structure, which means double taxation on profits (corporate tax plus personal tax on dividends).',
                    'Ongoing administration costs. You need a third party administrator (TPA) to manage the plan, which typically costs $1,500 to $5,000 per year.',
                    'Prohibited transaction risk. If the structure is not maintained properly, the IRS can disqualify the entire arrangement retroactively.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-brown text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="heading-3 mb-4">IRS Compliance Requirements</h3>
            <p className="text-muted-brown leading-relaxed mb-8">
              The IRS requires that the retirement plan operate for the exclusive benefit of plan participants.
              That means the business owner cannot use the ROBS funded company as a personal piggy bank. All
              compensation must be reasonable, all transactions must be at arm's length, and the plan must
              file a Form 5500 annually. The company must also maintain the C corporation structure for as
              long as the plan holds stock. Violations can trigger plan disqualification, back taxes, penalties,
              and in extreme cases, fraud charges. If your franchisees are considering ROBS, they need a
              qualified ROBS provider and a CPA who understands the structure. This is not a DIY project.
            </p>
          </div>
        </div>
      </section>

      {/* Unsecured Financing Section */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">Unsecured Financing and Alternative Capital Sources</h2>
            <p className="text-muted-brown leading-relaxed mb-8">
              Not every franchisee qualifies for an SBA loan, and not every franchisee has a retirement account
              large enough to fund a ROBS. There are other options, each with distinct advantages and limitations.
            </p>

            <div className="space-y-8">
              <div className="card">
                <h3 className="heading-3 mb-3">Unsecured Business Lines of Credit</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  Some lenders offer unsecured lines of credit based on the borrower's personal credit profile,
                  income history, and net worth. These lines typically range from $50,000 to $250,000 and can be
                  established quickly (sometimes within days). The advantage is speed and flexibility. The
                  disadvantage is cost: interest rates on unsecured lines are significantly higher than SBA loans,
                  often ranging from 8% to 18% depending on credit quality. These work best as bridge financing
                  or supplemental capital, not as the primary funding source for a full buildout.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Equipment Financing</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  For franchise concepts with significant equipment requirements (restaurants, fitness centers,
                  auto shops, medical practices), equipment financing can cover 80% to 100% of the equipment
                  cost. The equipment itself serves as collateral, which means approval is often easier than a
                  general business loan. Terms typically run 3 to 7 years, and rates are competitive because the
                  lender has a tangible asset to recover if the borrower defaults. This is particularly useful
                  for franchise systems where equipment represents a large portion of the Item 7 investment.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Home Equity Lines of Credit (HELOC)</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  Franchisees who own their home can sometimes tap into home equity to fund a portion of their
                  investment. HELOCs offer relatively low interest rates because the home serves as collateral.
                  The risk, of course, is that the franchisee's home is now tied to the performance of the
                  business. This is a real risk that should be understood clearly before proceeding. HELOCs
                  are often used for the equity injection required by an SBA loan rather than as standalone
                  financing.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Portfolio Loans and Private Lending</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  Some community banks and credit unions offer portfolio loans that do not conform to SBA
                  guidelines. These are held on the lender's own books, which gives them more flexibility on
                  terms but typically means higher rates and shorter repayment periods. Private lenders and
                  alternative financing platforms have also entered the franchise space, offering faster
                  approvals with less documentation. The trade off is always cost. Faster and easier access
                  to capital comes with higher interest rates, shorter terms, or more restrictive covenants.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-3 mb-3">Franchisor Financing</h3>
                <p className="text-muted-brown leading-relaxed mb-4">
                  Some franchise systems offer direct financing to their franchisees, either for the franchise
                  fee, equipment, or the total initial investment. This is disclosed in Item 10 of the FDD.
                  While it can be a powerful selling tool (it removes a major barrier for qualified candidates),
                  it also creates financial risk for the franchisor. If you are considering offering franchisor
                  financing, you need to understand the lending regulations in your state and the capital
                  reserves required to sustain a lending program alongside your franchise operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Financing Strategy Matters for Franchisors */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">Why Financing Strategy Matters for Franchisors</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              If you are developing a franchise system, financing is not just your franchisees' problem. It is
              a core component of your franchise strategy. Here is why.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The total investment range in your Item 7 determines your buyer pool. A franchise that requires
              $500,000 to open attracts a fundamentally different buyer than one that requires $150,000. If
              your Item 7 is too high for SBA financing (above $5 million) or too low to justify the lender's
              underwriting effort (below $50,000), you are going to have financing friction that slows sales.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Getting listed on the SBA Franchise Directory should be a priority once your FDD is registered.
              Without SBA eligibility, you are cutting off the single most common financing path for franchise
              buyers. The application process is straightforward, but it requires a compliant FDD and franchise
              agreement. This is another reason why your legal documents need to be built correctly from the start.
            </p>
            <p className="text-muted-brown leading-relaxed mb-8">
              Building relationships with franchise lending specialists is equally important. There are lenders
              who focus exclusively on franchise financing and understand the nuances of FDD underwriting. These
              lenders can pre-qualify your candidates faster, offer better terms because they understand the
              franchise model, and provide a smoother experience that reflects well on your brand.
            </p>

            <div className="card bg-amber/10 border-amber/20">
              <h3 className="heading-4 mb-4">Partner Pre-Qualification</h3>
              <p className="text-muted-brown leading-relaxed mb-6">
                We work with lending partners who specialize in franchise financing. If you are exploring
                franchise development and want to understand what financing options your future franchisees
                will have access to, we can connect you with the right people early in the process.
              </p>
              <Link href="#partner-prequalify" className="btn-primary">
                Explore Pre-Qualification Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open loop: curiosity about FDD and its role in financing */}
      <OpenLoop
        teaser="Your Franchise Disclosure Document is not just a legal requirement. It is the single document that determines whether your franchisees can get funded, how fast you can sell, and whether state regulators approve your filing. We break down all 23 items."
        linkText="Read the complete FDD guide"
        href="/blog/franchise-disclosure-document"
        variant="section"
      />

      <ContinueLearning
        heading="Continue Your Research"
        links={[
          { label: 'Model Your Franchise Economics', href: '/calculator', description: 'Plug in your numbers and see what your franchise system could generate.' },
          { label: 'How Our Process Works', href: '/how-it-works', description: 'The four phases from feasibility to scale, step by step.' },
          { label: 'Franchise Glossary', href: '/glossary', description: 'Every franchise term you need to know, defined in plain language.' },
        ]}
      />

      {/* Disclaimer */}
      <section className="bg-cream border-t border-espresso/10">
        <div className="container-wide py-8">
          <p className="text-muted-brown/60 text-sm max-w-3xl">
            This content is general education and does not constitute legal or financial advice. Franchise
            financing decisions involve complex legal, tax, and regulatory considerations that vary by
            state and individual circumstance. Consult with a qualified attorney, CPA, or financial advisor
            before making any financing decisions related to franchise development or investment.
          </p>
        </div>
      </section>

      <SectionCTA
        heading="Building a Franchise System? Let Us Talk Financing Strategy."
        body="The financing conversation should happen early, not after your FDD is filed. Book a call and we will walk through how your Item 7, Item 19, and overall franchise structure affect your franchisees' ability to get funded."
        buttonText="Book a Free Feasibility Call"
        buttonHref="/contact"
      />

      <StickyCTA
        text="Get Your Free Franchise Evaluation"
        href="/contact"
      />
    </>
  )
}
