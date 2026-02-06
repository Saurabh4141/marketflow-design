/* =====================================================
   REPORTS DATA (API-FRIENDLY FLAT ARRAY)
   Maps to: report_master table
===================================================== */

export interface Report {
  industry_id: number;
  sub_industry_id: number | null;
  industry: string;        // industry slug
  sub_industry: string;    // sub-industry slug (empty if main industry report)
  title: string;
  slug: string;            // report slug for URL
  date: string;
  growth: string;
  pages: number;
  price: string;
}

// Flat array of all reports - API-friendly structure
export const reportsData: Report[] = [
  // Healthcare - Biotechnology
  { industry_id: 1, sub_industry_id: 1, industry: "healthcare", sub_industry: "biotechnology", title: "Global Biotechnology Market Outlook", slug: "biotechnology-market-outlook", date: "Jan 2024", growth: "+14.2%", pages: 280, price: "$3,900" },
  { industry_id: 1, sub_industry_id: 1, industry: "healthcare", sub_industry: "biotechnology", title: "Gene Therapy Market Analysis", slug: "gene-therapy-market", date: "Dec 2023", growth: "+18.6%", pages: 245, price: "$3,600" },
  { industry_id: 1, sub_industry_id: 1, industry: "healthcare", sub_industry: "biotechnology", title: "Cell & Gene Therapy Manufacturing", slug: "cell-gene-therapy-manufacturing", date: "Nov 2023", growth: "+21.3%", pages: 225, price: "$3,400" },
  
  // Healthcare - Diagnostics
  { industry_id: 1, sub_industry_id: 2, industry: "healthcare", sub_industry: "diagnostics", title: "In-Vitro Diagnostics Market Report", slug: "ivd-market-report", date: "Jan 2024", growth: "+8.4%", pages: 220, price: "$3,200" },
  { industry_id: 1, sub_industry_id: 2, industry: "healthcare", sub_industry: "diagnostics", title: "Molecular Diagnostics Outlook", slug: "molecular-diagnostics-outlook", date: "Dec 2023", growth: "+11.2%", pages: 205, price: "$3,000" },
  { industry_id: 1, sub_industry_id: 2, industry: "healthcare", sub_industry: "diagnostics", title: "Point-of-Care Testing Market", slug: "poct-market", date: "Oct 2023", growth: "+9.7%", pages: 190, price: "$2,800" },

  // Healthcare - Digital Health
  { industry_id: 1, sub_industry_id: 3, industry: "healthcare", sub_industry: "digital-health", title: "Global Healthcare IT Market Analysis", slug: "healthcare-it-market", date: "Jan 2024", growth: "+15.8%", pages: 240, price: "$3,300" },
  { industry_id: 1, sub_industry_id: 3, industry: "healthcare", sub_industry: "digital-health", title: "Telemedicine Platforms Market Report", slug: "telemedicine-platforms", date: "Dec 2023", growth: "+19.4%", pages: 210, price: "$3,000" },
  { industry_id: 1, sub_industry_id: 3, industry: "healthcare", sub_industry: "digital-health", title: "Healthcare Data Analytics Outlook", slug: "healthcare-data-analytics", date: "Oct 2023", growth: "+13.6%", pages: 195, price: "$2,800" },

  // Healthcare - Hospitals & Healthcare Services
  { industry_id: 1, sub_industry_id: 4, industry: "healthcare", sub_industry: "hospitals-healthcare-services", title: "Global Healthcare Services Market", slug: "healthcare-services-market", date: "Jan 2024", growth: "+6.2%", pages: 250, price: "$3,400" },
  { industry_id: 1, sub_industry_id: 4, industry: "healthcare", sub_industry: "hospitals-healthcare-services", title: "Ambulatory Surgical Centers Report", slug: "asc-market-report", date: "Dec 2023", growth: "+8.9%", pages: 215, price: "$3,100" },
  { industry_id: 1, sub_industry_id: 4, industry: "healthcare", sub_industry: "hospitals-healthcare-services", title: "Home Healthcare Market Outlook", slug: "home-healthcare-market", date: "Nov 2023", growth: "+10.4%", pages: 200, price: "$2,900" },

  // Healthcare - Medical Devices
  { industry_id: 1, sub_industry_id: 5, industry: "healthcare", sub_industry: "medical-devices", title: "Global Medical Devices Market Forecast", slug: "medical-devices-market-forecast", date: "Jan 2024", growth: "+7.4%", pages: 255, price: "$3,500" },
  { industry_id: 1, sub_industry_id: 5, industry: "healthcare", sub_industry: "medical-devices", title: "Diagnostic Imaging Equipment Report", slug: "diagnostic-imaging-equipment", date: "Dec 2023", growth: "+9.1%", pages: 230, price: "$3,200" },
  { industry_id: 1, sub_industry_id: 5, industry: "healthcare", sub_industry: "medical-devices", title: "Minimally Invasive Surgery Devices", slug: "minimally-invasive-devices", date: "Oct 2023", growth: "+11.3%", pages: 210, price: "$3,000" },

  // Healthcare - Pharmaceuticals
  { industry_id: 1, sub_industry_id: 6, industry: "healthcare", sub_industry: "pharmaceuticals", title: "Global Pharmaceutical Market Forecast", slug: "pharmaceutical-market-forecast", date: "Jan 2024", growth: "+7.9%", pages: 260, price: "$3,800" },
  { industry_id: 1, sub_industry_id: 6, industry: "healthcare", sub_industry: "pharmaceuticals", title: "Biologics & Biosimilars Market Report", slug: "biologics-biosimilars-market", date: "Dec 2023", growth: "+11.5%", pages: 235, price: "$3,400" },
  { industry_id: 1, sub_industry_id: 6, industry: "healthcare", sub_industry: "pharmaceuticals", title: "AI in Drug Discovery Analysis", slug: "ai-drug-discovery", date: "Nov 2023", growth: "+22.1%", pages: 220, price: "$3,100" },
  { industry_id: 1, sub_industry_id: 6, industry: "healthcare", sub_industry: "pharmaceuticals", title: "Glutethimide Market Analysis", slug: "glutethimide", date: "Oct 2023", growth: "+5.8%", pages: 180, price: "$2,500" },

  // Healthcare - Vaccines
  { industry_id: 1, sub_industry_id: 7, industry: "healthcare", sub_industry: "vaccines", title: "Global Vaccines Market Analysis", slug: "vaccines-market-analysis", date: "Jan 2024", growth: "+11.3%", pages: 265, price: "$3,700" },
  { industry_id: 1, sub_industry_id: 7, industry: "healthcare", sub_industry: "vaccines", title: "mRNA Vaccine Technology Report", slug: "mrna-vaccine-technology", date: "Dec 2023", growth: "+24.8%", pages: 230, price: "$3,400" },
  { industry_id: 1, sub_industry_id: 7, industry: "healthcare", sub_industry: "vaccines", title: "Pediatric Vaccines Market Outlook", slug: "pediatric-vaccines-market", date: "Oct 2023", growth: "+7.6%", pages: 195, price: "$2,800" },

  // ICT - Artificial Intelligence
  { industry_id: 2, sub_industry_id: 8, industry: "ict", sub_industry: "artificial-intelligence", title: "Global Artificial Intelligence Market Forecast", slug: "ai-market-forecast", date: "Jan 2024", growth: "+29.5%", pages: 280, price: "$3,900" },
  { industry_id: 2, sub_industry_id: 8, industry: "ict", sub_industry: "artificial-intelligence", title: "Generative AI Market Analysis", slug: "generative-ai-market", date: "Dec 2023", growth: "+35.2%", pages: 250, price: "$3,600" },
  { industry_id: 2, sub_industry_id: 8, industry: "ict", sub_industry: "artificial-intelligence", title: "AI in Enterprise Applications", slug: "ai-enterprise-applications", date: "Nov 2023", growth: "+26.8%", pages: 225, price: "$3,300" },

  // ICT - Big Data & Analytics
  { industry_id: 2, sub_industry_id: 9, industry: "ict", sub_industry: "big-data-analytics", title: "Global Big Data Market Report", slug: "big-data-market-report", date: "Jan 2024", growth: "+13.8%", pages: 245, price: "$3,400" },
  { industry_id: 2, sub_industry_id: 9, industry: "ict", sub_industry: "big-data-analytics", title: "Business Intelligence Platforms Outlook", slug: "bi-platforms-outlook", date: "Dec 2023", growth: "+11.4%", pages: 220, price: "$3,100" },
  { industry_id: 2, sub_industry_id: 9, industry: "ict", sub_industry: "big-data-analytics", title: "Data Governance Solutions Market", slug: "data-governance-market", date: "Oct 2023", growth: "+14.2%", pages: 195, price: "$2,800" },

  // ICT - Cloud Computing
  { industry_id: 2, sub_industry_id: 10, industry: "ict", sub_industry: "cloud-computing", title: "Global Cloud Computing Market Trends", slug: "cloud-computing-market", date: "Jan 2024", growth: "+17.2%", pages: 245, price: "$3,300" },
  { industry_id: 2, sub_industry_id: 10, industry: "ict", sub_industry: "cloud-computing", title: "Multi-Cloud Strategy Report", slug: "multi-cloud-strategy", date: "Dec 2023", growth: "+19.5%", pages: 215, price: "$3,000" },
  { industry_id: 2, sub_industry_id: 10, industry: "ict", sub_industry: "cloud-computing", title: "Edge Computing Infrastructure", slug: "edge-computing-infrastructure", date: "Nov 2023", growth: "+22.4%", pages: 200, price: "$2,900" },

  // ICT - Cybersecurity
  { industry_id: 2, sub_industry_id: 11, industry: "ict", sub_industry: "cybersecurity", title: "Cybersecurity Technology Outlook", slug: "cybersecurity-technology-outlook", date: "Jan 2024", growth: "+14.9%", pages: 220, price: "$3,100" },
  { industry_id: 2, sub_industry_id: 11, industry: "ict", sub_industry: "cybersecurity", title: "Zero Trust Security Market", slug: "zero-trust-security", date: "Dec 2023", growth: "+17.8%", pages: 195, price: "$2,900" },
  { industry_id: 2, sub_industry_id: 11, industry: "ict", sub_industry: "cybersecurity", title: "Cloud Security Solutions Report", slug: "cloud-security-solutions", date: "Oct 2023", growth: "+16.3%", pages: 185, price: "$2,700" },

  // ICT - Internet of Things
  { industry_id: 2, sub_industry_id: 12, industry: "ict", sub_industry: "internet-of-things", title: "Global IoT Market Analysis", slug: "iot-market-analysis", date: "Jan 2024", growth: "+12.5%", pages: 260, price: "$3,500" },
  { industry_id: 2, sub_industry_id: 12, industry: "ict", sub_industry: "internet-of-things", title: "Industrial IoT Platforms Report", slug: "iiot-platforms-report", date: "Dec 2023", growth: "+14.8%", pages: 230, price: "$3,200" },
  { industry_id: 2, sub_industry_id: 12, industry: "ict", sub_industry: "internet-of-things", title: "Smart Home IoT Market Outlook", slug: "smart-home-iot", date: "Nov 2023", growth: "+18.2%", pages: 205, price: "$2,900" },

  // ICT - Software & SaaS
  { industry_id: 2, sub_industry_id: 13, industry: "ict", sub_industry: "software-saas", title: "Global SaaS Market Forecast", slug: "saas-market-forecast", date: "Jan 2024", growth: "+12.8%", pages: 255, price: "$3,400" },
  { industry_id: 2, sub_industry_id: 13, industry: "ict", sub_industry: "software-saas", title: "Enterprise Software Trends", slug: "enterprise-software-trends", date: "Dec 2023", growth: "+10.5%", pages: 225, price: "$3,100" },
  { industry_id: 2, sub_industry_id: 13, industry: "ict", sub_industry: "software-saas", title: "Low-Code Development Platforms", slug: "low-code-platforms", date: "Oct 2023", growth: "+23.4%", pages: 195, price: "$2,800" },

  // ICT - Telecom & Networking
  { industry_id: 2, sub_industry_id: 14, industry: "ict", sub_industry: "telecom-networking", title: "5G Infrastructure Market Report", slug: "5g-infrastructure-market", date: "Jan 2024", growth: "+15.6%", pages: 270, price: "$3,600" },
  { industry_id: 2, sub_industry_id: 14, industry: "ict", sub_industry: "telecom-networking", title: "Network Equipment Market Outlook", slug: "network-equipment-outlook", date: "Dec 2023", growth: "+8.9%", pages: 235, price: "$3,200" },
  { industry_id: 2, sub_industry_id: 14, industry: "ict", sub_industry: "telecom-networking", title: "Private 5G Networks Analysis", slug: "private-5g-networks", date: "Nov 2023", growth: "+28.4%", pages: 210, price: "$3,000" },

  // Energy & Power - Energy Storage
  { industry_id: 3, sub_industry_id: 15, industry: "energy-power", sub_industry: "energy-storage", title: "Global Energy Storage Market Report", slug: "energy-storage-market", date: "Jan 2024", growth: "+18.6%", pages: 240, price: "$3,400" },
  { industry_id: 3, sub_industry_id: 15, industry: "energy-power", sub_industry: "energy-storage", title: "Battery Technology Trends", slug: "battery-technology-trends", date: "Dec 2023", growth: "+21.4%", pages: 215, price: "$3,100" },
  { industry_id: 3, sub_industry_id: 15, industry: "energy-power", sub_industry: "energy-storage", title: "Grid-Scale Storage Solutions", slug: "grid-scale-storage", date: "Oct 2023", growth: "+24.8%", pages: 195, price: "$2,900" },

  // Energy & Power - Hydrogen Energy
  { industry_id: 3, sub_industry_id: 16, industry: "energy-power", sub_industry: "hydrogen-energy", title: "Hydrogen Energy Industry Analysis", slug: "hydrogen-energy-industry", date: "Jan 2024", growth: "+21.2%", pages: 230, price: "$3,300" },
  { industry_id: 3, sub_industry_id: 16, industry: "energy-power", sub_industry: "hydrogen-energy", title: "Green Hydrogen Production Report", slug: "green-hydrogen-production", date: "Dec 2023", growth: "+28.5%", pages: 210, price: "$3,100" },
  { industry_id: 3, sub_industry_id: 16, industry: "energy-power", sub_industry: "hydrogen-energy", title: "Hydrogen Fuel Cells Market", slug: "hydrogen-fuel-cells", date: "Nov 2023", growth: "+19.7%", pages: 190, price: "$2,800" },

  // Energy & Power - Nuclear Energy
  { industry_id: 3, sub_industry_id: 17, industry: "energy-power", sub_industry: "nuclear-energy", title: "Global Nuclear Energy Outlook", slug: "nuclear-energy-outlook", date: "Jan 2024", growth: "+4.2%", pages: 225, price: "$3,200" },
  { industry_id: 3, sub_industry_id: 17, industry: "energy-power", sub_industry: "nuclear-energy", title: "Small Modular Reactors Market", slug: "smr-market-report", date: "Dec 2023", growth: "+12.8%", pages: 200, price: "$2,900" },
  { industry_id: 3, sub_industry_id: 17, industry: "energy-power", sub_industry: "nuclear-energy", title: "Nuclear Fuel Market Analysis", slug: "nuclear-fuel-market", date: "Oct 2023", growth: "+5.6%", pages: 180, price: "$2,600" },

  // Energy & Power - Oil & Gas
  { industry_id: 3, sub_industry_id: 18, industry: "energy-power", sub_industry: "oil-gas", title: "Global Oil & Gas Market Report", slug: "oil-gas-market-report", date: "Jan 2024", growth: "+3.5%", pages: 285, price: "$3,800" },
  { industry_id: 3, sub_industry_id: 18, industry: "energy-power", sub_industry: "oil-gas", title: "Offshore Drilling Market Outlook", slug: "offshore-drilling-outlook", date: "Dec 2023", growth: "+4.8%", pages: 250, price: "$3,400" },
  { industry_id: 3, sub_industry_id: 18, industry: "energy-power", sub_industry: "oil-gas", title: "LNG Market Analysis", slug: "lng-market-analysis", date: "Nov 2023", growth: "+6.2%", pages: 220, price: "$3,100" },

  // Energy & Power - Power Generation & Utilities
  { industry_id: 3, sub_industry_id: 19, industry: "energy-power", sub_industry: "power-generation-utilities", title: "Global Power Utilities Market", slug: "power-utilities-market", date: "Jan 2024", growth: "+5.2%", pages: 260, price: "$3,500" },
  { industry_id: 3, sub_industry_id: 19, industry: "energy-power", sub_industry: "power-generation-utilities", title: "Distributed Generation Report", slug: "distributed-generation", date: "Dec 2023", growth: "+8.4%", pages: 225, price: "$3,200" },
  { industry_id: 3, sub_industry_id: 19, industry: "energy-power", sub_industry: "power-generation-utilities", title: "Utility Digital Transformation", slug: "utility-digital-transformation", date: "Oct 2023", growth: "+11.6%", pages: 200, price: "$2,900" },

  // Energy & Power - Renewable Energy
  { industry_id: 3, sub_industry_id: 20, industry: "energy-power", sub_industry: "renewable-energy", title: "Global Renewable Energy Market Outlook", slug: "renewable-energy-market", date: "Jan 2024", growth: "+14.9%", pages: 275, price: "$3,800" },
  { industry_id: 3, sub_industry_id: 20, industry: "energy-power", sub_industry: "renewable-energy", title: "Solar PV Market Report", slug: "solar-pv-market", date: "Dec 2023", growth: "+18.2%", pages: 245, price: "$3,500" },
  { industry_id: 3, sub_industry_id: 20, industry: "energy-power", sub_industry: "renewable-energy", title: "Offshore Wind Energy Outlook", slug: "offshore-wind-energy", date: "Nov 2023", growth: "+16.8%", pages: 220, price: "$3,200" },

  // Energy & Power - Smart Grid & Transmission
  { industry_id: 3, sub_industry_id: 21, industry: "energy-power", sub_industry: "smart-grid-transmission", title: "Smart Grid Technology Report", slug: "smart-grid-technology", date: "Jan 2024", growth: "+10.5%", pages: 235, price: "$3,300" },
  { industry_id: 3, sub_industry_id: 21, industry: "energy-power", sub_industry: "smart-grid-transmission", title: "Grid Modernization Market", slug: "grid-modernization-market", date: "Dec 2023", growth: "+12.8%", pages: 210, price: "$3,000" },
  { industry_id: 3, sub_industry_id: 21, industry: "energy-power", sub_industry: "smart-grid-transmission", title: "HVDC Transmission Systems", slug: "hvdc-transmission", date: "Oct 2023", growth: "+8.9%", pages: 185, price: "$2,700" },

  // Semiconductor & Electronics - Consumer Electronics
  { industry_id: 4, sub_industry_id: 22, industry: "semiconductor-electronics", sub_industry: "consumer-electronics", title: "Global Consumer Electronics Market", slug: "consumer-electronics-market", date: "Jan 2024", growth: "+6.4%", pages: 250, price: "$3,400" },
  { industry_id: 4, sub_industry_id: 22, industry: "semiconductor-electronics", sub_industry: "consumer-electronics", title: "Smart Wearables Market Report", slug: "smart-wearables-market", date: "Dec 2023", growth: "+12.8%", pages: 220, price: "$3,100" },
  { industry_id: 4, sub_industry_id: 22, industry: "semiconductor-electronics", sub_industry: "consumer-electronics", title: "Gaming Hardware Market Outlook", slug: "gaming-hardware-outlook", date: "Nov 2023", growth: "+9.5%", pages: 195, price: "$2,800" },

  // Semiconductor & Electronics - Displays & Optoelectronics
  { industry_id: 4, sub_industry_id: 23, industry: "semiconductor-electronics", sub_industry: "displays-optoelectronics", title: "OLED Display Market Analysis", slug: "oled-display-market", date: "Jan 2024", growth: "+8.9%", pages: 235, price: "$3,300" },
  { industry_id: 4, sub_industry_id: 23, industry: "semiconductor-electronics", sub_industry: "displays-optoelectronics", title: "MicroLED Technology Report", slug: "microled-technology", date: "Dec 2023", growth: "+35.2%", pages: 205, price: "$3,000" },
  { industry_id: 4, sub_industry_id: 23, industry: "semiconductor-electronics", sub_industry: "displays-optoelectronics", title: "AR/VR Display Market Outlook", slug: "ar-vr-display-market", date: "Oct 2023", growth: "+24.6%", pages: 190, price: "$2,800" },

  // Semiconductor & Electronics - Electronic Components
  { industry_id: 4, sub_industry_id: 24, industry: "semiconductor-electronics", sub_industry: "electronic-components", title: "Passive Components Market Report", slug: "passive-components-market", date: "Jan 2024", growth: "+5.8%", pages: 225, price: "$3,100" },
  { industry_id: 4, sub_industry_id: 24, industry: "semiconductor-electronics", sub_industry: "electronic-components", title: "PCB Market Outlook", slug: "pcb-market-outlook", date: "Dec 2023", growth: "+6.4%", pages: 200, price: "$2,900" },
  { industry_id: 4, sub_industry_id: 24, industry: "semiconductor-electronics", sub_industry: "electronic-components", title: "Connector Market Analysis", slug: "connector-market-analysis", date: "Nov 2023", growth: "+7.2%", pages: 185, price: "$2,700" },

  // Semiconductor & Electronics - Embedded Systems
  { industry_id: 4, sub_industry_id: 25, industry: "semiconductor-electronics", sub_industry: "embedded-systems", title: "Embedded Systems Market Report", slug: "embedded-systems-market", date: "Jan 2024", growth: "+9.2%", pages: 240, price: "$3,300" },
  { industry_id: 4, sub_industry_id: 25, industry: "semiconductor-electronics", sub_industry: "embedded-systems", title: "Microcontroller Market Outlook", slug: "microcontroller-market", date: "Dec 2023", growth: "+8.5%", pages: 215, price: "$3,000" },
  { industry_id: 4, sub_industry_id: 25, industry: "semiconductor-electronics", sub_industry: "embedded-systems", title: "Real-Time Operating Systems", slug: "rtos-market", date: "Oct 2023", growth: "+11.4%", pages: 190, price: "$2,700" },

  // Semiconductor & Electronics - Power Electronics
  { industry_id: 4, sub_industry_id: 26, industry: "semiconductor-electronics", sub_industry: "power-electronics", title: "Power Semiconductor Market Report", slug: "power-semiconductor-market", date: "Jan 2024", growth: "+8.2%", pages: 245, price: "$3,400" },
  { industry_id: 4, sub_industry_id: 26, industry: "semiconductor-electronics", sub_industry: "power-electronics", title: "SiC & GaN Devices Market", slug: "sic-gan-devices", date: "Dec 2023", growth: "+28.4%", pages: 220, price: "$3,200" },
  { industry_id: 4, sub_industry_id: 26, industry: "semiconductor-electronics", sub_industry: "power-electronics", title: "EV Power Electronics Analysis", slug: "ev-power-electronics", date: "Nov 2023", growth: "+24.6%", pages: 200, price: "$2,900" },

  // Semiconductor & Electronics - Semiconductors
  { industry_id: 4, sub_industry_id: 27, industry: "semiconductor-electronics", sub_industry: "semiconductors", title: "Global Semiconductor Market Analysis", slug: "semiconductor-market-analysis", date: "Jan 2024", growth: "+13.6%", pages: 260, price: "$3,700" },
  { industry_id: 4, sub_industry_id: 27, industry: "semiconductor-electronics", sub_industry: "semiconductors", title: "AI Chipsets Industry Outlook", slug: "ai-chipsets-industry", date: "Dec 2023", growth: "+24.8%", pages: 235, price: "$3,500" },
  { industry_id: 4, sub_industry_id: 27, industry: "semiconductor-electronics", sub_industry: "semiconductors", title: "Memory Semiconductor Market", slug: "memory-semiconductor-market", date: "Nov 2023", growth: "+15.2%", pages: 215, price: "$3,200" },

  // Semiconductor & Electronics - Sensors & MEMS
  { industry_id: 4, sub_industry_id: 28, industry: "semiconductor-electronics", sub_industry: "sensors-mems", title: "Global Sensors Market Report", slug: "sensors-market-report", date: "Jan 2024", growth: "+9.4%", pages: 230, price: "$3,200" },
  { industry_id: 4, sub_industry_id: 28, industry: "semiconductor-electronics", sub_industry: "sensors-mems", title: "Image Sensor Market Outlook", slug: "image-sensor-market", date: "Dec 2023", growth: "+11.8%", pages: 205, price: "$2,900" },
  { industry_id: 4, sub_industry_id: 28, industry: "semiconductor-electronics", sub_industry: "sensors-mems", title: "MEMS Technology Analysis", slug: "mems-technology-analysis", date: "Oct 2023", growth: "+8.6%", pages: 185, price: "$2,700" },

  // Automotive & Transportation - Automotive Aftermarket
  { industry_id: 5, sub_industry_id: 29, industry: "automotive-transportation", sub_industry: "automotive-aftermarket", title: "Global Automotive Aftermarket Report", slug: "automotive-aftermarket-report", date: "Jan 2024", growth: "+4.8%", pages: 245, price: "$3,300" },
  { industry_id: 5, sub_industry_id: 29, industry: "automotive-transportation", sub_industry: "automotive-aftermarket", title: "Auto Parts E-commerce Market", slug: "auto-parts-ecommerce", date: "Dec 2023", growth: "+12.4%", pages: 215, price: "$3,000" },
  { industry_id: 5, sub_industry_id: 29, industry: "automotive-transportation", sub_industry: "automotive-aftermarket", title: "Vehicle Maintenance Services", slug: "vehicle-maintenance-services", date: "Nov 2023", growth: "+5.6%", pages: 190, price: "$2,700" },

  // Automotive & Transportation - Automotive Components
  { industry_id: 5, sub_industry_id: 30, industry: "automotive-transportation", sub_industry: "automotive-components", title: "Automotive Components Market Report", slug: "automotive-components-report", date: "Jan 2024", growth: "+6.2%", pages: 265, price: "$3,600" },
  { industry_id: 5, sub_industry_id: 30, industry: "automotive-transportation", sub_industry: "automotive-components", title: "Automotive Powertrain Market", slug: "automotive-powertrain-market", date: "Dec 2023", growth: "+5.8%", pages: 235, price: "$3,300" },
  { industry_id: 5, sub_industry_id: 30, industry: "automotive-transportation", sub_industry: "automotive-components", title: "Automotive Chassis Systems", slug: "automotive-chassis-systems", date: "Nov 2023", growth: "+7.4%", pages: 210, price: "$3,000" },

  // Automotive & Transportation - Automotive Electronics
  { industry_id: 5, sub_industry_id: 31, industry: "automotive-transportation", sub_industry: "automotive-electronics", title: "Automotive Electronics Market Report", slug: "automotive-electronics-report", date: "Jan 2024", growth: "+10.2%", pages: 255, price: "$3,500" },
  { industry_id: 5, sub_industry_id: 31, industry: "automotive-transportation", sub_industry: "automotive-electronics", title: "ADAS Technology Outlook", slug: "adas-technology-outlook", date: "Dec 2023", growth: "+15.8%", pages: 225, price: "$3,200" },
  { industry_id: 5, sub_industry_id: 31, industry: "automotive-transportation", sub_industry: "automotive-electronics", title: "In-Vehicle Infotainment Market", slug: "in-vehicle-infotainment", date: "Nov 2023", growth: "+11.4%", pages: 200, price: "$2,900" },

  // Automotive & Transportation - Autonomous & Connected Vehicles
  { industry_id: 5, sub_industry_id: 32, industry: "automotive-transportation", sub_industry: "autonomous-connected-vehicles", title: "Autonomous Vehicle Technology Report", slug: "autonomous-vehicles-technology", date: "Jan 2024", growth: "+19.2%", pages: 230, price: "$3,200" },
  { industry_id: 5, sub_industry_id: 32, industry: "automotive-transportation", sub_industry: "autonomous-connected-vehicles", title: "Connected Car Services Market", slug: "connected-car-services", date: "Dec 2023", growth: "+22.4%", pages: 210, price: "$3,000" },
  { industry_id: 5, sub_industry_id: 32, industry: "automotive-transportation", sub_industry: "autonomous-connected-vehicles", title: "V2X Communication Market", slug: "v2x-communication-market", date: "Nov 2023", growth: "+28.6%", pages: 195, price: "$2,800" },

  // Automotive & Transportation - Commercial Vehicles
  { industry_id: 5, sub_industry_id: 33, industry: "automotive-transportation", sub_industry: "commercial-vehicles", title: "Commercial Vehicles Market Report", slug: "commercial-vehicles-report", date: "Jan 2024", growth: "+5.6%", pages: 260, price: "$3,500" },
  { industry_id: 5, sub_industry_id: 33, industry: "automotive-transportation", sub_industry: "commercial-vehicles", title: "Electric Truck Market Outlook", slug: "electric-truck-market", date: "Dec 2023", growth: "+18.4%", pages: 225, price: "$3,200" },
  { industry_id: 5, sub_industry_id: 33, industry: "automotive-transportation", sub_industry: "commercial-vehicles", title: "Fleet Management Solutions", slug: "fleet-management-solutions", date: "Nov 2023", growth: "+12.8%", pages: 200, price: "$2,900" },

  // Automotive & Transportation - Electric Vehicles
  { industry_id: 5, sub_industry_id: 34, industry: "automotive-transportation", sub_industry: "electric-vehicles", title: "Global Electric Vehicle Market Outlook 2024", slug: "electric-vehicle-market-2024", date: "Jan 2024", growth: "+21.4%", pages: 260, price: "$3,600" },
  { industry_id: 5, sub_industry_id: 34, industry: "automotive-transportation", sub_industry: "electric-vehicles", title: "EV Battery Market Report", slug: "ev-battery-market", date: "Dec 2023", growth: "+25.8%", pages: 235, price: "$3,400" },
  { industry_id: 5, sub_industry_id: 34, industry: "automotive-transportation", sub_industry: "electric-vehicles", title: "EV Charging Infrastructure Market", slug: "ev-charging-infrastructure", date: "Nov 2023", growth: "+32.4%", pages: 215, price: "$3,100" },

  // Automotive & Transportation - Mobility Services
  { industry_id: 5, sub_industry_id: 35, industry: "automotive-transportation", sub_industry: "mobility-services", title: "Smart Logistics & Transportation Market", slug: "smart-logistics-transportation", date: "Jan 2024", growth: "+14.7%", pages: 210, price: "$2,900" },
  { industry_id: 5, sub_industry_id: 35, industry: "automotive-transportation", sub_industry: "mobility-services", title: "Ride-Hailing Market Analysis", slug: "ride-hailing-market", date: "Dec 2023", growth: "+12.8%", pages: 195, price: "$2,700" },
  { industry_id: 5, sub_industry_id: 35, industry: "automotive-transportation", sub_industry: "mobility-services", title: "Shared Mobility Trends Report", slug: "shared-mobility-trends", date: "Nov 2023", growth: "+16.5%", pages: 180, price: "$2,500" },

  // Chemicals & Materials - Advanced Materials
  { industry_id: 6, sub_industry_id: 36, industry: "chemicals-materials", sub_industry: "advanced-materials", title: "Advanced Materials Market Report", slug: "advanced-materials-report", date: "Jan 2024", growth: "+9.2%", pages: 245, price: "$3,400" },
  { industry_id: 6, sub_industry_id: 36, industry: "chemicals-materials", sub_industry: "advanced-materials", title: "Carbon Fiber Composites Market", slug: "carbon-fiber-composites", date: "Dec 2023", growth: "+11.8%", pages: 215, price: "$3,100" },
  { industry_id: 6, sub_industry_id: 36, industry: "chemicals-materials", sub_industry: "advanced-materials", title: "Nanomaterials Market Outlook", slug: "nanomaterials-outlook", date: "Nov 2023", growth: "+14.2%", pages: 195, price: "$2,900" },

  // Chemicals & Materials - Coatings, Adhesives & Sealants
  { industry_id: 6, sub_industry_id: 37, industry: "chemicals-materials", sub_industry: "coatings-adhesives-sealants", title: "Industrial Coatings Market Report", slug: "industrial-coatings-market", date: "Jan 2024", growth: "+5.4%", pages: 235, price: "$3,200" },
  { industry_id: 6, sub_industry_id: 37, industry: "chemicals-materials", sub_industry: "coatings-adhesives-sealants", title: "Automotive Coatings Market", slug: "automotive-coatings-market", date: "Dec 2023", growth: "+6.2%", pages: 210, price: "$3,000" },
  { industry_id: 6, sub_industry_id: 37, industry: "chemicals-materials", sub_industry: "coatings-adhesives-sealants", title: "Structural Adhesives Market", slug: "structural-adhesives-market", date: "Nov 2023", growth: "+7.8%", pages: 190, price: "$2,700" },

  // Chemicals & Materials - Green & Sustainable Materials
  { industry_id: 6, sub_industry_id: 38, industry: "chemicals-materials", sub_industry: "green-sustainable-materials", title: "Sustainable Materials Industry Analysis", slug: "sustainable-materials-industry", date: "Jan 2024", growth: "+12.6%", pages: 225, price: "$3,100" },
  { industry_id: 6, sub_industry_id: 38, industry: "chemicals-materials", sub_industry: "green-sustainable-materials", title: "Bioplastics Market Report", slug: "bioplastics-market", date: "Dec 2023", growth: "+15.4%", pages: 200, price: "$2,900" },
  { industry_id: 6, sub_industry_id: 38, industry: "chemicals-materials", sub_industry: "green-sustainable-materials", title: "Recycled Plastics Market Outlook", slug: "recycled-plastics-market", date: "Nov 2023", growth: "+18.2%", pages: 185, price: "$2,700" },

  // Chemicals & Materials - Industrial Gases
  { industry_id: 6, sub_industry_id: 39, industry: "chemicals-materials", sub_industry: "industrial-gases", title: "Industrial Gases Market Report", slug: "industrial-gases-market", date: "Jan 2024", growth: "+6.8%", pages: 240, price: "$3,300" },
  { industry_id: 6, sub_industry_id: 39, industry: "chemicals-materials", sub_industry: "industrial-gases", title: "Specialty Gases Market Outlook", slug: "specialty-gases-outlook", date: "Dec 2023", growth: "+8.4%", pages: 215, price: "$3,000" },
  { industry_id: 6, sub_industry_id: 39, industry: "chemicals-materials", sub_industry: "industrial-gases", title: "Medical Gases Market Analysis", slug: "medical-gases-analysis", date: "Nov 2023", growth: "+7.2%", pages: 195, price: "$2,800" },

  // Chemicals & Materials - Petrochemicals
  { industry_id: 6, sub_industry_id: 40, industry: "chemicals-materials", sub_industry: "petrochemicals", title: "Global Petrochemicals Market Report", slug: "petrochemicals-market-report", date: "Jan 2024", growth: "+4.5%", pages: 265, price: "$3,600" },
  { industry_id: 6, sub_industry_id: 40, industry: "chemicals-materials", sub_industry: "petrochemicals", title: "Olefins & Aromatics Market", slug: "olefins-aromatics-market", date: "Dec 2023", growth: "+3.8%", pages: 235, price: "$3,300" },
  { industry_id: 6, sub_industry_id: 40, industry: "chemicals-materials", sub_industry: "petrochemicals", title: "Ethylene Market Analysis", slug: "ethylene-market-analysis", date: "Nov 2023", growth: "+5.2%", pages: 210, price: "$3,000" },

  // Chemicals & Materials - Polymers & Plastics
  { industry_id: 6, sub_industry_id: 41, industry: "chemicals-materials", sub_industry: "polymers-plastics", title: "Global Polymers Market Report", slug: "polymers-market-report", date: "Jan 2024", growth: "+5.2%", pages: 255, price: "$3,500" },
  { industry_id: 6, sub_industry_id: 41, industry: "chemicals-materials", sub_industry: "polymers-plastics", title: "Engineering Plastics Market", slug: "engineering-plastics-market", date: "Dec 2023", growth: "+6.8%", pages: 225, price: "$3,200" },
  { industry_id: 6, sub_industry_id: 41, industry: "chemicals-materials", sub_industry: "polymers-plastics", title: "Polyethylene Market Outlook", slug: "polyethylene-market-outlook", date: "Nov 2023", growth: "+4.6%", pages: 200, price: "$2,900" },

  // Chemicals & Materials - Specialty Chemicals
  { industry_id: 6, sub_industry_id: 42, industry: "chemicals-materials", sub_industry: "specialty-chemicals", title: "Global Specialty Chemicals Market Report", slug: "specialty-chemicals-market", date: "Jan 2024", growth: "+6.4%", pages: 250, price: "$3,400" },
  { industry_id: 6, sub_industry_id: 42, industry: "chemicals-materials", sub_industry: "specialty-chemicals", title: "Battery Materials Market Outlook", slug: "battery-materials-market", date: "Dec 2023", growth: "+18.1%", pages: 225, price: "$3,400" },
  { industry_id: 6, sub_industry_id: 42, industry: "chemicals-materials", sub_industry: "specialty-chemicals", title: "Agrochemicals Market Report", slug: "agrochemicals-market-report", date: "Nov 2023", growth: "+5.8%", pages: 200, price: "$2,900" },

  // Consumer Goods & FMCG - Baby Care Products
  { industry_id: 7, sub_industry_id: 43, industry: "consumer-goods-fmcg", sub_industry: "baby-care-products", title: "Baby Care Products Market Report", slug: "baby-care-products-market", date: "Jan 2024", growth: "+5.8%", pages: 220, price: "$3,000" },
  { industry_id: 7, sub_industry_id: 43, industry: "consumer-goods-fmcg", sub_industry: "baby-care-products", title: "Baby Diapers Market Analysis", slug: "baby-diapers-market", date: "Dec 2023", growth: "+4.6%", pages: 195, price: "$2,700" },
  { industry_id: 7, sub_industry_id: 43, industry: "consumer-goods-fmcg", sub_industry: "baby-care-products", title: "Organic Baby Food Market", slug: "organic-baby-food-market", date: "Nov 2023", growth: "+9.8%", pages: 180, price: "$2,500" },

  // Consumer Goods & FMCG - Food Products
  { industry_id: 7, sub_industry_id: 44, industry: "consumer-goods-fmcg", sub_industry: "food-products", title: "Packaged Food Market Report", slug: "packaged-food-market", date: "Jan 2024", growth: "+6.2%", pages: 255, price: "$3,400" },
  { industry_id: 7, sub_industry_id: 44, industry: "consumer-goods-fmcg", sub_industry: "food-products", title: "Snack Foods Market Outlook", slug: "snack-foods-market", date: "Dec 2023", growth: "+7.4%", pages: 225, price: "$3,100" },
  { industry_id: 7, sub_industry_id: 44, industry: "consumer-goods-fmcg", sub_industry: "food-products", title: "Ready-to-Eat Meals Market", slug: "ready-to-eat-meals", date: "Nov 2023", growth: "+8.8%", pages: 200, price: "$2,800" },

  // Consumer Goods & FMCG - Health & Wellness Products
  { industry_id: 7, sub_industry_id: 45, industry: "consumer-goods-fmcg", sub_industry: "health-wellness-products", title: "Health & Wellness Market Report", slug: "health-wellness-market", date: "Jan 2024", growth: "+8.6%", pages: 245, price: "$3,300" },
  { industry_id: 7, sub_industry_id: 45, industry: "consumer-goods-fmcg", sub_industry: "health-wellness-products", title: "Dietary Supplements Market", slug: "dietary-supplements-market", date: "Dec 2023", growth: "+9.4%", pages: 220, price: "$3,100" },
  { industry_id: 7, sub_industry_id: 45, industry: "consumer-goods-fmcg", sub_industry: "health-wellness-products", title: "Probiotics Market Analysis", slug: "probiotics-market-analysis", date: "Nov 2023", growth: "+11.2%", pages: 195, price: "$2,800" },

  // Consumer Goods & FMCG - Household & Home Care
  { industry_id: 7, sub_industry_id: 46, industry: "consumer-goods-fmcg", sub_industry: "household-home-care", title: "Household Products Market Report", slug: "household-products-market", date: "Jan 2024", growth: "+5.2%", pages: 230, price: "$3,100" },
  { industry_id: 7, sub_industry_id: 46, industry: "consumer-goods-fmcg", sub_industry: "household-home-care", title: "Cleaning Products Market Outlook", slug: "cleaning-products-market", date: "Dec 2023", growth: "+4.8%", pages: 205, price: "$2,900" },
  { industry_id: 7, sub_industry_id: 46, industry: "consumer-goods-fmcg", sub_industry: "household-home-care", title: "Laundry Care Market Analysis", slug: "laundry-care-market", date: "Nov 2023", growth: "+5.6%", pages: 185, price: "$2,600" },

  // Consumer Goods & FMCG - Personal Care & Cosmetics
  { industry_id: 7, sub_industry_id: 47, industry: "consumer-goods-fmcg", sub_industry: "personal-care-cosmetics", title: "Global Consumer Goods Market Trends 2024", slug: "consumer-goods-market-2024", date: "Jan 2024", growth: "+6.1%", pages: 220, price: "$3,100" },
  { industry_id: 7, sub_industry_id: 47, industry: "consumer-goods-fmcg", sub_industry: "personal-care-cosmetics", title: "Skincare Market Report", slug: "skincare-market-report", date: "Dec 2023", growth: "+7.8%", pages: 210, price: "$2,900" },
  { industry_id: 7, sub_industry_id: 47, industry: "consumer-goods-fmcg", sub_industry: "personal-care-cosmetics", title: "Color Cosmetics Market Outlook", slug: "color-cosmetics-market", date: "Nov 2023", growth: "+6.4%", pages: 195, price: "$2,700" },

  // Consumer Goods & FMCG - Tobacco & Nicotine Products
  { industry_id: 7, sub_industry_id: 48, industry: "consumer-goods-fmcg", sub_industry: "tobacco-nicotine-products", title: "Tobacco Industry Report", slug: "tobacco-industry-report", date: "Jan 2024", growth: "+2.4%", pages: 235, price: "$3,200" },
  { industry_id: 7, sub_industry_id: 48, industry: "consumer-goods-fmcg", sub_industry: "tobacco-nicotine-products", title: "E-Cigarettes Market Analysis", slug: "e-cigarettes-market", date: "Dec 2023", growth: "+12.6%", pages: 205, price: "$2,900" },
  { industry_id: 7, sub_industry_id: 48, industry: "consumer-goods-fmcg", sub_industry: "tobacco-nicotine-products", title: "Heated Tobacco Products Market", slug: "heated-tobacco-products", date: "Nov 2023", growth: "+18.4%", pages: 185, price: "$2,700" },

  // Food & Beverage - Bakery & Confectionery
  { industry_id: 8, sub_industry_id: 49, industry: "food-beverage", sub_industry: "bakery-confectionery", title: "Bakery & Confectionery Market Report", slug: "bakery-confectionery-report", date: "Jan 2024", growth: "+5.8%", pages: 235, price: "$3,200" },
  { industry_id: 8, sub_industry_id: 49, industry: "food-beverage", sub_industry: "bakery-confectionery", title: "Chocolate Market Analysis", slug: "chocolate-market-analysis", date: "Dec 2023", growth: "+6.4%", pages: 210, price: "$2,900" },
  { industry_id: 8, sub_industry_id: 49, industry: "food-beverage", sub_industry: "bakery-confectionery", title: "Artisan Bakery Market Outlook", slug: "artisan-bakery-market", date: "Nov 2023", growth: "+8.2%", pages: 190, price: "$2,700" },

  // Food & Beverage - Beverages
  { industry_id: 8, sub_industry_id: 50, industry: "food-beverage", sub_industry: "beverages", title: "Global Beverages Market Report", slug: "beverages-market-report", date: "Jan 2024", growth: "+6.2%", pages: 260, price: "$3,500" },
  { industry_id: 8, sub_industry_id: 50, industry: "food-beverage", sub_industry: "beverages", title: "Energy Drinks Market Analysis", slug: "energy-drinks-market", date: "Dec 2023", growth: "+8.4%", pages: 225, price: "$3,100" },
  { industry_id: 8, sub_industry_id: 50, industry: "food-beverage", sub_industry: "beverages", title: "Ready-to-Drink Coffee Market", slug: "rtd-coffee-market", date: "Nov 2023", growth: "+11.2%", pages: 200, price: "$2,800" },

  // Food & Beverage - Dairy Products
  { industry_id: 8, sub_industry_id: 51, industry: "food-beverage", sub_industry: "dairy-products", title: "Global Dairy Market Report", slug: "dairy-market-report", date: "Jan 2024", growth: "+5.4%", pages: 250, price: "$3,400" },
  { industry_id: 8, sub_industry_id: 51, industry: "food-beverage", sub_industry: "dairy-products", title: "Yogurt Market Analysis", slug: "yogurt-market-analysis", date: "Dec 2023", growth: "+6.8%", pages: 220, price: "$3,000" },
  { industry_id: 8, sub_industry_id: 51, industry: "food-beverage", sub_industry: "dairy-products", title: "Dairy Alternatives Market", slug: "dairy-alternatives-market", date: "Nov 2023", growth: "+12.4%", pages: 195, price: "$2,800" },

  // Food & Beverage - Functional & Health Foods
  { industry_id: 8, sub_industry_id: 52, industry: "food-beverage", sub_industry: "functional-health-foods", title: "Global Functional Foods Market Analysis", slug: "functional-foods-market", date: "Jan 2024", growth: "+11.9%", pages: 240, price: "$3,300" },
  { industry_id: 8, sub_industry_id: 52, industry: "food-beverage", sub_industry: "functional-health-foods", title: "Nutraceuticals Market Report", slug: "nutraceuticals-market", date: "Dec 2023", growth: "+10.8%", pages: 215, price: "$3,000" },
  { industry_id: 8, sub_industry_id: 52, industry: "food-beverage", sub_industry: "functional-health-foods", title: "Sports Nutrition Market Outlook", slug: "sports-nutrition-market", date: "Nov 2023", growth: "+9.6%", pages: 195, price: "$2,800" },

  // Food & Beverage - Meat, Poultry & Seafood
  { industry_id: 8, sub_industry_id: 53, industry: "food-beverage", sub_industry: "meat-poultry-seafood", title: "Global Meat Market Report", slug: "meat-market-report", date: "Jan 2024", growth: "+4.6%", pages: 255, price: "$3,400" },
  { industry_id: 8, sub_industry_id: 53, industry: "food-beverage", sub_industry: "meat-poultry-seafood", title: "Poultry Market Analysis", slug: "poultry-market-analysis", date: "Dec 2023", growth: "+5.2%", pages: 225, price: "$3,100" },
  { industry_id: 8, sub_industry_id: 53, industry: "food-beverage", sub_industry: "meat-poultry-seafood", title: "Seafood Market Outlook", slug: "seafood-market-outlook", date: "Nov 2023", growth: "+5.8%", pages: 200, price: "$2,800" },

  // Food & Beverage - Plant-Based & Alternative Foods
  { industry_id: 8, sub_industry_id: 54, industry: "food-beverage", sub_industry: "plant-based-alternative-foods", title: "Plant-Based Food Industry Outlook", slug: "plant-based-food-industry", date: "Jan 2024", growth: "+15.6%", pages: 205, price: "$3,000" },
  { industry_id: 8, sub_industry_id: 54, industry: "food-beverage", sub_industry: "plant-based-alternative-foods", title: "Meat Alternatives Market Report", slug: "meat-alternatives-market", date: "Dec 2023", growth: "+14.2%", pages: 185, price: "$2,700" },
  { industry_id: 8, sub_industry_id: 54, industry: "food-beverage", sub_industry: "plant-based-alternative-foods", title: "Plant-Based Dairy Market", slug: "plant-based-dairy-market", date: "Nov 2023", growth: "+12.8%", pages: 170, price: "$2,500" },

  // Food & Beverage - Processed & Packaged Food
  { industry_id: 8, sub_industry_id: 55, industry: "food-beverage", sub_industry: "processed-packaged-food", title: "Processed Foods Market Report", slug: "processed-foods-market", date: "Jan 2024", growth: "+5.8%", pages: 245, price: "$3,300" },
  { industry_id: 8, sub_industry_id: 55, industry: "food-beverage", sub_industry: "processed-packaged-food", title: "Frozen Foods Market Analysis", slug: "frozen-foods-market", date: "Dec 2023", growth: "+6.4%", pages: 215, price: "$3,000" },
  { industry_id: 8, sub_industry_id: 55, industry: "food-beverage", sub_industry: "processed-packaged-food", title: "Cold Chain in Food Logistics Report", slug: "cold-chain-food-logistics", date: "Nov 2023", growth: "+8.4%", pages: 190, price: "$2,700" },

  // Agriculture & Food - Agri-Tech & Smart Farming
  { industry_id: 9, sub_industry_id: 56, industry: "agriculture-food", sub_industry: "agri-tech-smart-farming", title: "Precision Agriculture Market Report", slug: "precision-agriculture-market", date: "Jan 2024", growth: "+12.4%", pages: 225, price: "$3,100" },
  { industry_id: 9, sub_industry_id: 56, industry: "agriculture-food", sub_industry: "agri-tech-smart-farming", title: "AgriTech Innovations Outlook", slug: "agritech-innovations", date: "Dec 2023", growth: "+15.2%", pages: 210, price: "$2,900" },
  { industry_id: 9, sub_industry_id: 56, industry: "agriculture-food", sub_industry: "agri-tech-smart-farming", title: "Farm Drones Market Analysis", slug: "farm-drones-market", date: "Nov 2023", growth: "+18.6%", pages: 190, price: "$2,700" },

  // Agriculture & Food - Agricultural Equipment & Machinery
  { industry_id: 9, sub_industry_id: 57, industry: "agriculture-food", sub_industry: "agricultural-equipment-machinery", title: "Farm Equipment Market Report", slug: "farm-equipment-market", date: "Jan 2024", growth: "+6.2%", pages: 250, price: "$3,400" },
  { industry_id: 9, sub_industry_id: 57, industry: "agriculture-food", sub_industry: "agricultural-equipment-machinery", title: "Tractor Market Analysis", slug: "tractor-market-analysis", date: "Dec 2023", growth: "+5.8%", pages: 220, price: "$3,100" },
  { industry_id: 9, sub_industry_id: 57, industry: "agriculture-food", sub_industry: "agricultural-equipment-machinery", title: "Harvesting Equipment Market", slug: "harvesting-equipment-market", date: "Nov 2023", growth: "+7.4%", pages: 200, price: "$2,800" },

  // Agriculture & Food - Crop Production & Farming
  { industry_id: 9, sub_industry_id: 58, industry: "agriculture-food", sub_industry: "crop-production-farming", title: "Global Crop Production Report", slug: "crop-production-report", date: "Jan 2024", growth: "+4.6%", pages: 265, price: "$3,500" },
  { industry_id: 9, sub_industry_id: 58, industry: "agriculture-food", sub_industry: "crop-production-farming", title: "Grain & Cereals Market Analysis", slug: "grain-cereals-market", date: "Dec 2023", growth: "+4.2%", pages: 235, price: "$3,200" },
  { industry_id: 9, sub_industry_id: 58, industry: "agriculture-food", sub_industry: "crop-production-farming", title: "Oilseeds Market Outlook", slug: "oilseeds-market-outlook", date: "Nov 2023", growth: "+5.4%", pages: 210, price: "$2,900" },

  // Agriculture & Food - Fertilizers & Agrochemicals
  { industry_id: 9, sub_industry_id: 59, industry: "agriculture-food", sub_industry: "fertilizers-agrochemicals", title: "Crop Protection Chemicals Market", slug: "crop-protection-chemicals", date: "Jan 2024", growth: "+5.2%", pages: 240, price: "$3,300" },
  { industry_id: 9, sub_industry_id: 59, industry: "agriculture-food", sub_industry: "fertilizers-agrochemicals", title: "Fertilizers Market Report", slug: "fertilizers-market-report", date: "Dec 2023", growth: "+4.8%", pages: 215, price: "$3,000" },
  { industry_id: 9, sub_industry_id: 59, industry: "agriculture-food", sub_industry: "fertilizers-agrochemicals", title: "Biopesticides Market Analysis", slug: "biopesticides-market", date: "Nov 2023", growth: "+12.4%", pages: 195, price: "$2,800" },

  // Agriculture & Food - Livestock & Animal Farming
  { industry_id: 9, sub_industry_id: 60, industry: "agriculture-food", sub_industry: "livestock-animal-farming", title: "Livestock Production Market Report", slug: "livestock-production-market", date: "Jan 2024", growth: "+4.4%", pages: 255, price: "$3,400" },
  { industry_id: 9, sub_industry_id: 60, industry: "agriculture-food", sub_industry: "livestock-animal-farming", title: "Animal Feed Market Analysis", slug: "animal-feed-market", date: "Dec 2023", growth: "+5.2%", pages: 225, price: "$3,100" },
  { industry_id: 9, sub_industry_id: 60, industry: "agriculture-food", sub_industry: "livestock-animal-farming", title: "Poultry Farming Market Outlook", slug: "poultry-farming-outlook", date: "Nov 2023", growth: "+5.8%", pages: 200, price: "$2,800" },

  // Agriculture & Food - Organic & Sustainable Agriculture
  { industry_id: 9, sub_industry_id: 61, industry: "agriculture-food", sub_industry: "organic-sustainable-agriculture", title: "Organic Farming Market Report", slug: "organic-farming-market", date: "Jan 2024", growth: "+12.8%", pages: 230, price: "$3,200" },
  { industry_id: 9, sub_industry_id: 61, industry: "agriculture-food", sub_industry: "organic-sustainable-agriculture", title: "Sustainable Agriculture Outlook", slug: "sustainable-agriculture", date: "Dec 2023", growth: "+11.4%", pages: 205, price: "$2,900" },
  { industry_id: 9, sub_industry_id: 61, industry: "agriculture-food", sub_industry: "organic-sustainable-agriculture", title: "Organic Food Market Analysis", slug: "organic-food-analysis", date: "Nov 2023", growth: "+10.6%", pages: 185, price: "$2,700" },

  // Agriculture & Food - Seeds & Plant Breeding
  { industry_id: 9, sub_industry_id: 62, industry: "agriculture-food", sub_industry: "seeds-plant-breeding", title: "Commercial Seeds Market Report", slug: "commercial-seeds-market", date: "Jan 2024", growth: "+8.2%", pages: 245, price: "$3,300" },
  { industry_id: 9, sub_industry_id: 62, industry: "agriculture-food", sub_industry: "seeds-plant-breeding", title: "GM Crops Market Analysis", slug: "gm-crops-market", date: "Dec 2023", growth: "+6.8%", pages: 215, price: "$3,000" },
  { industry_id: 9, sub_industry_id: 62, industry: "agriculture-food", sub_industry: "seeds-plant-breeding", title: "Seed Treatment Market Outlook", slug: "seed-treatment-market", date: "Nov 2023", growth: "+7.6%", pages: 195, price: "$2,800" },

  // BFSI - Banking
  { industry_id: 10, sub_industry_id: 63, industry: "bfsi", sub_industry: "banking", title: "Global Banking Market Report", slug: "banking-market-report", date: "Jan 2024", growth: "+6.2%", pages: 275, price: "$3,700" },
  { industry_id: 10, sub_industry_id: 63, industry: "bfsi", sub_industry: "banking", title: "Digital Banking Transformation Report", slug: "digital-banking-transformation", date: "Dec 2023", growth: "+14.8%", pages: 230, price: "$3,200" },
  { industry_id: 10, sub_industry_id: 63, industry: "bfsi", sub_industry: "banking", title: "Retail Banking Market Outlook", slug: "retail-banking-outlook", date: "Nov 2023", growth: "+5.4%", pages: 205, price: "$2,900" },

  // BFSI - Capital Markets & Investment Services
  { industry_id: 10, sub_industry_id: 64, industry: "bfsi", sub_industry: "capital-markets-investment", title: "Capital Markets Technology Report", slug: "capital-markets-technology", date: "Jan 2024", growth: "+7.2%", pages: 260, price: "$3,600" },
  { industry_id: 10, sub_industry_id: 64, industry: "bfsi", sub_industry: "capital-markets-investment", title: "Asset Management Market Analysis", slug: "asset-management-analysis", date: "Dec 2023", growth: "+6.8%", pages: 230, price: "$3,200" },
  { industry_id: 10, sub_industry_id: 64, industry: "bfsi", sub_industry: "capital-markets-investment", title: "Investment Banking Trends", slug: "investment-banking-trends", date: "Nov 2023", growth: "+5.6%", pages: 210, price: "$3,000" },

  // BFSI - Financial Technology (FinTech)
  { industry_id: 10, sub_industry_id: 65, industry: "bfsi", sub_industry: "fintech", title: "Global FinTech Market Analysis", slug: "fintech-market-analysis", date: "Jan 2024", growth: "+20.4%", pages: 260, price: "$3,600" },
  { industry_id: 10, sub_industry_id: 65, industry: "bfsi", sub_industry: "fintech", title: "Neobanks Market Report", slug: "neobanks-market-report", date: "Dec 2023", growth: "+24.6%", pages: 225, price: "$3,200" },
  { industry_id: 10, sub_industry_id: 65, industry: "bfsi", sub_industry: "fintech", title: "Embedded Finance Outlook", slug: "embedded-finance-outlook", date: "Nov 2023", growth: "+28.4%", pages: 200, price: "$2,900" },

  // BFSI - Insurance
  { industry_id: 10, sub_industry_id: 66, industry: "bfsi", sub_industry: "insurance", title: "Global Insurance Market Report", slug: "insurance-market-report", date: "Jan 2024", growth: "+5.8%", pages: 265, price: "$3,600" },
  { industry_id: 10, sub_industry_id: 66, industry: "bfsi", sub_industry: "insurance", title: "Insurtech Market Analysis", slug: "insurtech-market-analysis", date: "Dec 2023", growth: "+18.4%", pages: 230, price: "$3,200" },
  { industry_id: 10, sub_industry_id: 66, industry: "bfsi", sub_industry: "insurance", title: "Health Insurance Market Outlook", slug: "health-insurance-outlook", date: "Nov 2023", growth: "+7.2%", pages: 205, price: "$2,900" },

  // BFSI - Payments & Money Transfer
  { industry_id: 10, sub_industry_id: 67, industry: "bfsi", sub_industry: "payments-money-transfer", title: "Digital Payments Market Report", slug: "digital-payments-market", date: "Jan 2024", growth: "+15.2%", pages: 250, price: "$3,400" },
  { industry_id: 10, sub_industry_id: 67, industry: "bfsi", sub_industry: "payments-money-transfer", title: "Mobile Payments Outlook", slug: "mobile-payments-outlook", date: "Dec 2023", growth: "+18.6%", pages: 220, price: "$3,100" },
  { industry_id: 10, sub_industry_id: 67, industry: "bfsi", sub_industry: "payments-money-transfer", title: "Cross-Border Payments Market", slug: "cross-border-payments", date: "Nov 2023", growth: "+12.4%", pages: 195, price: "$2,800" },

  // BFSI - Risk Management & Compliance
  { industry_id: 10, sub_industry_id: 68, industry: "bfsi", sub_industry: "risk-management-compliance", title: "RegTech Market Report", slug: "regtech-market-report", date: "Jan 2024", growth: "+12.4%", pages: 235, price: "$3,200" },
  { industry_id: 10, sub_industry_id: 68, industry: "bfsi", sub_industry: "risk-management-compliance", title: "Compliance Solutions Market", slug: "compliance-solutions-market", date: "Dec 2023", growth: "+10.8%", pages: 210, price: "$2,900" },
  { industry_id: 10, sub_industry_id: 68, industry: "bfsi", sub_industry: "risk-management-compliance", title: "AML Solutions Market Analysis", slug: "aml-solutions-market", date: "Nov 2023", growth: "+14.2%", pages: 190, price: "$2,700" },

  // BFSI - Wealth Management & Private Banking
  { industry_id: 10, sub_industry_id: 69, industry: "bfsi", sub_industry: "wealth-management-private-banking", title: "Open Banking Ecosystem Outlook", slug: "open-banking-ecosystem", date: "Jan 2024", growth: "+16.2%", pages: 215, price: "$3,000" },
  { industry_id: 10, sub_industry_id: 69, industry: "bfsi", sub_industry: "wealth-management-private-banking", title: "Robo-Advisory Market Report", slug: "robo-advisory-market", date: "Dec 2023", growth: "+22.4%", pages: 195, price: "$2,800" },
  { industry_id: 10, sub_industry_id: 69, industry: "bfsi", sub_industry: "wealth-management-private-banking", title: "Private Banking Market Analysis", slug: "private-banking-analysis", date: "Nov 2023", growth: "+8.6%", pages: 180, price: "$2,600" },

  // Aerospace & Defense - Aerospace Components & MRO
  { industry_id: 11, sub_industry_id: 70, industry: "aerospace-defense", sub_industry: "aerospace-components-mro", title: "Aerospace MRO Market Report", slug: "aerospace-mro-market", date: "Jan 2024", growth: "+5.8%", pages: 255, price: "$3,500" },
  { industry_id: 11, sub_industry_id: 70, industry: "aerospace-defense", sub_industry: "aerospace-components-mro", title: "Aircraft Engine MRO Market", slug: "aircraft-engine-mro", date: "Dec 2023", growth: "+6.4%", pages: 225, price: "$3,200" },
  { industry_id: 11, sub_industry_id: 70, industry: "aerospace-defense", sub_industry: "aerospace-components-mro", title: "Aerospace Parts Market Analysis", slug: "aerospace-parts-analysis", date: "Nov 2023", growth: "+5.2%", pages: 200, price: "$2,900" },

  // Aerospace & Defense - Cybersecurity & Defense IT
  { industry_id: 11, sub_industry_id: 71, industry: "aerospace-defense", sub_industry: "cybersecurity-defense-it", title: "Defense Cybersecurity Market Report", slug: "defense-cybersecurity-market", date: "Jan 2024", growth: "+10.4%", pages: 245, price: "$3,400" },
  { industry_id: 11, sub_industry_id: 71, industry: "aerospace-defense", sub_industry: "cybersecurity-defense-it", title: "Military Communications Market", slug: "military-communications", date: "Dec 2023", growth: "+8.6%", pages: 220, price: "$3,100" },
  { industry_id: 11, sub_industry_id: 71, industry: "aerospace-defense", sub_industry: "cybersecurity-defense-it", title: "Defense IT Infrastructure", slug: "defense-it-infrastructure", date: "Nov 2023", growth: "+9.2%", pages: 195, price: "$2,800" },

  // Aerospace & Defense - Defense Systems & Weapons
  { industry_id: 11, sub_industry_id: 72, industry: "aerospace-defense", sub_industry: "defense-systems-weapons", title: "Defense Modernization Programs Report", slug: "defense-modernization-programs", date: "Jan 2024", growth: "+8.9%", pages: 245, price: "$3,400" },
  { industry_id: 11, sub_industry_id: 72, industry: "aerospace-defense", sub_industry: "defense-systems-weapons", title: "Missile Defense Systems Market", slug: "missile-defense-systems", date: "Dec 2023", growth: "+7.8%", pages: 225, price: "$3,200" },
  { industry_id: 11, sub_industry_id: 72, industry: "aerospace-defense", sub_industry: "defense-systems-weapons", title: "Artillery & Ammunition Market", slug: "artillery-ammunition-market", date: "Nov 2023", growth: "+6.4%", pages: 200, price: "$2,900" },

  // Aerospace & Defense - Military Aircraft & Aviation
  { industry_id: 11, sub_industry_id: 73, industry: "aerospace-defense", sub_industry: "military-aircraft-aviation", title: "Global Aerospace Market Outlook", slug: "aerospace-market-outlook", date: "Jan 2024", growth: "+6.7%", pages: 270, price: "$3,700" },
  { industry_id: 11, sub_industry_id: 73, industry: "aerospace-defense", sub_industry: "military-aircraft-aviation", title: "Fighter Aircraft Market Report", slug: "fighter-aircraft-market", date: "Dec 2023", growth: "+5.8%", pages: 240, price: "$3,400" },
  { industry_id: 11, sub_industry_id: 73, industry: "aerospace-defense", sub_industry: "military-aircraft-aviation", title: "Military Helicopters Market", slug: "military-helicopters-market", date: "Nov 2023", growth: "+6.2%", pages: 215, price: "$3,100" },

  // Aerospace & Defense - Naval Systems & Shipbuilding
  { industry_id: 11, sub_industry_id: 74, industry: "aerospace-defense", sub_industry: "naval-systems-shipbuilding", title: "Naval Shipbuilding Market Report", slug: "naval-shipbuilding-market", date: "Jan 2024", growth: "+4.8%", pages: 255, price: "$3,500" },
  { industry_id: 11, sub_industry_id: 74, industry: "aerospace-defense", sub_industry: "naval-systems-shipbuilding", title: "Submarine Market Analysis", slug: "submarine-market-analysis", date: "Dec 2023", growth: "+5.4%", pages: 225, price: "$3,200" },
  { industry_id: 11, sub_industry_id: 74, industry: "aerospace-defense", sub_industry: "naval-systems-shipbuilding", title: "Naval Electronics Market", slug: "naval-electronics-market", date: "Nov 2023", growth: "+6.8%", pages: 200, price: "$2,900" },

  // Aerospace & Defense - Space & Satellite Systems
  { industry_id: 11, sub_industry_id: 75, industry: "aerospace-defense", sub_industry: "space-satellite-systems", title: "Commercial Space Industry Analysis", slug: "commercial-space-industry", date: "Jan 2024", growth: "+19.5%", pages: 230, price: "$3,300" },
  { industry_id: 11, sub_industry_id: 75, industry: "aerospace-defense", sub_industry: "space-satellite-systems", title: "Satellite Communications Market", slug: "satellite-communications", date: "Dec 2023", growth: "+11.2%", pages: 210, price: "$3,000" },
  { industry_id: 11, sub_industry_id: 75, industry: "aerospace-defense", sub_industry: "space-satellite-systems", title: "Space Launch Services Market", slug: "space-launch-services", date: "Nov 2023", growth: "+14.8%", pages: 195, price: "$2,800" },

  // Aerospace & Defense - Unmanned Systems & Drones
  { industry_id: 11, sub_industry_id: 76, industry: "aerospace-defense", sub_industry: "unmanned-systems-drones", title: "Military Drones Market Report", slug: "military-drones-market", date: "Jan 2024", growth: "+15.2%", pages: 240, price: "$3,300" },
  { industry_id: 11, sub_industry_id: 76, industry: "aerospace-defense", sub_industry: "unmanned-systems-drones", title: "Commercial Drones Market Outlook", slug: "commercial-drones-outlook", date: "Dec 2023", growth: "+18.4%", pages: 215, price: "$3,000" },
  { industry_id: 11, sub_industry_id: 76, industry: "aerospace-defense", sub_industry: "unmanned-systems-drones", title: "Counter-Drone Systems Market", slug: "counter-drone-systems", date: "Nov 2023", growth: "+21.6%", pages: 195, price: "$2,800" },
];

