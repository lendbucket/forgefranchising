import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { SectionCTA } from '@/components/SectionCTA'

export const metadata = createMetadata({
  title: 'Forge Franchising Group | Turn Your Business Into a Franchise',
  description:
    'Forge Franchising Group turns proven local businesses into national franchise brands. Operator built franchise development with real experience, modern software, and a documented process.',
  path: '',
})

const phases = [
  {
    number: '01',
    title: 'Feasibility',
    description:
      'We evaluate your business model, unit economics, and market potential. You get a clear answer on whether franchising makes financial sense and a roadmap if it does.',
  },
  {
    number: '02',
    title: 'Structure',
    description:
      'We build the legal and operational framework: your FDD, franchise agreement, operations manual, and franchisor entity. Everything an attorney reviews and the state regulators require.',
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'We prepare your franchise for market. Registration filings, training programs, franchise sales materials, and the systems your first franchisees need from day one.',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'We help you sell franchises, onboard owners, and build the infrastructure that supports 10, 50, or 100 units without losing what made the original business work.',
  },
]

const stats = [
  { number: '4', label: 'Phase Process' },
  { number: '50+', label: 'State Compliance' },
  { number: '100%', label: 'Operator Built' },
]

const industries = [
  { name: 'Restaurants & Food', href: '/industries/restaurants' },
  { name: 'Salons & Beauty', href: '/industries/salons-beauty' },
  { name: 'Fitness & Gyms', href: '/industries/fitness' },
  { name: 'Home Services', href: '/industries/home-services' },
  { name: 'Health & Medical', href: '/industries/health-medical' },
  { name: 'Retail', href: '/industries/retail' },
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'Childcare & Education', href: '/industries/childcare-education' },
  { name: 'Cleaning', href: '/industries/cleaning' },
  { name: 'Pet Care', href: '/industries/pet-care' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-espresso overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso to-espresso/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-6">
              Franchise Development, Operator Built
            </p>
            <h1 className="heading-1 text-cream mb-8 text-balance">
              Turn Your Proven Business Into a Franchise Brand That Scales
            </h1>
            <p className="text-xl sm:text-2xl text-cream/70 leading-relaxed mb-10 max-w-2xl">
              You built a business that works. We build the system that lets other people replicate it.
              No binders. No guesswork. A documented process backed by operating experience and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg py-5 px-10">
                Book a Free Feasibility Call
              </Link>
              <Link href="/how-it-works" className="btn-secondary border-cream/30 text-cream hover:bg-cream hover:text-espresso text-lg py-5 px-10">
                See How It Works
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-display font-bold text-amber">{stat.number}</div>
                <div className="text-sm text-cream/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Most Business Owners Have No Idea How to Franchise. That Is the Whole Point.
              </h2>
              <p className="body-large mb-6">
                You spent years perfecting your business. The recipes, the systems, the culture, the way you hire and train.
                Franchising is how you let other people run that same playbook in new markets, on their capital, with your brand on the building.
              </p>
              <p className="body-large mb-6">
                But franchising is not just opening more locations. It is a regulated industry with federal disclosure requirements,
                state registrations, legal structures, and compliance obligations that most business owners have never encountered.
              </p>
              <p className="body-large">
                That complexity is exactly why most franchise development attempts stall or fail.
                Owners try to figure it out alone, hire the wrong consultant, or get handed a binder full of templates.
                We exist to fix that.
              </p>
            </div>
            <div className="bg-deep-cream rounded-2xl p-10">
              <h3 className="heading-4 mb-6">What happens when you try to franchise without a system:</h3>
              <ul className="space-y-4">
                {[
                  'You spend $50,000 to $150,000 on legal documents that sit in a drawer',
                  'Your FDD has gaps that a state examiner will reject',
                  'Your operations manual reads like a rough draft, not a training tool',
                  'You have no franchise sales process and no qualified leads',
                  'Your first franchisee fails because the system was never really built',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-espresso/10 flex items-center justify-center mt-0.5">
                      <span className="text-espresso text-xs font-bold">{i + 1}</span>
                    </span>
                    <span className="text-muted-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">Our Process</p>
            <h2 className="heading-2 mb-6">Four Phases. One System. Zero Guesswork.</h2>
            <p className="body-large max-w-2xl mx-auto">
              Every franchise we develop moves through the same four phases. This is not a menu of services
              you pick from. It is a proven sequence that builds a compliant, sellable franchise system.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase) => (
              <div key={phase.number} className="card group hover:shadow-md transition-shadow">
                <div className="text-amber font-display text-4xl font-bold mb-4">{phase.number}</div>
                <h3 className="heading-4 mb-3">{phase.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-primary">
              Explore the Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">Industries We Serve</p>
            <h2 className="heading-2 mb-6">Franchise Development for Every Proven Business Model</h2>
            <p className="body-large max-w-2xl mx-auto">
              We work with business owners across industries that have strong unit economics, repeatable operations,
              and real demand for expansion. If your business works in one market, we can help you prove it works in fifty.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="card text-center hover:shadow-md hover:border-amber/30 transition-all group py-6"
              >
                <span className="text-sm font-semibold text-espresso group-hover:text-amber transition-colors">
                  {industry.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Education Authority */}
      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              How the Biggest Brands Franchised
            </p>
            <h2 className="heading-2 text-cream mb-6">
              Franchising Built the Most Recognized Brands on Earth
            </h2>
            <p className="text-xl text-cream/60 max-w-3xl mx-auto leading-relaxed">
              When McDonald&apos;s standardized its operations in the 1950s, it proved that a single location
              could become a repeatable system. That same principle applies to your business today.
              The franchise model has created more millionaires than any other business structure in history.
              It works because it turns one owner&apos;s proven formula into a documented system that other
              operators can follow.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                stat: '$827B',
                label: 'Annual franchise industry output in the United States',
              },
              {
                stat: '800,000+',
                label: 'Franchise establishments operating across the country',
              },
              {
                stat: '8.5M',
                label: 'Jobs created by the franchise industry every year',
              },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div className="text-4xl sm:text-5xl font-display font-bold text-amber mb-3">{item.stat}</div>
                <p className="text-cream/50 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Prompt */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Not Sure If Your Business Can Franchise?</h2>
              <p className="body-large mb-6">
                Most owners ask the wrong question. They ask &quot;can I franchise?&quot; when the real question is
                &quot;should I franchise, and what would it take?&quot; The answer depends on your unit economics,
                your operational systems, and your market potential.
              </p>
              <p className="body-large mb-8">
                Take our free assessment to get a clear, honest answer in under five minutes.
                No sales pitch attached. If franchising is not the right move, we will tell you that too.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/is-my-business-franchisable" className="btn-primary">
                  Take the Free Assessment
                </Link>
                <Link href="/calculator" className="btn-secondary">
                  Try the Franchise Calculator
                </Link>
              </div>
            </div>
            <div className="bg-deep-cream rounded-2xl p-10">
              <h3 className="heading-4 mb-6">7 signs your business is ready to franchise:</h3>
              <ul className="space-y-3">
                {[
                  'You have been profitable for at least two years',
                  'Your business model works without you running daily operations',
                  'You can teach someone to replicate your results in 90 days or less',
                  'There is demand for your product or service in other markets',
                  'You have a brand that people recognize and trust',
                  'Your unit economics support a franchisee earning a strong return',
                  'You are ready to lead a network, not just run a location',
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-brown text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">Learn</p>
            <h2 className="heading-2 mb-6">Free Franchise Development Resources</h2>
            <p className="body-large max-w-2xl mx-auto">
              Everything we know about franchising, published for free. Read the guides, use the tools,
              and learn enough to have an informed conversation with any franchise consultant, including us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Franchise Your Business: The Complete Guide',
                href: '/blog/how-to-franchise-your-business',
                category: 'Guide',
              },
              {
                title: 'What a Franchise Disclosure Document Is and Why It Matters',
                href: '/blog/franchise-disclosure-document',
                category: 'Education',
              },
              {
                title: 'How Much It Costs to Franchise a Business',
                href: '/blog/cost-to-franchise-a-business',
                category: 'Finance',
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="card group hover:shadow-md transition-all">
                <span className="text-amber text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                <h3 className="heading-4 mt-3 mb-4 group-hover:text-amber transition-colors">{post.title}</h3>
                <span className="text-amber text-sm font-medium">
                  Read the guide &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <SectionCTA
        heading="Ready to See If Your Business Can Franchise?"
        body="Book a free feasibility call with our team. We will review your business model, your numbers, and your goals. If franchising is a fit, we will show you the exact roadmap. If it is not, we will tell you why."
        buttonText="Book Your Free Call"
        buttonHref="/contact"
      />
    </>
  )
}
