import { AnimatedSection } from "@/components/ui/AnimatedSection";

const partners = [
  "Fortune 500",
  "TechCorp",
  "GlobalBank",
  "HealthPlus",
  "EnergyMax",
  "RetailGiant",
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="text-center text-muted-foreground mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-2xl font-display font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
