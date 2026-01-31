import { 
  Building2, 
  Cpu, 
  ShoppingBag, 
  Zap, 
  Stethoscope, 
  Car, 
  Plane, 
  Landmark,
  LucideIcon
} from "lucide-react";

export interface Industry {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  href: string;
}

export const industries: Industry[] = [
  { 
    icon: Stethoscope, 
    title: "Healthcare", 
    slug: "healthcare",
    description: "Medical devices, pharma, biotech", 
    href: "/industry/healthcare" 
  },
  { 
    icon: Cpu, 
    title: "Technology", 
    slug: "technology",
    description: "Software, hardware, AI/ML", 
    href: "/industry/technology" 
  },
  { 
    icon: ShoppingBag, 
    title: "Consumer Goods", 
    slug: "consumer-goods",
    description: "FMCG, retail, e-commerce", 
    href: "/industry/consumer-goods" 
  },
  { 
    icon: Zap, 
    title: "Energy", 
    slug: "energy",
    description: "Oil, gas, renewables", 
    href: "/industry/energy" 
  },
  { 
    icon: Landmark, 
    title: "Financial Services", 
    slug: "finance",
    description: "Banking, insurance, fintech", 
    href: "/industry/finance" 
  },
  { 
    icon: Car, 
    title: "Automotive", 
    slug: "automotive",
    description: "EVs, components, mobility", 
    href: "/industry/automotive" 
  },
  { 
    icon: Plane, 
    title: "Aerospace & Defense", 
    slug: "aerospace",
    description: "Aviation, space, defense", 
    href: "/industry/aerospace" 
  },
  { 
    icon: Building2, 
    title: "Real Estate", 
    slug: "real-estate",
    description: "Commercial, residential", 
    href: "/industry/real-estate" 
  },
];

export interface IndustryDetail {
  title: string;
  description: string;
  overview: string;
  keyInsights: string[];
  marketSize: string;
  growthRate: string;
  topPlayers: string[];
  reports: {
    title: string;
    slug: string;
    date: string;
    growth: string;
    pages: number;
    price: string;
  }[];
}

