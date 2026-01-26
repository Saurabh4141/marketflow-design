import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  Calendar,
  Globe,
  Grid3X3,
  Download,
  ShoppingCart,
  ChevronRight,
  CheckCircle,
  Headphones,
  TrendingUp,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronUp,
  FileText,
  User,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";
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

// Section Header Component
const SectionHeader = ({
  title,
  expanded,
  onToggle,
}: {
  title: string;
  expanded?: boolean;
  onToggle?: () => void;
}) => (
  <div
    className="flex items-center justify-between p-5 cursor-pointer"
    onClick={onToggle}
  >
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    {onToggle && (
      <button className="text-gray-400 hover:text-gray-600">
        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
    )}
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
  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600">
    <Icon className="w-4 h-4" />
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

const ReportDetail = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [marketSnapshotExpanded, setMarketSnapshotExpanded] = useState(true);
  const [segmentationExpanded, setSegmentationExpanded] = useState(true);
  const [chartsExpanded, setChartsExpanded] = useState(true);
  const [relatedExpanded, setRelatedExpanded] = useState(true);
  const [tocExpanded, setTocExpanded] = useState(true);
  const [competitiveExpanded, setCompetitiveExpanded] = useState(true);

  return (
    <PageLayout>
      {/* Page Background */}
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-sky-50/50 to-white">
        {/* Hero Section */}
        <section className="pt-28 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Left: Title & Meta */}
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Zoster Vaccine Live Market Analysis
                </h1>
                <p className="text-gray-500 mb-4">
                  Global Industry Trends, Share, Size, and Forecast 2024–2030
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <InfoBadge icon={Calendar} text="2023" />
                  <InfoBadge icon={Globe} text="Global" />
                  <InfoBadge icon={Grid3X3} text="Forecast 2024–2030" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white rounded-lg font-medium hover:bg-[#162d4d] transition-colors">
                    <Download className="w-4 h-4" />
                    Download Sample
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white rounded-lg font-medium hover:bg-[#ea580c] transition-colors">
                    Buy Now
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-3 text-gray-700 hover:text-gray-900 font-medium">
                    Request Customization
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Report Image */}
              <div className="lg:w-72">
                <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg p-4 flex items-center justify-center h-40">
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

            {/* Tabs */}
            <div className="mt-8 border-b border-gray-200">
              <div className="flex gap-0 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
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
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* LEFT COLUMN */}
              <div className="flex-1 space-y-6">
                {/* Report Description */}
                <Card>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-[#1e3a5f] rounded-full"></div>
                      <span className="text-sm font-semibold text-[#1e3a5f]">
                        Key Market Highlights
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      An in-depth overview of the Zoster Vaccine Live market, highlighting key drivers, restraints., challenges,
                      and opportunities shaping the market landscape. o. Learn about the key industry trends, competitive
                      environment, and growth prospects.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        Trusted by industry professionals worldwide
                      </div>
                      <button className="inline-flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card>

                {/* Market Snapshot */}
                <Card>
                  <SectionHeader
                    title="Market Snapshot"
                    expanded={marketSnapshotExpanded}
                    onToggle={() => setMarketSnapshotExpanded(!marketSnapshotExpanded)}
                  />
                  {marketSnapshotExpanded && (
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                          <div className="flex items-center gap-2 mb-2">
                            <BarChart3 className="w-5 h-5 text-[#1e3a5f]" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            <span className="text-[#1e3a5f]">$3.5</span> Billion
                          </div>
                          <div className="text-sm text-gray-500">(2023)</div>
                        </div>
                        <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-[#1e3a5f]" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">7.8%</div>
                          <div className="text-sm text-gray-500">CAGR (2024–2030)</div>
                        </div>
                        <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-5 h-5 text-[#1e3a5f]" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">2024–2030</div>
                          <div className="text-sm text-gray-500">Forecast Period</div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Market Segmentation */}
                <Card>
                  <SectionHeader
                    title="Market Segmentation"
                    expanded={segmentationExpanded}
                    onToggle={() => setSegmentationExpanded(!segmentationExpanded)}
                  />
                  {segmentationExpanded && (
                    <div className="px-6 pb-6">
                      {/* Segment Tab */}
                      <button className="flex items-center justify-between w-full px-4 py-3 mb-4 bg-[#1e3a5f] text-white rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">+</span>
                          <span className="font-medium">By Product</span>
                        </div>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Monovalent Vaccine */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                          <span className="font-semibold text-gray-900">Monovalent Vaccine</span>
                        </div>
                        <ul className="ml-5 space-y-1 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                            <span>Segmented vaccines slita to.forget the storgested vaccines sessiortaity of vel visally caoster witus</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                            <span>Combination cace bans witus rdnottles regmesttiitting vericulo ccaves and essis abolte seisations.</span>
                          </li>
                        </ul>
                      </div>

                      {/* Combination Vaccine */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                          <span className="font-semibold text-gray-900">Combination Vaccine</span>
                        </div>
                        <p className="ml-5 text-sm text-gray-600">
                          Combined regmsiorter pe stegmat wolization to target both sliltirallas zoster, and other disasees,
                          tegnioalte, saeetirm atorimatienis sachilaiting cesssted the insuse the marketes.
                        </p>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Charts & Data */}
                <Card>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="text-lg font-semibold text-gray-900">Charts & Data</h3>
                    <button className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                      <Globe className="w-4 h-4" />
                      See filars more
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  {chartsExpanded && (
                    <div className="px-6 pb-6">
                      {/* CAGR Section */}
                      <button className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-900">
                        <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                        CAGR (2024–2030)
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="flex gap-6">
                        {/* Bar Chart */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 w-4">1</span>
                            <span className="text-sm text-gray-600 w-24">North America</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-[#1e3a5f] h-full rounded-full" style={{ width: "35%" }}></div>
                            </div>
                            <span className="text-sm text-gray-600 w-10">35%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 w-4">2</span>
                            <span className="text-sm text-gray-600 w-24">Europe</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-[#1e3a5f] h-full rounded-full" style={{ width: "21%" }}></div>
                            </div>
                            <span className="text-sm text-gray-600 w-10">21%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 w-4">3</span>
                            <span className="text-sm text-gray-600 w-24">Asia Pacific</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-[#1e3a5f] h-full rounded-full" style={{ width: "20%" }}></div>
                            </div>
                            <span className="text-sm text-gray-600 w-10">20%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-600 w-4">4</span>
                            <span className="text-sm text-gray-600 w-24">Rest of the Worid</span>
                            <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-[#1e3a5f] h-full rounded-full" style={{ width: "17%" }}></div>
                            </div>
                            <span className="text-sm text-gray-600 w-10">17%</span>
                          </div>
                        </div>

                        {/* World Map Placeholder */}
                        <div className="w-48 h-32 bg-sky-50 rounded-xl flex items-center justify-center">
                          <Globe className="w-16 h-16 text-sky-200" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <FileText className="w-4 h-4" />
                          Imessed ase sarteanaos afatr musetages.
                        </div>
                        <button className="inline-flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                          View Charts & Data
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Related Reports */}
                <Card>
                  <SectionHeader
                    title="Related Reports"
                    expanded={relatedExpanded}
                    onToggle={() => setRelatedExpanded(!relatedExpanded)}
                  />
                  {relatedExpanded && (
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-2 gap-4">
                        {/* HPV Report */}
                        <div className="rounded-xl overflow-hidden border border-gray-100">
                          <div className="h-32 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                            <div className="w-12 h-16 bg-white rounded shadow-sm flex items-center justify-center">
                              <FileText className="w-6 h-6 text-sky-400" />
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-1">HPV Vaccine Market</h4>
                            <p className="text-sm text-gray-500 mb-3">Norrial parmes gilex sterocapte .:</p>
                            <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white text-sm rounded-lg hover:bg-[#162d4d]">
                              View Report
                            </button>
                          </div>
                        </div>

                        {/* GSK Report */}
                        <div className="rounded-xl overflow-hidden border border-gray-100">
                          <div className="h-32 bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center">
                            <div className="w-12 h-16 bg-white rounded shadow-sm flex items-center justify-center">
                              <FileText className="w-6 h-6 text-sky-400" />
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900">GSK</h4>
                              <span className="text-lg font-bold text-[#1e3a5f]">$950 Million</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">Norrial parmes giaut Darroif paetenrs preccine</p>
                            <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#1e3a5f] text-white text-sm rounded-lg hover:bg-[#162d4d]">
                              View Charts & Data
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* RIGHT COLUMN */}
              <div className="lg:w-80 space-y-6">
                {/* Buy Now Panel */}
                <Card className="sticky top-28">
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Buy Now</h3>
                    <div className="space-y-3">
                      <button className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <span className="font-medium text-gray-700">Download Sample</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <span className="font-medium text-gray-700">Request Customization</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                        Secure Payment
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Headphones className="w-4 h-4 text-gray-400" />
                        24/7 Support
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <SectionHeader
                    title="Table of Contents"
                    expanded={tocExpanded}
                    onToggle={() => setTocExpanded(!tocExpanded)}
                  />
                  {tocExpanded && (
                    <div className="px-5 pb-5">
                      <div className="space-y-2">
                        {[
                          "Introduction",
                          "Market Overview",
                          "Market Dynamics",
                          "Competitive Landscape",
                          "Regional Segmentation",
                          "By Product",
                          "By Product",
                        ].map((item, index) => (
                          <button
                            key={index}
                            className="flex items-center justify-between w-full px-3 py-2 text-left hover:bg-gray-50 rounded-lg"
                          >
                            <span className="text-sm text-gray-600">
                              {index + 1}. {item}
                            </span>
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                          </button>
                        ))}
                      </div>
                      <button className="inline-flex items-center gap-1 mt-4 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 w-full justify-center">
                        View Full TOC
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </Card>

                {/* Competitive Analysis */}
                <Card>
                  <SectionHeader
                    title="Competitive Analysis"
                    expanded={competitiveExpanded}
                    onToggle={() => setCompetitiveExpanded(!competitiveExpanded)}
                  />
                  {competitiveExpanded && (
                    <div className="px-5 pb-5">
                      <div className="flex gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                          <User className="w-6 h-6 text-[#1e3a5f]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm italic text-gray-500 mb-1">Expert Insight:</div>
                          <p className="text-sm text-gray-600">
                            The Zoster Vaccine Live market is set to expand significantly with
                            advancements in aaccine technology and incressing shingles casse. worldwide.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <button className="w-full px-4 py-3 bg-[#f97316] text-white rounded-lg font-medium hover:bg-[#ea580c] flex items-center justify-center gap-2">
                          Buy Now
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                          <span className="font-medium text-gray-700">Request Customization</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-gray-400" />
                          Secure Payment
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Headphones className="w-4 h-4 text-gray-400" />
                          24/7 Support
                        </div>
                      </div>
                    </div>
                  )}
                </Card>

                {/* Get in Touch */}
                <Card className="bg-[#1e3a5f] border-0">
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-4">Get in Touch with Us</h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-3 bg-[#f97316] text-white rounded-lg font-medium hover:bg-[#ea580c] flex items-center justify-center gap-2">
                        Buy Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="flex items-center justify-between w-full px-4 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10">
                        <span className="font-medium">Request Customization</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-1.5 text-sm text-white/70">
                        <CheckCircle className="w-4 h-4" />
                        Seater Payment
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-white/70">
                        <Headphones className="w-4 h-4" />
                        24/7 Support
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/20 text-sm text-white/60">
                      <AlertTriangle className="w-4 h-4" />
                      Bleag waaf in arinhemcalhere worlost, sow recintorste foy
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="container mx-auto px-4 pb-8">
          <p className="text-center text-sm text-gray-500">
            The is UX PPs is $t3P. Before woit to undersand the right. viitual, vaiste enaings exptihli display 's heur.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReportDetail;
