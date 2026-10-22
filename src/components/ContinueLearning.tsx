import Link from 'next/link'
import { Arrow } from '@/components/Arrow'

/**
 * ContinueLearning: three curated next pages at the end of a page, laid out
 * as a hairline tile grid. Tiles invert to graphite on hover.
 */

type LearningLink = {
  label: string
  href: string
  description: string
}

type ContinueLearningProps = {
  heading?: string
  links: LearningLink[]
}

export function ContinueLearning({ heading = 'Continue learning', links }: ContinueLearningProps) {
  return (
    <section className="section-padding bg-stone">
      <div className="container-wide">
        <h2 className="heading-2 mb-14 max-[720px]:mb-8 max-w-[900px]">{heading}</h2>
        <div className="tile-grid md:grid-cols-3">
          {links.slice(0, 3).map((link, i) => (
            <Link key={link.href} href={link.href} className="card-interactive group flex flex-col justify-between gap-10 min-h-[240px] max-[720px]:min-h-0">
              <span className="numeral text-[56px]">{String(i + 1).padStart(2, '0')}</span>
              <span>
                <h3 className="heading-4 mb-2">{link.label}</h3>
                <span className="flex items-end justify-between gap-4">
                  <p className="text-steel text-[15px] leading-relaxed">{link.description}</p>
                  <Arrow size={18} className="text-accent" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
