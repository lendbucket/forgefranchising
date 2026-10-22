import Link from 'next/link'
import { Arrow } from '@/components/Arrow'

/**
 * BrokerageBand: a pointer from franchise development pages into the
 * brokerage and franchise buyer services, as large linked rows.
 */

const links = [
  { label: 'Sell your business', href: '/sell-your-business', desc: 'A confidential, broker led sale in Texas.' },
  { label: 'Business valuation', href: '/business-valuation', desc: 'A broker opinion of value, built the way buyers price.' },
  { label: 'Buy a business', href: '/buy-a-business', desc: 'Criteria, financing, and due diligence for buyers.' },
  { label: 'Buy a franchise', href: '/buy-a-franchise', desc: 'Read the FDD and validate a brand before you sign.' },
]

export function BrokerageBand({ className = 'bg-white' }: { className?: string }) {
  const dark = /graphite|surface-dark/.test(className)
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-wide grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-20 max-[960px]:gap-10">
        <div>
          <h2 className="heading-2 mb-7">Business brokerage in Texas</h2>
          <p className="lead">
            Forge also represents owners selling established Texas businesses, works with buyers on the purchase
            side, and helps franchise owners through a resale. Every engagement starts with a confidential
            conversation.
          </p>
        </div>
        <div className={`border-t ${dark ? 'border-white/[0.14]' : 'border-graphite'}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group flex items-center justify-between gap-6 min-h-[96px] max-[720px]:min-h-[84px] border-b ${dark ? 'border-white/[0.14] text-white' : 'border-line text-graphite'}`}
            >
              <span>
                <span className={`block font-display text-[28px] max-[720px]:text-[22px] font-bold transition-colors ${dark ? 'group-hover:text-ember-hover' : 'group-hover:text-ember-text'}`} style={{ letterSpacing: '-0.025em' }}>
                  {link.label}
                </span>
                <span className={`block mt-0.5 text-[15px] ${dark ? 'text-fog' : 'text-steel'}`}>{link.desc}</span>
              </span>
              <Arrow size={24} className="text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
