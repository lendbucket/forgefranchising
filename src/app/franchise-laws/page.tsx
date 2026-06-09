import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import {
  FRANCHISE_LAWS,
  getStatesByCategory,
} from '@/data/franchise-laws'

export const metadata = createMetadata({
  title: 'Franchise Laws by State',
  description:
    'Comprehensive guide to franchise registration and filing requirements in all 50 US states. Learn which states require FDD registration, filing, or have no state-level franchise law.',
  path: '/franchise-laws',
})

export default function FranchiseLawsPage() {
  const registrationStates = getStatesByCategory('registration')
  const filingStates = getStatesByCategory('filing')
  const noFilingStates = getStatesByCategory('no-filing')

  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Franchise Laws by State' }]} />
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              Legal Resource
            </p>
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
          </div>
        </div>
      </section>

      {/* FTC Rule Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">The Federal FTC Franchise Rule</h2>
            <p className="body-large mb-6">
              The FTC Franchise Rule (16 CFR Parts 436 and 437) is the federal baseline for all
              franchise sales in the United States. It requires every franchisor to prepare and
              deliver a Franchise Disclosure Document (FDD) to prospective franchisees at least 14
              days before the prospect signs any binding agreement or pays any money.
            </p>
            <p className="text-muted-brown mb-6">
              The FDD contains 23 required disclosure items covering the franchisor's background,
              litigation history, fees, obligations, financial performance representations (if any),
              and audited financial statements. The FTC Rule applies in every state, regardless of
              whether that state has its own franchise law.
            </p>
            <p className="text-muted-brown mb-8">
              Violations of the FTC Franchise Rule can lead to enforcement actions, civil penalties,
              and private lawsuits. The FTC does not register or review FDDs. That is purely a
              state-level function in the states that require it.
            </p>
            <div className="card p-6 border border-amber/20 bg-amber/5">
              <p className="text-sm text-muted-brown">
                <span className="font-semibold text-espresso">Key point:</span> Even if your state
                has no franchise filing law, you still need a fully compliant FDD under the FTC Rule
                before you can legally offer a franchise to anyone, anywhere in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Categories */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <h2 className="heading-2 mb-4 text-center">Three Categories of State Franchise Regulation</h2>
          <p className="body-large text-center max-w-2xl mx-auto mb-12">
            Each state falls into one of three categories based on how it regulates franchise sales.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200 mb-4">
                Registration States
              </div>
              <h3 className="heading-4 mb-3">{registrationStates.length} States</h3>
              <p className="text-muted-brown mb-4">
                These states require franchisors to file and register their FDD with a state agency
                before making any franchise offer or sale. A state examiner reviews the FDD and may
                request changes before granting registration. This process can take weeks to months
                depending on the state.
              </p>
              <p className="text-sm text-muted-brown">
                Includes California, New York, Illinois, and other major markets.
              </p>
            </div>
            <div className="card p-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-4">
                Filing States
              </div>
              <h3 className="heading-4 mb-3">{filingStates.length} States</h3>
              <p className="text-muted-brown mb-4">
                These states require franchisors to file a notice or a copy of their FDD with a
                state agency, but they do not conduct a substantive review before allowing sales.
                Filing is a notice requirement, not a gatekeeping function. It is faster than
                registration but still mandatory.
              </p>
              <p className="text-sm text-muted-brown">
                Includes Florida, Texas, and other key markets.
              </p>
            </div>
            <div className="card p-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200 mb-4">
                No Filing Required
              </div>
              <h3 className="heading-4 mb-3">{noFilingStates.length} States + D.C.</h3>
              <p className="text-muted-brown mb-4">
                These states have no state-level franchise registration or filing requirement.
                Franchisors selling in these states must still comply with the federal FTC Franchise
                Rule, but there is no additional state filing needed. Some of these states do have
                franchise relationship laws that govern the ongoing franchisor-franchisee
                relationship.
              </p>
              <p className="text-sm text-muted-brown">
                Includes Georgia, Ohio, Pennsylvania, and many others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State Directory */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="heading-2 mb-4 text-center">Complete State-by-State Directory</h2>
          <p className="body-large text-center max-w-2xl mx-auto mb-8">
            Click any state to view detailed franchise law requirements, regulatory contacts, and
            compliance guidance.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="text-sm text-muted-brown">Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-sm text-muted-brown">Filing Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-sm text-muted-brown">No Filing Required</span>
            </div>
          </div>

          {/* State Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {FRANCHISE_LAWS.sort((a, b) => a.name.localeCompare(b.name)).map((state) => {
              const dotColor =
                state.category === 'registration'
                  ? 'bg-red-400'
                  : state.category === 'filing'
                    ? 'bg-amber-400'
                    : 'bg-green-400'

              return (
                <Link
                  key={state.slug}
                  href={`/franchise-laws/${state.slug}`}
                  className="card p-4 flex items-center gap-3 hover:shadow-md transition-shadow group"
                >
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dotColor}`} />
                  <span className="text-espresso group-hover:text-amber transition-colors font-medium text-sm">
                    {state.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registration States Detail */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <h2 className="heading-2 mb-8">Registration States</h2>
          <p className="body-large mb-8 max-w-3xl">
            The following {registrationStates.length} states require full franchise registration.
            Franchisors cannot offer or sell a franchise in these states until the registration is
            effective. Each state has its own examiner, review process, and timeline.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {registrationStates
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((state) => (
                <Link
                  key={state.slug}
                  href={`/franchise-laws/${state.slug}`}
                  className="card p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="heading-4 group-hover:text-amber transition-colors">
                      {state.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                      Registration
                    </span>
                  </div>
                  <p className="text-sm text-muted-brown line-clamp-3">{state.overview}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Filing States Detail */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="heading-2 mb-8">Filing States</h2>
          <p className="body-large mb-8 max-w-3xl">
            The following {filingStates.length} states require franchisors to file their FDD or a
            notice with a state agency. Filing states do not conduct a substantive review, but the
            filing must be completed before any franchise offer or sale.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filingStates
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((state) => (
                <Link
                  key={state.slug}
                  href={`/franchise-laws/${state.slug}`}
                  className="card p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="heading-4 group-hover:text-amber transition-colors">
                      {state.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                      Filing
                    </span>
                  </div>
                  <p className="text-sm text-muted-brown line-clamp-3">{state.overview}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6">Why Franchise State Laws Matter</h2>
            <div className="space-y-6 text-muted-brown">
              <p>
                Many first-time franchisors assume that once they have an FDD, they can sell
                franchises anywhere. That is incorrect. Selling a franchise in a registration state
                without an effective registration can expose the franchisor to rescission claims
                (where the franchisee has the right to unwind the deal and get their money back),
                state enforcement actions, and civil penalties.
              </p>
              <p>
                As an educational example, consider how a brand like Subway or McDonald's manages
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

            <h3 className="heading-3 mt-10 mb-6">Common Mistakes to Avoid</h3>
            <ul className="space-y-4">
              {[
                'Selling franchises in registration states before your registration is effective.',
                'Failing to file annual renewals, causing your registration to lapse.',
                'Using a generic FDD without state-specific addenda required by certain states.',
                'Ignoring franchise relationship laws in states that do not require registration.',
                'Advertising franchise opportunities in registration states before registration is complete.',
                'Assuming that selling from a non-registration state to a buyer in a registration state avoids the requirement.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-muted-brown">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Navigate Your Franchise Compliance</h2>
            <p className="body-large mb-10">
              State franchise law compliance is one piece of a larger franchise development process.
              Explore our resources to understand the full picture.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services" className="card p-6 hover:shadow-md transition-shadow group text-left">
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  Our Services
                </h3>
                <p className="text-sm text-muted-brown">
                  Full-service franchise development including FDD preparation and state registration management.
                </p>
              </Link>
              <Link href="/how-it-works" className="card p-6 hover:shadow-md transition-shadow group text-left">
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  How It Works
                </h3>
                <p className="text-sm text-muted-brown">
                  Our four-phase franchise development process from feasibility through launch.
                </p>
              </Link>
              <Link href="/glossary" className="card p-6 hover:shadow-md transition-shadow group text-left">
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  Franchise Glossary
                </h3>
                <p className="text-sm text-muted-brown">
                  Definitions of key franchise terms including FDD, Item 19, franchise agreement, and more.
                </p>
              </Link>
              <Link href="/contact" className="card p-6 hover:shadow-md transition-shadow group text-left">
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  Contact Us
                </h3>
                <p className="text-sm text-muted-brown">
                  Have questions about franchise compliance? Schedule a call with our team.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-cream border-t border-espresso/10">
        <div className="container-wide py-8">
          <p className="text-xs text-muted-brown/70 max-w-3xl mx-auto text-center">
            This content is general education and does not constitute legal advice. Franchise laws
            change. Consult a franchise attorney and verify current requirements with the relevant
            state agency.
          </p>
        </div>
      </section>

      <SectionCTA
        heading="Ready to Franchise Your Business?"
        body="State compliance is complex, but you do not have to figure it out alone. We manage the entire registration and filing process so you can focus on building your franchise brand."
      />
    </>
  )
}
