import Link from 'next/link'
import Image from 'next/image'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Building a Franchise Brand',
  description:
    'How to take an owner operated identity and harden it into a franchisable brand with an identity system, brand book, defined voice, and repeatable standards.',
  path: '/franchise-branding/building-a-franchise-brand',
})

export default function BuildingAFranchiseBrandPage() {
  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Building a Franchise Brand From an Owner Operated Business',
            description: 'How to take an owner operated identity and harden it into a franchisable brand with an identity system, brand book, defined voice, and repeatable standards.',
            author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
            publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/franchise-branding/building-a-franchise-brand` },
            url: `${SITE_URL}/franchise-branding/building-a-franchise-brand`,
          }),
        }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[
            { label: 'Franchise Branding', href: '/franchise-branding' },
            { label: 'Building a Franchise Brand' },
          ]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Brand Development</p>
            <h1 className="heading-1 mb-8">
              Building a Franchise Brand From an Owner Operated Business
            </h1>
            <p className="body-large mb-6">
              You built a business that works. Customers love it. Revenue is solid. But the
              brand that got you here is probably tied to you personally: your taste, your
              presence, your decisions. Franchising requires untangling the brand from the
              founder and codifying it into a system that someone else can execute with the
              same quality in a different market.
            </p>
            <p className="body-large mb-8">
              That is not a design project. It is an operational transformation. And it
              starts long before you sell your first franchise.
            </p>

            <KeyTakeaways
              items={[
                'Franchise brands must be separated from the founder and codified into systems',
                'A brand book translates identity into executable standards for franchisees',
                'Voice guidelines ensure consistent communication across every unit',
                'Operational standards are what make brand delivery repeatable at scale',
                'Brand infrastructure should be complete before the first franchise sale',
              ]}
              readTime="9 min read"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="max-w-3xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Business owner developing franchise brand identity system and brand book"
              width={1200}
              height={600}
              className="w-full h-auto mb-10"
              style={{ borderRadius: '4px' }}
            />

            <h2 className="heading-2 mb-6">The Founder Dependency Problem</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              In an owner operated business, the founder is the brand. They make the
              decisions about quality, customer experience, visual presentation, and
              communication tone. Every judgment call runs through one person, and that
              works fine at one or two locations. It does not work at 20.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Franchising forces you to answer a question most founders have never
              considered: "If I am not there, how does someone else know what the brand
              looks like, sounds like, and feels like?" The answer to that question is
              your brand system. And building it is one of the most important steps in
              the{' '}
              <Link href="/how-it-works" className="text-amber font-semibold link-underline">
                franchise development process
              </Link>.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Step One: Extract the Brand Identity</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Before you can codify the brand, you need to articulate what it actually is.
              Most founders know their brand intuitively but have never written it down.
              This step involves a structured brand audit that captures:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Core brand attributes: the three to five words that define how the brand should feel to a customer',
                'Brand promise: the specific, measurable commitment the brand makes at every interaction',
                'Target customer profile: who the brand is for and, equally important, who it is not for',
                'Competitive positioning: how the brand differentiates from direct competitors',
                'Visual identity inventory: every logo variation, color, font, and design element currently in use',
                'Communication patterns: how the brand speaks in writing, in person, and on social media',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-muted-brown leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-brown leading-relaxed mb-6">
              This audit becomes the raw material for every brand asset you build. Skip it
              and your brand book will be a collection of logo guidelines with no soul.
              Do it right and every franchisee will understand not just what the brand looks
              like but what it stands for.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Step Two: Build the Brand Book</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              The brand book is the document that translates your brand identity into
              executable standards. It is not a marketing brochure. It is an operating
              manual for your brand. A strong franchise brand book contains:
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Visual identity system.</strong> Logo usage rules (minimum size, clear
              space, approved backgrounds, prohibited modifications), primary and secondary
              color palettes with exact specifications (Pantone, CMYK, RGB, hex),
              typography hierarchy with approved typefaces and usage rules, photography
              and illustration style guidelines, and iconography standards.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Brand voice and messaging.</strong> Brand personality attributes with
              examples, tone guidelines for different contexts (customer facing, internal,
              social media, complaints), approved messaging frameworks for common scenarios,
              words and phrases to use and avoid, and sample copy for signage, menus,
              email templates, and social posts.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Environmental standards.</strong> Store or office layout requirements,
              signage specifications (exterior and interior), decor and fixture guidelines,
              uniform or dress code specifications, and sensory elements (music, scent,
              lighting levels) where applicable.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Digital brand standards.</strong> Website and app design requirements,
              social media profile setup and content guidelines, online listing management
              (Google Business Profile, Yelp, industry directories), and digital advertising
              creative guidelines.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Step Three: Define the Brand Voice</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Voice deserves its own focused effort because it is the element most likely
              to drift across franchisees. Visual identity can be controlled through
              templates and approved assets. Voice requires internalization, and that is
              harder.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Define your brand voice using a framework of attributes with behavioral
              anchors. For example: "Our voice is confident but never arrogant. We state
              facts and share expertise without belittling the customer. We say 'here is
              what we recommend' not 'you should do this.'" This level of specificity
              gives franchisees guardrails without a script.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Include example responses to common customer scenarios: a complaint, a
              compliment, a price objection, a referral request, a social media mention.
              Real examples teach voice faster than abstract descriptions ever will.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Step Four: Build Operational Standards That Deliver the Brand</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Here is where brand building meets franchise operations. Your brand promise
              means nothing if the operational systems do not deliver it. A brand that
              promises "fast, friendly service" needs operational standards that define
              exactly what fast means (greeting within 30 seconds, service completed
              within X minutes) and what friendly looks like (specific greeting scripts,
              follow up protocols, complaint resolution procedures).
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              These operational standards belong in your{' '}
              <Link href="/blog/franchise-operations-manual" className="text-amber font-semibold link-underline">
                operations manual
              </Link>{' '}
              and form the bridge between brand strategy and daily execution. They are what
              make the brand repeatable. Without them, you have a beautiful brand book
              that nobody follows because nobody knows how to translate its principles
              into action.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Step Five: Test Before You Scale</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Before you sell your first franchise, validate that your brand system works
              when you are not the one executing it. This usually means running a corporate
              location or pilot unit where managers follow the brand book and operations
              manual without the founder overriding decisions.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The test reveals gaps. Maybe your brand book does not address a common
              scenario. Maybe your voice guidelines are too vague for social media.
              Maybe your environmental standards work for a 2,000 square foot location
              but not a 1,200 square foot one. Finding these gaps before franchisees
              do is significantly cheaper than fixing them after.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Once the brand system survives contact with reality, you are ready for{' '}
              <Link href="/franchise-branding/brand-standards-enforcement" className="text-amber font-semibold link-underline">
                brand standards enforcement
              </Link>{' '}
              at scale. The system is documented, tested, and ready to be taught to
              franchisees who will carry it into new markets.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Common Mistakes in Franchise Brand Building</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Confusing brand with logo.</strong> A new logo is not a brand. It is
              one element of a brand system. Founders who spend $50,000 on a rebrand
              and nothing on voice guidelines, operational standards, or training are
              building a facade, not a franchise brand.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Building brand assets after selling franchises.</strong> Franchisees
              who join a system without a brand book will create their own standards. Those
              standards will not match yours or each other. Retroactively imposing brand
              standards on operating franchisees is exponentially harder than starting
              with them.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              <strong>Making the brand book too rigid.</strong> A brand book that specifies
              every detail but allows no local adaptation will frustrate franchisees. The
              best franchise brand systems define the non-negotiable elements clearly
              and identify the areas where franchisees have flexibility. This balance is
              covered in depth in our guide to{' '}
              <Link href="/franchise-branding/brand-standards-enforcement" className="text-amber font-semibold link-underline">
                brand standards enforcement
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Go Deeper on Franchise Branding"
        links={[
          { label: 'Brand Standards Enforcement', href: '/franchise-branding/brand-standards-enforcement', description: 'How to protect brand consistency across every franchisee.' },
          { label: 'Protecting Your Brand', href: '/franchise-branding/protecting-your-brand', description: 'Trademarks, IP, and the legal spine of franchise branding.' },
          { label: 'How It Works', href: '/how-it-works', description: 'The four phase franchise development process.' },
        ]}
      />

      <SectionCTA
        heading="Ready to Build Your Franchise Brand?"
        body="Take our two minute franchise readiness assessment. You will get a clear picture of how prepared your brand and business are for franchising."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or explore our franchise development services"
        secondaryHref="/services"
        variant="dark"
      />

      <StickyCTA
        text="Get Your Free Readiness Score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
