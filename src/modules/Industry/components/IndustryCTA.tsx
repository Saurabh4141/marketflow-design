import { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getIndustryDetailBySlug } from "@/data/industries";

const IndustryCTA = memo(() => {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? getIndustryDetailBySlug(slug) : null;

  return (
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
  );
});

IndustryCTA.displayName = "IndustryCTA";

export default IndustryCTA;
