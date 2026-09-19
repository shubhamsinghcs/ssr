# Shubham Singh — Developer Portfolio

Personal portfolio and engineering case studies showcasing full-stack web applications, frontend architecture, and practical tooling.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

## Project Structure

```
├── public/              # Static assets (favicons, sitemap, robots.txt)
├── src/
│   ├── components/      # Modular UI sections & case study modals
│   │   ├── About.tsx
│   │   ├── Capabilities.tsx
│   │   ├── CaseStudyModal.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── ResumeModal.tsx
│   ├── data/            # Static content & project data
│   │   ├── experience.ts
│   │   ├── index.ts
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global Tailwind CSS & print styles
│   ├── main.tsx         # React entry point
│   └── types.ts         # TypeScript interfaces
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
The output will be generated in the `dist/` directory.

### Type Check & Lint
```bash
npm run lint
```
