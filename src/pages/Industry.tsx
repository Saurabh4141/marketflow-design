import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { PaginationControls } from "@/components/ui/PaginationControls";
import { FilterSidebar, FloatingFilterButton } from "@/components/filters/FilterSidebar";
import { 
  Download, 
  Eye, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  BarChart3,
  Users,
  ChevronRight
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const handleClearFilters = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Categories for filter pills
  const categories = ["All Reports", ...industries.map(i => i.title)];
  const activeCategory = slug && detail ? detail.title : "All Reports";
  const hasActiveFilters = searchQuery.length > 0 || (slug && slug.length > 0);

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

  return (
    <PageLayout>
      {/* Floating Filter Button */}
      <FloatingFilterButton 
        onClick={() => setIsFilterOpen(true)} 
        hasActiveFilters={!!hasActiveFilters}
      />

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categories={categories}
        activeCategory={activeCategory}
        industries={industries}
        onClearFilters={handleClearFilters}
      />

      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            {slug && detail ? (
              <>
                <Link to="/industry" className="hover:text-primary transition-colors">Industries</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">{detail.title}</span>
              </>
            ) : (
              <span className="text-foreground font-medium">Industries</span>
            )}
          </nav>
        </div>
      </div>

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

      {/* Reports Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {slug && detail ? `${detail.title} Reports` : "All Reports"}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Showing <span className="font-medium text-foreground">{paginatedReports.length}</span> of{" "}
                  <span className="font-medium text-foreground">{totalItems}</span> reports
                </p>
              </div>
              {slug && (
                <Link to="/industry" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  View All Reports <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedReports.map((report) => (
              <StaggerItem key={`${report.industrySlug}-${report.slug}`}>
                <Link to={`/reports/${report.slug}`} className="block h-full">
                  <article className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <Link 
                        to={`/industry/${report.industrySlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className={cn("px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition-opacity", categoryColors[report.category] || "bg-gray-100 text-gray-700")}
                      >
                        {report.category}
                      </Link>
                      <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                        <TrendingUp className="w-4 h-4" />
                        {report.growth}
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {report.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {report.date}
                      </span>
                      <span>{report.pages} pages</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-display text-xl font-bold text-foreground">
                        {report.price}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="default" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Custom {slug && detail ? detail.title : "Market"} Research?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can create tailored research solutions specific to your {slug && detail ? detail.title.toLowerCase() : "industry"} business needs.
            </p>
            <Link to="/contact">
              <Button variant="gradient" size="xl">
                Request Custom Research
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Industry;
