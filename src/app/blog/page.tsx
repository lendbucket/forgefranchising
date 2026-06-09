'use client'

import { useState } from 'react'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'

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
]

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

function formatDate(dateString: string) {
  return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  const publishedPosts = filteredPosts.filter((post) => post.content.length > 0)

  return (
    <>
      <section className="bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              Franchise Knowledge Hub
            </p>
            <h1 className="heading-1 text-cream mb-6">
              The Franchise Blog
            </h1>
            <p className="text-lg sm:text-xl text-cream/70 leading-relaxed">
              Practical guides, real cost breakdowns, and proven strategies for
              business owners who want to franchise the right way. No fluff. No
              gated content. Just the information you need.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => {
              const count =
                category === 'All'
                  ? blogPosts.filter((p) => p.content.length > 0).length
                  : blogPosts.filter(
                      (p) => p.category === category && p.content.length > 0
                    ).length
              if (count === 0 && category !== 'All') return null
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{ borderRadius: '3px' }}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 min-h-[44px] ${
                    activeCategory === category
                      ? 'bg-espresso text-cream'
                      : 'bg-deep-cream text-muted-brown hover:bg-espresso/10'
                  }`}
                >
                  {category}
                  <span className="ml-1.5 opacity-60">({count})</span>
                </button>
              )
            })}
          </div>

          {/* Posts Grid */}
          {publishedPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publishedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-interactive group block"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold ${
                          categoryColors[post.category] ||
                          'bg-gray-100 text-gray-700'
                        }`}
                        style={{ borderRadius: '3px' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-brown">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-espresso mb-3 group-hover:text-amber transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-brown leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <time
                        dateTime={post.datePublished}
                        className="text-xs text-muted-brown/70"
                      >
                        {formatDate(post.datePublished)}
                      </time>
                      <span className="text-amber text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-brown text-lg">
                No posts found in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="heading-2 text-cream mb-6">
            Ready to Explore Franchising?
          </h2>
          <p className="body-large text-cream/70 mb-10 max-w-2xl mx-auto">
            Get a free, honest assessment of whether your business is ready to
            franchise. No obligations, no sales pitch. Just clarity.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Feasibility Call
          </Link>
        </div>
      </section>
    </>
  )
}
