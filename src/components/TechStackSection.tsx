import React from 'react';
import { TECH_STACK } from '../data/projects';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const TechStackSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>{t.techStackSection.badge}</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          {t.techStackSection.titlePrefix}
          <span className="text-[#daa520]">{t.techStackSection.titleHighlight}</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3">
          {t.techStackSection.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {TECH_STACK.map((tech) => (
          <div
            key={tech.name}
            className="p-5 rounded-xl bg-[#0c0c10] border border-white/10 hover:border-[#daa520]/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] text-[#8a8aa0] uppercase tracking-wider">
                  {tech.category}
                </span>
                <span className="font-mono text-[10px] font-bold text-[#daa520] px-2 py-0.5 rounded bg-[#daa520]/10 whitespace-nowrap">
                  {tech.badge}
                </span>
              </div>
              <h3 className="font-unbounded font-bold text-sm sm:text-base text-white group-hover:text-[#daa520] transition-colors">
                {tech.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Speed & SEO Guarantee Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0c0c10] via-[#111117] to-[#0c0c10] border border-[#daa520]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <span className="font-mono text-xs text-[#daa520] font-bold uppercase tracking-wider">
            {t.techStackSection.benchmarkEyebrow}
          </span>
          <h4 className="font-unbounded font-bold text-xl text-white">
            {t.techStackSection.benchmarkTitle}
          </h4>
          <p className="font-inter text-xs text-[#8a8aa0] max-w-xl">
            {t.techStackSection.benchmarkDesc}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#050507] border border-white/10">
            <span className="font-unbounded font-black text-2xl text-emerald-400">99</span>
            <span className="font-mono text-[10px] text-[#8a8aa0]">
              {t.techStackSection.perfLabel}
            </span>
          </div>
          <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-[#050507] border border-white/10">
            <span className="font-unbounded font-black text-2xl text-emerald-400">100</span>
            <span className="font-mono text-[10px] text-[#8a8aa0]">
              {t.techStackSection.seoLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
