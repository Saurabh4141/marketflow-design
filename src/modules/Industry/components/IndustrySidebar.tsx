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
   ChevronDown,
   ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
 import { industriesData, getIndustryDetailBySlug } from "@/data/industries";
 import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface IndustrySidebarProps {
  className?: string;
}

 // Sub-industry item component
 const SubIndustryItem = memo(({ 
   subIndustry, 
   isActive,
   parentPath
 }: { 
   subIndustry: { name: string; path: string; icon: React.ComponentType<{ className?: string }>; reports: unknown[] };
   isActive: boolean;
   parentPath: string;
 }) => {
   const Icon = subIndustry.icon;
   const reportCount = subIndustry.reports?.length || 0;
 
  return (
    <Link
       to={`/industry/${subIndustry.path}`}
      className={cn(
         "flex items-center gap-3 pl-10 pr-3 py-2 rounded-lg text-sm transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground font-medium" 
          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
      )}
    >
       <Icon className="w-3.5 h-3.5 flex-shrink-0" />
       <span className="truncate text-xs">{subIndustry.name}</span>
      <span className="ml-auto text-xs opacity-70">{reportCount}</span>
    </Link>
  );
});
 SubIndustryItem.displayName = "SubIndustryItem";

 // Industry item with collapsible sub-industries
 const IndustryItem = memo(({ 
   industry, 
   isActive, 
   isParentActive,
   currentSlug
 }: { 
   industry: typeof industriesData[0]; 
   isActive: boolean;
   isParentActive: boolean;
   currentSlug: string | undefined;
 }) => {
   const [isOpen, setIsOpen] = useState(isActive || isParentActive);
   const Icon = industry.icon;
   const hasSubIndustries = industry.subIndustries.length > 0;
   
   // Calculate total reports (industry + all sub-industries)
   const totalReports = industry.reports.length + 
     industry.subIndustries.reduce((acc, sub) => acc + sub.reports.length, 0);
 
   if (!hasSubIndustries) {
     // Simple link for industries without sub-industries
     return (
       <Link
         to={`/industry/${industry.path}`}
         className={cn(
           "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
           isActive 
             ? "bg-primary text-primary-foreground font-medium" 
             : "text-muted-foreground hover:text-foreground hover:bg-secondary"
         )}
       >
         <Icon className="w-4 h-4 flex-shrink-0" />
         <span className="truncate">{industry.name}</span>
         <span className="ml-auto text-xs opacity-70">{totalReports}</span>
       </Link>
     );
   }
 
   // Collapsible for industries with sub-industries
   return (
     <Collapsible open={isOpen} onOpenChange={setIsOpen}>
       <div className="space-y-0.5">
         <div className="flex items-center">
           <CollapsibleTrigger asChild>
             <button
               className={cn(
                 "flex items-center gap-1 p-1.5 rounded-md transition-colors hover:bg-secondary",
                 (isActive || isParentActive) && "text-primary"
               )}
             >
               {isOpen ? (
                 <ChevronDown className="w-3.5 h-3.5" />
               ) : (
                 <ChevronRight className="w-3.5 h-3.5" />
               )}
             </button>
           </CollapsibleTrigger>
           <Link
             to={`/industry/${industry.path}`}
             className={cn(
               "flex-1 flex items-center gap-2 px-2 py-2 rounded-lg text-sm transition-colors",
               isActive 
                 ? "bg-primary text-primary-foreground font-medium" 
                 : isParentActive
                   ? "text-primary font-medium hover:bg-secondary"
                   : "text-muted-foreground hover:text-foreground hover:bg-secondary"
             )}
           >
             <Icon className="w-4 h-4 flex-shrink-0" />
             <span className="truncate">{industry.name}</span>
             <span className="ml-auto text-xs opacity-70">{totalReports}</span>
           </Link>
         </div>
         
         <CollapsibleContent className="space-y-0.5">
           {industry.subIndustries.map((sub) => (
             <SubIndustryItem
               key={sub.id}
               subIndustry={sub}
               isActive={currentSlug === sub.path}
               parentPath={industry.path}
             />
           ))}
         </CollapsibleContent>
       </div>
     </Collapsible>
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
     industriesData.reduce((acc, ind) => {
       const indReports = ind.reports.length;
       const subReports = ind.subIndustries.reduce((subAcc, sub) => subAcc + sub.reports.length, 0);
       return acc + indReports + subReports;
     }, 0),
    []
  );
 
   // Check if current slug is a sub-industry
   const parentIndustryPath = useMemo(() => {
     for (const ind of industriesData) {
       const foundSub = ind.subIndustries.find(sub => sub.path === slug);
       if (foundSub) return ind.path;
     }
     return null;
   }, [slug]);

  // Filter industries based on search
  const filteredIndustries = useMemo(() => {
     if (!sidebarSearch.trim()) return industriesData;
     const searchLower = sidebarSearch.toLowerCase();
     return industriesData.filter(ind => 
       ind.name.toLowerCase().includes(searchLower) ||
       ind.subIndustries.some(sub => sub.name.toLowerCase().includes(searchLower))
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
                   !slug && !parentIndustryPath
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
                 const isActive = slug === ind.path;
                 const isParentActive = parentIndustryPath === ind.path;
 
                return (
                  <IndustryItem
                     key={ind.id}
                    industry={ind}
                    isActive={isActive}
                     isParentActive={isParentActive}
                     currentSlug={slug}
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
