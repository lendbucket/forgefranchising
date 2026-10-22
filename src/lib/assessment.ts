/**
 * Franchise readiness assessment, scored on the four pillars of the Forge
 * Franchise Readiness Method.
 *
 * Pure and typed so the assessment page and /api/assessment import the same
 * logic: the score a visitor sees is the score Forge receives.
 */

export type PillarKey = 'profitability' | 'systems' | 'brand' | 'replicability'
export type TierKey = 'strong' | 'promising' | 'not-ready'
export type BandKey = 'strong' | 'developing' | 'gap'

export type QuestionId =
  | 'profitable'
  | 'revenue'
  | 'owner-dependent'
  | 'systems'
  | 'brand'
  | 'years'
  | 'demand'
  | 'locations'

export type Option = { label: string; value: string; points: number }
export type Question = { id: QuestionId; pillar: PillarKey; question: string; options: Option[] }
export type Answers = Record<QuestionId, string>

export const PILLARS: { key: PillarKey; label: string }[] = [
  { key: 'profitability', label: 'Profitability and unit economics' },
  { key: 'systems', label: 'Systems and operations' },
  { key: 'brand', label: 'Brand strength and defensibility' },
  { key: 'replicability', label: 'Replicability and market demand' },
]

/** Two questions per pillar, in the order the method presents the pillars. */
export const QUESTIONS: Question[] = [
  {
    id: 'profitable',
    pillar: 'profitability',
    question: 'Is your business currently profitable?',
    options: [
      { label: 'Yes, consistently profitable', value: 'yes', points: 15 },
      { label: 'Break-even', value: 'break-even', points: 7 },
      { label: 'No, not yet profitable', value: 'no', points: 2 },
    ],
  },
  {
    id: 'revenue',
    pillar: 'profitability',
    question: 'What is your approximate annual revenue per location?',
    options: [
      { label: 'Under $250,000', value: 'lt250k', points: 3 },
      { label: '$250,000 to $500,000', value: '250k-500k', points: 6 },
      { label: '$500,000 to $1,000,000', value: '500k-1m', points: 10 },
      { label: 'Over $1,000,000', value: 'gt1m', points: 12 },
    ],
  },
  {
    id: 'owner-dependent',
    pillar: 'systems',
    question: 'Can your business operate without you managing daily operations?',
    options: [
      { label: 'Yes, it runs without me day to day', value: 'yes', points: 15 },
      { label: 'Partially. I am involved but not required for everything.', value: 'partially', points: 8 },
      { label: 'No, the business depends on me being there', value: 'no', points: 2 },
    ],
  },
  {
    id: 'systems',
    pillar: 'systems',
    question: 'Do you have documented systems and processes?',
    options: [
      { label: 'Comprehensive. Everything is documented and trainable.', value: 'comprehensive', points: 15 },
      { label: 'Some documentation exists, but there are gaps', value: 'some', points: 8 },
      { label: "Minimal. Most knowledge is in my head or my team's heads.", value: 'minimal', points: 4 },
      { label: 'None. We have no documented processes.', value: 'none', points: 1 },
    ],
  },
  {
    id: 'brand',
    pillar: 'brand',
    question: 'Do you have a recognizable brand in your local market?',
    options: [
      { label: 'Yes. People know us by name and reputation.', value: 'yes', points: 10 },
      { label: 'Somewhat. We have some brand recognition.', value: 'somewhat', points: 5 },
      { label: 'No. We are not well known yet.', value: 'no', points: 2 },
    ],
  },
  {
    id: 'years',
    pillar: 'brand',
    question: 'How many years has your business been operating?',
    options: [
      { label: 'Less than 1 year', value: 'lt1', points: 2 },
      { label: '1 to 2 years', value: '1-2', points: 5 },
      { label: '2 to 5 years', value: '2-5', points: 8 },
      { label: '5+ years', value: '5+', points: 12 },
    ],
  },
  {
    id: 'demand',
    pillar: 'replicability',
    question: 'Is there demand for your product or service in other markets?',
    options: [
      { label: 'Strong. People in other cities regularly ask about us.', value: 'strong', points: 12 },
      { label: 'Moderate. We believe there is demand based on industry trends.', value: 'moderate', points: 8 },
      { label: 'Uncertain. We have not tested other markets.', value: 'uncertain', points: 4 },
      { label: 'Unlikely. Our product is very niche or location-specific.', value: 'unlikely', points: 1 },
    ],
  },
  {
    id: 'locations',
    pillar: 'replicability',
    question: 'How many locations do you currently operate?',
    options: [
      { label: '1 location', value: '1', points: 5 },
      { label: '2 to 3 locations', value: '2-3', points: 10 },
      { label: '4 to 10 locations', value: '4-10', points: 14 },
      { label: '10+ locations', value: '10+', points: 15 },
    ],
  },
]

export const PILLAR_MAX = 25

export const TIERS: Record<TierKey, { title: string; summary: string; cta: string }> = {
  strong: {
    title: 'Strong candidate for franchising',
    summary: 'Your answers point to a business with the foundations a franchise system needs, and a feasibility analysis is the step that tests them.',
    cta: 'Book a free feasibility call',
  },
  promising: {
    title: 'Promising, with work needed',
    summary: 'Your business has real potential for franchising, with specific areas to develop before a franchise system would hold up.',
    cta: 'Talk through your gaps with Forge',
  },
  'not-ready': {
    title: 'Not ready yet',
    summary: 'Franchising looks premature for your business today, and the pillars below show where to build the foundation first.',
    cta: 'Ask Forge what it would take',
  },
}

