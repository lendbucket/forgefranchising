import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Important Disclosures',
  description: 'Franchise offering disclosures, earnings disclaimers, and legal notices for Forge Franchising Group. Read before requesting franchise information.',
  path: '/own-a-franchise/disclosures',
})

export default function DisclosuresPage() {
  return (
    <>
      <section className="bg-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cream/50">
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li className="flex items-center gap-2"><span className="text-cream/30">/</span><Link href="/own-a-franchise" className="hover:text-cream transition-colors">Own a Franchise</Link></li>
              <li className="flex items-center gap-2"><span className="text-cream/30">/</span><span className="text-cream font-medium">Disclosures</span></li>
            </ol>
          </nav>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <h1 className="heading-1 text-cream mb-6">Important Disclosures</h1>
          <p className="text-lg text-cream/60 leading-relaxed">
            Forge Franchising Group is committed to full transparency and compliance with federal
            and state franchise laws. Please review the following disclosures carefully.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="heading-2 mb-6">Franchise Offering Disclaimer</h2>
            <div className="card">
              <p className="text-muted-brown leading-relaxed">
                This website and the information contained herein do not constitute an offer to sell,
                or the solicitation of an offer to buy, a franchise. Forge Franchising Group offers
                franchises solely by means of its Franchise Disclosure Document (FDD). The FDD contains
                detailed information about the franchise system, the franchisor, fees, obligations, and
                other material terms.
              </p>
              <p className="text-muted-brown leading-relaxed mt-4">
                Certain jurisdictions require registration or other actions before franchises can be
                offered or sold there. Forge Franchising Group will not offer or sell a franchise in
                any jurisdiction unless we are first in compliance with applicable pre-sale registration
                and disclosure requirements.
              </p>
              <p className="text-muted-brown leading-relaxed mt-4">
                If you are a resident of, or wish to acquire a franchise to be located in, one of
                these states, we will not offer you a franchise unless and until we have complied
                with applicable legal requirements in your state.
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-2 mb-6">Earnings Disclaimer</h2>
            <div className="card">
              <p className="text-muted-brown leading-relaxed">
                Any financial figures, revenue examples, income illustrations, or business model
                descriptions referenced on this website, in our marketing materials, or during
                conversations with our team are provided for educational and illustrative purposes only.
                They are not a guarantee, projection, or prediction of your earnings or financial performance.
              </p>
              <p className="text-muted-brown leading-relaxed mt-4">
                Individual results vary significantly based on market conditions, individual effort,
                business acumen, local economic factors, and many other variables. There is no assurance
                that you will earn any particular amount or achieve any specific financial outcome.
              </p>
              <p className="text-muted-brown leading-relaxed mt-4">
                Forge Franchising Group does not make any financial performance representations
                except as set out in Item 19 of its Franchise Disclosure Document. You should rely
                only on the information in our FDD and your own due diligence when evaluating this
                franchise opportunity.
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-2 mb-6">FTC Franchise Rule</h2>
            <div className="card">
              <p className="text-muted-brown leading-relaxed">
                The sale of franchises in the United States is regulated by the Federal Trade Commission
                under the Franchise Rule (16 CFR Part 436). This rule requires franchisors to provide
                prospective franchisees with a Franchise Disclosure Document at least 14 calendar days
                before the prospect signs a binding agreement or pays any money to the franchisor.
              </p>
              <p className="text-muted-brown leading-relaxed mt-4">
                Some states impose additional requirements beyond the FTC Franchise Rule, including
                franchise registration, relationship laws, and other regulations. Forge Franchising
                Group complies with all applicable federal and state franchise laws.
              </p>
            </div>
          </div>

          <div>
            <h2 className="heading-2 mb-6">No Guarantee of Success</h2>
            <div className="card">
              <p className="text-muted-brown leading-relaxed">
                Owning and operating a franchise involves substantial risk. The success of any franchise
                depends on many factors, including the franchisee's own efforts, local market conditions,
                competition, and general economic conditions. Forge Franchising Group does not guarantee
                any level of success, profitability, or return on investment.
              </p>
              <p className="text-muted-brown leading-relaxed mt-4">
                Before investing in any franchise, we strongly recommend that you consult with a
                qualified franchise attorney and a financial advisor, review the FDD thoroughly,
                and speak with existing franchisees listed in our disclosure document.
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-brown mb-6">Have questions about these disclosures?</p>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
