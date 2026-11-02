import React, { useState } from 'react';
import { Calculator, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectCalculatorProps {
  onApplyCalculation: (summary: string, totalCost: number) => void;
}

interface ProjectTypeOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  days: number;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onApplyCalculation }) => {
  const projectTypes: ProjectTypeOption[] = [
    { id: 'landing', name: 'Продающий Landing Page', basePrice: 120000, baseDays: 7 },
    { id: 'ecommerce', name: 'Интернет-магазин / Дроп', basePrice: 220000, baseDays: 16 },
    { id: 'saas', name: 'Web-сервис / SaaS Платформа', basePrice: 280000, baseDays: 20 },
    { id: 'ai', name: 'AI-Ассистенты & Автоматизация', basePrice: 190000, baseDays: 12 },
    { id: 'enterprise', name: 'Enterprise Экосистема', basePrice: 550000, baseDays: 32 },
  ];

  const designTiers = [
    { id: 'standard', name: 'Фирменный High-End дизайн', price: 0, days: 0 },
    { id: 'interactive3d', name: 'WebGL 3D & Микроанимации', price: 60000, days: 4 },
    { id: 'branding', name: 'Полная Дизайн-система & Брендбук', price: 45000, days: 3 },
  ];

  const featuresList: FeatureOption[] = [
    { id: 'ai-bot', name: 'Интеллектуальный AI-бот / Чат 24/7', price: 45000, days: 3 },
    { id: 'paygate', name: 'Платежный шлюз (МИР / СБП / Crypto)', price: 35000, days: 2 },
    { id: 'crm', name: 'Синхронизация с CRM (amoCRM / 1С)', price: 30000, days: 2 },
    { id: 'i18n', name: 'Мультиязычность (RU / EN / CN)', price: 25000, days: 2 },
    { id: 'rbac', name: 'Личные кабинеты с разделением ролей', price: 55000, days: 4 },
  ];

  const [selectedType, setSelectedType] = useState<string>('landing');
  const [selectedDesign, setSelectedDesign] = useState<string>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['ai-bot', 'paygate']);
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  // Calculations
  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];
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

    const summary = `Калькулятор: ${currentType.name}, Дизайн: ${currentDesign.name}, Функции: [${featureNames}], Срочность: ${
      isUrgent ? 'Срочный' : 'Обычный'
    }. Оценка: ${finalPrice.toLocaleString('ru-RU')} ₽ (~${finalDays} дн.)`;

    onApplyCalculation(summary, finalPrice);
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>ОНЛАЙН СМЕТА ЗА 1 МИНУТУ</span>
        </div>
        <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          КАЛЬКУЛЯТОР СТОИМОСТИ{' '}
          <span className="text-[#daa520]">& СРОКОВ</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3">
          Сконфигурируйте состав проекта и получите предварительную смету. Мы гарантируем точность расчета до 95%.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Config Controls */}
        <div className="lg:col-span-8 space-y-8 bg-[#0c0c10] p-6 sm:p-8 rounded-2xl border border-white/10">
          {/* Step 1: Project Type */}
          <div>
            <label className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-3">
              1. Выберите тип вашего продукта:
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
                    от {type.basePrice.toLocaleString('ru-RU')} ₽
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Design tier */}
          <div>
            <label className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-3">
              2. Уровень проработки дизайна & визуала:
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
                    {tier.price === 0 ? 'Включено в базу' : `+${tier.price.toLocaleString('ru-RU')} ₽`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Extra Features */}
          <div>
            <label className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-3">
              3. Дополнительные модули и интеграции:
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
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
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
                      +{feature.price.toLocaleString('ru-RU')} ₽
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
              <span className="flex-1">
                Срочный запуск (+25% к стоимости, ускорение разработки на 35%)
              </span>
              <span className="text-[#daa520] font-bold">Fast-Track</span>
            </label>
          </div>
        </div>

        {/* Right Sticky Calculation Summary */}
        <div className="lg:col-span-4 sticky top-28 space-y-4">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0c10] border-2 border-[#daa520]/40 shadow-[0_0_30px_rgba(218,165,32,0.15)] relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8a8aa0]">
                Оценка сметы
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                СКИДКА 10% АКТИВНА
              </span>
            </div>

            {/* Total price display */}
            <div className="mb-6">
              <div className="font-unbounded font-black text-3xl sm:text-4xl text-[#daa520] mb-1">
                {finalPrice.toLocaleString('ru-RU')} ₽
              </div>
              <div className="font-mono text-xs text-[#8a8aa0] flex items-center gap-2">
                <span>Срок:</span>
                <strong className="text-white">~{finalDays} рабочих дней</strong>
              </div>
            </div>

            {/* Included highlights */}
            <div className="space-y-2 border-t border-b border-white/10 py-4 mb-6 font-mono text-xs text-[#8a8aa0]">
              <div className="flex items-center justify-between">
                <span>Продукт:</span>
                <span className="text-white font-bold">{currentType.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Доп. модулей:</span>
                <span className="text-[#daa520] font-bold">{selectedFeatures.length} шт</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Гарантия:</span>
                <span className="text-white">60 дней SLA</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleApply}
              className="w-full py-4 rounded-xl bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(218,165,32,0.35)] transition-all cursor-pointer mb-3"
              id="calc-save-btn"
            >
              <Sparkles className="w-4 h-4" />
              <span>Зафиксировать расчет</span>
            </button>

            <p className="font-inter text-[11px] text-[#555570] text-center">
              *Точная смета фиксируется в официальном договоре после короткого звонка.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0c10] border border-white/5 flex items-center gap-3 text-xs font-mono text-[#8a8aa0]">
            <ShieldCheck className="w-5 h-5 text-[#daa520] shrink-0" />
            <span>Предоплата разбивается на этапы 50% / 50%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
