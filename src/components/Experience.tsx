import React from 'react';
import { Calendar } from 'lucide-react';
import { EXPERIENCES } from '../data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#242426]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#242426]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C7CFF] mb-3 block">
            CAREER HISTORY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5]">
            Professional Experience
          </h2>
        </div>
        <p className="text-sm text-[#A1A1AA] max-w-md mt-4 md:mt-0">
          A quick look at the roles, internships, and technical communities I have been part of.
        </p>
      </div>

      <div className="relative border-l border-[#242426] ml-3.5 sm:ml-6 space-y-8">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-10 group">
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0B0B0C] border border-[#242426] group-hover:border-[#7C7CFF] flex items-center justify-center transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-[#7C7CFF]" />
            </div>

            <div className="bg-[#0B0B0C] border border-[#242426] hover:border-[#3a3a3e] rounded-2xl p-5 sm:p-8 transition-colors space-y-6">
              {/* Header info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5]">{exp.role}</h3>
                  <div className="text-sm font-medium text-[#7C7CFF] mt-1">{exp.company}</div>
                </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA]">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#111113] border border-[#242426]">
                    <Calendar className="w-3.5 h-3.5 text-[#7C7CFF]" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {exp.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A]">Key Contributions</div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F5F5F5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF] mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#242426] flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#111113] border border-[#242426] text-[#A1A1AA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
