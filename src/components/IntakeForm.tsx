'use client'

import { useState, FormEvent } from 'react'
import { CONTACT_EMAIL, INQUIRY_TYPES, type InquiryType } from '@/lib/constants'
import { INTAKE_FIELDS, type IntakeField } from '@/lib/intake'

/**
 * IntakeForm: one form for every brokerage inquiry, posting to /api/intake.
 *
 * The inquiry type sets which questions appear. Fields come from
 * src/lib/intake.ts, the same list the API route accepts.
 */

const inputClass =
  'w-full px-4 py-3 border border-graphite/10 bg-white text-graphite placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-ember/40 focus:border-ember/60 transition-all duration-200 min-h-[48px] text-base'

function Field({ field, value, onChange }: { field: IntakeField; value: string; onChange: (v: string) => void }) {
  const id = `intake-${field.name}`
  const label = (
    <label htmlFor={id} className="block text-sm font-semibold text-graphite mb-2">
      {field.label}
      {field.required && <span className="text-accent"> *</span>}
    </label>
  )

  if (field.type === 'select') {
    return (
      <div>
        {label}
        <select id={id} name={field.name} required={field.required} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} style={{ borderRadius: '3px' }}>
          <option value="">Select one</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
    )
  }

  if (field.type === 'textarea') {
    return (
      <div className="sm:col-span-2">
        {label}
        <textarea id={id} name={field.name} rows={4} required={field.required} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputClass} resize-y leading-relaxed`} style={{ borderRadius: '3px' }} />
      </div>
    )
  }

  return (
    <div>
      {label}
      <input id={id} name={field.name} type="text" required={field.required} placeholder={field.placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} style={{ borderRadius: '3px' }} />
    </div>
  )
}

type IntakeFormProps = {
  inquiryType: InquiryType
  heading?: string
  intro?: string
  submitLabel?: string
}

export function IntakeForm({ inquiryType, heading, intro, submitLabel = 'Send Confidential Inquiry' }: IntakeFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const fields = INTAKE_FIELDS[inquiryType]

  const set = (name: string) => (v: string) => setValues((prev) => ({ ...prev, [name]: v }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, inquiryType }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
        return
      }
      setStatus('success')
      setValues({})
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white p-8 sm:p-10 text-center" style={{ borderRadius: '4px', border: '1px solid rgba(78, 90, 98, 0.15)' }} role="status" aria-live="polite">
        <div className="w-14 h-14 bg-ember/15 flex items-center justify-center mx-auto mb-5" style={{ borderRadius: '4px' }}>
          <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="heading-4 mb-3">Your Inquiry Has Been Received</h3>
        <p className="text-steel leading-relaxed max-w-md mx-auto">
          We reply within one business day. What you sent stays between you and Forge.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10" style={{ borderRadius: '4px', border: '1px solid rgba(78, 90, 98, 0.15)' }}>
      <p className="eyebrow mb-3">{INQUIRY_TYPES[inquiryType]}</p>
      {heading && <h3 className="heading-3 mb-3">{heading}</h3>}
      {intro && <p className="text-steel leading-relaxed mb-8">{intro}</p>}

      <div className="grid sm:grid-cols-2 gap-5">
        <Field field={{ name: 'fullName', label: 'Full name', type: 'text', required: true }} value={values.fullName ?? ''} onChange={set('fullName')} />
        <div>
          <label htmlFor="intake-email" className="block text-sm font-semibold text-graphite mb-2">
            Email<span className="text-accent"> *</span>
          </label>
          <input id="intake-email" name="email" type="email" required autoComplete="email" value={values.email ?? ''} onChange={(e) => set('email')(e.target.value)} className={inputClass} style={{ borderRadius: '3px' }} />
        </div>
        <div>
          <label htmlFor="intake-phone" className="block text-sm font-semibold text-graphite mb-2">
            Phone<span className="text-accent"> *</span>
          </label>
          <input id="intake-phone" name="phone" type="tel" required autoComplete="tel" value={values.phone ?? ''} onChange={(e) => set('phone')(e.target.value)} className={inputClass} style={{ borderRadius: '3px' }} />
        </div>
        {fields.map((field) => (
          <Field key={field.name} field={field} value={values[field.name] ?? ''} onChange={set(field.name)} />
        ))}
        {/* Honeypot, hidden from people and assistive technology */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="intake-website">Website</label>
          <input id="intake-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website ?? ''} onChange={(e) => set('website')(e.target.value)} />
        </div>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 mt-6" style={{ borderRadius: '3px' }} role="alert">
          <p className="text-red-800 text-sm">
            {errorMessage}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>
          </p>
        </div>
      )}

      <div className="mt-8">
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            submitLabel
          )}
        </button>
        <p className="text-xs text-steel mt-3">
          We reply within one business day. Your inquiry is kept confidential.
        </p>
      </div>
    </form>
  )
}
