import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { PaginationControls } from "@/components/ui/PaginationControls";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  BarChart3,
  Users,
  ChevronRight,
  ChevronDown,
  FileText,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  industries, 
  getIndustryBySlug, 
  getIndustryDetailBySlug,
  industryDetails 
} from "@/data/industries";

const categoryColors: Record<string, string> = {
  "Automobile & Transportation": "bg-cyan-100 text-cyan-700",
  "Consumer Products": "bg-purple-100 text-purple-700",
  "Food, Beverage & Nutrition": "bg-orange-100 text-orange-700",
  "Chemicals & Materials": "bg-green-100 text-green-700",
  "Technology": "bg-blue-100 text-blue-700",
  "Industrial Automation": "bg-slate-100 text-slate-700",
  "Services & Utilities": "bg-amber-100 text-amber-700",
  "Pharmaceutical": "bg-rose-100 text-rose-700",
  "Healthcare IT & Services": "bg-pink-100 text-pink-700",
  "Medical Devices & Consumables": "bg-red-100 text-red-700",
  "Medical Devices": "bg-rose-100 text-rose-700",
  "IT Security & Software": "bg-indigo-100 text-indigo-700",
  "Electronics & Semiconductors": "bg-violet-100 text-violet-700",
  "Agriculture": "bg-lime-100 text-lime-700",
  "Packaging & Transport": "bg-yellow-100 text-yellow-700",
  "Energy & Power": "bg-emerald-100 text-emerald-700",
  "Construction & Real Estate": "bg-stone-100 text-stone-700",
  "Daily Necessities": "bg-teal-100 text-teal-700",
  "Aerospace & Defense": "bg-sky-100 text-sky-700",
  "Financial Services": "bg-emerald-100 text-emerald-700",
};

