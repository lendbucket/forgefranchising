'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'

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
      <label className="block text-sm font-medium text-espresso mb-1.5">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full px-4 py-3 border border-espresso/15 bg-white text-espresso placeholder:text-muted-brown/50 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-colors min-h-[48px]"
        style={{ borderRadius: '3px' }}
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
      <label className="block text-sm font-medium text-espresso mb-1.5">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <select
        {...props}
        required={required}
        className="w-full px-4 py-3 border border-espresso/15 bg-white text-espresso focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-colors min-h-[48px]"
        style={{ borderRadius: '3px' }}
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
      <label className="block text-sm font-medium text-espresso mb-1.5">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <textarea
        {...props}
        required={required}
        className="w-full px-4 py-3 border border-espresso/15 bg-white text-espresso placeholder:text-muted-brown/50 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-colors resize-y"
        style={{ borderRadius: '3px' }}
      />
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
        <section className="bg-cream">
          <div className="container-wide section-padding">
            <nav aria-label="Breadcrumb" className="py-4">
              <ol className="flex items-center gap-2 text-sm text-muted-brown">
                <li className="flex items-center gap-2">
                  <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-muted-brown/40">/</span>
                  <span className="text-espresso font-medium">Contact</span>
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl mx-auto text-center py-16 sm:py-24">
              <div className="w-16 h-16 bg-amber/20 flex items-center justify-center mx-auto mb-6" style={{ borderRadius: '4px' }}>
                <svg className="w-8 h-8 text-amber" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="heading-2 mb-4">Your Inquiry Has Been Received</h1>
              <p className="body-large mb-4">
                We review every submission personally. If your business looks like a strong candidate
                for franchising, we will reach out within one business day to schedule a feasibility call.
              </p>
              <p className="text-muted-brown mb-8">
                During that call, we will walk through your business model, your goals, and whether
                franchising is the right growth path for you. There is no cost and no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Return Home
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  Learn Our Process
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center gap-2 text-sm text-muted-brown">
              <li className="flex items-center gap-2">
                <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-muted-brown/40">/</span>
                <span className="text-espresso font-medium">Contact</span>
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              Start the Conversation
            </p>
            <h1 className="heading-1 mb-6">
              Find Out If Your Business Is Ready to Franchise
            </h1>
            <p className="body-large">
              This is not a generic contact form. It is a qualifying intake designed to give us
              enough context to tell you something useful on our first call. Fill it out honestly.
              The more we know, the better the conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* About You */}
                <div>
                  <h2 className="heading-3 mb-6">About You</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
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
                </div>

                {/* About Your Business */}
                <div>
                  <h2 className="heading-3 mb-6">About Your Business</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
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
                </div>

                {/* Goals */}
                <div>
                  <h2 className="heading-3 mb-6">Your Goals</h2>
                  <div className="space-y-5">
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
                </div>

                {/* Error State */}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200" style={{ borderRadius: '3px' }}>
                    <p className="text-red-800 text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      'Submit Your Inquiry'
                    )}
                  </button>
                  <p className="text-xs text-muted-brown mt-3">
                    We respond to qualified inquiries within one business day. Your information is kept
                    strictly confidential.
                  </p>
                </div>
              </form>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-8 space-y-8">
                <div className="card">
                  <h3 className="heading-4 mb-4">What Happens Next</h3>
                  <ol className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'We review your submission',
                        body: 'Our team reads every inquiry personally. No bots, no auto-responders. We look at your business model, market position, and goals to determine if there is a real fit.',
                      },
                      {
                        step: '2',
                        title: 'We schedule a feasibility call',
                        body: 'If your business looks like a strong candidate, we will reach out within one business day to set up a 30-minute call. Free, no obligation.',
                      },
                      {
                        step: '3',
                        title: 'You get a straight answer',
                        body: 'On the call, we will tell you honestly whether your business is ready to franchise, what it would take, and what the realistic timeline and investment look like.',
                      },
                    ].map((item) => (
                      <li key={item.step} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-amber text-cream flex items-center justify-center text-sm font-bold" style={{ borderRadius: '3px' }}>
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-espresso text-sm">{item.title}</p>
                          <p className="text-muted-brown text-sm leading-relaxed mt-1">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="card">
                  <h3 className="heading-4 mb-4">Why We Ask These Questions</h3>
                  <p className="text-muted-brown text-sm leading-relaxed mb-4">
                    Most franchise consultants will take a meeting with anyone who has a pulse and a
                    credit card. We do things differently.
                  </p>
                  <p className="text-muted-brown text-sm leading-relaxed mb-4">
                    These questions help us understand whether your business has the foundation for a
                    successful franchise system. Things like profitability, operational maturity, and
                    market demand matter. We would rather have an honest conversation upfront than
                    waste your time (and money) on a concept that is not ready.
                  </p>
                  <p className="text-muted-brown text-sm leading-relaxed">
                    If you are not sure about some answers, that is fine. Just give us your best estimate.
                    We will dig into the details together on the call.
                  </p>
                </div>

                <div className="card bg-espresso text-cream">
                  <h3 className="heading-4 mb-3 text-cream">Prefer to Talk First?</h3>
                  <p className="text-cream/70 text-sm leading-relaxed mb-4">
                    If you would rather have a quick conversation before filling this out, reach us directly.
                  </p>
                  <p className="text-sm">
                    <span className="text-cream/50">Email:</span>{' '}
                    <a href="mailto:ceo@36west.org" className="text-amber hover:underline">
                      ceo@36west.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
