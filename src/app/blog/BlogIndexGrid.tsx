'use client'

import { useState } from 'react'
import { PostCard } from '@/components/PostCard'
import { sentenceCase } from '@/lib/text'

/** The card fields the index needs. Post content stays on the server. */
export type PostSummary = {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
}

/** Insight card covers rotate through three surfaces, as on the homepage. */
const covers = [
  { cover: 'bg-graphite text-white', markColor: 'text-ember' },
  { cover: 'bg-ember-fill text-graphite', markColor: 'text-graphite' },
  { cover: 'bg-ash text-graphite', markColor: 'text-graphite' },
]

/** Category filter and post grid. The mid page panel arrives server rendered. */
export function BlogIndexGrid({
  posts,
  categories,
  midCtaBetween,
  midCtaEnd,
}: {
  posts: PostSummary[]
  categories: string[]
  /** The panel when more posts follow it. */
  midCtaBetween: React.ReactNode
  /** The panel when it ends the grid. */
  midCtaEnd: React.ReactNode
}) {
  const [activeCategory, setActiveCategory] = useState('All')

  const publishedPosts = activeCategory === 'All' ? posts : posts.filter((post) => post.category === activeCategory)
  // The mid page panel sits after the first half of the grid, on a full row of three.
  const splitAt = Math.max(3, Math.round(publishedPosts.length / 6) * 3)
  const postGroups = [publishedPosts.slice(0, splitAt), publishedPosts.slice(splitAt)]

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-16 max-[720px]:mb-10">
        {categories.map((category) => {
          const count = category === 'All' ? posts.length : posts.filter((p) => p.category === category).length
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
        <>
          {postGroups.map((group, g) =>
            group.length > 0 ? (
              <div key={g}>
                <div className="grid min-[961px]:grid-cols-3 min-[721px]:grid-cols-2 gap-x-8 gap-y-16 max-[720px]:gap-y-12">
                  {group.map((post, i) => (
                    <PostCard
                      key={post.slug}
                      category={sentenceCase(post.category)}
                      mark={post.category}
                      meta={post.readTime}
                      title={post.title}
                      href={`/blog/${post.slug}`}
                      teaser={post.description}
                      {...covers[(i + g * splitAt) % covers.length]}
                    />
                  ))}
                </div>
                {g === 0 && (postGroups[1].length > 0 ? midCtaBetween : midCtaEnd)}
              </div>
            ) : null
          )}
        </>
      ) : (
        <div className="border-t border-graphite py-16">
          <p className="text-steel text-[17px] leading-relaxed">
            No posts found in this category yet. Check back soon.
          </p>
        </div>
      )}
    </>
  )
}
