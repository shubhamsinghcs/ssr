import { CandidateHiringProfile, ResumeExperienceItem, ResumeProjectItem } from '../types';

export const PROFILE = {
  name: 'Shubham Singh',
  monogram: 'SSR',
  title: 'Full Stack Developer & AI',
  tagline: 'I build web applications that solve real problems — from the database to the browser.',
  statement: 'I build web applications that solve real problems, from the database all the way to the browser. I focus on clear interfaces, reliable systems, and practical tooling to ship features that genuinely help people. I also use AI tools pragmatically to handle routine work, freeing up my focus for the parts that matter most.',
  bio: 'Full-stack developer and pre-final year B.Tech student (CSE) at Indo Global College of Engineering. I build web applications end-to-end with React, Next.js, and Django — focusing on clean interfaces, reliable architecture, and practical tooling that solves real problems. I also use AI tools pragmatically to handle routine work so I can concentrate on the parts that matter most.',
  location: 'Chandigarh, India',
  phone: '+91 9065801121',
  workAuthorization: 'Indian Citizen / Open to Remote & Relocation',
  availability: 'Available for Full-time Roles, Internships & Freelance Collaborations',
  email: 'ssingh.cs23@gmail.com',
  altEmail: 'ssingh.csee34@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1Iji7cclxeX072gYlTnVnmkj_WNpTHAJw/view?usp=sharing',
  github: 'https://github.com/shubhamsinghcs',
  linkedin: 'https://www.linkedin.com/in/shubham-singh-engg/',
  twitter: 'https://x.com/SSR23__/',
  status: 'ABSOLUTE LEARNER'
};

export const createGmailComposeUrl = (subject: string, body: string) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: PROFILE.email,
    su: subject,
    body
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const WORK_WITH_ME_URL = createGmailComposeUrl(
  'Portfolio inquiry',
  'Hi Shubham,\n\nI would like to discuss a project or opportunity with you.\n\nBest,\n'
);

export const HIRING_PROFILE: CandidateHiringProfile = {
  name: 'Shubham Singh',
  role: 'Full Stack Developer & AI Engineer',
  yearsOfExperience: 'Pre-Final Year B.Tech (2023–2027) | Industry Experience',
  location: 'Chandigarh, India (Open to Remote / Hybrid / On-site)',
  workAuthorization: 'Indian Citizen (No Visa sponsorship required for India roles)',
  availability: 'Immediate / Flexible for Internships & Full-Time Positions',
  preferredArrangement: 'Full-Time / Internship / Contract (Remote or On-site)',
  email: 'ssingh.cs23@gmail.com',
  github: 'https://github.com/shubhamsinghcs',
  linkedin: 'https://www.linkedin.com/in/shubham-singh-engg/',
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Indo Global College of Engineering (IGC), Chandigarh',
      year: 'Expected May 2027'
    }
  ],
  competencies: [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML/CSS']
    },
    {
      category: 'Tools & Frameworks',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Django', 'REST APIs', 'Tailwind CSS', 'Git', 'GitHub Copilot']
    },
    {
      category: 'Databases & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Google Cloud Platform (GCP)']
    },
    {
      category: 'Core Computer Science',
      skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS', 'Web Development']
    }
  ]
};

export const RESUME_EXPERIENCES: ResumeExperienceItem[] = [
  {
    id: 'resume-viziane',
    role: 'Operations & Client Success Lead',
    type: 'Full Time',
    company: 'Viziane',
    period: 'Apr 2026 — Present',
    location: 'Chandigarh, India',
    highlights: [
      'Direct technical delivery, client communications, and operational workflows for agency engineering projects, keeping execution organized and clients informed.',
      'Streamline technical project scoping and client onboarding processes, resulting in improved project delivery timelines and reduced overhead.'
    ]
  },
  {
    id: 'resume-nextute',
    role: 'Frontend Developer Intern',
    type: 'Internship',
    company: 'Nextute EdTech Pvt. Ltd.',
    period: 'Jun 2025 — Sep 2025',
    location: 'Remote',
    highlights: [
      'Developed and optimized dynamic frontend web applications using React.js and Next.js, enhancing responsiveness across key learning platforms.',
      'Collaborated with product teams to build modular UI components, integrating RESTful APIs to support reliable user flows.'
    ]
  }
];

export const COMMUNITY_LEADERSHIP: ResumeExperienceItem[] = [
  {
    id: 'resume-gdg',
    role: 'Organizer',
    type: '',
    company: 'GDG on Campus IGC',
    period: 'Aug 2025 — Present',
    location: 'Indo Global College of Engineering, Chandigarh, India',
    highlights: [
      'Managed community developer initiatives, technical workshops, and hackathons (including TechSprint), driving hands-on AI and Cloud learning journeys.'
    ]
  }
];

export const RESUME_PROJECTS: ResumeProjectItem[] = [
  {
    title: 'Teacher-Student Feedback Platform',
    technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    githubUrl: 'https://github.com/shubhamsinghcs',
    description: 'Engineered a secure web portal for structured feedback submission and analytics between faculty and students. Implemented role-based access control, automated report generation, and robust authentication workflows.'
  },
  {
    title: 'AI-Powered Code Review Assistant',
    technologies: ['Next.js', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shubhamsinghcs',
    description: 'Developed an automated code audit tool that provides instant feedback on code quality, security vulnerabilities, and performance optimization directly within developer workflows.'
  }
];
