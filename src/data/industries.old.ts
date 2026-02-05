import {
  Building2,
  Cpu,
  ShoppingBag,
  Zap,
  Stethoscope,
  Car,
  Plane,
  Landmark,
  UtensilsCrossed,
  FlaskConical,
  Factory,
  Wrench,
  Pill,
  Hospital,
  Syringe,
  Shield,
  CircuitBoard,
  Wheat,
  Package,
  Home,
  LucideIcon,
} from "lucide-react";

/* =====================================================
   TYPES
===================================================== */
export interface Industry {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  href: string;
}

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

/* =====================================================
   INDUSTRY LIST (NAV / GRID)
===================================================== */
export const industries: Industry[] = [
  { icon: Car, title: "Automobile & Transportation", slug: "automobile-transportation", description: "Vehicles, logistics, mobility solutions", href: "/industry/automobile-transportation" },
  { icon: ShoppingBag, title: "Consumer Products", slug: "consumer-products", description: "Retail, lifestyle, consumer goods", href: "/industry/consumer-products" },
  { icon: UtensilsCrossed, title: "Food, Beverage & Nutrition", slug: "food-beverage-nutrition", description: "Food processing, beverages, nutrition", href: "/industry/food-beverage-nutrition" },
  { icon: FlaskConical, title: "Chemicals & Materials", slug: "chemicals-materials", description: "Specialty chemicals, raw materials", href: "/industry/chemicals-materials" },
  { icon: Cpu, title: "Technology", slug: "technology", description: "Software, hardware, digital solutions", href: "/industry/technology" },
  { icon: Factory, title: "Industrial Automation", slug: "industrial-automation", description: "Manufacturing, robotics, automation", href: "/industry/industrial-automation" },
  { icon: Wrench, title: "Services & Utilities", slug: "services-utilities", description: "Business services, utilities", href: "/industry/services-utilities" },
  { icon: Pill, title: "Pharmaceutical", slug: "pharmaceutical", description: "Drugs, therapeutics, life sciences", href: "/industry/pharmaceutical" },
  { icon: Hospital, title: "Healthcare IT & Services", slug: "healthcare-it-services", description: "Health tech, medical services", href: "/industry/healthcare-it-services" },
  { icon: Syringe, title: "Medical Devices & Consumables", slug: "medical-devices-consumables", description: "Consumables, disposables, devices", href: "/industry/medical-devices-consumables" },
  { icon: Stethoscope, title: "Medical Devices", slug: "medical-devices", description: "Diagnostic and therapeutic devices", href: "/industry/medical-devices" },
  { icon: Shield, title: "IT Security & Software", slug: "it-security-software", description: "Cybersecurity, enterprise software", href: "/industry/it-security-software" },
  { icon: CircuitBoard, title: "Electronics & Semiconductors", slug: "electronics-semiconductor", description: "Chips, electronic components", href: "/industry/electronics-semiconductor" },
  { icon: Wheat, title: "Agriculture", slug: "agriculture", description: "Farming, agritech, crop science", href: "/industry/agriculture" },
  { icon: Package, title: "Packaging & Transport", slug: "packaging-transport", description: "Packaging, logistics solutions", href: "/industry/packaging-transport" },
  { icon: Zap, title: "Energy & Power", slug: "energy-power", description: "Renewables, oil & gas, power generation", href: "/industry/energy-power" },
  { icon: Building2, title: "Construction & Real Estate", slug: "construction-real-estate", description: "Infrastructure, real estate", href: "/industry/construction-real-estate" },
  { icon: Home, title: "Daily Necessities", slug: "daily-necessities", description: "Household essentials", href: "/industry/daily-necessities" },
  { icon: Plane, title: "Aerospace & Defense", slug: "aerospace-defense", description: "Aviation, space, defense", href: "/industry/aerospace-defense" },
  { icon: Landmark, title: "Financial Services", slug: "financial-services", description: "Banking, insurance, fintech", href: "/industry/financial-services" },
];

