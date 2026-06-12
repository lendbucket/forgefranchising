import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Franchise Branding Guide',
  description:
    'Why brand is the product when you franchise. A complete guide to building, enforcing, and protecting a franchise brand that compounds across every unit.',
  path: '/franchise-branding',
})

const spokes = [
  {
    number: '01',
    title: 'Why Brand Matters in Franchising',
    href: '/franchise-branding/why-brand-matters',
    summary: 'Customers buy brands, not products. Franchisees buy the right to use your brand. The brand is the economic engine of the entire system.',
    points: [
      'Recognition and trust transfer drive unit economics',
      'Pricing power comes from brand equity, not product superiority',
      'Franchisees are investing in your reputation, not your recipe',
    ],
  },
  {
    number: '02',
    title: 'How Customers Recognize a Brand',
    href: '/franchise-branding/how-customers-know-a-brand',
    summary: 'Brand recognition is built through name, mark, color, voice, and consistency. A customer in a second city must get an identical experience for the brand to compound.',
    points: [
      'Visual identity: name, logo, color palette, typography',
      'Voice and messaging consistency across every touchpoint',
      'The identical experience principle that makes franchises scale',
    ],
  },
  {
    number: '03',
    title: 'Building a Franchise Brand',
    href: '/franchise-branding/building-a-franchise-brand',
    summary: 'Taking an owner operated identity and hardening it into a franchisable brand requires an identity system, brand book, defined voice, and operational standards.',
    points: [
      'Extracting brand identity from the founder and codifying it',
      'Creating a brand book that franchisees can execute without you',
      'Operational standards that make brand delivery repeatable',
    ],
  },
  {
    number: '04',
    title: 'Brand Standards Enforcement',
    href: '/franchise-branding/brand-standards-enforcement',
    summary: 'The franchise agreement and operations manual define brand standards. Field audits protect the customer experience without crushing franchisee autonomy.',
    points: [
      'Brand standards in the franchise agreement and operations manual',
      'Field audit programs that catch drift before customers do',
      'Balancing brand control with franchisee independence',
    ],
  },
  {
    number: '05',
    title: 'Protecting Your Franchise Brand',
    href: '/franchise-branding/protecting-your-brand',
    summary: 'Trademarks are the legal spine of franchising. Federal registration before selling units, Item 13 of the FDD, and policing the mark protect the entire system.',
    points: [
      'Federal trademark registration as a franchise prerequisite',
      'Item 13 disclosure requirements in the FDD',
      'Policing and enforcement to prevent brand dilution',
    ],
  },
]

const faqs = [
  {
    q: 'Why is brand more important than the product in franchising?',
    a: 'When you franchise, you are not selling your product to consumers. You are selling the right to operate under your brand to franchisees. The brand is what creates customer demand in new markets before a franchisee opens. It is the reason a customer walks in on day one. Without brand equity, every new unit starts from zero.',
  },
  {
    q: 'When should I start building my franchise brand?',
    a: 'Before you sell your first franchise. Your brand identity, trademark registration, brand book, and standards manual should all be complete before your FDD is filed. Trying to build brand infrastructure after franchisees are operating creates inconsistency that erodes trust across the entire system.',
  },
  {
    q: 'What is included in a franchise brand book?',
    a: 'A franchise brand book codifies your visual identity (logo usage, color palette, typography, photography style), brand voice and messaging guidelines, customer experience standards, and approved marketing templates. It gives every franchisee a clear, executable playbook for representing the brand correctly.',
  },
  {
    q: 'How do franchisors enforce brand standards?',
    a: 'Through the franchise agreement (which makes brand compliance a contractual obligation), the operations manual (which details the standards), and field audit programs (which verify compliance). Most franchise systems use a combination of scheduled visits, mystery shops, and digital monitoring to catch brand drift early.',
  },
  {
    q: 'Do I need a trademark before franchising?',
    a: 'Yes. Federal trademark registration is effectively required before you can franchise. The FDD requires disclosure of your trademark status in Item 13, and state examiners will scrutinize it. Selling franchises without a registered mark creates legal exposure and undermines the entire value proposition.',
  },
  {
    q: 'What happens if a franchisee damages the brand?',
    a: 'This is why brand standards enforcement exists. A single franchisee delivering a substandard experience can damage the reputation that every other franchisee in the system depends on. The franchise agreement should include clear remedies: cure periods, additional training requirements, and ultimately termination rights for persistent brand violations.',
  },
]

