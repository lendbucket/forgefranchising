'use client'

import { useState } from 'react'
import Link from 'next/link'

const INDUSTRIES = [
  'Restaurants & Food',
  'Salons & Beauty',
  'Fitness & Gyms',
  'Home Services',
  'Health & Medical',
  'Retail',
  'Automotive',
  'Childcare & Education',
  'Cleaning',
  'Pet Care',
  'Other',
]

const ROYALTY_RATE = 0.06

type Results = {
  perUnitRoyalty: number
  at10: number
  at25: number
  at50: number
  readinessScore: number
  readinessLabel: string
}

function calculateReadinessScore(
  revenue: number,
  locations: number,
  margin: number
): { score: number; label: string } {
  let score = 0

  // Revenue scoring (0-30 points)
  if (revenue >= 2000000) score += 30
  else if (revenue >= 1000000) score += 25
  else if (revenue >= 500000) score += 18
  else if (revenue >= 250000) score += 10
  else score += 5

  // Locations scoring (0-30 points)
  if (locations >= 3) score += 30
  else if (locations >= 2) score += 22
  else score += 12

  // Margin scoring (0-40 points)
  if (margin >= 20) score += 40
  else if (margin >= 15) score += 32
  else if (margin >= 10) score += 22
  else if (margin >= 5) score += 12
  else score += 5

  let label: string
  if (score >= 75) label = 'Strong Franchise Potential'
  else if (score >= 50) label = 'Promising, Worth Exploring'
  else label = 'Needs Development'

  return { score, label }
}

