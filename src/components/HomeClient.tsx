import Link from 'next/link'
import { Arrow } from '@/components/Arrow'
import { StickyCTA } from '@/components/StickyCTA'
import { CONTACT_EMAIL } from '@/lib/constants'
import { PostCard } from '@/components/PostCard'
import { ContactRows } from '@/components/ContactRows'

/**
 * Homepage body, built to design-reference/homepage-desktop.html and
 * homepage-mobile.html. Sections alternate graphite, white, ember, and stone
 * in the order the reference sets.
 */

type Phase = { number: string; title: string; description: string }
type Industry = { name: string; href: string; icon: string }

const FLAME =
  'M520 40c-40 120 40 200 20 320-14 84-90 120-90 220 0 120 120 160 120 300 0 60-30 100-60 120 140-40 230-150 230-300 0-170-130-230-110-380 10-80 70-140 90-160-90 20-170 80-200 180 0-120 20-220 0-300z'

const paths = [
  { n: '01', title: 'Franchise your business', body: 'Feasibility, FDD, operations, and franchise sales', href: '/services' },
  { n: '02', title: 'Sell or buy a business in Texas', body: 'Confidential, broker led sales and valuations', href: '/sell-your-business' },
  { n: '03', title: 'Buy or sell a franchise', body: 'Brand evaluation, FDD review, resale and transfer', href: '/buy-a-franchise' },
]

const pillars = [
  { title: 'Profitability and unit economics', desc: 'Can the model support two layers of ownership and still deliver a strong operator return?' },
  { title: 'Systems and operations', desc: 'Are your processes documented well enough that a new operator can learn them without you?' },
  { title: 'Brand strength and defensibility', desc: 'Does your brand carry enough recognition and legal protection to justify a franchise investment?' },
  { title: 'Replicability and market demand', desc: 'Can the concept reproduce in a new market by a new operator, and does that market want it?' },
]

const why = [
  {
    lead: 'Operator built',
    body: 'Forge is run by people who have built, scaled, and sold businesses. The systems we design for clients come from that operating experience.',
  },
  {
    lead: 'One team',
    body: 'Feasibility, the FDD, operations, and franchise sales are handled by one team under one engagement, so nothing is lost in a handoff between separate vendors.',
  },
  {
    lead: 'Software backed',
    body: 'Documents, training, and franchisee onboarding live on one platform, so your first franchisee and your fiftieth work from the same system.',
  },
]

const signs = [
  'Profitable for at least two years',
  'Runs without you in daily operations',
  'Someone new can learn your system in 90 days or less',
  'Real demand for your product or service in other markets',
  'A brand people recognize and trust',
  'Unit economics that support a strong franchisee return',
  'You are ready to lead a network, not just a location',
]

const broker = [
  { label: 'Sell your business', href: '/sell-your-business', desc: 'A confidential, broker led sale in Texas.' },
  { label: 'Business valuation', href: '/business-valuation', desc: 'A broker opinion of value, built the way buyers price.' },
  { label: 'Buy a business', href: '/buy-a-business', desc: 'Criteria, financing, and due diligence for buyers.' },
  { label: 'Buy a franchise', href: '/buy-a-franchise', desc: 'Read the FDD and validate a brand before you sign.' },
]

const posts = [
  {
    category: 'Complete guide',
    mark: '2026',
    meta: '14 min read',
    title: 'How to franchise your business in 2026',
    href: '/blog/how-to-franchise-your-business',
    teaser: 'Most owners start with the legal work. That is backwards. This guide covers feasibility, structure, FDD filing, and your first franchise sale in the right order.',
    cover: 'bg-graphite text-white',
    markColor: 'text-ember',
  },
  {
    category: 'Education',
    mark: 'FDD',
    meta: 'Guide',
    title: 'What a franchise disclosure document is and why it matters',
    href: '/blog/franchise-disclosure-document',
    teaser: 'The FDD is not a formality. It is the single document that determines whether your franchise can legally sell.',
    cover: 'bg-ember-fill text-graphite',
    markColor: 'text-graphite',
  },
  {
    category: 'Finance',
    mark: 'Cost',
    meta: 'Guide',
    title: 'How much it costs to franchise a business',
    href: '/blog/cost-to-franchise-a-business',
    teaser: 'Anyone quoting $25,000 for a full franchise package is cutting corners you cannot afford. Here is what real development costs.',
    cover: 'bg-ash text-graphite',
    markColor: 'text-graphite',
  },
]

