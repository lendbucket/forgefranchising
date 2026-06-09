import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { SITE_URL, SITE_NAME } from '@/lib/constants'
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

  return {
    title: post.title,
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

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  }

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  )
}
