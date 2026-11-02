import React, { useState, useEffect } from 'react';
import { Send, Sparkles, CheckCircle2, MessageSquare, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  presetMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ presetMessage }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('150 000 – 300 000 ₽');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (presetMessage) {
      setMessage((prev) => (prev ? `${prev}\n\n${presetMessage}` : presetMessage));
    }
  }, [presetMessage]);

  const budgetOptions = [
    'до 150 000 ₽',
    '150 000 – 300 000 ₽',
    '300 000 – 600 000 ₽',
    'от 600 000 ₽',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <div className="relative rounded-3xl bg-[#0c0c10] border border-white/12 p-6 sm:p-10 md:p-14 shadow-2xl overflow-hidden">
        {/* Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[#daa520]/10 blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Pitch & Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>СТАРТ ПРОЕКТА</span>
            </div>

            <h2 className="font-unbounded font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              ОБСУДИМ ВАШУ ИДЕЮ?{' '}
              <span className="text-[#daa520]">ОТВЕТИМ ЗА 15 МИНУТ</span>
            </h2>

            <p className="font-inter text-xs sm:text-sm text-[#8a8aa0] leading-relaxed">
              Оставьте заявку на бесплатную консультацию. Мы изучим задачу, покажем релевантные кейсы и составим детальную смету с календарным планом.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#e8e8ed]">
                <div className="w-8 h-8 rounded-lg bg-[#050507] border border-white/10 flex items-center justify-center text-[#daa520]">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Скорость первого ответа: до 15 минут</span>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-[#e8e8ed]">
                <div className="w-8 h-8 rounded-lg bg-[#050507] border border-white/10 flex items-center justify-center text-[#daa520]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Подписываем NDA до первого звонка</span>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="pt-6 border-t border-white/10">
              <span className="font-mono text-[10px] text-[#8a8aa0] uppercase tracking-wider block mb-3">
                Или напишите нам напрямую:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://t.me/oxyjetprostudio_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-[#daa520] border border-white/10 hover:border-[#daa520] text-white hover:text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                  id="direct-telegram"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>@oxyjetprostudio_bot</span>
                </a>
                <a
                  href="mailto:hello@oxyjet.win"
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-all"
                  id="direct-email"
                >
                  <Mail className="w-3.5 h-3.5 text-[#daa520]" />
                  <span>hello@oxyjet.win</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-[#050507] p-6 sm:p-8 rounded-2xl border border-white/10">
            {submitted ? (
              <div
                id="contact-success-state"
                className="py-12 text-center flex flex-col items-center animate-in zoom-in-95 duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#daa520]/20 border border-[#daa520] flex items-center justify-center text-[#daa520] mb-5 shadow-[0_0_30px_rgba(218,165,32,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-unbounded font-black text-2xl text-white mb-2">
                  ЗАЯВКА УСПЕШНО ПРИНЯТА!
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] max-w-md leading-relaxed mb-6">
                  Спасибо, {name}! Мы уже изучаем детали вашего запроса. Наш ведущий разработчик свяжется с вами по указанным контактам в течение 15 минут.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-5 py-2.5 rounded-lg border border-white/15 hover:border-[#daa520] font-mono text-xs text-white uppercase tracking-wider transition-all"
                >
                  Отправить еще одно сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="project-inquiry-form">
                <div>
                  <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Александр"
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
                    id="input-name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                      Telegram / WhatsApp / Телефон *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="@username или +7..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
                      id="input-contact"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                      Email (для отправки КП)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
                      id="input-email"
                    />
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-2">
                    Ориентировочный бюджет
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setBudget(opt)}
                        className={`py-2 px-3 rounded-lg border text-left font-mono text-xs transition-all cursor-pointer ${
                          budget === opt
                            ? 'border-[#daa520] bg-[#daa520]/15 text-white font-bold'
                            : 'border-white/10 bg-[#0c0c10] text-[#8a8aa0] hover:border-white/20'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                    Опишите задачу или прикрепите ссылку
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Например: Нужен продающий лендинг с AI-ботом и оплатой криптой/картами..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all resize-none"
                    id="input-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#daa520] hover:bg-[#ffce33] disabled:opacity-50 text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(218,165,32,0.35)] hover:shadow-[0_0_35px_rgba(218,165,32,0.5)] transition-all cursor-pointer"
                  id="submit-inquiry-btn"
                >
                  {isSubmitting ? (
                    <span>Отправка данных...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Получить смету и расчет за 15 минут</span>
                    </>
                  )}
                </button>

                <p className="font-mono text-[10px] text-[#555570] text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных и сохранение конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
