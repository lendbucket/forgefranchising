import Link from 'next/link'
import { Arrow } from '@/components/Arrow'
import { ctaFor } from '@/lib/cta'

/**
 * Mid page call to action: an inline graphite panel placed about halfway
 * through a page's content. It sits inside an existing section, so the
 * white and stone section rhythm is unchanged. Driven by src/lib/cta.ts.
 */
export function MidCTA({ route, className = 'mt-16 max-[720px]:mt-12' }: { route: string; className?: string }) {
  const cta = ctaFor(route)
  if (!cta) return null
  return (
    <aside
      data-cta="mid"
      aria-label="Next step"
      className={`bg-graphite surface-dark p-10 max-[720px]:p-6 grid min-[961px]:grid-cols-[minmax(0,1fr)_auto] gap-x-12 gap-y-6 items-center ${className}`}
    >
      <div>
        <p className="font-display text-[28px] max-[720px]:text-2xl font-bold leading-tight text-white mb-2" style={{ letterSpacing: '-0.025em' }}>
          {cta.mid.heading}
        </p>
        <p className="text-[16px] leading-relaxed text-mist max-w-[620px]">{cta.mid.body}</p>
      </div>
      <div className="flex flex-col gap-2 min-[961px]:items-end">
        <Link href={cta.primary.href} className="btn-primary">
          {cta.primary.label}
          <Arrow />
        </Link>
        {cta.secondary && (
          <Link href={cta.secondary.href} className="inline-flex items-center min-h-[44px] text-sm font-semibold text-white underline underline-offset-4 hover:text-ember-hover">
            {cta.secondary.label}
          </Link>
        )}
      </div>
    </aside>
  )
}
