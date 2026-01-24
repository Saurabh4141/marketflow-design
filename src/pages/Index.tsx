import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReportsSection } from "@/components/sections/ReportsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ReportsSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
