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
   Beaker,
   Microscope,
   Activity,
   HeartPulse,
 } from "lucide-react";
 
 /* =====================================================
    TYPES (API-FRIENDLY STRUCTURE)
 ===================================================== */
 
 // Report interface
 export interface Report {
   title: string;
   slug: string;
   date: string;
   growth: string;
   pages: number;
   price: string;
 }
 
 // Sub-industry interface (matches sub_industries_master table)
 export interface SubIndustry {
   id: string;
   industryId: string;
   icon: LucideIcon;
   name: string;
   rephrasedName: string;
   path: string;
   initial: string;
   seo: string;
   image: string;
   color: string;
   description: string;
   marketSize: string;
   growthRate: string;
   topPlayers: string[];
   marketSizeValue: number;
   growthRateValue: number;
   overview: string;
   priority: number;
   isActive: boolean;
   createdBy: string;
   reports: Report[];
 }
 
 // Main industry interface (matches industries_master table)
 export interface Industry {
   id: string;
   icon: LucideIcon;
   name: string;
   rephrasedName: string;
   path: string;
   initial: string;
   seo: string;
   image: string;
   color: string;
   description: string;
   marketSize: string;
   growthRate: string;
   topPlayers: string[];
   marketSizeValue: number;
   growthRateValue: number;
   overview: string;
   keyInsights: string[];
   priority: number;
   isActive: boolean;
   createdAt: string;
   createdBy: string;
   subIndustries: SubIndustry[];
   reports: Report[];
 }
 
 // Legacy interface for backward compatibility
 export interface IndustryDetail {
   title: string;
   description: string;
   overview: string;
   keyInsights: string[];
   marketSize: string;
   growthRate: string;
   topPlayers: string[];
   reports: Report[];
 }
 
 // Legacy nav interface for backward compatibility
 export interface LegacyIndustryNav {
   icon: LucideIcon;
   title: string;
   slug: string;
   description: string;
   href: string;
 }
 
 /* =====================================================
    HIERARCHICAL INDUSTRY DATA (API-FRIENDLY STRUCTURE)
 ===================================================== */
 export const industriesData: Industry[] = [
   // 1. Healthcare
   {
     id: "healthcare",
     icon: Stethoscope,
     name: "Healthcare",
     rephrasedName: "Healthcare Industry",
     path: "healthcare",
     initial: "HC",
     seo: "Healthcare market research reports and industry analysis",
     image: "/placeholder.svg",
     color: "#E91E63",
     description: "Pharmaceuticals, medical devices, biotechnology, and healthcare services",
     marketSize: "$8.5 Trillion",
     growthRate: "+8.2% CAGR",
     topPlayers: ["Pfizer", "Roche", "Johnson & Johnson", "Novartis", "Medtronic"],
     marketSizeValue: 8500,
     growthRateValue: 8.2,
     overview: "The global healthcare industry encompasses pharmaceuticals, biotechnology, medical devices, diagnostics, digital health, and healthcare services.",
     keyInsights: [
       "Biologics dominating drug pipelines",
       "AI accelerating diagnostics and drug discovery",
       "Telehealth adoption remains elevated",
       "Value-based care models expanding",
     ],
     priority: 1,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [
       {
         id: "pharmaceuticals",
         industryId: "healthcare",
         icon: Pill,
         name: "Pharmaceuticals",
         rephrasedName: "Pharmaceutical Industry",
         path: "pharmaceuticals",
         initial: "PH",
         seo: "Pharmaceutical market research and drug industry analysis",
         image: "/placeholder.svg",
         color: "#9C27B0",
         description: "Drugs, therapeutics, biologics, and life sciences",
         marketSize: "$1.7 Trillion",
         growthRate: "+6.4% CAGR",
         topPlayers: ["Pfizer", "Roche", "Novartis", "Johnson & Johnson"],
         marketSizeValue: 1700,
         growthRateValue: 6.4,
         overview: "Pharma innovation is driven by biologics, personalized medicine, and accelerated drug development.",
         priority: 1,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "Global Pharmaceutical Market Forecast", slug: "pharmaceutical-market-forecast", date: "Jan 2024", growth: "+7.9%", pages: 260, price: "$3,800" },
           { title: "Biologics & Biosimilars Market Report", slug: "biologics-biosimilars-market", date: "Dec 2023", growth: "+11.5%", pages: 235, price: "$3,400" },
           { title: "AI in Drug Discovery Analysis", slug: "ai-drug-discovery", date: "Nov 2023", growth: "+22.1%", pages: 220, price: "$3,100" },
         ],
       },
       {
         id: "medical-devices",
         industryId: "healthcare",
         icon: Stethoscope,
         name: "Medical Devices",
         rephrasedName: "Medical Devices Industry",
         path: "medical-devices",
         initial: "MD",
         seo: "Medical devices market research and equipment analysis",
         image: "/placeholder.svg",
         color: "#2196F3",
         description: "Diagnostic and therapeutic equipment",
         marketSize: "$610 Billion",
         growthRate: "+6.9% CAGR",
         topPlayers: ["Medtronic", "GE HealthCare", "Siemens Healthineers"],
         marketSizeValue: 610,
         growthRateValue: 6.9,
         overview: "Medical devices innovation is fueled by imaging, diagnostics, and minimally invasive procedures.",
         priority: 2,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "Global Medical Devices Market Forecast", slug: "medical-devices-market-forecast", date: "Jan 2024", growth: "+7.4%", pages: 255, price: "$3,500" },
           { title: "Diagnostic Imaging Equipment Report", slug: "diagnostic-imaging-equipment", date: "Dec 2023", growth: "+9.1%", pages: 230, price: "$3,200" },
           { title: "Minimally Invasive Surgery Devices", slug: "minimally-invasive-devices", date: "Oct 2023", growth: "+11.3%", pages: 210, price: "$3,000" },
         ],
       },
       {
         id: "biotechnology",
         industryId: "healthcare",
         icon: Beaker,
         name: "Biotechnology",
         rephrasedName: "Biotechnology Industry",
         path: "biotechnology",
         initial: "BT",
         seo: "Biotechnology market research and biotech industry analysis",
         image: "/placeholder.svg",
         color: "#4CAF50",
         description: "Gene therapy, cell therapy, and biopharmaceuticals",
         marketSize: "$750 Billion",
         growthRate: "+12.5% CAGR",
         topPlayers: ["Amgen", "Gilead", "Regeneron", "Biogen"],
         marketSizeValue: 750,
         growthRateValue: 12.5,
         overview: "Biotechnology is revolutionizing medicine through gene therapy, CRISPR, and personalized treatments.",
         priority: 3,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "Global Biotechnology Market Outlook", slug: "biotechnology-market-outlook", date: "Jan 2024", growth: "+14.2%", pages: 280, price: "$3,900" },
           { title: "Gene Therapy Market Analysis", slug: "gene-therapy-market", date: "Dec 2023", growth: "+18.6%", pages: 245, price: "$3,600" },
           { title: "Cell & Gene Therapy Manufacturing", slug: "cell-gene-therapy-manufacturing", date: "Nov 2023", growth: "+21.3%", pages: 225, price: "$3,400" },
         ],
       },
       {
         id: "diagnostics",
         industryId: "healthcare",
         icon: Microscope,
         name: "Diagnostics",
         rephrasedName: "Diagnostics Industry",
         path: "diagnostics",
         initial: "DG",
         seo: "Diagnostics market research and testing industry analysis",
         image: "/placeholder.svg",
         color: "#00BCD4",
         description: "In-vitro diagnostics, molecular testing, and imaging",
         marketSize: "$95 Billion",
         growthRate: "+7.8% CAGR",
         topPlayers: ["Roche Diagnostics", "Abbott", "Danaher", "Siemens Healthineers"],
         marketSizeValue: 95,
         growthRateValue: 7.8,
         overview: "Diagnostics industry is evolving with point-of-care testing, AI-powered analysis, and molecular diagnostics.",
         priority: 4,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "In-Vitro Diagnostics Market Report", slug: "ivd-market-report", date: "Jan 2024", growth: "+8.4%", pages: 220, price: "$3,200" },
           { title: "Molecular Diagnostics Outlook", slug: "molecular-diagnostics-outlook", date: "Dec 2023", growth: "+11.2%", pages: 205, price: "$3,000" },
           { title: "Point-of-Care Testing Market", slug: "poct-market", date: "Oct 2023", growth: "+9.7%", pages: 190, price: "$2,800" },
         ],
       },
       {
         id: "digital-health",
         industryId: "healthcare",
         icon: Activity,
         name: "Digital Health",
         rephrasedName: "Digital Health Industry",
         path: "digital-health",
         initial: "DH",
         seo: "Digital health market research and health tech analysis",
         image: "/placeholder.svg",
         color: "#3F51B5",
         description: "Telehealth, health apps, and connected devices",
         marketSize: "$420 Billion",
         growthRate: "+12.2% CAGR",
         topPlayers: ["Epic Systems", "Cerner", "Philips", "GE HealthCare"],
         marketSizeValue: 420,
         growthRateValue: 12.2,
         overview: "Digital health platforms, telemedicine, and healthcare analytics are transforming care delivery.",
         priority: 5,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "Global Healthcare IT Market Analysis", slug: "healthcare-it-market", date: "Jan 2024", growth: "+15.8%", pages: 240, price: "$3,300" },
           { title: "Telemedicine Platforms Market Report", slug: "telemedicine-platforms", date: "Dec 2023", growth: "+19.4%", pages: 210, price: "$3,000" },
           { title: "Healthcare Data Analytics Outlook", slug: "healthcare-data-analytics", date: "Oct 2023", growth: "+13.6%", pages: 195, price: "$2,800" },
         ],
       },
       {
         id: "hospitals-healthcare-services",
         industryId: "healthcare",
         icon: Hospital,
         name: "Hospitals & Healthcare Services",
         rephrasedName: "Healthcare Services Industry",
         path: "hospitals-healthcare-services",
         initial: "HS",
         seo: "Hospital and healthcare services market research",
         image: "/placeholder.svg",
         color: "#F44336",
         description: "Hospital systems, outpatient care, and health services",
         marketSize: "$2.5 Trillion",
         growthRate: "+5.8% CAGR",
         topPlayers: ["HCA Healthcare", "UnitedHealth", "CVS Health", "Kaiser Permanente"],
         marketSizeValue: 2500,
         growthRateValue: 5.8,
         overview: "Healthcare services are evolving with value-based care, ambulatory surgery centers, and integrated delivery networks.",
         priority: 6,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "Global Healthcare Services Market", slug: "healthcare-services-market", date: "Jan 2024", growth: "+6.2%", pages: 250, price: "$3,400" },
           { title: "Ambulatory Surgical Centers Report", slug: "asc-market-report", date: "Dec 2023", growth: "+8.9%", pages: 215, price: "$3,100" },
           { title: "Home Healthcare Market Outlook", slug: "home-healthcare-market", date: "Nov 2023", growth: "+10.4%", pages: 200, price: "$2,900" },
         ],
       },
       {
         id: "vaccines",
         industryId: "healthcare",
         icon: Syringe,
         name: "Vaccines",
         rephrasedName: "Vaccines Industry",
         path: "vaccines",
         initial: "VC",
         seo: "Vaccines market research and immunization industry analysis",
         image: "/placeholder.svg",
         color: "#009688",
         description: "Preventive vaccines, therapeutic vaccines, and adjuvants",
         marketSize: "$72 Billion",
         growthRate: "+9.5% CAGR",
         topPlayers: ["Pfizer", "Moderna", "GSK", "Sanofi", "Merck"],
         marketSizeValue: 72,
         growthRateValue: 9.5,
         overview: "mRNA technology, pandemic preparedness, and expanded immunization programs drive vaccine market growth.",
         priority: 7,
         isActive: true,
         createdBy: "system",
         reports: [
           { title: "Global Vaccines Market Analysis", slug: "vaccines-market-analysis", date: "Jan 2024", growth: "+11.3%", pages: 265, price: "$3,700" },
           { title: "mRNA Vaccine Technology Report", slug: "mrna-vaccine-technology", date: "Dec 2023", growth: "+24.8%", pages: 230, price: "$3,400" },
           { title: "Pediatric Vaccines Market Outlook", slug: "pediatric-vaccines-market", date: "Oct 2023", growth: "+7.6%", pages: 195, price: "$2,800" },
         ],
       },
     ],
     reports: [
       { title: "Global Healthcare Industry Outlook 2024", slug: "healthcare-industry-outlook-2024", date: "Jan 2024", growth: "+8.2%", pages: 320, price: "$4,500" },
       { title: "Healthcare Innovation Trends Report", slug: "healthcare-innovation-trends", date: "Dec 2023", growth: "+12.4%", pages: 280, price: "$3,900" },
     ],
   },
 
   // 2. ICT
   {
     id: "ict",
     icon: Cpu,
     name: "ICT",
     rephrasedName: "Information & Communication Technology",
     path: "ict",
     initial: "ICT",
     seo: "ICT market research reports and technology industry analysis",
     image: "/placeholder.svg",
     color: "#2196F3",
     description: "Software, hardware, telecom, and digital solutions",
     marketSize: "$6 Trillion",
     growthRate: "+9.5% CAGR",
     topPlayers: ["Microsoft", "Apple", "Google", "Amazon", "NVIDIA"],
     marketSizeValue: 6000,
     growthRateValue: 9.5,
     overview: "Technology underpins digital transformation across industries, led by AI, cloud computing, and cybersecurity.",
     keyInsights: ["AI investment surging globally", "Cloud adoption expanding rapidly", "Cybersecurity spending increasing", "5G infrastructure deployment accelerating"],
     priority: 2,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Artificial Intelligence Market Forecast", slug: "ai-market-forecast", date: "Jan 2024", growth: "+29.5%", pages: 280, price: "$3,900" },
       { title: "Cloud Computing Market Trends", slug: "cloud-computing-market", date: "Dec 2023", growth: "+17.2%", pages: 245, price: "$3,300" },
       { title: "Cybersecurity Technology Outlook", slug: "cybersecurity-technology-outlook", date: "Nov 2023", growth: "+14.9%", pages: 220, price: "$3,100" },
     ],
   },
 
   // 3. Energy & Power
   {
     id: "energy-power",
     icon: Zap,
     name: "Energy & Power",
     rephrasedName: "Energy & Power Industry",
     path: "energy-power",
     initial: "EP",
     seo: "Energy and power market research reports and analysis",
     image: "/placeholder.svg",
     color: "#FF9800",
     description: "Renewables, oil & gas, power generation",
     marketSize: "$9 Trillion",
     growthRate: "+6.3% CAGR",
     topPlayers: ["Shell", "ExxonMobil", "NextEra Energy", "TotalEnergies"],
     marketSizeValue: 9000,
     growthRateValue: 6.3,
     overview: "Energy markets are transitioning toward renewables while balancing global energy security.",
     keyInsights: ["Renewables outpacing fossil fuels", "Energy storage costs falling", "Hydrogen investments growing", "Grid modernization accelerating"],
     priority: 3,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Renewable Energy Market Outlook", slug: "renewable-energy-market", date: "Jan 2024", growth: "+14.9%", pages: 275, price: "$3,800" },
       { title: "Energy Storage Systems Market", slug: "energy-storage-systems", date: "Dec 2023", growth: "+18.6%", pages: 240, price: "$3,400" },
       { title: "Hydrogen Energy Industry Analysis", slug: "hydrogen-energy-industry", date: "Oct 2023", growth: "+21.2%", pages: 230, price: "$3,300" },
     ],
   },
 
   // 4. Semiconductor & Electronics
   {
     id: "semiconductor-electronics",
     icon: CircuitBoard,
     name: "Semiconductor & Electronics",
     rephrasedName: "Semiconductor & Electronics Industry",
     path: "semiconductor-electronics",
     initial: "SE",
     seo: "Semiconductor and electronics market research reports",
     image: "/placeholder.svg",
     color: "#673AB7",
     description: "Chips, electronic components, consumer electronics",
     marketSize: "$650 Billion",
     growthRate: "+9.0% CAGR",
     topPlayers: ["TSMC", "Intel", "Samsung", "Qualcomm", "NVIDIA"],
     marketSizeValue: 650,
     growthRateValue: 9.0,
     overview: "Semiconductors power modern electronics, AI systems, and automotive technologies.",
     keyInsights: ["AI chips driving demand", "Supply chain diversification ongoing", "Advanced nodes gaining investment", "Automotive semiconductors in high demand"],
     priority: 4,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Semiconductor Market Analysis", slug: "semiconductor-market-analysis", date: "Jan 2024", growth: "+13.6%", pages: 260, price: "$3,700" },
       { title: "AI Chipsets Industry Outlook", slug: "ai-chipsets-industry", date: "Dec 2023", growth: "+24.8%", pages: 235, price: "$3,500" },
       { title: "Electronics Supply Chain Trends", slug: "electronics-supply-chain", date: "Oct 2023", growth: "+8.7%", pages: 200, price: "$2,800" },
     ],
   },
 
   // 5. Automotive & Transportation
   {
     id: "automotive-transportation",
     icon: Car,
     name: "Automotive & Transportation",
     rephrasedName: "Automotive & Transportation Industry",
     path: "automotive-transportation",
     initial: "AT",
     seo: "Automotive and transportation market research reports",
     image: "/placeholder.svg",
     color: "#00BCD4",
     description: "Vehicles, logistics, mobility solutions",
     marketSize: "$4.5 Trillion",
     growthRate: "+8.1% CAGR",
     topPlayers: ["Toyota", "Volkswagen", "Tesla", "BYD", "Daimler"],
     marketSizeValue: 4500,
     growthRateValue: 8.1,
     overview: "This industry is being reshaped by electric vehicles, smart logistics, autonomous driving, and shared mobility models.",
     keyInsights: ["EV adoption accelerating worldwide", "Autonomous mobility moving toward commercial use", "Logistics digitization improving efficiency", "Urban mobility solutions expanding rapidly"],
     priority: 5,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Electric Vehicle Market Outlook 2024", slug: "electric-vehicle-market-2024", date: "Jan 2024", growth: "+21.4%", pages: 260, price: "$3,600" },
       { title: "Autonomous Vehicle Technology Report", slug: "autonomous-vehicles-technology", date: "Dec 2023", growth: "+19.2%", pages: 230, price: "$3,200" },
       { title: "Smart Logistics & Transportation Market", slug: "smart-logistics-transportation", date: "Nov 2023", growth: "+14.7%", pages: 210, price: "$2,900" },
     ],
   },
 
   // 6. Chemicals & Materials
   {
     id: "chemicals-materials",
     icon: FlaskConical,
     name: "Chemicals & Materials",
     rephrasedName: "Chemicals & Materials Industry",
     path: "chemicals-materials",
     initial: "CM",
     seo: "Chemicals and materials market research reports",
     image: "/placeholder.svg",
     color: "#4CAF50",
     description: "Specialty chemicals, raw materials, advanced materials",
     marketSize: "$5.7 Trillion",
     growthRate: "+4.9% CAGR",
     topPlayers: ["BASF", "Dow", "SABIC", "LyondellBasell"],
     marketSizeValue: 5700,
     growthRateValue: 4.9,
     overview: "The market is shifting toward specialty chemicals, sustainable materials, and advanced composites.",
     keyInsights: ["Green chemistry adoption increasing", "Battery materials driving demand", "Specialty chemicals outperforming commodities", "Circular economy initiatives expanding"],
     priority: 6,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Specialty Chemicals Market Report", slug: "specialty-chemicals-market", date: "Jan 2024", growth: "+6.8%", pages: 230, price: "$3,200" },
       { title: "Sustainable Materials Industry Analysis", slug: "sustainable-materials-industry", date: "Dec 2023", growth: "+10.3%", pages: 210, price: "$3,000" },
       { title: "Battery Materials Market Outlook", slug: "battery-materials-market", date: "Nov 2023", growth: "+18.1%", pages: 225, price: "$3,400" },
     ],
   },
 
   // 7. Consumer Goods & FMCG
   {
     id: "consumer-goods-fmcg",
     icon: ShoppingBag,
     name: "Consumer Goods & FMCG",
     rephrasedName: "Consumer Goods & FMCG Industry",
     path: "consumer-goods-fmcg",
     initial: "CG",
     seo: "Consumer goods and FMCG market research reports",
     image: "/placeholder.svg",
     color: "#E91E63",
     description: "Retail, lifestyle, consumer products",
     marketSize: "$15 Trillion",
     growthRate: "+5.2% CAGR",
     topPlayers: ["Procter & Gamble", "Unilever", "Nestlé", "PepsiCo"],
     marketSizeValue: 15000,
     growthRateValue: 5.2,
     overview: "Consumer product markets are influenced by sustainability, digital commerce, and evolving consumer preferences.",
     keyInsights: ["Private labels gaining traction", "Eco-friendly products influencing purchases", "Omnichannel retail becoming standard", "D2C brands disrupting traditional retail"],
     priority: 7,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Consumer Goods Market Trends 2024", slug: "consumer-goods-market-2024", date: "Jan 2024", growth: "+6.1%", pages: 220, price: "$3,100" },
       { title: "Sustainable Consumer Products Report", slug: "sustainable-consumer-products", date: "Dec 2023", growth: "+9.4%", pages: 195, price: "$2,800" },
       { title: "Omnichannel Retail Strategy Analysis", slug: "omnichannel-retail-analysis", date: "Oct 2023", growth: "+7.8%", pages: 180, price: "$2,600" },
     ],
   },
 
   // 8. Food & Beverage
   {
     id: "food-beverage",
     icon: UtensilsCrossed,
     name: "Food & Beverage",
     rephrasedName: "Food & Beverage Industry",
     path: "food-beverage",
     initial: "FB",
     seo: "Food and beverage market research reports",
     image: "/placeholder.svg",
     color: "#FF5722",
     description: "Food processing, beverages, nutrition",
     marketSize: "$8.4 Trillion",
     growthRate: "+6.0% CAGR",
     topPlayers: ["Nestlé", "Danone", "PepsiCo", "Coca-Cola"],
     marketSizeValue: 8400,
     growthRateValue: 6.0,
     overview: "Driven by health awareness, plant-based diets, and functional foods, this industry continues steady global expansion.",
     keyInsights: ["Plant-based food demand rising", "Functional nutrition growing fast", "Cold-chain logistics improving quality", "Clean label products gaining preference"],
     priority: 8,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Functional Foods Market Analysis", slug: "functional-foods-market", date: "Jan 2024", growth: "+11.9%", pages: 240, price: "$3,300" },
       { title: "Plant-Based Food Industry Outlook", slug: "plant-based-food-industry", date: "Dec 2023", growth: "+15.6%", pages: 205, price: "$3,000" },
       { title: "Cold Chain in Food Logistics Report", slug: "cold-chain-food-logistics", date: "Oct 2023", growth: "+8.4%", pages: 190, price: "$2,700" },
     ],
   },
 
   // 9. Agriculture & Food
   {
     id: "agriculture-food",
     icon: Wheat,
     name: "Agriculture & Food",
     rephrasedName: "Agriculture & Food Industry",
     path: "agriculture-food",
     initial: "AG",
     seo: "Agriculture and food market research reports",
     image: "/placeholder.svg",
     color: "#8BC34A",
     description: "Farming, agritech, crop science",
     marketSize: "$4.1 Trillion",
     growthRate: "+5.3% CAGR",
     topPlayers: ["John Deere", "Bayer", "Syngenta", "Corteva"],
     marketSizeValue: 4100,
     growthRateValue: 5.3,
     overview: "Agriculture is adopting precision farming, smart irrigation, and biotech solutions.",
     keyInsights: ["Agri-tech adoption increasing", "Sustainable farming gaining focus", "Precision agriculture expanding", "Yield optimization through data"],
     priority: 9,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Precision Agriculture Market Report", slug: "precision-agriculture-market", date: "Jan 2024", growth: "+12.4%", pages: 225, price: "$3,100" },
       { title: "AgriTech Innovations Outlook", slug: "agritech-innovations", date: "Dec 2023", growth: "+15.2%", pages: 210, price: "$2,900" },
       { title: "Crop Protection Chemicals Market", slug: "crop-protection-chemicals", date: "Oct 2023", growth: "+6.8%", pages: 195, price: "$2,700" },
     ],
   },
 
   // 10. BFSI
   {
     id: "bfsi",
     icon: Landmark,
     name: "BFSI",
     rephrasedName: "Banking, Financial Services & Insurance",
     path: "bfsi",
     initial: "BF",
     seo: "BFSI market research reports and financial industry analysis",
     image: "/placeholder.svg",
     color: "#009688",
     description: "Banking, insurance, fintech",
     marketSize: "$29 Trillion",
     growthRate: "+6.7% CAGR",
     topPlayers: ["JPMorgan Chase", "ICBC", "Visa", "Mastercard"],
     marketSizeValue: 29000,
     growthRateValue: 6.7,
     overview: "Digital banking, fintech, and embedded finance are transforming financial ecosystems.",
     keyInsights: ["Digital payments dominating", "Fintech adoption accelerating", "Open banking expanding", "Insurtech disrupting traditional insurance"],
     priority: 10,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global FinTech Market Analysis", slug: "fintech-market-analysis", date: "Jan 2024", growth: "+20.4%", pages: 260, price: "$3,600" },
       { title: "Digital Banking Transformation Report", slug: "digital-banking-transformation", date: "Dec 2023", growth: "+14.8%", pages: 230, price: "$3,200" },
       { title: "Open Banking Ecosystem Outlook", slug: "open-banking-ecosystem", date: "Oct 2023", growth: "+16.2%", pages: 215, price: "$3,000" },
     ],
   },
 
   // 11. Aerospace & Defense
   {
     id: "aerospace-defense",
     icon: Plane,
     name: "Aerospace & Defense",
     rephrasedName: "Aerospace & Defense Industry",
     path: "aerospace-defense",
     initial: "AD",
     seo: "Aerospace and defense market research reports",
     image: "/placeholder.svg",
     color: "#607D8B",
     description: "Aviation, space, defense systems",
     marketSize: "$1.3 Trillion",
     growthRate: "+5.8% CAGR",
     topPlayers: ["Boeing", "Airbus", "Lockheed Martin", "SpaceX"],
     marketSizeValue: 1300,
     growthRateValue: 5.8,
     overview: "Commercial aviation recovery, space commercialization, and defense modernization drive growth.",
     keyInsights: ["Space launches increasing", "Defense budgets rising", "Sustainable aviation fuel adoption", "Urban air mobility emerging"],
     priority: 11,
     isActive: true,
     createdAt: "2024-01-01",
     createdBy: "system",
     subIndustries: [],
     reports: [
       { title: "Global Aerospace Market Outlook", slug: "aerospace-market-outlook", date: "Jan 2024", growth: "+6.7%", pages: 270, price: "$3,700" },
       { title: "Defense Modernization Programs Report", slug: "defense-modernization-programs", date: "Dec 2023", growth: "+8.9%", pages: 245, price: "$3,400" },
       { title: "Commercial Space Industry Analysis", slug: "commercial-space-industry", date: "Oct 2023", growth: "+19.5%", pages: 230, price: "$3,300" },
     ],
   },
 ];
 
 /* =====================================================
    DERIVED SELECTORS (BACKWARD COMPATIBILITY)
 ===================================================== */
 
 // Get all main industries for nav/mega menu (NO sub-industries)
 export const industries: LegacyIndustryNav[] = industriesData.map(ind => ({
   icon: ind.icon,
   title: ind.name,
   slug: ind.path,
   description: ind.description,
   href: `/industry/${ind.path}`,
 }));
 
 // Get industry by path/slug
 export const getIndustryBySlug = (slug: string): Industry | undefined => {
   return industriesData.find(ind => ind.path === slug);
 };
 
 // Get sub-industry by path/slug
 export const getSubIndustryBySlug = (slug: string): (SubIndustry & { parentIndustry: Industry }) | undefined => {
   for (const ind of industriesData) {
     const sub = ind.subIndustries.find(s => s.path === slug);
     if (sub) {
       return { ...sub, parentIndustry: ind };
     }
   }
   return undefined;
 };
 
 // Get industry detail by slug (backward compatibility)
 export const getIndustryDetailBySlug = (slug: string): IndustryDetail | undefined => {
   const industry = industriesData.find(ind => ind.path === slug);
   if (industry) {
     const allReports = [...industry.reports, ...industry.subIndustries.flatMap(sub => sub.reports)];
     return {
       title: industry.name,
       description: industry.description,
       overview: industry.overview,
       keyInsights: industry.keyInsights,
       marketSize: industry.marketSize,
       growthRate: industry.growthRate,
       topPlayers: industry.topPlayers,
       reports: allReports,
     };
   }
   const subResult = getSubIndustryBySlug(slug);
   if (subResult) {
     return {
       title: subResult.name,
       description: subResult.description,
       overview: subResult.overview,
       keyInsights: [],
       marketSize: subResult.marketSize,
       growthRate: subResult.growthRate,
       topPlayers: subResult.topPlayers,
       reports: subResult.reports,
     };
   }
   return undefined;
 };
 
 // Legacy industryDetails object
 export const industryDetails: Record<string, IndustryDetail> = (() => {
   const details: Record<string, IndustryDetail> = {};
   industriesData.forEach(ind => {
     const allReports = [...ind.reports, ...ind.subIndustries.flatMap(sub => sub.reports)];
     details[ind.path] = {
       title: ind.name,
       description: ind.description,
       overview: ind.overview,
       keyInsights: ind.keyInsights,
       marketSize: ind.marketSize,
       growthRate: ind.growthRate,
       topPlayers: ind.topPlayers,
       reports: allReports,
     };
     ind.subIndustries.forEach(sub => {
       details[sub.path] = {
         title: sub.name,
         description: sub.description,
         overview: sub.overview,
         keyInsights: [],
         marketSize: sub.marketSize,
         growthRate: sub.growthRate,
         topPlayers: sub.topPlayers,
         reports: sub.reports,
       };
     });
   });
   return details;
 })();
 
 // Get industries with sub-industries for sidebar
 export const getIndustriesWithSubIndustries = () => industriesData;
 
 // Get all reports from all industries
 export const getAllReports = () => {
   return industriesData.flatMap(ind => {
     const industryReports = ind.reports.map(r => ({ ...r, category: ind.name, industrySlug: ind.path }));
     const subIndustryReports = ind.subIndustries.flatMap(sub =>
       sub.reports.map(r => ({ ...r, category: sub.name, industrySlug: sub.path, parentIndustry: ind.name, parentIndustrySlug: ind.path }))
     );
     return [...industryReports, ...subIndustryReports];
   });
 };