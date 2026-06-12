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
  title: 'Protect Your Franchise Brand',
  description:
    'Why trademarks are the legal spine of franchising. Federal registration, Item 13 of the FDD, policing the mark, and protecting your franchise IP before selling units.',
  path: '/franchise-branding/protecting-your-brand',
})

export default function ProtectingYourBrandPage() {
  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Protecting Your Franchise Brand: Trademarks and IP',
            description: 'Why trademarks are the legal spine of franchising. Federal registration, Item 13 of the FDD, policing the mark, and protecting your franchise IP before selling units.',
            author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
            publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/franchise-branding/protecting-your-brand` },
            url: `${SITE_URL}/franchise-branding/protecting-your-brand`,
          }),
        }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[
            { label: 'Franchise Branding', href: '/franchise-branding' },
            { label: 'Protecting Your Brand' },
          ]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Brand Protection</p>
            <h1 className="heading-1 mb-8">
              Protecting Your Franchise Brand: Trademarks and IP
            </h1>
            <p className="body-large mb-6">
              Trademarks are the legal spine of franchising. Without registered intellectual
              property, you do not have a franchise. You have a license to use a name that
              anyone else can claim. Every franchise system starts with trademark protection,
              and the franchisors who skip this step create legal exposure that can unravel
              the entire system.
            </p>
            <p className="body-large mb-8">
              This guide covers the trademark fundamentals every franchisor must understand:
              federal registration, the FDD disclosure requirements, policing the mark, and
              what happens to systems with weak IP. This is educational information, not
              legal advice. Work with a qualified franchise attorney on your specific
              trademark strategy.
            </p>

            <KeyTakeaways
              items={[
                'Federal trademark registration is effectively required before selling franchise units',
                'Item 13 of the FDD requires detailed disclosure of your trademark status and rights',
                'Policing your mark is an ongoing obligation, not a one time filing',
                'Weak trademark protection undermines the entire franchise value proposition',
                'Always work with a franchise attorney on trademark strategy and registration',
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
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
              alt="Franchise trademark registration and intellectual property protection documents"
              width={1200}
              height={600}
              className="w-full h-auto mb-10"
              style={{ borderRadius: '4px' }}
            />

            <h2 className="heading-2 mb-6">Why Trademarks Are Non-Negotiable in Franchising</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              A franchise is, at its core, a license to use a trademark. The FTC Franchise
              Rule defines a franchise partly by the fact that the franchisee operates
              under the franchisor's trademark or trade name. Without that trademark,
              the legal structure that makes franchising work collapses.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              But trademark protection in franchising goes beyond legal compliance. When
              a franchisee invests $200,000 or more to open a unit, they are betting that
              your brand name has value in their market. If someone else can use the same
              name, or a confusingly similar one, that investment is at risk. Trademark
              registration is how you protect the asset that every franchisee is paying for.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Understanding{' '}
              <Link href="/franchise-branding/why-brand-matters" className="text-amber font-semibold link-underline">
                why brand matters in franchising
              </Link>{' '}
              makes the trademark requirement intuitive. If the brand is the product, the
              trademark is the title deed. You would not sell a house without proving you
              own it. Do not sell a franchise without proving you own the brand.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Federal Trademark Registration: Before the First Unit</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Federal trademark registration through the United States Patent and Trademark
              Office (USPTO) provides nationwide protection for your brand name, logo, and
              other distinctive elements. The registration process typically takes 8 to 14
              months from initial application to final registration, which is one reason
              trademark filing should happen early in the franchise development timeline.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Before filing, a comprehensive trademark search is essential. This search
              identifies existing registrations, pending applications, and common law
              uses that could conflict with your mark. Discovering a conflict after you
              have printed signage, built a website, and prepared your FDD is exponentially
              more expensive than discovering it before.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Your franchise attorney will advise on the appropriate trademark classes for
              your business. Most franchise systems file in at least two classes: one for
              the products or services the franchisee delivers to customers, and one for
              the franchise services the franchisor provides to franchisees. Some systems
              file in additional classes to protect brand extensions, proprietary products,
              or technology platforms.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The cost of federal trademark registration ranges from $250 to $350 per
              class for USPTO filing fees, plus attorney fees of $1,500 to $3,000 for
              a straightforward filing. That investment protects an asset worth orders
              of magnitude more. Trademark registration is addressed in the{' '}
              <Link href="/how-it-works" className="text-amber font-semibold link-underline">
                Structure phase of our franchise development process
              </Link>.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Item 13: Trademark Disclosure in the FDD</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Item 13 of the Franchise Disclosure Document requires detailed disclosure
              about your trademarks. This is one of the items that state franchise
              examiners review most carefully, and it is one of the items that
              sophisticated franchise buyers scrutinize during due diligence.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Item 13 must disclose the principal trademarks the franchisee will use,
              the registration status of each mark (pending, registered, or unregistered),
              any known challenges or infringement claims, agreements that significantly
              limit the franchisor's rights to use or license the marks, and whether the
              franchisor is required to protect the franchisee's right to use the marks.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              A clean Item 13 with fully registered trademarks signals to prospective
              franchisees that the franchisor has invested in protecting the brand they
              are buying into. An Item 13 with pending or unregistered marks raises
              questions about the franchisor's commitment to IP protection and creates
              uncertainty about the long-term security of the brand.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              For a detailed overview of the full FDD, including Item 13 in context, read
              our guide on the{' '}
              <Link href="/blog/franchise-disclosure-document" className="text-amber font-semibold link-underline">
                Franchise Disclosure Document
              </Link>.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Policing the Mark: An Ongoing Obligation</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Trademark registration is not a one time event. It creates an ongoing
              obligation to police and enforce the mark. If you allow others to use your
              mark without authorization, or if you fail to enforce consistent use among
              your franchisees, you risk weakening or losing your trademark rights.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Policing your mark involves several activities: monitoring trademark filings
              for potentially conflicting applications, conducting periodic internet
              searches for unauthorized use of your brand name and logo, enforcing
              trademark usage guidelines with your own franchisees, and taking action
              against infringers through cease and desist letters and, when necessary,
              legal proceedings.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The connection to{' '}
              <Link href="/franchise-branding/brand-standards-enforcement" className="text-amber font-semibold link-underline">
                brand standards enforcement
              </Link>{' '}
              is direct. When franchisees modify your logo, use unauthorized color
              schemes, or create their own marketing materials that deviate from brand
              standards, they are technically misusing your trademark. Consistent brand
              standards enforcement within the system is part of your trademark policing
              obligation.
            </p>

            <h2 className="heading-2 mb-6 mt-12">What Happens to Systems With Weak IP</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              Franchise systems with weak trademark protection face predictable problems.
              Competitors or unaffiliated businesses use similar names, creating customer
              confusion and diluting the brand. Former franchisees continue operating
              under the brand name after their agreement expires, undermining the
              exclusive territorial rights of active franchisees. State franchise
              examiners delay or deny registration, preventing the franchisor from
              selling in key markets.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              In the worst cases, a franchisor discovers that another party has superior
              rights to the mark. This scenario, sometimes called a "knockout" situation,
              can force a complete rebrand of the franchise system, including every
              existing franchisee location. The financial and operational consequences
              are devastating.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              The lesson is clear: invest in trademark protection early, register before
              you sell, and police continuously. The cost of proper trademark protection
              is a fraction of the cost of the problems that arise without it.
            </p>

            <h2 className="heading-2 mb-6 mt-12">Beyond Trademarks: Other IP Considerations</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              While trademarks are the primary IP concern in franchising, other
              intellectual property rights may also be relevant. Trade secrets (your
              proprietary recipes, processes, or formulas), copyrights (your operations
              manual, training materials, and marketing content), and patents (proprietary
              equipment or technology) may all require protection.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Your franchise agreement should include comprehensive IP provisions that
              require the franchisee to protect your trade secrets, restrict them from
              using your copyrighted materials outside the franchise relationship, and
              establish clear ownership of any IP developed during the franchise term.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              Again, this is an area where qualified franchise counsel is essential. IP
              law is complex, jurisdiction specific, and high stakes. The franchise
              attorney who prepares your FDD should also advise on your comprehensive
              IP strategy. Learn more about the legal framework in our{' '}
              <Link href="/blog/protect-brand-trademarks" className="text-amber font-semibold link-underline">
                trademark protection guide for franchisors
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Go Deeper on Franchise Branding"
        links={[
          { label: 'Why Brand Matters', href: '/franchise-branding/why-brand-matters', description: 'The economic case for brand as the primary product in franchising.' },
          { label: 'Building a Franchise Brand', href: '/franchise-branding/building-a-franchise-brand', description: 'How to codify an owner operated identity into a scalable brand system.' },
          { label: 'The Complete Brand Pillar', href: '/franchise-branding', description: 'Return to the franchise branding hub for the full picture.' },
        ]}
      />

      <SectionCTA
        heading="Is Your Brand Protected for Franchising?"
        body="Take our two minute franchise readiness assessment. You will get a clear picture of how prepared your brand, trademarks, and business are for franchise development."
        buttonText="Get Your Free Readiness Score"
        buttonHref="/is-my-business-franchisable"
        secondaryText="Or learn how our process handles trademark strategy"
        secondaryHref="/how-it-works"
        variant="dark"
      />

      <StickyCTA
        text="Get Your Free Readiness Score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
