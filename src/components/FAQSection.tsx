import React, { useState } from 'react';
import { FAQS } from '../data/projects';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>ОТВЕТЫ НА ВОПРОСЫ</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl text-white tracking-tight">
          ЧАСТО ЗАДАВАЕМЫЕ <span className="text-[#daa520]">ВОПРОСЫ</span>
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              id={`faq-item-${idx}`}
              className="rounded-xl bg-[#0c0c10] border border-white/8 hover:border-white/20 transition-all overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-unbounded font-bold text-sm sm:text-base text-white hover:text-[#daa520] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#daa520] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 font-inter text-xs sm:text-sm text-[#8a8aa0] leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
