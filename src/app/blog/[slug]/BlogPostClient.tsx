'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import type { BlogPost, BlogCTA } from '@/data/blog-posts'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'
import { PostCard } from '@/components/PostCard'
import { SectionCTA } from '@/components/SectionCTA'
import { sentenceCase } from '@/lib/text'

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatDate(dateString: string) {
  return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Insight card covers rotate through three surfaces, as on the homepage. */
const covers = [
  { cover: 'bg-graphite text-white', markColor: 'text-ember' },
  { cover: 'bg-ember-fill text-graphite', markColor: 'text-graphite' },
  { cover: 'bg-ash text-graphite', markColor: 'text-graphite' },
]

/** Article links: ember text, 1px underline that thickens on hover. */
const linkClass = 'text-ember-text underline underline-offset-[3px] decoration-1 hover:decoration-2'

/** Headings clear the sticky header and the mobile contents row. */
const headingScroll = 'scroll-mt-header-bar xl-no-bar'

type Heading = { id: string; text: string; level: number }

function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = []
  const lines = content.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/\*\*/g, '')
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      headings.push({ id, text, level })
    }
  }
  return headings
}

/**
 * Extract key takeaways from content: uses the first few h2 headings
 * as summary points (chunking / Miller's law).
 */
function extractTakeaways(content: string): string[] {
  const headings = extractHeadings(content)
  return headings
    .filter((h) => h.level === 2)
    .slice(0, 5)
    .map((h) => h.text)
}

/* ------------------------------------------------------------------ */
/*  Inline Text Renderer                                               */
/* ------------------------------------------------------------------ */

function InlineRenderer({ text }: { text: string }) {
  // Handles **bold** and [label](/path) links. Without the link branch the
  // markdown source leaks into the page as literal text and the internal
  // links pass no equity.
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null

        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="text-graphite font-semibold">
              {part.slice(2, -2)}
            </strong>
          )
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          const [, label, href] = link
          if (href.startsWith('/')) {
            return (
              <Link key={i} href={href} className={linkClass}>
                {label}
              </Link>
            )
          }
          return (
            <a
              key={i}
              href={href}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          )
        }

        return <span key={i}>{part}</span>
      })}
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Markdown Renderer                                                  */
/* ------------------------------------------------------------------ */

