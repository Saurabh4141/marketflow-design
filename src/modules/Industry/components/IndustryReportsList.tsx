import { useState, useMemo, memo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaginationControls } from "@/components/ui/PaginationControls";
import { 
  Search, 
  TrendingUp, 
  Clock, 
  ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { industryDetails, getIndustryDetailBySlug } from "@/data/industries";

// Category color mapping
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

// Helper function
const truncateText = (text: string, maxLength: number = 120) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

// Single report card component
const ReportCard = memo(({ report }: { 
  report: {
    title: string;
    slug: string;
    date: string;
    growth: string;
    pages: number;
    price: string;
    category: string;
    industrySlug: string;
  }
}) => (
  <article className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all">
    {/* Category & Growth Badge */}
    <div className="flex flex-wrap items-center gap-2 mb-3">
      <Link 
        to={`/industry/${report.industrySlug}`}
        className={cn(
          "px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition-opacity",
          categoryColors[report.category] || "bg-gray-100 text-gray-700"
        )}
      >
        {report.category}
      </Link>
      <span className="flex items-center gap-1 text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
        <TrendingUp className="w-3 h-3" />
        {report.growth}
      </span>
    </div>

    {/* Title */}
    <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
      <Link to={`/report/${report.slug}`} className="hover:underline">
        {report.title}
      </Link>
    </h2>

    {/* Description */}
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
      {truncateText(`Comprehensive market analysis covering trends, competitive landscape, growth drivers, and future outlook for the ${report.title.toLowerCase()} sector.`, 140)}
      <Link to={`/report/${report.slug}`} className="text-primary font-medium ml-1 hover:underline">
        Read more
      </Link>
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
      <Link to={`/report/${report.slug}`}>
        <Button variant="gradient" size="sm">
          Buy Now
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </Link>
      <Link to={`/report/${report.slug}`}>
        <Button variant="outline" size="sm">
          Read More
        </Button>
      </Link>
    </div>
  </article>
));

ReportCard.displayName = "ReportCard";

// Main reports list component
const IndustryReportsList = memo(() => {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

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
    if (!searchQuery.trim()) return baseReports;
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

  // Reset page when slug or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [slug, searchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
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
            <Link to="/industry" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Report Search - Sticky */}
        <div className="sticky top-20 z-10 bg-background/95 backdrop-blur-sm py-2 -mx-1 px-1">
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
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {paginatedReports.map((report) => (
          <ReportCard
            key={`${report.industrySlug}-${report.slug}`}
            report={report}
          />
        ))}
      </div>

      {/* Empty State */}
      {paginatedReports.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg mb-4">No reports found matching your search.</p>
          <Button 
            variant="outline" 
            onClick={() => setSearchQuery("")}
          >
            Clear Search
          </Button>
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
  );
});

IndustryReportsList.displayName = "IndustryReportsList";

export default IndustryReportsList;
