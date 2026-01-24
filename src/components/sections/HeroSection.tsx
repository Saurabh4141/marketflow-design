import { ArrowRight, Play, TrendingUp, Users, FileText, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: FileText, value: "150,000+", label: "Reports" },
  { icon: TrendingUp, value: "70,000+", label: "Research Topics" },
  { icon: Users, value: "874+", label: "Expert Analysts" },
  { icon: Award, value: "5,000+", label: "Global Clients" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Market Research Visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
            <span className="text-primary-foreground/90 text-sm font-medium">AI-Powered Market Intelligence</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] animate-fade-up stagger-1">
            Competitive Insights at the{" "}
            <span className="relative">
              Speed of Thought
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 4 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-accent" />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-fade-up stagger-2">
            Transform your business decisions with data-driven market research. 
            Access comprehensive industry analysis, consumer insights, and competitive intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" className="group">
              Explore Reports
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Overview
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-up stagger-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group p-4 md:p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
