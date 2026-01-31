import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
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
  Healthcare: "bg-rose-100 text-rose-700",
  Technology: "bg-blue-100 text-blue-700",
  "Consumer Goods": "bg-purple-100 text-purple-700",
  Energy: "bg-green-100 text-green-700",
  "Financial Services": "bg-emerald-100 text-emerald-700",
  Automotive: "bg-cyan-100 text-cyan-700",
  "Aerospace & Defense": "bg-orange-100 text-orange-700",
  "Real Estate": "bg-amber-100 text-amber-700",
};

const Industry = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeCategory, setActiveCategory] = useState("All Reports");
  const [searchQuery, setSearchQuery] = useState("");

  const industry = slug ? getIndustryBySlug(slug) : null;
  const detail = slug ? getIndustryDetailBySlug(slug) : null;

  // If no slug, show all industries with reports
  const isAllIndustries = !slug;

  // Get all reports from all industries for "All Reports" view
  const allReports = Object.entries(industryDetails).flatMap(([industrySlug, industryData]) => 
    industryData.reports.map(report => ({
      ...report,
      category: industryData.title,
      industrySlug
    }))
  );

  // Filter reports based on category and search
  const filteredReports = allReports.filter((report) => {
    const matchesCategory = activeCategory === "All Reports" || report.category === activeCategory;
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Categories for filter pills
  const categories = ["All Reports", ...industries.map(i => i.title)];

  // Auto-select "All Reports" when navigating to /industry without slug
  useEffect(() => {
    if (isAllIndustries) {
      setActiveCategory("All Reports");
    }
  }, [isAllIndustries]);

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

  // Show specific industry detail page
  if (slug && industry && detail) {
    return (
      <PageLayout>
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/industry" className="hover:text-primary transition-colors">Industries</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{detail.title}</span>
            </nav>
          </div>
        </div>

        <PageHero
          badge={detail.title}
          title={`${detail.title} Market Research`}
          subtitle={detail.overview}
        />

        {/* Key Stats */}
        <section className="py-12 -mt-8 relative z-10">
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

        {/* Key Insights */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Key Industry Insights
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {detail.keyInsights.map((insight, index) => (
                <StaggerItem key={index}>
                  <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground">{insight}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Top Players */}
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

        {/* Reports for this Industry */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {detail.title} Reports
                </h2>
                <Link to="/industry" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  View All Reports <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detail.reports.map((report) => (
                <StaggerItem key={report.slug}>
                  <Link to={`/reports/${report.slug}`} className="block h-full">
                    <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className={cn("px-3 py-1 rounded-full text-xs font-medium", categoryColors[detail.title])}>
                          {detail.title}
                        </span>
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
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Other Industries */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Explore Other Industries
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.filter(i => i.slug !== slug).map((ind) => (
                <Link
                  key={ind.slug}
                  to={ind.href}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                    <ind.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{ind.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Custom {detail.title} Research?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team can create tailored research solutions specific to your {detail.title.toLowerCase()} business needs.
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
  }

  // Show all industries with reports (default view at /industry)
  return (
    <PageLayout>
      <PageHero
        badge="Industry Research"
        title="Industry Insights & Analysis"
        subtitle="Access comprehensive market research reports covering 50+ industries worldwide. Data-driven insights to fuel your business decisions."
      />

      {/* Search & Filter */}
      <section className="py-8 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-xl"
                />
              </div>
              <Button variant="outline" size="lg" className="gap-2">
                <Filter className="w-4 h-4" />
                Advanced Filters
              </Button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredReports.length}</span> reports
            </p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <StaggerItem key={report.slug}>
                <Link to={`/reports/${report.slug}`} className="block h-full">
                  <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <Link 
                        to={`/industry/${report.industrySlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className={cn("px-3 py-1 rounded-full text-xs font-medium hover:opacity-80 transition-opacity", categoryColors[report.category])}
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
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Reports
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Browse by Industry
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                to={ind.href}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-primary transition-colors">
                  <ind.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {ind.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{ind.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Report?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can create tailored research solutions specific to your business needs.
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
