'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ContinueLearning } from '@/components/ContinueLearning'

/**
 * Assessment with email-gated results.
 *
 * Psychology: The assessment itself uses commitment and consistency
 * (answering 8 questions builds investment). The score reveal is
 * shown immediately (variable reward), but detailed recommendations
 * are gated behind email (reciprocity: we gave you a score, now
 * exchange email for the full breakdown). Partial lead capture
 * even if they abandon the detail gate.
 */

type Question = {
  id: string
  question: string
  options: { label: string; value: string; points: number }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'years',
    question: 'How many years has your business been operating?',
    options: [
      { label: 'Less than 1 year', value: 'lt1', points: 2 },
      { label: '1 to 2 years', value: '1-2', points: 5 },
      { label: '2 to 5 years', value: '2-5', points: 8 },
      { label: '5+ years', value: '5+', points: 12 },
    ],
  },
  {
    id: 'profitable',
    question: 'Is your business currently profitable?',
    options: [
      { label: 'Yes, consistently profitable', value: 'yes', points: 15 },
      { label: 'Break-even', value: 'break-even', points: 7 },
      { label: 'No, not yet profitable', value: 'no', points: 2 },
    ],
  },
  {
    id: 'locations',
    question: 'How many locations do you currently operate?',
    options: [
      { label: '1 location', value: '1', points: 5 },
      { label: '2 to 3 locations', value: '2-3', points: 10 },
      { label: '4 to 10 locations', value: '4-10', points: 14 },
      { label: '10+ locations', value: '10+', points: 15 },
    ],
  },
  {
    id: 'owner-dependent',
    question: 'Can your business operate without you managing daily operations?',
    options: [
      { label: 'Yes, it runs without me day to day', value: 'yes', points: 15 },
      { label: 'Partially. I am involved but not required for everything.', value: 'partially', points: 8 },
      { label: 'No, the business depends on me being there', value: 'no', points: 2 },
    ],
  },
  {
    id: 'systems',
    question: 'Do you have documented systems and processes?',
    options: [
      { label: 'Comprehensive. Everything is documented and trainable.', value: 'comprehensive', points: 15 },
      { label: 'Some documentation exists, but there are gaps', value: 'some', points: 8 },
      { label: 'Minimal. Most knowledge is in my head or my team\'s heads.', value: 'minimal', points: 4 },
      { label: 'None. We have no documented processes.', value: 'none', points: 1 },
    ],
  },
  {
    id: 'demand',
    question: 'Is there demand for your product or service in other markets?',
    options: [
      { label: 'Strong. People in other cities regularly ask about us.', value: 'strong', points: 12 },
      { label: 'Moderate. We believe there is demand based on industry trends.', value: 'moderate', points: 8 },
      { label: 'Uncertain. We have not tested other markets.', value: 'uncertain', points: 4 },
      { label: 'Unlikely. Our product is very niche or location-specific.', value: 'unlikely', points: 1 },
    ],
  },
  {
    id: 'revenue',
    question: 'What is your approximate annual revenue per location?',
    options: [
      { label: 'Under $250,000', value: 'lt250k', points: 3 },
      { label: '$250,000 to $500,000', value: '250k-500k', points: 6 },
      { label: '$500,000 to $1,000,000', value: '500k-1m', points: 10 },
      { label: 'Over $1,000,000', value: 'gt1m', points: 12 },
    ],
  },
  {
    id: 'brand',
    question: 'Do you have a recognizable brand in your local market?',
    options: [
      { label: 'Yes. People know us by name and reputation.', value: 'yes', points: 10 },
      { label: 'Somewhat. We have some brand recognition.', value: 'somewhat', points: 5 },
      { label: 'No. We are not well known yet.', value: 'no', points: 2 },
    ],
  },
]

const MAX_SCORE = 106

type Outcome = {
  tier: 'strong' | 'promising' | 'not-ready'
  title: string
  summary: string
  details: string[]
}

