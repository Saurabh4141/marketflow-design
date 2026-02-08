import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { ReportSection, SectionGroup, sectionGroups } from '@/data/reportSections';
import { scrollToSection } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

interface ReportSidebarProps {
  sections: ReportSection[];
  activeSection: string;
  onDownloadPDF: () => void;
}

export const ReportSidebar: React.FC<ReportSidebarProps> = ({
  sections,
  activeSection,
  onDownloadPDF,
}) => {
  // Group sections by section_group
  const groupedSections = React.useMemo(() => {
    const grouped: Record<SectionGroup, ReportSection[]> = {
      about: [],
      market_overview: [],
      deep_dive: [],
      reference: [],
    };

    sections
      .filter(s => s.is_visible && s.content)
      .sort((a, b) => a.display_order - b.display_order)
      .forEach(section => {
        grouped[section.section_group].push(section);
      });

    return grouped;
  }, [sections]);

  const handleSectionClick = (sectionKey: string) => {
    scrollToSection(sectionKey, 140);
  };

  return (
    <aside className="lg:sticky lg:top-[140px] space-y-6">
      {/* Section Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-900">Report Contents</h3>
        </div>
        
        <nav className="p-3 max-h-[calc(100vh-320px)] overflow-y-auto">
          {(Object.keys(sectionGroups) as SectionGroup[]).map((groupKey) => {
            const group = sectionGroups[groupKey];
            const groupSections = groupedSections[groupKey];
            
            if (groupSections.length === 0) return null;

            return (
              <div key={groupKey} className="mb-4 last:mb-0">
                {/* Group Label */}
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">
                  {group.label}
                </div>
                
                {/* Section Items */}
                <div className="space-y-0.5">
                  {groupSections.map((section) => {
                    const isActive = activeSection === section.section_key;
                    const isReference = section.section_type === 'utility';
                    
                    return (
                      <button
                        key={section.section_key}
                        onClick={() => handleSectionClick(section.section_key)}
                        className={cn(
                          'w-full flex items-center gap-2 px-3 py-2 text-left text-sm rounded-lg transition-all duration-200',
                          isActive
                            ? 'bg-[#1e3a5f] text-white font-medium'
                            : isReference
                              ? 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                              : 'text-gray-700 hover:bg-gray-50'
                        )}
                      >
                        <div className={cn(
                          'w-1.5 h-1.5 rounded-full flex-shrink-0',
                          isActive ? 'bg-[#f97316]' : isReference ? 'bg-gray-300' : 'bg-gray-400'
                        )} />
                        <span className="truncate">{section.section_title}</span>
                        {isActive && (
                          <ChevronRight className="w-3 h-3 ml-auto flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Download CTA */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-xl p-5 text-white">
        <div className="text-sm font-semibold mb-2">Get the Full Report</div>
        <p className="text-xs text-white/70 mb-4">
          Download a sample PDF to preview the complete analysis and insights.
        </p>
        <button
          onClick={onDownloadPDF}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#1e3a5f] rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download Sample PDF
        </button>
      </div>

      {/* Need Help */}
      <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
        <div className="text-sm font-semibold text-gray-900 mb-1">Need Assistance?</div>
        <p className="text-xs text-gray-600 mb-3">
          Our analysts are available to help customize this report for your needs.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-1 text-xs font-medium text-[#1e3a5f] hover:underline"
        >
          Contact an Analyst
          <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </aside>
  );
};

export default ReportSidebar;
