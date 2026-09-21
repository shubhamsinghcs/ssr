import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Award, Cpu } from 'lucide-react';
import { Project } from '../types';
import { PROFILE } from '../data';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, project]);

  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="case-study-dialog relative w-full max-w-5xl bg-[#0B0B0C] border border-[#242426] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#0B0B0C]/95 backdrop-blur border-b border-[#242426] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C7CFF] bg-[#111113] border border-[#242426] px-2.5 py-1 rounded">
              {project.category === 'client' ? 'Client Project' : 'Personal Project'}
            </span>
            <h2 id="case-study-title" className="text-lg md:text-xl font-bold text-[#F5F5F5] truncate max-w-md">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F5F5] bg-[#111113] hover:bg-[#1a1a1e] border border-[#242426] px-3 py-1.5 rounded-md transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F5F5] bg-[#111113] hover:bg-[#1a1a1e] border border-[#242426] px-3 py-1.5 rounded-md transition-colors"
              >
                <span>GitHub</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#111113] hover:bg-[#242426] text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-10 text-[#A1A1AA]">
          
          {/* Hero Banner */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg text-[#F5F5F5] font-medium">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#111113] border border-[#242426] text-[#A1A1AA]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden border border-[#242426] bg-[#111113]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-xl bg-[#111113] border border-[#242426]">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">Role</div>
              <div className="text-sm font-medium text-[#F5F5F5]">{project.role}</div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">Impact Metric</div>
              <div className="text-sm font-medium text-[#7C7CFF]">{project.metrics}</div>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1">Links</div>
              <div className="flex items-center gap-4 text-sm">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[#F5F5F5] hover:text-[#7C7CFF] underline">Live Demo</a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[#F5F5F5] hover:text-[#7C7CFF] underline">Source Code</a>
                )}
              </div>
            </div>
          </div>

          {/* Senior PM Evaluation: Key Technical Trade-Off */}
          {project.tradeoffSummary && (
            <div className="p-5 rounded-xl bg-[#111113] border border-[#7C7CFF]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C7CFF] font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Architectural Trade-Off & Decision Rationale</span>
              </div>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {project.tradeoffSummary}
              </p>
            </div>
          )}

          {/* Overview */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
              Overview
            </h2>
            <p className="text-base leading-relaxed">{cs.overview}</p>
          </section>

          {/* Problem & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-3 p-6 rounded-xl bg-[#111113] border border-[#242426]">
              <h2 className="text-lg font-bold text-[#F5F5F5]">The Problem</h2>
              <p className="text-sm leading-relaxed">{cs.problemStatement}</p>
            </section>
            <section className="space-y-3 p-6 rounded-xl bg-[#111113] border border-[#242426]">
              <h2 className="text-lg font-bold text-[#F5F5F5]">Project Goals</h2>
              <ul className="space-y-2">
                {cs.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#7C7CFF] shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Role & Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
              Role & Responsibilities
            </h2>
            <p className="text-base leading-relaxed">{cs.roleAndResponsibilities}</p>
          </section>

          {/* Design Decisions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
              Key Design Decisions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.designDecisions.map((dec, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#111113] border border-[#242426] space-y-2">
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">{dec.title}</h3>
                  <p className="text-xs leading-relaxed">{dec.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
              Technical Implementation
            </h2>
            <div className="space-y-4">
              {cs.technicalImplementation.map((impl, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#111113] border border-[#242426] space-y-2">
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">{impl.title}</h3>
                  <p className="text-xs leading-relaxed">{impl.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
              Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {cs.challenges.map((ch, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#111113] border border-[#242426] space-y-2">
                  <h3 className="text-sm font-semibold text-[#F5F5F5] text-amber-400">Challenge: {ch.title}</h3>
                  <p className="text-xs leading-relaxed"><strong className="text-[#F5F5F5]">Solution:</strong> {ch.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Responsive Behavior, Accessibility, Performance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#111113] border border-[#242426] space-y-2">
              <h3 className="text-sm font-semibold text-[#F5F5F5]">Responsive Behavior</h3>
              <p className="text-xs leading-relaxed">{cs.responsiveBehavior}</p>
            </div>
            <div className="p-5 rounded-xl bg-[#111113] border border-[#242426] space-y-2">
              <h3 className="text-sm font-semibold text-[#F5F5F5]">Accessibility (a11y)</h3>
              <p className="text-xs leading-relaxed">{cs.accessibility}</p>
            </div>
            <div className="p-5 rounded-xl bg-[#111113] border border-[#242426] space-y-2">
              <h3 className="text-sm font-semibold text-[#F5F5F5]">Performance</h3>
              <p className="text-xs leading-relaxed">{cs.performance}</p>
            </div>
          </div>

          {/* Results & Lessons Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-3 p-6 rounded-xl bg-[#111113] border border-[#242426]">
              <h2 className="text-lg font-bold text-[#F5F5F5]">Results & Impact</h2>
              <ul className="space-y-2">
                {cs.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Award className="w-4 h-4 text-[#7C7CFF] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="space-y-3 p-6 rounded-xl bg-[#111113] border border-[#242426]">
              <h2 className="text-lg font-bold text-[#F5F5F5]">Lessons Learned</h2>
              <p className="text-sm leading-relaxed">{cs.lessonsLearned}</p>
            </section>
          </div>

          {/* Screenshots Gallery */}
          {cs.screenshots.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#F5F5F5] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
                Visual Documentation
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {cs.screenshots.map((shot, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-[#242426] bg-[#111113] space-y-2 pb-3">
                    <img src={shot.url} alt={shot.caption} className="w-full h-auto object-cover max-h-[400px]" />
                    <p className="text-xs text-center font-mono text-[#71717A] px-4">{shot.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0B0B0C]/95 backdrop-blur border-t border-[#242426] px-6 py-4 flex items-center justify-between">
          <div className="text-xs font-mono text-[#71717A]">
            Project Case Study — {PROFILE.name}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#F5F5F5] hover:bg-[#e0e0e0] text-[#050505] font-medium text-xs font-mono uppercase tracking-wider transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
