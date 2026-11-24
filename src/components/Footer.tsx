import React from 'react';
import { Terminal, ArrowUp, Send, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { trackEvent, trackTelegramClick } from '../utils/analytics';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/8 bg-[#050507] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#8a8aa0]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        {/* Brand & Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#0c0c10] border border-[#daa520]/40 flex items-center justify-center text-[#daa520]">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-unbounded font-black tracking-tight text-lg text-white">
              OxyJet <span className="text-[#daa520] font-mono text-xs">STUDIO</span>
            </span>
          </div>
          <p className="font-mono text-xs text-[#555570] max-w-sm">
            {t.footer.tagline}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wider">
          <a href="#projects" className="hover:text-[#daa520] transition-colors">
            {t.footer.links.cases}
          </a>
          <a href="#services" className="hover:text-[#daa520] transition-colors">
            {t.footer.links.services}
          </a>
          <a href="#calculator" className="hover:text-[#daa520] transition-colors">
            {t.footer.links.calculator}
          </a>
          <a href="#process" className="hover:text-[#daa520] transition-colors">
            {t.footer.links.process}
          </a>
          <a href="#testimonials" className="hover:text-[#daa520] transition-colors">
            {t.footer.links.testimonials}
          </a>
          <a href="#faq" className="hover:text-[#daa520] transition-colors">
            {t.footer.links.faq}
          </a>
        </div>

        {/* Action / Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/995555411240"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('contact_whatsapp', { source: 'footer' })}
            className="px-3 py-2 rounded-lg bg-[#0c0c10] border border-white/[0.06] hover:border-[#daa520] text-white hover:text-[#daa520] font-mono text-xs font-semibold tracking-wide flex items-center gap-2 transition-all whitespace-nowrap"
            title="WhatsApp: +995 555 411240"
            aria-label="WhatsApp: +995 555 411240"
            id="footer-whatsapp-link"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#daa520] shrink-0" />
            <span>WhatsApp: +995 555 411240</span>
          </a>
          <a
            href="https://t.me/oxyjetprostudio_bot"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackTelegramClick('footer', language)}
            className="p-2.5 rounded-lg bg-[#0c0c10] border border-white/[0.06] hover:border-[#daa520] text-white hover:text-[#daa520] transition-all"
            title="Telegram: @oxyjetprostudio_bot"
            aria-label="Telegram bot @oxyjetprostudio_bot"
            id="footer-telegram-link"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href="mailto:hello@oxyjet.win"
            className="p-2.5 rounded-lg bg-[#0c0c10] border border-white/[0.06] hover:border-[#daa520] text-white hover:text-[#daa520] transition-all"
            title="Email: hello@oxyjet.win"
            aria-label="Email hello@oxyjet.win"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#0c0c10] border border-white/[0.06] hover:border-[#daa520] text-white hover:text-[#daa520] transition-all cursor-pointer"
            title={t.footer.scrollToTopTitle}
            aria-label={t.footer.scrollToTopTitle}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#555570]">
        <p>{t.footer.copyright}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onOpenPrivacy}
            id="footer-privacy-link"
            className="text-[#8a8aa0] hover:text-[#daa520] transition-colors cursor-pointer underline underline-offset-4 decoration-white/15 hover:decoration-[#daa520]"
          >
            {t.footer.privacyPolicy}
          </button>
          <p className="flex items-center gap-1">{t.footer.designedBy}</p>
        </div>
      </div>
    </footer>
  );
};
