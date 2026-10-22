import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createMetadata, composeDescription } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import {
  FRANCHISE_LAWS,
  getStateBySlug,
  getCategoryLabel,
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

  const action =
    stateData.category === 'registration'
      ? 'registration'
      : stateData.category === 'filing'
        ? 'filing'
        : 'compliance'

  const titleKeyword = `${stateData.name} Franchise Laws`

  return createMetadata({
    title: titleKeyword,
    description: composeDescription(
      `${stateData.name} franchise ${action} requirements explained.`,
      [
        ` ${stateData.regulatoryBody} oversees filings.`,
        ` What to file, what it costs, and how long review takes.`,
        ` Fees, renewal rules, and regulatory contacts.`,
        ` Plus what the FTC Franchise Rule requires nationwide.`,
        ` Requirements at a glance.`,
        ` See the current checklist.`,
        ` Compare all 50 states.`,
      ],
    ),
    path: `/franchise-laws/${slug}`,
  })
}

function CategoryBadge({ category }: { category: FranchiseStateData['category'] }) {
  const label = getCategoryLabel(category)
  return (
    <span className="inline-flex items-center px-3 py-1 text-sm font-semibold border border-current">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/franchise-laws/${slug}`,
              name: `${stateData.name} Franchise Laws`,
              description: `${stateData.overview} Learn about ${stateData.name} franchise ${stateData.category === 'registration' ? 'registration' : stateData.category === 'filing' ? 'filing' : 'compliance'} requirements, fees, and regulatory contacts.`,
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/franchise-laws/${slug}`, [
              { name: 'Resources', url: `${SITE_URL}/learn` },
              { name: 'Franchise Laws', url: `${SITE_URL}/franchise-laws` },
              { name: stateData.name },
            ]),
          ]),
        }}
      />
      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            withSchema={false}
            items={[
              { label: 'Resources', href: '/learn' },
              { label: 'Franchise Laws by State', href: '/franchise-laws' },
              { label: stateData.name },
            ]}
          />
          <div className="max-w-[880px]">
            <div className="mb-6">
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
            <HeroActions route={`/franchise-laws/${slug}`} />
          </div>
        </div>
      </section>

      {/* Regulatory Body */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="heading-2 mb-12">
                What franchisors must do in {stateData.name}
              </h2>

              {/* Key Requirements */}
              <div className="mb-12">
                <h3 className="heading-3 mb-6">Key requirements</h3>
                <ul className="space-y-4">
                  {stateData.keyRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-steel text-[17px] leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Renewal Info */}
              <div className="mb-12 pt-10 border-t border-line">
                <h3 className="heading-3 mb-4">Renewal requirements</h3>
                <p className="text-steel text-[17px] leading-relaxed">{stateData.renewalInfo}</p>
              </div>

              {/* Fees */}
              <div className="mb-12 pt-10 border-t border-line">
                <h3 className="heading-3 mb-4">Filing fees</h3>
                <p className="text-steel text-[17px] leading-relaxed">{stateData.fees}</p>
              </div>

              {/* Special Notes */}
              {stateData.notes && (
                <div className="mb-12 pt-10 border-t border-line">
                  <h3 className="heading-3 mb-4">Important notes</h3>
                  <div className="card border-t-2 border-t-graphite">
                    <p className="text-steel text-[17px] leading-relaxed">{stateData.notes}</p>
                  </div>
                </div>
              )}

              {/* Category-specific guidance */}
              {stateData.category === 'registration' && (
                <div className="mb-12 pt-10 border-t border-line">
                  <h3 className="heading-3 mb-6">
                    Understanding {stateData.name} franchise registration
                  </h3>
                  <div className="space-y-4 text-steel text-[17px] leading-relaxed">
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
                <div className="mb-12 pt-10 border-t border-line">
                  <h3 className="heading-3 mb-6">
                    Understanding {stateData.name} franchise filing
                  </h3>
                  <div className="space-y-4 text-steel text-[17px] leading-relaxed">
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
                <div className="mb-12 pt-10 border-t border-line">
                  <h3 className="heading-3 mb-6">
                    Franchising in {stateData.name} without a state filing
                  </h3>
                  <div className="space-y-4 text-steel text-[17px] leading-relaxed">
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
              <div className="card lg:sticky top-header-gap">
                <h3 className="heading-4 mb-6">Regulatory information</h3>
                <dl className="border-t border-graphite">
                  <div className="py-4 border-b border-line">
                    <dt className="text-sm text-steel mb-1">
                      State
                    </dt>
                    <dd className="text-graphite font-medium">{stateData.name}</dd>
                  </div>
                  <div className="py-4 border-b border-line">
                    <dt className="text-sm text-steel mb-2">
                      Category
                    </dt>
                    <dd className="text-graphite">
                      <CategoryBadge category={stateData.category} />
                    </dd>
                  </div>
                  <div className="py-4 border-b border-line">
                    <dt className="text-sm text-steel mb-1">
                      Regulatory body
                    </dt>
                    <dd className="text-graphite text-sm">{stateData.regulatoryBody}</dd>
                  </div>
                  <div className="py-4 border-b border-line">
                    <dt className="text-sm text-steel mb-1">
                      Official resource
                    </dt>
                    <dd>
                      <a
                        href={stateData.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link text-sm inline-flex items-center min-h-[44px]"
                      >
                        Visit state website
                      </a>
                    </dd>
                  </div>
                </dl>

                <h4 className="heading-4 mt-8 mb-3">Need help?</h4>
                <p className="text-sm text-steel leading-relaxed mb-6">
                  We manage state franchise registrations and filings as part of our franchise
                  development services.
                </p>
                <Link href="/contact" className="btn-primary w-full">
                  Schedule a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related States */}
      {sameCategory.length > 0 && (
        <section className="section-padding bg-stone">
          <div className="container-wide">
            <h2 className="heading-2 mb-6">
              Other{' '}
              {stateData.category === 'registration'
                ? 'registration'
                : stateData.category === 'filing'
                  ? 'filing'
                  : 'no-filing'}{' '}
              states
            </h2>
            <p className="body-large mb-12 max-w-[880px]">
              Explore franchise requirements in other states with{' '}
              {stateData.category === 'registration'
                ? 'registration requirements'
                : stateData.category === 'filing'
                  ? 'filing requirements'
                  : 'no state-level filing requirements'}
              .
            </p>
            <div className="tile-grid md:grid-cols-2 lg:grid-cols-3">
              {sameCategory.map((s) => (
                <Link
                  key={s.slug}
                  href={`/franchise-laws/${s.slug}`}
                  className="card-interactive group"
                >
                  <h3 className="heading-4 mb-3">
                    {s.name}
                  </h3>
                  <p className="text-sm text-steel leading-relaxed line-clamp-2">{s.overview}</p>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/franchise-laws" className="btn-secondary">
                View all states
              </Link>
            </div>
            <MidCTA route={`/franchise-laws/${slug}`} />
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="heading-2 mb-12">Related resources</h2>
          <div className="tile-grid md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/franchise-laws"
              className="card-interactive group"
            >
              <h3 className="heading-4 mb-3">
                All state franchise laws
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Complete directory of franchise laws across all 50 states.
              </p>
            </Link>
            <Link
              href="/services"
              className="card-interactive group"
            >
              <h3 className="heading-4 mb-3">
                Franchise development services
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                We handle FDD preparation, state registrations, and ongoing compliance.
              </p>
            </Link>
            <Link
              href="/glossary"
              className="card-interactive group"
            >
              <h3 className="heading-4 mb-3">
                Franchise glossary
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Definitions of FDD, franchise agreement, and other key terms.
              </p>
            </Link>
            <Link
              href="/contact"
              className="card-interactive group"
            >
              <h3 className="heading-4 mb-3">
                Contact us
              </h3>
              <p className="text-sm text-steel leading-relaxed">
                Questions about {stateData.name} franchise compliance? Talk to our team.
              </p>
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-16 pt-8 border-t border-line">
            <p className="text-sm text-steel leading-relaxed max-w-[880px]">
              This content is general education and does not constitute legal advice. Franchise laws
              change. Consult a franchise attorney and verify current requirements with the relevant
              state agency.
            </p>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Continue your research"
        links={[
          { label: 'All state franchise laws', href: '/franchise-laws', description: 'See requirements for all 50 states in one view.' },
          { label: 'How our process works', href: '/how-it-works', description: 'The four phases from feasibility to franchise brand, including state registration.' },
          { label: 'Franchise glossary', href: '/glossary', description: 'Every franchise term defined in plain language.' },
        ]}
      />

      <SectionCTA
        heading={`Need help with ${stateData.name} franchise compliance?`}
        body={`We handle state franchise registrations, filings, and annual renewals so you can focus on growing your brand. Let us manage the ${stateData.name} process for you.`}
      />

    </>
  )
}
