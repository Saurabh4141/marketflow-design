import { motion, AnimatePresence } from "framer-motion";
import { 
  Car,
  ShoppingBag,
  UtensilsCrossed,
  FlaskConical,
  Cpu,
  Factory,
  Wrench,
  Pill,
  Hospital,
  Syringe,
  Stethoscope,
  Shield,
  CircuitBoard,
  Wheat,
  Package,
  Zap,
  Building2,
  Home,
  PieChart,
  BarChart3,
  Brain,
  TrendingUp,
  Lightbulb,
  DollarSign,
  Heart,
  Target,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface MegaMenuProps {
  type: "industries" | "services";
  isOpen: boolean;
  onClose: () => void;
}

const industries = [
  { icon: Car, title: "Automobile & Transportation", description: "Vehicles, logistics, mobility solutions", href: "/industry/automobile-transportation" },
  { icon: ShoppingBag, title: "Consumer Products", description: "Retail, lifestyle, consumer goods", href: "/industry/consumer-products" },
  { icon: UtensilsCrossed, title: "Food, Beverage & Nutrition", description: "Food processing, beverages, nutrition", href: "/industry/food-beverage-nutrition" },
  { icon: FlaskConical, title: "Chemicals & Materials", description: "Specialty chemicals, raw materials", href: "/industry/chemicals-materials" },
  { icon: Cpu, title: "Technology", description: "Software, hardware, digital solutions", href: "/industry/technology" },
  { icon: Factory, title: "Industrial Automation", description: "Manufacturing, robotics, automation", href: "/industry/industrial-automation" },
  { icon: Wrench, title: "Services & Utilities", description: "Business services, utilities", href: "/industry/services-utilities" },
  { icon: Pill, title: "Pharmaceutical", description: "Drugs, therapeutics, life sciences", href: "/industry/pharmaceutical" },
  { icon: Hospital, title: "Healthcare IT & Services", description: "Health tech, medical services", href: "/industry/healthcare-it-services" },
  { icon: Syringe, title: "Medical Devices Consumables", description: "Disposables, consumable devices", href: "/industry/medical-devices-consumables" },
  { icon: Stethoscope, title: "Medical Devices", description: "Equipment, diagnostic devices", href: "/industry/medical-devices" },
  { icon: Shield, title: "IT Security & Software", description: "Cybersecurity, enterprise software", href: "/industry/it-security-software" },
  { icon: CircuitBoard, title: "Electronics-Semiconductor", description: "Chips, components, electronics", href: "/industry/electronics-semiconductor" },
  { icon: Wheat, title: "Agriculture", description: "Farming, agritech, crop science", href: "/industry/agriculture" },
  { icon: Package, title: "Packaging & Transport", description: "Logistics, packaging solutions", href: "/industry/packaging-transport" },
  { icon: Zap, title: "Energy & Power", description: "Power generation, renewables, oil & gas", href: "/industry/energy-power" },
  { icon: Building2, title: "Construction", description: "Infrastructure, real estate, construction", href: "/industry/construction" },
  { icon: Home, title: "Daily-Necessities", description: "Household essentials, daily products", href: "/industry/daily-necessities" },
];

const services = [
  { icon: PieChart, title: "Market Segmentation Analysis", description: "Identify and understand target segments", href: "/services/market-segmentation-analysis" },
  { icon: BarChart3, title: "Competitor Analysis", description: "Stay ahead of competition", href: "/services/competitor-analysis" },
  { icon: Brain, title: "Consumer Behavior Analysis", description: "Understand customer decisions", href: "/services/consumer-behavior-analysis" },
  { icon: TrendingUp, title: "Industry Trends & Forecasting", description: "Predict market shifts and opportunities", href: "/services/industry-trends-forecasting" },
  { icon: Lightbulb, title: "Product and Brand Research", description: "Product insights and brand perception", href: "/services/product-brand-research" },
  { icon: DollarSign, title: "Pricing Strategy Research", description: "Optimize pricing for profitability", href: "/services/pricing-strategy-research" },
  { icon: Heart, title: "Customer Satisfaction and Loyalty Research", description: "Measure NPS and customer loyalty", href: "/services/customer-satisfaction-loyalty-research" },
  { icon: Target, title: "Market Opportunity Identification", description: "Discover growth opportunities", href: "/services/market-opportunity-identification" },
  { icon: MessageCircle, title: "Social Media and Sentiment Analysis", description: "Monitor brand perception online", href: "/services/social-media-sentiment-analysis" },
];

export const MegaMenu = ({ type, isOpen, onClose }: MegaMenuProps) => {
  const items = type === "industries" ? industries : services;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[110px] bg-foreground/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl z-50"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer CTA */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <p className="text-muted-foreground">
                  Can't find what you're looking for?
                </p>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Contact our experts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
