import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Send, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (presetMessage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Кейсы', href: '#projects' },
    { label: 'Услуги & Цены', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Процесс', href: '#process' },
    { label: 'Стек', href: '#stack' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050507]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#050507]/50 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 text-white group focus:outline-none"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0c0c10] border border-[#daa520]/40 flex items-center justify-center text-[#daa520] group-hover:border-[#daa520] group-hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-unbounded font-black tracking-tight text-base sm:text-lg flex items-center gap-1.5 text-white">
              OxyJet
              <span className="text-[#daa520] text-xs font-mono font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#daa520]/10 border border-[#daa520]/30 uppercase">
                studio
              </span>
            </span>
            <span className="font-mono text-[10px] text-[#8a8aa0] tracking-wider uppercase -mt-0.5">
              High-End Digital & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8a8aa0] hover:text-[#e8e8ed] hover:text-[#daa520] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0c10] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot"></span>
            <span className="font-mono text-[11px] text-[#daa520] font-bold tracking-wider uppercase">
              2 слота на Q3
            </span>
          </div>

          <a
            href="https://t.me/oxyjetprostudio_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-white/20 hover:border-[#daa520] text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#daa520] bg-white/[0.03] transition-all"
            id="nav-telegram-btn"
          >
            <Send className="w-3.5 h-3.5 text-[#daa520]" />
            <span>Telegram</span>
          </a>

          <button
            onClick={() => onOpenContact('Консультация по проекту')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(218,165,32,0.25)] hover:shadow-[0_0_25px_rgba(218,165,32,0.45)] transition-all cursor-pointer"
            id="nav-cta-btn"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Обсудить проект</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenContact('Консультация с мобильного меню')}
            className="p-2 rounded-lg bg-[#daa520] text-[#050507]"
            id="mobile-quick-cta"
            title="Заказать"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-white/10 text-white hover:border-[#daa520]"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
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
              Принимаем проекты // Свободно 2 слота
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
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
                onOpenContact('Заявка из мобильного меню');
              }}
              className="w-full py-3 rounded-lg bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(218,165,32,0.3)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Обсудить проект</span>
            </button>
            <a
              href="https://t.me/oxyjetprostudio_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#daa520]"
            >
              <Send className="w-4 h-4 text-[#daa520]" />
              <span>Написать в Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
