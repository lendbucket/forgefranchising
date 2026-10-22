import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'
import { faqSchema, webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Franchise vs License Your Business',
  description:
    'Franchise vs license your business: understand the legal, operational, and financial differences, then choose the right growth path with guidance from Forge.',
  path: '/franchise-vs-license',
})

const comparisonRows = [
  {
    label: 'Who Owns the Brand',
    franchise: 'Partners operate under your brand, name, and marks. The customer experience is yours.',
    license: 'Partners operate under their own brand. They use your system and methods behind the scenes.',
  },
  {
    label: 'Upfront Investment for the Buyer',
    franchise: 'Franchise fee plus buildout and working capital. Typically a larger upfront commitment with a proven playbook in return.',
    license: 'License fee for access to the system. Generally a lower upfront cost, but the partner builds their own brand presence.',
  },
  {
    label: 'Ongoing Fees',
    franchise: 'Recurring royalties (percentage of revenue or flat fee) plus marketing fund contributions in most systems.',
    license: 'Ongoing license fees, typically a flat rate or percentage. Structure varies by agreement.',
  },
  {
    label: 'Level of Control and Support',
    franchise: 'High. You set the standards, provide training, enforce brand compliance, and offer ongoing operational support.',
    license: 'Lower. You provide the system and training, but the partner runs their business independently under their own brand.',
  },
  {
    label: 'Speed to Launch',
    franchise: 'Longer setup. Requires a Franchise Disclosure Document, state registrations, and compliance infrastructure before selling.',
    license: 'Faster to market. Licensing agreements are simpler to structure, though proper legal review is still required.',
  },
  {
    label: 'Best Fit',
    franchise: 'Owners who want a branded network with consistent customer experience, operational standards, and long term brand equity.',
    license: 'Owners who want to distribute their system and methods without managing a branded network or meeting franchise regulations.',
  },
]

