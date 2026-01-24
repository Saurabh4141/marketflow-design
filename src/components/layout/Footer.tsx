import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Mail, 
  ArrowRight,
  MapPin,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { label: "Market Opportunity", href: "#" },
    { label: "Segmentation Analysis", href: "#" },
    { label: "Pricing Strategy", href: "#" },
    { label: "Consumer Behavior", href: "#" },
    { label: "Competitor Analysis", href: "#" },
  ],
  industries: [
    { label: "Healthcare", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Consumer Goods", href: "#" },
    { label: "Energy", href: "#" },
    { label: "Finance", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Stay Ahead of Market Trends
              </h3>
              <p className="text-background/70">
                Subscribe to our newsletter for the latest insights and reports.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full sm:w-80 bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-xl focus:border-accent"
              />
              <Button variant="hero" size="lg" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-xl">C</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl">Core</span>
                <span className="font-display font-medium text-xl text-accent ml-1">Market Research</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Empowering businesses with actionable market intelligence and research solutions since 2010.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Empire State Building, NYC, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@coremarketresearch.com</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© 2024 Core Market Research. All rights reserved.</p>
            <p>Designed with ♥ for data-driven businesses</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