export const BAND_LABELS: Record<BandKey, string> = {
  strong: 'Strong',
  developing: 'Developing',
  gap: 'Gap',
}

/** One short assessment per pillar and score band. */
export const PILLAR_COPY: Record<PillarKey, Record<BandKey, string>> = {
  profitability: {
    strong:
      'Your profitability and revenue give the model room to carry a royalty and still leave a franchisee a workable margin. Feasibility work tests those numbers at the unit level, including the investment a new owner would make.',
    developing:
      'Your numbers describe a working business, but the margin may be thin once a royalty and a franchisee’s own costs come out. Before franchising, confirm that the unit economics hold with a second layer of ownership.',
    gap:
      'Profitability is a prerequisite for franchising. Franchise buyers need to see that the model generates returns. Focus on reaching consistent profitability at your current location before pursuing franchise development.',
  },
  systems: {
    strong:
      'Your business runs without you and your processes are documented, which is the core of a franchise operations manual. The work ahead is turning that documentation into training that someone new can follow.',
    developing:
      'Part of the system is in place. Keep refining your documentation so every process can be taught to someone with no prior experience, and keep reducing the decisions that only you can make.',
    gap:
      'You cannot franchise what you cannot teach. Start by writing down your core operating procedures, training workflows, and quality standards, and develop a manager who can run the business without you.',
  },
  brand: {
    strong:
      'Your operating history and local recognition give a franchise buyer something real to evaluate. Protecting the brand comes next, with a federal trademark search and registration before any franchise is offered.',
    developing:
      'You have history and recognition to build on. Strengthen both before franchising by keeping a consistent operating record, and confirm early that your name and marks can be protected with a federal trademark.',
    gap:
      'Operating history matters. Lenders, franchise buyers, and regulators all want to see a track record. Build your record and your local reputation, and check early whether your name can be trademarked.',
  },
  replicability: {
    strong:
      'Demand outside your market and more than one location are strong signs the concept can be reproduced. Feasibility work should confirm that a new operator in a new market can run it with your system.',
    developing:
      'The concept may travel, but it has not yet been proven away from your first location or market. Testing demand in a new market, or opening a second location yourself, is one of the strongest validations for franchise readiness.',
    gap:
      'Replicability is not yet established. Consider opening a second location yourself first. Franchising is not the only path to growth, and licensing, management agreements, or scaling your existing operations may fit better for now.',
  },
}

export const DISCLAIMER =
  'This assessment provides illustrative guidance based on self-reported answers. It is not a guarantee of franchise viability, a legal opinion, or a financial projection.'

export type PillarResult = {
  key: PillarKey
  label: string
  /** 0 to 25 */
  score: number
  band: BandKey
  assessment: string
}

export type AssessmentResult = {
  /** 0 to 100, the sum of the four pillar scores */
  overall: number
  tier: TierKey
  tierTitle: string
  tierSummary: string
  /** In method order */
  pillars: PillarResult[]
  strongest: PillarKey
  weakest: PillarKey
  /** All four pillar assessments, weakest pillar first, then method order */
  recommendations: PillarResult[]
}

export function tierFor(overall: number): TierKey {
  if (overall >= 70) return 'strong'
  if (overall >= 45) return 'promising'
  return 'not-ready'
}

export function bandFor(score: number): BandKey {
  if (score >= 20) return 'strong'
  if (score >= 12) return 'developing'
  return 'gap'
}

export function isTierKey(value: unknown): value is TierKey {
  return value === 'strong' || value === 'promising' || value === 'not-ready'
}

export function pillarLabel(key: PillarKey): string {
  return PILLARS.find((p) => p.key === key)!.label
}

/** Option label for an answer, for reports and emails. */
export function answerLabel(id: QuestionId, value: string): string {
  return QUESTIONS.find((q) => q.id === id)?.options.find((o) => o.value === value)?.label ?? ''
}

/**
 * Returns a complete, valid answer set, or null. Every question must be
 * answered with one of its own option values.
 */
export function parseAnswers(input: unknown): Answers | null {
  if (!input || typeof input !== 'object') return null
  const raw = input as Record<string, unknown>
  const out = {} as Answers
  for (const q of QUESTIONS) {
    const value = raw[q.id]
    if (typeof value !== 'string' || !q.options.some((o) => o.value === value)) return null
    out[q.id] = value
  }
  return out
}

export function scoreAssessment(answers: Answers): AssessmentResult {
  const pillars: PillarResult[] = PILLARS.map(({ key, label }) => {
    const questions = QUESTIONS.filter((q) => q.pillar === key)
    let raw = 0
    let max = 0
    for (const q of questions) {
      const option = q.options.find((o) => o.value === answers[q.id])
      if (!option) throw new Error(`Missing or invalid answer for ${q.id}`)
      raw += option.points
      max += Math.max(...q.options.map((o) => o.points))
    }
    const score = Math.round((raw * PILLAR_MAX) / max)
    const band = bandFor(score)
    return { key, label, score, band, assessment: PILLAR_COPY[key][band] }
  })

  const overall = pillars.reduce((sum, p) => sum + p.score, 0)
  const tier = tierFor(overall)

  // Ties go to the pillar that comes first in the method's order.
  const weakest = pillars.reduce((low, p) => (p.score < low.score ? p : low)).key
  const strongest = pillars.reduce((high, p) => (p.score > high.score ? p : high)).key

  return {
    overall,
    tier,
    tierTitle: TIERS[tier].title,
    tierSummary: TIERS[tier].summary,
    pillars,
    strongest,
    weakest,
    recommendations: [...pillars.filter((p) => p.key === weakest), ...pillars.filter((p) => p.key !== weakest)],
  }
}
