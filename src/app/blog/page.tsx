import { blogPosts } from '@/data/blog-posts'
import { SectionCTA } from '@/components/SectionCTA'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import { BlogIndexGrid, type PostSummary } from './BlogIndexGrid'

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

/** Published posts only, reduced to the fields a card shows. */
const posts: PostSummary[] = blogPosts
  .filter((post) => post.content.length > 0)
  .map(({ slug, title, description, category, readTime }) => ({ slug, title, description, category, readTime }))

export default function BlogIndexPage() {
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
            <HeroActions route="/blog" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <BlogIndexGrid
            posts={posts}
            categories={categories}
            midCtaBetween={<MidCTA route="/blog" className="my-16 max-[720px]:my-12" />}
            midCtaEnd={<MidCTA route="/blog" className="mt-16 max-[720px]:mt-12" />}
          />
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