export default function FranchiseBrandingPage() {
  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Franchise Branding: Why Brand Is the Product',
            description: 'A complete guide to building, enforcing, and protecting a franchise brand that compounds across every unit.',
            author: {
              '@type': 'Organization',
              name: 'Forge Franchising Group',
              url: SITE_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Forge Franchising Group',
              url: SITE_URL,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/franchise-branding`,
            },
            url: `${SITE_URL}/franchise-branding`,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Franchise Branding' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Franchise Brand Strategy</p>
            <h1 className="heading-1 mb-8">
              Franchise Branding: Why Brand Is the Product
            </h1>
            <p className="body-large mb-6">
              When you franchise your business, you stop selling your service and start
              selling your brand and system. The franchisee is not buying your recipes, your
              equipment list, or your floor plan. They are buying the right to operate under
              a name that customers already trust. That name is the product.
            </p>
            <p className="body-large mb-6">
              Every successful franchise system in history figured this out. The ones that
              failed usually did not. They thought they were selling a business model. They
              were actually selling a brand, and they had not built one worth buying.
            </p>
            <p className="body-large mb-8">
              This guide covers the full arc of franchise branding: why it matters, how
              customers recognize it, how to build it, how to enforce it, and how to
              protect it legally. Each section links to a deeper guide on the topic.
            </p>

            <KeyTakeaways
              items={[
                'When you franchise, the brand becomes your primary product, not the service',
                'Brand recognition drives franchisee demand and customer trust in new markets',
                'A franchise brand must be codified into systems before selling the first unit',
                'Brand standards enforcement protects every franchisee in the system',
                'Federal trademark registration is required before you can legally franchise',
              ]}
              readTime="10 min read"
            />
          </div>
        </div>
      </section>

      {spokes.map((spoke, index) => (
        <section
          key={spoke.number}
          className={index % 2 === 0 ? 'section-padding bg-deep-cream' : 'section-padding bg-cream'}
        >
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <div className="text-amber font-display text-6xl font-bold mb-4">{spoke.number}</div>
                  <h2 className="heading-2 mb-3">{spoke.title}</h2>
                  <p className="body-large">{spoke.summary}</p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="card">
                  <h3 className="heading-4 mb-6">What you will learn:</h3>
                  <ul className="space-y-4">
                    {spoke.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-muted-brown leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={spoke.href}
                      className="btn-primary text-sm"
                    >
                      Read the full guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 text-cream mb-6">The Brand Advantage</h2>
          <p className="text-xl text-cream/60 max-w-3xl mx-auto leading-relaxed mb-12">
            Franchise systems with strong brands sell more units, command higher franchise fees,
            and retain franchisees longer. The brand is not a marketing exercise. It is the
            economic foundation of the entire system.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { stat: '63%', label: 'of consumers choose franchises based on brand recognition alone' },
              { stat: '2.3x', label: 'higher unit level revenue for top quartile franchise brands' },
              { stat: '47%', label: 'lower franchisee turnover in systems with strong brand standards' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-4xl font-display font-bold text-amber mb-2">{item.stat}</div>
                <p className="text-cream/50 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-4">Frequently Asked Questions</p>
            <h2 className="heading-2 mb-10">Franchise Branding FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="card"
                >
                  <h3 className="heading-4 mb-3">{faq.q}</h3>
                  <p className="text-muted-brown leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Find Out If Your Brand Is Ready to Franchise"
        body="Take our two minute franchise readiness assessment. You will get a score, personalized recommendations, and a clear picture of whether your brand is ready to scale."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or learn how our process builds franchise brands"
        secondaryHref="/how-it-works"
        variant="light"
      />

      <StickyCTA
        text="See If Your Brand Is Franchise Ready"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