const Industry = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const industry = slug ? getIndustryBySlug(slug) : null;
  const detail = slug ? getIndustryDetailBySlug(slug) : null;

  // Get all reports from all industries
  const allReports = useMemo(() => 
    Object.entries(industryDetails).flatMap(([industrySlug, industryData]) => 
      industryData.reports.map(report => ({
        ...report,
        category: industryData.title,
        industrySlug
      }))
    ), []
  );

  // Determine which reports to show based on slug
  const baseReports = useMemo(() => {
    if (slug && detail) {
      return detail.reports.map(report => ({
        ...report,
        category: detail.title,
        industrySlug: slug
      }));
    }
    return allReports;
  }, [slug, detail, allReports]);

  // Filter reports based on search
  const filteredReports = useMemo(() => {
    return baseReports.filter((report) =>
      report.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [baseReports, searchQuery]);

  // Pagination
  const totalItems = filteredReports.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginatedReports = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredReports.slice(start, start + pageSize);
  }, [filteredReports, currentPage, pageSize]);

  // Reset to page 1 when search or slug changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // Filter industries for sidebar
  const filteredIndustries = useMemo(() => {
    return industries.filter(i => 
      i.title.toLowerCase().includes(sidebarSearch.toLowerCase())
    );
  }, [sidebarSearch]);

  // If we have a slug but no matching industry, show 404-like message
  if (slug && !industry) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Industry Not Found</h1>
          <p className="text-muted-foreground mb-8">The industry you're looking for doesn't exist.</p>
          <Link to="/industry">
            <Button variant="gradient">View All Industries</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Truncate description helper
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
            {slug && detail ? (
              <>
                <li><a href="/industry" className="hover:text-primary transition-colors">Industries</a></li>
                <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
                <li><span className="text-foreground font-medium">{detail.title}</span></li>
              </>
            ) : (
              <li><span className="text-foreground font-medium">All Reports</span></li>
            )}
          </ol>
        </div>
      </nav>

      <PageHero
        badge={slug && detail ? detail.title : "Industry Research"}
        title={slug && detail ? `${detail.title} Market Research` : "Industry Insights & Analysis"}
        subtitle={slug && detail 
          ? detail.overview 
          : "Access comprehensive market research reports covering 50+ industries worldwide. Data-driven insights to fuel your business decisions."
        }
      />

      {/* Key Stats - Only show for specific industry */}
      {slug && detail && (
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg text-center">
                <BarChart3 className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">{detail.marketSize}</p>
                <p className="text-sm text-muted-foreground">Global Market Size</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg text-center">
                <TrendingUp className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">{detail.growthRate}</p>
                <p className="text-sm text-muted-foreground">Projected Growth</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border shadow-lg text-center">
                <Users className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">{detail.topPlayers.length}+</p>
                <p className="text-sm text-muted-foreground">Key Market Players</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Top Players - Only show for specific industry */}
      {slug && detail && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Leading Market Players
              </h2>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4">
              {detail.topPlayers.map((player, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 rounded-full bg-card border border-border shadow-sm font-medium text-foreground"
                >
                  {player}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content with Sidebar */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden">
              <Button 
                variant="outline" 
                className="w-full justify-between"
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              >
                <span className="flex items-center gap-2">
                  <Menu className="w-4 h-4" />
                  Browse Industries
                </span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileSidebarOpen && "rotate-180")} />
              </Button>
            </div>

            {/* Sidebar - Industries List */}
            <aside className={cn(
              "lg:w-72 xl:w-80 flex-shrink-0",
              "lg:block",
              isMobileSidebarOpen ? "block" : "hidden"
            )}>
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-4 shadow-lg">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between mb-4 lg:mb-4">
                  <h3 className="font-display font-semibold text-foreground">Industries</h3>
                  <button 
                    className="lg:hidden p-1 hover:bg-secondary rounded"
                    onClick={() => setIsMobileSidebarOpen(false)}
                    aria-label="Close sidebar"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Sidebar Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search industries..."
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    className="pl-9 h-10 text-sm"
                  />
                </div>

                {/* All Reports Link */}
                <nav aria-label="Industry navigation" className="space-y-1 max-h-[60vh] overflow-y-auto">
                  <a
                    href="/industry"
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      !slug 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <FileText className="w-4 h-4 flex-shrink-0" />
                    <span>All Reports</span>
                    <span className="ml-auto text-xs opacity-70">{allReports.length}</span>
                  </a>

                  {/* Industry Links */}
                  {filteredIndustries.map((ind) => {
                    const Icon = ind.icon;
                    const reportCount = industryDetails[ind.slug]?.reports.length || 0;
                    const isActive = slug === ind.slug;
                    
                    return (
                      <a
                        key={ind.slug}
                        href={ind.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                          isActive 
                            ? "bg-primary text-primary-foreground font-medium" 
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{ind.title}</span>
                        <span className="ml-auto text-xs opacity-70">{reportCount}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content - Reports */}
            <main className="flex-1 min-w-0">
              {/* Reports Header with Search */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {slug && detail ? `${detail.title} Reports` : "All Market Reports"}
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Showing <span className="font-medium text-foreground">{paginatedReports.length}</span> of{" "}
                      <span className="font-medium text-foreground">{totalItems}</span> reports
                    </p>
                  </div>
                  {slug && (
                    <a href="/industry" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
                      View All <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Report Search */}
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search reports..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-9 h-11"
                  />
                </div>
              </div>

              {/* Reports List - Vertical Cards */}
              <div className="space-y-4">
                {paginatedReports.map((report) => (
                  <article 
                    key={`${report.industrySlug}-${report.slug}`}
                    className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all"
                  >
                    {/* Category & Growth Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <a 
                        href={`/industry/${report.industrySlug}`}
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition-opacity",
                          categoryColors[report.category] || "bg-gray-100 text-gray-700"
                        )}
                      >
                        {report.category}
                      </a>
                      <span className="flex items-center gap-1 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        {report.growth}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
                      <a href={`/report/${report.slug}`} className="hover:underline">
                        {report.title}
                      </a>
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {truncateText(`Comprehensive market analysis covering trends, competitive landscape, growth drivers, and future outlook for the ${report.title.toLowerCase()} sector.`, 140)}
                      <a href={`/report/${report.slug}`} className="text-primary font-medium ml-1 hover:underline">
                        Read more
                      </a>
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {report.date}
                      </span>
                      <span>{report.pages} pages</span>
                      <span className="font-display font-bold text-foreground text-base">
                        {report.price}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a href={`/report/${report.slug}`}>
                        <Button variant="gradient" size="sm">
                          Buy Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </a>
                      <a href={`/report/${report.slug}`}>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {paginatedReports.length === 0 && (
                <div className="text-center py-16">
                  <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No reports found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or browse all industries.
                  </p>
                  <a href="/industry">
                    <Button variant="outline">View All Reports</Button>
                  </a>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 pt-6 border-t border-border">
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageSize={pageSize}
                    totalItems={totalItems}
                    onPageChange={setCurrentPage}
                    onPageSizeChange={handlePageSizeChange}
                  />
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Custom {slug && detail ? detail.title : "Market"} Research?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can create tailored research solutions specific to your {slug && detail ? detail.title.toLowerCase() : "industry"} business needs.
            </p>
            <a href="/contact">
              <Button variant="gradient" size="xl">
                Request Custom Research
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Industry;