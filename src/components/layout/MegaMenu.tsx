import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Cpu, 
  ShoppingBag, 
  Zap, 
  Stethoscope, 
  Car, 
  Plane, 
  Landmark,
  Target,
  PieChart,
  DollarSign,
  Package,
  MessageCircle,
  BarChart3,
  Brain,
  Heart,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

interface MegaMenuProps {
  type: "industries" | "services";
  isOpen: boolean;
  onClose: () => void;
}

const industries = [
  { icon: Stethoscope, title: "Healthcare", description: "Medical devices, pharma, biotech", href: "/industries/healthcare" },
  { icon: Cpu, title: "Technology", description: "Software, hardware, AI/ML", href: "/industries/technology" },
  { icon: ShoppingBag, title: "Consumer Goods", description: "FMCG, retail, e-commerce", href: "/industries/consumer-goods" },
  { icon: Zap, title: "Energy", description: "Oil, gas, renewables", href: "/industries/energy" },
  { icon: Landmark, title: "Financial Services", description: "Banking, insurance, fintech", href: "/industries/finance" },
  { icon: Car, title: "Automotive", description: "EVs, components, mobility", href: "/industries/automotive" },
  { icon: Plane, title: "Aerospace & Defense", description: "Aviation, space, defense", href: "/industries/aerospace" },
  { icon: Building2, title: "Real Estate", description: "Commercial, residential", href: "/industries/real-estate" },
];

const services = [
  { icon: Target, title: "Market Opportunity", description: "Identify growth opportunities", href: "/services/market-opportunity" },
  { icon: PieChart, title: "Segmentation Analysis", description: "Understand your audience", href: "/services/segmentation" },
  { icon: DollarSign, title: "Pricing Strategy", description: "Optimize your pricing", href: "/services/pricing" },
  { icon: Package, title: "Product Research", description: "Product & brand insights", href: "/services/product-research" },
  { icon: MessageCircle, title: "Sentiment Analysis", description: "Social media insights", href: "/services/sentiment" },
  { icon: BarChart3, title: "Competitor Analysis", description: "Stay ahead of competition", href: "/services/competitors" },
  { icon: Brain, title: "Consumer Behavior", description: "Understand customer decisions", href: "/services/consumer-behavior" },
  { icon: Heart, title: "Customer Satisfaction", description: "Measure loyalty & NPS", href: "/services/satisfaction" },
  { icon: TrendingUp, title: "Trends & Forecasting", description: "Predict market shifts", href: "/services/trends" },
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
            className="fixed inset-0 top-[88px] bg-foreground/20 backdrop-blur-sm z-40"
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
