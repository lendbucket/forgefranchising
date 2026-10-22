import Link from 'next/link'
import { Arrow } from '@/components/Arrow'
import { ctaFor } from '@/lib/cta'

/**
 * Hero buttons for a route: the audience's primary action, plus the
 * secondary action where the audience has one. Driven by src/lib/cta.ts.
 */
export function HeroActions({ route, className = 'mt-10' }: { route: string; className?: string }) {
  const cta = ctaFor(route)
  if (!cta) return null
  return (
    <div className={`flex flex-wrap gap-3.5 max-[720px]:flex-col max-[720px]:gap-3 ${className}`}>
      <Link href={cta.primary.href} className="btn-primary" data-cta-location="hero">
        {cta.primary.label}
        <Arrow />
      </Link>
      {cta.secondary && (
        <Link href={cta.secondary.href} className="btn-secondary" data-cta-location="hero">
          {cta.secondary.label}
        </Link>
      )}
    </div>
  )
}
