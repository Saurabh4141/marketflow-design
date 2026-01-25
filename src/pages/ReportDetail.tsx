import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Download,
  FileText,
  Calendar,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  Phone,
  Mail,
  ShoppingCart,
} from "lucide-react";

// Mock report data - in production would come from API
const reportData = {
  title: "Global AI in Healthcare Market Analysis 2024",
  category: "Healthcare",
  publishDate: "January 2024",
  pages: 245,
  format: "PDF",
  deliveryTime: "Immediate",
  price: {
    single: 3500,
    enterprise: 7500,
  },
  growth: "+28.6%",
  marketSize: "$15.8 Billion",
  forecastPeriod: "2024-2030",
  description:
    "This comprehensive research report provides an in-depth analysis of the global AI in Healthcare market, covering market size, growth trends, competitive landscape, and future forecasts. The report examines key market drivers, challenges, and opportunities shaping the industry.",
  highlights: [
    "Detailed market size and growth projections through 2030",
    "Competitive landscape analysis of 50+ key players",
    "Regional market analysis across North America, Europe, Asia Pacific",
    "Technology trends and innovation pipeline assessment",
    "Regulatory landscape and impact analysis",
    "Investment trends and M&A activity overview",
  ],
  tableOfContents: [
    { chapter: 1, title: "Executive Summary", pages: "1-15" },
    { chapter: 2, title: "Market Overview", pages: "16-45" },
    { chapter: 3, title: "Market Dynamics", pages: "46-80" },
    { chapter: 4, title: "Segmentation Analysis", pages: "81-120" },
    { chapter: 5, title: "Regional Analysis", pages: "121-165" },
    { chapter: 6, title: "Competitive Landscape", pages: "166-210" },
    { chapter: 7, title: "Future Outlook", pages: "211-245" },
  ],
  segments: [
    "Technology (Machine Learning, NLP, Computer Vision)",
    "Application (Diagnostics, Drug Discovery, Treatment)",
    "End User (Hospitals, Pharma, Research Labs)",
    "Region (North America, Europe, Asia Pacific, RoW)",
  ],
};

const ReportDetail = () => {
  const { slug } = useParams();

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <section className="pt-28 pb-6 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Link
            to="/reports"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reports
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  {reportData.category}
                </Badge>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {reportData.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {reportData.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {reportData.growth}
                    </div>
                    <div className="text-sm text-muted-foreground">CAGR</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Globe className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {reportData.marketSize}
                    </div>
                    <div className="text-sm text-muted-foreground">Market Size</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <FileText className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      {reportData.pages}
                    </div>
                    <div className="text-sm text-muted-foreground">Pages</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <Calendar className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">2030</div>
                    <div className="text-sm text-muted-foreground">Forecast</div>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 p-6 rounded-2xl bg-card border border-border shadow-lg">
                  <h3 className="font-display text-xl font-semibold mb-6">
                    Purchase Options
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl border-2 border-primary bg-primary/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Single User License</span>
                        <Badge variant="outline">Popular</Badge>
                      </div>
                      <div className="text-3xl font-bold text-foreground">
                        ${reportData.price.single.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        For individual use only
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Enterprise License</span>
                        <Users className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="text-3xl font-bold text-foreground">
                        ${reportData.price.enterprise.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Unlimited users in your organization
                      </p>
                    </div>
                  </div>

                  <Button variant="gradient" size="lg" className="w-full mb-4">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button variant="outline" size="lg" className="w-full mb-6">
                    <Download className="w-4 h-4 mr-2" />
                    Request Sample
                  </Button>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Instant PDF Download
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Free Report Updates
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Analyst Support Included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Report Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Key Highlights */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Report Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {reportData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Table of Contents */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Table of Contents
                </h2>
                <div className="space-y-3">
                  {reportData.tableOfContents.map((item) => (
                    <div
                      key={item.chapter}
                      className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold text-sm">
                          {item.chapter}
                        </span>
                        <span className="font-medium text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Pages {item.pages}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Segments Covered */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Segments Covered
                </h2>
                <div className="flex flex-wrap gap-3">
                  {reportData.segments.map((segment, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      {segment}
                    </Badge>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-6 rounded-2xl bg-secondary/30 border border-border">
                <h3 className="font-display text-lg font-semibold mb-4">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Our research team is ready to help you find the right report
                  for your needs.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        Call Us
                      </div>
                      <div className="text-muted-foreground text-sm">
                        +1 (234) 567-890
                      </div>
                    </div>
                  </a>
                  <a
                    href="mailto:research@core.com"
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground text-sm">
                        Email Us
                      </div>
                      <div className="text-muted-foreground text-sm">
                        research@core.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ReportDetail;
