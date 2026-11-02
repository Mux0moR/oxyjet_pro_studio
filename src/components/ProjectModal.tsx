import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, TrendingUp, Clock, Building, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-case-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050507]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#0c0c10] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl my-8 text-[#e8e8ed] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Accent Glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#daa520]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#daa520] text-[#8a8aa0] hover:text-white transition-all cursor-pointer z-10"
          id="modal-close-btn"
          aria-label="Закрыть модальное окно"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags & Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded bg-[#daa520]/15 border border-[#daa520]/40 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase">
            {project.tag}
          </span>
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-[#8a8aa0] tracking-wider uppercase">
            {project.badge}
          </span>
          <div className="flex items-center gap-1.5 ml-auto text-xs font-mono text-[#8a8aa0] mr-8">
            <Clock className="w-3.5 h-3.5 text-[#daa520]" />
            <span>Срок разработки: {project.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="font-unbounded font-black text-2xl sm:text-3xl text-white mb-3">
          {project.title}
        </h2>

        {/* Client & Category info */}
        <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-white/10 font-mono text-xs text-[#8a8aa0]">
          <div className="flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#daa520]" />
            <span>Клиент: <strong className="text-white">{project.client}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#daa520]" />
            <span>Категория: <strong className="text-white">{project.categoryLabel}</strong></span>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-3.5 rounded-xl bg-[#050507] border border-white/10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-mono text-[10px] text-[#8a8aa0] uppercase tracking-wider">
                  {metric.label}
                </span>
                <TrendingUp className="w-3.5 h-3.5 text-[#daa520]" />
              </div>
              <span className="font-unbounded font-black text-xl text-[#daa520]">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge and Solution Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-red-500/20">
            <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">
              Исходная проблема & Вызов
            </span>
            <p className="font-inter text-sm text-[#8a8aa0] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-[#daa520]/30">
            <span className="font-mono text-xs font-bold text-[#daa520] uppercase tracking-wider block mb-2">
              Реализованное решение
            </span>
            <p className="font-inter text-sm text-[#8a8aa0] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-8">
          <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-3">
            Ключевые инженерные внедрения:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.architectureHighlights.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-[#050507] border border-white/5 font-inter text-xs text-[#e8e8ed]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#daa520] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <span className="font-mono text-xs font-bold text-[#8a8aa0] uppercase tracking-wider block mb-2.5">
            Технологический стек:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-[#050507] border border-white/10 font-mono text-xs text-[#e8e8ed]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client Quote */}
        {project.quote && (
          <div className="p-5 rounded-xl bg-[#050507] border-l-2 border-[#daa520] border-y border-r border-white/5 mb-8">
            <p className="font-inter italic text-sm text-white/90 mb-3">
              «{project.quote.text}»
            </p>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#daa520] font-bold">{project.quote.author}</span>
              <span className="text-[#555570]">•</span>
              <span className="text-[#8a8aa0]">{project.quote.role}</span>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/20 hover:border-[#daa520] text-xs font-mono text-white hover:text-[#daa520] transition-all"
              >
                <span>Превью демо</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={() => {
              onRequestSimilar(`Интересует разработка по примеру кейса: ${project.title}`);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#daa520] hover:bg-[#ffce33] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(218,165,32,0.3)] transition-all cursor-pointer"
            id="modal-request-similar-btn"
          >
            <Sparkles className="w-4 h-4" />
            <span>Хочу похожий проект</span>
          </button>
        </div>
      </div>
    </div>
  );
};
