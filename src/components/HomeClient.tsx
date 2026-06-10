'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ScrollReveal'
import { OpenLoop } from '@/components/OpenLoop'
import { StickyCTA } from '@/components/StickyCTA'
import { WhyForge } from '@/components/WhyForge'

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
      {/* STAKES: Short, punchy problem statement. Image-led asymmetric layout. */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Photograph: real business scenario */}
            <div className="lg:col-span-5 lg:order-2">
              <ScrollReveal>
                <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '4px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                    alt="Forge Franchising client reviewing franchise compliance and FDD documents"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 mix-blend-multiply bg-amber/10" />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <ScrollReveal>
                <p className="eyebrow mb-6">The Problem</p>
                <h2 className="heading-2 mb-8">
                  Franchising Is a Regulated Industry. Most Business Owners Walk In Blind.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <p className="body-large mb-8">
                  You know your business inside and out. But franchising requires federal disclosure documents,
                  state registrations, legal entity structures, and compliance systems that have nothing to do
                  with running a great restaurant, salon, or gym.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className="pull-quote text-espresso my-10">
                  That gap between operating expertise and franchise development expertise is where most attempts fail.
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <p className="body-large">
                  Owners hire the wrong consultant, get handed a stack of templates, spend $50,000 to $150,000 on legal
                  work that sits in a drawer, and never sell a single franchise. We built Forge to fix that.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Open loop pulling to process page */}
      <OpenLoop
        teaser="There is one structural mistake that kills most franchise systems before they reach ten units. Our four-phase process was designed to prevent it."
        linkText="See the four-phase process"
        href="/how-it-works"
        variant="section"
      />

      {/* AUTHORITY: Process overview. Horizontal timeline, not card grid. */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <p className="eyebrow mb-4">Our Process</p>
              <h2 className="heading-2 mb-6">Four Phases. One System. Zero Guesswork.</h2>
              <p className="body-large">
                Every franchise we develop moves through the same proven sequence, from feasibility through scale.
              </p>
            </div>
          </ScrollReveal>
          {/* Timeline layout on desktop, stacked on mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i as 1 | 2 | 3 | 4}>
                <div className="bg-cream p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg phase-cell">
                  {/* Phase number with horizontal connector */}
                  <div className="relative flex items-center mb-6">
                    <span className="font-display font-bold text-amber relative z-10 bg-cream pr-3" style={{ fontSize: '2.5rem', letterSpacing: '-0.03em', lineHeight: '1' }}>
                      {phase.number}
                    </span>
                    {/* Desktop horizontal hairline */}
                    {i < phases.length - 1 && (
                      <span className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-espresso/10" style={{ transform: 'translateY(-50%)' }} aria-hidden="true" />
                    )}
                    {/* Mobile vertical connector */}
                    {i < phases.length - 1 && (
                      <span className="lg:hidden absolute left-5 top-full w-px h-6 bg-espresso/10 sm:hidden" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="heading-4 mb-3">{phase.title}</h3>
                  <p className="text-muted-brown text-sm leading-relaxed">{phase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link href="/how-it-works" className="btn-secondary">
                Explore the Full Process
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY FORGE: Differentiator section */}
      <WhyForge />

      {/* MICRO-COMMITMENT: Assessment teaser. Full-bleed dark section. */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-espresso text-cream dark-depth">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="eyebrow mb-4">Are You Ready?</p>
                <h2 className="heading-2 text-cream mb-6">The Real Question Is Not "Can I Franchise?" It Is "Should I, and What Would It Take?"</h2>
                <p className="text-lg text-cream/50 leading-relaxed mb-10">
                  Our free assessment evaluates seven readiness factors specific to your business.
                  Two minutes, no login, and you get a score with specific recommendations.
                </p>
                <Link href="/is-my-business-franchisable" className="btn-primary">
                  Take the Free Assessment
                </Link>
                <p className="text-cream/30 text-xs mt-3">No email required. Results are immediate.</p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={1}>
                <div className="bg-cream/5 border border-cream/10 p-8 sm:p-10" style={{ borderRadius: '4px' }}>
                  <h3 className="heading-4 text-cream mb-6">7 signs your business is ready:</h3>
                  <ul className="space-y-4">
                    {[
                      'Profitable for at least two years',
                      'Runs without you in daily operations',
                      'Someone new can learn your system in 90 days or less',
                      'Real demand for your product or service in other markets',
                      'A brand people recognize and trust',
                      'Unit economics that support a strong franchisee return',
                      'You are ready to lead a network, not just a location',
                    ].map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-cream/60 text-sm leading-relaxed">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES: Text-led left + compact grid right */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="eyebrow mb-4">Industries We Serve</p>
                <h2 className="heading-2 mb-6">Franchise Development Built for Your Industry</h2>
                <p className="body-large mb-8">
                  We work with owners across ten industries that have strong unit economics,
                  repeatable operations, and genuine demand for expansion.
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

      {/* EDUCATION: Blog teasers. Asymmetric featured + two-column. */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-deep-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">Resources</p>
              <h2 className="heading-2 mb-6">Learn Enough to Have an Informed Conversation</h2>
              <p className="body-large">
                Everything we know about franchising, published for free. Read the guides, use the tools,
                and judge any franchise consultant, including us, from a position of knowledge.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured post: large */}
          <ScrollReveal>
            <Link href="/blog/how-to-franchise-your-business" className="group block mb-8">
              <div className="grid lg:grid-cols-2 gap-8 bg-white p-8 sm:p-10 transition-all duration-300 hover:shadow-lg" style={{ borderRadius: '4px', border: '1px solid rgba(107, 87, 80, 0.08)' }}>
                <div className="relative aspect-[16/10] overflow-hidden" style={{ borderRadius: '3px' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                    alt="Forge Franchising guide to franchise development strategy and business planning"
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 mix-blend-multiply bg-amber/5" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="eyebrow">Complete Guide</span>
                  <h3 className="heading-3 mt-4 mb-3 group-hover:text-amber transition-colors">
                    How to Franchise Your Business in 2026
                  </h3>
                  <p className="text-muted-brown text-base leading-relaxed mb-4">
                    Most owners start with the legal work. That is backwards. This guide covers feasibility,
                    structure, FDD filing, and your first franchise sale in the right order.
                  </p>
                  <span className="text-amber text-sm font-semibold">
                    Read the full guide
                    <svg className="inline-block ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Two secondary posts */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'What a Franchise Disclosure Document Is and Why It Matters',
                href: '/blog/franchise-disclosure-document-explained',
                category: 'Education',
                teaser: 'The FDD is not a formality. It is the single document that determines whether your franchise can legally sell.',
              },
              {
                title: 'How Much It Costs to Franchise a Business',
                href: '/blog/cost-to-franchise-a-business',
                category: 'Finance',
                teaser: 'Anyone quoting $25,000 for a full franchise package is cutting corners you cannot afford. Here is what real development costs.',
              },
            ].map((post, i) => (
              <ScrollReveal key={post.href} delay={(i + 1) as 1 | 2}>
                <Link href={post.href} className="card-interactive group block h-full">
                  <span className="eyebrow">{post.category}</span>
                  <h3 className="heading-4 mt-4 mb-3 group-hover:text-amber transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-brown leading-relaxed mb-4">{post.teaser}</p>
                  <span className="text-amber text-sm font-medium link-underline">
                    Read the full guide
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link href="/blog" className="btn-secondary">
                Browse All Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky CTA: appears after value delivery */}
      <StickyCTA
        text="Get Your Free Readiness Score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
