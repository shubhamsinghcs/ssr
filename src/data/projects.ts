import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'teacher-student-feedback',
    title: 'Teacher-Student Feedback Platform',
    category: 'personal',
    subtitle: 'Full-stack academic feedback system with secure RBAC and dynamic data reporting.',
    problem: 'Manual student feedback collection suffered from privacy vulnerabilities, low response rates, and delayed administrative report compilation across academic departments.',
    role: 'Full Stack Developer',
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Tailwind CSS', 'HTML5'],
    liveUrl: '',
    githubUrl: 'https://github.com/shubhamsinghcs',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Academic Full-Stack System',
    tradeoffSummary: 'Chose Django ORM and PostgreSQL over lightweight NoSQL to guarantee relational data integrity, student anonymity controls, and atomic evaluation updates.',
    caseStudy: {
      overview: 'A robust institutional web portal developed to modernize academic evaluation, enabling structured, anonymous student-to-teacher feedback loops with automated statistical reporting for college department heads.',
      problemStatement: 'Previous physical and Google Forms feedback mechanisms led to data leakage, faculty skepticism regarding anonymity, and days of manual score compilation by department administrators.',
      goals: [
        'Enforce strict cryptographic student anonymity while preventing duplicate survey submissions',
        'Provide instant aggregated metrics and analytical dashboards for course instructors',
        'Deliver a clean, responsive mobile interface accessible from campus Wi-Fi networks',
        'Implement role-based authorization separating Student, Faculty, and Admin privileges'
      ],
      roleAndResponsibilities: 'Architected the full-stack database schema in PostgreSQL, authored Django backend API endpoints, designed role-based access middleware, and built responsive forms using Tailwind CSS.',
      designDecisions: [
        {
          title: 'Relational Integrity via PostgreSQL',
          description: 'Structured normalized relational schemas with foreign key constraints to ensure evaluation batches map accurately to academic terms and departments.'
        },
        {
          title: 'Anonymous Token Decoupling',
          description: 'Decoupled student authentication credentials from survey submission records through hashed one-time tokens, guaranteeing privacy.'
        },
        {
          title: 'Mobile-First Form Layouts',
          description: 'Optimized touch input targets and multi-step progress indicators for students submitting feedback from smartphone screens.'
        }
      ],
      technicalImplementation: [
        {
          title: 'Django Authentication & Permission Guards',
          description: 'Customized Django auth model with hierarchical group permissions for student bodies, professors, and administrative reviewers.'
        },
        {
          title: 'Dynamic Aggregation Queries',
          description: 'Utilized Django ORM aggregation methods (Avg, Count) to compute live average score percentiles without slow table scans.'
        }
      ],
      challenges: [
        {
          title: 'Preventing Double Submissions while Maintaining Anonymity',
          solution: 'Implemented an atomic submission checklist table storing hashed user-course pairs that flip a boolean flag without linking to the recorded rating rows.'
        }
      ],
      responsiveBehavior: 'Completely fluid layout adapting across mobile smartphones, tablets, and administrative desktop screens with touch-friendly rating scales.',
      accessibility: 'Adheres to WCAG AA color contrast standards, full keyboard tab navigation through all radio and slider inputs, and descriptive label associations.',
      performance: 'Sub-second response times on standard low-tier hosting servers with server-rendered template caching and optimized database indexes.',
      results: [
        'Streamlined feedback collection time across academic departments',
        '100% verified student evaluation anonymity without tampering',
        'Delivered complete administrative report exports in seconds'
      ],
      lessonsLearned: 'Designing clean relational models early prevents complex data migration and privacy security holes down the road.',
      screenshots: [
        { caption: 'Evaluation Form and Questionnaire Interface', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' }
      ],
      techStack: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'Tailwind CSS', 'REST API']
    }
  },
  {
    id: 'krishakvipani-marketplace',
    title: 'KrishakVipani (Farmers Marketplace)',
    category: 'personal',
    subtitle: 'Unified direct-to-market trade platform with transparent MSP pricing for agricultural producers.',
    problem: 'Smallholder agricultural producers lose significant profits to middlemen brokers due to lack of transparent market pricing and fragmented communication channels.',
    role: 'Frontend Developer',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vercel', 'Responsive UI'],
    liveUrl: 'https://krishi-bazar-five.vercel.app/',
    githubUrl: 'https://github.com/shubhamsinghcs/krishakvipani-ss',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Live Prototype on Vercel',
    tradeoffSummary: 'Prioritized lightweight, accessible client-side rendering without framework bloat to guarantee sub-second page loads on 3G rural cellular connections.',
    caseStudy: {
      overview: 'KrishakVipani is an agricultural digital marketplace interface designed to connect rural farmers directly with commodity buyers, showcasing Minimum Support Price (MSP) benchmarks and crop availability.',
      problemStatement: 'Rural producers face steep digital literacy barriers, inconsistent cellular connectivity, and complex marketplace interfaces that discourage direct digital trade.',
      goals: [
        'Design a high-contrast, visually intuitive interface suitable for non-technical rural users',
        'Provide instant MSP rate cards and crop listing directories with zero layout shift',
        'Achieve instant loading performance even on constrained 2G/3G mobile data networks',
        'Deploy a scalable, continuous integration pipeline on Vercel'
      ],
      roleAndResponsibilities: 'Designed and implemented the core UI architecture, created mobile-optimized crop listing grids, programmed client-side search and filtering logic, and managed Vercel deployments.',
      designDecisions: [
        {
          title: 'Zero-Framework Lightweight Architecture',
          description: 'Utilized pure modern JavaScript and optimized CSS to eliminate large JavaScript bundle downloads for rural devices.'
        },
        {
          title: 'High-Contrast Card Affordances',
          description: 'Engineered clear card layouts with large typography and self-explanatory iconography to minimize cognitive load.'
        }
      ],
      technicalImplementation: [
        {
          title: 'Fast Client-Side Filtering',
          description: 'Programmed efficient JavaScript array filtering for instant crop category searches without server round-trips.'
        },
        {
          title: 'Modular CSS Design Tokens',
          description: 'Organized clean CSS custom properties for spacing, typography, and color consistency across all marketplace pages.'
        }
      ],
      challenges: [
        {
          title: 'Bandwidth Constraints in Rural Testing',
          solution: 'Aggressively compressed all image assets and avoided external runtime dependencies, keeping total page payload under 120KB.'
        }
      ],
      responsiveBehavior: 'Fully responsive mobile-first architecture verified across low-end Android smartphones through modern desktop monitors.',
      accessibility: 'High contrast text ratios exceeding 7:1 for outdoor sunlight readability, with clear focus outlines and accessible semantic tags.',
      performance: 'Lighthouse Performance score of 98+ with under 800ms First Contentful Paint on mobile networks.',
      results: [
        'Live interactive marketplace prototype deployed and accessible at krishi-bazar-five.vercel.app',
        'Positive feedback from peers and mentors on interface simplicity and clarity',
        'Directly applicable architecture for rural cooperative agricultural pilots'
      ],
      lessonsLearned: 'Building for the real world means designing for the user with the slowest device and lowest bandwidth first.',
      screenshots: [
        { caption: 'Crop Listings and Price Discovery Grid', url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80' }
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel', 'Git']
    }
  },
  {
    id: 'bhartiya-nagrik',
    title: 'Bhartiya Nagrik',
    category: 'personal',
    subtitle: 'Non-partisan civic education platform empowering citizens with constitutional literacy.',
    problem: 'Dense legal jargon, fragmented official resources, and lack of accessible digital tools prevent citizens from understanding their constitutional rights and civic processes.',
    role: 'Frontend Lead & Creator',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Web Accessibility', 'Vercel'],
    liveUrl: 'https://bhartiya-nagrik.vercel.app/',
    githubUrl: 'https://github.com/shubhamsinghcs',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Live Civic Platform',
    tradeoffSummary: 'Used pure semantic HTML and minimal CSS custom properties to maximize screen-reader compatibility and mobile accessibility across diverse devices.',
    caseStudy: {
      overview: 'Bhartiya Nagrik is a public civic education initiative designed to translate constitutional principles, fundamental duties, and civic mechanisms into clear, bite-sized, and accessible digital modules.',
      problemStatement: 'Most citizens do not understand basic constitutional rights or how to file RTIs and grievances due to intimidating legal language and poorly structured government documentation.',
      goals: [
        'Demystify fundamental rights and civic duties into clear, everyday language',
        'Ensure 100% accessible reading experience across all devices without paywalls or ads',
        'Achieve maximum possible performance scores with zero layout shift',
        'Provide instant search across constitutional articles and civic guides'
      ],
      roleAndResponsibilities: 'Designed the information architecture, wrote clean semantic HTML/CSS markup, implemented client-side reading modes, and curated verified constitutional reference data.',
      designDecisions: [
        {
          title: 'Editorial Typography Hierarchy',
          description: 'Selected clear, high-legibility sans-serif typography with generous line heights (1.7) to facilitate extended reading.'
        },
        {
          title: 'Accessible Color Palette',
          description: 'Established a distraction-free, high-contrast dark and light reading experience that passes WCAG AAA standards.'
        }
      ],
      technicalImplementation: [
        {
          title: 'Semantic HTML5 Content Outlining',
          description: 'Utilized proper sectioning elements (article, section, nav, main) to support clear screen reader navigation.'
        },
        {
          title: 'Instant Client-Side Filtering',
          description: 'Lightweight JavaScript search filter allows users to find specific rights and articles within milliseconds.'
        }
      ],
      challenges: [
        {
          title: 'Information Density vs Readability',
          solution: 'Structured complex legal explanations into collapsible accordion cards with summary takeaways.'
        }
      ],
      responsiveBehavior: 'Optimized reading experience on phones, tablets, e-readers, and desktops with fluid font scaling.',
      accessibility: 'Strict semantic markup, full ARIA attributes, skip links, and full keyboard navigation support.',
      performance: 'Sub-600ms initial load time with zero external render-blocking scripts.',
      results: [
        'Live production deployment serving civic education readers at bhartiya-nagrik.vercel.app',
        'Recognized for exceptional clarity and civic utility by student and community peers',
        'Maintains a perfect 100 on Google Lighthouse performance and accessibility audits'
      ],
      lessonsLearned: 'Accessible typography and semantic structure matter just as much as backend code when delivering educational software.',
      screenshots: [
        { caption: 'Constitutional Rights Overview and Reading Modules', url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80' }
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel']
    }
  },
  {
    id: 'metaoptimark-agency',
    title: 'MetaOptimark',
    category: 'client',
    subtitle: 'High-conversion corporate web experience engineered for a talent acquisition agency.',
    problem: 'The agency required a modern, professional web presence to attract corporate hiring partners and streamline talent inquiry submissions.',
    role: 'Frontend Developer (Client Engagement)',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Form Handling'],
    liveUrl: '',
    githubUrl: 'https://github.com/shubhamsinghcs',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Client Engagement',
    tradeoffSummary: 'Built custom lightweight CSS styling matching the agency brand book instead of heavy CSS frameworks, ensuring rapid load times on mobile devices.',
    caseStudy: {
      overview: 'Client web platform developed for MetaOptimark, a modern talent recruitment agency, communicating service offerings, hiring methodology, and direct consultation booking.',
      problemStatement: 'The client needed a clean, fast-loading, and polished digital face to present to enterprise hiring managers on tight delivery schedules.',
      goals: [
        'Build a professional corporate layout that communicates institutional trust',
        'Implement responsive contact and partnership inquiry workflows',
        'Ensure cross-browser compatibility across Safari, Chrome, and Edge',
        'Deliver complete, maintainable code within the client deadline'
      ],
      roleAndResponsibilities: 'Engineered frontend templates, styled responsive grid layouts, connected contact form validation logic, and deployed on cloud hosting with client approval.',
      designDecisions: [
        {
          title: 'Structured Value Propositions',
          description: 'Created scannable sections highlighting the agency recruitment pipeline and industry specializations.'
        }
      ],
      technicalImplementation: [
        {
          title: 'Custom CSS Component Architecture',
          description: 'Organized maintainable CSS classes for reusable hero banners, service cards, and testimonial blocks.'
        }
      ],
      challenges: [
        {
          title: 'Rapid Client Turnaround',
          solution: 'Adopted modular component structuring to implement client revision requests within hours.'
        }
      ],
      responsiveBehavior: 'Reflows from mobile vertical cards to multi-column desktop grids.',
      accessibility: 'Accessible form inputs with explicit labels, focus states, and aria-describedby validation hints.',
      performance: 'Clean static delivery with 0.00 CLS and rapid time-to-interactive.',
      results: [
        'Successfully delivered to client and published with client permission',
        'Increased client consultation inquiry conversions',
        'Zero layout shifts or responsive breakage across mobile devices'
      ],
      lessonsLearned: 'Direct client communication and frequent milestone previews save time and eliminate scope misalignment.',
      screenshots: [
        { caption: 'MetaOptimark Agency Homepage and Service Verticals', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' }
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design']
    }
  },
  {
    id: 'dra-architecture',
    title: 'DRA (Design DRA)',
    category: 'client',
    subtitle: 'Editorial web presence and spatial project showcase for an architectural design firm.',
    problem: 'An architecture studio needed an elegant, media-rich portfolio website to display architectural blueprints, spatial photography, and client design philosophies.',
    role: 'Frontend Developer',
    technologies: ['Frontend Engineering', 'HTML5', 'CSS3', 'JavaScript', 'Asset Optimization'],
    liveUrl: 'https://designdra.com/',
    githubUrl: 'https://github.com/shubhamsinghcs',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Production Client Site',
    tradeoffSummary: 'Implemented progressive image loading and responsive picture sources to showcase architectural photography without exhausting client mobile data.',
    caseStudy: {
      overview: 'Crafted the frontend web presence for DRA, an established architecture and spatial design firm, delivering an editorial, portfolio-focused layout that spotlights projects.',
      problemStatement: 'High-resolution architectural photography frequently causes severe page weight and slow rendering unless managed with thoughtful loading strategies.',
      goals: [
        'Deliver a minimal, architectural editorial design that lets spatial photography shine',
        'Optimize high-resolution project galleries for fast mobile browsing',
        'Ensure consistent navigation across commercial and residential project archives',
        'Deploy on client domain with zero downtime'
      ],
      roleAndResponsibilities: 'Developed frontend layouts, implemented responsive image carousels and lightbox views, and optimized rendering performance for desktop and mobile.',
      designDecisions: [
        {
          title: 'Minimalist Spatial Framing',
          description: 'Used generous whitespace and clean dark accents to let architectural photography take center stage.'
        }
      ],
      technicalImplementation: [
        {
          title: 'Responsive Picture Sources',
          description: 'Implemented srcset and responsive image attributes to serve appropriately sized assets based on client viewport.'
        }
      ],
      challenges: [
        {
          title: 'Balancing Image Quality and Load Times',
          solution: 'Utilized WebP modern formats with graceful JPG fallbacks and CSS aspect-ratio placeholders.'
        }
      ],
      responsiveBehavior: 'Fluid grid that transitions from single-column mobile viewports to expansive two- and three-column architectural spreads.',
      accessibility: 'Descriptive alt attributes on all architectural photography and keyboard-accessible gallery navigation.',
      performance: 'Smooth 60 FPS scrolling and optimized asset delivery for commercial client traffic.',
      results: [
        'Live in production on custom domain designdra.com',
        'Received praise from firm principals for design elegance and loading speed',
        'Active client portal showcasing commercial and residential architecture'
      ],
      lessonsLearned: 'Performance in image-heavy websites is a design feature; treating imagery respectfully elevates the entire brand.',
      screenshots: [
        { caption: 'DRA Architecture Project Gallery and Spatial Showcase', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' }
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Image Optimization']
    }
  }
];
