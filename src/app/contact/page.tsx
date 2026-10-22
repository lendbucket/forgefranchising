'use client'

import { useEffect, useState, FormEvent } from 'react'
import { TIERS, isTierKey, type TierKey } from '@/lib/assessment'
import Link from 'next/link'
import { ContinueLearning } from '@/components/ContinueLearning'
import { CONTACT_EMAIL } from '@/lib/constants'

/**
 * Multi-step contact form using foot-in-door effect:
 * Step 1 captures email (smallest ask, highest-value partial lead).
 * Goal gradient via progress bar pulls them to finish.
 * Miller's law: each step shows 2-4 fields, never 12 at once.
 */

const INDUSTRIES = [
  'Restaurants & Food',
  'Salons, Beauty & Med Spa',
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

const REVENUE_RANGES = [
  'Under $500K',
  '$500K - $1M',
  '$1M - $3M',
  '$3M - $5M',
  '$5M - $10M',
  '$10M+',
]

const TIMELINES = [
  'As soon as possible',
  '3 - 6 months',
  '6 - 12 months',
  '12+ months',
  'Just exploring',
]

type FormData = {
  fullName: string
  businessName: string
  email: string
  phone: string
  industry: string
  yearsInBusiness: string
  currentLocations: string
  annualRevenueRange: string
  currentlyProfitable: string
  reasonForFranchising: string
  targetTimeline: string
  biggestQuestion: string
}

const initialFormData: FormData = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  industry: '',
  yearsInBusiness: '',
  currentLocations: '',
  annualRevenueRange: '',
  currentlyProfitable: '',
  reasonForFranchising: '',
  targetTimeline: '',
  biggestQuestion: '',
}

const STEPS = [
  { label: 'About you', fields: ['fullName', 'email', 'phone', 'businessName'] },
  { label: 'Your business', fields: ['industry', 'yearsInBusiness', 'currentLocations', 'annualRevenueRange', 'currentlyProfitable', 'targetTimeline'] },
  { label: 'Your goals', fields: ['reasonForFranchising', 'biggestQuestion'] },
] as const

function InputField({
  label,
  required,
  ...props
}: {
  label: string
  required?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-graphite mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="field"
      />
    </div>
  )
}

