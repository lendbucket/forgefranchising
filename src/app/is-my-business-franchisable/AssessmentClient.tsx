'use client'

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { ContinueLearning } from '@/components/ContinueLearning'
import { CONTACT_EMAIL } from '@/lib/constants'
import {
  DISCLAIMER,
  PILLAR_MAX,
  QUESTIONS,
  TIERS,
  answerLabel,
  pillarLabel,
  scoreAssessment,
  type Answers,
  type AssessmentResult,
  type QuestionId,
} from '@/lib/assessment'

/**
 * Franchise readiness assessment on the four pillars of the Forge Franchise
 * Readiness Method. Start screen, one question per screen, an immediate
 * score, then a short form that sends the full report by email and shows it
 * here. Scoring lives in src/lib/assessment.ts, shared with /api/assessment.
 */

type Stage = 'start' | 'questions' | 'score' | 'report'
type Stored = { stage: Stage; step: number; answers: Partial<Answers> }

const STORAGE_KEY = 'forge-readiness-assessment'
const ADVANCE_MS = 250
const TOTAL = QUESTIONS.length

function readStored(): Stored | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Stored
    if (!parsed || typeof parsed.step !== 'number' || typeof parsed.answers !== 'object') return null
    return parsed
  } catch {
    return null
  }
}

function writeStored(value: Stored | null) {
  try {
    if (value) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    else window.sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // Storage can be unavailable (private mode, blocked site data). The
    // assessment still works; only refresh recovery is lost.
  }
}

function isComplete(answers: Partial<Answers>): answers is Answers {
  return QUESTIONS.every((q) => typeof answers[q.id] === 'string')
}

type Contact = {
  fullName: string
  email: string
  businessName: string
  industry: string
  location: string
  phone: string
  wantsCall: boolean
  website: string
}

const EMPTY_CONTACT: Contact = {
  fullName: '',
  email: '',
  businessName: '',
  industry: '',
  location: '',
  phone: '',
  wantsCall: false,
  website: '',
}

function validate(c: Contact): Partial<Record<keyof Contact, string>> {
  const errors: Partial<Record<keyof Contact, string>> = {}
  if (!c.fullName.trim()) errors.fullName = 'Enter your full name.'
  if (!c.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim())) errors.email = 'Enter a valid email address.'
  if (!c.businessName.trim()) errors.businessName = 'Enter your business name.'
  if (!c.industry.trim()) errors.industry = 'Enter your industry.'
  if (!c.location.trim()) errors.location = 'Enter your city and state.'
  if (c.phone.trim() && !/^[0-9+().\s-]{7,40}$/.test(c.phone.trim())) errors.phone = 'Enter a valid phone number, or leave it blank.'
  return errors
}

