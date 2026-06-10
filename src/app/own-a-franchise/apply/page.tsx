'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

const LIQUID_CAPITAL_OPTIONS = [
  'Under $25,000',
  '$25,000 to $50,000',
  '$50,000 to $100,000',
  '$100,000 to $250,000',
  '$250,000+',
];

const NET_WORTH_OPTIONS = [
  'Under $100,000',
  '$100,000 to $250,000',
  '$250,000 to $500,000',
  '$500,000 to $1,000,000',
  '$1,000,000+',
];

const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within 3 months',
  '3 to 6 months',
  '6 to 12 months',
  'More than 12 months',
];

const EXPERIENCE_OPTIONS = [
  'No experience',
  'Some experience',
  'Moderate experience',
  'Extensive experience',
];

const HEARD_ABOUT_OPTIONS = [
  'Search engine',
  'Social media',
  'Referral from a friend or colleague',
  'Franchise directory',
  'Trade show or event',
  'News article or press',
  'Other',
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  liquidCapital: string;
  netWorth: string;
  currentProfession: string;
  whyForge: string;
  timeline: string;
  franchiseExperience: string;
  salesExperience: string;
  heardAboutUs: string;
}

const INITIAL_FORM_DATA: FormData = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  liquidCapital: '',
  netWorth: '',
  currentProfession: '',
  whyForge: '',
  timeline: '',
  franchiseExperience: '',
  salesExperience: '',
  heardAboutUs: '',
};

const STEPS = ['About You', 'Location & Capital', 'Your Goals'];

const DISCLAIMER_TEXT =
  'This is not an offer to sell, or the solicitation of an offer to buy, a franchise. Forge Franchising offers franchises solely by means of its Franchise Disclosure Document. Certain jurisdictions require registration or other actions before franchises can be offered or sold there. We will not offer or sell a franchise in any jurisdiction unless we are first in compliance with applicable law.';

const inputClasses =
  'w-full px-5 py-4 border border-espresso/12 bg-white text-espresso min-h-[52px] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-amber/40 transition-shadow';

