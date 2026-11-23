import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { CookieConsentStatus } from '../utils/analytics';

interface CookieBannerProps {
  consentStatus: CookieConsentStatus;
  onAccept: () => void;
  onDecline: () => void;
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  consentStatus,
  onAccept,
  onDecline,
  onOpenPrivacy,
}) => {
  const { t } = useLanguage();

  if (consentStatus !== null) return null;

  return (
    <aside
      id="cookie-consent-banner"
      role="dialog"
      aria-label={t.cookieConsent.title}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-40 rounded-2xl bg-[#0c0c10]/95 backdrop-blur-xl border border-white/15 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3 mb-3.5">
        <div className="w-8 h-8 rounded-lg bg-[#050507] border border-[#daa520]/40 flex items-center justify-center text-[#daa520] shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#daa520] block mb-1">
            {t.cookieConsent.badge}
          </span>
          <h3 className="font-unbounded font-bold text-sm text-white mb-1.5">
            {t.cookieConsent.title}
          </h3>
          <p className="font-inter text-xs text-[#8a8aa0] leading-relaxed">
            {t.cookieConsent.description}{' '}
            <button
              type="button"
              onClick={onOpenPrivacy}
              id="cookie-privacy-link"
              className="text-[#daa520] hover:text-[#ffce33] underline underline-offset-4 transition-colors cursor-pointer font-medium"
            >
              {t.cookieConsent.privacyLink}
            </button>
            .
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={onAccept}
          id="cookie-accept-btn"
          className="flex-1 py-2.5 px-4 rounded-lg bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_18px_rgba(218,165,32,0.28)] transition-all cursor-pointer"
        >
          {t.cookieConsent.acceptBtn}
        </button>
        <button
          type="button"
          onClick={onDecline}
          id="cookie-decline-btn"
          className="flex-1 py-2.5 px-4 rounded-lg bg-[#050507] border border-white/15 hover:border-white/30 text-[#8a8aa0] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
        >
          {t.cookieConsent.declineBtn}
        </button>
      </div>
    </aside>
  );
};
