import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PROFILE } from '../data';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ['contact', 'about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 280) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'About & Skills', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6">
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border ${
            isScrolled
              ? 'bg-[#0B0B0C]/85 backdrop-blur-xl border-[#27272A] shadow-[0_12px_32px_rgba(0,0,0,0.65)] max-w-5xl'
              : 'bg-[#0B0B0C]/50 backdrop-blur-md border-[#1F1F23] max-w-6xl'
          }`}
          aria-label="Main Navigation"
        >
          {/* Left: Brand Monogram & Philosophy Statement */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#7C7CFF] rounded-full px-1.5 py-1"
              aria-label="SSR home"
            >
              <span className="font-mono text-lg sm:text-xl font-bold tracking-tighter text-[#F5F5F5] group-hover:text-white transition-colors">
                SSR
              </span>
            </a>

            {/* Brand Philosophy Statement */}
            <div className="hidden lg:flex items-center pl-3 border-l border-[#27272A]">
              <span className="text-xs font-mono text-[#A1A1AA] tracking-tight whitespace-nowrap">
                Technology should serve people.
              </span>
            </div>
          </div>

          {/* Center: Segmented Navigation Dock with Active State Tracking */}
          <div className="hidden md:flex items-center p-1 rounded-full bg-[#111113]/80 border border-[#242426]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#7C7CFF] ${
                    isActive
                      ? 'text-[#F5F5F5] font-semibold bg-[#1C1C20] shadow-sm'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#161619]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-[#7C7CFF]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: Refined Action Capsule (Resume + Work With Me) */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-[#A1A1AA] hover:text-[#F5F5F5] bg-[#111113] hover:bg-[#1a1a1e] border border-[#242426] transition-all focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
              title="View ATS Curriculum Vitae & PDF"
            >
              <FileText className="w-3 h-3 text-[#7C7CFF]" />
              <span>Resume</span>
            </button>

            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-[#050505] bg-[#F5F5F5] hover:bg-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
            >
              <span>Work with me</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-full bg-[#111113] border border-[#242426] text-[#A1A1AA] text-xs font-mono"
              aria-label="Resume"
              title="Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#7C7CFF]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#111113] border border-[#242426] text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="pointer-events-auto sm:hidden mt-2 mx-auto max-w-sm rounded-2xl bg-[#0B0B0C]/95 backdrop-blur-2xl border border-[#27272A] p-4 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Brand Philosophy Header */}
            <div className="px-3 py-2 rounded-xl bg-[#111113] border border-[#242426] text-center">
              <span className="text-xs font-mono text-[#D4D4D8] tracking-tight">
                Technology should serve people.
              </span>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-mono transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#18181B] text-[#F5F5F5] font-semibold text-[#7C7CFF]'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#111113]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C7CFF]" />
                  )}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#1F1F23] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono text-[#A1A1AA] bg-[#111113] border border-[#242426]"
              >
                <FileText className="w-3.5 h-3.5 text-[#7C7CFF]" />
                <span>View Resume</span>
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-medium text-[#050505] bg-[#F5F5F5]"
              >
                <span>Work with me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
