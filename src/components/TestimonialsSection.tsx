import React from 'react';
import { TESTIMONIALS } from '../data/projects';
import { Star, Quote, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>РЕПУТАЦИЯ & РЕЗУЛЬТАТЫ</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          ЧТО ГОВОРЯТ <span className="text-[#daa520]">ФАУНДЕРЫ</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3">
          Реальные результаты наших клиентов: рост конверсий, экономия ФОТ и взрывной рост выручки.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((review) => (
          <div
            key={review.id}
            id={`testimonial-card-${review.id}`}
            className="p-6 sm:p-7 rounded-2xl bg-[#0c0c10] border border-white/10 hover:border-[#daa520]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Rating & Metric Pill */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1 text-[#daa520]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#daa520]" />
                  ))}
                </div>
                <div className="px-2.5 py-0.5 rounded-full bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[10px] font-bold text-[#daa520]">
                  {review.metric}
                </div>
              </div>

              {/* Quote Text */}
              <p className="font-inter text-xs sm:text-sm text-[#e8e8ed] leading-relaxed mb-6 italic">
                «{review.quote}»
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover border border-[#daa520]/40"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-unbounded font-bold text-xs text-white">
                    {review.name}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="font-mono text-[10px] text-[#8a8aa0]">
                  {review.role} • {review.company}
                </span>
                <span className="font-mono text-[9px] text-[#daa520] mt-0.5">
                  Проект: {review.projectTitle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
