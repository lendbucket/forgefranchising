import { BROKER_LICENSE_DISCLOSURE } from '@/lib/constants'

/**
 * BrokerageNotice: the standing terms that apply to every brokerage page.
 *
 * Stated plainly and kept short. The license line renders only once
 * BROKER_LICENSE_DISCLOSURE is filled in with a confirmed license.
 */
export function BrokerageNotice({ className = '' }: { className?: string }) {
  return (
    <aside
      aria-label="Brokerage terms"
      className={`bg-stone p-8 max-[720px]:p-6 ${className}`}
      style={{ borderTop: '3px solid #1C1F23' }}
    >
      <p className="font-display text-xl font-bold text-graphite mb-3" style={{ letterSpacing: '-0.02em' }}>How we work</p>
      <ul className="space-y-2 text-[15px] text-steel leading-relaxed">
        <li>We do not promise a sale price, a closing date, or a result. The market sets price; buyers and lenders set terms.</li>
        <li>An opinion of value from Forge is a broker opinion of value. It is not a certified appraisal and is not a substitute for one.</li>
        <li>We recommend that buyers and sellers retain their own attorney and CPA for every transaction.</li>
      </ul>
      {BROKER_LICENSE_DISCLOSURE && (
        <p className="mt-4 pt-4 border-t border-line text-sm text-graphite">{BROKER_LICENSE_DISCLOSURE}</p>
      )}
    </aside>
  )
}
