import Link from 'next/link'

/**
 * GuidedPath: a numbered set of starting steps, laid out like the homepage
 * "where to begin" section. Each step is a white card with a heavy top rule;
 * the first rule is ember.
 */

type PathStep = {
  step: number
  title: string
  description: string
  href: string
  /** Time estimate shown beside the step number */
  time?: string
}

type GuidedPathProps = {
  heading?: string
  subheading?: string
  steps: PathStep[]
}

export function GuidedPath({ heading = 'Where to begin', subheading, steps }: GuidedPathProps) {
  return (
    <section className="section-padding bg-stone">
      <div className="container-wide">
        <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-16 max-[720px]:mb-8">
          <h2 className="heading-2">{heading}</h2>
          {subheading && <p className="lead !text-[17px] max-w-[560px]">{subheading}</p>}
        </div>
        <ol className={`grid gap-6 max-[720px]:gap-4 min-[721px]:grid-cols-3 ${steps.length === 5 ? 'min-[1141px]:grid-cols-5' : 'min-[1141px]:grid-cols-4'}`}>
          {steps.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group block h-full bg-white p-7 border-t-4 ${i === 0 ? 'border-ember' : 'border-graphite'} text-graphite`}
              >
                <span className="flex justify-between items-baseline mb-10 max-[720px]:mb-6">
                  <span className="font-display text-[44px] font-bold leading-[0.9]" style={{ letterSpacing: '-0.05em' }}>
                    {item.step}
                  </span>
                  {item.time && <span className="text-[13px] text-steel">{item.time}</span>}
                </span>
                <h3 className="font-display !text-xl font-bold !leading-[1.2] mb-2.5 decoration-2 decoration-ember underline-offset-[6px] group-hover:underline" style={{ letterSpacing: '-0.015em' }}>
                  {item.title}
                </h3>
                <span className="block text-[15px] leading-[1.55] text-steel">{item.description}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
