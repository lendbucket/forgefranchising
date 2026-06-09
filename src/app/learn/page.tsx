import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'

export const metadata = createMetadata({
  title: 'Learn & Resources',
  description:
    'Free franchise education for business owners. Guides, tools, glossary, state law breakdowns, and calculators to help you understand what franchising your business actually requires.',
  path: '/learn',
})

const toolsAndCalculators = [
  {
    title: 'Franchise Calculator',
    description:
      'Model your franchise economics before you commit. Estimate initial fees, royalty revenue, and what it takes to build a sustainable franchise system.',
    href: '/calculator',
    label: 'Run the Calculator',
  },
  {
    title: 'Franchise Glossary',
    description:
      'Over 40 franchise terms defined in plain language. Every definition includes context on why the term matters for someone franchising their business.',
    href: '/glossary',
    label: 'Browse the Glossary',
  },
  {
    title: 'Franchise Laws by State',
    description:
      'Registration states, filing states, and what each one requires. Know the regulatory landscape before you start selling franchises.',
    href: '/franchise-laws',
    label: 'View State Laws',
  },
]

const guides = [
  {
    title: 'How Franchising Works',
    description:
      'The complete process from feasibility assessment through FDD filing, franchisee recruitment, and system scaling. Understand every phase before you start.',
    href: '/how-it-works',
    label: 'Read the Process Guide',
  },
  {
    title: 'Franchise Financing Guide',
    description:
      'SBA loans, ROBS, conventional lending, and other financing options your future franchisees will use. Understanding funding paths helps you structure a more investable franchise.',
    href: '/financing',
    label: 'Explore Financing Options',
  },
  {
    title: 'Is My Business Ready to Franchise?',
    description:
      'Not every successful business should franchise. This assessment walks you through the key indicators of franchise readiness, from unit economics to operational documentation.',
    href: '/franchise-assessment',
    label: 'Take the Assessment',
  },
]

const featuredArticles = [
  {
    title: 'What Does It Cost to Franchise Your Business?',
    description:
      'A realistic breakdown of franchise development costs, from FDD preparation to state registration, operations manual development, and launch marketing.',
    href: '/blog/cost-to-franchise-your-business',
  },
  {
    title: 'FDD Explained: What Every Franchisor Needs to Know',
    description:
      'The Franchise Disclosure Document is the legal backbone of your franchise. Learn what each of the 23 items covers and why they matter.',
    href: '/blog/fdd-explained',
  },
  {
    title: 'How to Know If Your Business Is Ready to Franchise',
    description:
      'Profitability is not enough. Learn the operational, financial, and market criteria that determine whether your business can replicate successfully.',
    href: '/blog/is-your-business-ready-to-franchise',
  },
  {
    title: 'Franchise Royalty Structures: How to Set Your Rates',
    description:
      'Your royalty rate determines franchisee profitability and your own revenue model. Here is how to find the number that works for both sides.',
    href: '/blog/franchise-royalty-structures',
  },
  {
    title: 'Item 19 Financial Performance Representations',
    description:
      'Should you include an Item 19 in your FDD? How to build one, what data you need, and why strong unit economics disclosure is a competitive advantage.',
    href: '/blog/item-19-financial-performance-representations',
  },
  {
    title: 'The Franchise Sales Process from First Call to Signed Agreement',
    description:
      'A step-by-step breakdown of how franchise systems sell units. Compliance, qualification, Discovery Day, and everything in between.',
    href: '/blog/franchise-sales-process',
  },
]

const industryResources = [
  { title: 'Restaurants & Food', href: '/industries/restaurants' },
  { title: 'Salons & Beauty', href: '/industries/salons-beauty' },
  { title: 'Fitness & Gyms', href: '/industries/fitness' },
  { title: 'Home Services', href: '/industries/home-services' },
  { title: 'Health & Medical', href: '/industries/health-medical' },
  { title: 'Cleaning', href: '/industries/cleaning' },
  { title: 'Pet Care', href: '/industries/pet-care' },
  { title: 'Automotive', href: '/industries/automotive' },
  { title: 'Childcare & Education', href: '/industries/childcare-education' },
  { title: 'Retail', href: '/industries/retail' },
]

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Learn & Resources' }]} />
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              Learn & Resources
            </p>
            <h1 className="heading-1 mb-8">
              Everything You Need to Know Before Franchising Your Business
            </h1>
            <p className="body-large mb-6">
              We publish our knowledge for free because we believe educated business owners make
              better decisions. Whether you franchise with us, with someone else, or on your own,
              you should understand what the process involves, what it costs, and what it takes to do
              it right.
            </p>
            <p className="body-large">
              Start with the guides below. Use the tools to model your numbers. Read the state law
              breakdowns before you plan your rollout. By the time you talk to anyone about franchise
              development, you should already know the landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Quick References */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Tools and Quick References</h2>
            <p className="body-large max-w-2xl mx-auto">
              Practical tools to help you research, model, and understand the franchise development
              process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {toolsAndCalculators.map((tool) => (
              <div key={tool.title} className="card flex flex-col">
                <h3 className="heading-4 mb-3">{tool.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed mb-6 flex-1">
                  {tool.description}
                </p>
                <Link href={tool.href} className="btn-secondary text-center">
                  {tool.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Deep Dives */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Guides and Deep Dives</h2>
            <p className="body-large max-w-2xl mx-auto">
              Comprehensive resources that walk you through the most important aspects of franchise
              development. No fluff, no gated content, just the information you need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.title} className="card flex flex-col">
                <h3 className="heading-4 mb-3">{guide.title}</h3>
                <p className="text-muted-brown text-sm leading-relaxed mb-6 flex-1">
                  {guide.description}
                </p>
                <Link href={guide.href} className="btn-primary text-center">
                  {guide.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <h2 className="heading-2 mb-4">Featured Articles</h2>
              <p className="body-large max-w-2xl">
                In-depth articles on the most common questions business owners have about
                franchising.
              </p>
            </div>
            <Link href="/blog" className="btn-secondary whitespace-nowrap">
              View All Articles
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="card group hover:shadow-lg transition-shadow"
              >
                <h3 className="heading-4 mb-3 group-hover:text-amber transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-brown text-sm leading-relaxed">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Franchise Guides by Industry</h2>
            <p className="body-large max-w-2xl mx-auto">
              Every industry has unique franchise considerations. From unit economics to regulatory
              requirements, these guides cover what matters for your specific business type.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industryResources.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="card text-center py-6 hover:shadow-lg transition-shadow group"
              >
                <span className="text-sm font-semibold text-espresso group-hover:text-amber transition-colors">
                  {industry.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Done Researching? Let Us Talk About Your Business."
        body="You have read the guides and run the numbers. The next step is a real conversation about your specific business, your market, and whether franchising is the right growth strategy for you."
        buttonText="Book a Free Feasibility Call"
        buttonHref="/contact"
      />
    </>
  )
}
