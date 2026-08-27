'use client'

import { useState, useEffect, useRef, useCallback, Fragment, CSSProperties } from 'react'
import Image from 'next/image'

/* ------------------------------------------------------------------ */
/*  Shared style fragments, ported verbatim from the design export      */
/* ------------------------------------------------------------------ */

const DISPLAY = "var(--font-barlow-condensed), 'Barlow Condensed', sans-serif"
const BODY = "var(--font-source-sans-3), 'Source Sans 3', sans-serif"

const sectionStyle: CSSProperties = {
  borderBottom: '1px solid rgba(255,255,255,0.08)',
}

const wrapStyle: CSSProperties = {
  maxWidth: '1060px',
  margin: '0 auto',
  padding: 'clamp(56px,9vw,96px) 24px',
}

const eyebrowStyle: CSSProperties = {
  margin: '0 0 16px',
  fontSize: '12px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#F87000',
  fontWeight: 600,
}

const h2Style: CSSProperties = {
  margin: '0 0 40px',
  fontFamily: DISPLAY,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: 'clamp(30px,4.5vw,44px)',
  lineHeight: 1.05,
}

const cardH3Style: CSSProperties = {
  margin: '0 0 8px',
  fontFamily: DISPLAY,
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '22px',
  letterSpacing: '0.03em',
}

const cardPStyle: CSSProperties = {
  margin: 0,
  color: '#A0A0A8',
  fontSize: '16px',
}

const groupHeadStyle: CSSProperties = {
  margin: '0 0 20px',
  fontSize: '12px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#F87000',
  fontWeight: 600,
}

const defGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))',
  gap: '24px 32px',
  marginBottom: '44px',
}

const defDescStyle: CSSProperties = { color: '#A0A0A8', fontSize: '15px' }
const defTermStyle: CSSProperties = { display: 'block', marginBottom: '4px' }

const tierPanelHeadStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: '12px',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  paddingBottom: '20px',
  marginBottom: '36px',
}

const tierPanelH3Style: CSSProperties = {
  margin: 0,
  fontFamily: DISPLAY,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '32px',
  letterSpacing: '0.03em',
}

const tierPanelPriceStyle: CSSProperties = {
  fontFamily: DISPLAY,
  fontWeight: 700,
  fontSize: '26px',
  color: '#F87000',
}

const bulletStyle: CSSProperties = { display: 'flex', gap: '10px' }
const checkStyle: CSSProperties = { color: '#F87000', fontWeight: 700 }

const labelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  fontSize: '13px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#A0A0A8',
  fontWeight: 600,
}

const inputStyle: CSSProperties = {
  background: '#141416',
  border: '1px solid rgba(255,255,255,0.15)',
  color: '#FFFFFF',
  padding: '13px 14px',
  fontSize: '16px',
  fontFamily: BODY,
  letterSpacing: 'normal',
  textTransform: 'none',
}

const phaseRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(56px,72px) 1fr',
  gap: '20px',
  padding: '28px 0',
  borderTop: '1px solid rgba(255,255,255,0.08)',
}

const phaseNumStyle: CSSProperties = {
  fontFamily: DISPLAY,
  fontWeight: 700,
  fontSize: '40px',
  color: '#F87000',
  lineHeight: 1,
}

const phaseHeadRowStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '8px',
  alignItems: 'baseline',
  marginBottom: '8px',
}

const phaseH3Style: CSSProperties = {
  margin: 0,
  fontFamily: DISPLAY,
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '24px',
  letterSpacing: '0.03em',
}

const phaseDurStyle: CSSProperties = {
  fontSize: '13px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#A0A0A8',
}

const phasePStyle: CSSProperties = {
  margin: 0,
  color: '#A0A0A8',
  fontSize: '16px',
  maxWidth: '680px',
}

const thBase: CSSProperties = {
  textAlign: 'center',
  padding: '14px 16px',
  borderBottom: '1px solid rgba(255,255,255,0.15)',
  fontFamily: DISPLAY,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontSize: '18px',
  letterSpacing: '0.05em',
}

const tdLabel: CSSProperties = {
  padding: '11px 16px 11px 0',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
}

const tdYes: CSSProperties = {
  textAlign: 'center',
  padding: '11px 16px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  color: '#F87000',
  fontWeight: 700,
}

const tdNo: CSSProperties = {
  textAlign: 'center',
  padding: '11px 16px',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  color: '#55555C',
}

const tdYesEmpire: CSSProperties = { ...tdYes, background: '#1C1C20' }
const tdNoEmpire: CSSProperties = { ...tdNo, background: '#1C1C20' }

