import React, { useState, useEffect, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import {
  Calendar,
  Globe,
  Grid3X3,
  Download,
  ChevronRight,
  CheckCircle,
  Headphones,
  TrendingUp,
  BarChart3,
  Shield,
  ChevronDown,
  FileText,
  User,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable Card Component
const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "bg-white rounded-xl shadow-sm border border-gray-100",
      className
    )}
  >
    {children}
  </div>
);

// Info Badge Component
const InfoBadge = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600">
    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
    {text}
  </span>
);

// Tabs Component
const tabs = [
  "Description",
  "Segmentation",
  "TOC",
  "Charts",
  "Competitive Analysis",
  "Analyst View",
  "FAQ",
];

// Related Reports Data
const relatedReports = [
  {
    slug: "/report/hpv-vaccine-market",
    title: "HPV Vaccine Market",
    description: "Global market analysis and forecast",
    image: "/placeholder.svg",
  },
  {
    slug: "/report/gsk-vaccine-analysis",
    title: "GSK Vaccine Portfolio",
    description: "Comprehensive portfolio analysis",
    marketSize: "$950 Million",
    image: "/placeholder.svg",
  },
  {
    slug: "/report/pneumonia-vaccine-market",
    title: "Pneumonia Vaccine Market",
    description: "Market trends and growth forecast",
    image: "/placeholder.svg",
  },
];

