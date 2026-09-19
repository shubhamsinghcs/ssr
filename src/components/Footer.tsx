import React from 'react';
import { PROFILE } from '../data';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#242426] bg-[#050505] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C7CFF]" />
            <span className="font-display text-[#F5F5F5] font-semibold tracking-tight">{PROFILE.name}</span>
          </div>
          <span className="text-[#71717A] text-xs font-mono hidden sm:inline">/</span>
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-xs text-[#71717A]">
              &copy; {new Date().getFullYear()} SSR. Built with React &amp; Tailwind CSS.
            </span>
            <span className="text-xs italic text-[#A1A1AA]">
              &quot;Technology should serve humanity.&quot; — SSR
            </span>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#0B0B0C] hover:bg-[#111113] border border-[#242426] px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#7C7CFF]" />
        </button>

      </div>
    </footer>
  );
};
