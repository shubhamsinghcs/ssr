import { ExperienceItem, Capability } from '../types';

export const CAPABILITIES: Capability[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Developing responsive, user-centric web applications and component systems with modern standards, clean CSS, and accessible interactions.',
    details: ['React.js & Next.js', 'Tailwind CSS & Modern CSS3', 'JavaScript (ES6+) & TypeScript', 'Responsive Mobile-First Design'],
    iconName: 'Code'
  },
  {
    id: 'backend',
    title: 'Backend & Databases',
    description: 'Designing reliable server architectures, RESTful APIs, and secure database schemas that scale cleanly with product growth.',
    details: ['Python & Django Framework', 'Node.js & Express', 'PostgreSQL & MySQL', 'MongoDB & Firebase'],
    iconName: 'Server'
  },
  {
    id: 'ai-tools',
    title: 'AI Efficiency & Tooling',
    description: 'Selectively integrating modern AI workflows and developer tooling to accelerate development cycles and focus on high-impact engineering.',
    details: ['AI Prompt Engineering & LLM APIs', 'GitHub Copilot Workflows', 'Git / GitHub CI/CD & Vercel', 'Google Cloud Platform (GCP)'],
    iconName: 'Cpu'
  },
  {
    id: 'leadership',
    title: 'Operations & Community',
    description: 'Proven track record leading student developer communities, coordinating client success workflows, and mentoring newer developers.',
    details: ['GDG Campus Organizer', 'Client Success & Ops Management', 'Technical Workshop Facilitation', 'Cross-Functional Team Collaboration'],
    iconName: 'Users'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Operation and Client Success Lead',
    company: 'VIZIANE',
    period: 'Apr 2024 — Present',
    location: 'Chandigarh / Remote',
    summary: 'Liaising between enterprise clients and technical development teams to ensure seamless milestone delivery and high client retention.',
    highlights: [
      'Liaise between clients and development teams to ensure seamless project delivery and maximize client retention.',
      'Manage operational workflows and facilitate weekly team syncs to ensure project milestones are met on schedule.',
      'Translate client requirements into structured technical deliverables, reducing delivery bottlenecks.'
    ],
    technologies: ['Operations', 'Client Success', 'Agile Workflows', 'Project Management', 'Tech Delivery']
  },
  {
    id: 'exp-2',
    role: 'Organizer',
    company: 'Google Developer Groups (GDG) on Campus IGC',
    period: 'Aug 2025 — Present',
    location: 'Indo Global College of Engineering, Chandigarh',
    summary: 'Leading a vibrant student developer community, organizing campus hackathons, and running hands-on technical workshops.',
    highlights: [
      'Leading a community of developers, organizing technical workshops, and managing campus hackathons.',
      'Previously served as PR Lead (Sep 2024 – Aug 2025), driving tech outreach and event participation across engineering branches.',
      'Active community member and volunteer at GDG Chandigarh and GDG Ludhiana regional meetups.'
    ],
    technologies: ['Community Leadership', 'Technical Workshops', 'Google Cloud Study Jams', 'Hackathons', 'Mentorship']
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer Intern',
    company: 'Nextute EdTech Pvt. Ltd.',
    period: 'Jun 2025 — Sep 2025',
    location: 'Remote',
    summary: 'Engineered responsive web interfaces and reusable UI components for next-generation educational platforms.',
    highlights: [
      'Developed responsive, user-centric web interfaces using React.js and Tailwind CSS for educational platforms.',
      'Optimized frontend components for performance, ensuring cross-browser compatibility and snappy page transitions.',
      'Collaborated with design and backend teams to integrate REST APIs for student quiz and assignment flows.'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git', 'Responsive Design']
  },
  {
    id: 'exp-4',
    role: 'Campus Ambassador',
    company: 'Physics Wallah (PW)',
    period: 'May 2024 — Present',
    location: 'Chandigarh',
    summary: 'Representing one of India leading EdTech organizations, spearheading outreach and digital platform awareness.',
    highlights: [
      'Represent the organization within the student community, driving active student engagement through campus outreach and technical awareness sessions.',
      'Coordinate awareness sessions and campus-wide events to promote digital educational resources and platform tools.',
      'Gather direct student feedback on learning materials to inform regional educational initiatives.'
    ],
    technologies: ['Student Outreach', 'Campaign Coordination', 'Event Management', 'Public Relations']
  }
];
