export type CityData = {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  population: string;
  metroArea: string;
  topIndustries: string[];
  localInsight: string;
  franchiseActivity: string;
};

export const cities: CityData[] = [
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    stateAbbr: "NY",
    population: "8.3 million",
    metroArea: "New York-Newark-Jersey City",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Business Services", "Home Services"],
    localInsight: "New York is a dense market with heavy foot traffic, and quick-service restaurants and boutique fitness studios operate across the city. Commercial rents are a major cost for any new location. Outside Manhattan, Brooklyn, Queens, and the Bronx have large residential neighborhoods with their own commercial corridors.",
    franchiseActivity: "The metro has franchise locations across food, fitness, and personal care. Locations range from single units run by their owners to groups run by multi-unit operators."
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    population: "3.9 million",
    metroArea: "Los Angeles-Long Beach-Anaheim",
    topIndustries: ["Health & Wellness", "Food & Beverage", "Beauty & Personal Care", "Home Services"],
    localInsight: "Health-focused dining, boutique fitness, and beauty are visible parts of the Los Angeles consumer economy. The metro is spread out, so each neighborhood tends to function as its own local market. Many businesses in the metro serve customers in both English and Spanish.",
    franchiseActivity: "Franchise owners in Los Angeles range from first-time owners to multi-unit operators with locations across the region. Franchise categories in the metro include food service, wellness, pet care, and mobile services."
  },
  {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    population: "2.7 million",
    metroArea: "Chicago-Naperville-Elgin",
    topIndustries: ["Food & Beverage", "Home Services", "Senior Care", "Fitness & Wellness"],
    localInsight: "Chicago has a large trades workforce and a wide ring of suburbs where home services, restoration, and maintenance businesses operate. The city is organized around distinct neighborhoods, each with its own commercial streets. Cold winters make seasonal services such as cleaning and restoration part of the local economy.",
    franchiseActivity: "The greater Chicagoland area has long had franchise locations from national quick-service restaurant brands, along with home services and senior care franchises. Suburban corridors along I-88 and I-90 are major commercial routes in the metro."
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    population: "2.3 million",
    metroArea: "Houston-The Woodlands-Sugar Land",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Fitness & Wellness"],
    localInsight: "Houston's economy is anchored by the energy sector, and dining, automotive, and home improvement businesses serve a large consumer base. The City of Houston does not have traditional zoning, which shapes how commercial sites are developed. The metro's population is diverse, and its dining scene reflects that.",
    franchiseActivity: "Franchise categories in Houston include fast-casual restaurants and automotive services. The Woodlands, Katy, and Sugar Land are large suburban communities with their own retail corridors."
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    population: "1.6 million",
    metroArea: "Phoenix-Mesa-Chandler",
    topIndustries: ["Home Services", "Food & Beverage", "Senior Care", "Fitness & Wellness"],
    localInsight: "Phoenix draws new residents from California, the Midwest, and other parts of the country. Much of the Valley's housing is in newer master-planned communities. Retirement communities such as Sun City are part of the metro, and senior care and medical services serve those residents.",
    franchiseActivity: "The Loop 101 and Loop 202 corridors connect many of the Valley's newer residential communities and retail centers. Home services and quick-service restaurant brands both have franchise locations across the metro."
  },
  {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: "1.6 million",
    metroArea: "Philadelphia-Camden-Wilmington",
    topIndustries: ["Food & Beverage", "Health & Wellness", "Education & Tutoring", "Home Services"],
    localInsight: "Philadelphia's economy includes major universities and a large healthcare sector. Neighborhoods such as Fishtown, Northern Liberties, and University City have active commercial streets.",
    franchiseActivity: "The metro has long-standing quick-service restaurant franchises alongside newer boutique concepts. The Main Line and South Jersey are the main suburban areas around the city."
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    state: "Texas",
    stateAbbr: "TX",
    population: "1.5 million",
    metroArea: "San Antonio-New Braunfels",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Senior Care"],
    localInsight: "San Antonio is home to Joint Base San Antonio, and the military community is a large part of the local economy. The city's tourism industry, anchored by the River Walk and surrounding attractions, supports food and hospitality concepts. Suburban development extends along the I-35 corridor toward New Braunfels.",
    franchiseActivity: "Franchise categories in San Antonio include fast food, home repair, and fitness. The north side of the city and the corridor toward New Braunfels are major commercial areas."
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    stateAbbr: "CA",
    population: "1.4 million",
    metroArea: "San Diego-Chula Vista-Carlsbad",
    topIndustries: ["Health & Wellness", "Food & Beverage", "Fitness & Wellness", "Pet Services"],
    localInsight: "San Diego's outdoor culture is reflected in its fitness, wellness, and healthy dining businesses. Naval Base San Diego and Camp Pendleton make the military a major part of the regional economy. Biotech and defense employers are concentrated in the northern part of the city, near neighborhoods such as Carmel Valley and Scripps Ranch.",
    franchiseActivity: "Franchise categories in the market include acai bowl and juice bar concepts and boutique fitness studios. North County communities such as Carlsbad and Oceanside have their own retail centers."
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    population: "1.3 million",
    metroArea: "Dallas-Fort Worth-Arlington",
    topIndustries: ["Food & Beverage", "Business Services", "Home Services", "Fitness & Wellness"],
    localInsight: "Companies including Toyota, McKesson, and Charles Schwab have moved their headquarters to the Dallas area in recent years. Corporate offices are spread across the metro, including the Legacy area of Plano and Las Colinas in Irving. Texas has no state personal income tax.",
    franchiseActivity: "Franchise locations operate across the DFW metroplex, from dense urban districts to newer suburbs. Frisco, McKinney, and Allen are suburbs north of Dallas along the Dallas North Tollway and US 75 corridors."
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    state: "Florida",
    stateAbbr: "FL",
    population: "950,000",
    metroArea: "Jacksonville",
    topIndustries: ["Home Services", "Food & Beverage", "Senior Care", "Fitness & Wellness"],
    localInsight: "Jacksonville covers a large land area, so many of its neighborhoods are suburban in layout. JAXPORT and the distribution centers around it make logistics a major local employer. Retirees are part of the population in the Beaches communities and Ponte Vedra.",
    franchiseActivity: "The St. Johns Town Center area, the Southside, and Nocatee are major commercial and residential areas. Franchise categories in the market include home services and quick-service restaurants."
  },
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    population: "1.0 million",
    metroArea: "Austin-Round Rock-Georgetown",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Tech Services", "Pet Services"],
    localInsight: "Austin's tech sector includes Tesla, Apple, and Oracle, each with a large local presence. Independent local restaurants and shops are a well-known part of the city's identity. Round Rock, Cedar Park, and Georgetown are the main suburbs to the north.",
    franchiseActivity: "Franchise categories in Austin include fast-casual dining and boutique fitness. Franchise locations compete directly with the city's independent restaurants and retailers."
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    population: "960,000",
    metroArea: "Dallas-Fort Worth-Arlington",
    topIndustries: ["Home Services", "Food & Beverage", "Automotive Services", "Childcare"],
    localInsight: "Fort Worth is the western anchor of the DFW metroplex, with its own downtown and economy. The Stockyards district draws visitors, and newer residential areas extend to the north and west of the city. Naval Air Station Joint Reserve Base Fort Worth and the Lockheed Martin aircraft plant next to it are major employers.",
    franchiseActivity: "The Alliance corridor and I-35W connect many of the city's newer master-planned communities. Childcare and home services franchises operate throughout these communities."
  },
  {
    slug: "san-jose",
    name: "San Jose",
    state: "California",
    stateAbbr: "CA",
    population: "1.0 million",
    metroArea: "San Jose-Sunnyvale-Santa Clara",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Education & Tutoring", "Business Services"],
    localInsight: "San Jose sits in Silicon Valley, where Apple, Google, and Adobe are among the major employers. Commercial rents are high, and California's franchise registration requirement applies to any franchisor selling here.",
    franchiseActivity: "Franchise categories in the area include dining, education, and fitness. Tutoring and enrichment businesses are a visible part of the local economy, reflecting the area's focus on education."
  },
  {
    slug: "columbus",
    name: "Columbus",
    state: "Ohio",
    stateAbbr: "OH",
    population: "905,000",
    metroArea: "Columbus",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Business Services"],
    localInsight: "Columbus is the state capital of Ohio. Major employers include Ohio State University and Nationwide, and Intel is building a semiconductor plant in nearby Licking County. The Short North, German Village, and Easton are established commercial districts.",
    franchiseActivity: "Dublin, Westerville, and Grove City are major suburbs with their own retail corridors."
  },
  {
    slug: "charlotte",
    name: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    population: "880,000",
    metroArea: "Charlotte-Concord-Gastonia",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Business Services", "Home Services"],
    localInsight: "Charlotte is a major banking center, home to the headquarters of Bank of America and Truist. The metro extends into South Carolina, with suburbs on both sides of the state line. SouthPark, Ballantyne, and the Lake Norman area are established commercial and residential areas.",
    franchiseActivity: "Franchise categories in Charlotte include fast-casual dining and boutique fitness. University City, near UNC Charlotte, and the NoDa arts district have younger populations."
  },
  {
    slug: "indianapolis",
    name: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    population: "880,000",
    metroArea: "Indianapolis-Carmel-Anderson",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Senior Care"],
    localInsight: "The Indianapolis economy is anchored by healthcare, logistics, and motorsports. Its central location and interstate connections make it a distribution hub. Carmel, Fishers, and Zionsville are the main suburbs north of the city.",
    franchiseActivity: "Automotive, home services, and quick-service restaurant franchises operate along the I-465 loop and the roads that feed it. Downtown's convention center and sports venues support food and hospitality businesses."
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    state: "California",
    stateAbbr: "CA",
    population: "875,000",
    metroArea: "San Francisco-Oakland-Berkeley",
    topIndustries: ["Food & Beverage", "Health & Wellness", "Fitness & Wellness", "Pet Services"],
    localInsight: "San Francisco's economy is driven by technology, finance, and tourism. Downtown office vacancy has risen in recent years, while neighborhood districts such as the Marina, Hayes Valley, and Noe Valley have their own retail streets. Across the bay, Oakland and Berkeley are part of the same metro.",
    franchiseActivity: "Franchise categories in San Francisco include health, wellness, and specialty food. Commercial rents and California's franchise registration requirement both affect the cost of opening here."
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    population: "740,000",
    metroArea: "Seattle-Tacoma-Bellevue",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Home Services", "Pet Services"],
    localInsight: "Seattle's economy is anchored by technology employers, including Amazon and Microsoft. The region's wet climate shapes local services such as indoor fitness and home maintenance. Bellevue and the Eastside suburbs have their own business districts.",
    franchiseActivity: "Franchise locations in Seattle compete with a strong culture of independent local businesses. South King County and Pierce County, including Tacoma, make up the southern part of the metro."
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    population: "715,000",
    metroArea: "Denver-Aurora-Lakewood",
    topIndustries: ["Fitness & Wellness", "Food & Beverage", "Home Services", "Pet Services"],
    localInsight: "Denver's outdoor culture is reflected in its fitness, wellness, and healthy dining businesses. Suburbs such as Aurora, Thornton, and Castle Rock ring the city.",
    franchiseActivity: "Franchise categories in the Denver metro include boutique fitness and fast-casual dining. RiNo, LoHi, and Cherry Creek are established urban commercial districts."
  },
  {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    population: "690,000",
    metroArea: "Nashville-Davidson-Murfreesboro-Franklin",
    topIndustries: ["Food & Beverage", "Health & Wellness", "Home Services", "Fitness & Wellness"],
    localInsight: "Nashville's entertainment and tourism economy is centered downtown, and Franklin, Murfreesboro, and Hendersonville are the main surrounding suburbs. Healthcare is a major industry, with HCA Healthcare and Vanderbilt University Medical Center among the large employers. Tennessee has no state income tax on wages.",
    franchiseActivity: "Franchise categories in Nashville include fast-casual dining and fitness. Cool Springs in Franklin and Mt. Juliet to the east are major suburban commercial areas."
  },
  {
    slug: "oklahoma-city",
    name: "Oklahoma City",
    state: "Oklahoma",
    stateAbbr: "OK",
    population: "680,000",
    metroArea: "Oklahoma City",
    topIndustries: ["Food & Beverage", "Automotive Services", "Home Services", "Business Services"],
    localInsight: "Oklahoma City's economy is tied to the energy sector, along with government, aviation, and healthcare. The city's MAPS public investment programs funded projects in and around the Bricktown and Midtown districts. The metro is spread out and largely car dependent, so drive-through locations are common.",
    franchiseActivity: "Franchise categories in the OKC metro include quick-service restaurants, automotive services, and home services. Edmond to the north and Norman to the south are major suburbs."
  },
  {
    slug: "washington-dc",
    name: "Washington DC",
    state: "District of Columbia",
    stateAbbr: "DC",
    population: "690,000",
    metroArea: "Washington-Arlington-Alexandria",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Business Services", "Education & Tutoring"],
    localInsight: "The DC metro economy is built on federal government employment and a large contractor workforce. Northern Virginia communities such as Tysons, Reston, and Ashburn and Maryland suburbs such as Bethesda and Rockville are major commercial centers.",
    franchiseActivity: "Franchise categories in the greater DC area include fast-casual dining, fitness, and tutoring. The District has no franchise registration or filing law, while neighboring Maryland and Virginia are both registration states."
  },
  {
    slug: "el-paso",
    name: "El Paso",
    state: "Texas",
    stateAbbr: "TX",
    population: "680,000",
    metroArea: "El Paso",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Senior Care"],
    localInsight: "El Paso shares a border and an economy with Ciudad Juarez, with cross-border commerce and a large bilingual population. Fort Bliss is a major employer and a large part of the local economy.",
    franchiseActivity: "Franchise categories in El Paso include quick-service restaurants, automotive services, and home services, and newer residential development sits on the far east and northwest sides of the city."
  },
  {
    slug: "las-vegas",
    name: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    population: "650,000",
    metroArea: "Las Vegas-Henderson-Paradise",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Beauty & Personal Care"],
    localInsight: "Beyond the Strip, the Las Vegas valley includes large residential communities such as Henderson, Summerlin, and North Las Vegas. Nevada has no state personal income tax.",
    franchiseActivity: "Franchise categories in Las Vegas include home services, quick-service restaurants, and beauty. Henderson and the southwest part of the valley are major suburban commercial areas."
  },
  {
    slug: "louisville",
    name: "Louisville",
    state: "Kentucky",
    stateAbbr: "KY",
    population: "630,000",
    metroArea: "Louisville/Jefferson County",
    topIndustries: ["Food & Beverage", "Home Services", "Senior Care", "Automotive Services"],
    localInsight: "Louisville's economy is anchored by UPS Worldport, Humana, and bourbon tourism. Its location and air cargo operations make logistics a major local industry. The metro includes the East End and suburbs across the river in Southern Indiana, and Bardstown Road and NuLu are established commercial corridors.",
    franchiseActivity: "Franchise categories in Louisville include home services, quick-service restaurants, and senior care. The Shelbyville Road corridor and St. Matthews are major retail areas."
  },
  {
    slug: "memphis",
    name: "Memphis",
    state: "Tennessee",
    stateAbbr: "TN",
    population: "630,000",
    metroArea: "Memphis",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Business Services"],
    localInsight: "Memphis is home to the FedEx global hub, and logistics and distribution are major local employers. The city's music and food heritage draw visitors, and Germantown, Collierville, and Bartlett are suburbs to the east.",
    franchiseActivity: "Franchise categories in the Memphis metro include quick-service restaurants, home services, and automotive services. Germantown Parkway is a major commercial corridor in the eastern suburbs."
  },
  {
    slug: "baltimore",
    name: "Baltimore",
    state: "Maryland",
    stateAbbr: "MD",
    population: "575,000",
    metroArea: "Baltimore-Columbia-Towson",
    topIndustries: ["Food & Beverage", "Home Services", "Health & Wellness", "Senior Care"],
    localInsight: "Baltimore's economy is anchored by the Johns Hopkins health system, the Port of Baltimore, and a biotech sector. Columbia, Towson, and Bel Air are major suburban communities. Baltimore and Washington DC are neighboring metros connected by I-95 and the Baltimore-Washington Parkway.",
    franchiseActivity: "The I-83 and I-95 corridors connect the suburban ring to the city. Franchise categories in the metro include home services, senior care, and fast-casual dining."
  },
  {
    slug: "milwaukee",
    name: "Milwaukee",
    state: "Wisconsin",
    stateAbbr: "WI",
    population: "570,000",
    metroArea: "Milwaukee-Waukesha",
    topIndustries: ["Food & Beverage", "Home Services", "Senior Care", "Automotive Services"],
    localInsight: "Milwaukee's manufacturing base sits alongside healthcare, financial services, and water technology employers. City neighborhoods such as the Third Ward and Bay View, and suburbs such as Wauwatosa, each have their own commercial streets.",
    franchiseActivity: "Quick-service restaurant franchises are located along the metro's major arterials and suburban corridors. Brookfield, Mequon, and the Waukesha County suburbs are major suburban areas north and west of the city."
  },
  {
    slug: "albuquerque",
    name: "Albuquerque",
    state: "New Mexico",
    stateAbbr: "NM",
    population: "565,000",
    metroArea: "Albuquerque",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Senior Care"],
    localInsight: "Albuquerque's economy includes military, government, and technology employment anchored by Kirtland Air Force Base and Sandia National Laboratories. Rio Rancho and the west side have newer residential areas with their own retail.",
    franchiseActivity: "Franchise categories in Albuquerque include home services and senior care. Paseo del Norte and Coors Boulevard are major commercial corridors."
  },
  {
    slug: "tucson",
    name: "Tucson",
    state: "Arizona",
    stateAbbr: "AZ",
    population: "545,000",
    metroArea: "Tucson",
    topIndustries: ["Food & Beverage", "Senior Care", "Home Services", "Automotive Services"],
    localInsight: "Tucson's economy is anchored by the University of Arizona, Raytheon, and Davis-Monthan Air Force Base. Retirees, drawn by the warm climate, are part of the population. Tucson was named a UNESCO City of Gastronomy in 2015.",
    franchiseActivity: "Franchise categories in Tucson include quick-service restaurants and home services. Oro Valley and Marana are suburbs to the north and northwest of the city."
  },
  {
    slug: "mesa",
    name: "Mesa",
    state: "Arizona",
    stateAbbr: "AZ",
    population: "505,000",
    metroArea: "Phoenix-Mesa-Chandler",
    topIndustries: ["Home Services", "Food & Beverage", "Senior Care", "Fitness & Wellness"],
    localInsight: "Mesa is in the East Valley of the Phoenix metro. The city sits near the Superstition Mountains and includes several active adult communities. Boeing, Banner Health, and aerospace companies near Falcon Field and Mesa Gateway Airport are major employers.",
    franchiseActivity: "Franchise categories in Mesa include home services, fitness, and family dining, and Power Road and Baseline Road are major commercial corridors."
  },
  {
    slug: "fresno",
    name: "Fresno",
    state: "California",
    stateAbbr: "CA",
    population: "540,000",
    metroArea: "Fresno",
    topIndustries: ["Food & Beverage", "Automotive Services", "Home Services", "Business Services"],
    localInsight: "Fresno sits in California's Central Valley, a major agricultural region, and serves as a commercial center for it. Agriculture, food processing, and healthcare are major parts of the local economy.",
    franchiseActivity: "North Fresno and Clovis are major retail areas."
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    state: "California",
    stateAbbr: "CA",
    population: "525,000",
    metroArea: "Sacramento-Roseville-Folsom",
    topIndustries: ["Food & Beverage", "Home Services", "Health & Wellness", "Business Services"],
    localInsight: "Sacramento's economy is built on state government employment, along with healthcare, technology, and a farm-to-fork dining scene. Roseville, Folsom, and Elk Grove are major suburbs. The city's central California location also makes it a logistics and distribution node.",
    franchiseActivity: "Franchise categories in the Sacramento metro include fast-casual dining and home services. Roseville and Folsom have large retail centers along the I-80 and US 50 corridors."
  },
  {
    slug: "kansas-city",
    name: "Kansas City",
    state: "Missouri",
    stateAbbr: "MO",
    population: "510,000",
    metroArea: "Kansas City",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Business Services"],
    localInsight: "Kansas City straddles two states, with an economy spanning agriculture, technology, logistics, and financial services. Its interstate crossroads make it a distribution hub. Overland Park, Lee's Summit, and the Northland are major suburban areas.",
    franchiseActivity: "Franchise categories in the KC metro include quick-service restaurants, automotive services, and home services. Johnson County makes up much of the Kansas side of the metro."
  },
  {
    slug: "atlanta",
    name: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    population: "500,000",
    metroArea: "Atlanta-Sandy Springs-Alpharetta",
    topIndustries: ["Food & Beverage", "Business Services", "Home Services", "Fitness & Wellness"],
    localInsight: "The Atlanta metro is home to the headquarters of Coca-Cola, Delta Air Lines, Home Depot, and UPS. Suburbs such as Alpharetta, Marietta, and Peachtree City surround the city. Hartsfield-Jackson Atlanta International Airport makes the city a major transportation hub.",
    franchiseActivity: "Franchise locations operate across the Atlanta metro, from the city core to the outer suburbs. The Perimeter, Buckhead, and North Fulton are established commercial areas."
  },
  {
    slug: "omaha",
    name: "Omaha",
    state: "Nebraska",
    stateAbbr: "NE",
    population: "490,000",
    metroArea: "Omaha-Council Bluffs",
    topIndustries: ["Food & Beverage", "Home Services", "Business Services", "Automotive Services"],
    localInsight: "Omaha is home to the headquarters of Berkshire Hathaway, Mutual of Omaha, and Union Pacific. West Omaha, Papillion, and La Vista are suburban areas with newer housing.",
    franchiseActivity: "Village Pointe and Aksarben Village are established retail districts."
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    population: "450,000",
    metroArea: "Miami-Fort Lauderdale-Pompano Beach",
    topIndustries: ["Food & Beverage", "Beauty & Personal Care", "Fitness & Wellness", "Home Services"],
    localInsight: "Miami's ties to Latin America give it an international population, and many businesses serve customers in both English and Spanish. Tourism, real estate, and financial services are major parts of the economy. Miami-Dade and Broward counties are densely populated.",
    franchiseActivity: "Franchise categories in South Florida include food and beauty. Coral Gables, Brickell, Aventura, Hialeah, and Homestead are distinct commercial areas within the metro."
  },
  {
    slug: "raleigh",
    name: "Raleigh",
    state: "North Carolina",
    stateAbbr: "NC",
    population: "470,000",
    metroArea: "Raleigh-Cary",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Education & Tutoring", "Home Services"],
    localInsight: "Raleigh, Durham, and Chapel Hill anchor the Research Triangle, a center for technology and biotech. Employers include Red Hat, Cisco, and Epic Games, along with the region's universities. Cary, Apex, and Holly Springs are suburbs to the south and west of Raleigh.",
    franchiseActivity: "Franchise categories in Raleigh include fast-casual dining, tutoring, and boutique fitness."
  },
  {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "Minnesota",
    stateAbbr: "MN",
    population: "430,000",
    metroArea: "Minneapolis-St. Paul-Bloomington",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Home Services", "Business Services"],
    localInsight: "The Twin Cities metro is home to the headquarters of Target, UnitedHealth Group, and 3M. Cold winters shape local services such as HVAC, restoration, and indoor fitness. Eden Prairie, Maple Grove, and Woodbury are major suburbs with their own retail centers.",
    franchiseActivity: "Franchise categories in the Minneapolis and St. Paul metro include food, fitness, and home services. The Mall of America area in Bloomington and the Uptown district are major retail areas."
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "Florida",
    stateAbbr: "FL",
    population: "400,000",
    metroArea: "Tampa-St. Petersburg-Clearwater",
    topIndustries: ["Home Services", "Food & Beverage", "Senior Care", "Fitness & Wellness"],
    localInsight: "Florida has no state personal income tax, and the warm climate draws retirees and remote workers to Tampa Bay. The metro's economy spans finance, healthcare, defense work tied to MacDill Air Force Base, and technology. Wesley Chapel, Riverview, and Brandon are large suburban communities outside the city.",
    franchiseActivity: "Franchise categories in Tampa Bay include home services, quick-service restaurants, and senior care. The I-75 corridor runs north through Pasco County."
  },
  {
    slug: "new-orleans",
    name: "New Orleans",
    state: "Louisiana",
    stateAbbr: "LA",
    population: "385,000",
    metroArea: "New Orleans-Metairie",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Business Services"],
    localInsight: "Tourism is central to the New Orleans economy, and food and hospitality businesses serve both visitors and residents. The city has a distinct food culture, and national brands compete with long-standing local restaurants. Metairie, Kenner, and Slidell are suburban communities outside the city.",
    franchiseActivity: "The French Quarter is known for independent businesses, while the suburban parishes have more conventional retail corridors. Hurricane and flood risk make restoration and home repair services part of the regional economy."
  },
  {
    slug: "cleveland",
    name: "Cleveland",
    state: "Ohio",
    stateAbbr: "OH",
    population: "370,000",
    metroArea: "Cleveland-Elyria",
    topIndustries: ["Food & Beverage", "Home Services", "Senior Care", "Automotive Services"],
    localInsight: "Cleveland's healthcare sector, led by the Cleveland Clinic and University Hospitals, is a major employer. Tremont and Ohio City are West Side neighborhoods with active commercial streets.",
    franchiseActivity: "Beachwood and Solon to the east and Westlake and Avon to the west are major suburban commercial areas. Franchise categories in the metro include home services and quick-service restaurants."
  },
  {
    slug: "orlando",
    name: "Orlando",
    state: "Florida",
    stateAbbr: "FL",
    population: "310,000",
    metroArea: "Orlando-Kissimmee-Sanford",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Beauty & Personal Care"],
    localInsight: "Orlando's economy is built around Walt Disney World, Universal Orlando, and the hospitality industry that serves them. Outside tourism, the metro's residents live across suburbs in Orange, Seminole, and Osceola counties. Lake Nona, Winter Garden, and Horizon West have newer planned communities with housing and retail.",
    franchiseActivity: "Franchise locations in Orlando serve both the tourist corridors and the residential suburbs. I-4 and the 417 loop are major commercial routes across the metro."
  },
  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    state: "Pennsylvania",
    stateAbbr: "PA",
    population: "305,000",
    metroArea: "Pittsburgh",
    topIndustries: ["Food & Beverage", "Home Services", "Senior Care", "Health & Wellness"],
    localInsight: "Pittsburgh's economy has moved from steel toward healthcare, education, robotics, and artificial intelligence, with UPMC and Carnegie Mellon University among its major institutions. The city is built around its rivers and hills, so its neighborhoods are distinct and often separated by geography.",
    franchiseActivity: "The South Hills, Cranberry Township, and Robinson Town Centre are major suburban commercial areas. Franchise categories in the market include healthcare-related services and home services."
  },
  {
    slug: "st-louis",
    name: "St. Louis",
    state: "Missouri",
    stateAbbr: "MO",
    population: "295,000",
    metroArea: "St. Louis",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Senior Care"],
    localInsight: "Major employers include BJC HealthCare, Boeing, and Edward Jones, and the metro spans both Missouri and Illinois. Clayton, Chesterfield, and O'Fallon are major suburban commercial centers.",
    franchiseActivity: "Franchise categories in the St. Louis metro include quick-service restaurants and home services. West County and St. Charles County are the suburban areas west of the city."
  },
  {
    slug: "cincinnati",
    name: "Cincinnati",
    state: "Ohio",
    stateAbbr: "OH",
    population: "310,000",
    metroArea: "Cincinnati",
    topIndustries: ["Food & Beverage", "Home Services", "Business Services", "Fitness & Wellness"],
    localInsight: "Cincinnati is home to the headquarters of Procter & Gamble, Kroger, and Fifth Third Bancorp. Over-the-Rhine, next to downtown, has been extensively redeveloped and has an active commercial district. Northern Kentucky communities such as Florence and Fort Thomas extend the metro across the Ohio River.",
    franchiseActivity: "The Cincinnati metro has both national franchise brands and regional concepts. Mason, West Chester, and the I-71 corridor north of the city are major suburban commercial areas."
  },
  {
    slug: "boise",
    name: "Boise",
    state: "Idaho",
    stateAbbr: "ID",
    population: "235,000",
    metroArea: "Boise City",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Automotive Services"],
    localInsight: "Boise is the capital of Idaho and the center of the Treasure Valley. Micron Technology and Albertsons Companies are headquartered in Boise, and outdoor recreation is a large part of life in the Treasure Valley.",
    franchiseActivity: "Franchise categories in Boise include home services and fast-casual dining. Meridian and Eagle are suburbs to the west with newer residential communities."
  },
  {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    population: "635,000",
    metroArea: "Portland-Vancouver-Hillsboro",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Home Services", "Pet Services"],
    localInsight: "Portland is known for independent, locally sourced businesses, and franchise brands compete directly with them. Intel and Nike are major employers in the metro, along with a startup scene. Oregon has no state sales tax, and Vancouver, Washington, across the Columbia River, is part of the same metro.",
    franchiseActivity: "Franchise categories in the Portland metro include wellness, pet care, and specialty food. Beaverton, Lake Oswego, and the Clackamas corridor are major suburban retail areas."
  },
  {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    population: "675,000",
    metroArea: "Boston-Cambridge-Newton",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Education & Tutoring", "Health & Wellness"],
    localInsight: "Boston's economy is built on universities, hospitals, and biotech firms. The metro has a large college student population. The urban core is compact and densely populated. Cambridge, Brookline, and the MetroWest suburbs each have their own commercial centers.",
    franchiseActivity: "Franchise brands in Boston compete with a strong local business culture. Franchise categories in the area include fitness, education, and health services."
  },
  {
    slug: "honolulu",
    name: "Honolulu",
    state: "Hawaii",
    stateAbbr: "HI",
    population: "350,000",
    metroArea: "Urban Honolulu",
    topIndustries: ["Food & Beverage", "Fitness & Wellness", "Beauty & Personal Care", "Home Services"],
    localInsight: "Honolulu's island economy means higher shipping costs and limited commercial real estate. Joint Base Pearl Harbor-Hickam makes the military a major part of the local economy. Tourism supports dining and retail throughout the year.",
    franchiseActivity: "Supply chain logistics are a larger part of operating a franchise in Honolulu than on the mainland. The Ala Moana area and Kapolei on the west side are major commercial areas."
  },
  {
    slug: "scottsdale",
    name: "Scottsdale",
    state: "Arizona",
    stateAbbr: "AZ",
    population: "240,000",
    metroArea: "Phoenix-Mesa-Chandler",
    topIndustries: ["Health & Wellness", "Fitness & Wellness", "Beauty & Personal Care", "Food & Beverage"],
    localInsight: "Scottsdale is a resort city in the Phoenix metro. Its resort and spa culture supports wellness, beauty, and upscale dining businesses. Winter visitors, known locally as snowbirds, add to the population each year.",
    franchiseActivity: "Franchise categories in Scottsdale include wellness, beauty, and boutique fitness. Scottsdale Road and Shea Boulevard are major commercial corridors."
  },
  {
    slug: "plano",
    name: "Plano",
    state: "Texas",
    stateAbbr: "TX",
    population: "290,000",
    metroArea: "Dallas-Fort Worth-Arlington",
    topIndustries: ["Food & Beverage", "Business Services", "Fitness & Wellness", "Education & Tutoring"],
    localInsight: "Plano, in the DFW metroplex, is home to the headquarters of Toyota North America and Frito-Lay, along with a large Liberty Mutual campus. Legacy West and the Shops at Willow Bend are major commercial destinations, and much of the city is residential.",
    franchiseActivity: "Franchise categories in Plano include dining, education, and fitness."
  },
  {
    slug: "richmond",
    name: "Richmond",
    state: "Virginia",
    stateAbbr: "VA",
    population: "230,000",
    metroArea: "Richmond",
    topIndustries: ["Food & Beverage", "Home Services", "Business Services", "Health & Wellness"],
    localInsight: "Richmond's economy blends state government employment, financial services through companies like Capital One and CarMax, and a craft food and beverage scene. The Fan District and Carytown are historic neighborhoods with independent businesses, while Short Pump, Midlothian, and Mechanicsville are major suburban areas. Virginia is a franchise registration state.",
    franchiseActivity: "Franchise categories in the Richmond metro include food and service businesses. The West Broad Street corridor and Chesterfield County are major commercial areas."
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    state: "Utah",
    stateAbbr: "UT",
    population: "200,000",
    metroArea: "Salt Lake City",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Business Services"],
    localInsight: "Salt Lake City anchors the Wasatch Front, and the region's tech sector is known as Silicon Slopes. Qualtrics, Pluralsight, and Domo are among its employers. Outdoor recreation is a large part of local life, with mountains close to the city.",
    franchiseActivity: "Franchise categories in the SLC metro include quick-service restaurants, fitness, and home services. Draper, Lehi, and South Jordan sit along the I-15 corridor south of the city."
  },
  {
    slug: "detroit",
    name: "Detroit",
    state: "Michigan",
    stateAbbr: "MI",
    population: "640,000",
    metroArea: "Detroit-Warren-Dearborn",
    topIndustries: ["Automotive Services", "Food & Beverage", "Home Services", "Business Services"],
    localInsight: "Detroit's economy is anchored by the automotive industry, including Ford and GM, with technology startups in the downtown area. The suburban ring includes Troy and Royal Oak, and Ann Arbor lies to the west.",
    franchiseActivity: "Franchise categories in the Detroit metro include quick-service restaurants, automotive services, and home improvement. Woodward Avenue runs from Detroit through Birmingham to Pontiac and is a historic retail corridor."
  },
  {
    slug: "tulsa",
    name: "Tulsa",
    state: "Oklahoma",
    stateAbbr: "OK",
    population: "410,000",
    metroArea: "Tulsa",
    topIndustries: ["Food & Beverage", "Automotive Services", "Home Services", "Business Services"],
    localInsight: "Tulsa's economy has expanded from oil and gas into aerospace and healthcare, and the Tulsa Remote program pays remote workers to relocate to the city. Brookside and Cherry Street are established commercial districts, and Broken Arrow and Jenks are major suburbs.",
    franchiseActivity: "South Memorial Drive and Broken Arrow are major commercial areas."
  },
  {
    slug: "colorado-springs",
    name: "Colorado Springs",
    state: "Colorado",
    stateAbbr: "CO",
    population: "480,000",
    metroArea: "Colorado Springs",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Automotive Services"],
    localInsight: "Colorado Springs has a large military presence, with Fort Carson, Peterson Space Force Base, and the Air Force Academy. Briargate and the Powers Boulevard corridor are major commercial areas.",
    franchiseActivity: "Franchise categories in Colorado Springs include quick-service restaurants, fitness, and home services."
  },
  {
    slug: "arlington-tx",
    name: "Arlington",
    state: "Texas",
    stateAbbr: "TX",
    population: "395,000",
    metroArea: "Dallas-Fort Worth-Arlington",
    topIndustries: ["Food & Beverage", "Home Services", "Automotive Services", "Fitness & Wellness"],
    localInsight: "Arlington sits at the center of the DFW metroplex and is home to AT&T Stadium, Globe Life Field, and Six Flags Over Texas. The entertainment district draws visitors on game and event days, and residential neighborhoods make up much of the rest of the city. The University of Texas at Arlington adds a large student population.",
    franchiseActivity: "Franchise locations in Arlington serve both event visitors and residents. I-20 and Cooper Street are major commercial corridors in the city."
  },
  {
    slug: "virginia-beach",
    name: "Virginia Beach",
    state: "Virginia",
    stateAbbr: "VA",
    population: "460,000",
    metroArea: "Virginia Beach-Norfolk-Newport News",
    topIndustries: ["Food & Beverage", "Home Services", "Fitness & Wellness", "Senior Care"],
    localInsight: "Virginia Beach is part of the Hampton Roads region, whose economy is driven by the U.S. Navy, shipbuilding at Newport News, and tourism along the oceanfront. Naval Air Station Oceana and Joint Expeditionary Base Little Creek-Fort Story are both in the city. Much of the city is suburban in layout.",
    franchiseActivity: "Town Center and Hilltop are major commercial areas in the city. Franchise categories in the market include home services and quick-service restaurants, serving both residents and seasonal visitors."
  },
  {
    slug: "bakersfield",
    name: "Bakersfield",
    state: "California",
    stateAbbr: "CA",
    population: "400,000",
    metroArea: "Bakersfield",
    topIndustries: ["Food & Beverage", "Automotive Services", "Home Services", "Business Services"],
    localInsight: "Bakersfield's economy is built on agriculture, oil production, and logistics, with the city serving as a key distribution point between Los Angeles and the Central Valley. Much of the city's newer residential development is in its southwest corridor.",
    franchiseActivity: "Rosedale Highway, Stockdale Highway, and Ming Avenue are major retail corridors."
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((city) => city.slug === slug);
}

/** "City, ST" for link text and titles, without repeating the state ("Washington, DC"). */
export function cityLabel(city: CityData): string {
  const name = city.name.endsWith(` ${city.stateAbbr}`) ? city.name.slice(0, -city.stateAbbr.length - 1) : city.name;
  return `${name}, ${city.stateAbbr}`;
}
