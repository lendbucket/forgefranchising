/**
 * Texas brokerage markets: one entry per /texas-business-broker/[city] page.
 *
 * Economy sections name only industries listed by the linked public source.
 * No statistics appear without a linked source, and nothing here describes a
 * sale Forge has handled. Forge has no published office address, so these
 * pages say nothing about offices.
 */

export type Source = { label: string; url: string }

export type TexasBrokerageMarket = {
  slug: string
  /** City name as used in headings, for example "San Antonio". */
  name: string
  title: string
  description: string
  h1: string
  intro: string[]
  economy: { heading: string; body: string[]; sources: Source[] }
  buyers: { heading: string; body: string[] }
  considerations: { heading: string; intro: string; items: { term: string; text: string; source?: Source }[] }
  working: { heading: string; body: string[] }
  faqs: { question: string; answer: string }[]
  closing: { heading: string; body: string }
  /** Value placed in the intake form's City field. */
  formCity: string
}

export const TEXAS_BROKERAGE_MARKETS: TexasBrokerageMarket[] = [
  {
    slug: 'san-antonio',
    name: 'San Antonio',
    title: 'Business Broker in San Antonio, TX',
    description:
      'Business broker in San Antonio for owners selling a privately held company: the regional economy, who buys here, and how a confidential sale is run in Texas.',
    h1: 'Business broker in San Antonio, Texas',
    intro: [
      'Owners who search for a business broker in San Antonio usually want two things answered first: who would buy a business like theirs, and how to sell it without the news reaching staff, customers, or competitors. This page covers both for the San Antonio area, including the questions that come up when a business sells to, or works for, the region\'s defense and federal customers.',
    ],
    economy: {
      heading: 'The San Antonio economy',
      body: [
        'The Texas Comptroller places Bexar County in its Alamo region, a 19 county area that also includes Comal, Guadalupe, Kendall, and Medina counties. The Comptroller\'s regional reports list support activities for mining and national security among the region\'s most concentrated industries, and identify warehousing and storage as the industry that led regional job growth.',
        'greater:SATX, the regional economic development organization, organizes its work around advanced manufacturing and logistics, aerospace and defense, cybersecurity and IT, finance and professional services, and life sciences and health. It also names USAA, H-E-B, and Valero among the companies headquartered in the region.',
      ],
      sources: [
        { label: 'Texas Comptroller, Alamo region economic snapshot', url: 'https://comptroller.texas.gov/economy/economic-data/regions/2024/snap-alamo.php' },
        { label: 'greater:SATX regional economic development', url: 'https://www.greatersatx.com/' },
      ],
    },
    buyers: {
      heading: 'Who buys businesses in San Antonio',
      body: [
        'Buyers for a privately held San Antonio company fall into a few groups. Individual owner operators want a business they can run themselves, often in a trade or service they already know, and many finance the purchase with an SBA loan. Companies in the same line of work buy to add customers, technicians, or service area in South Texas. For larger businesses, private equity firms look for add on acquisitions for companies they already own.',
        'Which group fits depends on the size of the business, how much it relies on the owner, and how its earnings are documented. A broker\'s job is to reach the buyers who fit and to screen them before they learn the name of the business.',
      ],
    },
    considerations: {
      heading: 'What San Antonio sellers should plan for',
      intro: 'A few issues come up often enough in this market to plan for before the business is listed.',
      items: [
        {
          term: 'Federal and defense contracts',
          text: 'If the business holds federal prime contracts or subcontracts, buyers will ask how those contracts survive the sale. In an asset sale, a federal contract generally cannot simply be assigned; the government must consent through a novation process. Your attorney should review the contracts before a buyer structures an offer.',
        },
        {
          term: 'Small business set asides',
          text: 'Contracts won under a small business or socioeconomic set aside can be affected when ownership changes. Buyers will want to know which contracts depend on the current owner\'s status, so identify them early.',
        },
        {
          term: 'Customers on the military bases',
          text: 'Work performed on base often depends on base access and on specific employees being cleared to be there. Document who holds that access and how it would continue after closing.',
        },
        {
          term: 'Hospitality seasonality',
          text: 'For restaurants and hospitality businesses tied to visitor traffic, monthly statements across several years show buyers and lenders how revenue moves through the year.',
        },
      ],
    },
    working: {
      heading: 'How Forge works with San Antonio sellers',
      body: [
        'Every engagement starts with a confidential conversation. Meetings are held remotely or in person, at a time and place that keeps the sale private, such as after hours or away from the business. Forge signs a confidentiality agreement before you send financial records, and buyers sign a nondisclosure agreement and are screened before they learn the name of the business.',
      ],
    },
    faqs: [
      {
        question: 'Can I sell a San Antonio business that depends on federal contracts?',
        answer:
          'Yes, but the contracts need attention before the sale is structured. In an asset sale the government generally must consent to the transfer through a novation process, and contracts won under a set aside can be affected by a change in ownership. Have your attorney review the contracts so buyers know what transfers.',
      },
      {
        question: 'Will a buyer from outside San Antonio understand my market?',
        answer:
          'Some will and some will not. The confidential information memorandum explains your customers, service area, and competition so any qualified buyer can evaluate the business. Buyers who already operate in the region often understand it faster, and companies in the same trade may see value in your service area itself.',
      },
      {
        question: 'Do I need to meet buyers in person in San Antonio?',
        answer:
          'Not at first. Early conversations can happen remotely. Serious buyers usually want to see the business before they sign a letter of intent, and those visits are scheduled after hours or presented to staff as routine.',
      },
      {
        question: 'How is a San Antonio business priced for sale?',
        answer:
          'Forge prepares a broker opinion of value from the recast earnings, the condition of the assets, the risks a buyer would take on, and market evidence. It is a pricing recommendation for marketing, not a certified appraisal.',
      },
    ],
    closing: {
      heading: 'Selling a San Antonio business?',
      body: 'Start with a confidential conversation about the business, your timing, and what you want after closing.',
    },
    formCity: 'San Antonio',
  },
  {
    slug: 'houston',
    name: 'Houston',
    title: 'Business Broker in Houston, TX',
    description:
      'Business broker in Houston: how industrial, energy, and service businesses are sold confidentially, what buyers review, and who buys in the Gulf Coast region.',
    h1: 'Business broker in Houston, Texas',
    intro: [
      'A business broker in Houston works in a region where many privately held companies sell to, or depend on, the energy, chemical, and industrial companies along the Gulf Coast. That shapes what buyers check: master service agreements, safety records, and how results held up through the industry\'s cycles. This page explains how a Houston sale is run and what to prepare.',
    ],
    economy: {
      heading: 'The Houston economy',
      body: [
        'The Texas Comptroller places Harris County in its Gulf Coast region, a 13 county area that includes Fort Bend, Montgomery, Galveston, and Brazoria counties. The Comptroller\'s regional reports list oil and gas extraction, pipeline transportation of natural gas and crude oil, space research and technology, and basic chemical manufacturing among the region\'s most concentrated industries.',
        'The Greater Houston Partnership organizes its economic development work around energy and the energy transition, aerospace, aviation, life sciences and biotechnology, advanced manufacturing, and digital technology.',
      ],
      sources: [
        { label: 'Texas Comptroller, Gulf Coast region economic snapshot', url: 'https://comptroller.texas.gov/economy/economic-data/regions/2024/snap-gulf-coast.php' },
        { label: 'Greater Houston Partnership', url: 'https://www.houston.org/' },
      ],
    },
    buyers: {
      heading: 'Who buys businesses in Houston',
      body: [
        'Many Houston buyers are industry professionals who want to own a company in the field where they built their careers: engineers, operations managers, and sales leaders from energy and industrial companies. Strategic buyers acquire competitors or adjacent service lines to add capability or customers. Private equity firms that own industrial and field services platforms look for add on acquisitions.',
        'Each group reads the business differently. An industry buyer looks hard at customer relationships and crews. A private equity buyer focuses on how the business would fit with a company it already owns, and on the quality of the financial reporting.',
      ],
    },
    considerations: {
      heading: 'What Houston sellers should plan for',
      intro: 'These issues come up repeatedly when an industrial or service company changes hands in this region.',
      items: [
        {
          term: 'Master service agreements',
          text: 'Work for large operators usually runs under master service agreements. Many restrict assignment or require the customer\'s consent to a change of control. Pull every MSA early and note which ones a buyer would need consent to keep.',
        },
        {
          term: 'Vendor approvals and safety records',
          text: 'Customers often require contractors to stay approved through prequalification programs that review safety performance and insurance. Buyers will ask for the safety program, incident history, and the status of each approval.',
        },
        {
          term: 'Results through the cycle',
          text: 'Buyers and lenders want to see several years of results so they can judge how the business performed when customer activity rose and fell. Be ready to explain any year that looks very different from the others.',
        },
        {
          term: 'Storm and flood history',
          text: 'If the business owns or leases property, buyers and lenders may ask about storm damage, flood history, and insurance claims. Keep the records together.',
        },
      ],
    },
    working: {
      heading: 'How Forge works with Houston sellers',
      body: [
        'Forge meets Houston owners remotely or in person, on a schedule that keeps the sale away from crews and customers. A confidentiality agreement comes before any financial records. Buyers sign a nondisclosure agreement and show their financial capacity before they learn which company is for sale, and competitors who inquire receive sensitive information only in summary form or through their advisors.',
      ],
    },
    faqs: [
      {
        question: 'Will my customers need to approve the sale of my Houston service company?',
        answer:
          'Possibly. Master service agreements with large operators often require consent to an assignment or a change of control. Review each agreement with your attorney before the business goes to market so you and the buyer know which approvals are needed.',
      },
      {
        question: 'Can I sell a Houston business if one or two customers make up most of its revenue?',
        answer:
          'Yes, but buyers and lenders will treat that concentration as a risk. The longer and more documented the relationships, the easier they are to evaluate. Contracts, purchase order history, and how long each customer has used the business all help.',
      },
      {
        question: 'Should I sell my Houston company to a competitor?',
        answer:
          'A competitor may see more value than an outside buyer, but it is also the buyer most able to use your information against you. Competitors are screened like any buyer, and the most sensitive details are released late, in summary form, or only to their advisors.',
      },
      {
        question: 'What do Houston buyers ask for first?',
        answer:
          'Recast earnings for several years, a list of customer relationships without names, the status of contracts and vendor approvals, the safety record, and an equipment list with age and condition.',
      },
    ],
    closing: {
      heading: 'Selling a Houston business?',
      body: 'Talk to Forge confidentially about your customers, contracts, and timing before anything goes to market.',
    },
    formCity: 'Houston',
  },
  {
    slug: 'dallas-fort-worth',
    name: 'Dallas Fort Worth',
    title: 'Dallas Fort Worth Business Broker',
    description:
      'Business broker in Dallas Fort Worth: selling a company across the Metroplex, corporate customer contracts, search fund buyers, and a confidential process.',
    h1: 'Business broker in Dallas Fort Worth, Texas',
    intro: [
      'Owners looking for a business broker in Dallas Fort Worth are selling into a large metro with a wide range of buyers, from first time owners to search funds and investment firms. Many businesses here serve corporate customers under written contracts, and many operate across several cities in the Metroplex. Both affect how a sale is prepared.',
    ],
    economy: {
      heading: 'The Dallas Fort Worth economy',
      body: [
        'The Texas Comptroller groups Dallas, Tarrant, Collin, and Denton counties with 15 others in its Metroplex region. The Comptroller\'s regional reports name communications and air transportation among the region\'s most concentrated industries, along with communications equipment and semiconductor manufacturing.',
        'The Dallas Regional Chamber lists the region\'s industries as advanced services, aviation and aerospace, financial activities, health care, high tech, hospitality, life science, logistics, manufacturing, and semiconductors.',
      ],
      sources: [
        { label: 'Texas Comptroller, Metroplex region economic snapshot', url: 'https://comptroller.texas.gov/economy/economic-data/regions/2024/snap-metroplex.php' },
        { label: 'Dallas Regional Chamber, DFW facts', url: 'https://dallaschamber.org/why-dallas/dfw-facts' },
      ],
    },
    buyers: {
      heading: 'Who buys businesses in Dallas Fort Worth',
      body: [
        'Individual buyers in the Metroplex often come from corporate careers and want a business with steady customers and a team in place. Search funds, where an individual raises money from investors to find and run one company, look for established business to business companies with recurring work. Strategic acquirers and private equity firms buy to enter the region or to add service lines.',
        'Because the metro is large, a qualified buyer may be looking at several businesses at once. Clean records and a price the earnings support keep a buyer focused on yours.',
      ],
    },
    considerations: {
      heading: 'What Dallas Fort Worth sellers should plan for',
      intro: 'Plan for these points before marketing a business in the Metroplex.',
      items: [
        {
          term: 'Corporate customer contracts',
          text: 'Contracts with corporate customers often contain assignment and change of control clauses, termination for convenience rights, and insurance requirements. Summarize the key terms for each contract so a buyer can see what transfers.',
        },
        {
          term: 'Permits across several cities',
          text: 'A business working across Dallas, Tarrant, Collin, and Denton counties may hold registrations or permits in more than one city. List each one and who holds it.',
        },
        {
          term: 'Search fund diligence',
          text: 'Search fund buyers are backed by investors and usually run a thorough diligence process, including a quality of earnings review by an accounting firm. Monthly financials that reconcile to the tax returns save time.',
        },
        {
          term: 'Management depth',
          text: 'Buyers from corporate backgrounds will ask who runs daily operations. Show which decisions your managers already make without you.',
        },
      ],
    },
    working: {
      heading: 'How Forge works with Dallas Fort Worth sellers',
      body: [
        'Forge works with owners across the Metroplex through confidential meetings, remotely or in person. Before marketing begins, Forge and the owner agree on which details can appear in the blind profile. A business with a recognizable niche in one city needs a broader description than a business with many competitors.',
      ],
    },
    faqs: [
      {
        question: 'What is a search fund, and should I consider one as a buyer?',
        answer:
          'A search fund is an individual, backed by investors, who is looking for one company to buy and run. Search funds often want an owner who will stay for a transition period and a business with steady, documented earnings. They are qualified like any other buyer, including confirmation that the investors will fund the purchase.',
      },
      {
        question: 'My Dallas company has contracts with large corporations. Do they transfer?',
        answer:
          'It depends on the contract. Many corporate agreements require consent to an assignment or a change of control, and some can be ended for convenience. Your attorney should review them before a buyer prices the business on the assumption that they continue.',
      },
      {
        question: 'Does it matter whether my business is in Dallas or Fort Worth?',
        answer:
          'For most buyers it matters less than the customers, the team, and the earnings. Location affects which permits and local registrations transfer, and whether the business can serve a buyer\'s existing customers.',
      },
      {
        question: 'How does Forge keep a Metroplex sale confidential?',
        answer:
          'The business is marketed with a blind profile, every buyer signs a nondisclosure agreement and is screened before learning the name, and visits happen after hours or away from the business. Employee and customer names are released late in diligence.',
      },
    ],
    closing: {
      heading: 'Selling a Dallas Fort Worth business?',
      body: 'Tell Forge about the business and your timing. The first conversation is confidential and commits you to nothing.',
    },
    formCity: 'Dallas Fort Worth',
  },
  {
    slug: 'austin',
    name: 'Austin',
    title: 'Business Broker in Austin, TX',
    description:
      'Business broker in Austin: selling a technology, professional services, or consumer business in Central Texas, including recurring revenue, key staff, and IP.',
    h1: 'Business broker in Austin, Texas',
    intro: [
      'Owners who want a business broker in Austin often run companies where most of the value sits in people, client relationships, and software or other intellectual property rather than equipment. Buyers of those businesses spend their diligence on recurring revenue, key employees, and who owns the work product. This page covers how an Austin sale is prepared around those questions.',
    ],
    economy: {
      heading: 'The Austin economy',
      body: [
        'The Texas Comptroller places Travis County in its Capital region, a 10 county area that includes Williamson, Hays, and Bastrop counties. The Comptroller\'s regional report lists technology related industries and urban and rural transportation among the region\'s most concentrated industries.',
        'Opportunity Austin, the Austin Chamber\'s economic development program, listed its target industries in its 2022 annual report as advanced manufacturing, creative and digital media technology, clean energy and power technology, life sciences, data management, space technology, and corporate headquarters and regional offices.',
      ],
      sources: [
        { label: 'Texas Comptroller, Capital region economic snapshot', url: 'https://comptroller.texas.gov/economy/economic-data/regions/2024/snap-capital.php' },
        { label: 'Austin Chamber, 2022 annual report', url: 'https://www.austinchamber.com/2022-annual-report' },
      ],
    },
    buyers: {
      heading: 'Who buys businesses in Austin',
      body: [
        'Buyers for Austin service and technology companies include operators with experience in the same field, larger firms buying to add clients or capabilities, and private equity firms building groups of IT, software, or professional services companies. Consumer businesses such as restaurants and personal services attract individual owner operators, including people relocating to Central Texas.',
        'Buyers of a people driven business want to know the value will still be there after closing. The sale is prepared to show that it will.',
      ],
    },
    considerations: {
      heading: 'What Austin sellers should plan for',
      intro: 'Businesses built on people and intellectual property raise their own set of questions.',
      items: [
        {
          term: 'Recurring revenue',
          text: 'Buyers separate revenue under contract or subscription from project work. Prepare a schedule of recurring clients with start dates, renewal terms, and cancellations by month, with names withheld until late in the process.',
        },
        {
          term: 'Key employees',
          text: 'If a few people hold the client relationships or the technical knowledge, buyers will ask how they will be kept. Retention agreements are usually discussed with the buyer near the end of the process, not before.',
        },
        {
          term: 'Who owns the work product',
          text: 'Buyers confirm that the company, not individual employees or contractors, owns its code, designs, and other intellectual property. Gather the invention assignment and contractor agreements before diligence starts.',
        },
        {
          term: 'Noncompete terms',
          text: 'Buyers usually ask the seller to agree not to compete with the business after closing. How long the agreement lasts, where it applies, and what it covers are negotiated in the purchase agreement and drafted by the attorneys.',
        },
      ],
    },
    working: {
      heading: 'How Forge works with Austin sellers',
      body: [
        'Forge meets Austin owners remotely or in person, whichever keeps the conversation private. Information is released in stages: a blind profile first, a confidential memorandum after a nondisclosure agreement and buyer screening, and client and employee detail only after a letter of intent is signed.',
      ],
    },
    faqs: [
      {
        question: 'How do buyers value an Austin services company with few hard assets?',
        answer:
          'Mostly on earnings and on how likely those earnings are to continue. Documented recurring revenue, a broad client base, and a team that does not depend on the owner all support value. Forge prepares a broker opinion of value from those inputs; it is not a certified appraisal.',
      },
      {
        question: 'Should I tell my key employees before I sell?',
        answer:
          'Usually not until a buyer is committed. Most owners bring key people in near the end of the process, often with the buyer, once retention terms can be discussed. Telling them early risks the uncertainty the sale is trying to avoid.',
      },
      {
        question: 'What if contractors wrote some of our software?',
        answer:
          'Buyers will check whether the company owns that work. If contractor agreements do not assign the intellectual property to the company, your attorney may recommend fixing that before the business goes to market.',
      },
      {
        question: 'Can I sell my Austin business and stay on afterward?',
        answer:
          'Yes. Many buyers want the seller to stay for a transition period, and some offer a longer role or an earnout tied to future results. Those terms are negotiated in the letter of intent and the purchase agreement.',
      },
    ],
    closing: {
      heading: 'Selling an Austin business?',
      body: 'Start with a confidential conversation about your clients, your team, and the timing you have in mind.',
    },
    formCity: 'Austin',
  },
  {
    slug: 'corpus-christi',
    name: 'Corpus Christi',
    title: 'Business Broker in Corpus Christi, TX',
    description:
      'Business broker in Corpus Christi: selling port, plant, and coastal service businesses, contractor approvals, seasonal revenue, and finding the right buyers.',
    h1: 'Business broker in Corpus Christi, Texas',
    intro: [
      'A business broker in Corpus Christi sells into a smaller metro than Houston or San Antonio, so the right buyer is often found beyond the local market. Many businesses here work around the port, the refineries and plants along the ship channel, or coastal visitors. Those customers bring their own requirements, and buyers check each of them.',
    ],
    economy: {
      heading: 'The Corpus Christi economy',
      body: [
        'The Corpus Christi Regional Economic Development Corporation lists its targeted industries as energy, including refining, petrochemicals, LNG, and midstream operations; specialty steel; pharmaceutical manufacturing; light manufacturing, including medical devices; aerospace, space, and defense; and cleantech manufacturing. It names the Port of Corpus Christi, Del Mar College, Texas A&M University Corpus Christi, and Naval Air Station Corpus Christi among the region\'s assets.',
        'The Texas Comptroller places Nueces County in its South Texas region, which covers 28 counties from the Coastal Bend to the Rio Grande Valley and Laredo, so its regional figures describe a much wider area than Corpus Christi.',
      ],
      sources: [
        { label: 'Corpus Christi Regional Economic Development Corporation, targeted industries', url: 'https://www.ccredc.com/targetedindustries' },
        { label: 'Texas Comptroller, South Texas region economic snapshot', url: 'https://comptroller.texas.gov/economy/economic-data/regions/2024/snap-south.php' },
      ],
    },
    buyers: {
      heading: 'Who buys businesses in Corpus Christi',
      body: [
        'Local buyers include managers and technicians who know the plants and the port and want to own the business they work around. Companies based elsewhere in Texas buy to gain a crew and customers on the coast. Individual buyers relocating to the Coastal Bend look at consumer and hospitality businesses.',
        'Because the local buyer pool is smaller, the marketing plan for a Corpus Christi business usually reaches statewide buyers as well, while keeping the business unidentifiable to its neighbors.',
      ],
    },
    considerations: {
      heading: 'What Corpus Christi sellers should plan for',
      intro: 'Port, plant, and coastal businesses carry requirements that buyers verify early.',
      items: [
        {
          term: 'Plant and port contractor approvals',
          text: 'Refineries, chemical plants, and port facilities typically approve contractors before they can work on site, reviewing safety programs, training records, and insurance. List each approval the business holds and when it renews.',
        },
        {
          term: 'Worker credentials for secure areas',
          text: 'Unescorted access to secure areas of regulated maritime facilities requires a Transportation Worker Identification Credential (TWIC). Buyers will ask which employees hold one and how that affects who can do the work.',
          source: { label: 'TSA, Transportation Worker Identification Credential', url: 'https://www.tsa.gov/for-industry/twic' },
        },
        {
          term: 'Seasonal coastal revenue',
          text: 'Hospitality and visitor businesses on the coast should show monthly results for several years so buyers can see how revenue moves through the seasons.',
        },
        {
          term: 'Coastal property and insurance',
          text: 'Buyers and lenders ask about windstorm and flood coverage, storm history, and claims for any property the business owns or leases. Keep the policies and claim records together.',
        },
      ],
    },
    working: {
      heading: 'How Forge works with Corpus Christi sellers',
      body: [
        'In a market where many owners know each other, confidentiality matters even more. Forge meets Corpus Christi owners remotely or in person, keeps the blind profile general enough that the business cannot be identified locally, and qualifies buyers before they learn its name.',
      ],
    },
    faqs: [
      {
        question: 'Will a buyer from outside Corpus Christi want my business?',
        answer:
          'Often, yes. Companies in the same field elsewhere in Texas may want a crew, approvals, and customers on the coast that would take years to build. Marketing reaches those buyers while the blind profile keeps the business unidentified locally.',
      },
      {
        question: 'Do my plant contractor approvals transfer to a buyer?',
        answer:
          'Not automatically. Each facility has its own process, and a change in ownership may require the business to be reviewed again. Identify every approval early so the buyer and its lender can plan for it.',
      },
      {
        question: 'How do I show a seasonal Corpus Christi business to buyers?',
        answer:
          'With monthly profit and loss statements for at least the past few years, so buyers can compare the same months year to year. Explain any month affected by weather or a one time event.',
      },
      {
        question: 'Can a Corpus Christi sale stay confidential in a smaller market?',
        answer:
          'Yes, with care. The blind profile is written to avoid details that would identify the business locally, buyers are screened before they learn its name, and meetings are held away from the business or outside working hours.',
      },
    ],
    closing: {
      heading: 'Selling a Corpus Christi business?',
      body: 'Start with a confidential conversation. Forge will explain how it would reach buyers and protect your identity.',
    },
    formCity: 'Corpus Christi',
  },
]

export function getTexasBrokerageMarket(slug: string): TexasBrokerageMarket | undefined {
  return TEXAS_BROKERAGE_MARKETS.find((m) => m.slug === slug)
}
