import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReportsSection } from "@/components/sections/ReportsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      
      {/* Reports Section with Intro */}
      <section className="pt-16 pb-0">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg mb-0">
              Explore our latest and trending market research reports covering industry trends, market size, growth opportunities, and future forecasts.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <ReportsSection />
      
      <AboutSection />
      
      {/* Blog Section with Intro */}
      <section className="pt-16 pb-0">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg mb-0">
              Read expert insights on market research methodologies, industry trends, consumer behavior, and business strategy.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <BlogSection />
      
      <FAQSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