const faqs = [
  {
    q: 'What is the main difference between franchising and licensing?',
    a: 'A franchise grants your brand, your full operating system, and ongoing support. The partner operates under your name and follows your standards. A license grants your system, methods, or intellectual property, but the partner runs the business under their own brand with more independence. The legal distinction is defined by the FTC Franchise Rule, not by what the agreement is called.',
  },
  {
    q: 'Which is cheaper to start, a franchise or a license program?',
    a: 'Licensing is generally less expensive to set up because it does not require a Franchise Disclosure Document, state registrations, or the same level of compliance infrastructure. However, franchising typically generates higher recurring revenue and stronger brand equity over time. The right choice depends on your goals, not just the startup cost.',
  },
  {
    q: 'Which model gives me more control over the partner?',
    a: 'Franchising gives you significantly more control. You set brand standards, require specific training, mandate operational procedures, and can enforce compliance through the franchise agreement. Licensing provides less control by design. The partner uses your system but operates independently.',
  },
  {
    q: 'How does Forge keep a license from becoming an unregistered franchise?',
    a: 'The FTC Franchise Rule defines a franchise based on three elements: a trademark license, significant operational control or assistance, and a required payment. If a licensing arrangement meets all three, it is legally a franchise regardless of what the contract calls it. Forge works with qualified franchise counsel to structure each engagement so the legal classification matches the intent. If you want to license, we make sure it stays a license. If the arrangement naturally looks like a franchise, we structure it as one.',
  },
  {
    q: 'Can I offer both a franchise and a license program?',
    a: 'Yes. Some businesses offer a full franchise for partners who want the brand and system, and a license or white label option for partners who prefer independence. The key is structuring each correctly with appropriate legal documentation. Forge helps you design both paths so they serve different buyer profiles without creating compliance issues.',
  },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function FranchiseVsLicensePage() {
  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/franchise-vs-license`,
              name: 'Franchise vs License Your Business',
              description: 'Franchise vs license your business: understand the legal, operational, and financial differences, then choose the right growth path.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/franchise-vs-license`, [
              { name: 'Resources', url: `${SITE_URL}/learn` },
              { name: 'Franchise vs License' },
            ]),
            faqSchema({
              url: `${SITE_URL}/franchise-vs-license`,
              questions: faqs.map((faq) => ({
                question: faq.q,
                answer: faq.a,
              })),
            }),
          ]),
        }}
      />

      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Resources', href: '/learn' }, { label: 'Franchise vs License' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">
              Franchise or License Your Business: Which Path Fits
            </h1>
            <p className="body-large mb-6">
              You have a proven business and you want to scale it through partners. There are two clear
              paths: franchise your brand and system, or license your system and methods while the partner
              operates under their own name. Both are real growth strategies. Both generate revenue. And
              choosing the wrong one creates legal, operational, and financial problems that are expensive
              to unwind.
            </p>
            <p className="body-large mb-8">
              This page breaks down the franchise vs license decision with the specifics that actually
              matter: who owns the brand, what each partner receives, what you control, and how the
              legal structure works. No theory. Just the information you need to choose the right path
              for your business.
            </p>
            <KeyTakeaways
              items={[
                'A franchise grants your brand plus your full system with ongoing support and control',
                'A license grants your system and methods while the partner runs it under their own brand',
                'The FTC Franchise Rule determines whether an arrangement is legally a franchise, regardless of what it is called',
                'Forge structures each path correctly with qualified franchise counsel',
                'Some businesses offer both paths to serve different buyer profiles',
              ]}
              readTime="8 min read"
            />
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-6">The core difference, explained plainly</h2>
            <p className="text-steel text-[17px] leading-relaxed mb-6">
              A <strong className="text-graphite">franchise</strong> grants your brand, your complete
              operating system, and ongoing support and oversight. The franchisee operates locations that
              look, feel, and perform like yours. Customers see one brand. You maintain standards across
              every unit, and you earn recurring royalties for as long as the franchisee operates.
            </p>
            <p className="text-steel text-[17px] leading-relaxed mb-6">
              A <strong className="text-graphite">license</strong> grants your system, your methods,
              your technology, or your intellectual property. The licensee uses what you have built, but
              they operate under their own brand and make their own decisions about how to run the day to
              day business. You earn license fees, but you have less control over the partner's operations
              and customer experience.
            </p>
            <p className="text-steel text-[17px] leading-relaxed mb-8">
              Here is the part most people miss: whether something is legally a franchise is not determined
              by what you call it in the contract. It is determined by the{' '}
              <strong className="text-graphite">FTC Franchise Rule</strong>, which defines a franchise based
              on three elements: a trademark license, significant operational control or assistance, and a
              required payment. If your arrangement meets all three elements, it is a franchise under federal
              law, even if the agreement says "license" at the top. Forge works with qualified franchise
              counsel to structure each engagement correctly so the legal classification matches the business
              intent.
            </p>
          </div>
        </div>
      </section>

      {/* Side by Side Comparison */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-5xl">
            <h2 className="heading-2 mb-4">Side by side comparison</h2>
            <p className="body-large max-w-[880px] mb-12">
              How franchising and licensing compare across the factors that matter most when choosing
              a growth path.
            </p>
            <div className="overflow-scroll-x">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-graphite">
                    <th className="text-left py-4 pr-6 text-sm font-semibold text-graphite w-1/5"></th>
                    <th className="text-left py-4 pr-6 text-sm font-semibold text-accent w-2/5">Franchise</th>
                    <th className="text-left py-4 pr-6 text-sm font-semibold text-graphite w-2/5">License</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-line">
                      <td className="py-4 pr-6 text-sm font-semibold text-graphite align-top">{row.label}</td>
                      <td className="py-4 pr-6 text-sm text-steel text-[17px] leading-relaxed align-top">{row.franchise}</td>
                      <td className="py-4 pr-6 text-sm text-steel text-[17px] leading-relaxed align-top">{row.license}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What You Deliver in Each Path */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="heading-2 mb-4">What your partner receives in each path</h2>
            <p className="body-large max-w-[880px] mb-12">
              Concrete deliverables, not vague promises. Here is what the buyer gets in each model.
            </p>
            <div className="tile-grid lg:grid-cols-2">
              <div className="card">
                <h3 className="heading-3 mb-2 text-accent">Franchise path</h3>
                <p className="text-steel text-sm mb-6">The partner operates under your brand with full system access and support.</p>
                <ul className="space-y-3">
                  {[
                    'Brand and trademark license with protected territory',
                    'Complete operations manual and system documentation',
                    'Technology and software platform access',
                    'Marketing and lead generation support',
                    'Site selection and launch support',
                    'Initial and ongoing training',
                    'Ongoing operational support and system updates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-steel text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="heading-3 mb-2">License path</h3>
                <p className="text-steel text-sm mb-6">The partner operates under their own brand with your system and methods.</p>
                <ul className="space-y-3">
                  {[
                    'System and methods documentation',
                    'Software platform access',
                    'Initial training on the system',
                    'Ongoing support and system updates',
                    'Independence to run the business under their own brand',
                    'Flexibility in local marketing and operations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-steel text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two CTAs for Self Selection */}
      <section className="section-padding bg-graphite surface-dark">
        <div className="container-wide">
          <div className="max-w-[880px] mb-12">
            <h2 className="heading-2 text-white mb-6">Which path fits your business?</h2>
            <p className="body-large">
              The deciding factor is usually control. If the customer experience has to be yours,
              you are franchising. If the partner can run it their way under their own name, a
              license is cheaper, faster, and less regulated.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 border border-white/15 divide-y divide-white/15 lg:divide-y-0 lg:divide-x">
            <div className="p-8 flex flex-col">
              <h3 className="heading-3 text-white mb-4">I want to franchise my business</h3>
              <p className="text-white/60 text-[17px] leading-relaxed mb-6 flex-1">
                Build a branded network of partners operating under your name, your system, and your
                standards. Full control, full support, recurring royalty revenue.
              </p>
              <Link href="/how-it-works" className="btn-primary text-center w-full">
                See the franchise development process
              </Link>
            </div>
            <div className="p-8 flex flex-col">
              <h3 className="heading-3 text-white mb-4">I want to license or white label</h3>
              <p className="text-white/60 text-[17px] leading-relaxed mb-6 flex-1">
                Distribute your system and methods to partners who run their own brand. Lower regulatory
                overhead, less control, and a different buyer profile.
              </p>
              <Link href="/contact?inquiry=licensing" className="btn-primary text-center w-full">
                Start a licensing conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Forge Helps You Choose */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-[880px]">
            <h2 className="heading-2 mb-6">Not sure yet? That is normal.</h2>
            <p className="body-large mb-6">
              Most business owners who contact us are not 100% certain which path is right. That is
              exactly what the initial conversation is for. Forge helps owners evaluate both options
              based on their goals, their brand strength, their capital, and the type of partner they
              want to attract.
            </p>
            <p className="body-large mb-8">
              Sometimes the answer is clearly a franchise. Sometimes a license is the better fit.
              Sometimes it is both. We will give you an honest recommendation based on where your
              business is today and where you want it to go. If funding is part of the equation,
              see our{' '}
              <Link href="/financing" className="text-accent font-semibold hover:underline">
                guide to financing franchise development
              </Link>.
            </p>
            <Link href="/is-my-business-franchisable" className="btn-primary">
              Take the free readiness assessment
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="max-w-[880px]">
            <h2 className="heading-2 mb-10">Franchise vs license FAQ</h2>
            <div className="border-t border-graphite">
              {faqs.map((faq, i) => (
                <div key={i} className="py-8 border-b border-line">
                  <h3 className="heading-4 mb-3">{faq.q}</h3>
                  <p className="text-steel text-[17px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-[880px]">
            <p className="text-steel text-sm leading-relaxed mb-4">
              Nothing on this page is legal advice. The determination of whether an offering is a franchise
              is governed by the FTC Franchise Rule and applicable state law. Forge Franchising works with
              qualified franchise counsel to structure each engagement correctly.
            </p>
            <p className="text-steel text-sm leading-relaxed mb-4">
              No statement on this page is a guarantee of income, profit, approval, or results. Franchise
              offerings are made only through a Franchise Disclosure Document where applicable.
            </p>
            <p className="text-steel text-sm leading-relaxed">
              Consult a qualified franchise attorney before making decisions about franchising or licensing
              your business.
            </p>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Continue your research"
        links={[
          { label: 'How franchise development works', href: '/how-it-works', description: 'The four phases from feasibility to scale, step by step.' },
          { label: 'Franchise development packages', href: '/packages', description: 'See the scope, deliverables, and structure at each engagement level.' },
          { label: 'Financing your franchise development', href: '/financing', description: 'Common funding paths, what lenders look for, and how to prepare.' },
        ]}
      />

      <SectionCTA
        heading="Find out which path fits your business"
        body="Take the free readiness assessment to see if your business is ready to franchise, license, or both. You will get a clear, honest answer in under five minutes."
        buttonText="Take the free assessment"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or book a call to discuss your specific situation"
        secondaryHref="/contact"
        variant="light"
      />

      <StickyCTA
        text="See if your business is ready to scale"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
