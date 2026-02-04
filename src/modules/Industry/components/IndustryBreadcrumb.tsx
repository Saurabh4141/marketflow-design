import { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getIndustryDetailBySlug } from "@/data/industries";

const IndustryBreadcrumb = memo(() => {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? getIndustryDetailBySlug(slug) : null;

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
          {slug && detail ? (
            <>
              <li>
                <Link to="/industry" className="hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li><ChevronRight className="w-4 h-4" aria-hidden="true" /></li>
              <li>
                <span className="text-foreground font-medium">{detail.title}</span>
              </li>
            </>
          ) : (
            <li>
              <span className="text-foreground font-medium">All Reports</span>
            </li>
          )}
        </ol>
      </div>
    </nav>
  );
});

IndustryBreadcrumb.displayName = "IndustryBreadcrumb";

export default IndustryBreadcrumb;
