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
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#242426]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#242426]">
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
            className="group bg-[#0B0B0C] border border-[#242426] hover:border-[#3a3a3e] rounded-2xl p-6 md:p-7 flex flex-col justify-between transition-colors"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#111113] border border-[#242426] flex items-center justify-center">
                {iconMap[cap.iconName] || <Code className="w-5 h-5 text-[#7C7CFF]" />}
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5]">{cap.title}</h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {cap.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#242426] space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                Key Focus Areas
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cap.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111113] border border-[#242426] text-[#A1A1AA]"
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
