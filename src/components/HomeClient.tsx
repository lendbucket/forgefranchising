'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CountUp } from '@/components/CountUp'

type Phase = {
  number: string
  title: string
  description: string
}

type Industry = {
  name: string
  href: string
}

export function HomeClient({ phases, industries }: { phases: Phase[]; industries: Industry[] }) {
  return (
    <>
      {/* Problem / Solution */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-6">The Challenge</p>
                <h2 className="heading-2 mb-8">
                  Most Business Owners Have No Idea How to Franchise. That Is the Whole Point.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <p className="body-large mb-6">
                  You spent years perfecting your business. The recipes, the systems, the culture, the way you hire and train.
                  Franchising is how you let other people run that same playbook in new markets, on their capital, with your brand on the building.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <p className="body-large mb-6">
                  But franchising is not just opening more locations. It is a regulated industry with federal disclosure requirements,
                  state registrations, legal structures, and compliance obligations that most business owners have never encountered.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <div className="pull-quote text-espresso my-10">
                  That complexity is exactly why most franchise development attempts stall or fail.
                </div>
              </ScrollReveal>
              <ScrollReveal delay={4}>
                <p className="body-large">
                  Owners try to figure it out alone, hire the wrong consultant, or get handed a binder full of templates.
                  We exist to fix that.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="bg-deep-cream p-8 sm:p-10" style={{ borderRadius: '4px' }}>
                  <h3 className="heading-4 mb-6">What happens without a system:</h3>
                  <ul className="space-y-4">
                    {[
                      'You spend $50,000 to $150,000 on legal documents that sit in a drawer',
                      'Your FDD has gaps that a state examiner will reject',
                      'Your operations manual reads like a rough draft, not a training tool',
                      'You have no franchise sales process and no qualified leads',
                      'Your first franchisee fails because the system was never really built',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5 text-xs font-bold text-espresso"
                          style={{ border: '1px solid rgba(40, 16, 16, 0.15)', borderRadius: '2px' }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-muted-brown text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Hairline divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hairline" />
      </div>

      {/* Process Overview */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <p className="eyebrow mb-4">Our Process</p>
              <h2 className="heading-2 mb-6">Four Phases. One System. Zero Guesswork.</h2>
              <p className="body-large">
                Every franchise we develop moves through the same four phases. This is not a menu of services
                you pick from. It is a proven sequence that builds a compliant, sellable franchise system.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i as 1 | 2 | 3 | 4}>
                <div className="card-interactive h-full">
                  <div className="stat-number mb-4" style={{ fontSize: '2.5rem' }}>{phase.number}</div>
                  <h3 className="heading-4 mb-3">{phase.title}</h3>
                  <p className="text-muted-brown text-sm leading-relaxed">{phase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12">
              <Link href="/how-it-works" className="btn-primary">
                Explore the Full Process
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section - Dark Espresso */}
      <section className="section-padding bg-espresso text-cream">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="eyebrow mb-4">
                The Franchise Industry
              </p>
              <h2 className="heading-2 text-cream mb-6">
                Franchising Built the Most Recognized Brands on Earth
              </h2>
              <p className="text-lg text-cream/50 leading-relaxed max-w-2xl mx-auto">
                The franchise model has created more millionaires than any other business structure in history.
                It works because it turns one owner&apos;s proven formula into a documented system that other
                operators can follow.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-16">
            {[
              { stat: '$827B', label: 'Annual franchise industry output in the United States' },
              { stat: '800,000+', label: 'Franchise establishments operating across the country' },
              { stat: '8.5M', label: 'Jobs created by the franchise industry every year' },
            ].map((item) => (
              <ScrollReveal key={item.stat}>
                <div className="text-center">
                  <CountUp end={item.stat} className="stat-number" />
                  <p className="stat-label text-cream/40">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="eyebrow mb-4">Industries We Serve</p>
                <h2 className="heading-2 mb-6">Franchise Development for Every Proven Business Model</h2>
                <p className="body-large mb-8">
                  We work with business owners across industries that have strong unit economics, repeatable operations,
                  and real demand for expansion.
                </p>
                <Link href="/industries" className="btn-secondary">
                  View All Industries
                </Link>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {industries.map((industry, i) => (
                  <ScrollReveal key={industry.href} delay={(i % 4) as 1 | 2 | 3 | 4}>
                    <Link
                      href={industry.href}
                      className="card-interactive block py-5 px-6 group"
                    >
                      <span className="text-sm font-semibold text-espresso group-hover:text-amber transition-colors">
                        {industry.name}
                      </span>
                      <svg className="inline-block ml-2 w-4 h-4 text-muted-brown/30 group-hover:text-amber group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Prompt */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="eyebrow mb-4">Are You Ready?</p>
                <h2 className="heading-2 mb-6">Not Sure If Your Business Can Franchise?</h2>
                <p className="body-large mb-6">
                  Most owners ask the wrong question. They ask &quot;can I franchise?&quot; when the real question is
                  &quot;should I franchise, and what would it take?&quot;
                </p>
                <p className="body-large mb-10">
                  Take our free assessment to get a clear, honest answer in under five minutes.
                  No sales pitch attached.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/is-my-business-franchisable" className="btn-primary">
                    Take the Free Assessment
                  </Link>
                  <Link href="/calculator" className="btn-secondary">
                    Try the Calculator
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-6">
              <ScrollReveal delay={1}>
                <div className="bg-white p-8 sm:p-10" style={{ borderRadius: '4px', border: '1px solid rgba(107, 87, 80, 0.08)' }}>
                  <h3 className="heading-4 mb-6">7 signs your business is ready to franchise:</h3>
                  <ul className="space-y-4">
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
                        <span className="text-muted-brown text-sm leading-relaxed">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">Learn</p>
              <h2 className="heading-2 mb-6">Free Franchise Development Resources</h2>
              <p className="body-large">
                Everything we know about franchising, published for free. Read the guides, use the tools,
                and learn enough to have an informed conversation with any franchise consultant, including us.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((post, i) => (
              <ScrollReveal key={post.href} delay={(i + 1) as 1 | 2 | 3}>
                <Link href={post.href} className="card-interactive group block h-full">
                  <span className="eyebrow">{post.category}</span>
                  <h3 className="heading-4 mt-4 mb-4 group-hover:text-amber transition-colors">{post.title}</h3>
                  <span className="text-amber text-sm font-medium link-underline">
                    Read the guide
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-10">
              <Link href="/blog" className="btn-secondary">
                Browse All Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
