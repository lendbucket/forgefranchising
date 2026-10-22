import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { Arrow } from '@/components/Arrow'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import {
  FRANCHISE_LAWS,
  getStatesByCategory,
} from '@/data/franchise-laws'

export const metadata = createMetadata({
  title: 'Franchise Laws by State',
  description:
    'Franchise registration and filing requirements in all 50 states. Learn which states require FDD registration, which require filing, and which have no law.',
  path: '/franchise-laws',
})

/** Category dots: ember for registration, graphite for filing, fog for no filing. */
const DOT = {
  registration: 'bg-ember',
  filing: 'bg-graphite',
  'no-filing': 'bg-fog',
} as const

function Dot({ category, className = '' }: { category: keyof typeof DOT; className?: string }) {
  return <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${DOT[category]} ${className}`} aria-hidden="true" />
}

export default function FranchiseLawsPage() {
  const registrationStates = getStatesByCategory('registration')
  const filingStates = getStatesByCategory('filing')
  const noFilingStates = getStatesByCategory('no-filing')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/franchise-laws`,
              name: 'Franchise Laws by State',
              description: 'Franchise registration and filing requirements in all 50 states. Learn which states require FDD registration, which require filing, and which have no law.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/franchise-laws`, [
              { name: 'Franchise Laws by State' },
            ]),
          ]),
        }}
      />
      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Franchise Laws by State' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">
              Franchise Laws by State: Registration, Filing, and Compliance Requirements
            </h1>
            <p className="body-large mb-6">
              Franchise regulation in the United States operates on two levels: federal and state.
              Every franchisor must comply with the Federal Trade Commission (FTC) Franchise Rule.
              Beyond that, individual states impose their own requirements ranging from full
              registration to simple notice filing to no state-level requirements at all.
            </p>
            <p className="body-large">
              Understanding which states fall into which category is essential for any business
              planning to franchise. Selling a franchise in a registration state without proper
              registration can result in rescission rights for the franchisee, fines, and other
              serious legal consequences.
            </p>
            <HeroActions route="/franchise-laws" />
          </div>
        </div>
      </section>

      {/* FTC Rule Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 min-[961px]:gap-20">
            <h2 className="heading-2">The federal FTC Franchise Rule</h2>
            <div className="max-w-[720px]">
              <p className="body-large mb-6">
                The FTC Franchise Rule (16 CFR Parts 436 and 437) is the federal baseline for all
                franchise sales in the United States. It requires every franchisor to prepare and
                deliver a Franchise Disclosure Document (FDD) to prospective franchisees at least 14
                days before the prospect signs any binding agreement or pays any money.
              </p>
              <p className="text-steel text-[17px] leading-relaxed mb-6">
                The FDD contains 23 required disclosure items covering the franchisor&apos;s background,
                litigation history, fees, obligations, financial performance representations (if any),
                and audited financial statements. The FTC Rule applies in every state, regardless of
                whether that state has its own franchise law.
              </p>
              <p className="text-steel text-[17px] leading-relaxed mb-10">
                Violations of the FTC Franchise Rule can lead to enforcement actions, civil penalties,
                and private lawsuits. The FTC does not register or review FDDs. That is purely a
                state-level function in the states that require it.
              </p>
              <div className="card border-t-2 border-t-graphite">
                <p className="text-[17px] leading-relaxed text-steel">
                  <span className="font-semibold text-graphite">Key point:</span> Even if your state
                  has no franchise filing law, you still need a fully compliant FDD under the FTC Rule
                  before you can legally offer a franchise to anyone, anywhere in the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Categories */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">Three categories of state franchise regulation</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              Each state falls into one of three categories based on how it regulates franchise sales.
            </p>
          </div>
          <div className="tile-grid md:grid-cols-3">
            <div className="card flex flex-col">
              <div className="flex items-center gap-2 text-sm font-semibold text-graphite mb-6">
                <Dot category="registration" />
                Registration States
              </div>
              <h3 className="heading-3 mb-4">{registrationStates.length} states</h3>
              <p className="text-steel text-[17px] leading-relaxed mb-6 flex-1">
                These states require franchisors to file and register their FDD with a state agency
                before making any franchise offer or sale. A state examiner reviews the FDD and may
                request changes before granting registration. This process can take weeks to months
                depending on the state.
              </p>
              <p className="text-sm text-steel">
                Includes California, New York, Illinois, and other major markets.
              </p>
            </div>
            <div className="card flex flex-col">
              <div className="flex items-center gap-2 text-sm font-semibold text-graphite mb-6">
                <Dot category="filing" />
                Filing States
              </div>
              <h3 className="heading-3 mb-4">{filingStates.length} states</h3>
              <p className="text-steel text-[17px] leading-relaxed mb-6 flex-1">
                These states require franchisors to file a notice or a copy of their FDD with a
                state agency, but they do not conduct a substantive review before allowing sales.
                Filing is a notice requirement, not a gatekeeping function. It is faster than
                registration but still mandatory.
              </p>
              <p className="text-sm text-steel">
                Includes Florida, Texas, and other key markets.
              </p>
            </div>
            <div className="card flex flex-col">
              <div className="flex items-center gap-2 text-sm font-semibold text-graphite mb-6">
                <Dot category="no-filing" />
                No Filing Required
              </div>
              <h3 className="heading-3 mb-4">{noFilingStates.length} states + D.C.</h3>
              <p className="text-steel text-[17px] leading-relaxed mb-6 flex-1">
                These states have no state-level franchise registration or filing requirement.
                Franchisors selling in these states must still comply with the federal FTC Franchise
                Rule, but there is no additional state filing needed. Some of these states do have
                franchise relationship laws that govern the ongoing franchisor-franchisee
                relationship.
              </p>
              <p className="text-sm text-steel">
                Includes Georgia, Ohio, Pennsylvania, and many others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State Directory */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-10 max-[720px]:mb-8">
            <h2 className="heading-2">Complete state-by-state directory</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              Click any state to view detailed franchise law requirements, regulatory contacts, and
              compliance guidance.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
            <div className="flex items-center gap-2">
              <Dot category="registration" />
              <span className="text-sm text-steel">Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Dot category="filing" />
              <span className="text-sm text-steel">Filing Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Dot category="no-filing" />
              <span className="text-sm text-steel">No Filing Required</span>
            </div>
          </div>

          {/* State list */}
          <ul className="border-t border-graphite grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-8">
            {FRANCHISE_LAWS.sort((a, b) => a.name.localeCompare(b.name)).map((state) => (
              <li key={state.slug} className="border-b border-line">
                <Link
                  href={`/franchise-laws/${state.slug}`}
                  className="group flex items-center gap-3 min-h-[52px] py-3 text-[15px] font-medium text-graphite hover:text-accent transition-colors"
                >
                  <Dot category={state.category} />
                  <span className="flex-1">{state.name}</span>
                  <Arrow size={14} className="text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration States Detail */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">Registration states</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              The following {registrationStates.length} states require full franchise registration.
              Franchisors cannot offer or sell a franchise in these states until the registration is
              effective. Each state has its own examiner, review process, and timeline.
            </p>
          </div>
          <div className="tile-grid sm:grid-cols-2 lg:grid-cols-3">
            {registrationStates
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((state) => (
                <Link
                  key={state.slug}
                  href={`/franchise-laws/${state.slug}`}
                  className="card-interactive group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="heading-4">{state.name}</h3>
                    <span className="flex items-center gap-2 text-xs font-semibold mt-1.5">
                      <Dot category="registration" />
                      Registration
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-steel line-clamp-3">{state.overview}</p>
                </Link>
              ))}
          </div>
          <MidCTA route="/franchise-laws" />
        </div>
      </section>

      {/* Filing States Detail */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">Filing states</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              The following {filingStates.length} states require franchisors to file their FDD or a
              notice with a state agency. Filing states do not conduct a substantive review, but the
              filing must be completed before any franchise offer or sale.
            </p>
          </div>
          <div className="tile-grid sm:grid-cols-2 lg:grid-cols-3">
            {filingStates
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((state) => (
                <Link
                  key={state.slug}
                  href={`/franchise-laws/${state.slug}`}
                  className="card-interactive group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="heading-4">{state.name}</h3>
                    <span className="flex items-center gap-2 text-xs font-semibold mt-1.5">
                      <Dot category="filing" className="group-hover:bg-white" />
                      Filing
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-steel line-clamp-3">{state.overview}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 min-[961px]:gap-20">
            <h2 className="heading-2">Why franchise state laws matter</h2>
            <div className="max-w-[720px]">
              <div className="space-y-6 text-steel text-[17px] leading-relaxed">
                <p>
                  Many first-time franchisors assume that once they have an FDD, they can sell
                  franchises anywhere. That is incorrect. Selling a franchise in a registration state
                  without an effective registration can expose the franchisor to rescission claims
                  (where the franchisee has the right to unwind the deal and get their money back),
                  state enforcement actions, and civil penalties.
                </p>
                <p>
                  As an educational example, consider how a brand like Subway or McDonald&apos;s manages
                  compliance. A national franchise system with thousands of units must maintain active
                  registrations in every registration state, file in every filing state, and update
                  those filings annually. For an emerging franchisor, the same rules apply even if you
                  are only selling one or two franchises in a given state.
                </p>
                <p>
                  The cost and timeline of state registration varies. Some states (like California and
                  New York) have thorough examiner reviews that can take 60 to 90 days or longer.
                  Filing states are generally faster. Planning your state-by-state rollout is a
                  critical part of franchise launch strategy.
                </p>
                <p>
                  Beyond registration and filing, some states have franchise relationship laws that
                  govern how franchisors can terminate, refuse to renew, or restrict transfers of
                  franchise agreements. These relationship laws apply regardless of whether the state
                  has a registration requirement.
                </p>
              </div>

              <h3 className="heading-3 mt-14 mb-6">Common mistakes to avoid</h3>
              <ul className="border-t border-graphite">
                {[
                  'Selling franchises in registration states before your registration is effective.',
                  'Failing to file annual renewals, causing your registration to lapse.',
                  'Using a generic FDD without state-specific addenda required by certain states.',
                  'Ignoring franchise relationship laws in states that do not require registration.',
                  'Advertising franchise opportunities in registration states before registration is complete.',
                  'Assuming that selling from a non-registration state to a buyer in a registration state avoids the requirement.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 border-b border-line">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-steel text-[17px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">Navigate your franchise compliance</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              State franchise law compliance is one piece of a larger franchise development process.
              Explore our resources to understand the full picture.
            </p>
          </div>
          <div className="tile-grid sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/services" className="card-interactive group flex flex-col justify-between gap-8">
              <span>
                <h3 className="heading-4 mb-2">Our services</h3>
                <p className="text-[15px] leading-relaxed text-steel">
                  Full-service franchise development including FDD preparation and state registration management.
                </p>
              </span>
              <Arrow size={18} className="text-accent" />
            </Link>
            <Link href="/how-it-works" className="card-interactive group flex flex-col justify-between gap-8">
              <span>
                <h3 className="heading-4 mb-2">How it works</h3>
                <p className="text-[15px] leading-relaxed text-steel">
                  Our four-phase franchise development process from feasibility through launch.
                </p>
              </span>
              <Arrow size={18} className="text-accent" />
            </Link>
            <Link href="/glossary" className="card-interactive group flex flex-col justify-between gap-8">
              <span>
                <h3 className="heading-4 mb-2">Franchise glossary</h3>
                <p className="text-[15px] leading-relaxed text-steel">
                  Definitions of key franchise terms including FDD, Item 19, franchise agreement, and more.
                </p>
              </span>
              <Arrow size={18} className="text-accent" />
            </Link>
            <Link href="/contact" className="card-interactive group flex flex-col justify-between gap-8">
              <span>
                <h3 className="heading-4 mb-2">Contact us</h3>
                <p className="text-[15px] leading-relaxed text-steel">
                  Have questions about franchise compliance? Schedule a call with our team.
                </p>
              </span>
              <Arrow size={18} className="text-accent" />
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-steel max-w-[720px] mt-14 pt-6 border-t border-line">
            This content is general education and does not constitute legal advice. Franchise laws
            change. Consult a franchise attorney and verify current requirements with the relevant
            state agency.
          </p>
        </div>
      </section>

      <ContinueLearning
        heading="Continue your research"
        links={[
          { label: 'Franchise glossary', href: '/glossary', description: 'Every franchise term you will encounter during state registration and beyond.' },
          { label: 'How the process works', href: '/how-it-works', description: 'See where state registration fits in the four-phase franchise development process.' },
          { label: 'Get your readiness score', href: '/is-my-business-franchisable', description: 'Eight questions across the four pillars of the Forge Franchise Readiness Method. About two minutes.' },
        ]}
      />

      <SectionCTA
        heading="Ready to franchise your business?"
        body="State compliance is complex, but you do not have to figure it out alone. We manage the entire registration and filing process so you can focus on building your franchise brand."
      />

    </>
  )
}
