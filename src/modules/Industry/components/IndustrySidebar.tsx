import { Link, useParams } from "react-router-dom";
import { useState, useMemo, memo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, 
  FileText, 
  Menu, 
  X,
  ChevronDown 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { industries, industryDetails } from "@/data/industries";

interface IndustrySidebarProps {
  className?: string;
}

// Memoized industry item to prevent unnecessary re-renders
const IndustryItem = memo(({ 
  industry, 
  isActive, 
  reportCount 
}: { 
  industry: typeof industries[0]; 
  isActive: boolean; 
  reportCount: number;
}) => {
  const Icon = industry.icon;
  
  return (
    <Link
      to={industry.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground font-medium" 
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
      )}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="truncate">{industry.title}</span>
      <span className="ml-auto text-xs opacity-70">{reportCount}</span>
    </Link>
  );
});

IndustryItem.displayName = "IndustryItem";

// Mobile toggle button - exported separately for flexibility
export const MobileSidebarToggle = memo(({ 
  isOpen, 
  onToggle 
}: { 
  isOpen: boolean; 
  onToggle: () => void;
}) => (
  <div className="lg:hidden">
    <Button 
      variant="outline" 
      className="w-full justify-between"
      onClick={onToggle}
    >
      <span className="flex items-center gap-2">
        <Menu className="w-4 h-4" />
        Browse Industries
      </span>
      <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
    </Button>
  </div>
));

MobileSidebarToggle.displayName = "MobileSidebarToggle";

// Main sidebar component
const IndustrySidebar = memo(({ className }: IndustrySidebarProps) => {
  const { slug } = useParams<{ slug: string }>();
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Get total report count
  const allReportsCount = useMemo(() => 
    Object.values(industryDetails).reduce((acc, detail) => acc + detail.reports.length, 0),
    []
  );

  // Filter industries based on search
  const filteredIndustries = useMemo(() => {
    if (!sidebarSearch.trim()) return industries;
    return industries.filter(i => 
      i.title.toLowerCase().includes(sidebarSearch.toLowerCase())
    );
  }, [sidebarSearch]);

  return (
    <>
      {/* Mobile Toggle */}
      <MobileSidebarToggle 
        isOpen={isMobileOpen} 
        onToggle={() => setIsMobileOpen(!isMobileOpen)} 
      />

      {/* Sidebar */}
      <aside className={cn(
        "lg:w-72 xl:w-80 flex-shrink-0",
        "lg:block",
        isMobileOpen ? "block" : "hidden",
        className
      )}>
        <div className="lg:sticky lg:top-24 bg-card border border-border rounded-2xl p-4 shadow-lg lg:max-h-[calc(100vh-8rem)] lg:flex lg:flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold text-foreground">Industries</h3>
            <button 
              className="lg:hidden p-1 hover:bg-secondary rounded"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sidebar Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search industries..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className="pl-9 h-10 text-sm"
            />
          </div>

          {/* Scrollable Industry List */}
          <ScrollArea className="flex-1 lg:max-h-[60vh]">
            <nav aria-label="Industry navigation" className="space-y-1 pr-2">
              {/* All Reports Link */}
              <Link
                to="/industry"
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  !slug 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>All Reports</span>
                <span className="ml-auto text-xs opacity-70">{allReportsCount}</span>
              </Link>

              {/* Industry Links */}
              {filteredIndustries.map((ind) => {
                const reportCount = industryDetails[ind.slug]?.reports.length || 0;
                const isActive = slug === ind.slug;
                
                return (
                  <IndustryItem
                    key={ind.slug}
                    industry={ind}
                    isActive={isActive}
                    reportCount={reportCount}
                  />
                );
              })}
            </nav>
          </ScrollArea>
        </div>
      </aside>
    </>
  );
});

IndustrySidebar.displayName = "IndustrySidebar";

export default IndustrySidebar;
