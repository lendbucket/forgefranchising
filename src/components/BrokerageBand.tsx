import Link from 'next/link'

/**
 * BrokerageBand: a compact pointer from franchise development pages into the
 * brokerage and franchise buyer services.
 */

const links = [
  { label: 'Sell Your Business', href: '/sell-your-business', desc: 'A confidential, broker led sale in Texas.' },
  { label: 'Business Valuation', href: '/business-valuation', desc: 'A broker opinion of value, built the way buyers price.' },
  { label: 'Buy a Business', href: '/buy-a-business', desc: 'Criteria, financing, and due diligence for buyers.' },
  { label: 'Buy a Franchise', href: '/buy-a-franchise', desc: 'Read the FDD and validate a brand before you sign.' },
]

export function BrokerageBand({ className = 'bg-white' }: { className?: string }) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Selling or Buying</p>
            <h2 className="heading-3 mb-5">Selling or Buying a Business in Texas</h2>
            <p className="text-steel leading-relaxed">
              Forge also represents owners selling established Texas businesses, works with buyers on the purchase
              side, and helps franchise owners through a resale. Every engagement starts with a confidential
              conversation.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="card-interactive group block !p-6">
                <span className="heading-4 block mb-1 group-hover:text-accent transition-colors">{link.label}</span>
                <span className="text-sm text-steel leading-relaxed">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