/* =====================================================
   HELPER FUNCTIONS
===================================================== */

// Get all reports
export const getAllReports = (): Report[] => reportsData;

// Get reports by industry slug
export const getReportsByIndustry = (industrySlug: string): Report[] => {
  return reportsData.filter(r => r.industry === industrySlug);
};

// Get reports by sub-industry slug
export const getReportsBySubIndustry = (subIndustrySlug: string): Report[] => {
  return reportsData.filter(r => r.sub_industry === subIndustrySlug);
};

// Get single report by full path (industry/subIndustry/slug)
export const getReportByPath = (industry: string, subIndustry: string, slug: string): Report | undefined => {
  return reportsData.find(r => 
    r.industry === industry && 
    r.sub_industry === subIndustry && 
    r.slug === slug
  );
};

// Get report by slug (simple lookup)
export const getReportBySlug = (slug: string): Report | undefined => {
  return reportsData.find(r => r.slug === slug);
};

// Get total reports count
export const getTotalReportsCount = (): number => reportsData.length;

// Get reports count by industry
export const getReportsCountByIndustry = (industrySlug: string): number => {
  return reportsData.filter(r => r.industry === industrySlug).length;
};

// Get reports count by sub-industry
export const getReportsCountBySubIndustry = (subIndustrySlug: string): number => {
  return reportsData.filter(r => r.sub_industry === subIndustrySlug).length;
};