export function CalculatorClient() {
  const [industry, setIndustry] = useState('')
  const [revenue, setRevenue] = useState('')
  const [locations, setLocations] = useState('')
  const [margin, setMargin] = useState('')
  const [startupCost, setStartupCost] = useState('')
  const [results, setResults] = useState<Results | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    const rev = parseFloat(revenue)
    const loc = parseInt(locations)
    const mar = parseFloat(margin)

    if (!industry || isNaN(rev) || isNaN(loc) || isNaN(mar) || rev <= 0 || loc <= 0) {
      return
    }

    const perUnitRoyalty = rev * ROYALTY_RATE
    const at10 = perUnitRoyalty * 10
    const at25 = perUnitRoyalty * 25
    const at50 = perUnitRoyalty * 50
    const { score, label } = calculateReadinessScore(rev, loc, mar)

    setResults({
      perUnitRoyalty,
      at10,
      at25,
      at50,
      readinessScore: score,
      readinessLabel: label,
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          businessName: `Calculator Lead (${industry})`,
          email,
          phone: 'Not provided',
          industry,
          reasonForFranchising: `Calculator results: Revenue $${parseInt(revenue).toLocaleString()}/location, ${locations} locations, ${margin}% margin. Readiness score: ${results?.readinessScore}/100. Illustrative royalty at 50 units: $${results?.at50?.toLocaleString()}.`,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us directly at ceo@36west.org.')
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly at ceo@36west.org.')
    } finally {
      setSubmitting(false)
    }
  }

  function formatCurrency(n: number): string {
    if (n >= 1000000) {
      return `$${(n / 1000000).toFixed(1)}M`
    }
    return `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
  }

  const inputClasses =
    'w-full px-4 py-3 border border-deep-cream bg-white text-espresso placeholder-muted-brown/50 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-colors min-h-[48px]'
  const labelClasses = 'block text-sm font-semibold text-espresso mb-2'

  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              Franchise Calculator
            </p>
            <h1 className="heading-1 mb-6">
              Estimate Your Franchise Royalty Income Potential
            </h1>
            <p className="body-large">
              Use this calculator to build an illustrative estimate of what your franchise system
              could generate in royalty income at different unit counts. These are projections based
              on the inputs you provide, not guarantees. Real numbers require a full feasibility analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div>
              <h2 className="heading-3 mb-8">Enter Your Business Details</h2>
              <form onSubmit={handleCalculate} className="space-y-6">
                <div>
                  <label htmlFor="industry" className={labelClasses}>
                    Industry
                  </label>
                  <select
                    id="industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="revenue" className={labelClasses}>
                    Current Annual Revenue Per Location ($)
                  </label>
                  <input
                    id="revenue"
                    type="number"
                    min="0"
                    step="1000"
                    placeholder="e.g. 750000"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="locations" className={labelClasses}>
                    Number of Existing Locations
                  </label>
                  <input
                    id="locations"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g. 2"
                    value={locations}
                    onChange={(e) => setLocations(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="margin" className={labelClasses}>
                    Current Net Margin (%)
                  </label>
                  <input
                    id="margin"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="e.g. 15"
                    value={margin}
                    onChange={(e) => setMargin(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="startupCost" className={labelClasses}>
                    Average Unit Startup Cost ($)
                  </label>
                  <input
                    id="startupCost"
                    type="number"
                    min="0"
                    step="1000"
                    placeholder="e.g. 250000"
                    value={startupCost}
                    onChange={(e) => setStartupCost(e.target.value)}
                    className={inputClasses}
                  />
                  <p className="text-xs text-muted-brown/60 mt-1">
                    Optional. Used for context only.
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Calculate Illustrative Estimates
                </button>
              </form>
            </div>

            {/* Results */}
            <div>
              {!results ? (
                <div className="card h-full flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-deep-cream mb-4">?</div>
                    <p className="text-muted-brown">
                      Fill in your business details and click calculate to see your illustrative estimates.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="card">
                    <p className="text-xs font-semibold text-amber uppercase tracking-widest mb-4">
                      Illustrative Royalty Income Estimates
                    </p>
                    <p className="text-sm text-muted-brown mb-6">
                      Based on a {(ROYALTY_RATE * 100).toFixed(0)}% royalty rate applied to your reported
                      per-unit revenue of {formatCurrency(parseFloat(revenue))}. These figures are
                      illustrative projections, not guarantees of future income.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-deep-cream">
                        <div>
                          <div className="text-sm font-semibold text-espresso">Per Unit Royalty</div>
                          <div className="text-xs text-muted-brown">Annual, illustrative</div>
                        </div>
                        <div className="text-2xl font-display font-bold text-espresso">
                          {formatCurrency(results.perUnitRoyalty)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-deep-cream">
                        <div>
                          <div className="text-sm font-semibold text-espresso">At 10 Franchise Units</div>
                          <div className="text-xs text-muted-brown">Annual royalty income estimate</div>
                        </div>
                        <div className="text-2xl font-display font-bold text-amber">
                          {formatCurrency(results.at10)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-deep-cream">
                        <div>
                          <div className="text-sm font-semibold text-espresso">At 25 Franchise Units</div>
                          <div className="text-xs text-muted-brown">Annual royalty income estimate</div>
                        </div>
                        <div className="text-2xl font-display font-bold text-amber">
                          {formatCurrency(results.at25)}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-espresso">
                        <div>
                          <div className="text-sm font-semibold text-cream">At 50 Franchise Units</div>
                          <div className="text-xs text-cream/60">Annual royalty income estimate</div>
                        </div>
                        <div className="text-2xl font-display font-bold text-amber">
                          {formatCurrency(results.at50)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Readiness Score */}
                  <div className="card">
                    <p className="text-xs font-semibold text-amber uppercase tracking-widest mb-4">
                      Franchise Readiness Score
                    </p>
                    <div className="flex items-center gap-6 mb-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E8E0D4"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#F87000"
                            strokeWidth="3"
                            strokeDasharray={`${results.readinessScore}, 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xl font-display font-bold text-espresso">
                            {results.readinessScore}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="heading-4">{results.readinessLabel}</div>
                        <p className="text-sm text-muted-brown mt-1">
                          Score based on revenue, location count, and margin inputs. This is an illustrative
                          indicator, not a definitive assessment.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email gate: reciprocity (we showed the score, now unlock the full breakdown) */}
                  {!submitted ? (
                    <div className="card bg-espresso border-espresso text-center">
                      <h3 className="heading-4 text-cream mb-3">
                        Unlock Your Full Franchise Economics Breakdown
                      </h3>
                      <p className="text-sm text-cream/70 mb-6 max-w-md mx-auto">
                        Enter your name and email to see the detailed analysis of what these numbers
                        mean for your business, plus get a personalized follow-up from our team.
                      </p>
                      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                          className="w-full px-4 py-3 border border-cream/20 bg-white/10 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-amber/50 min-h-[48px]"
                          style={{ borderRadius: '3px' }}
                        />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="w-full px-4 py-3 border border-cream/20 bg-white/10 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-amber/50 min-h-[48px]"
                          style={{ borderRadius: '3px' }}
                        />
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-primary w-full disabled:opacity-60"
                        >
                          {submitting ? 'Unlocking...' : 'Unlock Full Analysis'}
                        </button>
                        <p className="text-xs text-cream/40">No spam. We will follow up with your personalized analysis.</p>
                      </form>
                    </div>
                  ) : (
                    <>
                      {/* Detailed breakdown: unlocked after email */}
                      <div className="card">
                        <p className="text-xs font-semibold text-amber uppercase tracking-widest mb-4">
                          What These Numbers Mean
                        </p>
                        <div className="space-y-3 text-sm text-muted-brown leading-relaxed">
                          <p>
                            The royalty income figures above represent the ongoing revenue you could collect as a
                            franchisor, assuming each franchise unit generates the same annual revenue you reported
                            ({formatCurrency(parseFloat(revenue))}) and pays a {(ROYALTY_RATE * 100).toFixed(0)}% royalty
                            on gross sales. A {(ROYALTY_RATE * 100).toFixed(0)}% royalty is a common industry benchmark,
                            though actual rates vary by industry and brand positioning.
                          </p>
                          <p>
                            These estimates do not account for franchisor operating expenses (staff, marketing fund
                            contributions, compliance costs, technology, or support infrastructure). Your actual net
                            income as a franchisor will be lower than the gross royalty figures shown here.
                          </p>
                          <p>
                            The readiness score is a simplified indicator based on three factors: your revenue per
                            location, number of existing locations, and net margin. A real feasibility analysis
                            considers dozens of additional variables including market demand, competitive landscape,
                            operational documentation, brand strength, and regulatory requirements.
                          </p>
                          <p className="font-semibold text-espresso">
                            All figures shown are illustrative estimates for educational purposes only. They are not
                            projections, promises, or guarantees of any kind.
                          </p>
                        </div>
                      </div>

                      {/* CTA after unlock */}
                      <div className="card bg-espresso border-espresso">
                        <h3 className="heading-4 text-cream mb-3">
                          Want Real Numbers? Get a Feasibility Analysis.
                        </h3>
                        <p className="text-sm text-cream/70 mb-6">
                          These illustrative estimates are a starting point. A real feasibility analysis from our
                          team evaluates your specific business model, market conditions, competitive landscape, and
                          unit economics to determine whether franchising is the right growth path.
                        </p>
                        <div className="bg-amber/10 border border-amber/30 p-4 mb-4" style={{ borderRadius: '3px' }}>
                          <p className="text-cream font-semibold text-sm">
                            We received your information and will be in touch within one business day.
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href="/contact" className="btn-primary flex-1 text-center">
                            Book a Free Feasibility Call
                          </Link>
                          <Link href="/is-my-business-franchisable" className="btn-secondary border-cream/30 text-cream hover:bg-cream hover:text-espresso flex-1 text-center">
                            Take the Full Assessment
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-espresso text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="heading-2 text-cream mb-6">
            Not Sure About Your Numbers? Talk to Us.
          </h2>
          <p className="body-large text-cream/70 mb-10 max-w-2xl mx-auto">
            The calculator gives you a rough sense of the opportunity. A feasibility call gives you a
            real answer. Book a free call and we will walk through your specific business model together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a Free Feasibility Call
            </Link>
            <Link href="/is-my-business-franchisable" className="btn-secondary border-cream/30 text-cream hover:bg-cream hover:text-espresso">
              Take the Readiness Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
