'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/data/blog-posts'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { StickyCTA } from '@/components/StickyCTA'

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

const categoryColors: Record<string, string> = {
  Guide: 'bg-amber/10 text-amber',
  Education: 'bg-blue-50 text-blue-700',
  Finance: 'bg-emerald-50 text-emerald-700',
  'Case Study': 'bg-purple-50 text-purple-700',
  Legal: 'bg-red-50 text-red-700',
  Industry: 'bg-teal-50 text-teal-700',
  Operations: 'bg-orange-50 text-orange-700',
  Sales: 'bg-indigo-50 text-indigo-700',
  Technology: 'bg-cyan-50 text-cyan-700',
}

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
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="text-espresso font-semibold">
              {part.slice(2, -2)}
            </strong>
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
            <h2 key={i} id={id} className="font-display text-2xl sm:text-3xl font-bold text-espresso mt-12 mb-6 scroll-mt-24">
              <InlineRenderer text={text} />
            </h2>
          )
        }

        if (trimmed.startsWith('### ')) {
          const text = trimmed.slice(4)
          const id = text.replace(/\*\*/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          return (
            <h3 key={i} id={id} className="font-display text-xl sm:text-2xl font-semibold text-espresso mt-10 mb-4 scroll-mt-24">
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
              <div key={i} className="overflow-scroll-x my-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-espresso/20">
                      {headerCells.map((cell, ci) => (
                        <th key={ci} className="text-left py-3 px-4 font-semibold text-espresso">
                          <InlineRenderer text={cell} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows.map((row, ri) => {
                      const cells = row.split('|').map((c) => c.trim()).filter(Boolean)
                      return (
                        <tr key={ri} className="border-b border-deep-cream">
                          {cells.map((cell, ci) => (
                            <td key={ci} className="py-3 px-4 text-muted-brown">
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
            <ul key={i} className="my-6 space-y-3">
              {items.map((item, li) => (
                <li key={li} className="flex items-start text-muted-brown leading-relaxed">
                  <span className="text-amber mr-3 mt-1.5 text-xs flex-shrink-0">&#9679;</span>
                  <span><InlineRenderer text={item.replace(/^[-*]\s+/, '')} /></span>
                </li>
              ))}
            </ul>
          )
        }

        if (trimmed.match(/^\d+\.\s/m)) {
          const items = trimmed.split('\n').filter((l) => l.match(/^\d+\.\s/))
          return (
            <ol key={i} className="my-6 space-y-3">
              {items.map((item, li) => (
                <li key={li} className="flex items-start text-muted-brown leading-relaxed">
                  <span className="text-amber font-semibold mr-3 flex-shrink-0 min-w-[1.5rem]">{li + 1}.</span>
                  <span><InlineRenderer text={item.replace(/^\d+\.\s+/, '')} /></span>
                </li>
              ))}
            </ol>
          )
        }

        return (
          <p key={i} className="text-muted-brown leading-relaxed text-base sm:text-lg my-5">
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
        className="h-full bg-amber transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Table of Contents                                                  */
/* ------------------------------------------------------------------ */

function TableOfContents({ headings }: { headings: Heading[] }) {
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

  if (headings.length === 0) return null

  return (
    <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-brown/60 mb-4">
        On this page
      </p>
      <ul className="space-y-2 border-l border-deep-cream pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm leading-snug py-1 transition-colors duration-200 ${
                h.level === 3 ? 'pl-3' : ''
              } ${
                activeId === h.id
                  ? 'text-amber font-medium'
                  : 'text-muted-brown/70 hover:text-espresso'
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

/* ------------------------------------------------------------------ */
/*  Inline CTA: value-driven, placed at a natural decision point      */
/* ------------------------------------------------------------------ */

function InlineCTA() {
  return (
    <div className="my-12 bg-espresso p-8 sm:p-10 text-center" style={{ borderRadius: '4px' }}>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-cream mb-4">
        Find Out If Your Business Is Ready to Franchise
      </h3>
      <p className="text-cream/70 mb-6 max-w-lg mx-auto">
        Take our two-minute assessment and get a franchise readiness score
        with personalized recommendations. No cost, no obligation.
      </p>
      <Link href="/is-my-business-franchisable" className="btn-primary">
        Get Your Free Readiness Score
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
  const takeaways = useMemo(() => extractTakeaways(post.content), [post.content])

  const contentBlocks = post.content.split('\n\n')
  const midpoint = Math.floor(contentBlocks.length / 2)
  const firstHalf = contentBlocks.slice(0, midpoint).join('\n\n')
  const secondHalf = contentBlocks.slice(midpoint).join('\n\n')

  return (
    <>
      <ReadingProgressBar />

      {/* Hero */}
      <section className="bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-cream/50">
              <li><Link href="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-cream transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-cream/70 truncate max-w-[200px] sm:max-w-none">{post.title}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className={`inline-block px-3 py-1 text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                {post.category}
              </span>
              <span className="text-cream/50 text-sm">{post.readTime}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-cream/70 leading-relaxed mb-4">
              {post.description}
            </p>
            <time dateTime={post.datePublished} className="text-sm text-cream/50">
              Published {formatDate(post.datePublished)}
            </time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex gap-12">
            <article className="max-w-3xl flex-1 min-w-0">
              {/* Key Takeaways: chunking for skimmers (Miller's law) */}
              {takeaways.length > 0 && (
                <KeyTakeaways items={takeaways} readTime={post.readTime} />
              )}

              <MarkdownRenderer content={firstHalf} />
              <InlineCTA />
              <MarkdownRenderer content={secondHalf} />
            </article>

            <aside className="hidden xl:block w-64 flex-shrink-0">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA: placed at natural decision point after value delivery */}
      <section className="bg-espresso text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cream mb-6">
            See Where Your Business Stands
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-cream/70 mb-10 max-w-2xl mx-auto">
            If this article raised questions about franchising your business, get
            a concrete answer. Our free assessment scores your readiness and gives
            you specific next steps.
          </p>
          <Link href="/is-my-business-franchisable" className="btn-primary">
            Get Your Free Readiness Score
          </Link>
          <div className="mt-4">
            <Link href="/contact" className="text-sm text-cream/50 link-underline">
              Or book a feasibility call directly
            </Link>
          </div>
        </div>
      </section>

      {/* Continue Learning: 3 curated next steps (reduces paralysis, pulls deeper) */}
      {relatedPosts.length > 0 && (
        <section className="bg-deep-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <p className="eyebrow mb-4">Continue Learning</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-espresso mb-10" style={{ letterSpacing: '-0.02em' }}>
              Read These Next
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="card-interactive group block"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold ${categoryColors[rp.category] || 'bg-gray-100 text-gray-700'}`}>
                        {rp.category}
                      </span>
                      <span className="text-xs text-muted-brown">{rp.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-espresso mb-3 group-hover:text-amber transition-colors duration-200 leading-snug">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted-brown leading-relaxed line-clamp-2">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyCTA
        text="Get Your Free Readiness Score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
