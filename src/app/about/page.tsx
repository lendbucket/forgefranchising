import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { MISSION_STATEMENT } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'About Us',
  description:
    'Forge Franchising Group is an operator built franchise development firm. We turn proven local businesses into national franchise brands with real experience, modern software, and a documented process.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
            <h1 className="heading-1 mb-8">
              Operator Built. Not Consultant Assembled.
            </h1>
            <p className="body-large mb-6">
              Forge Franchising Group was founded on a simple observation: most franchise development firms
              have never actually operated a franchise. They have never opened a second location, trained
              a franchisee, or dealt with a state examiner who rejected their FDD filing.
            </p>
            <p className="body-large">
              We come from the operating side. We have built businesses, managed multi-unit operations,
              and learned what actually matters when you are trying to replicate something that works.
              That experience shapes everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="body-large mb-8">{MISSION_STATEMENT}</p>
              <h3 className="heading-4 mb-4">What that means in practice:</h3>
              <ul className="space-y-4">
                {[
                  'We say no to businesses that are not ready. We would rather lose a deal than set up an owner to fail.',
                  'We build systems, not slide decks. Every deliverable is something the owner actually uses.',
                  'We stay involved past the FDD. Franchise development is not done when the documents are filed. It is done when franchisees are operating successfully.',
                  'We charge for outcomes, not hours. Our engagement tiers are designed around what needs to get built, not how long we sit in a room.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-2 mb-6">Why We Are Different</h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'We have operated businesses',
                    body: 'We do not just consult. We have run operations, managed P&Ls, hired teams, and dealt with the day to day reality of multi-unit businesses. That perspective is impossible to fake and impossible to replace.',
                  },
                  {
                    title: 'We build with technology',
                    body: 'Most franchise consultants hand you a Word document and an invoice. We use modern software to build systems that actually scale. From your operations manual to your franchisee portal, everything is built for how businesses work today.',
                  },
                  {
                    title: 'We follow a documented process',
                    body: 'We do not improvise. Every franchise we develop moves through the same four phases: Feasibility, Structure, Launch, and Scale. This process is proven, repeatable, and transparent.',
                  },
                  {
                    title: 'We are selective',
                    body: 'We do not take every client who contacts us. We take businesses that are genuinely ready to franchise and owners who are ready to lead a network. This selectivity protects both our reputation and the owners we work with.',
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="heading-4 mb-2">{item.title}</h3>
                    <p className="text-muted-brown leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-6">Our Approach to Franchise Development</h2>
          <p className="body-large max-w-3xl mx-auto mb-12">
            We believe franchise development should be honest, thorough, and results driven. Here is how
            we approach every engagement.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency First',
                body: 'We publish our process, our methodology, and our educational content for free. We believe the best clients come from owners who already understand what franchising requires. If you can do it yourself after reading our guides, more power to you.',
              },
              {
                title: 'Education Over Sales',
                body: 'We teach before we sell. Every piece of content we create, from blog posts to tools to state law guides, is designed to give you real knowledge. By the time you contact us, you should already feel confident about what you are getting into.',
              },
              {
                title: 'Built to Last',
                body: 'We do not cut corners on compliance, documentation, or systems. A franchise built on shortcuts will collapse under the weight of its first ten franchisees. We build franchise systems that hold up at scale.',
              },
            ].map((item) => (
              <div key={item.title} className="card text-left">
                <h3 className="heading-4 mb-3">{item.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Let Us Show You What Franchise Development Should Look Like"
        body="Book a free call. We will walk through your business, your goals, and what the franchise development process looks like for a concept like yours."
        buttonText="Book a Free Feasibility Call"
        buttonHref="/contact"
      />
    </>
  )
}