const ReportDetail = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsPlaceholderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (tabsPlaceholderRef.current) {
        const rect = tabsPlaceholderRef.current.getBoundingClientRect();
        setIsTabsSticky(rect.top <= 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to content when tab changes
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    
    // Smooth scroll to content section
    if (contentRef.current) {
      const offset = isTabsSticky ? 120 : 80;
      const elementPosition = contentRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Tab content render function
  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Report Description */}
            <Card>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-5 sm:h-6 bg-[#1e3a5f] rounded-full"></div>
                  <span className="text-xs sm:text-sm font-semibold text-[#1e3a5f]">
                    Key Market Highlights
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  An in-depth overview of the Zoster Vaccine Live market, highlighting key drivers, restraints, challenges,
                  and opportunities shaping the market landscape. Learn about the key industry trends, competitive
                  environment, and growth prospects.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <Shield className="w-4 h-4" />
                    Trusted by industry professionals worldwide
                  </div>
                  <button className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>

            {/* Market Snapshot */}
            <Card>
              <div className="p-4 sm:p-5 border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Market Snapshot</h3>
              </div>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5 text-[#1e3a5f]" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      <span className="text-[#1e3a5f]">$3.5</span> Billion
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">(2023)</div>
                  </div>
                  <div className="p-3 sm:p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-[#1e3a5f]" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">7.8%</div>
                    <div className="text-xs sm:text-sm text-gray-500">CAGR (2024–2030)</div>
                  </div>
                  <div className="p-3 sm:p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-[#1e3a5f]" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">2024–2030</div>
                    <div className="text-xs sm:text-sm text-gray-500">Forecast Period</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case "Segmentation":
        return (
          <Card>
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Market Segmentation</h3>
            </div>
            <div className="p-4 sm:p-6">
              {/* By Product */}
              <div className="mb-6">
                <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 mb-4 bg-[#1e3a5f] text-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">+</span>
                    <span className="text-sm sm:text-base font-medium">By Product</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">Monovalent Vaccine</span>
                  </div>
                  <ul className="ml-4 sm:ml-5 space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>Single-antigen vaccines designed to target the varicella-zoster virus specifically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>Higher efficacy rates in preventing shingles outbreaks in elderly populations</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">Combination Vaccine</span>
                  </div>
                  <ul className="ml-4 sm:ml-5 space-y-2 text-xs sm:text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>Multi-antigen formulations targeting multiple diseases in single administration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span>Cost-effective solution for healthcare providers and patients</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* By End User */}
              <div className="mb-6">
                <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 mb-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">+</span>
                    <span className="text-sm sm:text-base font-medium">By End User</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* By Region */}
              <div>
                <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 mb-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">+</span>
                    <span className="text-sm sm:text-base font-medium">By Region</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        );

      case "TOC":
        return (
          <Card>
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Table of Contents</h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3">
                {[
                  { num: 1, title: "Introduction", sub: ["1.1 Research Objectives", "1.2 Market Definition", "1.3 Scope of Study"] },
                  { num: 2, title: "Executive Summary", sub: ["2.1 Key Findings", "2.2 Market Outlook"] },
                  { num: 3, title: "Market Overview", sub: ["3.1 Market Description", "3.2 Value Chain Analysis", "3.3 Porter's Five Forces"] },
                  { num: 4, title: "Market Dynamics", sub: ["4.1 Drivers", "4.2 Restraints", "4.3 Opportunities", "4.4 Challenges"] },
                  { num: 5, title: "Competitive Landscape", sub: ["5.1 Company Profiles", "5.2 Market Share Analysis", "5.3 Strategic Developments"] },
                  { num: 6, title: "Regional Analysis", sub: ["6.1 North America", "6.2 Europe", "6.3 Asia Pacific", "6.4 Rest of World"] },
                  { num: 7, title: "Market Segmentation", sub: ["7.1 By Product", "7.2 By End User", "7.3 By Distribution Channel"] },
                ].map((item) => (
                  <div key={item.num} className="border border-gray-100 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">
                        {item.num}. {item.title}
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                    <ul className="ml-3 sm:ml-4 space-y-1">
                      {item.sub.map((subItem, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-gray-600">{subItem}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center gap-1 mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1e3a5f] text-white rounded-lg text-sm sm:text-base font-medium hover:bg-[#162d4d] w-full justify-center">
                Download Full TOC
                <Download className="w-4 h-4" />
              </button>
            </div>
          </Card>
        );

      case "Charts":
        return (
          <Card>
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Charts & Data</h3>
                <button className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-500 hover:text-gray-700">
                  <Globe className="w-4 h-4" />
                  See all charts
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              {/* Regional Market Share */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  <span className="text-sm sm:text-base font-semibold text-gray-900">Regional Market Share (2024–2030)</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                  <div className="flex-1 space-y-3">
                    {[
                      { rank: 1, region: "North America", value: 35 },
                      { rank: 2, region: "Europe", value: 28 },
                      { rank: 3, region: "Asia Pacific", value: 22 },
                      { rank: 4, region: "Latin America", value: 10 },
                      { rank: 5, region: "Middle East & Africa", value: 5 },
                    ].map((item) => (
                      <div key={item.rank} className="flex items-center gap-2 sm:gap-3">
                        <span className="text-xs sm:text-sm text-gray-600 w-4">{item.rank}</span>
                        <span className="text-xs sm:text-sm text-gray-600 w-24 sm:w-36 truncate">{item.region}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-2.5 sm:h-3 overflow-hidden">
                          <div className="bg-[#1e3a5f] h-full rounded-full" style={{ width: `${item.value}%` }}></div>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-900 w-10 sm:w-12 text-right">{item.value}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="w-full lg:w-48 h-32 sm:h-40 bg-sky-50 rounded-xl flex items-center justify-center">
                    <Globe className="w-16 sm:w-20 h-16 sm:h-20 text-sky-200" />
                  </div>
                </div>
              </div>

              {/* Growth Trends */}
              <div className="mb-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                  <span className="text-sm sm:text-base font-semibold text-gray-900">Market Growth Trend (2020–2030)</span>
                </div>
                <div className="h-40 sm:h-48 bg-gradient-to-t from-sky-50 to-white rounded-xl border border-sky-100 flex items-end justify-around p-3 sm:p-4">
                  {[30, 45, 52, 60, 68, 75, 82, 88, 95, 100, 108].map((height, idx) => (
                    <div key={idx} className="w-4 sm:w-6 bg-[#1e3a5f] rounded-t" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-gray-500">
                  <span>2020</span>
                  <span>2022</span>
                  <span>2024</span>
                  <span>2026</span>
                  <span>2028</span>
                  <span>2030</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <FileText className="w-4 h-4" />
                  Interactive charts available in full report
                </div>
                <button className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View All Charts
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        );

      case "Competitive Analysis":
        return (
          <Card>
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Competitive Analysis</h3>
            </div>
            <div className="p-4 sm:p-6">
              {/* Key Players */}
              <div className="mb-6">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">Key Market Players</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { name: "Merck & Co.", share: "32%", revenue: "$1.12B" },
                    { name: "GlaxoSmithKline", share: "28%", revenue: "$950M" },
                    { name: "Sanofi Pasteur", share: "18%", revenue: "$630M" },
                    { name: "Pfizer Inc.", share: "12%", revenue: "$420M" },
                  ].map((company, idx) => (
                    <div key={idx} className="p-3 sm:p-4 border border-gray-100 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm sm:text-base font-semibold text-gray-900">{company.name}</span>
                        <span className="text-xs sm:text-sm text-[#1e3a5f] font-medium">{company.share}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500">Revenue: {company.revenue}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Developments */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">Recent Strategic Developments</h4>
                <div className="space-y-3">
                  {[
                    { date: "Q4 2024", event: "Merck launches next-generation Zoster vaccine in EU markets" },
                    { date: "Q3 2024", event: "GSK receives FDA approval for expanded age indications" },
                    { date: "Q2 2024", event: "Sanofi announces partnership for Asian market expansion" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium text-[#1e3a5f] whitespace-nowrap">{item.date}</span>
                      <span className="text-xs sm:text-sm text-gray-600">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );

      case "Analyst View":
        return (
          <Card>
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Analyst View</h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex gap-3 sm:gap-4 mb-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 sm:w-8 h-6 sm:h-8 text-[#1e3a5f]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900">Dr. Sarah Mitchell</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Lead Healthcare Analyst</p>
                  <p className="text-xs sm:text-sm text-gray-500">15+ years industry experience</p>
                </div>
              </div>

              <div className="bg-sky-50 rounded-xl p-4 sm:p-5 mb-6">
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  "The Zoster Vaccine Live market is poised for significant growth, driven by aging demographics worldwide 
                  and increasing awareness of shingles prevention. We anticipate the market to reach $6.2 billion by 2030, 
                  with particularly strong growth in the Asia-Pacific region where vaccination rates are currently below 
                  optimal levels."
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">Key Insights</h4>
                {[
                  "Rising elderly population driving demand for preventive healthcare",
                  "Government immunization programs expanding in developing markets",
                  "Next-generation vaccines showing improved efficacy profiles",
                  "Price competition expected as patents expire in key markets",
                ].map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );

      case "FAQ":
        return (
          <Card>
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Frequently Asked Questions</h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {[
                  {
                    q: "What is the projected market size for Zoster Vaccine Live by 2030?",
                    a: "The global Zoster Vaccine Live market is projected to reach $6.2 billion by 2030, growing at a CAGR of 7.8% from 2024 to 2030."
                  },
                  {
                    q: "Which region dominates the Zoster Vaccine market?",
                    a: "North America currently holds the largest market share at 35%, driven by high healthcare spending and robust immunization programs for elderly populations."
                  },
                  {
                    q: "Who are the key players in the Zoster Vaccine market?",
                    a: "Major players include Merck & Co., GlaxoSmithKline, Sanofi Pasteur, and Pfizer Inc., collectively holding over 90% of the market share."
                  },
                  {
                    q: "What factors are driving market growth?",
                    a: "Key drivers include aging global population, increasing shingles awareness, expanding government vaccination programs, and technological advancements in vaccine development."
                  },
                  {
                    q: "What customization options are available for this report?",
                    a: "We offer customization for specific regions, competitive landscape deep-dives, additional company profiles, and custom forecast scenarios based on your requirements."
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="border border-gray-100 rounded-lg p-3 sm:p-4">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <PageLayout>
      {/* Page Background */}
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-50/50 to-white">
        {/* Hero Section */}
        <section className="pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* Left: Title & Meta */}
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Zoster Vaccine Live Market Analysis
                </h1>
                <p className="text-sm sm:text-base text-gray-500 mb-4">
                  Global Industry Trends, Share, Size, and Forecast 2024–2030
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <InfoBadge icon={Calendar} text="2023" />
                  <InfoBadge icon={Globe} text="Global" />
                  <InfoBadge icon={Grid3X3} text="Forecast 2024–2030" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#1e3a5f] text-white rounded-lg text-sm sm:text-base font-medium hover:bg-[#162d4d] transition-colors">
                    <Download className="w-4 h-4" />
                    Download Sample
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#f97316] text-white rounded-lg text-sm sm:text-base font-medium hover:bg-[#ea580c] transition-colors">
                    Buy Now
                  </button>
                  <button className="inline-flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 text-gray-700 hover:text-gray-900 text-sm sm:text-base font-medium">
                    Request Customization
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Report Image */}
              <div className="w-full sm:w-auto lg:w-72">
                <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 border border-gray-100">
                  <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg p-4 flex items-center justify-center h-32 sm:h-40">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-[#1e3a5f] mb-1">
                        Zoster Vaccine Live
                      </div>
                      <div className="text-[10px] text-gray-500">
                        Market report
                      </div>
                      <div className="text-[10px] text-gray-500">
                        2024 Edition
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Placeholder for sticky calculation */}
            <div ref={tabsPlaceholderRef} id="tabs-section" className="mt-6 sm:mt-8">
              {!isTabsSticky && (
                <div className="border-b border-gray-200">
                  <div className="flex gap-0 overflow-x-auto scrollbar-hide">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={cn(
                          "px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                          activeTab === tab
                            ? "border-[#1e3a5f] text-[#1e3a5f]"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        )}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sticky Tabs */}
        {isTabsSticky && (
          <div 
            ref={tabsRef}
            className="sticky top-0 z-50 w-full transition-all duration-300 bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          >
            <div className="container mx-auto px-4">
              <div className="flex gap-0 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={cn(
                      "px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                      activeTab === tab
                        ? "border-[#1e3a5f] text-[#1e3a5f]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <section className="pb-8 sm:pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
              {/* LEFT COLUMN - Tab Content */}
              <div ref={contentRef} className="flex-1 order-2 lg:order-1">
                {renderTabContent()}

                {/* Related Reports Section */}
                <Card className="mt-4 sm:mt-6">
                  <div className="p-4 sm:p-5 border-b border-gray-100">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Related Reports</h3>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {relatedReports.map((report) => (
                        <div key={report.slug} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                          <div className="h-28 sm:h-32 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                            <BarChart3 className="w-10 sm:w-12 h-10 sm:h-12 text-sky-300" />
                          </div>
                          <div className="p-3 sm:p-4">
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-1">{report.title}</h4>
                            <p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-1">{report.description}</p>
                            {report.marketSize && (
                              <p className="text-xs sm:text-sm font-medium text-[#1e3a5f] mb-3">{report.marketSize}</p>
                            )}
                            <Link 
                              to={`${report.slug}`}
                              className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 bg-[#1e3a5f] text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-[#162d4d] transition-colors"
                            >
                              View Report
                              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* RIGHT COLUMN - NOT STICKY */}
              <div className="w-full lg:w-80 space-y-4 sm:space-y-6 order-1 lg:order-2">
                {/* Buy Now Panel - NOT sticky as requested */}
                <Card>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Buy Now</h3>
                    <div className="space-y-3">
                      <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <span className="text-sm sm:text-base font-medium text-gray-700">Download Sample</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <span className="text-sm sm:text-base font-medium text-gray-700">Request Customization</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                        Secure Payment
                      </div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                        <Headphones className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                        24/7 Support
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Table of Contents Quick Links */}
                <Card className="hidden sm:block">
                  <div className="p-4 sm:p-5 border-b border-gray-100">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Quick Navigation</h3>
                  </div>
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3">
                    <div className="space-y-2">
                      {[
                        "Introduction",
                        "Market Overview",
                        "Market Dynamics",
                        "Competitive Landscape",
                        "Regional Segmentation",
                        "By Product",
                        "Methodology",
                      ].map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center justify-between w-full px-2 sm:px-3 py-2 text-left hover:bg-gray-50 rounded-lg"
                        >
                          <span className="text-xs sm:text-sm text-gray-600">
                            {index + 1}. {item}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-300" />
                        </button>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-1 mt-4 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 w-full justify-center">
                      View Full TOC
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </Card>

                {/* Expert Insight */}
                <Card className="hidden lg:block">
                  <div className="p-4 sm:p-5 border-b border-gray-100">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Expert Insight</h3>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex gap-3 mb-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 sm:w-6 h-5 sm:h-6 text-[#1e3a5f]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm text-gray-600">
                          "The Zoster Vaccine Live market is set to expand significantly with
                          advancements in vaccine technology and increasing shingles cases worldwide."
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#f97316] text-white rounded-lg text-sm sm:text-base font-medium hover:bg-[#ea580c] flex items-center justify-center gap-2">
                        Buy Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <span className="text-sm sm:text-base font-medium text-gray-700">Request Customization</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </Card>

                {/* Get in Touch */}
                <Card className="bg-[#1e3a5f] border-0">
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Get in Touch with Us</h3>
                    <div className="space-y-3">
                      <button className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-[#f97316] text-white rounded-lg text-sm sm:text-base font-medium hover:bg-[#ea580c] flex items-center justify-center gap-2">
                        Buy Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-between w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-white/30 rounded-lg text-white hover:bg-white/10">
                        <span className="text-sm sm:text-base font-medium">Request Customization</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-white/70">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4" />
                        Secure Payment
                      </div>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-white/70">
                        <Headphones className="w-3 sm:w-4 h-3 sm:h-4" />
                        24/7 Support
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20 text-xs sm:text-sm text-white/60">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      Contact us for bulk purchase discounts
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ReportDetail;
