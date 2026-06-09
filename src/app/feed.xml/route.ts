import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'

const BLOG_POSTS = [
  { slug: 'what-is-franchising', title: 'What Is Franchising? A Complete Guide for Business Owners' },
  { slug: 'how-to-franchise-your-business', title: 'How to Franchise Your Business: Step by Step Process' },
  { slug: 'franchise-disclosure-document-explained', title: 'Franchise Disclosure Document (FDD) Explained' },
  { slug: 'franchise-fees-and-costs', title: 'Franchise Fees and Costs: What to Expect' },
  { slug: 'how-long-does-it-take-to-franchise', title: 'How Long Does It Take to Franchise a Business?' },
  { slug: 'franchise-vs-license', title: 'Franchise vs. License: Understanding the Difference' },
  { slug: 'what-makes-a-business-franchisable', title: 'What Makes a Business Franchisable?' },
  { slug: 'operations-manual-guide', title: 'The Complete Guide to Franchise Operations Manuals' },
  { slug: 'franchise-marketing-plan', title: 'Building a Franchise Marketing Plan That Works' },
  { slug: 'choosing-a-franchise-consultant', title: 'How to Choose the Right Franchise Consultant' },
  { slug: 'fdd-item-19-financial-performance', title: 'FDD Item 19: Financial Performance Representations' },
  { slug: 'franchise-territory-mapping', title: 'Franchise Territory Mapping and Protected Territories' },
  { slug: 'franchise-agreement-key-terms', title: 'Franchise Agreement Key Terms You Need to Know' },
  { slug: 'how-to-find-franchisees', title: 'How to Find and Recruit Qualified Franchisees' },
  { slug: 'franchise-training-programs', title: 'Designing Effective Franchise Training Programs' },
  { slug: 'multi-unit-franchise-strategy', title: 'Multi-Unit Franchise Strategy: Scaling Beyond One Location' },
  { slug: 'franchise-compliance-checklist', title: 'Franchise Compliance Checklist for New Franchisors' },
  { slug: 'state-franchise-registration-guide', title: 'State Franchise Registration: A Complete Guide' },
  { slug: 'franchise-royalty-structures', title: 'Franchise Royalty Structures: Finding the Right Model' },
  { slug: 'building-a-franchise-brand', title: 'Building a Franchise Brand That Attracts Owners' },
  { slug: 'franchise-technology-systems', title: 'Technology Systems Every Franchise Needs' },
  { slug: 'franchise-real-estate-strategy', title: 'Franchise Real Estate Strategy and Site Selection' },
  { slug: 'international-franchising-basics', title: 'International Franchising: What You Need to Know' },
  { slug: 'franchise-legal-requirements', title: 'Franchise Legal Requirements by State' },
  { slug: 'franchise-growth-timeline', title: 'Realistic Franchise Growth Timeline and Milestones' },
  { slug: 'unit-economics-for-franchises', title: 'Unit Economics for Franchises: The Numbers That Matter' },
  { slug: 'franchise-support-infrastructure', title: 'Building Franchise Support Infrastructure' },
  { slug: 'common-franchise-mistakes', title: 'Common Franchise Mistakes and How to Avoid Them' },
  { slug: 'franchise-exit-strategies', title: 'Franchise Exit Strategies for Founders' },
  { slug: 'franchise-industry-trends-2026', title: 'Franchise Industry Trends to Watch in 2026' },
]

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function buildRssXml(): string {
  const pubDate = new Date().toUTCString()

  const items = BLOG_POSTS.map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.title)} - Read more on the ${SITE_NAME} blog.</description>
      <pubDate>${pubDate}</pubDate>
    </item>`
  ).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`
}

export function GET() {
  const xml = buildRssXml()

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
