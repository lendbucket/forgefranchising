import Link from 'next/link'

/**
 * ContinueLearning: Guided next-step module placed at the end of every page.
 *
 * Psychology: Reduces decision paralysis (Hick's law) by offering exactly 3
 * curated options instead of a full nav. Creates a trail of curiosity through
 * the site (Zeigarnik effect) so the visitor always has a clear deeper click.
 * Uses the goal gradient effect by labeling steps in a learning journey.
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

export function ContinueLearning({
  heading = 'Continue Learning',
  links,
}: ContinueLearningProps) {
  return (
    <section className="section-padding bg-deep-cream">
      <div className="container-wide">
        <p className="eyebrow mb-4">Next Steps</p>
        <h2 className="heading-3 mb-10">{heading}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {links.slice(0, 3).map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="card-interactive group block h-full"
            >
              <span className="text-amber font-display font-bold text-2xl mb-3 block" style={{ letterSpacing: '-0.02em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="heading-4 mb-2 group-hover:text-amber transition-colors">
                {link.label}
              </h3>
              <p className="text-muted-brown text-sm leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
