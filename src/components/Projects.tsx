import React, { useState } from 'react';
import { ExternalLink, Github, FileText, ArrowUpRight, Filter, Cpu } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: { id: ProjectCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Projects', count: PROJECTS.length },
  { id: 'client', label: 'Client Projects', count: PROJECTS.filter(p => p.category === 'client').length },
  { id: 'personal', label: 'Personal Projects', count: PROJECTS.filter(p => p.category === 'personal').length }
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#242426]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C7CFF] mb-3 block">
            SELECTED PROJECTS & PRODUCTION WORK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F5F5]">
            Featured Engineering Work
          </h2>
        </div>
        <p className="text-sm text-[#A1A1AA] max-w-md mt-4 md:mt-0 leading-relaxed">
          Client engagements and personal applications engineered end-to-end to solve real-world problems.
        </p>
      </div>

      {/* Engineering Category Filter Bar - Strictly 3 Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Project categories">
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717A] mr-2">
          <Filter className="w-3.5 h-3.5 text-[#7C7CFF]" />
          <span>Section:</span>
        </div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={selectedCategory === cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#7C7CFF] flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-[#F5F5F5] text-[#050505] font-semibold shadow-sm'
                : 'bg-[#111113] hover:bg-[#1a1a1e] text-[#A1A1AA] hover:text-[#F5F5F5] border border-[#242426]'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              selectedCategory === cat.id
                ? 'bg-black/15 text-black font-bold'
                : 'bg-[#1c1c1f] text-[#71717A]'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-16 md:space-y-20">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-[#0B0B0C] border border-[#242426] rounded-2xl p-6 md:p-8 transition-colors hover:border-[#3a3a3e]"
          >
            {/* Visual Preview Area */}
            <div className="min-w-0 lg:sticky lg:top-28 self-start overflow-hidden rounded-xl bg-[#111113] border border-[#242426]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Content & Metadata Area */}
            <div className="min-w-0 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#D4D4D8] bg-[#161619] border border-[#27272A] px-2.5 py-1 rounded">
                      {project.category === 'client' ? 'Client Project' : 'Personal Project'}
                    </span>
                    <span className="text-xs font-mono text-[#7C7CFF] bg-[#111113] border border-[#242426] px-2.5 py-1 rounded">
                      {project.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded">
                    {project.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#F5F5F5] group-hover:text-[#7C7CFF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  <strong className="text-[#F5F5F5] font-medium">Problem:</strong> {project.problem}
                </p>

                {/* Key Technical Trade-off / Architecture Decision */}
                {project.tradeoffSummary && (
                  <div className="text-xs text-[#A1A1AA] border-l-2 border-[#7C7CFF] pl-3 py-1 leading-relaxed bg-[#111113]/50 rounded-r-lg">
                    <span className="text-[#F5F5F5] font-mono text-[11px] font-medium block mb-0.5">Engineering approach:</span>
                    {project.tradeoffSummary}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111113] border border-[#242426] text-[#A1A1AA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links & CTA */}
              <div className="pt-5 border-t border-[#242426] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F5F5] hover:text-[#7C7CFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF] rounded px-1 py-0.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <>
                      <span className="text-[#242426]">/</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F5F5] hover:text-[#7C7CFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF] rounded px-1 py-0.5"
                      >
                        <span>Source</span>
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#050505] bg-[#F5F5F5] hover:bg-[#e0e0e0] px-4 py-2.5 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