function getOutcome(score: number, pct: number, answers: Record<string, string>): Outcome {
  if (pct >= 70) {
    return {
      tier: 'strong',
      title: 'Strong Candidate for Franchising',
      summary:
        'Based on your responses, your business shows strong indicators for franchise viability. You have the fundamentals that franchise development firms look for: a track record, profitability signals, operational maturity, and market potential.',
      details: [
        'Your combination of operating history, revenue, and systems puts you in a favorable position to begin the franchise development process.',
        'The next step is a proper feasibility analysis where we evaluate your unit economics, competitive landscape, legal requirements, and market opportunity in detail.',
        'Most businesses at this stage can move into active franchise development within 60 to 90 days of completing feasibility.',
        answers['systems'] === 'comprehensive'
          ? 'Your documented systems are a significant advantage. Well-documented operations reduce the time and cost of building a franchise operations manual.'
          : 'Strengthening your documentation and systems before launch will improve franchisee success rates and reduce your development timeline.',
      ],
    }
  }

  if (pct >= 45) {
    return {
      tier: 'promising',
      title: 'Promising, With Work Needed',
      summary:
        'Your business has real potential for franchising, but there are areas that need development before you would be ready to launch a franchise system. This is not a rejection. It is a roadmap.',
      details: [
        answers['profitable'] !== 'yes'
          ? 'Profitability is a prerequisite for franchising. Franchise buyers need to see that the model generates returns. Focus on reaching consistent profitability before pursuing franchise development.'
          : 'Your profitability is a strong foundation. That is one of the hardest boxes to check.',
        answers['systems'] === 'minimal' || answers['systems'] === 'none'
          ? 'Documenting your systems and processes is critical. You cannot franchise what you cannot teach. Start by writing down your core operating procedures, training workflows, and quality standards.'
          : 'Your existing documentation gives you a head start. Continue refining it with the goal of making every process teachable to someone with no prior experience.',
        answers['owner-dependent'] === 'no'
          ? 'Reducing owner dependence is essential. A franchise model requires that the business can operate under a trained manager. Start delegating and building management capacity.'
          : 'Your ability to step back from daily operations is a good sign for franchise scalability.',
        'A feasibility analysis can identify exactly which gaps to close and give you a prioritized action plan. Many businesses in your position are 6 to 12 months away from being ready.',
      ],
    }
  }

  return {
    tier: 'not-ready',
    title: 'Not Ready Yet',
    summary:
      'Based on your responses, franchising is likely premature for your business right now. That does not mean it will never work. It means there are foundational elements that need to be in place first.',
    details: [
      'Focus on building a profitable, repeatable business model at your current location before thinking about expansion through franchising.',
      answers['years'] === 'lt1'
        ? 'Operating history matters. Lenders, franchise buyers, and regulators all want to see a track record. Give your business at least two to three years of operations data before exploring franchising.'
        : 'Continue building your operating track record. The longer and more consistent your results, the stronger your franchise offering will be.',
      'Document everything you do. Standard operating procedures, training checklists, vendor lists, hiring processes. This documentation is the foundation of any franchise system.',
      'Consider opening a second location yourself first. Proving the model works in a new market with a different team is one of the strongest validations for franchise readiness.',
      'Franchising is not the only path to growth. Licensing, management agreements, or simply scaling your existing operations may be better fits for where you are today.',
    ],
  }
}

