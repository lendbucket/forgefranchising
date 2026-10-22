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
      className={`bg-ash-tint p-6 sm:p-8 ${className}`}
      style={{ borderRadius: '4px', borderLeft: '3px solid #4E5A62' }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-graphite mb-3">How We Work</p>
      <ul className="space-y-2 text-sm text-steel leading-relaxed">
        <li>We do not promise a sale price, a closing date, or a result. The market sets price; buyers and lenders set terms.</li>
        <li>An opinion of value from Forge is a broker opinion of value. It is not a certified appraisal and is not a substitute for one.</li>
        <li>We recommend that buyers and sellers retain their own attorney and CPA for every transaction.</li>
      </ul>
      {BROKER_LICENSE_DISCLOSURE && (
        <p className="mt-4 pt-4 border-t border-graphite/10 text-sm text-graphite">{BROKER_LICENSE_DISCLOSURE}</p>
      )}
    </aside>
  )
}
