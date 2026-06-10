'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ScrollReveal'

const pillars = [
  {
    lead: 'Operator Built',
    body: 'Run by people who have built, scaled, and sold real businesses. Not consultants selling templates. Every system we design comes from operating experience, not theory.',
  },
  {
    lead: 'One Roof',
    body: 'Feasibility, FDD, operations, and franchise sales handled in one system instead of four vendors pointing at each other. One team, one process, one point of accountability.',
  },
  {
    lead: 'Software Backed',
    body: 'A modern platform behind every engagement, so documents, training, and franchisee onboarding live in one place. Not binders. Not shared drives. A system built for how businesses work today.',
  },
]

export function WhyForge() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-deep-cream">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <p className="eyebrow mb-4">Why Forge</p>
            <h2 className="heading-2">
              Built by Operators, Not by a Document Mill
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-0">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.lead} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className={`py-10 lg:py-0 lg:px-10 ${
                  i < pillars.length - 1
                    ? 'border-b lg:border-b-0 lg:border-r border-espresso/8'
                    : ''
                } ${i === 0 ? 'lg:pl-0' : ''} ${i === pillars.length - 1 ? 'lg:pr-0' : ''}`}
              >
                <p className="font-display font-bold text-espresso text-2xl sm:text-3xl mb-4" style={{ letterSpacing: '-0.02em', lineHeight: '1.15' }}>
                  {pillar.lead}
                </p>
                <p className="text-muted-brown text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <Link href="/about" className="btn-secondary">
              Learn How We Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
