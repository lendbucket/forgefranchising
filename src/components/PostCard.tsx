import Link from 'next/link'

/** Typographic insight card: a solid color cover with a large mark. */
export function PostCard({
  category,
  mark,
  meta,
  title,
  href,
  teaser,
  cover,
  markColor,
}: {
  category: string
  mark: string
  meta: string
  title: string
  href: string
  teaser: string
  cover: string
  markColor: string
}) {
  return (
    <Link href={href} className="group block text-graphite">
      <div className={`relative overflow-hidden aspect-[4/3] max-[720px]:aspect-auto max-[720px]:h-[220px] p-8 max-[720px]:p-6 mb-6 max-[720px]:mb-5 flex flex-col justify-between ${cover}`}>
        <span className="text-[13px] font-semibold">{category}</span>
        <span className={`font-display font-bold leading-[0.8] text-[clamp(64px,7vw,112px)] max-[720px]:text-[88px] ${markColor}`} style={{ letterSpacing: '-0.06em' }} aria-hidden="true">
          {mark}
        </span>
      </div>
      <p className="mb-2 max-[720px]:mb-1.5 text-sm max-[720px]:text-[13px] text-steel">{meta}</p>
      <h3 className="font-display !text-2xl max-[720px]:!text-[22px] font-bold !leading-[1.15] mb-2.5 max-[720px]:mb-2 decoration-2 decoration-ember underline-offset-[6px] group-hover:underline" style={{ letterSpacing: '-0.02em' }}>
        {title}
      </h3>
      <p className="text-base max-[720px]:text-[15px] leading-relaxed text-steel">{teaser}</p>
    </Link>
  )
}
