import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { cn } from "@/lib/utils";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import { companyInfo } from "@/data/companyInfo";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import Logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/", activeMatch: "exact" as const },
  {
    label: "Report Store",
    href: "/industry",
    hasMegaMenu: true,
    menuType: "industries" as const,
    activeMatch: "exact" as const, // Only active on /industry exactly
  },
  {
    label: "Services",
    href: "/services",
    hasMegaMenu: true,
    menuType: "services" as const,
    activeMatch: "prefix" as const,
  },
  { label: "Blog", href: "/blog", activeMatch: "prefix" as const },
  { label: "About", href: "/about", activeMatch: "exact" as const },
  { label: "Contact", href: "/contact", activeMatch: "exact" as const },
];

// Helper to check if a route is active with different matching strategies
const isRouteActive = (
  href: string, 
  pathname: string, 
  matchType: "exact" | "prefix" | "nested" = "prefix"
): boolean => {
  switch (matchType) {
    case "exact":
      return pathname === href;
    case "nested":
      // Only active when there's a nested route (slug present)
      return pathname.startsWith(href + "/") && pathname !== href;
    case "prefix":
    default:
      // Active on exact match or any nested route
      return pathname === href || pathname.startsWith(href + "/");
  }
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    "industries" | "services" | null
  >(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<
    "industries" | "services" | null
  >(null);
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
    setMobileExpandedMenu(null);
  }, [location.pathname]);

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.hasMegaMenu) {
      setActiveMegaMenu(
        activeMegaMenu === item.menuType ? null : item.menuType!,
      );
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleMobileMenuToggle = (menuType: "industries" | "services") => {
    setMobileExpandedMenu(mobileExpandedMenu === menuType ? null : menuType);
  };

  return (
    <>
      <GlobalSearch
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">
              Trusted by 5000+ Global Companies
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-card",
        )}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow">
                <span className="">
                   <img
                      src={Logo}
                      alt="Market Research Visualization"
                      className="w-full h-full object-cover"
                    />
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-lg md:text-xl text-foreground">
                  Core
                </span>
                <span className="font-display font-medium text-lg md:text-xl text-primary ml-1">
                  Market Research
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = isRouteActive(item.href, location.pathname, item.activeMatch);
                
                return (
                  <div key={item.label} className="relative">
                    {item.hasMegaMenu ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                          activeMegaMenu === item.menuType
                            ? "text-primary bg-primary/5"
                            : isActive
                            ? "text-primary bg-primary/5"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            activeMegaMenu === item.menuType && "rotate-180",
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                          isActive
                            ? "text-primary bg-primary/5"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link to="/login">
                <Button variant="gradient_2" size="sm" className="hidden sm:flex">
                  Login
                </Button>
              </Link>

              <Link to="/contact">
                <Button variant="gradient" size="sm" className="hidden sm:flex">
                  Request Quote
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mega Menu */}
          {activeMegaMenu && (
            <MegaMenu
              type={activeMegaMenu}
              isOpen={!!activeMegaMenu}
              onClose={() => setActiveMegaMenu(null)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = isRouteActive(item.href, location.pathname, item.activeMatch);
                
                return (
                  <div key={item.label}>
                    {item.hasMegaMenu ? (
                      <>
                        <button
                          onClick={() => handleMobileMenuToggle(item.menuType!)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
                            isActive
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              mobileExpandedMenu === item.menuType && "rotate-180",
                            )}
                          />
                        </button>
                        {/* Mobile Submenu */}
                        {mobileExpandedMenu === item.menuType && (
                          <div className="ml-4 mt-1 border-l-2 border-border pl-4 space-y-1">
                            {item.menuType === "industries" &&
                              industries.slice(0, 10).map((industry) => (
                                <Link
                                  key={industry.slug}
                                  to={industry.href}
                                  className={cn(
                                    "block px-3 py-2 text-sm rounded-lg transition-colors",
                                    location.pathname === industry.href
                                      ? "text-primary bg-primary/5 font-medium"
                                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                  )}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {industry.title}
                                </Link>
                              ))}
                            {item.menuType === "industries" && industries.length > 10 && (
                              <Link
                                to="/industry"
                                className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                View All Industries →
                              </Link>
                            )}
                            {item.menuType === "services" &&
                              services.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={service.href}
                                  className={cn(
                                    "block px-3 py-2 text-sm rounded-lg transition-colors",
                                    location.pathname === service.href
                                      ? "text-primary bg-primary/5 font-medium"
                                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                  )}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
                          isActive
                            ? "text-primary bg-primary/5 font-medium"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="gradient_2" className="mt-4 w-full">
                 Login
                </Button>
              </Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="gradient" className="mt-4 w-full">
                  Request Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};