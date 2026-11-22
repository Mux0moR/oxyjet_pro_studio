import React from 'react';
import { ArrowDown, Sparkles, TrendingUp, ShieldCheck, Zap, Code2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onOpenContact: (presetMessage?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Background Matrix Grid */}
      <div className="hero-grid-bg" />

      {/* Radial Gold Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#daa520]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <div
          id="hero-status-pill"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0c0c10] border border-[#daa520]/30 mb-8 shadow-[0_0_20px_rgba(218,165,32,0.12)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot"></span>
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#daa520]">
            {t.hero.statusBadge}
          </span>
        </div>

        {/* Main Punchy Headline with Unbounded Font */}
        <h1
          id="hero-headline"
          className="font-unbounded font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#e8e8ed] mb-6 max-w-4xl"
        >
          {t.hero.headlinePrefix}
          <span className="text-[#daa520] gold-glow inline-block">
            {t.hero.headlineHighlight}
          </span>
        </h1>

        {/* High-Converting Subtitle */}
        <p
          id="hero-subtitle"
          className="font-mono text-xs sm:text-sm md:text-base text-[#8a8aa0] max-w-2xl leading-relaxed mb-10 text-center"
        >
          {t.hero.subtitleStart}
          <strong className="text-white font-bold">{t.hero.subtitleStrong}</strong>
          {t.hero.subtitleMiddle}
          <span className="text-[#daa520] font-bold">{t.hero.subtitleAi}</span>
          {t.hero.subtitleAfterAi}
          <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">
            {t.hero.subtitleMultiplier}
          </span>
          {t.hero.subtitleEnd}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#calculator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(218,165,32,0.35)] hover:shadow-[0_0_40px_rgba(218,165,32,0.55)] hover:-translate-y-0.5 transition-all"
            id="hero-cta-calc"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.ctaCalc}</span>
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 hover:border-[#daa520] bg-[#0c0c10]/80 hover:bg-[#111117] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            id="hero-cta-cases"
          >
            <Code2 className="w-4 h-4 text-[#daa520]" />
            <span>{t.hero.ctaCases}</span>
          </a>
        </div>

        {/* Value Trust Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mb-12">
          <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0c0c10]/60 border border-white/5 font-mono text-[11px] text-[#8a8aa0]">
            <ShieldCheck className="w-4 h-4 text-[#daa520] shrink-0" />
            <span>{t.hero.trust.contract}</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0c0c10]/60 border border-white/5 font-mono text-[11px] text-[#8a8aa0]">
            <Zap className="w-4 h-4 text-[#daa520] shrink-0" />
            <span>{t.hero.trust.mvp}</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0c0c10]/60 border border-white/5 font-mono text-[11px] text-[#8a8aa0]">
            <TrendingUp className="w-4 h-4 text-[#daa520] shrink-0" />
            <span>{t.hero.trust.sourceCode}</span>
          </div>
        </div>

        {/* Business Proof / Metrics Strip */}
        <div
          id="hero-metrics-strip"
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0c0c10]/90 border border-white/10 backdrop-blur-lg"
        >
          <div className="flex flex-col items-center text-center p-2">
            <span className="font-unbounded font-black text-2xl sm:text-3xl text-white">
              28<span className="text-[#daa520]">+</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8aa0] mt-1">
              {t.hero.metrics.projectsLabel}
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-l border-white/10">
            <span className="font-unbounded font-black text-2xl sm:text-3xl text-[#daa520]">
              $4.8M+
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8aa0] mt-1">
              {t.hero.metrics.revenueLabel}
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-l-0 md:border-l border-white/10">
            <span className="font-unbounded font-black text-2xl sm:text-3xl text-white">
              99.2%
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8aa0] mt-1">
              {t.hero.metrics.csatLabel}
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-2 border-l border-white/10">
            <span className="font-unbounded font-black text-2xl sm:text-3xl text-[#daa520]">
              {t.hero.metrics.speedValue}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8aa0] mt-1">
              {t.hero.metrics.speedLabel}
            </span>
          </div>
        </div>

        {/* Down Arrow Indicator */}
        <a
          href="#projects"
          className="mt-8 flex flex-col items-center gap-1.5 text-[#555570] hover:text-[#daa520] transition-colors group"
          aria-label={t.hero.scrollAria}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            {t.hero.scrollLabel}
          </span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};
