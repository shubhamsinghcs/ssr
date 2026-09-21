import React, { useEffect, useState } from 'react';
import { X, FileText, Printer, Mail, Github, Linkedin, MapPin, Phone, Award, GraduationCap } from 'lucide-react';
import {
  PROFILE,
  HIRING_PROFILE,
  RESUME_EXPERIENCES,
  COMMUNITY_LEADERSHIP,
  RESUME_PROJECTS
} from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'dark' | 'ats'>('dark');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = previousOverflow;
      };
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className={`resume-dialog relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col transition-colors ${
          viewMode === 'ats' 
            ? 'bg-white text-gray-900 border border-gray-300' 
            : 'bg-[#0B0B0C] text-[#F5F5F5] border border-[#242426]'
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Header Bar */}
        <div className={`sticky top-0 z-20 px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b no-print ${
          viewMode === 'ats' 
            ? 'bg-gray-100/95 backdrop-blur border-gray-300' 
            : 'bg-[#0B0B0C]/95 backdrop-blur border-[#242426]'
        }`}>
          <div className="flex items-center gap-3">
            <FileText className={`w-5 h-5 ${viewMode === 'ats' ? 'text-indigo-600' : 'text-[#7C7CFF]'}`} />
            <div>
              <h2 id="resume-title" className={`text-base sm:text-lg font-bold ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                Curriculum Vitae — {PROFILE.name}
              </h2>
              <span className={`text-xs font-mono block ${viewMode === 'ats' ? 'text-gray-500' : 'text-[#71717A]'}`}>
                {HIRING_PROFILE.role} | {PROFILE.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className={`inline-flex p-0.5 rounded-lg border text-xs font-mono ${
              viewMode === 'ats' 
                ? 'bg-gray-200 border-gray-300 text-gray-800' 
                : 'bg-[#111113] border-[#242426] text-[#A1A1AA]'
            }`}>
              <button
                onClick={() => setViewMode('dark')}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${
                  viewMode === 'dark' 
                    ? 'bg-[#050505] text-[#F5F5F5] font-semibold shadow-sm' 
                    : 'hover:text-[#F5F5F5]'
                }`}
              >
                Dark View
              </button>
              <button
                onClick={() => setViewMode('ats')}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${
                  viewMode === 'ats' 
                    ? 'bg-white text-gray-900 font-semibold shadow-sm' 
                    : 'hover:text-[#F5F5F5]'
                }`}
              >
                ATS / Print
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white bg-[#111113] hover:bg-[#242426] border border-[#242426] px-3 py-1.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]"
              title="Print to printer or save as clean PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#7C7CFF]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF] ${
                viewMode === 'ats'
                  ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  : 'bg-[#111113] hover:bg-[#242426] text-[#A1A1AA] hover:text-[#F5F5F5]'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Content */}
        <div className={`p-6 sm:p-10 overflow-y-auto space-y-8 resume-printable ${
          viewMode === 'ats' ? 'bg-white text-gray-800' : 'bg-[#0B0B0C] text-[#A1A1AA]'
        }`}>
          
          {/* Top Header */}
          <div className={`pb-6 space-y-2 border-b ${viewMode === 'ats' ? 'border-gray-200' : 'border-[#242426]'}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className={`text-3xl font-extrabold tracking-tight ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                {PROFILE.name}
              </h1>
              <span className={`text-xs font-mono font-medium ${viewMode === 'ats' ? 'text-emerald-700' : 'text-emerald-400'}`}>
                {HIRING_PROFILE.workAuthorization}
              </span>
            </div>
            
            <div className={`text-base font-semibold ${viewMode === 'ats' ? 'text-indigo-700' : 'text-[#7C7CFF]'}`}>
              {HIRING_PROFILE.role}
            </div>

            <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono pt-1 ${
              viewMode === 'ats' ? 'text-gray-600' : 'text-[#71717A]'
            }`}>
              <span>{PROFILE.location}</span>
              <span>|</span>
              <span>{PROFILE.phone}</span>
              <span>|</span>
              <a href={`mailto:${PROFILE.email}`} className="hover:underline">{PROFILE.email}</a>
              <span>|</span>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <span>|</span>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Summary
            </h3>
            <p className={`text-sm leading-relaxed ${viewMode === 'ats' ? 'text-gray-700' : 'text-[#D4D4D8]'}`}>
              {PROFILE.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Education
            </h3>
            {HIRING_PROFILE.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1">
                <div>
                  <span className={`font-bold ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                    {edu.institution}
                  </span>
                  <div className={viewMode === 'ats' ? 'text-gray-600' : 'text-[#A1A1AA]'}>
                    {edu.degree}
                  </div>
                </div>
                <span className={`font-mono ${viewMode === 'ats' ? 'text-gray-500' : 'text-[#71717A]'}`}>
                  {edu.year}
                </span>
              </div>
            ))}
          </div>

          {/* Work Experience */}
          <div className="space-y-5">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Work Experience
            </h3>
            <div className="space-y-6">
              {RESUME_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className={`text-base font-bold ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                      {exp.role} <span className={viewMode === 'ats' ? 'text-indigo-700 font-semibold' : 'text-[#7C7CFF]'}>| {exp.type}</span>
                    </h4>
                    <span className={`text-xs font-mono ${viewMode === 'ats' ? 'text-gray-500' : 'text-[#71717A]'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold ${viewMode === 'ats' ? 'text-gray-700' : 'text-[#D4D4D8]'}`}>
                    {exp.company} <span className="font-normal">{exp.location}</span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className={`text-xs flex items-start gap-2 leading-relaxed ${
                        viewMode === 'ats' ? 'text-gray-700' : 'text-[#F5F5F5]'
                      }`}>
                        <span className={`font-bold mt-0.5 ${viewMode === 'ats' ? 'text-indigo-600' : 'text-[#7C7CFF]'}`}>-</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Community Leadership */}
          <div className="space-y-5">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Community Leadership
            </h3>
            <div className="space-y-6">
              {COMMUNITY_LEADERSHIP.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className={`text-base font-bold ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                      {item.role} <span className={viewMode === 'ats' ? 'text-indigo-700 font-semibold' : 'text-[#7C7CFF]'}>| {item.company}</span>
                    </h4>
                    <span className={`text-xs font-mono ${viewMode === 'ats' ? 'text-gray-500' : 'text-[#71717A]'}`}>
                      {item.period}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold ${viewMode === 'ats' ? 'text-gray-700' : 'text-[#D4D4D8]'}`}>
                    {item.location}
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className={`text-xs flex items-start gap-2 leading-relaxed ${
                        viewMode === 'ats' ? 'text-gray-700' : 'text-[#F5F5F5]'
                      }`}>
                        <span className={`font-bold mt-0.5 ${viewMode === 'ats' ? 'text-indigo-600' : 'text-[#7C7CFF]'}`}>-</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Key Projects
            </h3>
            <div className="space-y-4">
              {RESUME_PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className={`text-sm font-bold ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                      {proj.title}
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-[11px] font-normal text-indigo-600 hover:underline">
                        GitHub
                      </a>
                    </h4>
                    <span className={`text-[11px] font-mono ${viewMode === 'ats' ? 'text-gray-500' : 'text-[#71717A]'}`}>
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className={`text-xs ${viewMode === 'ats' ? 'text-gray-700' : 'text-[#A1A1AA]'}`}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Competencies */}
          <div className="space-y-3">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Technical Skills & Tooling
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {HIRING_PROFILE.competencies.map((comp) => (
                <div key={comp.category} className={`p-3 rounded-lg border ${
                  viewMode === 'ats' ? 'bg-gray-50 border-gray-200' : 'bg-[#111113] border-[#242426]'
                }`}>
                  <div className={`font-bold mb-1 ${viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}`}>
                    {comp.category}
                  </div>
                  <div className={viewMode === 'ats' ? 'text-gray-600' : 'text-[#A1A1AA] font-mono text-[11px]'}>
                    {comp.skills.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Interests */}
          <div className="space-y-2">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-bold ${
              viewMode === 'ats' ? 'text-gray-900 border-b border-gray-200 pb-1' : 'text-[#7C7CFF]'
            }`}>
              Certificates & Interests
            </h3>
            <div className={`text-xs space-y-1 ${viewMode === 'ats' ? 'text-gray-700' : 'text-[#A1A1AA]'}`}>
              <div>
                <strong className={viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}>Certificates:</strong> Prompt Engineering, Google Cloud Study Jams (Gen AI), TCS iON Career Edge
              </div>
              <div>
                <strong className={viewMode === 'ats' ? 'text-gray-900' : 'text-[#F5F5F5]'}>Interests:</strong> Technical Blogging, Human Psychology, Book Reading
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`sticky bottom-0 px-6 py-3.5 flex items-center justify-between text-xs font-mono border-t no-print ${
          viewMode === 'ats' 
            ? 'bg-gray-100 border-gray-300 text-gray-600' 
            : 'bg-[#0B0B0C]/95 border-[#242426] text-[#71717A]'
        }`}>
          <span>Curriculum Vitae — {PROFILE.name}</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="text-xs font-mono underline hover:text-[#F5F5F5]"
            >
              Export as PDF
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-[#F5F5F5] hover:bg-[#e0e0e0] text-[#050505] font-semibold text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