const steps = [
  { step: '1', title: 'Find out if your business qualifies', description: 'Eight questions, two minutes, and you will know where you stand.', href: '/is-my-business-franchisable', time: '2 min' },
  { step: '2', title: 'Understand the four phases', description: 'See how a proven business becomes a franchise brand, step by step.', href: '/how-it-works', time: '5 min read' },
  { step: '3', title: 'Model your franchise economics', description: 'Plug in your numbers and see projected royalty income at 10, 25, or 50 units.', href: '/calculator', time: '3 min' },
  { step: '4', title: 'Read the complete franchise guide', description: 'Feasibility through FDD filing and first franchise sale, all in one guide.', href: '/blog/how-to-franchise-your-business', time: '14 min read' },
  { step: '5', title: 'Book your free feasibility call', description: 'Talk to our team. We will tell you honestly whether franchising is the right move.', href: '/contact', time: '30 min call' },
]

const contact = [
  { title: 'Get your free readiness score', desc: 'The assessment takes about two minutes.', href: '/is-my-business-franchisable' },
  { title: 'Book a free feasibility call', desc: 'Talk to our team about your business.', href: '/contact' },
  { title: CONTACT_EMAIL, desc: 'Write to us directly.', href: `mailto:${CONTACT_EMAIL}` },
]

