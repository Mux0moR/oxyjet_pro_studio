import React from 'react';
import { WORKFLOW_STEPS } from '../data/projects';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ПРОЗРАЧНЫЙ ПАЙПЛАЙН</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          КАК МЫ <span className="text-[#daa520]">РАБОТАЕМ</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3">
          Понятный цикл разработки от идеи до первых продаж. Вы всегда видите статус задач в реальном времени.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
        {WORKFLOW_STEPS.map((item, idx) => (
          <div
            key={item.step}
            id={`process-step-${item.step}`}
            className="p-6 rounded-2xl bg-[#0c0c10] border border-white/10 hover:border-[#daa520]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-unbounded font-black text-3xl text-[#daa520]/60 group-hover:text-[#daa520] transition-colors">
                  {item.step}
                </span>
                <span className="font-mono text-[10px] text-[#8a8aa0] uppercase px-2 py-0.5 rounded bg-white/5">
                  {item.duration}
                </span>
              </div>

              <h3 className="font-unbounded font-bold text-base text-white mb-2.5 leading-snug">
                {item.title}
              </h3>

              <p className="font-inter text-xs text-[#8a8aa0] leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-[#daa520]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Прозрачный отчет</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
