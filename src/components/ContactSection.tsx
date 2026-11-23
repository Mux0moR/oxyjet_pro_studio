import React, { useState, useEffect } from 'react';
import { Send, Sparkles, CheckCircle2, Mail, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackEvent } from '../utils/analytics';

interface ContactSectionProps {
  presetMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ presetMessage }) => {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [budgetId, setBudgetId] = useState('b2');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (presetMessage) {
      setMessage((prev) => (prev ? `${prev}\n\n${presetMessage}` : presetMessage));
      setSubmitted(false);
      setSubmitError(null);
    }
  }, [presetMessage]);

  const budgetOptions = t.contactSection.budgetOptions;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const SCRIPT_URL =
      'https://script.google.com/macros/s/AKfycbw2jQR9bNUAKIPYMqbN6lk6mFjrc5AtIpUegQ452-IWztIr7VehKCMQRwNsyA0FNkoHvQ/exec';

    const selectedBudget =
      budgetOptions.find((opt) => opt.id === budgetId)?.label || budgetId;

    const payload = new URLSearchParams({
      name: name.trim(),
      contact: contact.trim(),
      email: email.trim(),
      budget: selectedBudget,
      projectDetails: message.trim(),
      language,
    });

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload,
      });
      trackEvent('generate_lead', {
        budget: selectedBudget,
        language,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Lead submission error:', err);
      const errorText =
        language === 'ru'
          ? 'Не удалось отправить заявку. Пожалуйста, напишите нам в Telegram или WhatsApp.'
          : language === 'ka'
            ? 'განაცხადის გაგზავნა ვერ მოხერხდა. გთხოვთ მოგვწეროთ Telegram-ზე ან WhatsApp-ზე.'
            : 'Failed to submit inquiry. Please message us directly on Telegram or WhatsApp.';
      setSubmitError(errorText);
    } finally {
      setIsSubmitting(false);
    }
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
              <span>{t.contactSection.badge}</span>
            </div>

            <h2 className="font-unbounded font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              {t.contactSection.titlePrefix}
              <span className="text-[#daa520]">{t.contactSection.titleHighlight}</span>
            </h2>

            <p className="font-inter text-xs sm:text-sm text-[#8a8aa0] leading-relaxed">
              {t.contactSection.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 font-mono text-xs text-[#e8e8ed]">
                <div className="w-8 h-8 rounded-lg bg-[#050507] border border-white/10 flex items-center justify-center text-[#daa520] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>{t.contactSection.responseSpeed}</span>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-[#e8e8ed]">
                <div className="w-8 h-8 rounded-lg bg-[#050507] border border-white/10 flex items-center justify-center text-[#daa520] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>{t.contactSection.ndaNote}</span>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="pt-6 border-t border-white/10">
              <span className="font-mono text-[10px] text-[#8a8aa0] uppercase tracking-wider block mb-3">
                {t.contactSection.directLabel}
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://t.me/oxyjetprostudio_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 px-4 rounded-lg bg-[#050507] hover:bg-[#daa520] border border-white/10 hover:border-[#daa520] text-white hover:text-[#050507] font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2.5 transition-all group"
                  id="direct-telegram"
                >
                  <Send className="w-4 h-4 text-[#daa520] group-hover:text-[#050507] transition-colors shrink-0" />
                  <span>@oxyjetprostudio_bot</span>
                </a>
                <a
                  href="https://wa.me/995555411240"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('contact_whatsapp', { source: 'contact_section' })}
                  className="w-full h-11 px-4 rounded-lg bg-[#050507] hover:bg-[#daa520] border border-white/10 hover:border-[#daa520] text-white hover:text-[#050507] font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2.5 transition-all group"
                  id="direct-whatsapp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#daa520] group-hover:text-[#050507] transition-colors shrink-0" />
                  <span>WhatsApp: +995 555 411240</span>
                </a>
                <a
                  href="mailto:hello@oxyjet.win"
                  className="w-full h-11 px-4 rounded-lg bg-[#050507] hover:bg-[#daa520] border border-white/10 hover:border-[#daa520] text-white hover:text-[#050507] font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2.5 transition-all group"
                  id="direct-email"
                >
                  <Mail className="w-4 h-4 text-[#daa520] group-hover:text-[#050507] transition-colors shrink-0" />
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
                  {t.contactSection.successTitle}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] max-w-md leading-relaxed mb-6">
                  {t.contactSection.successGreeting}
                  {name}
                  {t.contactSection.successBody}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-5 py-2.5 rounded-lg border border-white/15 hover:border-[#daa520] font-mono text-xs text-white uppercase tracking-wider transition-all cursor-pointer"
                >
                  {t.contactSection.sendAnotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="project-inquiry-form">
                <div>
                  <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                    {t.contactSection.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contactSection.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
                    id="input-name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                      {t.contactSection.contactLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={t.contactSection.contactPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
                      id="input-contact"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                      {t.contactSection.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contactSection.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-sm font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
                      id="input-email"
                    />
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-2">
                    {t.contactSection.budgetLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setBudgetId(opt.id)}
                        className={`py-2 px-3 rounded-lg border text-left font-mono text-xs transition-all cursor-pointer ${
                          budgetId === opt.id
                            ? 'border-[#daa520] bg-[#daa520]/15 text-white font-bold'
                            : 'border-white/10 bg-[#0c0c10] text-[#8a8aa0] hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] font-bold text-[#8a8aa0] uppercase tracking-wider block mb-1.5">
                    {t.contactSection.taskLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contactSection.taskPlaceholder}
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
                    <span>{t.contactSection.submittingBtn}</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{t.contactSection.submitBtn}</span>
                    </>
                  )}
                </button>

                {submitError && (
                  <p
                    role="alert"
                    id="submit-error-message"
                    className="px-3.5 py-2.5 rounded-lg bg-red-500/10 border border-red-500/30 font-mono text-xs text-red-400 text-center"
                  >
                    {submitError}
                  </p>
                )}

                <p className="font-mono text-[10px] text-[#555570] text-center">
                  {t.contactSection.privacyNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