export function AssessmentClient({ breadcrumbs }: { breadcrumbs?: ReactNode }) {
  const [stage, setStage] = useState<Stage>('start')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<Answers>>({})
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT)
  const [errors, setErrors] = useState<Partial<Record<keyof Contact, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [report, setReport] = useState<{ result: AssessmentResult; answers: Answers; emailed: boolean } | null>(null)
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const restored = useRef(false)
  const moved = useRef(false)

  // Restore progress after a refresh.
  useEffect(() => {
    const saved = readStored()
    if (saved && saved.stage !== 'report' && saved.stage !== 'start') {
      setAnswers(saved.answers)
      setStep(Math.min(Math.max(saved.step, 0), TOTAL - 1))
      setStage(saved.stage === 'score' && isComplete(saved.answers) ? 'score' : 'questions')
    }
    restored.current = true
  }, [])

  // Save progress on every change, once restored.
  useEffect(() => {
    if (!restored.current) return
    if (stage === 'questions' || stage === 'score') writeStored({ stage, step, answers })
  }, [stage, step, answers])

  // Move focus to the new heading whenever the screen changes.
  useEffect(() => {
    if (!moved.current) return
    headingRef.current?.focus()
  }, [stage, step])

  useEffect(() => () => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
  }, [])

  const result = isComplete(answers) ? scoreAssessment(answers) : null
  const question = QUESTIONS[step]

  function go(next: () => void) {
    moved.current = true
    next()
  }

  function start() {
    go(() => {
      setStage('questions')
      setStep(0)
    })
  }

  function choose(id: QuestionId, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    advanceTimer.current = setTimeout(() => {
      go(() => {
        if (step < TOTAL - 1) setStep(step + 1)
        else setStage('score')
      })
    }, ADVANCE_MS)
  }

  function previous() {
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    go(() => {
      if (stage === 'score') {
        setStage('questions')
        setStep(TOTAL - 1)
      } else if (step > 0) setStep(step - 1)
    })
  }

  function restart() {
    if (advanceTimer.current) clearTimeout(advanceTimer.current)
    writeStored(null)
    setAnswers({})
    setContact(EMPTY_CONTACT)
    setErrors({})
    setSubmitError('')
    setReport(null)
    go(() => {
      setStep(0)
      setStage('start')
    })
  }

  function onOptionKey(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    const count = question.options.length
    let next: number | null = null
    if (e.key in keys) next = (index + keys[e.key] + count) % count
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = count - 1
    if (next === null) return
    e.preventDefault()
    const group = e.currentTarget.parentElement
    group?.querySelectorAll<HTMLButtonElement>('[role="radio"]')[next]?.focus()
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (!result || !isComplete(answers)) return
    const found = validate(contact)
    setErrors(found)
    setSubmitError('')
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`assessment-${first}`)?.focus()
      return
    }
    setSubmitting(true)
    const params = new URLSearchParams(window.location.search)
    const utm = Object.fromEntries(
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
        .map((k) => [k, params.get(k)?.slice(0, 200) ?? ''])
        .filter(([, v]) => v)
    )
    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          fullName: contact.fullName.trim(),
          email: contact.email.trim(),
          businessName: contact.businessName.trim(),
          industry: contact.industry.trim(),
          location: contact.location.trim(),
          phone: contact.phone.trim(),
          wantsCall: contact.wantsCall,
          website: contact.website,
          source: (document.referrer || 'direct').slice(0, 200),
          utm,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) {
        setSubmitError(data.error || 'We could not send your report. Please try again.')
        return
      }
      setReport({ result: data.result ?? result, answers, emailed: data.reportEmailed !== false })
      writeStored(null)
      go(() => setStage('report'))
    } catch {
      setSubmitError('We could not reach the server. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const progress = stage === 'start' ? 0 : stage === 'questions' ? step : TOTAL
  const field = (key: keyof Contact) => ({
    id: `assessment-${key}`,
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `assessment-${key}-error` : undefined,
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          {breadcrumbs}
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-6">Turn My Business Into a Franchise: Get Your Score</h1>
            <p className="body-large">
              Wondering how to turn my business into a franchise? Eight questions across the four pillars of the
              Forge Franchise Readiness Method. About two minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          {stage !== 'start' && stage !== 'report' && (
            <div className="mb-10">
              <div className="flex items-center justify-between text-sm text-steel mb-2">
                <span>{stage === 'questions' ? `${pillarLabel(question.pillar)}, question ${step + 1} of ${TOTAL}` : 'Assessment complete'}</span>
                <span>{Math.round((progress / TOTAL) * 100)}%</span>
              </div>
              <div
                role="progressbar"
                aria-label="Assessment progress"
                aria-valuemin={0}
                aria-valuemax={TOTAL}
                aria-valuenow={progress}
                aria-valuetext={stage === 'questions' ? `Question ${step + 1} of ${TOTAL}` : 'All questions answered'}
                className="w-full h-2 bg-ash"
              >
                <div className="h-full bg-ember transition-[width] duration-300" style={{ width: `${(progress / TOTAL) * 100}%` }} />
              </div>
            </div>
          )}

          {stage === 'start' && (
            <div className="card !p-10 max-[720px]:!p-6" style={{ borderTop: '3px solid #E4572E' }}>
              <h2 ref={headingRef} tabIndex={-1} className="heading-3 mb-4 focus:outline-none">
                Find out how ready your business is to franchise
              </h2>
              <p className="text-steel text-[17px] leading-relaxed mb-6">
                Eight questions across the four pillars of the Forge Franchise Readiness Method. About two minutes.
              </p>
              <ul className="border-t border-line mb-8">
                {['A score out of 100', 'A breakdown across the four pillars of the Forge Franchise Readiness Method', 'Specific recommendations for each pillar'].map((item, i) => (
                  <li key={item} className="grid grid-cols-[36px_minmax(0,1fr)] py-3 border-b border-line text-[16px] text-graphite">
                    <span className="font-display font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={start} className="btn-primary">
                Start the assessment
              </button>
            </div>
          )}

          {stage === 'questions' && (
            <div className="card !p-10 max-[720px]:!p-6">
              <p className="text-sm font-semibold text-accent mb-2">{pillarLabel(question.pillar)}</p>
              <h2 ref={headingRef} id="assessment-question" tabIndex={-1} className="heading-3 mb-8 focus:outline-none">
                {question.question}
              </h2>
              <div role="radiogroup" aria-labelledby="assessment-question" className="space-y-3">
                {question.options.map((option, i) => {
                  const selected = answers[question.id] === option.value
                  const tabbable = selected || (!answers[question.id] && i === 0)
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      tabIndex={tabbable ? 0 : -1}
                      onClick={() => choose(question.id, option.value)}
                      onKeyDown={(e) => onOptionKey(e, i)}
                      className={`w-full flex items-center gap-4 text-left px-5 py-4 min-h-[56px] border transition-colors duration-200 ${
                        selected ? 'border-graphite bg-graphite text-white' : 'border-line bg-white text-graphite hover:border-graphite'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex-shrink-0 w-4 h-4 border ${selected ? 'border-white bg-ember' : 'border-steel'}`}
                      />
                      <span className="font-medium">{option.label}</span>
                    </button>
                  )
                })}
              </div>
              <p className="mt-4 text-sm text-steel">Use the arrow keys to move between options, and Space or Enter to choose one.</p>
              {step > 0 && (
                <button type="button" onClick={previous} className="mt-6 inline-flex items-center min-h-[44px] text-sm font-semibold text-graphite underline underline-offset-4">
                  Previous question
                </button>
              )}
            </div>
          )}

          {stage === 'score' && result && (
            <div className="space-y-8">
              <div className="card !p-10 max-[720px]:!p-6">
                <p className="text-sm text-steel mb-2">Your franchise readiness score</p>
                <p className="font-display font-bold text-graphite leading-none" style={{ letterSpacing: '-0.05em' }}>
                  <span className="text-[96px] max-[720px]:text-[72px]">{result.overall}</span>
                  <span className="text-[32px] text-steel">/100</span>
                </p>
                <h2 ref={headingRef} tabIndex={-1} className="heading-3 mt-4 mb-2 focus:outline-none">
                  {result.tierTitle}
                </h2>
                <p className="text-steel text-[17px] leading-relaxed mb-8">{result.tierSummary}</p>
                <PillarBars result={result} />
                <p className="mt-6 text-sm text-steel">Illustrative assessment based on self-reported answers.</p>
                <button type="button" onClick={previous} className="mt-4 inline-flex items-center min-h-[44px] text-sm font-semibold text-graphite underline underline-offset-4">
                  Previous question
                </button>
              </div>

              <form onSubmit={submit} noValidate className="card !p-10 max-[720px]:!p-6" aria-labelledby="assessment-gate-heading">
                <h2 id="assessment-gate-heading" className="heading-3 mb-3">
                  Get your full readiness report
                </h2>
                <p className="text-steel text-[17px] leading-relaxed mb-8">
                  We will show your pillar by pillar recommendations here and send a copy of the full report to your inbox.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" required error={errors.fullName} {...field('fullName')}>
                    <input {...field('fullName')} name="fullName" type="text" autoComplete="name" className="field" value={contact.fullName} onChange={(e) => setContact({ ...contact, fullName: e.target.value })} />
                  </Field>
                  <Field label="Email" required error={errors.email} {...field('email')}>
                    <input {...field('email')} name="email" type="email" autoComplete="email" className="field" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                  </Field>
                  <Field label="Business name" required error={errors.businessName} {...field('businessName')}>
                    <input {...field('businessName')} name="businessName" type="text" autoComplete="organization" className="field" value={contact.businessName} onChange={(e) => setContact({ ...contact, businessName: e.target.value })} />
                  </Field>
                  <Field label="Industry" required error={errors.industry} {...field('industry')}>
                    <input {...field('industry')} name="industry" type="text" placeholder="For example, coffee shop" className="field" value={contact.industry} onChange={(e) => setContact({ ...contact, industry: e.target.value })} />
                  </Field>
                  <Field label="City and state" required error={errors.location} {...field('location')}>
                    <input {...field('location')} name="location" type="text" autoComplete="address-level2" placeholder="For example, San Antonio, TX" className="field" value={contact.location} onChange={(e) => setContact({ ...contact, location: e.target.value })} />
                  </Field>
                  <Field label="Phone" error={errors.phone} {...field('phone')}>
                    <input {...field('phone')} name="phone" type="tel" autoComplete="tel" className="field" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                  </Field>
                  {/* Honeypot, hidden from people and assistive technology */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="assessment-website">Website</label>
                    <input id="assessment-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={contact.website} onChange={(e) => setContact({ ...contact, website: e.target.value })} />
                  </div>
                </div>
                <label className="mt-6 flex items-start gap-3 min-h-[44px] cursor-pointer text-[15px] text-graphite">
                  <input
                    type="checkbox"
                    name="wantsCall"
                    checked={contact.wantsCall}
                    onChange={(e) => setContact({ ...contact, wantsCall: e.target.checked })}
                    className="mt-1 w-5 h-5 flex-shrink-0 accent-[#1C1F23]"
                  />
                  <span>I would like Forge to contact me about a feasibility call</span>
                </label>
                {submitError && (
                  <div role="alert" className="mt-6 p-4 border border-ember bg-stone text-[15px] text-graphite">
                    {submitError}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                )}
                <div className="mt-8">
                  <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? 'Sending your report' : 'Send my full report'}
                  </button>
                  <p className="mt-3 text-sm text-steel">Your answers stay between you and Forge.</p>
                </div>
              </form>
            </div>
          )}

          {stage === 'report' && report && (
            <div className="space-y-8">
              <div className="card !p-10 max-[720px]:!p-6">
                <p className="text-sm text-steel mb-2">Your franchise readiness score</p>
                <p className="font-display font-bold text-graphite leading-none" style={{ letterSpacing: '-0.05em' }}>
                  <span className="text-[72px]">{report.result.overall}</span>
                  <span className="text-[28px] text-steel">/100</span>
                </p>
                <h2 ref={headingRef} tabIndex={-1} className="heading-3 mt-4 mb-2 focus:outline-none">
                  {report.result.tierTitle}
                </h2>
                <p className="text-steel text-[17px] leading-relaxed mb-8">
                  {report.emailed
                    ? `A copy of this report is on its way to ${contact.email.trim()}.`
                    : 'We could not email a copy just now, so keep this page open or save it. Forge has your results.'}
                </p>
                <PillarBars result={report.result} />
              </div>

              <div className="card !p-10 max-[720px]:!p-6">
                <h2 className="heading-3 mb-6">Pillar by pillar</h2>
                <div className="border-t border-graphite">
                  {report.result.recommendations.map((p, i) => (
                    <div key={p.key} className="py-6 border-b border-line">
                      {i === 0 && <p className="text-sm font-semibold text-accent mb-1">Your priority</p>}
                      <h3 className="heading-4 mb-2">
                        {p.label}: {p.score}/{PILLAR_MAX}
                      </h3>
                      <p className="text-steel text-[17px] leading-relaxed">{p.assessment}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card !p-10 max-[720px]:!p-6">
                <h2 className="heading-3 mb-6">Your responses</h2>
                <dl className="border-t border-graphite">
                  {QUESTIONS.map((q) => (
                    <div key={q.id} className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] gap-x-6 gap-y-1 py-4 border-b border-line">
                      <dt className="text-[15px] text-steel">{q.question}</dt>
                      <dd className="text-[15px] font-semibold text-graphite">{answerLabel(q.id, report.answers[q.id])}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-graphite surface-dark p-10 max-[720px]:p-6">
                <h2 className="heading-3 mb-3 text-white">Your next step</h2>
                <p className="body-large mb-8">A feasibility call looks at your unit economics, market, and operations against the gaps this report shows. No cost, no obligation.</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/contact?source=assessment&score=${report.result.overall}&tier=${report.result.tier}`}
                    className="btn-primary"
                  >
                    {TIERS[report.result.tier].cta}
                  </Link>
                  <Link href="/calculator" className="btn-secondary">
                    Model your franchise economics
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <button type="button" onClick={restart} className="inline-flex items-center min-h-[44px] text-sm font-semibold text-graphite underline underline-offset-4">
                  Retake the assessment
                </button>
              </div>
              <p className="text-sm text-steel text-center leading-relaxed">{DISCLAIMER}</p>
            </div>
          )}

          {stage === 'score' && (
            <p className="mt-8 text-sm text-steel text-center leading-relaxed">{DISCLAIMER}</p>
          )}
        </div>
      </section>

      {stage !== 'report' && (
        <section className="section-padding bg-graphite surface-dark">
          <div className="container-narrow text-center">
            <h2 className="heading-2 text-white mb-6">Prefer to talk to a human?</h2>
            <p className="body-large mb-10 max-w-2xl mx-auto">
              If you already know you want to explore franchising, skip the self-assessment and book a feasibility call
              directly. Our team will evaluate your business and give you a straight answer.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a free feasibility call
            </Link>
          </div>
        </section>
      )}

      {stage === 'report' && (
        <ContinueLearning
          heading="Explore what comes next"
          links={[
            { label: 'How the franchise process works', href: '/how-it-works', description: 'See the four phases of franchise development, from feasibility to scale.' },
            { label: 'Model your franchise economics', href: '/calculator', description: 'Plug in your numbers and see what your franchise system could generate in royalty income.' },
            { label: 'The complete franchise guide', href: '/blog/how-to-franchise-your-business', description: 'Everything a business owner needs to know about franchising, in one guide.' },
          ]}
        />
      )}
    </>
  )
}

function PillarBars({ result }: { result: AssessmentResult }) {
  return (
    <ul className="space-y-4">
      {result.pillars.map((p) => (
        <li key={p.key}>
          <div className="flex items-baseline justify-between gap-4 mb-1.5 text-[15px]">
            <span className="font-semibold text-graphite">{p.label}</span>
            <span className="text-steel tabular-nums">
              {p.score}/{PILLAR_MAX}
            </span>
          </div>
          <div
            className="h-2.5 bg-ash"
            role="img"
            aria-label={`${p.label}: ${p.score} out of ${PILLAR_MAX}`}
          >
            <div className="h-full bg-ember" style={{ width: `${(p.score / PILLAR_MAX) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  )
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
  'aria-invalid'?: boolean
  'aria-describedby'?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-graphite mb-2">
        {label}
        {required ? <span className="text-accent"> *</span> : <span className="font-normal text-steel"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-ember-text">
          {error}
        </p>
      )}
    </div>
  )
}
