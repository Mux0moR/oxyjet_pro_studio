import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Send, Terminal, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  onOpenContact: (presetMessage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.links.cases, href: '#projects' },
    { label: t.nav.links.services, href: '#services' },
    { label: t.nav.links.calculator, href: '#calculator' },
    { label: t.nav.links.process, href: '#process' },
    { label: t.nav.links.stack, href: '#stack' },
    { label: t.nav.links.testimonials, href: '#testimonials' },
    { label: t.nav.links.faq, href: '#faq' },
  ];

  const renderLanguageSwitcher = (idPrefix: string) => (
    <div
      role="group"
      aria-label={t.nav.langSwitchAria}
      className="flex items-center p-0.5 rounded-lg bg-[#0c0c10] border border-white/15 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider shrink-0"
      id={`${idPrefix}-lang-switcher`}
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-1.5 sm:px-2 py-1 rounded-md transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-[#daa520] text-[#050507] shadow-[0_0_12px_rgba(218,165,32,0.3)]'
            : 'text-[#8a8aa0] hover:text-white'
        }`}
        id={`${idPrefix}-lang-en`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-white/20 select-none px-0.5">|</span>
      <button
        type="button"
        onClick={() => setLanguage('ru')}
        className={`px-1.5 sm:px-2 py-1 rounded-md transition-all cursor-pointer ${
          language === 'ru'
            ? 'bg-[#daa520] text-[#050507] shadow-[0_0_12px_rgba(218,165,32,0.3)]'
            : 'text-[#8a8aa0] hover:text-white'
        }`}
        id={`${idPrefix}-lang-ru`}
        aria-pressed={language === 'ru'}
      >
        RU
      </button>
      <span className="text-white/20 select-none px-0.5">|</span>
      <button
        type="button"
        onClick={() => setLanguage('ka')}
        className={`px-1.5 sm:px-2 py-1 rounded-md transition-all cursor-pointer ${
          language === 'ka'
            ? 'bg-[#daa520] text-[#050507] shadow-[0_0_12px_rgba(218,165,32,0.3)]'
            : 'text-[#8a8aa0] hover:text-white'
        }`}
        id={`${idPrefix}-lang-ka`}
        aria-pressed={language === 'ka'}
      >
        KA
      </button>
    </div>
  );

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050507]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#050507]/50 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 text-white group focus:outline-none shrink-0"
          id="nav-logo"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0c0c10] border border-[#daa520]/40 flex items-center justify-center text-[#daa520] group-hover:border-[#daa520] group-hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-unbounded font-black tracking-tight text-sm sm:text-base xl:text-lg flex items-center gap-1.5 text-white">
              OxyJet
              <span className="text-[#daa520] text-[10px] sm:text-xs font-mono font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#daa520]/10 border border-[#daa520]/30 uppercase">
                studio
              </span>
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#8a8aa0] tracking-wider uppercase -mt-0.5">
              {t.nav.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#8a8aa0] hover:text-[#daa520] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions & Language Switcher */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
          <div className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#0c0c10] border border-white/10 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot"></span>
            <span className="font-mono text-[10px] text-[#daa520] font-bold tracking-wider uppercase">
              {t.nav.slotsBadge}
            </span>
          </div>

          {renderLanguageSwitcher('desktop')}

          <a
            href="https://t.me/oxyjetprostudio_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 xl:px-3 py-2 rounded-lg border border-white/20 hover:border-[#daa520] text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#daa520] bg-white/[0.03] transition-all whitespace-nowrap"
            id="nav-telegram-btn"
            title={t.nav.telegram}
          >
            <Send className="w-3.5 h-3.5 text-[#daa520]" />
            <span className="hidden xl:inline">{t.nav.telegram}</span>
          </a>

          <button
            onClick={() => onOpenContact(t.nav.presets.headerCta)}
            className="flex items-center gap-1.5 px-3 xl:px-3.5 py-2 rounded-lg bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-[11px] xl:text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(218,165,32,0.25)] hover:shadow-[0_0_25px_rgba(218,165,32,0.45)] transition-all cursor-pointer whitespace-nowrap"
            id="nav-cta-btn"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav.discussProject}</span>
          </button>
        </div>

        {/* Mobile actions & menu button */}
        <div className="flex sm:hidden items-center gap-1.5">
          {renderLanguageSwitcher('mobile')}
          <button
            onClick={() => onOpenContact(t.nav.presets.mobileQuickCta)}
            className="p-2 rounded-lg bg-[#daa520] text-[#050507]"
            id="mobile-quick-cta"
            title={t.nav.quickOrderTitle}
            aria-label={t.nav.quickOrderTitle}
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-white/10 text-white hover:border-[#daa520]"
            id="mobile-menu-toggle"
            aria-label={t.nav.toggleMenuAria}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-white/10 bg-[#050507]/98 px-6 py-6 backdrop-blur-2xl transition-all"
        >
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-[#0c0c10] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot"></span>
            <span className="font-mono text-xs text-[#daa520] font-bold tracking-wider uppercase">
              {t.nav.slotsMobileBanner}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm font-semibold uppercase tracking-wider text-[#e8e8ed] hover:text-[#daa520] py-1 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a8aa0]" />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact(t.nav.presets.mobileDrawerCta);
              }}
              className="w-full py-3 rounded-lg bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(218,165,32,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.nav.discussProject}</span>
            </button>
            <a
              href="https://t.me/oxyjetprostudio_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#daa520]"
            >
              <Send className="w-4 h-4 text-[#daa520]" />
              <span>{t.nav.telegramDrawer}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
