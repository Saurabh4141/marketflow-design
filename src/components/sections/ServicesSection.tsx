import { 
  Target, 
  PieChart, 
  DollarSign, 
  Package, 
  MessageCircle, 
  BarChart3, 
  Brain, 
  Heart, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "Market Opportunity Identification",
    description: "Identify and evaluate lucrative market opportunities to expand your business reach and maximize growth potential.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: PieChart,
    title: "Market Segmentation Analysis",
    description: "Understand your audience segments to deliver targeted messaging and optimize your marketing strategies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy Research",
    description: "Develop data-driven pricing strategies that maximize profitability while maintaining competitive advantage.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Package,
    title: "Product and Brand Research",
    description: "Gain insights into product perception and brand positioning from your target audience's perspective.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MessageCircle,
    title: "Social Media & Sentiment Analysis",
    description: "Monitor and analyze consumer sentiment across social platforms to understand brand perception.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Competitor Analysis",
    description: "Stay ahead with comprehensive competitor intelligence and market positioning insights.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Consumer Behavior Analysis",
    description: "Understand the 'why' behind customer decisions to build more effective business strategies.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction Research",
    description: "Measure and improve customer loyalty with actionable satisfaction insights and benchmarks.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Industry Trends & Forecasting",
    description: "Anticipate market shifts with expert trend analysis and predictive forecasting models.",
    color: "from-teal-500 to-cyan-500",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Research{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From market analysis to consumer insights, we provide end-to-end research services 
            that drive informed decision-making.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-medium group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