/** Section heading with the reference split: heading left, lead right. */
function SplitHead({ title, children, className = '' }: { title: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end ${className}`}>
      <h2 className="heading-2">{title}</h2>
      {children}
    </div>
  )
}

export function HomeClient({ phases, industries }: { phases: Phase[]; industries: Industry[] }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite text-white">
        <svg
          aria-hidden="true"
          viewBox="0 0 760 1000"
          preserveAspectRatio="xMaxYMin meet"
          className="absolute max-[720px]:hidden right-[-6%] top-[-40px] h-[calc(100%+40px)] w-auto max-w-[56%] max-[960px]:opacity-35"
        >
          <path d={FLAME} fill="#E4572E" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 760 1000" className="absolute min-[721px]:hidden right-[-50px] top-[180px] w-[260px] h-auto">
          <path d={FLAME} fill="#E4572E" />
        </svg>

        <div className="wrap relative pt-32 pb-24 max-[720px]:pt-14 max-[720px]:pb-12">
          <h1 className="heading-display mb-9 max-[720px]:mb-6 max-[720px]:max-w-[320px]">
            Franchise development for owners who built something worth replicating
          </h1>
          <p className="max-w-[600px] max-[720px]:max-w-[300px] mb-11 max-[720px]:mb-8 text-[clamp(17px,1.4vw,20px)] max-[720px]:text-base leading-relaxed text-mist">
            Forge is a franchise development firm that turns profitable, owner operated businesses into franchise brands that grow on other people&apos;s capital, in other people&apos;s markets, under your name.
          </p>
          <div className="flex flex-wrap gap-3.5 max-[720px]:flex-col max-[720px]:gap-3">
            <Link href="/is-my-business-franchisable" className="btn-primary">
              Get your free readiness score
              <Arrow />
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              See our process
            </Link>
          </div>
          <p className="mt-5 max-[720px]:mt-4 text-sm max-[720px]:text-[13px] max-[720px]:text-center text-[#8C959B]">
            The readiness assessment takes about two minutes.
          </p>
        </div>

        {/* Service bar */}
        <div className="relative bg-white text-graphite">
          <div className="wrap grid min-[721px]:grid-cols-3 max-[720px]:!px-0">
            {paths.map((r, i) => (
              <Link
                key={r.href}
                href={r.href}
                className={`flex items-center justify-between gap-6 min-h-[120px] transition-colors hover:bg-stone max-[720px]:min-h-0 max-[720px]:gap-4 max-[720px]:p-5 max-[720px]:border-b max-[720px]:border-line ${
                  i === 0 ? 'min-[721px]:pr-8' : 'min-[721px]:px-8'
                } ${i < 2 ? 'min-[721px]:border-r min-[721px]:border-line' : ''}`}
              >
                <span>
                  <span className="block text-[13px] max-[720px]:text-xs font-semibold text-ember-text mb-1 max-[720px]:mb-0">{r.n}</span>
                  <span className="block font-display text-2xl max-[720px]:text-[21px] font-bold leading-[1.15]" style={{ letterSpacing: '-0.02em' }}>
                    {r.title}
                  </span>
                  <span className="block mt-1 max-[720px]:mt-0.5 text-sm max-[720px]:text-[13px] text-steel">{r.body}</span>
                </span>
                <Arrow size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-36 max-[720px]:py-[88px] border-t border-line bg-white">
        <div className="wrap grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 min-[961px]:gap-20 items-start">
          <h2 className="heading-2">Franchising is a regulated business, and most owners underestimate what it requires</h2>
          <div className="min-[961px]:pt-3">
            <p className="lead mb-6 max-[720px]:mb-4">
              You know your business inside and out. But franchising requires federal disclosure documents, state registrations, legal entity structures, and compliance systems that have nothing to do with running a great restaurant, salon, or gym.
            </p>
            <p className="lead mb-10 max-[720px]:mb-7">
              Owners hire the wrong consultant, get handed a stack of templates, spend $50,000 to $150,000 on legal work that sits in a drawer, and never sell a single franchise. We built Forge to fix that.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn how we work
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-36 max-[720px]:py-[88px] bg-graphite text-white">
        <div className="wrap">
          <SplitHead title="How we develop a franchise system" className="mb-[88px] max-[720px]:mb-7">
            <p className="lead max-w-[560px]">
              Every engagement runs the same four phases in the same order, because each one produces the inputs the next one needs.
            </p>
          </SplitHead>
          <ol className="grid min-[961px]:grid-cols-4 min-[721px]:grid-cols-2 min-[721px]:border-t min-[721px]:border-white/[0.18]">
            {phases.map((ph, i) => (
              <li
                key={ph.number}
                className={`min-[721px]:pt-10 min-[721px]:pb-2 max-[720px]:grid max-[720px]:grid-cols-[76px_minmax(0,1fr)] max-[720px]:gap-3 max-[720px]:py-7 max-[720px]:border-t max-[720px]:border-white/[0.16] ${
                  i % 4 === 0 ? 'min-[721px]:pr-8' : 'min-[721px]:px-8'
                } ${i < 3 ? 'min-[961px]:border-r min-[961px]:border-[rgba(128,128,128,0.25)]' : ''}`}
              >
                <p className="numeral text-[clamp(64px,6vw,96px)] max-[720px]:text-[52px] mb-12 max-[720px]:mb-0">{ph.number}</p>
                <div>
                  <h3 className="font-display !text-[28px] max-[720px]:!text-2xl font-bold mb-3.5 max-[720px]:mb-2" style={{ letterSpacing: '-0.025em' }}>
                    {ph.title}
                  </h3>
                  <p className="text-base max-[720px]:text-[15px] leading-relaxed text-mist mb-8 max-[720px]:mb-0">{ph.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-14 max-[720px]:mt-8">
            <Link href="/how-it-works" className="btn-white">
              Explore the full process
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Readiness Method */}
      <section id="method" className="py-36 max-[720px]:py-[88px] surface-ember">
        <div className="wrap">
          <SplitHead title="The Forge Franchise Readiness Method" className="mb-20 max-[720px]:mb-7">
            <p className="lead max-w-[600px]">
              Before we draft a document or file anything, we test the foundation. Four pillars decide whether a business can carry a franchise system. Weakness in any one of them surfaces later as a failed unit, not a failed document.
            </p>
          </SplitHead>
          <div className="grid min-[961px]:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`border-t-2 border-graphite py-10 max-[720px]:py-6 min-[721px]:grid min-[721px]:grid-cols-[88px_minmax(0,1fr)] min-[721px]:gap-6 ${
                  i % 2 ? 'min-[961px]:pl-10' : 'min-[961px]:pr-10'
                }`}
              >
                <span className="block font-display text-[56px] max-[720px]:text-[40px] leading-[0.85] font-bold max-[720px]:mb-4" style={{ letterSpacing: '-0.05em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <h3 className="font-display !text-[26px] max-[720px]:!text-[22px] font-bold !leading-[1.15] mb-2.5 max-[720px]:mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {p.title}
                  </h3>
                  <span className="block text-base max-[720px]:text-[15px] leading-relaxed">{p.desc}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="mt-12 max-[720px]:mt-2">
            <Link href="/readiness-method" className="btn-dark">
              Explore the full method
            </Link>
          </div>
        </div>
      </section>

      {/* Why Forge */}
      <section className="py-36 max-[720px]:py-[88px] bg-white">
        <div className="wrap">
          <h2 className="heading-2 mb-20 max-[720px]:mb-5 max-w-[900px]">Why owners choose Forge</h2>
          <div className="grid min-[961px]:grid-cols-3 gap-14 max-[960px]:gap-0">
            {why.map((w) => (
              <div key={w.lead} className="border-t-4 border-graphite pt-8 max-[960px]:pt-6 max-[960px]:pb-8">
                <h3 className="font-display !text-[34px] max-[720px]:!text-[28px] font-bold !leading-[1.05] mb-4 max-[720px]:mb-2.5" style={{ letterSpacing: '-0.03em' }}>
                  {w.lead}
                </h3>
                <p className="text-[17px] max-[720px]:text-base leading-[1.65] text-steel">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section id="assessment" className="py-36 max-[720px]:py-[88px] bg-stone">
        <div className="wrap grid min-[961px]:grid-cols-2 gap-16 max-[960px]:gap-6 items-center">
          <div>
            <h2 className="heading-2 mb-7 max-[720px]:mb-5">Find out whether your business is ready to franchise</h2>
            <p className="lead mb-10 max-[720px]:mb-7">
              Our free assessment evaluates seven readiness factors specific to your business. Two minutes, no login, and you get a score with specific recommendations.
            </p>
            <div className="max-[960px]:hidden">
              <Link href="/is-my-business-franchisable" className="btn-primary">
                Take the free assessment
                <Arrow />
              </Link>
              <p className="mt-4 text-sm text-steel">No email required. Results are immediate.</p>
            </div>
          </div>
          <div className="bg-graphite text-white p-12 max-[720px]:px-[22px] max-[720px]:py-7">
            <h3 className="font-display !text-[28px] max-[720px]:!text-[22px] font-bold mb-6 max-[720px]:mb-4" style={{ letterSpacing: '-0.02em' }}>
              Seven signs a business is ready to franchise
            </h3>
            <ol>
              {signs.map((t, i) => (
                <li key={t} className="grid grid-cols-[44px_minmax(0,1fr)] max-[720px]:grid-cols-[36px_minmax(0,1fr)] py-[15px] max-[720px]:py-[13px] border-t border-white/[0.12] text-base max-[720px]:text-[15px] leading-normal">
                  <span className="font-display font-bold text-ember-hover">{String(i + 1).padStart(2, '0')}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="min-[961px]:hidden">
            <Link href="/is-my-business-franchisable" className="btn-primary">
              Take the free assessment
              <Arrow />
            </Link>
            <p className="mt-3.5 text-[13px] text-steel text-center min-[721px]:text-left">No email required. Results are immediate.</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-36 max-[720px]:py-[88px] bg-white">
        <div className="wrap">
          <SplitHead title="Franchise development by industry" className="mb-16 max-[720px]:mb-7">
            <div className="flex flex-wrap gap-8 items-center justify-between">
              <p className="lead !text-[17px] max-[720px]:!text-base max-w-[520px]">
                We work with owners across ten industries that have strong unit economics, repeatable operations, and genuine demand for expansion.
              </p>
              <Link href="/industries" className="btn-secondary max-[720px]:hidden">
                View all industries
              </Link>
            </div>
          </SplitHead>
          <div className="tile-grid grid-cols-2 min-[961px]:grid-cols-3 min-[1141px]:grid-cols-5">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group flex flex-col justify-between min-h-[200px] max-[720px]:min-h-[132px] max-[720px]:gap-6 p-7 max-[720px]:p-[18px] !bg-white text-graphite transition-colors duration-200 hover:!bg-graphite hover:text-white"
              >
                <svg className="w-9 h-9 max-[720px]:w-7 max-[720px]:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={ind.icon} />
                </svg>
                <span className="flex justify-between items-end gap-3">
                  <span className="font-display text-xl max-[720px]:text-[17px] font-bold leading-[1.15]" style={{ letterSpacing: '-0.015em' }}>
                    {ind.name}
                  </span>
                  <svg className="flex-shrink-0 max-[720px]:hidden stroke-ember-text group-hover:stroke-ember-fill" width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 min-[721px]:hidden">
            <Link href="/industries" className="btn-secondary">
              View all industries
            </Link>
          </div>
        </div>
      </section>

      {/* Brokerage */}
      <section id="brokerage" className="py-36 max-[720px]:py-[88px] bg-graphite text-white">
        <div className="wrap grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-20 max-[960px]:gap-0">
          <div>
            <h2 className="heading-2 mb-7 max-[720px]:mb-5">Business brokerage in Texas</h2>
            <p className="lead mb-10 max-[720px]:mb-7">
              Forge also represents owners selling established Texas businesses, works with buyers on the purchase side, and helps franchise owners through a resale. Every engagement starts with a confidential conversation.
            </p>
            <div className="max-[960px]:hidden">
              <Link href="/sell-your-business#inquiry" className="btn-primary">
                Start a confidential conversation
              </Link>
            </div>
          </div>
          <div className="border-t border-white/[0.14] max-[960px]:mb-7">
            {broker.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="group flex items-center justify-between gap-6 max-[720px]:gap-4 min-h-[96px] max-[720px]:min-h-[84px] border-b border-white/[0.14] text-white"
              >
                <span>
                  <span className="block font-display text-[28px] max-[720px]:text-[22px] font-bold transition-colors group-hover:text-ember-hover" style={{ letterSpacing: '-0.025em' }}>
                    {b.label}
                  </span>
                  <span className="block mt-0.5 text-[15px] max-[720px]:text-sm text-fog">{b.desc}</span>
                </span>
                <Arrow size={24} stroke="#F07A52" />
              </Link>
            ))}
          </div>
          <div className="min-[961px]:hidden">
            <Link href="/sell-your-business#inquiry" className="btn-primary">
              Start a confidential conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-36 max-[720px]:py-[88px] bg-white">
        <div className="wrap">
          <SplitHead title="Guides for owners considering franchising" className="mb-16 max-[720px]:mb-7">
            <div className="flex flex-wrap gap-8 items-center justify-between">
              <p className="lead !text-[17px] max-[720px]:!text-base max-w-[520px]">
                Everything we know about franchising, published for free. Read the guides, use the tools, and judge any franchise consultant, including us, from a position of knowledge.
              </p>
              <Link href="/blog" className="btn-secondary">
                Browse all articles
              </Link>
            </div>
          </SplitHead>
          <div className="grid min-[961px]:grid-cols-3 min-[721px]:grid-cols-2 gap-8 max-[720px]:gap-10">
            {posts.map((po) => (
              <PostCard key={po.href} {...po} />
            ))}
          </div>
        </div>
      </section>

      {/* Where to begin */}
      <section className="py-36 max-[720px]:py-[88px] bg-stone">
        <div className="wrap">
          <SplitHead title="Where to begin if you are new to franchising" className="mb-16 max-[720px]:mb-7">
            <p className="lead !text-[17px] max-[720px]:!text-base max-w-[560px]">
              Five steps, each one building on the last. By the end you will know whether franchising fits your business and exactly what the path forward looks like.
            </p>
          </SplitHead>
          <ol className="grid min-[1141px]:grid-cols-5 min-[721px]:grid-cols-3 gap-6 max-[720px]:gap-4">
            {steps.map((st, i) => (
              <li key={st.step}>
                <Link
                  href={st.href}
                  className={`group block h-full bg-white p-7 border-t-4 ${i === 0 ? 'border-ember' : 'border-graphite'} text-graphite`}
                >
                  <span className="flex justify-between items-baseline mb-10 max-[720px]:mb-6">
                    <span className="font-display text-[44px] font-bold leading-[0.9]" style={{ letterSpacing: '-0.05em' }}>
                      {st.step}
                    </span>
                    <span className="text-[13px] text-steel">{st.time}</span>
                  </span>
                  <h3 className="font-display !text-xl font-bold !leading-[1.2] mb-2.5 group-hover:underline decoration-2 decoration-ember underline-offset-[6px]" style={{ letterSpacing: '-0.015em' }}>
                    {st.title}
                  </h3>
                  <span className="block text-[15px] leading-[1.55] text-steel">{st.description}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <ContactRows
        heading="Talk to Forge about your business"
        body="Take our two-minute assessment and get a franchise readiness score with specific recommendations for your business. No cost, no obligation."
        rows={contact}
      />

      <StickyCTA text="Get your free readiness score" href="/is-my-business-franchisable" />
    </>
  )
}
