import Link from 'next/link'
import { Arrow } from '@/components/Arrow'

/** Closing ember section: heading and lead on the left, large linked rows on the right. */
export function ContactRows({
  heading,
  body,
  rows,
  id = 'contact',
}: {
  heading: string
  body: string
  rows: { title: string; desc?: string; href: string }[]
  id?: string
}) {
  return (
    <section id={id} className="surface-ember">
      <div className="wrap grid min-[961px]:grid-cols-2 gap-16 max-[960px]:gap-10 items-end py-32 max-[720px]:py-[88px]">
        <div>
          <h2 className="heading-2 mb-6 max-[720px]:mb-5">{heading}</h2>
          <p className="lead max-w-[560px]">{body}</p>
        </div>
        <div className="border-t-2 border-graphite">
          {rows.map((c) => {
            const content = (
              <>
                <span className="min-w-0">
                  <span className="block font-display text-[26px] max-[720px]:text-[22px] font-bold break-words" style={{ letterSpacing: '-0.02em' }}>
                    {c.title}
                  </span>
                  {c.desc && <span className="block mt-0.5 text-[15px]">{c.desc}</span>}
                </span>
                <Arrow size={24} />
              </>
            )
            const cls = 'flex items-center justify-between gap-6 max-[720px]:gap-4 min-h-[96px] max-[720px]:min-h-[84px] max-[720px]:py-4 border-b border-graphite/30 text-graphite transition-colors hover:bg-white/10'
            return c.href.startsWith('mailto:') ? (
              <a key={c.href} href={c.href} className={cls}>
                {content}
              </a>
            ) : (
              <Link key={c.href} href={c.href} className={cls}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