function MarkdownRenderer({ content }: { content: string }) {
  const blocks = content.split('\n\n')

  return (
    <div>
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        if (trimmed.startsWith('## ')) {
          const text = trimmed.slice(3)
          const id = text.replace(/\*\*/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          return (
            <h2
              key={i}
              id={id}
              className={`font-display font-bold text-graphite text-[30px] min-[721px]:text-[36px] lg:text-[40px] leading-[1.08] tracking-[-0.03em] mt-20 mb-6 max-[720px]:mt-14 ${headingScroll}`}
            >
              <InlineRenderer text={text} />
            </h2>
          )
        }

        if (trimmed.startsWith('### ')) {
          const text = trimmed.slice(4)
          const id = text.replace(/\*\*/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          return (
            <h3
              key={i}
              id={id}
              className={`font-display font-bold text-graphite text-[22px] min-[721px]:text-[24px] leading-[1.2] tracking-[-0.02em] mt-12 mb-4 ${headingScroll}`}
            >
              <InlineRenderer text={text} />
            </h3>
          )
        }

        if (trimmed.includes('|') && trimmed.split('\n').length >= 3) {
          const rows = trimmed.split('\n').filter((r) => r.trim())
          const isTable = rows.every((r) => r.includes('|'))
          if (isTable) {
            const headerCells = rows[0].split('|').map((c) => c.trim()).filter(Boolean)
            const dataRows = rows.slice(2)
            return (
              <div key={i} className="overflow-scroll-x my-10">
                <table className="w-full text-[15px] leading-relaxed border-collapse">
                  <thead>
                    <tr className="border-b-2 border-graphite">
                      {headerCells.map((cell, ci) => (
                        <th key={ci} className="text-left align-bottom py-4 pr-6 font-semibold text-graphite">
                          <InlineRenderer text={cell} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, ri) => {
                      const cells = row.split('|').map((c) => c.trim()).filter(Boolean)
                      return (
                        <tr key={ri} className="border-b border-line">
                          {cells.map((cell, ci) => (
                            <td key={ci} className="align-top py-4 pr-6 text-steel">
                              <InlineRenderer text={cell} />
                            </td>
                          ))}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )
          }
        }

        if (trimmed.match(/^[-*]\s/m)) {
          const items = trimmed.split('\n').filter((l) => l.match(/^[-*]\s/))
          return (
            <ul key={i} className="my-8 space-y-3">
              {items.map((item, li) => (
                <li key={li} className="grid grid-cols-[24px_minmax(0,1fr)] text-[18px] leading-[1.75] text-steel">
                  <span className="mt-[0.72em] w-1.5 h-1.5 bg-ember" aria-hidden="true" />
                  <span><InlineRenderer text={item.replace(/^[-*]\s+/, '')} /></span>
                </li>
              ))}
            </ul>
          )
        }

        if (trimmed.match(/^\d+\.\s/m)) {
          const items = trimmed.split('\n').filter((l) => l.match(/^\d+\.\s/))
          // Items separated by blank lines arrive as separate blocks; keep the
          // number written in the post and join consecutive blocks into one list.
          const continues = /^\d+\.\s/.test(blocks[i - 1]?.trim() ?? '')
          const start = Number(items[0]?.match(/^(\d+)\./)?.[1] ?? 1)
          return (
            <ol key={i} start={start} className={continues ? '-mt-8 mb-8' : 'my-8 border-t border-line'}>
              {items.map((item, li) => (
                <li key={li} className="grid grid-cols-[40px_minmax(0,1fr)] py-4 border-b border-line text-[18px] leading-[1.75] text-steel">
                  <span className="font-display font-bold text-ember-text tabular-nums">{String(start + li).padStart(2, '0')}</span>
                  <span><InlineRenderer text={item.replace(/^\d+\.\s+/, '')} /></span>
                </li>
              ))}
            </ol>
          )
        }

        return (
          <p key={i} className="text-steel text-[18px] leading-[1.75] my-6">
            <InlineRenderer text={trimmed} />
          </p>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Reading Progress Bar                                               */
/* ------------------------------------------------------------------ */

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(scrollPercent, 100))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-ember transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Table of Contents                                                  */
/* ------------------------------------------------------------------ */

function useActiveHeading(headings: Heading[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    )
    for (const heading of headings) {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [headings])

  return activeId
}

/** Desktop: sticky sidebar of hairline rows. */
function TableOfContents({ headings, activeId }: { headings: Heading[]; activeId: string }) {
  if (headings.length === 0) return null

  return (
    <nav aria-label="On this page" className="sticky top-header-gap max-h-[calc(100vh_-_var(--header-h)_-_48px)] overflow-y-auto">
      <p className="text-sm font-semibold text-graphite mb-3">
        On this page
      </p>
      <ul className="border-t border-line">
        {headings.map((h) => (
          <li key={h.id} className="border-b border-line">
            <a
              href={`#${h.id}`}
              aria-current={activeId === h.id ? 'location' : undefined}
              className={`flex items-center py-3 min-h-[44px] text-sm leading-snug transition-colors ${
                h.level === 3 ? 'pl-4' : ''
              } ${
                activeId === h.id
                  ? 'text-graphite font-semibold'
                  : 'text-steel hover:text-graphite'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Mobile and tablet: a horizontal, scrollable row of square chips (section headings only). */
function TableOfContentsChips({ headings, activeId }: { headings: Heading[]; activeId: string }) {
  const sections = headings.filter((h) => h.level === 2)
  if (sections.length === 0) return null

  return (
    <nav
      aria-label="On this page"
      className="xl:hidden sticky top-header z-30 bg-white border-y border-line mb-10 [contain:inline-size]"
    >
      <ol className="flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((h) => (
          <li key={h.id} className="flex-shrink-0">
            <a
              href={`#${h.id}`}
              aria-current={activeId === h.id ? 'location' : undefined}
              className={`flex items-center min-h-[44px] px-4 border text-sm font-medium whitespace-nowrap transition-colors ${
                activeId === h.id
                  ? 'bg-graphite border-graphite text-white'
                  : 'border-line text-graphite hover:border-graphite'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/*  Inline CTA: value-driven, placed at a natural decision point      */
/* ------------------------------------------------------------------ */

function InlineCTA({ cta }: { cta?: BlogCTA }) {
  return (
    <div className="my-16 max-[720px]:my-12 bg-graphite surface-dark p-10 max-[720px]:p-6">
      <h3 className="heading-3 text-white mb-4">
        {cta?.heading ? sentenceCase(cta.heading) : 'Find out if your business is ready to franchise'}
      </h3>
      <p className="text-[17px] leading-relaxed text-fog mb-8 max-w-[560px]">
        {cta?.body ?? 'Take our two-minute assessment and get a franchise readiness score with personalized recommendations. No cost, no obligation.'}
      </p>
      <Link href={cta?.href ?? '/is-my-business-franchisable'} className="btn-primary">
        {cta?.buttonText ? sentenceCase(cta.buttonText) : 'Get your free readiness score'}
      </Link>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Client Component                                              */
/* ------------------------------------------------------------------ */

type BlogPostClientProps = {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogPostClient({
  post,
  relatedPosts,
}: BlogPostClientProps) {
  const headings = useMemo(() => extractHeadings(post.content), [post.content])
  const takeaways = useMemo(() => post.keyTakeaways ?? extractTakeaways(post.content), [post.keyTakeaways, post.content])
  const activeId = useActiveHeading(headings)

  const contentBlocks = post.content.split('\n\n')
  const midpoint = Math.floor(contentBlocks.length / 2)
  const firstHalf = contentBlocks.slice(0, midpoint).join('\n\n')
  const secondHalf = contentBlocks.slice(midpoint).join('\n\n')

  return (
    <>
      <ReadingProgressBar />

      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <nav className="mb-10 max-[720px]:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white truncate min-w-0 max-w-[200px] sm:max-w-none">{post.title}</li>
            </ol>
          </nav>

          <div className="max-w-[880px]">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fog mb-6">
              <span className="text-white font-semibold">{sentenceCase(post.category)}</span>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">/</span>
              <time dateTime={post.datePublished}>
                Published {formatDate(post.datePublished)}
              </time>
            </p>
            <h1 className="heading-1 text-white mb-8 max-[720px]:mb-6">
              {post.title}
            </h1>
            <p className="lead max-w-[720px]">
              {post.description}
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="xl:grid xl:grid-cols-[minmax(0,720px)_256px] xl:justify-between xl:gap-16">
            <article className="max-w-reading mx-auto xl:mx-0 w-full min-w-0">
              <TableOfContentsChips headings={headings} activeId={activeId} />

              {/* Key Takeaways: chunking for skimmers (Miller's law) */}
              {takeaways.length > 0 && (
                <KeyTakeaways items={takeaways} readTime={post.readTime} />
              )}

              <MarkdownRenderer content={firstHalf} />
              <InlineCTA cta={post.cta} />
              <MarkdownRenderer content={secondHalf} />
            </article>

            <aside className="hidden xl:block">
              <TableOfContents headings={headings} activeId={activeId} />
            </aside>
          </div>
        </div>
      </section>

      {/* Continue learning: up to 3 related posts (reduces paralysis, pulls deeper) */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-stone">
          <div className="container-wide">
            <h2 className="heading-2 mb-14 max-[720px]:mb-8">
              Read these next
            </h2>
            <div className="grid min-[961px]:grid-cols-3 min-[721px]:grid-cols-2 gap-x-8 gap-y-16 max-[720px]:gap-y-12">
              {relatedPosts.map((rp, i) => (
                <PostCard
                  key={rp.slug}
                  category={sentenceCase(rp.category)}
                  mark={rp.category}
                  meta={rp.readTime}
                  title={rp.title}
                  href={`/blog/${rp.slug}`}
                  teaser={rp.description}
                  {...covers[i % covers.length]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA: placed at natural decision point after value delivery */}
      <SectionCTA
        heading={post.cta?.heading ? sentenceCase(post.cta.heading) : 'See where your business stands'}
        body={
          post.cta?.body ??
          'If this article raised questions about franchising your business, get a concrete answer. Our free assessment scores your readiness and gives you specific next steps.'
        }
        buttonText={post.cta?.buttonText ? sentenceCase(post.cta.buttonText) : 'Get your free readiness score'}
        buttonHref={post.cta?.href ?? '/is-my-business-franchisable'}
        secondaryText={post.cta ? 'Or contact us directly' : 'Or book a feasibility call directly'}
        secondaryHref="/contact"
      />

      <StickyCTA
        text={post.cta?.buttonText ? sentenceCase(post.cta.buttonText) : 'Get your free readiness score'}
        href={post.cta?.href ?? '/is-my-business-franchisable'}
      />
    </>
  )
}
