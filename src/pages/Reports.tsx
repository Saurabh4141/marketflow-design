import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Search, Filter, Download, Eye, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const categories = [
  "All Reports",
  "Technology",
  "Healthcare",
  "Consumer Goods",
  "Energy",
  "Finance",
  "Automotive",
];

const reports = [
  {
    title: "Global AI in Healthcare Market Analysis 2024",
    category: "Healthcare",
    date: "Jan 2024",
    growth: "+28.6%",
    pages: 245,
    price: "$3,500",
    featured: true,
  },
  {
    title: "Electric Vehicle Battery Technology Report",
    category: "Automotive",
    date: "Jan 2024",
    growth: "+31.2%",
    pages: 198,
    price: "$2,800",
  },
  {
    title: "Sustainable Packaging Market Outlook",
    category: "Consumer Goods",
    date: "Jan 2024",
    growth: "+19.5%",
    pages: 156,
    price: "$2,200",
  },
  {
    title: "5G Infrastructure Investment Analysis",
    category: "Technology",
    date: "Dec 2023",
    growth: "+24.8%",
    pages: 312,
    price: "$4,200",
  },
  {
    title: "Renewable Energy Storage Solutions",
    category: "Energy",
    date: "Dec 2023",
    growth: "+22.1%",
    pages: 178,
    price: "$3,100",
  },
  {
    title: "Fintech Payment Solutions Market",
    category: "Finance",
    date: "Dec 2023",
    growth: "+26.3%",
    pages: 234,
    price: "$3,800",
  },
  {
    title: "Cybersecurity Solutions Market 2024",
    category: "Technology",
    date: "Dec 2023",
    growth: "+21.7%",
    pages: 267,
    price: "$3,600",
  },
  {
    title: "Plant-Based Food Market Analysis",
    category: "Consumer Goods",
    date: "Nov 2023",
    growth: "+16.3%",
    pages: 145,
    price: "$2,400",
  },
];

const categoryColors: Record<string, string> = {
  Technology: "bg-blue-100 text-blue-700",
  Healthcare: "bg-rose-100 text-rose-700",
  "Consumer Goods": "bg-purple-100 text-purple-700",
  Energy: "bg-green-100 text-green-700",
  Finance: "bg-emerald-100 text-emerald-700",
  Automotive: "bg-cyan-100 text-cyan-700",
};

const Reports = () => {
  const [activeCategory, setActiveCategory] = useState("All Reports");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredReports = reports.filter((report) => {
    const matchesCategory = activeCategory === "All Reports" || report.category === activeCategory;
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      <PageHero
        badge="Research Reports"
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
              <StaggerItem key={report.title}>
                <div className={cn(
                  "group h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300",
                  report.featured && "ring-2 ring-primary/20"
                )}>
                  {report.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      Featured Report
                    </span>
                  )}
                  
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", categoryColors[report.category])}>
                      {report.category}
                    </span>
                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
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

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Report?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can create tailored research solutions specific to your business needs.
            </p>
            <Button variant="gradient" size="xl">
              Request Custom Research
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reports;
