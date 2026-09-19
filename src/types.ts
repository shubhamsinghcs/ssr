export type ProjectCategory = 'all' | 'client' | 'personal';

export interface Project {
  id: string;
  title: string;
  category: 'client' | 'personal';
  subtitle: string;
  problem: string;
  role: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  metrics: string;
  tradeoffSummary?: string;
  caseStudy: CaseStudyDetails;
}

export interface CaseStudyDetails {
  overview: string;
  problemStatement: string;
  goals: string[];
  roleAndResponsibilities: string;
  designDecisions: { title: string; description: string }[];
  technicalImplementation: { title: string; description: string }[];
  challenges: { title: string; solution: string }[];
  responsiveBehavior: string;
  accessibility: string;
  performance: string;
  results: string[];
  lessonsLearned: string;
  screenshots: { caption: string; url: string }[];
  techStack: string[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface CandidateHiringProfile {
  name: string;
  role: string;
  yearsOfExperience: string;
  location: string;
  workAuthorization: string;
  availability: string;
  preferredArrangement: string;
  email: string;
  github: string;
  linkedin: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  competencies: {
    category: string;
    skills: string[];
  }[];
}
