import React, { useState } from 'react';
import { Calculator, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectCalculatorProps {
  onApplyCalculation: (summary: string, totalCost: number) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onApplyCalculation }) => {
  const { language, t } = useLanguage();
  const locale = language === 'ru' ? 'ru-RU' : 'en-US';

  const projectTypes = t.calculator.projectTypes;
  const designTiers = t.calculator.designTiers;
  const featuresList = t.calculator.featuresList;

  const [selectedType, setSelectedType] = useState<string>('landing');
  const [selectedDesign, setSelectedDesign] = useState<string>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['ai-bot', 'paygate']);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  // Calculations
  const currentType = projectTypes.find((item) => item.id === selectedType) || projectTypes[0];
  const currentDesign = designTiers.find((d) => d.id === selectedDesign) || designTiers[0];

  const featuresPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const featuresDays = selectedFeatures.reduce((acc, featId) => {
    const feat = featuresList.find((f) => f.id === featId);
    return acc + (feat ? feat.days : 0);
  }, 0);

  const rawTotal = currentType.basePrice + currentDesign.price + featuresPrice;
  const finalPrice = isUrgent ? Math.round(rawTotal * 1.25) : rawTotal;

  const rawDays = currentType.baseDays + currentDesign.days + featuresDays;
  const finalDays = isUrgent ? Math.max(5, Math.round(rawDays * 0.65)) : rawDays;

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApply = () => {
    const featureNames = selectedFeatures
      .map((fid) => featuresList.find((f) => f.id === fid)?.name)
      .filter(Boolean)
      .join(', ');

    const summary = `${t.calculator.summaryTitle}: ${currentType.name}, ${t.calculator.summaryDesign}: ${currentDesign.name}, ${t.calculator.summaryFeatures}: [${featureNames}], ${t.calculator.summaryUrgency}: ${
      isUrgent ? t.calculator.urgentModeText : t.calculator.normalModeText
    }. ${t.calculator.summaryEstimate}: ${finalPrice.toLocaleString(locale)} ₽ (~${finalDays} ${t.calculator.daysUnit})`;

    onApplyCalculation(summary, finalPrice);
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>{t.calculator.badge}</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          {t.calculator.titlePrefix}
          <span className="text-[#daa520]">{t.calculator.titleHighlight}</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3">
          {t.calculator.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Config Controls */}
        <div className="lg:col-span-8 space-y-8 bg-[#0c0c10] p-6 sm:p-8 rounded-2xl border border-white/10">
          {/* Step 1: Project Type */}
          <div>
            <label className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-3">
              {t.calculator.step1Label}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`p-3.5 rounded-xl text-left border font-mono transition-all cursor-pointer ${
                    selectedType === type.id
                      ? 'border-[#daa520] bg-[#daa520]/10 text-white shadow-[0_0_15px_rgba(218,165,32,0.2)]'
                      : 'border-white/5 bg-[#050507] text-[#8a8aa0] hover:border-white/20'
                  }`}
                  id={`calc-type-${type.id}`}
                >
                  <span className="block text-xs font-bold text-white mb-1">
                    {type.name}
                  </span>
                  <span className="text-[11px] text-[#daa520]">
                    {t.calculator.fromPrefix}
                    {type.basePrice.toLocaleString(locale)} ₽
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Design tier */}
          <div>
            <label className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-3">
              {t.calculator.step2Label}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {designTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedDesign(tier.id)}
                  className={`p-3.5 rounded-xl text-left border font-mono transition-all cursor-pointer ${
                    selectedDesign === tier.id
                      ? 'border-[#daa520] bg-[#daa520]/10 text-white shadow-[0_0_15px_rgba(218,165,32,0.2)]'
                      : 'border-white/5 bg-[#050507] text-[#8a8aa0] hover:border-white/20'
                  }`}
                  id={`calc-design-${tier.id}`}
                >
                  <span className="block text-xs font-bold text-white mb-1">
                    {tier.name}
                  </span>
                  <span className="text-[11px] text-[#8a8aa0]">
                    {tier.price === 0
                      ? t.calculator.includedInBase
                      : `+${tier.price.toLocaleString(locale)} ₽`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Extra Features */}
          <div>
            <label className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-3">
              {t.calculator.step3Label}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featuresList.map((feature) => {
                const isChecked = selectedFeatures.includes(feature.id);
                return (
                  <div
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer font-mono transition-all ${
                      isChecked
                        ? 'border-[#daa520]/60 bg-[#daa520]/10 text-white'
                        : 'border-white/5 bg-[#050507] text-[#8a8aa0] hover:border-white/20'
                    }`}
                    id={`calc-feature-${feature.id}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded shrink-0 flex items-center justify-center border ${
                          isChecked
                            ? 'bg-[#daa520] border-[#daa520] text-[#050507]'
                            : 'border-white/20 bg-black/40'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs">{feature.name}</span>
                    </div>
                    <span className="text-[11px] text-[#daa520] shrink-0 font-bold">
                      +{feature.price.toLocaleString(locale)} ₽
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Urgency toggle */}
          <div className="pt-2">
            <label
              onClick={() => setIsUrgent(!isUrgent)}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#050507] border border-white/10 hover:border-[#daa520]/50 cursor-pointer font-mono text-xs text-white"
            >
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={() => {}}
                className="w-4 h-4 accent-[#daa520] cursor-pointer"
              />
              <span className="flex-1">{t.calculator.urgentLabel}</span>
              <span className="text-[#daa520] font-bold shrink-0">
                {t.calculator.fastTrackBadge}
              </span>
            </label>
          </div>
        </div>

        {/* Right Sticky Calculation Summary */}
        <div className="lg:col-span-4 sticky top-28 space-y-4">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0c10] border-2 border-[#daa520]/40 shadow-[0_0_30px_rgba(218,165,32,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8a8aa0]">
                {t.calculator.estimateTitle}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold whitespace-nowrap">
                {t.calculator.discountBadge}
              </span>
            </div>

            {/* Total price display */}
            <div className="mb-6">
              <div className="font-unbounded font-black text-3xl sm:text-4xl text-[#daa520] mb-1">
                {finalPrice.toLocaleString(locale)} ₽
              </div>
              <div className="font-mono text-xs text-[#8a8aa0] flex items-center gap-2">
                <span>{t.calculator.timelineLabel}</span>
                <strong className="text-white">
                  ~{finalDays} {t.calculator.workingDaysUnit}
                </strong>
              </div>
            </div>

            {/* Included highlights */}
            <div className="space-y-2 border-t border-b border-white/10 py-4 mb-6 font-mono text-xs text-[#8a8aa0]">
              <div className="flex items-center justify-between gap-2">
                <span className="shrink-0">{t.calculator.productLabel}</span>
                <span className="text-white font-bold text-right">{currentType.name}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>{t.calculator.extraModulesLabel}</span>
                <span className="text-[#daa520] font-bold">
                  {selectedFeatures.length} {t.calculator.pcsUnit}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>{t.calculator.warrantyLabel}</span>
                <span className="text-white">{t.calculator.warrantyValue}</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleApply}
              className="w-full py-4 rounded-xl bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(218,165,32,0.35)] transition-all cursor-pointer mb-3"
              id="calc-save-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.calculator.lockEstimateBtn}</span>
            </button>

            <p className="font-inter text-[11px] text-[#555570] text-center">
              {t.calculator.disclaimer}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0c10] border border-white/5 flex items-center gap-3 text-xs font-mono text-[#8a8aa0]">
            <ShieldCheck className="w-5 h-5 text-[#daa520] shrink-0" />
            <span>{t.calculator.splitPaymentNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