const matrixGroupTd: CSSProperties = {
  padding: '28px 0 10px',
  fontSize: '11px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: '#F87000',
  fontWeight: 600,
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

/** U+2713 check mark, the glyph used throughout the design export. */
const CHECK = '✓'

const TIER_NAMES: Record<string, string> = {
  launch: 'Engine Launch',
  growth: 'Engine Growth',
  empire: 'Engine Empire',
}

const TIER_PRICES: Record<string, string> = {
  launch: '$24,500',
  growth: '$49,500',
  empire: 'from $89,500',
}

const NEXT_STEPS: { title: string; body: string; done: boolean }[] = [
  {
    title: 'Proposal selected',
    body: 'Complete. Your engagement tier is recorded and timestamped.',
    done: true,
  },
  {
    title: 'Engagement agreement sent',
    body: 'Within one business day, for electronic signature.',
    done: false,
  },
  {
    title: 'Kickoff scheduled',
    body: 'A working session to align on scope, access, and the documents we need.',
    done: false,
  },
  {
    title: 'Phase one begins',
    body: 'The business audit starts, ending with a written readiness verdict and real dates.',
    done: false,
  },
]

/**
 * Celebration burst. Computed at module scope from the index rather than
 * Math.random so the markup is deterministic and cannot desync on hydration.
 * Palette is restricted to amber, white, and the warm gray already in use.
 */
const PARTICLE_COLORS = ['#F87000', '#FFFFFF', '#A0A0A8']

const PARTICLES = Array.from({ length: 26 }, (_, i) => {
  const angle = (i / 26) * Math.PI * 2 + (i % 3) * 0.14
  const distance = 64 + (i % 5) * 20
  return {
    dx: Math.round(Math.cos(angle) * distance),
    dy: Math.round(Math.sin(angle) * distance),
    size: 3 + (i % 3),
    color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
    delay: (i % 6) * 40,
  }
})

type MatrixRow = [string, boolean, boolean, boolean]

const MATRIX: { group: string; rows: MatrixRow[] }[] = [
  {
    group: 'Artifacts You Keep',
    rows: [
      ['Readiness Audit Report', true, true, true],
      ['Business Model Blueprint', true, true, true],
      ['Unit Economics Model', true, true, true],
      ['Counsel Briefing Package', true, false, false],
      ['Complete Operations Manual', false, true, true],
      ['Training Curriculum', false, true, true],
      ['FDD and franchise agreement', false, true, true],
      ['Wellness partner agreement', false, true, true],
      ['Brand Standards Book', false, true, true],
      ['Qualification Framework', false, true, true],
      ['Discovery Day Playbook', false, true, true],
      ['Entity formation', false, false, true],
      ['Trademark prosecution', false, false, true],
      ['Multi state registrations', false, false, true],
      ['Employment documentation', false, false, true],
      ['Recruitment website', false, false, true],
      ['Territory design and market map', false, false, true],
    ],
  },
  {
    group: 'Access',
    rows: [
      ['Dedicated advisor, weekly sessions', true, true, true],
      ['Direct channel access', true, true, true],
      ['In house franchise counsel', false, true, true],
      ['Franchise sales representation', false, false, true],
    ],
  },
  {
    group: 'After Launch',
    rows: [
      ['Post launch advisory', false, true, true],
      ['Support through first openings', false, false, true],
      ['Retained standards and royalty advisory', false, false, true],
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Confirmation state                                                 */
/* ------------------------------------------------------------------ */

function ConfirmationPanel({
  confirmed,
  reduceMotion,
}: {
  confirmed: { name: string; price: string }
  reduceMotion: boolean
}) {
  return (
    <div role="status" aria-live="polite">
      {/* Panel */}
      <div
        className={reduceMotion ? undefined : 'proposal-panel'}
        style={{
          background: '#141416',
          border: '1px solid rgba(255,255,255,0.08)',
          borderLeft: '3px solid #F87000',
          padding: 'clamp(28px,5vw,44px)',
          textAlign: 'center',
        }}
      >
        <div
          className={reduceMotion ? undefined : 'proposal-logo'}
          style={{ marginBottom: '36px' }}
        >
          <Image
            src="/forge-franchising-logo-white.png"
            alt="Forge Franchising Group"
            width={1396}
            height={711}
            style={{ width: '130px', height: 'auto', margin: '0 auto', display: 'block' }}
          />
        </div>

        {/* Checkmark with the celebratory burst behind it */}
        <div
          style={{
            position: 'relative',
            width: '88px',
            height: '88px',
            margin: '0 auto 28px',
          }}
        >
          {!reduceMotion && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 0,
                height: 0,
                pointerEvents: 'none',
              }}
            >
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className="proposal-particle"
                  style={
                    {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: p.size + 'px',
                      height: p.size + 'px',
                      borderRadius: '50%',
                      background: p.color,
                      animationDelay: 900 + p.delay + 'ms',
                      '--px': p.dx + 'px',
                      '--py': p.dy + 'px',
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          )}

          <svg
            width="88"
            height="88"
            viewBox="0 0 88 88"
            aria-hidden="true"
            style={{ position: 'relative', display: 'block' }}
          >
            <circle
              className={reduceMotion ? undefined : 'proposal-ring'}
              cx="44"
              cy="44"
              r="40"
              fill="none"
              stroke="#F87000"
              strokeWidth="3"
            />
            <path
              className={reduceMotion ? undefined : 'proposal-check-path'}
              d="M27 45.5 L39 57.5 L61 33"
              fill="none"
              stroke="#F87000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3
          style={{
            margin: '0 0 16px',
            fontFamily: DISPLAY,
            fontWeight: 700,
            textTransform: 'uppercase',
            fontSize: 'clamp(28px,4.5vw,40px)',
            lineHeight: 1.05,
            letterSpacing: '0.03em',
          }}
        >
          Selection recorded
        </h3>

        <p
          style={{
            margin: '0 0 12px',
            fontFamily: DISPLAY,
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '22px',
            letterSpacing: '0.03em',
            color: '#F87000',
          }}
        >
          {confirmed.name}, {confirmed.price}
        </p>

        <p
          style={{
            margin: '0 auto',
            maxWidth: '460px',
            color: '#A0A0A8',
            fontSize: '16px',
          }}
        >
          A confirmation has been sent to the email you provided, and the engagement agreement is
          being prepared.
        </p>
      </div>

      {/* Next steps */}
      <ol
        style={{
          listStyle: 'none',
          margin: '28px 0 0',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        {NEXT_STEPS.map((step, i) => (
          <li
            key={step.title}
            className={reduceMotion ? undefined : 'proposal-step'}
            style={{
              display: 'grid',
              gridTemplateColumns: '28px 1fr',
              gap: '16px',
              padding: '20px 0',
              borderTop: i === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              animationDelay: reduceMotion ? undefined : 1340 + i * 120 + 'ms',
            }}
          >
            <span aria-hidden="true" style={{ paddingTop: '2px' }}>
              {step.done ? (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" fill="#F87000" />
                  <path
                    d="M7 12.5 L10.5 16 L17 9"
                    fill="none"
                    stroke="#0A0A0A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10.5"
                    fill="none"
                    stroke="#F87000"
                    strokeWidth="1.5"
                    opacity="0.55"
                  />
                </svg>
              )}
            </span>
            <div>
              <strong
                style={{
                  display: 'block',
                  marginBottom: '4px',
                  color: step.done ? '#FFFFFF' : '#D6D6DC',
                  fontSize: '16px',
                }}
              >
                {step.title}
              </strong>
              <span style={{ color: step.done ? '#A0A0A8' : '#7A7A82', fontSize: '15px' }}>
                {step.body}
              </span>
            </div>
          </li>
        ))}
      </ol>

      {/* What to expect */}
      <div style={{ marginTop: '28px' }}>
        <p style={{ margin: '0 0 12px', color: '#A0A0A8', fontSize: '15px' }}>
          Questions before the agreement arrives can go to{' '}
          <a href="mailto:inquiry@forgefranchising.com">inquiry@forgefranchising.com</a>.
        </p>
        <p style={{ margin: 0, fontSize: '13px', color: '#7A7A82', lineHeight: 1.6 }}>
          Selection initiates the engagement agreement, which is executed separately and governs the
          engagement. This page is a proposal and not a contract.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function UncagedFitnessProposalPage() {
  const [tier, setTier] = useState<string | null>(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [signature, setSignature] = useState('')
  const [statusMsg, setStatusMsg] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  // Set once the API confirms. Replaces the whole form with the celebration panel.
  const [confirmed, setConfirmed] = useState<{ name: string; price: string } | null>(null)
  // Resolved on mount, so the confirmation can render its final state instantly
  // for anyone who has asked the OS to reduce motion.
  const [reduceMotion, setReduceMotion] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Scroll reveal, ported from the export's componentDidMount.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const els = root.querySelectorAll('[data-reveal]')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.setAttribute('data-reveal', 'in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-reveal', 'in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const clearStatus = useCallback(() => setStatusMsg(null), [])

  // Tier card buttons scroll down to the signature block.
  const pick = useCallback((next: string) => {
    setTier(next)
    setStatusMsg(null)
    const el = document.getElementById('selection')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 24
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' })
    }
  }, [])

  const choose = useCallback((next: string) => {
    setTier(next)
    setStatusMsg(null)
  }, [])

  const fail = useCallback((msg: string) => {
    setStatusMsg(msg)
  }, [])

  async function submit() {
    if (submitting) return

    if (!tier) {
      fail('Please select an engagement tier above.')
      return
    }
    if (!fullName.trim() || !email.trim() || !date || !signature.trim()) {
      fail('Please complete name, email, date, and signature to proceed.')
      return
    }

    setSubmitting(true)
    setStatusMsg(null)

    try {
      const res = await fetch('/api/proposal-signature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: TIER_NAMES[tier],
          fullName: fullName.trim(),
          email: email.trim(),
          date,
          signature: signature.trim(),
        }),
      })
      const data = await res.json().catch(() => null)

      if (!res.ok || !data?.success) {
        fail(
          data?.error ||
            'We could not record your signature. Please email inquiry@forgefranchising.com directly.'
        )
        return
      }

      setStatusMsg(null)
      setConfirmed({ name: TIER_NAMES[tier], price: TIER_PRICES[tier] })
    } catch {
      fail(
        'We could not record your signature. Please email inquiry@forgefranchising.com directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        html{scroll-behavior:smooth}
        body{margin:0;background:#0A0A0A;color:#FFFFFF;-webkit-font-smoothing:antialiased}
        .proposal-root a{color:#F87000;text-decoration:none}
        .proposal-root a:hover{color:#FF8B2E;text-decoration:underline}
        .proposal-root :focus-visible{outline:2px solid #F87000;outline-offset:2px}
        .proposal-root ::placeholder{color:#55555C;opacity:1}
        .proposal-root [data-reveal]{opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s ease}
        .proposal-root [data-reveal="in"]{opacity:1;transform:none}
        .proposal-root [data-tiersel="on"]{border-color:#F87000 !important;background:#1C1C20 !important}
        .proposal-btn-outline:hover{border-color:#F87000;color:#F87000}
        .proposal-btn-solid:hover{background:#FF8B2E;border-color:#FF8B2E}
        .proposal-btn-solid:disabled{cursor:not-allowed;opacity:0.7}

        /* Chrome paints autofilled fields with its own light background, which
           blows out the dark form. Repaint via inset shadow, the only property
           the autofill style does not override. */
        .proposal-root input:-webkit-autofill,
        .proposal-root input:-webkit-autofill:hover,
        .proposal-root input:-webkit-autofill:focus,
        .proposal-root input:-webkit-autofill:active{
          -webkit-text-fill-color:#FFFFFF;
          -webkit-box-shadow:0 0 0 1000px #141416 inset;
          box-shadow:0 0 0 1000px #141416 inset;
          caret-color:#FFFFFF;
          border:1px solid rgba(255,255,255,0.15);
          transition:background-color 600000s 0s,color 600000s 0s;
        }

        /* Confirmation state */
        /* Sequence: panel rises, logo fades, ring draws, check draws, steps stagger. */
        .proposal-panel{animation:proposal-panel-in 520ms ease-out both}
        .proposal-logo{animation:proposal-logo-in 420ms ease-out both}
        .proposal-ring{stroke-dasharray:252;stroke-dashoffset:252;animation:proposal-ring 500ms ease-out 400ms forwards}
        .proposal-check-path{stroke-dasharray:50;stroke-dashoffset:50;animation:proposal-check 400ms ease-out 900ms forwards}
        .proposal-step{animation:proposal-step-in 460ms ease-out both}
        .proposal-particle{animation:proposal-particle 1800ms ease-out both}

        @keyframes proposal-panel-in{
          from{opacity:0;transform:translateY(16px)}
          to{opacity:1;transform:none}
        }
        @keyframes proposal-logo-in{
          from{opacity:0;transform:translateY(6px)}
          to{opacity:1;transform:none}
        }
        @keyframes proposal-ring{to{stroke-dashoffset:0}}
        @keyframes proposal-check{to{stroke-dashoffset:0}}
        @keyframes proposal-step-in{
          from{opacity:0;transform:translateY(10px)}
          to{opacity:1;transform:none}
        }
        @keyframes proposal-particle{
          0%{opacity:0;transform:translate(0,0) scale(0.6)}
          14%{opacity:1}
          100%{opacity:0;transform:translate(var(--px),var(--py)) scale(0.25)}
        }

        @media (prefers-reduced-motion:reduce){
          html{scroll-behavior:auto}
          .proposal-root [data-reveal]{opacity:1;transform:none;transition:none}
          /* Final state, immediately. No drawing, no stagger, no particles. */
          .proposal-panel,
          .proposal-logo,
          .proposal-step{animation:none;opacity:1;transform:none}
          .proposal-ring,
          .proposal-check-path{animation:none;stroke-dashoffset:0}
          .proposal-particle{display:none}
        }
        @media print{
          *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
          .proposal-root [data-reveal]{opacity:1 !important;transform:none !important;transition:none !important}
          .proposal-panel,
          .proposal-logo,
          .proposal-step{animation:none !important;opacity:1 !important;transform:none !important}
          .proposal-ring,
          .proposal-check-path{animation:none !important;stroke-dashoffset:0 !important}
          .proposal-particle{display:none !important}
        }
      `}</style>

      <div
        ref={rootRef}
        className="proposal-root"
        style={{
          fontFamily: BODY,
          background: '#0A0A0A',
          color: '#FFFFFF',
          minHeight: '100vh',
          fontSize: '17px',
          lineHeight: 1.6,
        }}
      >
        {/* ---------------------------------------------------------- */}
        {/*  Header                                                     */}
        {/* ---------------------------------------------------------- */}
        <header style={sectionStyle}>
          <div
            style={{
              maxWidth: '1060px',
              margin: '0 auto',
              padding: 'clamp(56px,8vw,104px) 24px clamp(48px,7vw,88px)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
                marginBottom: 'clamp(48px,7vw,80px)',
              }}
            >
              <div style={{ width: 'min(340px,70vw)' }}>
                <Image
                  src="/uncaged-fitness-logo.png"
                  alt="Uncaged Fitness logo"
                  width={1500}
                  height={1240}
                  priority
                  style={{ width: '100%', height: '160px', objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  textAlign: 'right',
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#A0A0A8',
                  lineHeight: 2,
                }}
              >
                <div style={{ color: '#F87000', fontWeight: 600 }}>Confidential</div>
                <div>August 2026</div>
              </div>
            </div>
            <p
              style={{
                margin: '0 0 20px',
                fontSize: '13px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#F87000',
                fontWeight: 600,
              }}
            >
              Franchise Development Proposal
            </p>
            <h1
              style={{
                margin: '0 0 24px',
                fontFamily: DISPLAY,
                fontWeight: 700,
                textTransform: 'uppercase',
                fontSize: 'clamp(52px,9vw,108px)',
                lineHeight: 0.98,
                letterSpacing: '0.01em',
              }}
            >
              Franchising
              <br />
              Uncaged Fitness
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(17px,2.4vw,21px)',
                color: '#A0A0A8',
                maxWidth: '560px',
              }}
            >
              Prepared for Cody Savoy, Uncaged Fitness Inc.
              <br />
              640 Lincoln Street, Worcester, Massachusetts
            </p>
          </div>
        </header>

        {/* ---------------------------------------------------------- */}
        {/*  Why this changed                                           */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div data-reveal style={wrapStyle}>
            <p style={eyebrowStyle}>Why This Recommendation Changed</p>
            <h2 style={{ ...h2Style, margin: '0 0 24px' }}>A revised recommendation</h2>
            <p
              style={{
                margin: 0,
                maxWidth: '720px',
                color: '#D6D6DC',
                fontSize: 'clamp(17px,2.2vw,19px)',
              }}
            >
              The original proposal assumed two partners and documentation that had not been
              reviewed, and recommended the middle tier on that basis. As sole owner, with SOPs,
              operations manuals, and employee handbooks already in place, the picture is different.
              The full build is now the right scope. Because the foundation exists, it moves faster
              than it would for most operators at this stage.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  How it works                                               */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>How the Engagement Works</p>
              <h2 style={h2Style}>One engagement, one team</h2>
            </div>
            <div
              data-reveal
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
                gap: '32px',
              }}
            >
              <div>
                <h3 style={cardH3Style}>End to end delivery</h3>
                <p style={cardPStyle}>
                  Forge handles the complete build: corporate structure, trademark, the Franchise
                  Disclosure Document, operations, brand standards, recruitment, and franchise
                  sales. One engagement, one team, one point of contact.
                </p>
              </div>
              <div>
                <h3 style={cardH3Style}>In house legal</h3>
                <p style={cardPStyle}>
                  Legal work is performed by Forge&apos;s franchise counsel, with Massachusetts
                  counsel engaged for state specific corporate and employment matters. You are not
                  managing outside firms or paying separately for coordination.
                </p>
              </div>
              <div>
                <h3 style={cardH3Style}>Included in your fee</h3>
                <p style={cardPStyle}>
                  Legal drafting is part of the engagement. No separate hourly billing and no
                  surprise invoices. Government and state filing fees are billed at cost.
                </p>
              </div>
              <div>
                <h3 style={cardH3Style}>Payment terms</h3>
                <p style={cardPStyle}>
                  A deposit is required to begin, with the balance scheduled in advance of each
                  phase. Work on a phase begins once that phase is funded.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Tiers                                                      */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>The Three Tiers</p>
              <h2 style={h2Style}>Engagement options</h2>
            </div>
            <div
              data-reveal
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
                gap: '20px',
                alignItems: 'stretch',
              }}
            >
              {/* Engine Launch */}
              <div
                style={{
                  background: '#141416',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                }}
              >
                <h3
                  style={{
                    margin: '0 0 6px',
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '26px',
                    letterSpacing: '0.03em',
                  }}
                >
                  Engine Launch
                </h3>
                <div
                  style={{
                    margin: '0 0 16px',
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: '40px',
                    color: '#F87000',
                  }}
                >
                  $24,500
                </div>
                <p style={{ margin: '0 0 24px', color: '#A0A0A8', fontSize: '15px' }}>
                  For single revenue line concepts that need the audit and the blueprint before
                  committing further.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: '0 0 28px',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '15px',
                    color: '#D6D6DC',
                  }}
                >
                  {[
                    'Readiness Audit Report and written verdict',
                    'Franchise Business Model Blueprint',
                    'Unit Economics Model',
                    'Operations and training playbooks',
                    'Counsel Briefing Package',
                  ].map((item) => (
                    <li key={item} style={bulletStyle}>
                      <span style={checkStyle}>&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => pick('launch')}
                  className="proposal-btn-outline"
                  style={{
                    marginTop: 'auto',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#FFFFFF',
                    fontFamily: BODY,
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '14px 20px',
                    cursor: 'pointer',
                  }}
                >
                  Select Engine Launch
                </button>
              </div>

              {/* Engine Growth */}
              <div
                style={{
                  background: '#141416',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 6px',
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '26px',
                    letterSpacing: '0.03em',
                  }}
                >
                  Engine Growth
                </h3>
                <div
                  style={{
                    margin: '0 0 16px',
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: '40px',
                    color: '#F87000',
                  }}
                >
                  $49,500
                </div>
                <p style={{ margin: '0 0 24px', color: '#A0A0A8', fontSize: '15px' }}>
                  For multi line concepts that need the complete documentation and disclosure build.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: '0 0 28px',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '15px',
                    color: '#D6D6DC',
                  }}
                >
                  {[
                    'Franchise Disclosure Document and franchise agreement',
                    'Complete Operations Manual, all five revenue lines',
                    'Franchisee Training Curriculum',
                    'Brand Standards Book',
                    'Qualification Framework and Discovery Day Playbook',
                  ].map((item) => (
                    <li key={item} style={bulletStyle}>
                      <span style={checkStyle}>&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => pick('growth')}
                  className="proposal-btn-outline"
                  style={{
                    marginTop: 'auto',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: '#FFFFFF',
                    fontFamily: BODY,
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '14px 20px',
                    cursor: 'pointer',
                  }}
                >
                  Select Engine Growth
                </button>
              </div>

              {/* Engine Empire */}
              <div
                style={{
                  background: '#1C1C20',
                  border: '1px solid #F87000',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-11px',
                    left: '28px',
                    background: '#F87000',
                    color: '#0A0A0A',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                  }}
                >
                  Recommended for Uncaged
                </div>
                <h3
                  style={{
                    margin: '8px 0 6px',
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    fontSize: '26px',
                    letterSpacing: '0.03em',
                  }}
                >
                  Engine Empire
                </h3>
                <div
                  style={{
                    margin: '0 0 16px',
                    fontFamily: DISPLAY,
                    fontWeight: 700,
                    fontSize: '40px',
                    color: '#F87000',
                  }}
                >
                  <span
                    style={{
                      fontSize: '20px',
                      color: '#A0A0A8',
                      fontWeight: 600,
                      fontFamily: BODY,
                    }}
                  >
                    from{' '}
                  </span>
                  $89,500
                </div>
                <p style={{ margin: '0 0 24px', color: '#A0A0A8', fontSize: '15px' }}>
                  The complete build. Corporate, legal, operations, brand, and the sales function
                  handled end to end.
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    margin: '0 0 28px',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '15px',
                    color: '#D6D6DC',
                  }}
                >
                  {[
                    'Everything in Engine Growth',
                    'Entity formation and trademark prosecution',
                    'Multi state registration strategy and filings',
                    'Recruitment website and franchise sales representation',
                    'Support through the first franchisee openings',
                  ].map((item) => (
                    <li key={item} style={bulletStyle}>
                      <span style={checkStyle}>&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => pick('empire')}
                  className="proposal-btn-solid"
                  style={{
                    marginTop: 'auto',
                    background: '#F87000',
                    border: '1px solid #F87000',
                    color: '#0A0A0A',
                    fontFamily: BODY,
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '14px 20px',
                    cursor: 'pointer',
                  }}
                >
                  Select Engine Empire
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Included in full                                           */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>What Is Included, In Full</p>
              <h2 style={{ ...h2Style, margin: '0 0 16px' }}>Scope of work by tier</h2>
              <p style={{ margin: '0 0 56px', color: '#A0A0A8', maxWidth: '640px' }}>
                Deliverables for each tier, grouped by category, with a description of what each
                item is and what it does for you.
              </p>
            </div>

            {/* Empire panel */}
            <div
              data-reveal
              style={{
                background: '#1C1C20',
                border: '1px solid #F87000',
                padding: 'clamp(28px,5vw,48px)',
                marginBottom: '28px',
              }}
            >
              <div style={tierPanelHeadStyle}>
                <h3 style={tierPanelH3Style}>Engine Empire</h3>
                <span style={tierPanelPriceStyle}>from $89,500</span>
              </div>

              <h4 style={groupHeadStyle}>Corporate and Legal</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Readiness Audit Report and written verdict',
                    'A full review of financials, entity structure, leases, partner agreements, and unit economics, closing with a written verdict on franchise readiness.',
                  ],
                  [
                    'Franchisor entity formation and corporate structuring',
                    'Formation of the franchising entity and the structure that separates it from Uncaged Fitness Inc and holds the brand assets.',
                  ],
                  [
                    'Trademark search, application, and prosecution',
                    'Clearance search and filings for UNCAGED FITNESS and related marks, including Uncaged Supply Co and Savoy Wellness Center, carried through registration.',
                  ],
                  [
                    'Franchise Disclosure Document, all twenty three items',
                    'The complete disclosure document required by federal law before a franchise can be offered, drafted item by item around your five revenue lines.',
                  ],
                  [
                    'Franchise agreement',
                    'The contract each franchisee signs. Terms, obligations, territory, and standards, drafted to match the business model.',
                  ],
                  [
                    'Multi state registration strategy and filings',
                    'A plan for which registration states to enter and in what order, with the filings prepared and submitted.',
                  ],
                  [
                    'Audited financial statements, Item 21',
                    'Coordination with your CPA to produce the audited statements the disclosure document requires.',
                  ],
                  [
                    'Item 7 investment schedule',
                    'The initial investment table built from your actual buildout and equipment costs, not industry placeholders.',
                  ],
                  [
                    'Employment agreements and handbook preparation',
                    'Employment documentation reviewed and prepared under Massachusetts law for the franchisor entity and the franchise model.',
                  ],
                  [
                    'Wellness partner agreement template and operating standard',
                    'A standard agreement and operating rules for partner operators inside franchised locations, modeled on the Savoy Wellness Center.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Operations and Systems</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Complete Operations Manual, all five revenue lines',
                    'Built from and upgrading the SOPs already in place, covering memberships, personal training, the protein bar, retail, and the wellness center.',
                  ],
                  [
                    'Franchisee Training Curriculum',
                    'A week by week program that takes a new franchisee from signing to opening day.',
                  ],
                  [
                    'Unit Economics Model',
                    'An Excel model of unit level costs, staffing, and planning assumptions, used to qualify candidates and set expectations.',
                  ],
                  [
                    'Franchise Business Model Blueprint',
                    'The decisions that define the franchise: initial fee, royalty, brand fund, and territory policy, documented with the reasoning behind each.',
                  ],
                  [
                    'Territory design and market map',
                    'How territories are drawn and protected, with a map of priority markets for the first units.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Brand and Marketing</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Brand Standards Book',
                    'Logo use, buildout look and feel, member experience, and voice, so every location reads as Uncaged.',
                  ],
                  [
                    'Franchise recruitment website',
                    'A dedicated site that presents the opportunity to prospective franchisees and feeds the recruitment funnel.',
                  ],
                  [
                    'Franchise marketing collateral and asset kit',
                    'The brochure, presentation, and asset files used across marketplaces, brokers, and events.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Sales and Recruitment</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Franchise sales representation',
                    'Forge represents the brand across franchise marketplaces, broker networks, and industry events.',
                  ],
                  [
                    'Recruitment funnel and CRM setup',
                    'The pipeline from first inquiry to signed agreement, configured and running.',
                  ],
                  [
                    'Franchisee Qualification Framework with scorecard',
                    'Objective criteria for who is awarded a franchise, scored the same way across every candidate.',
                  ],
                  [
                    'Discovery Day Playbook with call scripts',
                    'The structured process and scripts for candidate calls and the on site discovery day.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Ongoing Support</h4>
              <div style={{ ...defGridStyle, marginBottom: 0 }}>
                {[
                  [
                    'Dedicated advisor and weekly working sessions',
                    'One named advisor and a standing weekly session through the engagement.',
                  ],
                  ['Direct channel access', 'A direct line to the Forge team between sessions.'],
                  [
                    'Support through the first franchisee openings',
                    'Qualification, award, training delivery, and opening handled with you for the first units.',
                  ],
                  [
                    'Retained franchisor advisory after launch',
                    'Royalty collection setup, support cadence, and standards enforcement once units are open.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth panel */}
            <div
              data-reveal
              style={{
                background: '#141416',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(28px,5vw,48px)',
                marginBottom: '28px',
              }}
            >
              <div style={tierPanelHeadStyle}>
                <h3 style={tierPanelH3Style}>Engine Growth</h3>
                <span style={tierPanelPriceStyle}>$49,500</span>
              </div>

              <h4 style={groupHeadStyle}>Corporate and Legal</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Readiness Audit Report and verdict',
                    'The same full business review and written verdict that opens every engagement.',
                  ],
                  [
                    'Franchise Disclosure Document and franchise agreement',
                    "The complete disclosure document and the contract each franchisee signs, drafted by Forge's franchise counsel.",
                  ],
                  [
                    'Wellness partner agreement template and operating standard',
                    'A standard agreement and operating rules for partner operators inside franchised locations.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Operations and Systems</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Franchise Business Model Blueprint',
                    'Fee, royalty, brand fund, and territory policy, documented with the reasoning behind each.',
                  ],
                  [
                    'Unit Economics Model',
                    'An Excel model of unit level costs, staffing, and planning assumptions.',
                  ],
                  [
                    'Complete Operations Manual, all five revenue lines',
                    'Built from and upgrading the SOPs already in place, across all five revenue lines.',
                  ],
                  [
                    'Franchisee Training Curriculum',
                    'A week by week program from signing to opening day.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Brand and Marketing</h4>
              <div style={defGridStyle}>
                <div>
                  <strong style={defTermStyle}>Brand Standards Book</strong>
                  <span style={defDescStyle}>
                    Logo use, buildout look and feel, member experience, and voice.
                  </span>
                </div>
              </div>

              <h4 style={groupHeadStyle}>Sales and Recruitment</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Franchisee Qualification Framework with scorecard',
                    'Objective criteria for who is awarded a franchise, scored consistently.',
                  ],
                  [
                    'Discovery Day Playbook and recruitment asset kit',
                    'The candidate process, call scripts, and the assets used to present the opportunity.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Ongoing Support</h4>
              <div style={{ ...defGridStyle, marginBottom: '36px' }}>
                {[
                  [
                    'Dedicated advisor and weekly working sessions',
                    'One named advisor and a standing weekly session through the engagement.',
                  ],
                  ['Direct channel access', 'A direct line to the Forge team between sessions.'],
                  [
                    'Ninety days of post launch advisory',
                    'Continued advisory for ninety days after the legal build is complete.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  margin: 0,
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  color: '#A0A0A8',
                  fontSize: '14px',
                }}
              >
                Not included at this tier: entity formation, trademark prosecution, multi state
                registrations, employment documentation, the recruitment website, and franchise
                sales representation.
              </p>
            </div>

            {/* Launch panel */}
            <div
              data-reveal
              style={{
                background: '#141416',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(28px,5vw,48px)',
              }}
            >
              <div style={tierPanelHeadStyle}>
                <h3 style={tierPanelH3Style}>Engine Launch</h3>
                <span style={tierPanelPriceStyle}>$24,500</span>
              </div>

              <h4 style={groupHeadStyle}>Corporate and Legal</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Readiness Audit Report and written verdict',
                    'The full business review and a written verdict on franchise readiness.',
                  ],
                  [
                    'Counsel Briefing Package',
                    'An organized brief that lets counsel of your choosing start the legal build without rediscovery.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Operations and Systems</h4>
              <div style={defGridStyle}>
                {[
                  [
                    'Franchise Business Model Blueprint',
                    'Fee, royalty, brand fund, and territory policy, documented with reasoning.',
                  ],
                  [
                    'Unit Economics Model',
                    'An Excel model of unit level costs, staffing, and planning assumptions.',
                  ],
                  [
                    'Gym Floor Operations Playbook',
                    'Documented floor operations for the core membership and training business.',
                  ],
                  [
                    'Training Delivery Playbook',
                    'How training programs are structured, staffed, and delivered consistently.',
                  ],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <h4 style={groupHeadStyle}>Ongoing Support</h4>
              <div style={{ ...defGridStyle, marginBottom: '36px' }}>
                {[
                  [
                    'Dedicated advisor and weekly working sessions',
                    'One named advisor and a standing weekly session through the engagement.',
                  ],
                  ['Direct channel access', 'A direct line to the Forge team between sessions.'],
                ].map(([term, desc]) => (
                  <div key={term}>
                    <strong style={defTermStyle}>{term}</strong>
                    <span style={defDescStyle}>{desc}</span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  margin: 0,
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  color: '#A0A0A8',
                  fontSize: '14px',
                }}
              >
                Everything else on this page is not included at this tier.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Comparison matrix                                          */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>Comparison Matrix</p>
              <h2 style={h2Style}>Deliverables compared</h2>
            </div>
            <div
              data-reveal
              style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' } as CSSProperties}
            >
              <table
                style={{
                  width: '100%',
                  minWidth: '640px',
                  borderCollapse: 'collapse',
                  fontSize: '15px',
                }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{
                        textAlign: 'left',
                        padding: '14px 16px 14px 0',
                        borderBottom: '1px solid rgba(255,255,255,0.15)',
                        fontSize: '12px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#A0A0A8',
                        fontWeight: 600,
                      }}
                    >
                      Deliverable
                    </th>
                    <th scope="col" style={thBase}>
                      Launch
                    </th>
                    <th scope="col" style={thBase}>
                      Growth
                    </th>
                    <th
                      scope="col"
                      style={{
                        ...thBase,
                        borderBottom: '1px solid #F87000',
                        background: '#1C1C20',
                        color: '#F87000',
                      }}
                    >
                      Empire
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map(({ group, rows }) => (
                    <Fragment key={group}>
                      <tr>
                        <td colSpan={4} style={matrixGroupTd}>
                          {group}
                        </td>
                      </tr>
                      {rows.map(([label, l, g, e]) => (
                        <tr key={label}>
                          <td style={tdLabel}>{label}</td>
                          <td style={l ? tdYes : tdNo}>{l ? CHECK : '-'}</td>
                          <td style={g ? tdYes : tdNo}>{g ? CHECK : '-'}</td>
                          <td style={e ? tdYesEmpire : tdNoEmpire}>{e ? CHECK : '-'}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Process and timeline                                       */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>The Process and Timeline</p>
              <h2 style={{ ...h2Style, margin: '0 0 16px' }}>Four phases</h2>
              <p style={{ margin: '0 0 48px', color: '#A0A0A8', maxWidth: '640px' }}>
                Durations below are estimates. They are replaced with firm dates after the phase one
                audit.
              </p>
            </div>
            <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                [
                  '01',
                  'Business Audit and Verdict',
                  'Est. 2 to 3 weeks',
                  'Financials, trademark status, entity structure, leases, wellness partner agreements, and unit economics reviewed. Ends with a written readiness verdict.',
                ],
                [
                  '02',
                  'Corporate Structure and Systemization',
                  'Est. 6 to 8 weeks',
                  'Entity formation, trademark filing, and the conversion of existing SOPs into a franchise grade operations manual, training curriculum, and brand standards.',
                ],
                [
                  '03',
                  'Legal Build and Registrations',
                  'Est. 8 to 12 weeks',
                  'The FDD and franchise agreement prepared, fee and royalty and territory policy finalized, state strategy decided and filings made.',
                ],
                [
                  '04',
                  'Launch and First Franchisees',
                  'Est. ongoing from launch',
                  'Recruitment opens, candidates qualified against the framework, first units awarded, trained, and opened with direct support.',
                ],
              ].map(([num, title, duration, body], i, arr) => (
                <div
                  key={num}
                  style={
                    i === arr.length - 1
                      ? { ...phaseRowStyle, borderBottom: '1px solid rgba(255,255,255,0.08)' }
                      : phaseRowStyle
                  }
                >
                  <div style={phaseNumStyle}>{num}</div>
                  <div>
                    <div style={phaseHeadRowStyle}>
                      <h3 style={phaseH3Style}>{title}</h3>
                      <span style={phaseDurStyle}>{duration}</span>
                    </div>
                    <p style={phasePStyle}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Why Forge                                                  */}
        {/* ---------------------------------------------------------- */}
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>Why Forge</p>
              <h2 style={h2Style}>How we work</h2>
            </div>
            <div
              data-reveal
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
                gap: '32px',
              }}
            >
              <div>
                <h3 style={cardH3Style}>Education before engagement</h3>
                <p style={cardPStyle}>
                  You will understand every document you sign and every policy you set before it is
                  final.
                </p>
              </div>
              <div>
                <h3 style={cardH3Style}>One team end to end</h3>
                <p style={cardPStyle}>
                  Corporate, legal, operations, brand, and sales under a single engagement rather
                  than four vendors.
                </p>
              </div>
              <div>
                <h3 style={cardH3Style}>Built for operators</h3>
                <p style={cardPStyle}>
                  Payment terms set out in advance, and advisory that continues past launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Selection and signature                                    */}
        {/* ---------------------------------------------------------- */}
        <section id="selection" style={sectionStyle}>
          <div style={wrapStyle}>
            <div data-reveal>
              <p style={eyebrowStyle}>Selection and Signature</p>
              <h2 style={h2Style}>Select your engagement</h2>
            </div>
            <div data-reveal style={{ maxWidth: '720px' }}>
              {confirmed ? (
                <ConfirmationPanel confirmed={confirmed} reduceMotion={reduceMotion} />
              ) : (
                <>
              <div
                role="radiogroup"
                aria-label="Engagement tier"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                  gap: '14px',
                  marginBottom: '36px',
                }}
              >
                {[
                  ['launch', 'Engine Launch', '$24,500'],
                  ['growth', 'Engine Growth', '$49,500'],
                  ['empire', 'Engine Empire', 'from $89,500'],
                ].map(([key, name, price]) => (
                  <button
                    key={key}
                    type="button"
                    role="radio"
                    aria-checked={tier === key}
                    data-tiersel={tier === key ? 'on' : 'off'}
                    onClick={() => choose(key)}
                    style={{
                      background: '#141416',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      padding: '20px',
                      cursor: 'pointer',
                      fontFamily: BODY,
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: DISPLAY,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '20px',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {name}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        color: '#A0A0A8',
                        fontSize: '14px',
                        marginTop: '4px',
                      }}
                    >
                      {price}
                    </span>
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
                  gap: '20px',
                  marginBottom: '20px',
                }}
              >
                <label style={labelStyle}>
                  Full name
                  <input
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value)
                      clearStatus()
                    }}
                    style={inputStyle}
                  />
                </label>
                <label style={labelStyle}>
                  Email
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      clearStatus()
                    }}
                    style={inputStyle}
                  />
                </label>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
                  gap: '20px',
                  marginBottom: '32px',
                }}
              >
                <label style={labelStyle}>
                  Date
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value)
                      clearStatus()
                    }}
                    style={{ ...inputStyle, colorScheme: 'dark' }}
                  />
                </label>
                <label style={labelStyle}>
                  Typed signature
                  <input
                    type="text"
                    placeholder="Type your full legal name"
                    value={signature}
                    onChange={(e) => {
                      setSignature(e.target.value)
                      clearStatus()
                    }}
                    style={inputStyle}
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={submit}
                disabled={submitting}
                className="proposal-btn-solid"
                style={{
                  background: '#F87000',
                  border: '1px solid #F87000',
                  color: '#0A0A0A',
                  fontFamily: BODY,
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  width: '100%',
                }}
              >
                {submitting ? 'Submitting' : 'Select and proceed to agreement'}
              </button>

              {statusMsg && (
                <p role="status" style={{ margin: '16px 0 0', fontSize: '15px', color: '#F87000' }}>
                  {statusMsg}
                </p>
              )}

              <p
                style={{
                  margin: '20px 0 0',
                  fontSize: '13px',
                  color: '#7A7A82',
                  lineHeight: 1.6,
                }}
              >
                Selection initiates the engagement agreement, which is executed separately and
                governs the engagement. This page is a proposal and not a contract.
              </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/*  Footer                                                     */}
        {/* ---------------------------------------------------------- */}
        <footer>
          <div
            style={{
              maxWidth: '1060px',
              margin: '0 auto',
              padding: 'clamp(56px,8vw,88px) 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '28px',
                marginBottom: '44px',
              }}
            >
              <div style={{ width: 'min(220px,60vw)' }}>
                <Image
                  src="/forge-franchising-logo-white.png"
                  alt="Forge Franchising Group logo"
                  width={1396}
                  height={711}
                  style={{ width: '100%', height: '72px', objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  fontSize: '15px',
                  color: '#A0A0A8',
                  textAlign: 'right',
                  lineHeight: 2,
                }}
              >
                <div>
                  <a href="mailto:inquiry@forgefranchising.com">inquiry@forgefranchising.com</a>
                </div>
                <div>
                  <a href="https://forgefranchising.com">forgefranchising.com</a>
                </div>
              </div>
            </div>
            <p
              style={{
                margin: 0,
                paddingTop: '28px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                fontSize: '12px',
                color: '#6A6A72',
                lineHeight: 1.7,
                maxWidth: '840px',
              }}
            >
              This document is a confidential proposal for professional services and is not a
              franchise offering. A franchise may be offered only through a Franchise Disclosure
              Document delivered in accordance with the FTC Franchise Rule and applicable state law.
              Nothing in this document is a representation or guarantee of financial performance,
              revenue, profit, or results. Forge Franchising Group is not a law firm. All legal
              documents are prepared by licensed counsel.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
