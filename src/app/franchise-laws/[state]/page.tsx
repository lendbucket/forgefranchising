import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { StickyCTA } from '@/components/StickyCTA'
import {
  FRANCHISE_LAWS,
  getStateBySlug,
  getCategoryLabel,
  getCategoryColor,
  type FranchiseStateData,
} from '@/data/franchise-laws'

export function generateStaticParams() {
  return FRANCHISE_LAWS.map((state) => ({
    state: state.slug,
  }))
}

type Props = {
  params: Promise<{ state: string }>
}

export async function generateMetadata({ params }: Props) {
  const { state: slug } = await params
  const stateData = getStateBySlug(slug)
  if (!stateData) return {}

  const titleKeyword = `${stateData.name} Franchise Laws`

  return createMetadata({
    title: titleKeyword,
    description: `${stateData.overview} Learn about ${stateData.name} franchise ${stateData.category === 'registration' ? 'registration' : stateData.category === 'filing' ? 'filing' : 'compliance'} requirements, fees, and regulatory contacts.`,
    path: `/franchise-laws/${slug}`,
  })
}

function CategoryBadge({ category }: { category: FranchiseStateData['category'] }) {
  const colorClass = getCategoryColor(category)
  const label = getCategoryLabel(category)
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${colorClass}`}>
      {label}
    </span>
  )
}

export default async function StateFranchiseLawPage({ params }: Props) {
  const { state: slug } = await params
  const stateData = getStateBySlug(slug)

  if (!stateData) {
    notFound()
  }

  const pageTitle =
    stateData.category === 'registration'
      ? `${stateData.name} Franchise Registration Requirements`
      : stateData.category === 'filing'
        ? `${stateData.name} Franchise Filing Requirements`
        : `${stateData.name} Franchise Laws and Requirements`

  const actionVerb =
    stateData.category === 'registration'
      ? 'register'
      : stateData.category === 'filing'
        ? 'file'
        : 'comply with federal law when selling'

  // Get neighboring states for internal linking (same category)
  const sameCategory = FRANCHISE_LAWS.filter(
    (s) => s.category === stateData.category && s.slug !== stateData.slug
  )
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs
            items={[
              { label: 'Franchise Laws', href: '/franchise-laws' },
              { label: stateData.name },
            ]}
          />
          <div className="max-w-3xl">
            <div className="mb-4">
              <CategoryBadge category={stateData.category} />
            </div>
            <h1 className="heading-1 mb-6">{pageTitle}</h1>
            <p className="body-large mb-4">{stateData.overview}</p>
            {stateData.category !== 'no-filing' && (
              <p className="body-large">
                Franchisors must {actionVerb} their Franchise Disclosure Document (FDD) with the{' '}
                <strong>{stateData.regulatoryBody}</strong> before offering or selling any franchise
                in {stateData.name}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Regulatory Body */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="heading-2 mb-6">
                What Franchisors Must Do in {stateData.name}
              </h2>

              {/* Key Requirements */}
              <div className="mb-10">
                <h3 className="heading-3 mb-4">Key Requirements</h3>
                <ul className="space-y-3">
                  {stateData.keyRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-amber flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-muted-brown">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Renewal Info */}
              <div className="mb-10">
                <h3 className="heading-3 mb-4">Renewal Requirements</h3>
                <p className="text-muted-brown">{stateData.renewalInfo}</p>
              </div>

              {/* Fees */}
              <div className="mb-10">
                <h3 className="heading-3 mb-4">Filing Fees</h3>
                <p className="text-muted-brown">{stateData.fees}</p>
              </div>

              {/* Special Notes */}
              {stateData.notes && (
                <div className="mb-10">
                  <h3 className="heading-3 mb-4">Important Notes</h3>
                  <div className="card p-6 border border-amber/20 bg-amber/5">
                    <p className="text-muted-brown">{stateData.notes}</p>
                  </div>
                </div>
              )}

              {/* Category-specific guidance */}
              {stateData.category === 'registration' && (
                <div className="mb-10">
                  <h3 className="heading-3 mb-4">
                    Understanding {stateData.name} Franchise Registration
                  </h3>
                  <div className="space-y-4 text-muted-brown">
                    <p>
                      As a registration state, {stateData.name} requires franchisors to submit their
                      FDD for review by a state examiner before any franchise can be offered or sold.
                      This means you cannot advertise, solicit, or accept any payment related to a
                      franchise sale in {stateData.name} until your registration is effective.
                    </p>
                    <p>
                      The registration process involves submitting your complete FDD, audited
                      financial statements, franchise agreement, and any required state-specific
                      addenda. The state examiner will review the filing and may issue comment letters
                      requesting clarifications or modifications. You must respond to all examiner
                      comments before registration can be granted.
                    </p>
                    <p>
                      Once registration is effective, it must be renewed annually. Allowing your
                      registration to lapse means you cannot legally sell franchises in{' '}
                      {stateData.name} until it is reinstated.
                    </p>
                  </div>
                </div>
              )}

              {stateData.category === 'filing' && (
                <div className="mb-10">
                  <h3 className="heading-3 mb-4">
                    Understanding {stateData.name} Franchise Filing
                  </h3>
                  <div className="space-y-4 text-muted-brown">
                    <p>
                      As a filing state, {stateData.name} requires franchisors to file their FDD (or
                      a notice of filing) with the designated state agency before offering or selling
                      franchises. Unlike registration states, {stateData.name} does not conduct a
                      substantive review of the FDD before allowing franchise sales to proceed.
                    </p>
                    <p>
                      The filing requirement is still mandatory. Selling a franchise in{' '}
                      {stateData.name} without a proper filing on record is a violation of state law
                      and can result in legal consequences including the franchisee's right to
                      rescind the franchise agreement.
                    </p>
                    <p>
                      Filings must be updated annually. Franchisors should build {stateData.name}{' '}
                      filing into their annual FDD update calendar to ensure continuous compliance.
                    </p>
                  </div>
                </div>
              )}

              {stateData.category === 'no-filing' && (
                <div className="mb-10">
                  <h3 className="heading-3 mb-4">
                    Franchising in {stateData.name} Without a State Filing
                  </h3>
                  <div className="space-y-4 text-muted-brown">
                    <p>
                      {stateData.name} does not have a franchise-specific registration or filing law.
                      This means franchisors can offer and sell franchises in {stateData.name}{' '}
                      without any state-level franchise filing, as long as they comply with the
                      federal FTC Franchise Rule.
                    </p>
                    <p>
                      The absence of a state franchise filing law does not mean there are no rules.
                      The FTC Franchise Rule still requires a compliant FDD delivered at least 14
                      days before any franchise agreement is signed or any payment is made.
                      Additionally, {stateData.name} may have consumer protection statutes,
                      business opportunity laws, or franchise relationship laws that affect how
                      franchisors operate.
                    </p>
                    <p>
                      Franchisors should not treat no-filing states as unregulated. General business
                      law, contract law, and consumer protection statutes still apply to every
                      franchise transaction.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="heading-4 mb-4">Regulatory Information</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-brown/60 mb-1">
                      State
                    </dt>
                    <dd className="text-espresso font-medium">{stateData.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-brown/60 mb-1">
                      Category
                    </dt>
                    <dd>
                      <CategoryBadge category={stateData.category} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-brown/60 mb-1">
                      Regulatory Body
                    </dt>
                    <dd className="text-espresso text-sm">{stateData.regulatoryBody}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-brown/60 mb-1">
                      Official Resource
                    </dt>
                    <dd>
                      <a
                        href={stateData.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber hover:text-amber/80 text-sm underline transition-colors"
                      >
                        Visit State Website
                      </a>
                    </dd>
                  </div>
                </dl>

                <hr className="my-6 border-espresso/10" />

                <h4 className="text-sm font-semibold text-espresso mb-3">Need Help?</h4>
                <p className="text-xs text-muted-brown mb-4">
                  We manage state franchise registrations and filings as part of our franchise
                  development services.
                </p>
                <Link href="/contact" className="btn-primary text-sm w-full text-center block">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related States */}
      {sameCategory.length > 0 && (
        <section className="section-padding bg-deep-cream">
          <div className="container-wide">
            <h2 className="heading-2 mb-4">
              Other{' '}
              {stateData.category === 'registration'
                ? 'Registration'
                : stateData.category === 'filing'
                  ? 'Filing'
                  : 'No-Filing'}{' '}
              States
            </h2>
            <p className="body-large mb-8 max-w-2xl">
              Explore franchise requirements in other states with{' '}
              {stateData.category === 'registration'
                ? 'registration requirements'
                : stateData.category === 'filing'
                  ? 'filing requirements'
                  : 'no state-level filing requirements'}
              .
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sameCategory.map((s) => (
                <Link
                  key={s.slug}
                  href={`/franchise-laws/${s.slug}`}
                  className="card p-5 hover:shadow-md transition-shadow group"
                >
                  <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-brown line-clamp-2">{s.overview}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/franchise-laws" className="btn-secondary">
                View All States
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/franchise-laws"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  All State Franchise Laws
                </h3>
                <p className="text-sm text-muted-brown">
                  Complete directory of franchise laws across all 50 states.
                </p>
              </Link>
              <Link
                href="/services"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  Franchise Development Services
                </h3>
                <p className="text-sm text-muted-brown">
                  We handle FDD preparation, state registrations, and ongoing compliance.
                </p>
              </Link>
              <Link
                href="/glossary"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  Franchise Glossary
                </h3>
                <p className="text-sm text-muted-brown">
                  Definitions of FDD, franchise agreement, and other key terms.
                </p>
              </Link>
              <Link
                href="/contact"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                  Contact Us
                </h3>
                <p className="text-sm text-muted-brown">
                  Questions about {stateData.name} franchise compliance? Talk to our team.
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

      <ContinueLearning
        heading="Continue Your Research"
        links={[
          { label: 'All State Franchise Laws', href: '/franchise-laws', description: 'See requirements for all 50 states in one view.' },
          { label: 'How Our Process Works', href: '/how-it-works', description: 'The four phases from feasibility to franchise brand, including state registration.' },
          { label: 'Franchise Glossary', href: '/glossary', description: 'Every franchise term defined in plain language.' },
        ]}
      />

      <SectionCTA
        heading={`Need Help With ${stateData.name} Franchise Compliance?`}
        body={`We handle state franchise registrations, filings, and annual renewals so you can focus on growing your brand. Let us manage the ${stateData.name} process for you.`}
      />

      <StickyCTA
        text="Get Your Free Readiness Score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
