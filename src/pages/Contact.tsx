import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Empire State Building, NYC",
    subValue: "New York, NY 10001, USA",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    subValue: "Mon-Fri 9am-6pm EST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@coremarketresearch.com",
    subValue: "24/7 Support Available",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday",
    subValue: "9:00 AM - 6:00 PM EST",
  },
];

const offices = [
  { city: "New York", country: "USA", address: "Empire State Building" },
  { city: "London", country: "UK", address: "Canary Wharf" },
  { city: "Singapore", country: "Singapore", address: "Marina Bay" },
  { city: "Mumbai", country: "India", address: "Bandra Kurla Complex" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <PageLayout>
      <PageHero
        badge="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Have questions about our services? Ready to start your research project? Our team is here to help you make data-driven decisions."
      />

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <StaggerItem key={item.label}>
                <div className="group h-full p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                  <p className="font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.subValue}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-lg">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="h-12 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your research needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 rounded-xl resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Office Locations */}
            <AnimatedSection delay={0.2} direction="right" className="lg:col-span-2">
              <div className="p-8 rounded-3xl bg-secondary/50 h-full">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Global Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                    >
                      <h4 className="font-semibold text-foreground">{office.city}</h4>
                      <p className="text-sm text-muted-foreground">{office.country}</p>
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Need Immediate Help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our support team is available around the clock.
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
