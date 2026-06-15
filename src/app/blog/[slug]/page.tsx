import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
import { articleSchema, webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'
import BlogPostClient from './BlogPostClient'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post.content.length > 0)
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post || post.content.length === 0) {
    return { title: 'Post Not Found' }
  }

  // Keep SEO title under 60 chars (template adds " | Forge Franchising" = 21 chars)
  const maxTitleLen = 38
  const seoTitle = post.title.length <= maxTitleLen
    ? post.title
    : post.title.replace(/:.+$/, '').replace(/\s+\(.+\)$/, '').slice(0, maxTitleLen).replace(/\s+\S*$/, '')

  return {
    title: seoTitle,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      authors: [SITE_NAME],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post || post.content.length === 0) {
    return notFound()
  }

  const articleUrl = `${SITE_URL}/blog/${post.slug}`

  const blogGraphJson = renderSchema([
    webPageSchema({
      url: articleUrl,
      name: post.title,
      description: post.description,
    }),
    breadcrumbSchema(articleUrl, [
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: post.title },
    ]),
    articleSchema({
      url: articleUrl,
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.datePublished,
      articleType: 'BlogPosting',
      articleSection: post.category,
      wordCount: post.content.split(/\s+/).length,
    }),
  ])

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        p.category === post.category &&
        p.content.length > 0
    )
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: blogGraphJson }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