export const industryDetails: Record<string, IndustryDetail> = {
  healthcare: {
    title: "Healthcare",
    description: "Medical devices, pharma, biotech",
    overview: "The global healthcare market continues to evolve with technological advancements, aging populations, and increasing focus on preventive care. Our research covers pharmaceutical developments, medical device innovations, biotechnology breakthroughs, and healthcare delivery systems across all major regions.",
    keyInsights: [
      "Digital health solutions driving 25% of new investments",
      "Personalized medicine reshaping treatment paradigms",
      "Telehealth adoption remains elevated post-pandemic",
      "AI diagnostics gaining regulatory approvals globally"
    ],
    marketSize: "$12.2 Trillion",
    growthRate: "+7.8% CAGR",
    topPlayers: ["Johnson & Johnson", "Pfizer", "UnitedHealth Group", "Roche", "Novartis"],
    reports: [
      { title: "Global AI in Healthcare Market Analysis 2024", slug: "ai-healthcare-market-2024", date: "Jan 2024", growth: "+28.6%", pages: 245, price: "$3,500" },
      { title: "Telehealth Services Market Report", slug: "telehealth-services-2024", date: "Dec 2023", growth: "+18.3%", pages: 189, price: "$2,900" },
      { title: "Medical Devices Innovation Outlook", slug: "medical-devices-2024", date: "Nov 2023", growth: "+12.5%", pages: 215, price: "$3,200" },
    ]
  },
  technology: {
    title: "Technology",
    description: "Software, hardware, AI/ML",
    overview: "The technology sector remains the backbone of digital transformation across industries. Our comprehensive research covers software development trends, hardware innovations, artificial intelligence applications, cloud computing, cybersecurity, and emerging technologies like quantum computing and edge systems.",
    keyInsights: [
      "Generative AI investment surged 300% year-over-year",
      "Cloud infrastructure spending exceeds $200B annually",
      "Cybersecurity threats driving enterprise security budgets",
      "Semiconductor supply chains diversifying globally"
    ],
    marketSize: "$5.8 Trillion",
    growthRate: "+9.2% CAGR",
    topPlayers: ["Apple", "Microsoft", "Google", "Amazon", "NVIDIA"],
    reports: [
      { title: "5G Infrastructure Investment Analysis", slug: "5g-infrastructure-investment", date: "Dec 2023", growth: "+24.8%", pages: 312, price: "$4,200" },
      { title: "Cybersecurity Solutions Market 2024", slug: "cybersecurity-solutions-2024", date: "Dec 2023", growth: "+21.7%", pages: 267, price: "$3,600" },
      { title: "Enterprise AI Adoption Report", slug: "enterprise-ai-adoption", date: "Nov 2023", growth: "+35.2%", pages: 198, price: "$3,800" },
    ]
  },
  "consumer-goods": {
    title: "Consumer Goods",
    description: "FMCG, retail, e-commerce",
    overview: "Consumer goods markets are transforming with shifting purchasing behaviors, sustainability demands, and digital commerce growth. Our research spans fast-moving consumer goods, retail innovations, e-commerce trends, and consumer preference analysis across global markets.",
    keyInsights: [
      "Sustainable packaging adoption accelerating rapidly",
      "Direct-to-consumer brands disrupting traditional retail",
      "Private label products gaining market share",
      "Social commerce emerging as key sales channel"
    ],
    marketSize: "$14.5 Trillion",
    growthRate: "+5.4% CAGR",
    topPlayers: ["Procter & Gamble", "Nestlé", "Unilever", "PepsiCo", "Walmart"],
    reports: [
      { title: "Sustainable Packaging Market Outlook", slug: "sustainable-packaging-outlook", date: "Jan 2024", growth: "+19.5%", pages: 156, price: "$2,200" },
      { title: "Plant-Based Food Market Analysis", slug: "plant-based-food-analysis", date: "Nov 2023", growth: "+16.3%", pages: 145, price: "$2,400" },
      { title: "E-commerce Trends Report 2024", slug: "ecommerce-trends-2024", date: "Oct 2023", growth: "+14.8%", pages: 178, price: "$2,800" },
    ]
  },
  energy: {
    title: "Energy",
    description: "Oil, gas, renewables",
    overview: "The energy sector is undergoing its most significant transformation in decades. Our research covers traditional oil and gas markets, renewable energy expansion, energy storage solutions, grid modernization, and the transition to sustainable energy systems globally.",
    keyInsights: [
      "Renewable capacity additions outpacing fossil fuels",
      "Battery storage costs declining 15% annually",
      "Hydrogen economy investments gaining momentum",
      "Energy security concerns reshaping global policies"
    ],
    marketSize: "$8.1 Trillion",
    growthRate: "+6.1% CAGR",
    topPlayers: ["ExxonMobil", "Shell", "Chevron", "NextEra Energy", "TotalEnergies"],
    reports: [
      { title: "Renewable Energy Storage Solutions", slug: "renewable-energy-storage", date: "Dec 2023", growth: "+22.1%", pages: 178, price: "$3,100" },
      { title: "Global Solar Market Analysis", slug: "solar-market-analysis", date: "Nov 2023", growth: "+18.9%", pages: 203, price: "$2,900" },
      { title: "Hydrogen Economy Outlook 2024", slug: "hydrogen-economy-2024", date: "Oct 2023", growth: "+28.4%", pages: 167, price: "$3,400" },
    ]
  },
  finance: {
    title: "Financial Services",
    description: "Banking, insurance, fintech",
    overview: "Financial services continue to evolve with digital banking innovations, fintech disruption, and regulatory changes. Our research covers banking transformation, insurance technology, payment solutions, wealth management trends, and emerging financial technologies.",
    keyInsights: [
      "Embedded finance reshaping customer experiences",
      "Digital-only banks capturing younger demographics",
      "Cryptocurrency regulations taking shape globally",
      "Open banking APIs driving innovation"
    ],
    marketSize: "$28.5 Trillion",
    growthRate: "+6.8% CAGR",
    topPlayers: ["JPMorgan Chase", "Bank of America", "ICBC", "Visa", "Mastercard"],
    reports: [
      { title: "Fintech Payment Solutions Market", slug: "fintech-payment-solutions", date: "Dec 2023", growth: "+26.3%", pages: 234, price: "$3,800" },
      { title: "Digital Banking Transformation Report", slug: "digital-banking-2024", date: "Nov 2023", growth: "+19.7%", pages: 189, price: "$3,200" },
      { title: "InsurTech Market Analysis", slug: "insurtech-market-2024", date: "Oct 2023", growth: "+22.8%", pages: 156, price: "$2,900" },
    ]
  },
  automotive: {
    title: "Automotive",
    description: "EVs, components, mobility",
    overview: "The automotive industry is experiencing rapid transformation with electric vehicle adoption, autonomous driving development, and mobility services innovation. Our research covers EV market dynamics, battery technology, automotive components, and future mobility trends.",
    keyInsights: [
      "EV sales exceeding 20% of new vehicle sales globally",
      "Battery technology costs declining rapidly",
      "Autonomous driving reaching Level 3 deployment",
      "Software-defined vehicles becoming industry standard"
    ],
    marketSize: "$3.8 Trillion",
    growthRate: "+8.4% CAGR",
    topPlayers: ["Toyota", "Volkswagen", "Tesla", "General Motors", "BYD"],
    reports: [
      { title: "Electric Vehicle Battery Technology Report", slug: "ev-battery-technology-2024", date: "Jan 2024", growth: "+31.2%", pages: 198, price: "$2,800" },
      { title: "Autonomous Vehicle Market Analysis", slug: "autonomous-vehicle-2024", date: "Nov 2023", growth: "+25.6%", pages: 223, price: "$3,600" },
      { title: "EV Charging Infrastructure Report", slug: "ev-charging-infrastructure", date: "Oct 2023", growth: "+28.9%", pages: 167, price: "$2,400" },
    ]
  },
  aerospace: {
    title: "Aerospace & Defense",
    description: "Aviation, space, defense",
    overview: "The aerospace and defense sector continues to grow with increasing air travel demand, space commercialization, and defense modernization. Our research covers commercial aviation, space exploration, defense systems, and emerging aerospace technologies.",
    keyInsights: [
      "Commercial space launches increasing 40% annually",
      "Sustainable aviation fuel investment accelerating",
      "Defense spending rising amid geopolitical tensions",
      "Urban air mobility approaching commercial viability"
    ],
    marketSize: "$1.2 Trillion",
    growthRate: "+5.7% CAGR",
    topPlayers: ["Boeing", "Airbus", "Lockheed Martin", "Raytheon", "SpaceX"],
    reports: [
      { title: "Commercial Space Industry Report", slug: "commercial-space-2024", date: "Dec 2023", growth: "+18.4%", pages: 189, price: "$3,200" },
      { title: "Defense Technology Market Analysis", slug: "defense-technology-2024", date: "Nov 2023", growth: "+12.8%", pages: 245, price: "$4,100" },
      { title: "Sustainable Aviation Report", slug: "sustainable-aviation-2024", date: "Oct 2023", growth: "+21.3%", pages: 156, price: "$2,800" },
    ]
  },
  "real-estate": {
    title: "Real Estate",
    description: "Commercial, residential",
    overview: "Real estate markets are evolving with changing work patterns, urbanization trends, and technology integration. Our research covers commercial property dynamics, residential market trends, PropTech innovations, and real estate investment analysis.",
    keyInsights: [
      "Hybrid work reshaping office space demand",
      "Industrial real estate benefiting from e-commerce",
      "PropTech streamlining property transactions",
      "Sustainable buildings commanding premium rents"
    ],
    marketSize: "$4.2 Trillion",
    growthRate: "+4.8% CAGR",
    topPlayers: ["CBRE", "JLL", "Prologis", "Simon Property Group", "AvalonBay"],
    reports: [
      { title: "Commercial Real Estate Outlook 2024", slug: "commercial-real-estate-2024", date: "Dec 2023", growth: "+8.6%", pages: 178, price: "$2,600" },
      { title: "Residential Market Trends Report", slug: "residential-trends-2024", date: "Nov 2023", growth: "+6.2%", pages: 145, price: "$2,200" },
      { title: "PropTech Innovation Analysis", slug: "proptech-innovation-2024", date: "Oct 2023", growth: "+24.5%", pages: 134, price: "$2,400" },
    ]
  },
};

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};

export const getIndustryDetailBySlug = (slug: string): IndustryDetail | undefined => {
  return industryDetails[slug];
};
