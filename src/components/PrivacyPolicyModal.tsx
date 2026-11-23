import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { CookieConsentStatus } from '../utils/analytics';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  consentStatus: CookieConsentStatus;
  onAcceptCookies: () => void;
  onDeclineCookies: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  consentStatus,
  onAcceptCookies,
  onDeclineCookies,
}) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const consentBadgeText =
    consentStatus === 'accepted'
      ? t.privacyModal.statusAccepted
      : consentStatus === 'declined'
        ? t.privacyModal.statusDeclined
        : t.privacyModal.statusPending;

  return (
    <div
      id="privacy-policy-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050507]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl bg-[#0c0c10] border border-white/15 shadow-2xl text-[#e8e8ed] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute -top-28 -right-28 w-72 h-72 bg-[#daa520]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Fixed Modal Header */}
        <div className="relative px-6 sm:px-8 pt-6 pb-5 border-b border-white/10 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[10px] font-bold text-[#daa520] tracking-wider uppercase mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.privacyModal.badge}</span>
            </div>
            <h2
              id="privacy-modal-title"
              className="font-unbounded font-black text-xl sm:text-2xl text-white"
            >
              {t.privacyModal.title}
            </h2>
            <p className="font-mono text-[11px] text-[#8a8aa0] mt-1">
              {t.privacyModal.updatedAt}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            id="privacy-modal-close-btn"
            aria-label={t.privacyModal.closeAria}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#daa520] text-[#8a8aa0] hover:text-white transition-all cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="relative px-6 sm:px-8 py-6 overflow-y-auto space-y-5">
          <p className="font-inter text-sm text-[#e8e8ed]/90 leading-relaxed">
            {t.privacyModal.intro}
          </p>

          <div className="space-y-4">
            {t.privacyModal.sections.map((section) => (
              <div
                key={section.title}
                className="p-4 sm:p-5 rounded-xl bg-[#050507] border border-white/10"
              >
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#daa520] mb-2">
                  {section.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#8a8aa0] leading-relaxed mb-3">
                  {section.body}
                </p>
                {section.items && section.items.length > 0 && (
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-inter text-xs text-[#e8e8ed]/85"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#daa520] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Direct Privacy Contact Box */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="font-mono text-xs text-[#8a8aa0]">
              {t.privacyModal.contactPrompt}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="mailto:hello@oxyjet.win"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#050507] border border-white/10 hover:border-[#daa520] font-mono text-xs text-white hover:text-[#daa520] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#daa520]" />
                <span>hello@oxyjet.win</span>
              </a>
              <a
                href="https://wa.me/995555411240"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#050507] border border-white/10 hover:border-[#daa520] font-mono text-xs text-white hover:text-[#daa520] transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#daa520]" />
                <span>+995 555 411240</span>
              </a>
            </div>
          </div>
        </div>

        {/* Fixed Modal Footer: Cookie Preference Controls */}
        <div className="relative px-6 sm:px-8 py-4 border-t border-white/10 bg-[#050507]/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="font-mono text-xs text-[#8a8aa0] flex items-center gap-2">
            <span>{t.privacyModal.statusLabel}</span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border ${
                consentStatus === 'accepted'
                  ? 'bg-[#daa520]/15 border-[#daa520]/40 text-[#daa520]'
                  : 'bg-white/5 border-white/15 text-[#e8e8ed]'
              }`}
            >
              {consentBadgeText}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onDeclineCookies}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#0c0c10] border border-white/15 hover:border-white/30 text-[#8a8aa0] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {t.cookieConsent.declineBtn}
            </button>
            <button
              type="button"
              onClick={onAcceptCookies}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {t.cookieConsent.acceptBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
