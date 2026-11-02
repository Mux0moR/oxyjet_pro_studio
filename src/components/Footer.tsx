import React from 'react';
import { Terminal, ArrowUp, Send, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
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
            Продающая веб-разработка, AI-агенты и масштабируемые цифровые решения с упором на конверсию и ROI.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase tracking-wider">
          <a href="#projects" className="hover:text-[#daa520] transition-colors">
            Кейсы
          </a>
          <a href="#services" className="hover:text-[#daa520] transition-colors">
            Тарифы
          </a>
          <a href="#calculator" className="hover:text-[#daa520] transition-colors">
            Калькулятор
          </a>
          <a href="#process" className="hover:text-[#daa520] transition-colors">
            Процесс
          </a>
          <a href="#testimonials" className="hover:text-[#daa520] transition-colors">
            Отзывы
          </a>
          <a href="#faq" className="hover:text-[#daa520] transition-colors">
            FAQ
          </a>
        </div>

        {/* Action / Back to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/oxyjetprostudio_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg border border-white/10 hover:border-[#daa520] text-white hover:text-[#daa520] transition-all"
            title="Telegram: @oxyjetprostudio_bot"
            aria-label="Telegram bot @oxyjetprostudio_bot"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href="mailto:hello@oxyjet.win"
            className="p-2.5 rounded-lg border border-white/10 hover:border-[#daa520] text-white hover:text-[#daa520] transition-all"
            title="Email: hello@oxyjet.win"
            aria-label="Email hello@oxyjet.win"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-white/10 hover:border-[#daa520] text-white hover:text-[#daa520] transition-all cursor-pointer"
            title="Наверх"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#555570]">
        <p>© 2025–2026 OxyJet Studio. Все права защищены.</p>
        <p className="flex items-center gap-1">
          Designed with high precision & speed
        </p>
      </div>
    </footer>
  );
};
