import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import {
  ReportHero,
  StickyMiniHeader,
  ReportSidebar,
  SectionContent,
  ReportCTABlock,
} from './components';
import {
  reportDetailsData,
  getReportDetailBySlug,
  getReportDetailByPath,
  getDefaultReportDetail,
} from '@/data/reportDetails';
import { reportsData } from '@/data/reports';
import { generateReportSections, getVisibleSections } from '@/data/reportSections';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const ReportDetail: React.FC = () => {
  const { slug, industry, subIndustry, reportSlug } = useParams<{
    slug?: string;
    industry?: string;
    subIndustry?: string;
    reportSlug?: string;
  }>();
  const navigate = useNavigate();
  
  const [showMiniHeader, setShowMiniHeader] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Get report data based on route params
  const report = useMemo(() => {
    // Try nested route first: /report/:industry/:subIndustry/:reportSlug
    if (industry && subIndustry && reportSlug) {
      const found = getReportDetailByPath(industry, subIndustry, reportSlug);
      if (found) return found;
      
      // If not in detailed data, find in reports list and generate default
      const basicReport = reportsData.find(
        r => r.industry === industry && r.sub_industry === subIndustry && r.slug === reportSlug
      );
      if (basicReport) {
        return getDefaultReportDetail(
          industry,
          subIndustry,
          reportSlug,
          basicReport.title,
          {
            date: basicReport.date,
            growth: basicReport.growth,
            pages: basicReport.pages,
            price: basicReport.price,
          }
        );
      }
    }
    
    // Try simple route: /report/:slug
    if (slug) {
      const found = getReportDetailBySlug(slug);
      if (found) return found;
      
      // Find in reports list
      const basicReport = reportsData.find(r => r.slug === slug);
      if (basicReport) {
        return getDefaultReportDetail(
          basicReport.industry,
          basicReport.sub_industry,
          slug,
          basicReport.title,
          {
            date: basicReport.date,
            growth: basicReport.growth,
            pages: basicReport.pages,
            price: basicReport.price,
          }
        );
      }
    }
    
    // Fallback to first report
    return reportDetailsData[0];
  }, [slug, industry, subIndustry, reportSlug]);

  // Generate sections for this report
  const sections = useMemo(() => {
    return generateReportSections(report.id);
  }, [report.id]);

  // Get visible sections for scroll spy
  const visibleSections = useMemo(() => getVisibleSections(sections), [sections]);
  const sectionIds = useMemo(() => visibleSections.map(s => s.section_key), [visibleSections]);

  // Scroll spy for sidebar highlighting
  const activeSection = useScrollSpy(sectionIds, { offset: 160 });

  // Handle sticky mini header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowMiniHeader(heroBottom < 64);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CTA handlers
  const handleDownloadSample = () => {
    // In production, this would trigger a download or modal
    console.log('Download sample for:', report.title);
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${report.slug}`);
  };

  const handleCustomize = () => {
    navigate('/contact', { state: { reportTitle: report.title } });
  };

  if (!report) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Report Not Found</h1>
            <p className="text-gray-500">The requested report could not be found.</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <div ref={heroRef}>
        <ReportHero
          report={report}
          onDownloadSample={handleDownloadSample}
          onBuyNow={handleBuyNow}
          onCustomize={handleCustomize}
        />
      </div>

      {/* Sticky Mini Header */}
      <StickyMiniHeader
        report={report}
        isVisible={showMiniHeader}
        onDownloadSample={handleDownloadSample}
        onBuyNow={handleBuyNow}
        onCustomize={handleCustomize}
      />

      {/* Main Content Area */}
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Desktop Only */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <ReportSidebar
                sections={sections}
                activeSection={activeSection}
                onDownloadPDF={handleDownloadSample}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile Sidebar Toggle */}
              <div className="lg:hidden mb-6">
                <MobileSidebarDrawer
                  sections={sections}
                  activeSection={activeSection}
                  onDownloadPDF={handleDownloadSample}
                />
              </div>

              {/* Section Content */}
              <div className="space-y-8">
                {visibleSections.map((section) => (
                  <SectionContent
                    key={section.section_key}
                    report={report}
                    section={section}
                  />
                ))}
              </div>

              {/* Final CTA Block */}
              <ReportCTABlock
                report={report}
                onBuyNow={handleBuyNow}
                onDownloadSample={handleDownloadSample}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

// Mobile Sidebar Drawer Component
const MobileSidebarDrawer: React.FC<{
  sections: ReturnType<typeof generateReportSections>;
  activeSection: string;
  onDownloadPDF: () => void;
}> = ({ sections, activeSection, onDownloadPDF }) => {
  const [isOpen, setIsOpen] = useState(false);
  const visibleSections = getVisibleSections(sections);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm"
      >
        <span className="text-sm font-medium text-gray-700">
          {visibleSections.find(s => s.section_key === activeSection)?.section_title || 'Jump to Section'}
        </span>
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <span className="font-semibold text-gray-900">Report Contents</span>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {visibleSections.map((section) => (
                  <button
                    key={section.section_key}
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById(section.section_key);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeSection === section.section_key
                        ? 'bg-[#1e3a5f] text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {section.section_title}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onDownloadPDF();
                }}
                className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-[#f97316] text-white rounded-lg text-sm font-semibold"
              >
                Download Sample PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportDetail;
