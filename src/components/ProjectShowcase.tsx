import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, TrendingUp, Filter, Search } from 'lucide-react';

interface ProjectShowcaseProps {
  onRequestProject: (presetMessage?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onRequestProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'Все проекты (6)' },
    { id: 'ai', label: 'AI & Нейросети' },
    { id: 'ecommerce', label: 'Финтех & E-Commerce' },
    { id: 'saas', label: 'SaaS & Аналитика' },
    { id: 'web', label: 'Веб-сервисы' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[11px] font-bold text-[#daa520] tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ПОРТФОЛИО & РЕАЛИЗОВАННЫЕ КЕЙСЫ</span>
          </div>
          <h2 className="font-unbounded font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            ПРОЕКТЫ, КОТОРЫЕ{' '}
            <span className="text-[#daa520]">ПРИНОСЯТ ПРИБЫЛЬ</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#8a8aa0] mt-3 max-w-xl">
            Каждый кейс спроектирован с упором на конверсию, отказоустойчивость и окупаемость инвестиций клиента.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a8aa0]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по стеку или названию..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0c0c10] border border-white/10 focus:border-[#daa520] text-xs font-mono text-white placeholder-[#555570] focus:outline-none transition-all"
            id="projects-search-input"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/5">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#555570] mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Фильтр:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#daa520] text-[#050507] shadow-[0_0_15px_rgba(218,165,32,0.3)]'
                : 'bg-[#0c0c10] text-[#8a8aa0] hover:text-white border border-white/5 hover:border-white/15'
            }`}
            id={`filter-btn-${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="group relative rounded-2xl bg-[#0c0c10] border border-white/8 hover:border-[#daa520]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(218,165,32,0.1)] hover:-translate-y-1 overflow-hidden"
          >
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded bg-[#daa520]/10 border border-[#daa520]/30 font-mono text-[10px] font-bold text-[#daa520] tracking-wider uppercase">
                  {project.tag}
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 font-mono text-[10px] text-[#8a8aa0] tracking-wider uppercase">
                  {project.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-unbounded font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-[#daa520] transition-colors leading-snug">
                {project.title}
              </h3>

              {/* Short pitch */}
              <p className="font-inter text-xs text-[#8a8aa0] leading-relaxed mb-6 line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Highlight Metric */}
              <div className="p-3 rounded-xl bg-[#050507] border border-white/5 mb-6 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8a8aa0]">
                    {project.metrics[0].label}
                  </span>
                  <span className="font-unbounded font-black text-lg text-[#daa520]">
                    {project.metrics[0].value}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#daa520]/10 flex items-center justify-center text-[#daa520]">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Stack Chips & Actions */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 font-mono text-[10px] text-[#8a8aa0]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.03] font-mono text-[10px] text-[#555570]">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-white/5 hover:bg-[#daa520]/15 border border-white/10 hover:border-[#daa520]/50 font-mono text-xs font-bold text-white hover:text-[#daa520] flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  id={`view-case-${project.id}`}
                >
                  <span>Кейс детально</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onRequestProject(`Интересует проект наподобие: ${project.title}`)}
                  className="p-2.5 rounded-lg border border-white/10 hover:border-[#daa520] bg-white/[0.02] text-[#8a8aa0] hover:text-[#daa520] transition-all cursor-pointer"
                  title="Заказать аналогичный"
                  id={`order-similar-${project.id}`}
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 p-8 rounded-2xl bg-[#0c0c10] border border-white/5">
          <p className="font-mono text-sm text-[#8a8aa0] mb-4">
            Проектов по запросу «{searchQuery}» не найдено.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="px-4 py-2 rounded-lg bg-[#daa520] text-[#050507] font-mono text-xs font-bold uppercase"
          >
            Сбросить фильтры
          </button>
        </div>
      )}

      {/* Case study modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(preset) => onRequestProject(preset)}
      />
    </section>
  );
};
