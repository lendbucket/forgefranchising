'use client'

import { useState } from 'react'
import { blogPosts } from '@/data/blog-posts'
import { PostCard } from '@/components/PostCard'
import { SectionCTA } from '@/components/SectionCTA'
import { sentenceCase } from '@/lib/text'

const categories = [
  'All',
  'Guide',
  'Education',
  'Finance',
  'Case Study',
  'Legal',
  'Industry',
  'Operations',
  'Sales',
  'Technology',
  'Brokerage',
]

/** Insight card covers rotate through three surfaces, as on the homepage. */
const covers = [
  { cover: 'bg-graphite text-white', markColor: 'text-ember' },
  { cover: 'bg-ember-fill text-graphite', markColor: 'text-graphite' },
  { cover: 'bg-ash text-graphite', markColor: 'text-graphite' },
]

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  const publishedPosts = filteredPosts.filter((post) => post.content.length > 0)

  return (
    <>
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8 max-[720px]:mb-6">
              The Franchise Blog
            </h1>
            <p className="lead max-w-[720px]">
              Practical guides, real cost breakdowns, and proven strategies for
              business owners who want to franchise the right way. No fluff. No
              gated content. Just the information you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-16 max-[720px]:mb-10">
            {categories.map((category) => {
              const count =
                category === 'All'
                  ? blogPosts.filter((p) => p.content.length > 0).length
                  : blogPosts.filter(
                      (p) => p.category === category && p.content.length > 0
                    ).length
              if (count === 0 && category !== 'All') return null
              const active = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`inline-flex items-center min-h-[44px] px-4 border text-sm font-medium transition-colors ${
                    active
                      ? 'bg-graphite border-graphite text-white'
                      : 'bg-white border-line text-graphite hover:border-graphite'
                  }`}
                >
                  {sentenceCase(category)}
                  <span className={`ml-1.5 ${active ? 'text-fog' : 'text-steel'}`}>({count})</span>
                </button>
              )
            })}
          </div>

          {/* Posts grid */}
          {publishedPosts.length > 0 ? (
            <div className="grid min-[961px]:grid-cols-3 min-[721px]:grid-cols-2 gap-x-8 gap-y-16 max-[720px]:gap-y-12">
              {publishedPosts.map((post, i) => (
                <PostCard
                  key={post.slug}
                  category={sentenceCase(post.category)}
                  mark={post.category}
                  meta={post.readTime}
                  title={post.title}
                  href={`/blog/${post.slug}`}
                  teaser={post.description}
                  {...covers[i % covers.length]}
                />
              ))}
            </div>
          ) : (
            <div className="border-t border-graphite py-16">
              <p className="text-steel text-[17px] leading-relaxed">
                No posts found in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <SectionCTA
        heading="Ready to explore franchising?"
        body="Get a free, honest assessment of whether your business is ready to franchise. No obligations, no sales pitch. Just clarity."
        buttonText="Book a free feasibility call"
        buttonHref="/contact"
      />
    </>
  )
}