export function AssessmentClient() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [scores, setScores] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  /* Email gate state */
  const [gateEmail, setGateEmail] = useState('')
  const [gateName, setGateName] = useState('')
  const [gateUnlocked, setGateUnlocked] = useState(false)
  const [gateSubmitting, setGateSubmitting] = useState(false)
  const [gateError, setGateError] = useState('')

  const totalQuestions = QUESTIONS.length
  const progress = showResults ? 100 : Math.round((currentStep / totalQuestions) * 100)

  function selectAnswer(questionId: string, value: string, points: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    setScores((prev) => ({ ...prev, [questionId]: points }))

    if (currentStep < totalQuestions - 1) {
      setTimeout(() => setCurrentStep((prev) => prev + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  function goBack() {
    if (showResults) {
      setShowResults(false)
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  function restart() {
    setCurrentStep(0)
    setAnswers({})
    setScores({})
    setShowResults(false)
    setGateUnlocked(false)
    setGateEmail('')
    setGateName('')
  }

  async function unlockResults(e: React.FormEvent) {
    e.preventDefault()
    if (!gateEmail.trim() || !gateName.trim()) return
    setGateSubmitting(true)
    setGateError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: gateName,
          businessName: 'Assessment Lead',
          email: gateEmail,
          phone: 'Not provided',
          industry: 'Not specified',
          reasonForFranchising: `Assessment score: ${scorePct}% (${outcome.title}). Answers: ${JSON.stringify(answers)}`,
        }),
      })
      if (res.ok) {
        setGateUnlocked(true)
      } else {
        setGateError('Something went wrong. Please try again.')
      }
    } catch {
      setGateError('Network error. Please try again.')
    } finally {
      setGateSubmitting(false)
    }
  }

  const totalScore = Object.values(scores).reduce((sum, s) => sum + s, 0)
  const scorePct = Math.round((totalScore / MAX_SCORE) * 100)
  const outcome = getOutcome(totalScore, scorePct, answers)

  const currentQuestion = QUESTIONS[currentStep]

  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              Franchise Readiness Assessment
            </p>
            <h1 className="heading-1 mb-6">
              Get Your Free Franchise Readiness Score
            </h1>
            <p className="body-large">
              Answer eight questions about your business and get an honest assessment
              of your franchise readiness. Takes about two minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="section-padding bg-deep-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar: goal gradient pulls completion */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-muted-brown mb-2">
              <span>
                {showResults
                  ? 'Assessment Complete'
                  : `Question ${currentStep + 1} of ${totalQuestions}`}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-white overflow-hidden" style={{ borderRadius: '2px' }}>
              <div
                className="h-full bg-amber transition-all duration-500 ease-out"
                style={{ width: `${progress}%`, borderRadius: '2px' }}
              />
            </div>
          </div>

          {!showResults ? (
            /* Question Card */
            <div className="card">
              <h2 className="heading-3 mb-8">{currentQuestion.question}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() =>
                        selectAnswer(currentQuestion.id, option.value, option.points)
                      }
                      className={`w-full text-left p-4 border-2 transition-all duration-200 min-h-[52px] ${
                        isSelected
                          ? 'border-amber bg-amber/5 text-espresso'
                          : 'border-deep-cream hover:border-amber/40 bg-white text-espresso'
                      }`}
                    >
                      <span className="font-medium">{option.label}</span>
                    </button>
                  )
                })}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={goBack}
                  className="mt-6 text-sm text-muted-brown hover:text-espresso transition-colors"
                >
                  &larr; Previous question
                </button>
              )}
            </div>
          ) : (
            /* Results */
            <div className="space-y-6">
              {/* Score Card: shown immediately (variable reward) */}
              <div className="card text-center">
                <p className="eyebrow mb-6">
                  Your Franchise Readiness Score
                </p>
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E8E0D4"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={
                        outcome.tier === 'strong'
                          ? '#F87000'
                          : outcome.tier === 'promising'
                          ? '#F87000'
                          : '#8B7355'
                      }
                      strokeWidth="3"
                      strokeDasharray={`${scorePct}, 100`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-espresso">
                      {scorePct}
                    </span>
                  </div>
                </div>
                <h2
                  className={`heading-3 mb-2 ${
                    outcome.tier === 'strong'
                      ? 'text-amber'
                      : outcome.tier === 'promising'
                      ? 'text-espresso'
                      : 'text-muted-brown'
                  }`}
                >
                  {outcome.title}
                </h2>
                <p className="text-sm text-muted-brown mb-4">{outcome.summary}</p>
                <p className="text-xs text-muted-brown/60">
                  Illustrative assessment based on self-reported answers.
                </p>
              </div>

              {/* Email gate: reciprocity (we gave score, now unlock the details) */}
              {!gateUnlocked ? (
                <div className="card bg-espresso border-espresso text-center">
                  <h3 className="heading-4 text-cream mb-3">
                    Get Your Personalized Recommendations
                  </h3>
                  <p className="text-sm text-cream/70 mb-6 max-w-md mx-auto">
                    Enter your name and email to unlock your detailed franchise readiness
                    breakdown with specific next steps for your score.
                  </p>
                  <form onSubmit={unlockResults} className="max-w-sm mx-auto space-y-3">
                    <input
                      type="text"
                      value={gateName}
                      onChange={(e) => setGateName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 border border-cream/20 bg-white/10 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-amber/50 min-h-[48px]"
                      style={{ borderRadius: '3px' }}
                    />
                    <input
                      type="email"
                      value={gateEmail}
                      onChange={(e) => setGateEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 border border-cream/20 bg-white/10 text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-amber/50 min-h-[48px]"
                      style={{ borderRadius: '3px' }}
                    />
                    {gateError && <p className="text-red-400 text-sm">{gateError}</p>}
                    <button
                      type="submit"
                      disabled={gateSubmitting}
                      className="btn-primary w-full disabled:opacity-60"
                    >
                      {gateSubmitting ? 'Unlocking...' : 'Unlock My Full Report'}
                    </button>
                    <p className="text-xs text-cream/40">No spam. We will follow up with your personalized analysis.</p>
                  </form>
                </div>
              ) : (
                <>
                  {/* Detailed Results: unlocked after email */}
                  <div className="card">
                    <p className="eyebrow mb-4">
                      What This Means For You
                    </p>
                    <div className="space-y-4">
                      {outcome.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-amber/10 flex items-center justify-center mt-0.5" style={{ borderRadius: '3px' }}>
                            <span className="text-amber text-xs font-bold">{i + 1}</span>
                          </span>
                          <p className="text-sm text-muted-brown leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Answer Summary */}
                  <div className="card">
                    <p className="eyebrow mb-4">
                      Your Responses
                    </p>
                    <div className="space-y-3">
                      {QUESTIONS.map((q) => {
                        const selected = q.options.find((o) => o.value === answers[q.id])
                        return (
                          <div key={q.id} className="flex items-start justify-between gap-4 py-2 border-b border-deep-cream last:border-0">
                            <span className="text-sm text-muted-brown">{q.question}</span>
                            <span className="text-sm font-semibold text-espresso text-right flex-shrink-0 max-w-[200px]">
                              {selected?.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="card bg-espresso border-espresso">
                    <h3 className="heading-4 text-cream mb-3">
                      {outcome.tier === 'strong'
                        ? 'Your business looks ready. Let us confirm it.'
                        : outcome.tier === 'promising'
                        ? 'You are closer than you think. Let us show you the path.'
                        : 'Want to know what it would take?'}
                    </h3>
                    <p className="text-sm text-cream/70 mb-6">
                      {outcome.tier === 'strong'
                        ? 'A feasibility call confirms whether your unit economics, market position, and operations support a franchise launch. No cost, no obligation.'
                        : outcome.tier === 'promising'
                        ? 'A feasibility call identifies exactly which gaps to close and gives you a clear timeline. Many businesses in your position are closer than they think.'
                        : 'A conversation can help you understand what it would take and whether alternative growth paths make more sense right now.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact" className="btn-primary flex-1 text-center">
                        Book a Free Feasibility Call
                      </Link>
                      <Link
                        href="/calculator"
                        className="btn-secondary border-cream/30 text-cream hover:bg-cream hover:text-espresso flex-1 text-center"
                      >
                        Model Your Franchise Economics
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {/* Restart */}
              <div className="text-center">
                <button
                  onClick={restart}
                  className="text-sm text-muted-brown hover:text-espresso transition-colors underline"
                >
                  Retake the assessment
                </button>
              </div>

              <p className="text-xs text-muted-brown/60 text-center leading-relaxed">
                This assessment provides illustrative guidance based on self-reported answers.
                It is not a guarantee of franchise viability, a legal opinion, or a financial projection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Open loop teaser below assessment */}
      {!showResults && (
        <section className="bg-espresso text-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
            <h2 className="heading-2 text-cream mb-6">
              Prefer to Talk to a Human?
            </h2>
            <p className="body-large !text-cream/60 mb-10 max-w-2xl mx-auto">
              If you already know you want to explore franchising, skip the self-assessment and book
              a feasibility call directly. Our team will evaluate your business and give you a straight answer.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Franchise Evaluation
            </Link>
          </div>
        </section>
      )}

      {/* Continue learning after results */}
      {showResults && gateUnlocked && (
        <ContinueLearning
          heading="Explore What Comes Next"
          links={[
            { label: 'How the Franchise Process Works', href: '/how-it-works', description: 'See the four phases every franchise we build moves through, from feasibility to scale.' },
            { label: 'Model Your Franchise Economics', href: '/calculator', description: 'Plug in your numbers and see what your franchise system could generate in royalty income.' },
            { label: 'The Complete Franchise Guide', href: '/blog/how-to-franchise-your-business', description: 'Everything a business owner needs to know about franchising, in one guide.' },
          ]}
        />
      )}
    </>
  )
}
