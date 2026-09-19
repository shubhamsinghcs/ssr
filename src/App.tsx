import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-[#F5F5F5] selection:bg-[#7C7CFF]/30 selection:text-[#F5F5F5]">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
        />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Capabilities />
        <Experience />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
