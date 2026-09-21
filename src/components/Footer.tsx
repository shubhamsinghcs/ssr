import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#242426] bg-[#050505] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-xs text-[#71717A]">&copy; 2026 SSR</span>
          <span className="text-xs italic text-[#A1A1AA]">Technology should serve humanity.</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#0B0B0C] hover:bg-[#111113] border border-[#242426] px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#7C7CFF]" />
        </button>

      </div>
    </footer>
  );
};
