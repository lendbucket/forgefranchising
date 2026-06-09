export type FranchiseStateCategory = 'registration' | 'filing' | 'no-filing'

export type FranchiseStateData = {
  slug: string
  name: string
  category: FranchiseStateCategory
  regulatoryBody: string
  officialUrl: string
  overview: string
  keyRequirements: string[]
  renewalInfo: string
  fees: string
  notes: string
}

export const FRANCHISE_LAWS: FranchiseStateData[] = [
  // ─── REGISTRATION STATES ───────────────────────────────────────────
  {
    slug: 'california',
    name: 'California',
    category: 'registration',
    regulatoryBody: 'California Department of Financial Protection and Innovation (DFPI)',
    officialUrl: 'https://dfpi.ca.gov/franchise/',
    overview:
      'California is one of the most heavily regulated franchise states in the country. Franchisors must register their Franchise Disclosure Document (FDD) with the DFPI before offering or selling franchises. California also has its own franchise relations law that governs the ongoing franchisor-franchisee relationship.',
    keyRequirements: [
      'File and register FDD with DFPI before offering or selling franchises',
      'Provide FDD to prospective franchisees at least 14 days before signing any agreement or accepting payment',
      'Submit audited financial statements as part of the FDD',
      'File annual renewal within 120 days of fiscal year end',
      'Comply with the California Franchise Relations Act (Business and Professions Code Section 20000 et seq.)',
      'Register franchise broker agents with the state',
      'Include California-specific cover page and addenda in the FDD',
    ],
    renewalInfo:
      'Annual renewal required within 120 days of the franchisor fiscal year end. Franchisors must file an updated FDD along with any material changes.',
    fees:
      'Application filing fee is approximately $675. Annual renewal fee is approximately $450. Additional fees may apply for amendments.',
    notes:
      'California examiners are known for thorough reviews that can take several months. The state also regulates franchise relationship issues including termination, non-renewal, and transfer. Franchisors should plan for a longer review timeline when entering California.',
  },
  {
    slug: 'hawaii',
    name: 'Hawaii',
    category: 'registration',
    regulatoryBody: 'Hawaii Department of Commerce and Consumer Affairs (DCCA)',
    officialUrl: 'https://cca.hawaii.gov/breg/registration/franchise/',
    overview:
      'Hawaii requires franchise registration before any franchise offer or sale can occur in the state. The state regulates franchising under the Hawaii Franchise Investment Law (HRS Chapter 482E). Hawaii also has franchise relationship provisions that protect franchisees.',
    keyRequirements: [
      'Register FDD with the DCCA before offering or selling franchises',
      'Provide FDD to prospects at least 14 days before execution of any agreement',
      'Submit audited financial statements',
      'File annual renewal to maintain active registration',
      'Include Hawaii-specific addenda in the FDD',
      'Comply with franchise relationship provisions regarding termination and non-renewal',
    ],
    renewalInfo:
      'Annual renewal is required. Franchisors must file updated FDDs to maintain their registration status.',
    fees:
      'Initial registration fee is approximately $250. Renewal fees are similar. Check with the DCCA for current fee schedules.',
    notes:
      'Hawaii is a smaller market, but the registration requirement still applies regardless of how many franchises you plan to sell there. The state has franchise relationship protections that govern termination and non-renewal.',
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    category: 'registration',
    regulatoryBody: 'Illinois Attorney General, Franchise Bureau',
    officialUrl: 'https://www.illinoisattorneygeneral.gov/consumer-protection/franchise-bureau/',
    overview:
      'Illinois requires franchise registration under the Illinois Franchise Disclosure Act (815 ILCS 705). The Attorney General office reviews FDD filings and must approve registration before any franchise can be offered or sold in the state. Illinois also has a separate Franchise Disclosure Act that provides franchisee protections.',
    keyRequirements: [
      'Register FDD with the Illinois Attorney General before offering or selling franchises',
      'Provide FDD to prospects at least 14 days before any binding agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Register franchise brokers and salespeople',
      'Include Illinois-specific addenda addressing state law requirements',
      'Comply with the Illinois Franchise Disclosure Act regarding relationship issues',
    ],
    renewalInfo:
      'Annual renewal is required within 120 days of the franchisor fiscal year end. Updated FDD and financial statements must be submitted.',
    fees:
      'Initial application fee is approximately $500. Annual renewal fee is approximately $100. Amendment fees may also apply.',
    notes:
      'Illinois examiners conduct a substantive review of the FDD. The state has strong franchisee protections, including provisions regarding termination, non-renewal, and the franchisor obligation to act in good faith.',
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    category: 'registration',
    regulatoryBody: 'Indiana Securities Division, Office of the Secretary of State',
    officialUrl: 'https://www.in.gov/sos/securities/franchise-disclosure/',
    overview:
      'Indiana requires franchise registration under the Indiana Franchise Disclosure Law (IC 23-2-2.5). The Securities Division of the Secretary of State office oversees franchise filings. Franchisors must register before offering or selling franchises in Indiana.',
    keyRequirements: [
      'Register FDD with the Indiana Securities Division before any offer or sale',
      'Provide FDD to prospective franchisees at least 14 days before signing',
      'Submit audited financial statements',
      'File annual renewal to maintain active registration',
      'Include Indiana-specific addenda in the FDD',
      'Disclose all material litigation and bankruptcy history',
    ],
    renewalInfo:
      'Annual renewal is required. Franchisors must update their FDD and file within the required timeframe to maintain registration.',
    fees:
      'Registration filing fee is approximately $500. Renewal fees are similar. Check with the Securities Division for the current schedule.',
    notes:
      'Indiana requires a surety bond or other financial assurance in certain circumstances. The state examiner may request modifications to the FDD before approving registration.',
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    category: 'registration',
    regulatoryBody: 'Maryland Office of the Attorney General, Securities Division',
    officialUrl: 'https://www.marylandattorneygeneral.gov/Pages/Securities/franchise.aspx',
    overview:
      'Maryland requires franchise registration under the Maryland Franchise Registration and Disclosure Law. The Securities Division of the Attorney General office reviews filings. Maryland also has significant franchise relationship protections that franchisors must follow.',
    keyRequirements: [
      'Register FDD with the Maryland Securities Division before any offer or sale',
      'Provide FDD to prospective franchisees at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Maryland-specific addenda addressing relationship law provisions',
      'Comply with Maryland franchise relationship law (restrictions on termination, non-renewal, and transfer)',
      'Provide a Maryland Addendum to the franchise agreement',
    ],
    renewalInfo:
      'Annual renewal required. Franchisors must file updated FDD and financials within the prescribed period after fiscal year end.',
    fees:
      'Filing fee is approximately $500. Renewal fees are similar. Amendment filing fees also apply.',
    notes:
      'Maryland has some of the strongest franchisee protection laws in the country. The state restricts franchisor ability to terminate, refuse to renew, or restrict transfer of franchise agreements. Franchisors must include specific Maryland addenda addressing these protections.',
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    category: 'registration',
    regulatoryBody: 'Michigan Department of Attorney General, Consumer Protection Division',
    officialUrl: 'https://www.michigan.gov/ag/consumer-protection/consumer-alerts/consumer-alerts/invest/franchise',
    overview:
      'Michigan requires franchise registration under the Michigan Franchise Investment Law (MCLA 445.1501 et seq.). The Attorney General office administers franchise registrations. Franchisors must register their FDD before making any offers or sales in Michigan.',
    keyRequirements: [
      'Register FDD with the Michigan Attorney General before offering or selling franchises',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Michigan-specific addenda in the FDD',
      'Register franchise salespersons with the state',
    ],
    renewalInfo:
      'Annual renewal is required. Franchisors must file updated FDDs and maintain continuous registration to offer franchises.',
    fees:
      'Filing fees are approximately $250 for initial registration. Renewal fees are similar. Additional fees for amendments.',
    notes:
      'Michigan conducts a review-and-comment process for franchise registrations. Franchisors should expect examiner questions and potential requests for FDD modifications before registration is granted.',
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    category: 'registration',
    regulatoryBody: 'Minnesota Department of Commerce',
    officialUrl: 'https://mn.gov/commerce/industries/franchises/',
    overview:
      'Minnesota requires franchise registration under the Minnesota Franchise Act (Minn. Stat. 80C). The Department of Commerce reviews all franchise filings. Minnesota also has strong franchise relationship protections covering termination, non-renewal, and transfer.',
    keyRequirements: [
      'Register FDD with the Minnesota Department of Commerce before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Minnesota-specific addenda addressing relationship law provisions',
      'Comply with Minnesota franchise relationship law (Minn. Stat. 80C.14)',
      'Restrictions on post-termination non-compete clauses',
    ],
    renewalInfo:
      'Annual renewal is required. The Department of Commerce must receive updated FDD filings within the required period.',
    fees:
      'Initial registration fee is approximately $400. Renewal fee is approximately $200. Check with the Department of Commerce for current fees.',
    notes:
      'Minnesota is known for aggressive franchisee protections. The state limits post-termination non-compete provisions and has specific requirements around termination and non-renewal. Franchisors should carefully review their franchise agreements for compliance with Minnesota law.',
  },
  {
    slug: 'new-york',
    name: 'New York',
    category: 'registration',
    regulatoryBody: 'New York Department of Law, Investor Protection Bureau',
    officialUrl: 'https://ag.ny.gov/investor-protection/franchise-offerings',
    overview:
      'New York requires franchise registration under the New York Franchise Sales Act (GBL Article 33). The Department of Law Investor Protection Bureau conducts a thorough review of all FDD filings. New York is one of the most active franchise regulatory states.',
    keyRequirements: [
      'Register FDD with the New York Department of Law before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include New York-specific cover page and addenda',
      'Register franchise salespersons with the state',
      'Comply with specific advertising filing requirements',
    ],
    renewalInfo:
      'Annual renewal is required within 120 days of the franchisor fiscal year end. Franchisors must submit an updated FDD with current financial statements.',
    fees:
      'Initial filing fee is approximately $750. Annual renewal fee is approximately $150. Amendment and advertising filing fees also apply.',
    notes:
      'New York examiners are known for conducting very thorough reviews, and the registration process can take several months. The state requires filing of franchise advertising materials. New York is a critical market for most franchise systems and should be prioritized in registration planning.',
  },
  {
    slug: 'north-dakota',
    name: 'North Dakota',
    category: 'registration',
    regulatoryBody: 'North Dakota Securities Department',
    officialUrl: 'https://www.nd.gov/securities/franchise',
    overview:
      'North Dakota requires franchise registration under the North Dakota Franchise Investment Law (NDCC Chapter 51-19). The Securities Department administers franchise registrations. North Dakota also has franchise relationship protections.',
    keyRequirements: [
      'Register FDD with the North Dakota Securities Department before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include North Dakota-specific addenda',
      'Comply with relationship law provisions (restrictions on termination and non-renewal)',
    ],
    renewalInfo:
      'Annual renewal is required. Updated FDD and financial statements must be filed to maintain registration.',
    fees:
      'Filing fees are approximately $250 for initial registration and renewal. Check with the Securities Department for current fees.',
    notes:
      'North Dakota has strong franchisee protections. The state has specific provisions governing franchise termination, non-renewal, and transfer that may require modifications to standard franchise agreements.',
  },
  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    category: 'registration',
    regulatoryBody: 'Rhode Island Department of Business Regulation, Securities Division',
    officialUrl: 'https://dbr.ri.gov/securities/',
    overview:
      'Rhode Island requires franchise registration under the Rhode Island Franchise Investment Act. The Securities Division of the Department of Business Regulation handles franchise filings. Registration must be effective before any franchise offer or sale.',
    keyRequirements: [
      'Register FDD with the Rhode Island Securities Division before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Rhode Island-specific addenda in the FDD',
    ],
    renewalInfo:
      'Annual renewal is required. Franchisors must file updated materials to keep their registration current.',
    fees:
      'Registration fees are approximately $600. Renewal fees are similar. Contact the Securities Division for the current fee schedule.',
    notes:
      'Rhode Island is a smaller franchise market, but the registration requirement applies regardless of the number of planned franchise sales. Plan registration efforts accordingly when expanding into the Northeast.',
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    category: 'registration',
    regulatoryBody: 'South Dakota Division of Insurance, Securities Regulation',
    officialUrl: 'https://dlr.sd.gov/securities/franchise.aspx',
    overview:
      'South Dakota requires franchise registration under the South Dakota Franchises Act. The Division of Insurance handles franchise filings through its securities regulation arm. Franchisors must register before offering or selling franchises in the state.',
    keyRequirements: [
      'Register FDD with the South Dakota Division of Insurance before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include South Dakota-specific addenda',
    ],
    renewalInfo:
      'Annual renewal required. Franchisors must file updated FDD and financials within the prescribed timeframe.',
    fees:
      'Filing fees are approximately $250. Renewal fees are in the same range. Check with the Division of Insurance for current fees.',
    notes:
      'South Dakota has a relatively straightforward registration process compared to some other registration states. However, franchisors should still plan for examiner review and potential comments.',
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    category: 'registration',
    regulatoryBody: 'Virginia State Corporation Commission, Division of Securities and Retail Franchising',
    officialUrl: 'https://scc.virginia.gov/pages/Retail-Franchising',
    overview:
      'Virginia requires franchise registration under the Virginia Retail Franchising Act. The State Corporation Commission Division of Securities and Retail Franchising administers the registration process. Virginia is an active registration state with a dedicated franchise regulatory division.',
    keyRequirements: [
      'Register FDD with the Virginia State Corporation Commission before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Virginia-specific addenda and cover page',
      'File advertising materials with the state',
    ],
    renewalInfo:
      'Annual renewal required within 120 days of fiscal year end. Updated FDD and financial statements must be submitted.',
    fees:
      'Filing fee is approximately $500 for initial registration. Renewal fees are approximately $250. Amendment fees may also apply.',
    notes:
      'Virginia has a dedicated franchise regulatory division, which means the state has experienced franchise examiners. The review process is generally efficient but thorough.',
  },
  {
    slug: 'washington',
    name: 'Washington',
    category: 'registration',
    regulatoryBody: 'Washington Department of Financial Institutions, Securities Division',
    officialUrl: 'https://dfi.wa.gov/securities/franchise-offerings',
    overview:
      'Washington requires franchise registration under the Washington Franchise Investment Protection Act (RCW 19.100). The Department of Financial Institutions Securities Division oversees franchise filings. Washington also has franchise relationship protections.',
    keyRequirements: [
      'Register FDD with the Washington DFI before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Washington-specific addenda',
      'Comply with franchise relationship protections (restrictions on termination and non-renewal)',
      'File advertising materials if required',
    ],
    renewalInfo:
      'Annual renewal required. Franchisors must file updated FDD within the required period after fiscal year end.',
    fees:
      'Initial registration fee is approximately $600. Renewal fee is approximately $100. Amendment fees apply.',
    notes:
      'Washington has franchise relationship protections that restrict termination and non-renewal. The state is also part of the coordinated review program used by several registration states, which can streamline the filing process.',
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    category: 'registration',
    regulatoryBody: 'Wisconsin Department of Financial Institutions, Division of Securities',
    officialUrl: 'https://dfi.wi.gov/Pages/Securities/FranchiseInvestmentFilings.aspx',
    overview:
      'Wisconsin requires franchise registration under the Wisconsin Franchise Investment Law (Wis. Stat. 553). The Department of Financial Institutions Division of Securities reviews franchise filings. Wisconsin also has a Fair Dealership Law that provides relationship protections.',
    keyRequirements: [
      'Register FDD with the Wisconsin DFI before any offer or sale',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements',
      'File annual renewal to maintain registration',
      'Include Wisconsin-specific addenda',
      'Comply with the Wisconsin Fair Dealership Law (Wis. Stat. 135)',
    ],
    renewalInfo:
      'Annual renewal required. Updated FDD and financial statements must be filed within the prescribed period.',
    fees:
      'Filing fee is approximately $400 for initial registration. Renewal fees are approximately $200. Check with the DFI for current fees.',
    notes:
      'Wisconsin has the Fair Dealership Law (Wis. Stat. 135), which is separate from the franchise registration law and provides additional protections to dealers and franchisees. This law can apply broadly and franchisors should have counsel review compliance.',
  },

  // ─── FILING STATES ─────────────────────────────────────────────────
  {
    slug: 'connecticut',
    name: 'Connecticut',
    category: 'filing',
    regulatoryBody: 'Connecticut Department of Banking',
    officialUrl: 'https://portal.ct.gov/dob',
    overview:
      'Connecticut is a filing state, meaning franchisors must file a notice and their FDD with the state before offering or selling franchises. Unlike registration states, Connecticut does not conduct a substantive review of the FDD before the franchisor can begin selling.',
    keyRequirements: [
      'File FDD with the Connecticut Department of Banking before offering franchises',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates to maintain compliance',
      'Include Connecticut-specific addenda if required',
    ],
    renewalInfo:
      'Annual filing updates are required. Franchisors must file updated FDDs within the required period after fiscal year end.',
    fees:
      'Filing fees are approximately $400. Annual renewal fees are in a similar range.',
    notes:
      'Connecticut is a filing state, not a full registration state. The filing process is generally faster than registration states since there is no substantive examiner review. However, franchisors must still ensure full compliance with FTC Rule requirements.',
  },
  {
    slug: 'florida',
    name: 'Florida',
    category: 'filing',
    regulatoryBody: 'Florida Department of Agriculture and Consumer Services',
    officialUrl: 'https://www.fdacs.gov/Business-Services/Franchise-Filing',
    overview:
      'Florida is a filing state under the Florida Franchise Act. Franchisors must file their FDD with the Department of Agriculture and Consumer Services before offering or selling franchises. Florida does not conduct a substantive review but does require annual filings.',
    keyRequirements: [
      'File FDD with the Florida Department of Agriculture and Consumer Services',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates within required timeframes',
      'Pay filing fees and maintain active filing status',
    ],
    renewalInfo:
      'Annual filing required. Updated FDD must be filed within 120 days of the franchisor fiscal year end.',
    fees:
      'Filing fee is approximately $100. Annual renewal fee is approximately $100. Florida has among the lower filing fees.',
    notes:
      'Florida is one of the largest franchise markets in the country, making it a high priority state for most emerging franchisors. The filing process is relatively straightforward, but franchisors must maintain their annual filings to remain in compliance.',
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    category: 'filing',
    regulatoryBody: 'Kentucky Office of the Attorney General',
    officialUrl: 'https://www.ag.ky.gov/civil-division/consumer-protection/franchise',
    overview:
      'Kentucky requires franchisors to file their FDD with the Office of the Attorney General before offering or selling franchises. As a filing state, Kentucky does not conduct a full substantive review of the FDD before allowing sales to begin.',
    keyRequirements: [
      'File FDD with the Kentucky Attorney General before offering franchises',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates to maintain compliance',
      'Comply with the Kentucky Consumer Protection Act as it applies to franchise sales',
    ],
    renewalInfo:
      'Annual filing updates required. Franchisors must file updated FDDs within the required timeframe.',
    fees:
      'Filing fees are approximately $250. Annual renewal fees are similar.',
    notes:
      'Kentucky franchise filing is administered through the Attorney General office. The filing requirement is straightforward, but franchisors should still ensure they are filing on time to avoid lapses in compliance.',
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    category: 'filing',
    regulatoryBody: 'Nebraska Department of Banking and Finance',
    officialUrl: 'https://ndbf.nebraska.gov/franchise',
    overview:
      'Nebraska requires franchise filing under the Nebraska Franchise Practices Act. Franchisors must file their FDD with the Department of Banking and Finance. Nebraska is a filing state that does not conduct a full substantive review before allowing franchise sales.',
    keyRequirements: [
      'File FDD with the Nebraska Department of Banking and Finance',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates to maintain compliance',
      'Comply with the Nebraska Franchise Practices Act',
    ],
    renewalInfo:
      'Annual filing required. Updated FDDs must be submitted within the required period after fiscal year end.',
    fees:
      'Filing fees are approximately $100. Nebraska has relatively low franchise filing fees.',
    notes:
      'Nebraska also has a franchise relationship law (the Nebraska Franchise Practices Act) that provides franchisee protections regarding termination and non-renewal. Franchisors should review this law carefully.',
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    category: 'filing',
    regulatoryBody: 'North Carolina Secretary of State, Securities Division',
    officialUrl: 'https://www.sosnc.gov/divisions/securities',
    overview:
      'North Carolina requires franchisors to file their FDD with the Secretary of State Securities Division. As a filing state, North Carolina does not perform a substantive review, but the filing must be completed before any franchise offer or sale.',
    keyRequirements: [
      'File FDD with the North Carolina Secretary of State before offering franchises',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates to maintain compliance',
      'Pay applicable filing fees',
    ],
    renewalInfo:
      'Annual filing required. Franchisors must update their filing within the required period each year.',
    fees:
      'Filing fees are approximately $250. Renewal fees are similar.',
    notes:
      'North Carolina has a straightforward filing process. The state is a significant franchise market, particularly in the Southeast, and should be included in most franchise expansion plans.',
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    category: 'filing',
    regulatoryBody: 'South Carolina Secretary of State',
    officialUrl: 'https://sos.sc.gov/franchise',
    overview:
      'South Carolina requires franchisors to file a notice with the Secretary of State before offering or selling franchises. This is a filing requirement, not a full registration, so there is no substantive review by the state.',
    keyRequirements: [
      'File notice and FDD with the South Carolina Secretary of State',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates to maintain compliance',
    ],
    renewalInfo:
      'Annual filing required. Franchisors must maintain their filing by submitting updates on schedule.',
    fees:
      'Filing fees are approximately $100. South Carolina has relatively low franchise filing costs.',
    notes:
      'South Carolina has a simple filing process. Franchisors expanding through the Southeast should include this state in their filing schedule.',
  },
  {
    slug: 'texas',
    name: 'Texas',
    category: 'filing',
    regulatoryBody: 'Texas Secretary of State, Statutory Documents Section',
    officialUrl: 'https://www.sos.state.tx.us/statdoc/franchise.shtml',
    overview:
      'Texas requires franchisors to file their FDD with the Secretary of State before offering or selling franchises. Texas is a filing state, not a registration state, so the state does not conduct a substantive review of the FDD. Texas also has a Business Opportunity Act that may apply in certain situations.',
    keyRequirements: [
      'File FDD with the Texas Secretary of State before offering franchises',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates within required timeframes',
      'Determine whether the Texas Business Opportunity Act also applies',
    ],
    renewalInfo:
      'Annual filing required. Updated FDDs must be submitted to the Secretary of State each year.',
    fees:
      'Filing fee is approximately $25. Texas has one of the lowest franchise filing fees in the country.',
    notes:
      'Texas is one of the largest franchise markets in the United States. The filing process is straightforward and inexpensive. Franchisors should also analyze whether the Texas Business Opportunity Act applies to their offering, as it has separate requirements.',
  },
  {
    slug: 'utah',
    name: 'Utah',
    category: 'filing',
    regulatoryBody: 'Utah Division of Consumer Protection',
    officialUrl: 'https://consumerprotection.utah.gov/businesses/franchise.html',
    overview:
      'Utah requires franchisors to file their FDD with the Division of Consumer Protection before offering or selling franchises. As a filing state, Utah does not conduct a substantive review, but the filing must be on record before franchise offers are made.',
    keyRequirements: [
      'File FDD with the Utah Division of Consumer Protection',
      'Provide FDD to prospects at least 14 days before any agreement or payment',
      'Submit audited financial statements as part of the FDD',
      'File annual updates to maintain compliance',
      'Comply with the Utah Business Opportunity Disclosure Act if applicable',
    ],
    renewalInfo:
      'Annual filing required. Franchisors must submit updated FDDs on schedule to remain in compliance.',
    fees:
      'Filing fees are approximately $100. Renewal fees are in the same range.',
    notes:
      'Utah has a growing franchise market, particularly in the service and food sectors. The filing process is straightforward. Franchisors should also confirm whether the Business Opportunity Disclosure Act applies to their offering.',
  },

  // ─── NO-FILING STATES ──────────────────────────────────────────────
  {
    slug: 'alabama',
    name: 'Alabama',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.alabama.gov/',
    overview:
      'Alabama does not have a state franchise registration or filing requirement. Franchisors must still comply with the federal FTC Franchise Rule, which requires providing a compliant FDD to prospective franchisees at least 14 days before any agreement or payment.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD to prospective franchisees at least 14 days before any agreement or payment',
      'Maintain accurate and updated FDD',
      'Follow general state business laws and consumer protection statutes',
    ],
    renewalInfo:
      'No state renewal requirement. However, franchisors must keep their FDD updated annually per the FTC Rule.',
    fees:
      'No state franchise filing fees. General business registration fees may apply.',
    notes:
      'Although Alabama has no franchise-specific registration, franchisors must still comply with the federal FTC Franchise Rule and general Alabama business and consumer protection laws.',
  },
  {
    slug: 'alaska',
    name: 'Alaska',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.commerce.alaska.gov/',
    overview:
      'Alaska does not require franchise registration or filing at the state level. Franchisors must comply with the federal FTC Franchise Rule. Alaska has no state-specific franchise disclosure law.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Alaska business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates are required under the FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Alaska is a smaller franchise market with no state-level franchise law. Federal FTC compliance is the primary requirement.',
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.azsos.gov/',
    overview:
      'Arizona does not have a franchise registration or filing law. Franchisors selling in Arizona must comply with the federal FTC Franchise Rule. Arizona does have general consumer protection statutes that may apply.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with Arizona consumer fraud statutes',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Arizona is a significant franchise market, particularly for food, fitness, and service brands. Despite no state franchise filing law, franchisors must still maintain full FTC compliance.',
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.arkansas.gov/',
    overview:
      'Arkansas does not require franchise registration or filing. The federal FTC Franchise Rule is the primary regulatory framework governing franchise sales in Arkansas.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Arkansas business and consumer protection laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Arkansas has a franchise relationship law that provides limited protections to franchisees, particularly regarding termination. Franchisors should have counsel review compliance.',
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.state.co.us/',
    overview:
      'Colorado does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule. Colorado does have a general consumer protection act that may be relevant.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with the Colorado Consumer Protection Act',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Colorado is a growing franchise market. While there is no franchise-specific state law, the Colorado Consumer Protection Act provides broad protections that could apply to franchise transactions.',
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.delaware.gov/',
    overview:
      'Delaware does not require franchise registration or filing at the state level. The federal FTC Franchise Rule governs franchise sales. Many franchisors incorporate in Delaware due to its favorable corporate laws, but this is separate from franchise regulatory requirements.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Delaware business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Many franchise companies incorporate in Delaware for corporate law advantages. However, incorporation state and franchise regulatory state requirements are separate considerations.',
  },
  {
    slug: 'georgia',
    name: 'Georgia',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.ga.gov/',
    overview:
      'Georgia does not have a franchise-specific registration or filing law. Franchisors selling in Georgia must comply with the federal FTC Franchise Rule. Georgia is a major franchise market, particularly in the Southeast.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow Georgia business and consumer protection laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Georgia, particularly the Atlanta metropolitan area, is one of the most active franchise markets in the country. Franchisors can enter this market without state-level franchise filings, but must maintain FTC compliance.',
  },
  {
    slug: 'idaho',
    name: 'Idaho',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.idaho.gov/',
    overview:
      'Idaho does not require franchise registration or filing. The federal FTC Franchise Rule is the primary regulatory framework for franchise sales in Idaho.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Idaho business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Idaho has no franchise-specific regulatory requirements. Franchisors expanding into the Pacific Northwest should note that neighboring Washington is a registration state.',
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.iowa.gov/',
    overview:
      'Iowa does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule when selling in Iowa. Iowa does have a franchise relationship law.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with the Iowa Franchise Act relationship provisions (Iowa Code Chapter 523H)',
    ],
    renewalInfo:
      'No state registration renewal. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Iowa has a franchise relationship law (Iowa Code Chapter 523H) that provides protections regarding termination, non-renewal, and transfer. Franchisors should review their franchise agreements for compliance even though no filing is required.',
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.ks.gov/',
    overview:
      'Kansas does not require franchise registration or filing at the state level. The federal FTC Franchise Rule governs franchise sales in Kansas.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Kansas business and consumer protection laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Kansas has no franchise-specific regulatory requirements beyond federal law.',
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.la.gov/',
    overview:
      'Louisiana does not have a franchise registration or filing law. Franchisors selling franchises in Louisiana must comply with the federal FTC Franchise Rule.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Louisiana business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Louisiana operates under a civil law system (unlike the common law system in most other states), which can affect certain contract provisions. Franchisors should have Louisiana counsel review franchise agreements.',
  },
  {
    slug: 'maine',
    name: 'Maine',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.maine.gov/sos/',
    overview:
      'Maine does not require franchise registration or filing. The federal FTC Franchise Rule is the primary regulatory framework for franchise sales in Maine.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Maine business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Maine has no franchise-specific state law. Franchisors expanding into New England should note that nearby Rhode Island is a registration state and Connecticut is a filing state.',
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sec.state.ma.us/',
    overview:
      'Massachusetts does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule. Massachusetts does have a strong consumer protection statute (Chapter 93A) that can be relevant to franchise relationships.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with Massachusetts General Laws Chapter 93A (consumer protection)',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Massachusetts Chapter 93A provides broad consumer protection that courts have applied to franchise disputes. This statute allows treble damages, making compliance particularly important.',
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.ms.gov/',
    overview:
      'Mississippi does not require franchise registration or filing. The federal FTC Franchise Rule governs franchise sales in Mississippi. Mississippi has a franchise termination law that provides limited franchisee protections.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with Mississippi franchise termination provisions',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Mississippi has a franchise termination law that provides protections to franchisees in certain termination situations. Franchisors should be aware of this when drafting termination provisions.',
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.mo.gov/',
    overview:
      'Missouri does not have a franchise registration or filing requirement. Franchisors must comply with the federal FTC Franchise Rule when selling franchises in Missouri.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Missouri business and consumer protection laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Missouri has a franchise relationship law that provides limited protections, particularly regarding termination. Franchisors should review franchise agreement provisions for compliance.',
  },
  {
    slug: 'montana',
    name: 'Montana',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sosmt.gov/',
    overview:
      'Montana does not require franchise registration or filing at the state level. The federal FTC Franchise Rule is the governing framework for franchise sales in Montana.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Montana business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Montana has no franchise-specific regulatory requirements beyond federal law.',
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.nvsos.gov/',
    overview:
      'Nevada does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule. Nevada is a popular state for franchise expansion, particularly in the Las Vegas market.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Nevada business and consumer protection laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Nevada, particularly the Las Vegas area, is a high-demand market for franchise brands in the food, hospitality, and service sectors.',
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.nh.gov/',
    overview:
      'New Hampshire does not require franchise registration or filing. The federal FTC Franchise Rule governs franchise sales in the state.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general New Hampshire business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'New Hampshire has no franchise-specific regulatory requirements. Franchisors expanding into New England can sell in New Hampshire without state filings.',
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.nj.gov/state/',
    overview:
      'New Jersey does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule. New Jersey has the Franchise Practices Act, a franchise relationship law.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with the New Jersey Franchise Practices Act (N.J.S.A. 56:10-1 et seq.)',
    ],
    renewalInfo:
      'No state registration renewal. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'New Jersey has the Franchise Practices Act, one of the more significant franchise relationship laws in the country. It provides protections regarding termination, non-renewal, and transfer. Franchisors must ensure their franchise agreements comply with this law.',
  },
  {
    slug: 'new-mexico',
    name: 'New Mexico',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.state.nm.us/',
    overview:
      'New Mexico does not require franchise registration or filing. The federal FTC Franchise Rule is the governing framework for franchise sales in New Mexico.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general New Mexico business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'New Mexico has no franchise-specific state law. Standard FTC compliance is sufficient for franchise sales in the state.',
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.ohiosos.gov/',
    overview:
      'Ohio does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule when selling franchises in Ohio. Ohio does have a Business Opportunity Act that may apply in certain circumstances.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Determine whether the Ohio Business Opportunity Act applies',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Ohio is a significant franchise market. While there is no franchise registration law, the Ohio Business Opportunity Act has requirements that may overlap with certain franchise offerings. Franchisors should have counsel confirm whether the exemption from the Business Opportunity Act applies.',
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.sos.ok.gov/',
    overview:
      'Oklahoma does not require franchise registration or filing at the state level. The federal FTC Franchise Rule is the primary regulatory framework for franchise sales in Oklahoma.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Oklahoma business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Oklahoma has no franchise-specific regulatory requirements beyond federal law.',
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.oregon.gov/',
    overview:
      'Oregon does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule. Oregon does have general consumer protection statutes that may be relevant.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Comply with Oregon Unlawful Trade Practices Act',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Oregon is located between two registration states (Washington and California). Franchisors expanding along the West Coast should plan their Oregon sales alongside their registration filings for neighboring states.',
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://www.dos.pa.gov/',
    overview:
      'Pennsylvania does not require franchise registration or filing. The federal FTC Franchise Rule governs franchise sales. Pennsylvania does have a franchise relationship statute that protects certain franchisees.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Review compliance with Pennsylvania franchise relationship statutes if applicable',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Pennsylvania has limited franchise relationship protections, particularly for certain industries. Franchisors should have counsel review whether any industry-specific franchise laws apply to their concept.',
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.tn.gov/',
    overview:
      'Tennessee does not require franchise registration or filing at the state level. The federal FTC Franchise Rule is the primary regulatory framework for franchise sales in Tennessee.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Tennessee business and consumer protection laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Tennessee, particularly the Nashville and Memphis markets, is a growing franchise market. No state-specific franchise filings are required.',
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.vermont.gov/',
    overview:
      'Vermont does not have a franchise registration or filing law. Franchisors selling in Vermont must comply with the federal FTC Franchise Rule.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Vermont business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Vermont has no franchise-specific state law. Standard FTC compliance governs franchise sales.',
  },
  {
    slug: 'west-virginia',
    name: 'West Virginia',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.wv.gov/',
    overview:
      'West Virginia does not require franchise registration or filing. The federal FTC Franchise Rule is the primary regulatory framework for franchise sales in West Virginia.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general West Virginia business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'West Virginia has no franchise-specific regulatory requirements beyond federal law.',
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    category: 'no-filing',
    regulatoryBody: 'No state franchise registration agency',
    officialUrl: 'https://sos.wyo.gov/',
    overview:
      'Wyoming does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule when offering or selling franchises in Wyoming.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow general Wyoming business laws',
    ],
    renewalInfo:
      'No state renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No state franchise filing fees.',
    notes:
      'Wyoming has no franchise-specific regulatory requirements. It is a smaller franchise market with limited state-level regulation.',
  },
  {
    slug: 'district-of-columbia',
    name: 'District of Columbia',
    category: 'no-filing',
    regulatoryBody: 'No franchise registration agency',
    officialUrl: 'https://os.dc.gov/',
    overview:
      'The District of Columbia does not have a franchise registration or filing law. Franchisors must comply with the federal FTC Franchise Rule when offering or selling franchises in D.C.',
    keyRequirements: [
      'Comply with the federal FTC Franchise Rule',
      'Provide a compliant FDD at least 14 days before any agreement or payment',
      'Maintain an updated FDD annually per the FTC Rule',
      'Follow D.C. business and consumer protection laws',
    ],
    renewalInfo:
      'No D.C. renewal requirement. Annual FDD updates required under FTC Rule.',
    fees:
      'No D.C. franchise filing fees.',
    notes:
      'D.C. has no franchise-specific regulatory requirements. The district is a modest franchise market but relevant for brands expanding in the mid-Atlantic region.',
  },
]

export function getStateBySlug(slug: string): FranchiseStateData | undefined {
  return FRANCHISE_LAWS.find((s) => s.slug === slug)
}

export function getStatesByCategory(category: FranchiseStateCategory): FranchiseStateData[] {
  return FRANCHISE_LAWS.filter((s) => s.category === category)
}

export function getCategoryLabel(category: FranchiseStateCategory): string {
  switch (category) {
    case 'registration':
      return 'Registration State'
    case 'filing':
      return 'Filing State'
    case 'no-filing':
      return 'No Filing Required'
  }
}

export function getCategoryColor(category: FranchiseStateCategory): string {
  switch (category) {
    case 'registration':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'filing':
      return 'bg-amber-100 text-amber-800 border-amber-200'
    case 'no-filing':
      return 'bg-green-100 text-green-800 border-green-200'
  }
}
