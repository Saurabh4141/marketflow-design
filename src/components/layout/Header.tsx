import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { cn } from "@/lib/utils";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import Logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Industries",
    href: "/industry",
    hasMegaMenu: true,
    menuType: "industries" as const,
  },
  {
    label: "Services",
    href: "/service",
    hasMegaMenu: true,
    menuType: "services" as const,
  },
  { label: "Reports", href: "/industry" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
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
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:info@coremarketresearch.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>info@coremarketresearch.com</span>
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
                <span className="text-primary-foreground font-display font-bold text-lg md:text-xl">
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
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasMegaMenu ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                        activeMegaMenu === item.menuType
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
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
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
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}

             
              
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
