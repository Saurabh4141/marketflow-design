import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "@/modules/Home/index";
import About from "@/modules/About/index";
import Contact from "@/modules/Contact/index";
import Industry from "@/modules/Industry/index";
import ReportDetail from "@/modules/Reports/index";
import Blog from "@/modules/Blog/index";
import BlogDetail from "@/modules/Blog/BlogDetail";
import Services from "@/modules/Services/index";
import ServiceDetail from "@/modules/Services/ServiceDetail";
import Checkout from "@/modules/Checkout/index";
import { 
  PrivacyPolicy, 
  TermsAndConditions, 
  CookiePolicy, 
  Disclaimer, 
  RefundPolicy, 
  GDPR 
} from "@/modules/Legal";
import { Error404 } from "./error";

const queryClient = new QueryClient();

// Animated Routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/industry/:slug" element={<Industry />} />
        <Route path="/report/:slug" element={<ReportDetail />} />
        <Route path="/report/:industry/:subIndustry/:reportSlug" element={<ReportDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:slug" element={<Checkout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/gdpr" element={<GDPR />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
