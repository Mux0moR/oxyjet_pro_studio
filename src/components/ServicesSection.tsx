import React from 'react';
import { SERVICE_PACKAGES } from '../data/projects';
import { Check, Sparkles, Clock, ArrowRight, Shield } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ПРОЗРАЧНЫЕ УСЛОВИЯ & СТОИМОСТЬ</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          ТАРИФЫ И ФОРМАТЫ{' '}
          <span className="text-[#daa520]">СОТРУДНИЧЕСТВА</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3">
          Никаких скрытых доплат. Фиксируем техническое задание, смету и точные сроки в договоре с финансовой ответственностью.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            id={`package-card-${pkg.id}`}
            className={`relative rounded-2xl bg-[#0c0c10] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
              pkg.isPopular
                ? 'border-2 border-[#daa520] shadow-[0_0_35px_rgba(218,165,32,0.18)]'
                : 'border border-white/10 hover:border-white/20'
            }`}
          >
            {/* Popular Badge */}
            {pkg.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#daa520] text-[#050507] font-mono text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(218,165,32,0.5)]">
                ХИТ ВЫБОРА
              </div>
            )}

            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase font-bold text-[#daa520] tracking-wider">
                  {pkg.badge}
                </span>
                <div className="flex items-center gap-1 font-mono text-[11px] text-[#8a8aa0]">
                  <Clock className="w-3 h-3 text-[#daa520]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-unbounded font-bold text-lg text-white mb-3">
                {pkg.title}
              </h3>

              {/* Price */}
              <div className="mb-4 pb-4 border-b border-white/5">
                <span className="font-unbounded font-black text-2xl text-[#daa520]">
                  {pkg.priceFrom}
                </span>
              </div>

              {/* Description */}
              <p className="font-inter text-xs text-[#8a8aa0] leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Features List */}
              <div className="space-y-2.5 mb-6">
                {pkg.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs font-inter text-[#e8e8ed]">
                    <Check className="w-4 h-4 text-[#daa520] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Target & CTA */}
            <div className="pt-4 border-t border-white/5">
              <span className="font-mono text-[10px] text-[#555570] block mb-3 uppercase tracking-wider">
                Для кого: {pkg.recommendedFor}
              </span>

              <button
                onClick={() => onSelectService(`Выбран тариф: ${pkg.title} (${pkg.priceFrom})`)}
                className={`w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-[#daa520] hover:bg-[#ffce33] text-[#050507] shadow-[0_0_20px_rgba(218,165,32,0.3)]'
                    : 'bg-white/5 hover:bg-[#daa520] text-white hover:text-[#050507] border border-white/10 hover:border-[#daa520]'
                }`}
                id={`select-service-${pkg.id}`}
              >
                <span>Заказать расчет</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Guarantee Note */}
      <div className="mt-12 p-5 rounded-2xl bg-[#0c0c10] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-[#daa520] shrink-0" />
          <p className="font-mono text-xs text-[#8a8aa0]">
            <strong className="text-white">Юридическая гарантия:</strong> Фиксируем стоимость в договоре. Оплата разбивается на этапы 50% / 50% с актом выполненных работ.
          </p>
        </div>
        <a
          href="#calculator"
          className="shrink-0 text-xs font-mono font-bold text-[#daa520] hover:underline"
        >
          Рассчитать индивидуальный проект →
        </a>
      </div>
    </section>
  );
};