function SelectField({
  label,
  required,
  options,
  placeholder,
  ...props
}: {
  label: string
  required?: boolean
  options: string[]
  placeholder?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-graphite mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <select
        {...props}
        required={required}
        className="field"
      >
        <option value="">{placeholder || 'Select...'}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

function TextAreaField({
  label,
  required,
  ...props
}: {
  label: string
  required?: boolean
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-graphite mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        {...props}
        required={required}
        className="field resize-y leading-relaxed"
      />
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialFormData)
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [assessment, setAssessment] = useState<{ score: number; tier: TierKey } | null>(null)

  // Handoff from the readiness assessment (?source=assessment&score=..&tier=..).
  // Both values are validated; anything else is ignored.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('source')
    const scoreParam = params.get('score') ?? ''
    const tier = params.get('tier')
    const score = /^\d{1,3}$/.test(scoreParam) ? Number(scoreParam) : NaN
    if ((source === 'assessment' || source === 'assessment-email') && score >= 0 && score <= 100 && isTierKey(tier)) {
      setAssessment({ score, tier })
    }
  }, [])

  /* Goal gradient: progress fills as steps complete */
  const progress = Math.round(((step + 1) / STEPS.length) * 100)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function nextStep() {
    /* Validate required fields for current step */
    if (step === 0 && (!form.fullName.trim() || !form.email.trim())) return
    if (step === 1 && !form.industry) return
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.reasonForFranchising.trim()) return
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          assessment ? { ...form, assessmentScore: assessment.score, assessmentTier: assessment.tier } : form
        ),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setForm(initialFormData)
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <>
        <section className="bg-white">
          <div className="container-wide section-padding">
            <nav aria-label="Breadcrumb" className="py-4">
              <ol className="flex items-center gap-2 text-sm text-steel">
                <li className="flex items-center gap-2">
                  <Link href="/" className="hover:text-graphite transition-colors">Home</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-steel">/</span>
                  <span className="text-graphite font-medium">Contact</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl mx-auto text-center py-16 sm:py-24">
              <svg className="w-12 h-12 text-accent mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <h2 className="heading-2 mb-4">Your inquiry has been received</h2>
              <p className="body-large mb-4">
                We review every submission personally. If your business looks like a strong candidate
                for franchising, we will reach out within one business day to schedule a feasibility call.
              </p>
              <p className="text-steel text-[17px] leading-relaxed mb-8">
                During that call, we will walk through your business model, your goals, and whether
                franchising is the right growth path for you. There is no cost and no obligation.
              </p>
              <p className="text-steel mb-8 text-sm">
                Need to add something? Email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
                  {CONTACT_EMAIL}
                </a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Return home
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  Learn our process
                </Link>
              </div>
            </div>
          </div>
        </section>
        <ContinueLearning
          heading="While you wait, explore these"
          links={[
            { label: 'How our process works', href: '/how-it-works', description: 'The four phases every franchise we develop moves through.' },
            { label: 'Franchise calculator', href: '/calculator', description: 'Model your franchise economics before your call.' },
            { label: 'The complete franchise guide', href: '/blog/how-to-franchise-your-business', description: 'Everything you need to know in one guide.' },
          ]}
        />
      </>
    )
  }

  return (
    <>
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center gap-2 text-sm text-steel">
              <li className="flex items-center gap-2">
                <Link href="/" className="hover:text-graphite transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-steel">/</span>
                <span className="text-graphite font-medium">Contact</span>
              </li>
            </ol>
          </nav>
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-6">
              Ready to Franchise My Business? Start Here
            </h1>
            <p className="body-large">
              If you have been thinking "I want to franchise my business," this is where that starts.
              Three quick steps. We will use your answers to prepare a specific conversation on your
              feasibility call. No generic pitches.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              {/* Progress bar: goal gradient pulls completion */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm mb-2">
                  {STEPS.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => { if (i < step) setStep(i) }}
                      className={`text-sm font-semibold min-h-[44px] transition-colors ${
                        i === step ? 'text-accent' : i < step ? 'text-graphite cursor-pointer' : 'text-steel'
                      }`}
                      disabled={i > step}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <div className="w-full h-1.5 bg-white overflow-hidden">
                  <div
                    className="h-full bg-ember transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-steel mt-2">Step {step + 1} of {STEPS.length}</p>
              </div>

              {assessment && (
                <p className="mb-6 p-4 bg-stone text-[15px] text-graphite" style={{ borderLeft: '3px solid #E4572E' }}>
                  You completed the readiness assessment with a score of {assessment.score}.
                  <span className="sr-only"> {TIERS[assessment.tier].title}.</span>
                </p>
              )}
              <form onSubmit={handleSubmit}>
                {/* Step 1: About You (email first for partial capture) */}
                {step === 0 && (
                  <div className="card">
                    <h2 className="heading-3 mb-2">Tell us about you</h2>
                    <p className="text-sm text-steel mb-6">We will use this to reach out after reviewing your inquiry.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <InputField
                        label="Full Name"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.fullName}
                        onChange={handleChange}
                      />
                      <InputField
                        label="Email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@yourbusiness.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      <InputField
                        label="Phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={handleChange}
                      />
                      <InputField
                        label="Business Name"
                        name="businessName"
                        type="text"
                        required
                        placeholder="Your Business LLC"
                        value={form.businessName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-10">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary w-full sm:w-auto"
                      >
                        Continue to business details
                      </button>
                      <p className="text-xs text-steel mt-3">Takes about 90 seconds total. We never share your information.</p>
                    </div>
                  </div>
                )}

                {/* Step 2: About Your Business */}
                {step === 1 && (
                  <div className="card">
                    <h2 className="heading-3 mb-2">Tell us about your business</h2>
                    <p className="text-sm text-steel mb-6">This helps us assess fit before your feasibility call.</p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <SelectField
                        label="Industry"
                        name="industry"
                        required
                        placeholder="Select your industry"
                        options={INDUSTRIES}
                        value={form.industry}
                        onChange={handleChange}
                      />
                      <SelectField
                        label="Years in Business"
                        name="yearsInBusiness"
                        placeholder="How long have you been operating?"
                        options={['Less than 1 year', '1 - 2 years', '3 - 5 years', '5 - 10 years', '10+ years']}
                        value={form.yearsInBusiness}
                        onChange={handleChange}
                      />
                      <SelectField
                        label="Current Locations"
                        name="currentLocations"
                        placeholder="How many locations?"
                        options={['1', '2 - 3', '4 - 10', '10+']}
                        value={form.currentLocations}
                        onChange={handleChange}
                      />
                      <SelectField
                        label="Annual Revenue Range"
                        name="annualRevenueRange"
                        placeholder="Approximate annual revenue"
                        options={REVENUE_RANGES}
                        value={form.annualRevenueRange}
                        onChange={handleChange}
                      />
                      <SelectField
                        label="Currently Profitable?"
                        name="currentlyProfitable"
                        placeholder="Is the business profitable?"
                        options={['Yes', 'No', 'Breaking even', 'Prefer not to say']}
                        value={form.currentlyProfitable}
                        onChange={handleChange}
                      />
                      <SelectField
                        label="Target Timeline"
                        name="targetTimeline"
                        placeholder="When do you want to start?"
                        options={TIMELINES}
                        value={form.targetTimeline}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-8 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-sm text-steel hover:text-graphite transition-colors min-h-[44px]"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary"
                      >
                        Continue to goals
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Your Goals */}
                {step === 2 && (
                  <div className="card">
                    <h2 className="heading-3 mb-2">What are your goals?</h2>
                    <p className="text-sm text-steel mb-6">The more context you share, the more useful our first call will be.</p>
                    <div className="space-y-6">
                      <TextAreaField
                        label="Why do you want to franchise your business?"
                        name="reasonForFranchising"
                        required
                        rows={4}
                        placeholder="Tell us what is driving this decision. Growth goals, market demand, personal goals, all helpful context."
                        value={form.reasonForFranchising}
                        onChange={handleChange}
                      />
                      <TextAreaField
                        label="What is your biggest question about franchising?"
                        name="biggestQuestion"
                        rows={3}
                        placeholder="No question is too basic. We would rather address your real concerns than guess."
                        value={form.biggestQuestion}
                        onChange={handleChange}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-white border border-ember mt-6">
                        <p className="text-graphite text-sm">
                          {errorMessage}{' '}
                          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                            {CONTACT_EMAIL}
                          </a>
                        </p>
                      </div>
                    )}

                    <div className="mt-8 flex items-center gap-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-sm text-steel hover:text-graphite transition-colors min-h-[44px]"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          'Submit and schedule your free call'
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-steel mt-3">
                      We respond within one business day. Your information is kept strictly confidential.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-header-gap space-y-8">
                <div className="card">
                  <h3 className="heading-4 mb-4">What happens next</h3>
                  <ol className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'We review your submission',
                        body: 'Our team reads every inquiry personally. We look at your business model, market position, and goals to determine if there is a real fit.',
                      },
                      {
                        step: '2',
                        title: 'We schedule a feasibility call',
                        body: 'If your business looks like a strong candidate, we will reach out within one business day. Free, no obligation.',
                      },
                      {
                        step: '3',
                        title: 'You get a straight answer',
                        body: 'We will tell you honestly whether your business is ready, what it would take, and what the timeline and investment look like.',
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-ember-fill text-graphite flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-graphite text-sm">{item.title}</p>
                          <p className="text-steel text-sm leading-relaxed mt-1">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="card bg-graphite text-white">
                  <h3 className="heading-4 mb-3 text-white">Not ready for a form?</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Take our two-minute franchise readiness assessment first and see where you stand.
                  </p>
                  <Link href="/is-my-business-franchisable" className="text-link inline-flex items-center min-h-[44px] text-sm font-semibold">
                    Get your free readiness score
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
