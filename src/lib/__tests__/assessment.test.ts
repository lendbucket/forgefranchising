import { describe, expect, it } from 'vitest'
import { QUESTIONS, parseAnswers, scoreAssessment, tierFor, type Answers } from '../assessment'

const pick = (choose: (points: number[]) => number) =>
  Object.fromEntries(
    QUESTIONS.map((q) => {
      const points = q.options.map((o) => o.points)
      return [q.id, q.options[points.indexOf(choose(points))].value]
    })
  ) as Answers

const allMin = pick((p) => Math.min(...p))
const allMax = pick((p) => Math.max(...p))

describe('scoreAssessment', () => {
  it('scores the lowest answers on every question', () => {
    const r = scoreAssessment(allMin)
    expect(r.pillars.map((p) => p.score)).toEqual([5, 3, 5, 6])
    expect(r.overall).toBe(19)
    expect(r.tier).toBe('not-ready')
    expect(r.weakest).toBe('systems')
    expect(r.strongest).toBe('replicability')
    expect(r.pillars.every((p) => p.band === 'gap')).toBe(true)
  })

  it('scores the highest answers on every question', () => {
    const r = scoreAssessment(allMax)
    expect(r.pillars.map((p) => p.score)).toEqual([25, 25, 25, 25])
    expect(r.overall).toBe(100)
    expect(r.tier).toBe('strong')
    expect(r.pillars.every((p) => p.band === 'strong')).toBe(true)
    // Ties resolve to the first pillar in the method order.
    expect(r.weakest).toBe('profitability')
    expect(r.strongest).toBe('profitability')
  })

  it.each([
    [70, 'strong', { profitable: 'yes', revenue: 'lt250k', 'owner-dependent': 'yes', systems: 'comprehensive', brand: 'yes', years: 'lt1', demand: 'unlikely', locations: '4-10' }],
    [69, 'promising', { profitable: 'yes', revenue: 'lt250k', 'owner-dependent': 'yes', systems: 'comprehensive', brand: 'yes', years: 'lt1', demand: 'uncertain', locations: '2-3' }],
    [45, 'promising', { profitable: 'yes', revenue: 'lt250k', 'owner-dependent': 'yes', systems: 'none', brand: 'no', years: 'lt1', demand: 'unlikely', locations: '2-3' }],
    [44, 'not-ready', { profitable: 'yes', revenue: 'lt250k', 'owner-dependent': 'yes', systems: 'minimal', brand: 'no', years: 'lt1', demand: 'unlikely', locations: '1' }],
  ])('puts a score of %i in the %s tier', (overall, tier, answers) => {
    const r = scoreAssessment(answers as Answers)
    expect(r.overall).toBe(overall)
    expect(r.tier).toBe(tier)
  })

  it('maps tier thresholds exactly', () => {
    expect(tierFor(100)).toBe('strong')
    expect(tierFor(70)).toBe('strong')
    expect(tierFor(69)).toBe('promising')
    expect(tierFor(45)).toBe('promising')
    expect(tierFor(44)).toBe('not-ready')
    expect(tierFor(0)).toBe('not-ready')
  })

  it('scores a mixed set and orders recommendations weakest first', () => {
    const r = scoreAssessment({
      profitable: 'yes',
      revenue: '500k-1m',
      'owner-dependent': 'partially',
      systems: 'some',
      brand: 'somewhat',
      years: '2-5',
      demand: 'uncertain',
      locations: '1',
    })
    // profitability 25/27, systems 16/30, brand 13/22, replicability 9/27
    expect(r.pillars.map((p) => p.score)).toEqual([23, 13, 15, 8])
    expect(r.pillars.map((p) => p.band)).toEqual(['strong', 'developing', 'developing', 'gap'])
    expect(r.overall).toBe(59)
    expect(r.tier).toBe('promising')
    expect(r.weakest).toBe('replicability')
    expect(r.strongest).toBe('profitability')
    expect(r.recommendations.map((p) => p.key)).toEqual(['replicability', 'profitability', 'systems', 'brand'])
  })

  it('rejects an incomplete or invalid answer set', () => {
    expect(() => scoreAssessment({ ...allMax, systems: 'bogus' })).toThrow()
  })
})

describe('parseAnswers', () => {
  it('accepts a complete valid set', () => {
    expect(parseAnswers(allMin)).toEqual(allMin)
  })
  it('rejects missing, unknown, and non string values', () => {
    expect(parseAnswers(null)).toBeNull()
    expect(parseAnswers({ ...allMin, brand: undefined })).toBeNull()
    expect(parseAnswers({ ...allMin, brand: 'famous' })).toBeNull()
    expect(parseAnswers({ ...allMin, years: 5 })).toBeNull()
  })
  it('drops keys that are not questions', () => {
    expect(parseAnswers({ ...allMin, score: 100 })).toEqual(allMin)
  })
})
