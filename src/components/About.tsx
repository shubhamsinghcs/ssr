import React from 'react';
import { Github, Linkedin, Mail, CheckCircle2, Terminal, Server, Cpu, Globe } from 'lucide-react';
import { PROFILE, HIRING_PROFILE } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#242426]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column - Profile & Quick Screening Card */}
        <div className="lg:col-span-5">
          <div className="bg-[#0B0B0C] border border-[#242426] rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header / Monogram & Avatar Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#111113] border border-[#242426] flex items-center justify-center text-xl font-bold font-mono text-[#F5F5F5]">
                SSR
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F5F5]">{PROFILE.name}</h3>
                <p className="text-xs font-mono text-[#7C7CFF]">{PROFILE.title}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#242426] space-y-3 text-sm text-[#A1A1AA] leading-relaxed">
              <p>
                I’m a full-stack developer who likes taking an idea from the first screen all the way to a working product.
              </p>
              <p>
                I work across React, Next.js, JavaScript, TypeScript, databases, and backend systems, with a focus on keeping things simple and reliable.
              </p>
              <p>
                Outside of coding, I spend time building communities, organizing tech events, and learning by building things that solve real problems.
              </p>
            </div>

            {/* Certifications Block */}
            <div className="pt-3 border-t border-[#242426] space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#7C7CFF]">
                Certificates & Training
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Prompt Engineering', 'Google Cloud Study Jams (Gen AI)', 'TCS iON Career Edge'].map((cert) => (
                  <span key={cert} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111113] border border-[#242426] text-[#D4D4D8]">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="pt-2 border-t border-[#242426] space-y-1.5 text-xs text-[#A1A1AA]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#7C7CFF]">
                Focus & Interests
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#D4D4D8]">
                <span>Technical Blogging</span> | <span>Human Psychology</span> | <span>Book Reading</span>
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-3 pt-3 border-t border-[#242426]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111113] hover:bg-[#242426] text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111113] hover:bg-[#242426] text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#111113] hover:bg-[#242426] text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
                aria-label="X Twitter profile"
                title="X (Twitter)"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2.5 rounded-lg bg-[#111113] hover:bg-[#242426] text-[#F5F5F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
                aria-label="Email candidate"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Bio, Journey & Engineering Principles */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7C7CFF] block mb-2">
              ABOUT & BACKGROUND
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F5F5]">
              Building practical, maintainable software from database to browser.
            </h2>
            
            <p className="text-base text-[#A1A1AA] leading-relaxed mt-4">
              I am a full-stack developer and pre-final year Computer Science student at Indo Global College of Engineering (IGC), Chandigarh. I enjoy turning ambiguous requirements into structured, reliable software — whether that means designing normalized database schemas in PostgreSQL, writing backend APIs with Django and Node.js, or polishing responsive user interfaces with React and Tailwind CSS.
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed mt-3">
              Beyond individual coding, I care deeply about developer community and operational execution. As the GDG on Campus Organizer, I lead a student developer community, organize hands-on technical workshops, and host hackathons. In my operational work with VIZIANE, I coordinate directly between client stakeholders and development teams to keep deliverables aligned and on schedule.
            </p>
          </div>

          {/* Core Engineering Principles */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              Engineering Principles & Approach
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0B0B0C] border border-[#242426] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]">
                  <Server className="w-4 h-4 text-[#7C7CFF]" />
                  <span>Data Integrity First</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Carefully modeled relational schemas and authorization boundaries avoid migration headaches and protect user data from the start.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0B0C] border border-[#242426] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]">
                  <Terminal className="w-4 h-4 text-[#7C7CFF]" />
                  <span>Accessible, Mobile-First UI</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Interfaces must work reliably on low-bandwidth connections and varying screen sizes, with semantic HTML and keyboard accessibility.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0B0C] border border-[#242426] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]">
                  <Cpu className="w-4 h-4 text-[#7C7CFF]" />
                  <span>Pragmatic AI Tooling</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Leveraging LLM APIs and assistive developer tools selectively to automate boilerplate and accelerate feedback loops.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0B0B0C] border border-[#242426] space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]">
                  <CheckCircle2 className="w-4 h-4 text-[#7C7CFF]" />
                  <span>Community & Collaboration</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Active in Google Developer Groups and student hackathons — mentoring peers, sharing knowledge, and learning continuously.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