/* =====================================================
   INDUSTRY DETAILS (ALL INDUSTRIES – NO MISSING)
===================================================== */
export const industryDetails: Record<string, IndustryDetail> = {
  "automobile-transportation": {
    title: "Automobile & Transportation",
    description: "Vehicles, logistics, mobility solutions",
    overview: "This industry is being reshaped by electric vehicles, smart logistics, autonomous driving, and shared mobility models across global markets.",
    keyInsights: [
      "EV adoption accelerating worldwide",
      "Autonomous mobility moving toward commercial use",
      "Logistics digitization improving efficiency",
      "Urban mobility solutions expanding rapidly",
    ],
    marketSize: "$4.5 Trillion",
    growthRate: "+8.1% CAGR",
    topPlayers: ["Toyota", "Volkswagen", "Tesla", "BYD", "Daimler"],
    reports: [
      { title: "Global Electric Vehicle Market Outlook 2024", slug: "electric-vehicle-market-2024", date: "Jan 2024", growth: "+21.4%", pages: 260, price: "$3,600" },
      { title: "Autonomous Vehicle Technology Report", slug: "autonomous-vehicles-technology", date: "Dec 2023", growth: "+19.2%", pages: 230, price: "$3,200" },
      { title: "Smart Logistics & Transportation Market", slug: "smart-logistics-transportation", date: "Nov 2023", growth: "+14.7%", pages: 210, price: "$2,900" },
    ],
  },

  "consumer-products": {
    title: "Consumer Products",
    description: "Retail, lifestyle, consumer goods",
    overview: "Consumer product markets are influenced by sustainability, digital commerce, and evolving consumer preferences.",
    keyInsights: [
      "Private labels gaining traction",
      "Eco-friendly products influencing purchases",
      "Omnichannel retail becoming standard",
    ],
    marketSize: "$15 Trillion",
    growthRate: "+5.2% CAGR",
    topPlayers: ["Procter & Gamble", "Unilever", "Nestlé", "PepsiCo"],
    reports: [
      { title: "Global Consumer Goods Market Trends 2024", slug: "consumer-goods-market-2024", date: "Jan 2024", growth: "+6.1%", pages: 220, price: "$3,100" },
      { title: "Sustainable Consumer Products Report", slug: "sustainable-consumer-products", date: "Dec 2023", growth: "+9.4%", pages: 195, price: "$2,800" },
      { title: "Omnichannel Retail Strategy Analysis", slug: "omnichannel-retail-analysis", date: "Oct 2023", growth: "+7.8%", pages: 180, price: "$2,600" },
    ],
  },

  "food-beverage-nutrition": {
    title: "Food, Beverage & Nutrition",
    description: "Food processing, beverages, nutrition",
    overview: "Driven by health awareness, plant-based diets, and functional foods, this industry continues steady global expansion.",
    keyInsights: [
      "Plant-based food demand rising",
      "Functional nutrition growing fast",
      "Cold-chain logistics improving quality",
    ],
    marketSize: "$8.4 Trillion",
    growthRate: "+6.0% CAGR",
    topPlayers: ["Nestlé", "Danone", "PepsiCo", "Coca-Cola"],
    reports: [
      { title: "Global Functional Foods Market Analysis", slug: "functional-foods-market", date: "Jan 2024", growth: "+11.9%", pages: 240, price: "$3,300" },
      { title: "Plant-Based Food Industry Outlook", slug: "plant-based-food-industry", date: "Dec 2023", growth: "+15.6%", pages: 205, price: "$3,000" },
      { title: "Cold Chain in Food Logistics Report", slug: "cold-chain-food-logistics", date: "Oct 2023", growth: "+8.4%", pages: 190, price: "$2,700" },
    ],
  },

  "chemicals-materials": {
    title: "Chemicals & Materials",
    description: "Specialty chemicals, raw materials",
    overview: "The market is shifting toward specialty chemicals, sustainable materials, and advanced composites.",
    keyInsights: [
      "Green chemistry adoption increasing",
      "Battery materials driving demand",
      "Specialty chemicals outperforming commodities",
    ],
    marketSize: "$5.7 Trillion",
    growthRate: "+4.9% CAGR",
    topPlayers: ["BASF", "Dow", "SABIC", "LyondellBasell"],
    reports: [
      { title: "Global Specialty Chemicals Market Report", slug: "specialty-chemicals-market", date: "Jan 2024", growth: "+6.8%", pages: 230, price: "$3,200" },
      { title: "Sustainable Materials Industry Analysis", slug: "sustainable-materials-industry", date: "Dec 2023", growth: "+10.3%", pages: 210, price: "$3,000" },
      { title: "Battery Materials Market Outlook", slug: "battery-materials-market", date: "Nov 2023", growth: "+18.1%", pages: 225, price: "$3,400" },
    ],
  },

  "technology": {
    title: "Technology",
    description: "Software, hardware, digital solutions",
    overview: "Technology underpins digital transformation across industries, led by AI, cloud computing, and cybersecurity.",
    keyInsights: [
      "AI investment surging globally",
      "Cloud adoption expanding rapidly",
      "Cybersecurity spending increasing",
    ],
    marketSize: "$6 Trillion",
    growthRate: "+9.5% CAGR",
    topPlayers: ["Microsoft", "Apple", "Google", "Amazon", "NVIDIA"],
    reports: [
      { title: "Global Artificial Intelligence Market Forecast", slug: "ai-market-forecast", date: "Jan 2024", growth: "+29.5%", pages: 280, price: "$3,900" },
      { title: "Cloud Computing Market Trends", slug: "cloud-computing-market", date: "Dec 2023", growth: "+17.2%", pages: 245, price: "$3,300" },
      { title: "Cybersecurity Technology Outlook", slug: "cybersecurity-technology-outlook", date: "Nov 2023", growth: "+14.9%", pages: 220, price: "$3,100" },
    ],
  },

  "industrial-automation": {
    title: "Industrial Automation",
    description: "Manufacturing, robotics, automation",
    overview: "Factories are adopting smart automation, robotics, and Industry 4.0 solutions to boost productivity.",
    keyInsights: [
      "Smart factories gaining adoption",
      "Robotics deployment increasing",
      "AI-driven process optimization",
    ],
    marketSize: "$320 Billion",
    growthRate: "+10.8% CAGR",
    topPlayers: ["Siemens", "ABB", "Rockwell Automation", "Schneider Electric"],
    reports: [
      { title: "Industry 4.0 Automation Market Report", slug: "industry-4-automation", date: "Jan 2024", growth: "+16.7%", pages: 210, price: "$3,000" },
      { title: "Industrial Robotics Market Analysis", slug: "industrial-robotics-market", date: "Dec 2023", growth: "+18.9%", pages: 225, price: "$3,400" },
      { title: "Smart Manufacturing Technologies", slug: "smart-manufacturing-technologies", date: "Oct 2023", growth: "+14.1%", pages: 200, price: "$2,900" },
    ],
  },

  "services-utilities": {
    title: "Services & Utilities",
    description: "Business services, utilities",
    overview: "Utilities and service providers are modernizing infrastructure through digital platforms and smart systems.",
    keyInsights: [
      "Smart utility grids expanding",
      "Outsourced services growing",
      "Sustainability initiatives rising",
    ],
    marketSize: "$6.2 Trillion",
    growthRate: "+4.5% CAGR",
    topPlayers: ["Veolia", "ENGIE", "E.ON", "Suez"],
    reports: [
      { title: "Smart Utilities Market Outlook", slug: "smart-utilities-market", date: "Jan 2024", growth: "+9.6%", pages: 215, price: "$3,000" },
      { title: "Global Business Services Industry Report", slug: "business-services-industry", date: "Dec 2023", growth: "+6.2%", pages: 195, price: "$2,700" },
      { title: "Digital Transformation in Utilities", slug: "digital-transformation-utilities", date: "Oct 2023", growth: "+8.4%", pages: 185, price: "$2,600" },
    ],
  },

  "pharmaceutical": {
    title: "Pharmaceutical",
    description: "Drugs, therapeutics, life sciences",
    overview: "Pharma innovation is driven by biologics, personalized medicine, and accelerated drug development.",
    keyInsights: [
      "Biologics dominating pipelines",
      "AI accelerating drug discovery",
      "Emerging markets driving growth",
    ],
    marketSize: "$1.7 Trillion",
    growthRate: "+6.4% CAGR",
    topPlayers: ["Pfizer", "Roche", "Novartis", "Johnson & Johnson"],
    reports: [
      { title: "Global Pharmaceutical Market Forecast", slug: "pharmaceutical-market-forecast", date: "Jan 2024", growth: "+7.9%", pages: 260, price: "$3,800" },
      { title: "Biologics & Biosimilars Market Report", slug: "biologics-biosimilars-market", date: "Dec 2023", growth: "+11.5%", pages: 235, price: "$3,400" },
      { title: "AI in Drug Discovery Analysis", slug: "ai-drug-discovery", date: "Nov 2023", growth: "+22.1%", pages: 220, price: "$3,100" },
    ],
  },

  "healthcare-it-services": {
    title: "Healthcare IT & Services",
    description: "Health tech, medical services",
    overview: "Digital health platforms, telemedicine, and healthcare analytics are transforming care delivery.",
    keyInsights: [
      "Telehealth adoption remains high",
      "Electronic health records expanding",
      "AI diagnostics gaining approvals",
    ],
    marketSize: "$420 Billion",
    growthRate: "+12.2% CAGR",
    topPlayers: ["Epic Systems", "Cerner", "Philips", "GE HealthCare"],
    reports: [
      { title: "Global Healthcare IT Market Analysis", slug: "healthcare-it-market", date: "Jan 2024", growth: "+15.8%", pages: 240, price: "$3,300" },
      { title: "Telemedicine Platforms Market Report", slug: "telemedicine-platforms", date: "Dec 2023", growth: "+19.4%", pages: 210, price: "$3,000" },
      { title: "Healthcare Data Analytics Outlook", slug: "healthcare-data-analytics", date: "Oct 2023", growth: "+13.6%", pages: 195, price: "$2,800" },
    ],
  },

  "medical-devices-consumables": {
    title: "Medical Devices & Consumables",
    description: "Consumables, disposables, devices",
    overview: "Rising healthcare demand and aging populations are driving consumables and disposable device growth.",
    keyInsights: [
      "Single-use devices demand rising",
      "Infection control boosting sales",
      "Hospital procurement expanding",
    ],
    marketSize: "$520 Billion",
    growthRate: "+7.1% CAGR",
    topPlayers: ["Medtronic", "3M", "Becton Dickinson", "Cardinal Health"],
    reports: [
      { title: "Medical Consumables Market Analysis", slug: "medical-consumables-market", date: "Jan 2024", growth: "+8.9%", pages: 215, price: "$3,000" },
      { title: "Single-Use Medical Devices Outlook", slug: "single-use-medical-devices", date: "Dec 2023", growth: "+10.7%", pages: 205, price: "$2,900" },
      { title: "Hospital Supplies Procurement Trends", slug: "hospital-supplies-procurement", date: "Oct 2023", growth: "+6.5%", pages: 180, price: "$2,600" },
    ],
  },

  "medical-devices": {
    title: "Medical Devices",
    description: "Diagnostic and therapeutic devices",
    overview: "Medical devices innovation is fueled by imaging, diagnostics, and minimally invasive procedures.",
    keyInsights: [
      "AI-powered diagnostics expanding",
      "Home healthcare devices growing",
      "Regulatory approvals increasing",
    ],
    marketSize: "$610 Billion",
    growthRate: "+6.9% CAGR",
    topPlayers: ["Medtronic", "GE HealthCare", "Siemens Healthineers"],
    reports: [
      { title: "Global Medical Devices Market Forecast", slug: "medical-devices-market-forecast", date: "Jan 2024", growth: "+7.4%", pages: 255, price: "$3,500" },
      { title: "Diagnostic Imaging Equipment Report", slug: "diagnostic-imaging-equipment", date: "Dec 2023", growth: "+9.1%", pages: 230, price: "$3,200" },
      { title: "Minimally Invasive Surgery Devices", slug: "minimally-invasive-devices", date: "Oct 2023", growth: "+11.3%", pages: 210, price: "$3,000" },
    ],
  },

  "it-security-software": {
    title: "IT Security & Software",
    description: "Cybersecurity, enterprise software",
    overview: "Cyber threats are driving sustained demand for advanced security software and enterprise platforms.",
    keyInsights: [
      "Zero-trust adoption increasing",
      "Cloud security spending rising",
      "AI-driven threat detection",
    ],
    marketSize: "$290 Billion",
    growthRate: "+11.5% CAGR",
    topPlayers: ["Palo Alto Networks", "Fortinet", "CrowdStrike", "Cisco"],
    reports: [
      { title: "Global Cybersecurity Software Market", slug: "cybersecurity-software-market", date: "Jan 2024", growth: "+16.8%", pages: 245, price: "$3,400" },
      { title: "Zero Trust Security Frameworks Report", slug: "zero-trust-security", date: "Dec 2023", growth: "+21.5%", pages: 215, price: "$3,100" },
      { title: "Enterprise Software Market Outlook", slug: "enterprise-software-market", date: "Oct 2023", growth: "+12.9%", pages: 200, price: "$2,900" },
    ],
  },

  "electronics-semiconductor": {
    title: "Electronics & Semiconductors",
    description: "Chips, electronic components",
    overview: "Semiconductors power modern electronics, AI systems, and automotive technologies.",
    keyInsights: [
      "AI chips driving demand",
      "Supply chain diversification ongoing",
      "Advanced nodes gaining investment",
    ],
    marketSize: "$650 Billion",
    growthRate: "+9.0% CAGR",
    topPlayers: ["TSMC", "Intel", "Samsung", "Qualcomm"],
    reports: [
      { title: "Global Semiconductor Market Analysis", slug: "semiconductor-market-analysis", date: "Jan 2024", growth: "+13.6%", pages: 260, price: "$3,700" },
      { title: "AI Chipsets Industry Outlook", slug: "ai-chipsets-industry", date: "Dec 2023", growth: "+24.8%", pages: 235, price: "$3,500" },
      { title: "Electronics Supply Chain Trends", slug: "electronics-supply-chain", date: "Oct 2023", growth: "+8.7%", pages: 200, price: "$2,800" },
    ],
  },

  "agriculture": {
    title: "Agriculture",
    description: "Farming, agritech, crop science",
    overview: "Agriculture is adopting precision farming, smart irrigation, and biotech solutions.",
    keyInsights: [
      "Agri-tech adoption increasing",
      "Sustainable farming gaining focus",
      "Yield optimization through data",
    ],
    marketSize: "$4.1 Trillion",
    growthRate: "+5.3% CAGR",
    topPlayers: ["John Deere", "Bayer", "Syngenta", "Corteva"],
    reports: [
      { title: "Precision Agriculture Market Report", slug: "precision-agriculture-market", date: "Jan 2024", growth: "+12.4%", pages: 225, price: "$3,100" },
      { title: "AgriTech Innovations Outlook", slug: "agritech-innovations", date: "Dec 2023", growth: "+15.2%", pages: 210, price: "$2,900" },
      { title: "Crop Protection Chemicals Market", slug: "crop-protection-chemicals", date: "Oct 2023", growth: "+6.8%", pages: 195, price: "$2,700" },
    ],
  },

  "packaging-transport": {
    title: "Packaging & Transport",
    description: "Packaging, logistics solutions",
    overview: "Growth is driven by e-commerce, sustainable packaging, and global trade flows.",
    keyInsights: [
      "Eco-friendly packaging demand rising",
      "E-commerce logistics expanding",
      "Automation improving warehousing",
    ],
    marketSize: "$1.1 Trillion",
    growthRate: "+6.6% CAGR",
    topPlayers: ["Amcor", "International Paper", "DS Smith"],
    reports: [
      { title: "Sustainable Packaging Market Report", slug: "sustainable-packaging-market", date: "Jan 2024", growth: "+11.7%", pages: 220, price: "$3,000" },
      { title: "E-commerce Logistics Industry Analysis", slug: "ecommerce-logistics-industry", date: "Dec 2023", growth: "+14.3%", pages: 205, price: "$2,900" },
      { title: "Warehouse Automation Technologies", slug: "warehouse-automation-technologies", date: "Oct 2023", growth: "+13.1%", pages: 195, price: "$2,800" },
    ],
  },

  "energy-power": {
    title: "Energy & Power",
    description: "Renewables, oil & gas, power generation",
    overview: "Energy markets are transitioning toward renewables while balancing global energy security.",
    keyInsights: [
      "Renewables outpacing fossil fuels",
      "Energy storage costs falling",
      "Hydrogen investments growing",
    ],
    marketSize: "$9 Trillion",
    growthRate: "+6.3% CAGR",
    topPlayers: ["Shell", "ExxonMobil", "NextEra Energy", "TotalEnergies"],
    reports: [
      { title: "Global Renewable Energy Market Outlook", slug: "renewable-energy-market", date: "Jan 2024", growth: "+14.9%", pages: 275, price: "$3,800" },
      { title: "Energy Storage Systems Market", slug: "energy-storage-systems", date: "Dec 2023", growth: "+18.6%", pages: 240, price: "$3,400" },
      { title: "Hydrogen Energy Industry Analysis", slug: "hydrogen-energy-industry", date: "Oct 2023", growth: "+21.2%", pages: 230, price: "$3,300" },
    ],
  },

  "construction-real-estate": {
    title: "Construction & Real Estate",
    description: "Infrastructure, real estate",
    overview: "Urbanization, smart cities, and sustainable buildings are shaping construction markets.",
    keyInsights: [
      "Green buildings gaining demand",
      "Infrastructure spending increasing",
      "PropTech adoption rising",
    ],
    marketSize: "$13 Trillion",
    growthRate: "+4.7% CAGR",
    topPlayers: ["Vinci", "Larsen & Toubro", "CBRE", "Skanska"],
    reports: [
      { title: "Global Construction Market Forecast", slug: "construction-market-forecast", date: "Jan 2024", growth: "+5.6%", pages: 260, price: "$3,500" },
      { title: "Smart Cities Infrastructure Report", slug: "smart-cities-infrastructure", date: "Dec 2023", growth: "+9.8%", pages: 230, price: "$3,100" },
      { title: "PropTech Market Trends Analysis", slug: "proptech-market-trends", date: "Oct 2023", growth: "+12.5%", pages: 205, price: "$2,900" },
    ],
  },

  "daily-necessities": {
    title: "Daily Necessities",
    description: "Household essentials",
    overview: "Daily-use products remain resilient with steady demand across economic cycles.",
    keyInsights: [
      "Private labels expanding",
      "Price sensitivity increasing",
      "Supply chain efficiency critical",
    ],
    marketSize: "$3.2 Trillion",
    growthRate: "+4.1% CAGR",
    topPlayers: ["Unilever", "P&G", "Reckitt"],
    reports: [
      { title: "Household Essentials Market Analysis", slug: "household-essentials-market", date: "Jan 2024", growth: "+4.9%", pages: 210, price: "$2,800" },
      { title: "Private Label Consumer Goods Report", slug: "private-label-consumer-goods", date: "Dec 2023", growth: "+7.3%", pages: 195, price: "$2,600" },
      { title: "FMCG Supply Chain Optimization", slug: "fmcg-supply-chain", date: "Oct 2023", growth: "+6.1%", pages: 180, price: "$2,400" },
    ],
  },

  "aerospace-defense": {
    title: "Aerospace & Defense",
    description: "Aviation, space, defense",
    overview: "Commercial aviation recovery, space commercialization, and defense modernization drive growth.",
    keyInsights: [
      "Space launches increasing",
      "Defense budgets rising",
      "Sustainable aviation fuel adoption",
    ],
    marketSize: "$1.3 Trillion",
    growthRate: "+5.8% CAGR",
    topPlayers: ["Boeing", "Airbus", "Lockheed Martin", "SpaceX"],
    reports: [
      { title: "Global Aerospace Market Outlook", slug: "aerospace-market-outlook", date: "Jan 2024", growth: "+6.7%", pages: 270, price: "$3,700" },
      { title: "Defense Modernization Programs Report", slug: "defense-modernization-programs", date: "Dec 2023", growth: "+8.9%", pages: 245, price: "$3,400" },
      { title: "Commercial Space Industry Analysis", slug: "commercial-space-industry", date: "Oct 2023", growth: "+19.5%", pages: 230, price: "$3,300" },
    ],
  },

  "financial-services": {
    title: "Financial Services",
    description: "Banking, insurance, fintech",
    overview: "Digital banking, fintech, and embedded finance are transforming financial ecosystems.",
    keyInsights: [
      "Digital payments dominating",
      "Fintech adoption accelerating",
      "Open banking expanding",
    ],
    marketSize: "$29 Trillion",
    growthRate: "+6.7% CAGR",
    topPlayers: ["JPMorgan Chase", "ICBC", "Visa", "Mastercard"],
    reports: [
      { title: "Global FinTech Market Analysis", slug: "fintech-market-analysis", date: "Jan 2024", growth: "+20.4%", pages: 260, price: "$3,600" },
      { title: "Digital Banking Transformation Report", slug: "digital-banking-transformation", date: "Dec 2023", growth: "+14.8%", pages: 230, price: "$3,200" },
      { title: "Open Banking Ecosystem Outlook", slug: "open-banking-ecosystem", date: "Oct 2023", growth: "+16.2%", pages: 215, price: "$3,000" },
    ],
  },
};


/* =====================================================
   HELPERS
===================================================== */
export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((industry) => industry.slug === slug);

export const getIndustryDetailBySlug = (slug: string): IndustryDetail | undefined =>
  industryDetails[slug];