const selectClasses =
  'w-full px-5 py-4 border border-espresso/12 bg-white text-espresso min-h-[52px] rounded-[3px] focus:outline-none focus:ring-2 focus:ring-amber/40 transition-shadow appearance-none';

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const canAdvanceStep = (): boolean => {
    if (step === 0) {
      return !!(formData.fullName.trim() && formData.email.trim() && formData.phone.trim());
    }
    if (step === 1) {
      return !!(formData.city.trim() && formData.state && formData.liquidCapital);
    }
    if (step === 2) {
      return !!formData.whyForge.trim();
    }
    return false;
  };

  const handleNext = () => {
    if (canAdvanceStep() && step < STEPS.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canAdvanceStep()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/franchise-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main>
        <section className="bg-espresso py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="heading-1 text-cream mb-6">Application Received</h1>
            <p className="body-large text-cream/80 max-w-2xl mx-auto">
              Thank you for your interest in Forge Franchising. Our franchise development team
              will review your application and reach out within 2 business days.
            </p>
          </div>
        </section>
        <section className="bg-cream py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="card max-w-xl mx-auto p-10">
              <h2 className="heading-3 text-espresso mb-4">What to Expect Next</h2>
              <p className="body-large text-muted-brown mb-8">
                A member of our team will contact you to schedule an introductory call.
                In the meantime, feel free to explore more about the Forge opportunity.
              </p>
              <Link href="/own-a-franchise" className="btn-primary inline-block">
                Back to Own a Franchise
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-espresso py-20">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-cream/60 text-sm">
              <li>
                <Link href="/" className="hover:text-cream transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/own-a-franchise" className="hover:text-cream transition-colors">
                  Own a Franchise
                </Link>
              </li>
              <li>/</li>
              <li className="text-cream">Apply</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="eyebrow text-amber mb-4 block">Franchise Application</span>
            <h1 className="heading-1 text-cream mb-6">Apply to Own a Forge Franchise</h1>
            <p className="body-large text-cream/80">
              Complete the three steps below to submit your franchise application. The process
              takes about 5 minutes, and all information is kept strictly confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main Form Column */}
            <div className="lg:col-span-3">
              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex justify-between mb-3">
                  {STEPS.map((label, i) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        if (i < step) setStep(i);
                      }}
                      className={`text-sm font-medium transition-colors ${
                        i === step
                          ? 'text-espresso'
                          : i < step
                          ? 'text-amber cursor-pointer hover:text-espresso'
                          : 'text-muted-brown'
                      }`}
                    >
                      {i + 1}. {label}
                    </button>
                  ))}
                </div>
                <div className="w-full h-2 bg-espresso/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: About You */}
                {step === 0 && (
                  <div className="space-y-6">
                    <h2 className="heading-3 text-espresso mb-2">About You</h2>
                    <p className="body-large text-muted-brown mb-6">
                      Tell us a bit about yourself so we can get to know you.
                    </p>

                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-espresso mb-2">
                        Full Name <span className="text-amber">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-espresso mb-2">
                        Email Address <span className="text-amber">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className={inputClasses}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-espresso mb-2">
                        Phone Number <span className="text-amber">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className={inputClasses}
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Location & Capital */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="heading-3 text-espresso mb-2">Location & Capital</h2>
                    <p className="body-large text-muted-brown mb-6">
                      Help us understand where you want to operate and your financial readiness.
                    </p>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-espresso mb-2">
                        City <span className="text-amber">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        className={inputClasses}
                        placeholder="Your city"
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-espresso mb-2">
                        State <span className="text-amber">*</span>
                      </label>
                      <select
                        id="state"
                        required
                        className={selectClasses}
                        value={formData.state}
                        onChange={(e) => updateField('state', e.target.value)}
                      >
                        <option value="">Select a state</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="liquidCapital" className="block text-sm font-medium text-espresso mb-2">
                        Available Liquid Capital <span className="text-amber">*</span>
                      </label>
                      <select
                        id="liquidCapital"
                        required
                        className={selectClasses}
                        value={formData.liquidCapital}
                        onChange={(e) => updateField('liquidCapital', e.target.value)}
                      >
                        <option value="">Select a range</option>
                        {LIQUID_CAPITAL_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="netWorth" className="block text-sm font-medium text-espresso mb-2">
                        Net Worth
                      </label>
                      <select
                        id="netWorth"
                        className={selectClasses}
                        value={formData.netWorth}
                        onChange={(e) => updateField('netWorth', e.target.value)}
                      >
                        <option value="">Select a range (optional)</option>
                        {NET_WORTH_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="currentProfession" className="block text-sm font-medium text-espresso mb-2">
                        Current Profession
                      </label>
                      <input
                        id="currentProfession"
                        type="text"
                        className={inputClasses}
                        placeholder="Your current role (optional)"
                        value={formData.currentProfession}
                        onChange={(e) => updateField('currentProfession', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Your Goals */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="heading-3 text-espresso mb-2">Your Goals</h2>
                    <p className="body-large text-muted-brown mb-6">
                      Tell us what draws you to Forge and what you hope to achieve.
                    </p>

                    <div>
                      <label htmlFor="whyForge" className="block text-sm font-medium text-espresso mb-2">
                        Why Forge? <span className="text-amber">*</span>
                      </label>
                      <textarea
                        id="whyForge"
                        required
                        rows={5}
                        className={`${inputClasses} resize-y`}
                        placeholder="What interests you about owning a Forge franchise?"
                        value={formData.whyForge}
                        onChange={(e) => updateField('whyForge', e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-espresso mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        className={selectClasses}
                        value={formData.timeline}
                        onChange={(e) => updateField('timeline', e.target.value)}
                      >
                        <option value="">Select a timeline (optional)</option>
                        {TIMELINE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="franchiseExperience" className="block text-sm font-medium text-espresso mb-2">
                        Franchise Experience
                      </label>
                      <select
                        id="franchiseExperience"
                        className={selectClasses}
                        value={formData.franchiseExperience}
                        onChange={(e) => updateField('franchiseExperience', e.target.value)}
                      >
                        <option value="">Select your experience level (optional)</option>
                        {EXPERIENCE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="salesExperience" className="block text-sm font-medium text-espresso mb-2">
                        Sales Experience
                      </label>
                      <select
                        id="salesExperience"
                        className={selectClasses}
                        value={formData.salesExperience}
                        onChange={(e) => updateField('salesExperience', e.target.value)}
                      >
                        <option value="">Select your experience level (optional)</option>
                        {EXPERIENCE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="heardAboutUs" className="block text-sm font-medium text-espresso mb-2">
                        How Did You Hear About Us?
                      </label>
                      <select
                        id="heardAboutUs"
                        className={selectClasses}
                        value={formData.heardAboutUs}
                        onChange={(e) => updateField('heardAboutUs', e.target.value)}
                      >
                        <option value="">Select an option (optional)</option>
                        {HEARD_ABOUT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-[3px] text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-10 flex items-center justify-between">
                  <div>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-espresso font-medium hover:text-amber transition-colors"
                      >
                        Back
                      </button>
                    )}
                  </div>

                  <div>
                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!canAdvanceStep()}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !canAdvanceStep()}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-xs text-muted-brown text-center">
                  Your information is confidential and will only be used to evaluate your application.
                </p>
              </form>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-2">
              <div className="card p-8 mb-8">
                <h3 className="heading-4 text-espresso mb-6">What Happens After You Apply</h3>
                <ol className="space-y-5">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber/20 text-amber flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-espresso">Application Review</p>
                      <p className="text-sm text-muted-brown mt-1">
                        Our franchise development team reviews your application within 2 business days.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber/20 text-amber flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-espresso">Introductory Call</p>
                      <p className="text-sm text-muted-brown mt-1">
                        We schedule a call to learn more about your goals and answer your questions.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber/20 text-amber flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-espresso">Discovery Day</p>
                      <p className="text-sm text-muted-brown mt-1">
                        Visit our team in person to experience the Forge brand and operations firsthand.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber/20 text-amber flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    <div>
                      <p className="font-medium text-espresso">Franchise Agreement</p>
                      <p className="text-sm text-muted-brown mt-1">
                        Review and sign your franchise agreement to officially join the Forge family.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="p-6 bg-espresso/5 rounded-[3px]">
                <p className="text-xs text-muted-brown leading-relaxed">
                  {DISCLAIMER_TEXT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
