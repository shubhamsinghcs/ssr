import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { PROFILE } from '../data';
import { ParticleText } from './ParticleText';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-start z-10 max-w-4xl">
        
        {/* Animated Hero Label */}
        <ParticleText
          text={PROFILE.status}
          className="text-sm sm:text-base font-semibold tracking-[0.18em] text-[#F5F5F5] leading-[1.08] mb-5"
        />

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] mb-3">
          {PROFILE.name}
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#D4D4D8] mb-6">
          Full Stack Developer <span className="text-[#7C7CFF]">&amp; AI</span>
        </h2>

        {/* Authentic Core Statement */}
        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-3xl font-normal leading-relaxed mb-8">
          {PROFILE.statement}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <a
            href="#projects"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-[#e0e0e0] text-[#050505] font-semibold px-6 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
          >
            <span>View My Work</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#0B0B0C] hover:bg-[#111113] text-[#F5F5F5] font-semibold px-5 py-3.5 rounded-lg text-xs font-mono uppercase tracking-wider border border-[#242426] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
          >
            <FileText className="w-3.5 h-3.5 text-[#7C7CFF]" />
            <span>Resume / PDF</span>
          </button>
        </div>

        {/* Core Credentials Bar */}
        <div className="mt-12 pt-8 border-t border-[#242426] grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] font-mono">B.Tech</div>
            <div className="text-xs text-[#A1A1AA] mt-0.5">CSE (Pursuing 2027)</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] font-mono">GDG</div>
            <div className="text-xs text-[#A1A1AA] mt-0.5">Campus Organizer</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] font-mono">5+</div>
            <div className="text-xs text-[#A1A1AA] mt-0.5">Shipped Projects</div>
          </div>
        </div>

      </div>
    </section>
  );
};

