import React from 'react';
import { Code, Server, Cpu, Users } from 'lucide-react';
import { CAPABILITIES } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-[#7C7CFF]" />,
  Server: <Server className="w-5 h-5 text-[#7C7CFF]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#7C7CFF]" />,
  Users: <Users className="w-5 h-5 text-[#7C7CFF]" />,
};

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#242426]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#242426]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C7CFF] mb-3 block">
            EXPERTISE & SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F5F5]">
            Full-Stack & Engineering Capabilities
          </h2>
        </div>
        <p className="text-sm text-[#A1A1AA] max-w-md mt-4 md:mt-0 leading-relaxed">
          From relational database schemas to modern reactive browser interfaces and AI workflow integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.id}
            className="group h-full min-h-[31rem] bg-[#0B0B0C] border border-[#242426] hover:border-[#3a3a3e] rounded-2xl p-6 md:p-7 flex flex-col transition-colors"
          >
            <div className="space-y-5 flex-1">
              <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#242426] flex items-center justify-center">
                {iconMap[cap.iconName] || <Code className="w-5 h-5 text-[#7C7CFF]" />}
              </div>
              <h3 className="min-h-[3.05rem] text-xl md:text-[1.35rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#F5F5F5]">
                {cap.title}
              </h3>
              <p className="min-h-[7.2rem] text-[0.9375rem] text-[#A1A1AA] leading-[1.6] max-w-[32ch]">
                {cap.description}
              </p>
            </div>

            <div className="pt-7 mt-8 border-t border-[#242426] space-y-3 min-h-[10.5rem] md:min-h-[19rem] md:shrink-0">
              <div className="text-[0.6875rem] font-mono uppercase tracking-[0.12em] text-[#A1A1AA]">
                Focus Areas
              </div>
              <div className="flex flex-col items-stretch gap-1.5">
                {cap.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="w-full min-h-[2.5rem] flex items-center text-[0.75rem] font-mono leading-[1.35] px-2.5 py-1.5 rounded-md bg-[#111113] border border-[#242426] text-[#C4C4CC]"
                  >
                    {detail}
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
