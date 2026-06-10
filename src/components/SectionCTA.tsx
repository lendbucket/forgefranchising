import Link from 'next/link'

/**
 * SectionCTA: Conversion section placed at natural decision points.
 *
 * Psychology: Isolation effect (Von Restorff) ensures a single primary
 * action stands out. Placed after sections that deliver real value,
 * leveraging reciprocity. The visitor received something useful;
 * the CTA offers the next logical step, not a cold ask.
 */

type SectionCTAProps = {
  heading: string
  body: string
  buttonText?: string
  buttonHref?: string
  variant?: 'dark' | 'light'
  /** Optional secondary link for micro-commitment path */
  secondaryText?: string
  secondaryHref?: string
}

export function SectionCTA({
  heading,
  body,
  buttonText = 'Get Your Free Franchise Readiness Score',
  buttonHref = '/is-my-business-franchisable',
  variant = 'dark',
  secondaryText,
  secondaryHref,
}: SectionCTAProps) {
  const isDark = variant === 'dark'
  return (
    <section className={isDark ? 'bg-espresso text-cream' : 'bg-deep-cream text-espresso'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h2 className={`heading-2 mb-6 ${isDark ? 'text-cream' : 'text-espresso'}`}>
          {heading}
        </h2>
        <p className={`body-large mb-10 max-w-2xl mx-auto ${isDark ? '!text-cream/60' : '!text-muted-brown'}`}>
          {body}
        </p>
        {/* Isolation effect: single primary CTA, visually dominant */}
        <Link href={buttonHref} className="btn-primary">
          {buttonText}
        </Link>
        {/* Optional soft micro-commitment path (foot-in-door) */}
        {secondaryText && secondaryHref && (
          <div className="mt-4">
            <Link
              href={secondaryHref}
              className={`text-sm font-medium link-underline ${isDark ? 'text-cream/50' : 'text-muted-brown'}`}
            >
              {secondaryText}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
