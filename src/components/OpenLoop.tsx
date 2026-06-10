import Link from 'next/link'

/**
 * OpenLoop: Curiosity gap teaser that points to a deeper page.
 *
 * Psychology: The Zeigarnik effect means people remember and are drawn to
 * incomplete tasks more than completed ones. By opening a question the
 * current page does not fully answer, we create tension that pulls the
 * visitor to the linked page. The teaser must promise specific value,
 * not just "learn more."
 */

type OpenLoopProps = {
  /** The curiosity-gap statement */
  teaser: string
  /** Link text for the next page */
  linkText: string
  href: string
  variant?: 'inline' | 'section'
}

export function OpenLoop({ teaser, linkText, href, variant = 'inline' }: OpenLoopProps) {
  if (variant === 'section') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="bg-white p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ borderRadius: '4px', border: '1px solid rgba(107, 87, 80, 0.08)' }}
        >
          <p className="font-display font-bold text-lg sm:text-xl text-espresso leading-snug max-w-xl" style={{ letterSpacing: '-0.015em' }}>
            {teaser}
          </p>
          <Link
            href={href}
            className="btn-primary flex-shrink-0 text-sm whitespace-nowrap"
          >
            {linkText}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="my-8 py-6" style={{ borderTop: '1px solid rgba(40, 16, 16, 0.08)', borderBottom: '1px solid rgba(40, 16, 16, 0.08)' }}>
      <p className="text-muted-brown leading-relaxed mb-3">
        {teaser}
      </p>
      <Link
        href={href}
        className="text-amber font-semibold text-sm link-underline"
      >
        {linkText}
      </Link>
    </div>
  )
}
