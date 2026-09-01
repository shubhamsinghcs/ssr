:root {
    /* Modern Color Palette - Inspired by Gmail, Figma, Stripe */
    --bg-main: #ffffff;
    --bg-surface: #f5f7fb;
    --bg-card: #ffffff;
    --bg-accent: #f0f7ff;

    --accent: #2563eb;
    /* Modern blue - Professional, trustworthy */
    --accent-secondary: #7c3aed;
    /* Purple for depth and contrast */
    --accent-tertiary: #0f766e;
    /* Teal accent for variety */
    --accent-glow: rgba(37, 99, 235, 0.08);
    --accent-glow-strong: rgba(37, 99, 235, 0.15);

    --text-primary: #0f172a;
    /* Deep slate - maximum contrast */
    --text-secondary: #334155;
    /* Slate for secondary text */
    --text-muted: #64748b;
    /* Light slate - tertiary text */

    --glass-bg: rgba(255, 255, 255, 0.88);
    --glass-bg-scrolled: rgba(255, 255, 255, 0.98);
    --glass-border: rgba(37, 99, 235, 0.08);
    --surface-border: rgba(37, 99, 235, 0.1);
    --hero-bg-start: #ffffff;
    --hero-bg-end: rgba(37, 99, 235, 0.02);
    --status-bg: rgba(16, 185, 129, 0.08);
    --status-border: #10b981;
    --tag-bg: #f0f4f9;
    --tag-border: rgba(37, 99, 235, 0.12);
    --timeline-line: rgba(37, 99, 235, 0.15);
    --contact-bg-start: #f5f7fb;
    --contact-bg-end: rgba(37, 99, 235, 0.02);
    --footer-bg-start: #ffffff;
    --footer-bg-end: #f9fafb;
    --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    --card-shadow-hover: 0 12px 32px rgba(37, 99, 235, 0.12);
    --nav-menu-bg: #ffffff;
    --nav-menu-border: rgba(37, 99, 235, 0.1);
    --nav-active-bg: rgba(37, 99, 235, 0.08);
    --nav-active-border: rgba(37, 99, 235, 0.2);

    --fs-hero-title: clamp(3.4rem, 8vw, 5.6rem);
    --fs-hero-subtitle: clamp(1.6rem, 4vw, 2.8rem);
    --fs-section-title: clamp(2rem, 5.5vw, 2.9rem);
    --fs-body-lg: 1.1rem;

    --transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
        box-shadow 0.3s cubic-bezier(0.23, 1, 0.32, 1),
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease,
        opacity 0.3s ease;

    /* Typography: Modern, Clean */
    --font-heading: 'Plus Jakarta Sans', 'Inter', sans-serif;
    --font-body: 'Inter', system-ui, -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

    /* Spacing & Layout */
    --container-width: 1140px;
}

[data-theme='dark'] {
    --bg-main: #0a0e27;
    --bg-surface: #10152e;
    --bg-card: #1a1f3a;

    --accent: #3b82f6;
    --accent-secondary: #a78bfa;
    --accent-tertiary: #14b8a6;
    --accent-glow: rgba(59, 130, 248, 0.2);
    --accent-glow-strong: rgba(124, 58, 237, 0.25);

    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;

    --glass-bg: rgba(10, 14, 39, 0.75);
    --glass-bg-scrolled: rgba(10, 14, 39, 0.92);
    --glass-border: rgba(255, 255, 255, 0.06);
    --surface-border: rgba(59, 130, 248, 0.15);
    --hero-bg-start: #0a0e27;
    --hero-bg-end: rgba(59, 130, 248, 0.08);
    --status-bg: rgba(16, 185, 129, 0.12);
    --status-border: #10b981;
    --tag-bg: rgba(255, 255, 255, 0.05);
    --tag-border: rgba(255, 255, 255, 0.08);
    --timeline-line: rgba(59, 130, 248, 0.2);
    --contact-bg-start: #0f172a;
    --contact-bg-end: rgba(59, 130, 248, 0.05);
    --footer-bg-start: #0a0e27;
    --footer-bg-end: #10152e;
    --card-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    --card-shadow-hover: 0 20px 48px rgba(59, 130, 248, 0.18);
    --nav-menu-bg: #10152e;
    --nav-menu-border: rgba(59, 130, 248, 0.15);
    --nav-active-bg: rgba(59, 130, 248, 0.15);
    --nav-active-border: rgba(59, 130, 248, 0.3);
}

/* Reset & Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-main);
    color: var(--text-primary);
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
}

main,
section,
header {
    scroll-margin-top: 84px;
}

.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 5%;
}

.bg-main {
    background-color: var(--bg-main);
}

.bg-surface {
    background-color: var(--bg-surface);
}

/* Typography */
h1,
h2,
h3,
h4 {
    font-family: var(--font-heading);
    color: var(--text-primary);
    line-height: 1.2;
    letter-spacing: -0.02em;
    /* Tighter tracking for headings looks premium */
}

/* Upgraded Gradient to reflect Full Stack + AI */
.text-gradient {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 800;
}

.section-title {
    font-size: var(--fs-section-title);
    margin-bottom: 0.5rem;
    font-weight: 800;
    letter-spacing: -0.01em;
}

.section-title::after {
    content: '';
    display: block;
    width: 64px;
    height: 3px;
    margin-top: 0.7rem;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent-secondary) 100%);
}

.text-center .section-title::after {
    margin-left: auto;
    margin-right: auto;
}

.section-subtitle {
    color: var(--text-muted);
    font-family: var(--font-body);
    font-size: 1rem;
    margin-bottom: 2.2rem;
    letter-spacing: 0.3px;
    font-weight: 500;
}

.text-center {
    text-align: center;
}

/* Buttons */
a {
    text-decoration: none;
    color: inherit;
}

a:focus-visible,
button:focus-visible {
    outline: 2px solid var(--accent-secondary);
    outline-offset: 3px;
}

.btn-primary,
.btn-secondary,
.btn-nav,
.theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.9rem 1.9rem;
    border-radius: 10px;
    font-weight: 600;
    font-family: var(--font-heading);
    transition: var(--transition);
    cursor: pointer;
    font-size: 0.97rem;
    border: 1.5px solid transparent;
}

.theme-toggle {
    width: 44px;
    height: 44px;
    border: 1.5px solid var(--accent);
    background: rgba(37, 99, 235, 0.06);
    color: var(--accent);
    margin-left: 0.8rem;
    padding: 0;
}

.theme-toggle:hover {
    background: var(--accent);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
    color: #ffffff;
    border: none;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    font-weight: 700;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(37, 99, 235, 0.3);
    filter: brightness(1.08);
}

.btn-primary:active {
    transform: translateY(0);
}

.btn-secondary {
    background: var(--bg-card);
    border: 1.5px solid var(--accent);
    color: var(--accent);
    font-weight: 600;
}

.btn-secondary:hover {
    border-color: var(--accent-secondary);
    color: #ffffff;
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
}

.btn-secondary:active {
    transform: translateY(0);
}

.btn-large {
    padding: 1.1rem 2.8rem;
    font-size: 1.1rem;
    margin-top: 1.1rem;
}

/* Navigation - Glassmorphism */
#navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: var(--glass-bg);
    /* Frosted glass effect */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
    transition: var(--transition);
}

#navbar.scrolled {
    padding: 5px 0;
    background: var(--glass-bg-scrolled);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.nav-container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    font-weight: 800;
    letter-spacing: -1px;
    color: var(--text-primary);
}

.logo .dot {
    color: var(--accent-secondary);
}

.nav-links {
    display: flex;
    gap: 2.5rem;
    align-items: center;
}

.nav-links a {
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 600;
    transition: var(--transition);
    position: relative;
    padding: 0.45rem 0.85rem;
    border-radius: 999px;
    border: 1px solid transparent;
}

/* Modern underline hover effect */
.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--accent-secondary);
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-secondary);
    background: rgba(14, 165, 233, 0.08);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-links a.active {
    color: var(--accent-secondary);
    background: var(--nav-active-bg);
    border-color: var(--nav-active-border);
    box-shadow: 0 4px 14px rgba(14, 165, 233, 0.16);
}

.nav-links a.active::after {
    width: 100%;
}

.btn-nav {
    border: 1.5px solid var(--accent);
    color: var(--accent-secondary) !important;
    padding: 0.6rem 1.2rem;
    background: rgba(14, 165, 233, 0.05);
    font-weight: 600;
}

.btn-nav::after {
    display: none;
}

/* Remove underline effect from button */

.btn-nav:hover {
    background: var(--accent-secondary);
    border-color: var(--accent-secondary);
    color: #ffffff !important;
}

.mobile-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1.6rem;
    cursor: pointer;
    flex-shrink: 0;
}

.mobile-toggle:hover {
    background: rgba(37, 99, 235, 0.06);
}

/* Hero */
#hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 72px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, var(--hero-bg-start) 0%, var(--hero-bg-end) 100%);
}

/* Subtle background glow behind hero text */
#hero::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 10%;
    width: 40vw;
    height: 40vw;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
    filter: blur(80px);
    z-index: -1;
    animation: heroGlow 9s ease-in-out infinite alternate;
}

@keyframes heroGlow {
    from {
        transform: translate3d(0, 0, 0) scale(1);
    }

    to {
        transform: translate3d(18px, -12px, 0) scale(1.06);
    }
}

.hero-content {
    max-width: 760px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.hero-title-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 1rem;
}

.hero-title-group .status-badge {
    margin: 0;
    flex-shrink: 0;
    white-space: nowrap;
}

.hero-title-group h1 {
    margin: 0;
}

.status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--status-bg);
    border: 1.5px solid var(--status-border);
    border-radius: 20px;
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--accent-tertiary);
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    backdrop-filter: blur(8px);
    font-weight: 600;
    animation: badgeFloat 3.8s ease-in-out infinite;
    letter-spacing: 0.2px;
}

@keyframes badgeFloat {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-3px);
    }
}

.pulse {
    width: 8px;
    height: 8px;
    background: #10b981;
    /* Emerald green for "Online/Available" psychology */
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    70% {
        box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
}

#hero h1 {
    font-size: var(--fs-hero-title);
    letter-spacing: -0.02em;
    margin-bottom: 0;
    font-weight: 800;
}

#hero h2 {
    font-size: var(--fs-hero-subtitle);
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
}

.hero-desc {
    font-size: var(--fs-body-lg);
    color: var(--text-secondary);
    max-width: 620px;
    margin-bottom: 1.6rem;
    line-height: 1.75;
}

.cta-group {
    display: flex;
    gap: 1rem;
}

/* Sections Global */
section {
    padding: 68px 0;
}

/* About & Skills */
.section-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 36px;
    align-items: start;
}

.about-text p {
    color: var(--text-secondary);
    margin-bottom: 1.35rem;
    font-size: 1.08rem;
    line-height: 1.75;
}

.skill-block {
    margin-bottom: 1.5rem;
}

.skill-block h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-heading);
    font-size: 1.05rem;
    color: var(--text-primary);
    margin-bottom: 1.2rem;
    letter-spacing: 0.5px;
}

.text-accent {
    color: var(--accent);
    font-size: 1.3rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.tags span {
    background: var(--tag-bg);
    border: 1px solid var(--tag-border);
    color: var(--text-primary);
    padding: 7px 14px;
    border-radius: 8px;
    font-size: 0.88rem;
    font-weight: 500;
    transition: var(--transition);
    cursor: default;
}

.tags span:hover {
    background: rgba(37, 99, 235, 0.08);
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
}

.highlight-tags span {
    background: rgba(37, 99, 235, 0.08);
    color: var(--accent);
    border: 1.5px solid var(--accent);
}

.highlight-tags span:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: #ffffff;
}

/* Experience Timeline */
.timeline-container {
    max-width: 800px;
    margin: 0 auto;
}

.timeline {
    position: relative;
    padding-left: 50px;
    border-left: 2px solid var(--timeline-line);
}

.timeline-item {
    position: relative;
    margin-bottom: 1.4rem;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-marker {
    position: absolute;
    left: -57px;
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--bg-main);
    border: 3px solid var(--accent);
    box-shadow: 0 0 0 3px var(--bg-main);
    transition: var(--transition);
}

.timeline-item:hover .timeline-marker {
    background: var(--accent);
    box-shadow: 0 0 0 3px var(--bg-main), 0 0 16px rgba(37, 99, 235, 0.35);
    transform: scale(1.25);
}

.timeline-date {
    font-family: var(--font-body);
    font-size: 0.88rem;
    color: var(--accent);
    display: block;
    margin-bottom: 0.4rem;
    letter-spacing: 0.3px;
    font-weight: 600;
}

.timeline-role {
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
}

.timeline-company {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
}

/* Projects */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
}

.project-card {
    background: var(--bg-card);
    padding: 24px;
    border-radius: 14px;
    border: 1.5px solid var(--surface-border);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: var(--card-shadow);
}

/* Gradient overlay on hover */
.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(124, 58, 237, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
    pointer-events: none;
}

/* Glowing border effect */
.project-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1.5px solid var(--surface-border);
    border-radius: 14px;
    opacity: 0;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.05);
    transition: opacity 0.35s ease;
}

.project-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: var(--card-shadow-hover);
    background: var(--bg-card);
}

.project-card:hover::before {
    opacity: 1;
}

.project-card:hover::after {
    opacity: 1;
}

.card-header,
.project-name,
.project-tech,
.project-desc {
    z-index: 1;
    position: relative;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.card-header .ph-folder-open {
    font-size: 2.8rem;
    color: var(--accent);
}

.card-links a {
    color: var(--accent);
    font-size: 1.5rem;
    margin-left: 10px;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.card-links a:hover {
    color: var(--accent-secondary);
    transform: scale(1.2) translateY(-2px);
}

.project-name {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 12px;
    color: var(--text-primary);
}

.project-tech {
    font-family: var(--font-body);
    font-size: 0.82rem;
    color: var(--accent);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 14px;
    font-weight: 600;
}

.project-tech span {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    background: var(--tag-bg);
    border: 1px solid var(--tag-border);
    color: var(--accent-secondary);
    letter-spacing: 0.2px;
}

.project-card:hover .project-tech span {
    background: rgba(37, 99, 235, 0.08);
    border-color: rgba(37, 99, 235, 0.18);
}

.project-card:hover .project-name {
    color: var(--accent);
}

.project-desc {
    color: var(--text-secondary);
    font-size: 0.98rem;
    line-height: 1.7;
    margin-bottom: 0;
    flex-grow: 1;
}

.project-card--more {
    justify-content: center;
    align-items: flex-start;
    background: var(--tag-bg);
    border-style: dashed;
}

.project-card--more .card-header .ph-rocket-launch {
    font-size: 2.4rem;
    color: var(--accent);
}

.project-more-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    font-weight: 600;
    font-size: 0.92rem;
    color: var(--accent);
    z-index: 1;
    position: relative;
}

.project-more-link i {
    transition: transform 0.2s ease;
}

.project-more-link:hover i {
    transform: translate(2px, -2px);
}

/* Contact */
#contact {
    background: linear-gradient(180deg, var(--contact-bg-start) 0%, var(--contact-bg-end) 100%);
    border-top: 1px solid var(--surface-border);
}

#contact .section-title {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.8rem;
}

.contact-desc {
    max-width: 560px;
    margin: 0 auto 1.35rem;
    color: var(--text-secondary);
    font-size: var(--fs-body-lg);
    line-height: 1.8;
    font-weight: 500;
}

.social-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.9rem;
    max-width: 760px;
    margin: 1.4rem auto 0;
}

.social-grid a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    padding: 12px 18px;
    min-width: 160px;
    border: 1.5px solid var(--surface-border);
    border-radius: 999px;
    background: var(--bg-card);
    box-shadow: var(--card-shadow);
    text-decoration: none;
    backdrop-filter: blur(10px);
}

.social-grid a:hover {
    color: #ffffff;
    border-color: transparent;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent-secondary) 100%);
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 14px 30px rgba(37, 99, 235, 0.18);
}

.social-grid a:hover i {
    color: #ffffff;
}

.social-grid i {
    font-size: 1.3rem;
    color: var(--accent);
}

.social-grid svg {
    width: 1.05rem;
    height: 1.05rem;
    flex-shrink: 0;
    color: inherit;
}

/* Footer */
footer {
    text-align: center;
    padding: 40px 0;
    border-top: 1.5px solid rgba(14, 165, 233, 0.15);
    background: linear-gradient(180deg, var(--footer-bg-start) 0%, var(--footer-bg-end) 100%);
    backdrop-filter: blur(10px);
}

footer p {
    color: var(--text-primary);
    font-size: 0.95rem;
    font-weight: 500;
}

.footer-note {
    font-family: var(--font-mono);
    color: var(--accent);
    font-size: 0.9rem;
    margin-top: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

/* Reveal Animation */
.reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.72s cubic-bezier(0.16, 1, 0.3, 1),
        transform 0.72s cubic-bezier(0.16, 1, 0.3, 1);
    transition-delay: calc(var(--stagger-index, 0) * 70ms);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

body,
#navbar,
#hero,
#contact,
footer,
.project-card,
.tags span,
.social-grid a,
.btn-secondary,
.btn-nav,
.theme-toggle {
    transition: background-color 0.35s ease,
        color 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease,
        transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Mobile & Tablet Responsiveness */
@media (max-width: 900px) {
    :root {
        --fs-hero-title: clamp(2.6rem, 10vw, 3.8rem);
        --fs-hero-subtitle: clamp(1.4rem, 6vw, 2.3rem);
        --fs-section-title: clamp(1.75rem, 7vw, 2.3rem);
        --fs-body-lg: 1.04rem;
    }

    .section-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}

@media (max-width: 800px) {
    .nav-links {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--nav-menu-bg);
        padding: 20px;
        border-bottom: 1px solid var(--nav-menu-border);
        box-shadow: 0 18px 30px rgba(0, 0, 0, 0.12);
        opacity: 0;
        transform: translateY(-14px) scale(0.98);
        transform-origin: top center;
        pointer-events: none;
        visibility: hidden;
        transition: opacity 0.28s ease, transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0.32s;
        z-index: 120;
    }

    .nav-links.mobile-open {
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
        visibility: visible;
        transition: opacity 0.28s ease, transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), visibility 0s linear 0s;
    }

    body::before {
        content: '';
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 18, 0.24);
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
        z-index: 90;
    }

    body.nav-open::before {
        opacity: 1;
        pointer-events: auto;
    }

    .nav-links a {
        width: 100%;
        border-radius: 12px;
        padding: 0.7rem 0.9rem;
    }

    .theme-toggle {
        width: 38px;
        height: 38px;
        margin-left: auto;
        margin-right: 0.6rem;
    }

    .mobile-toggle {
        display: flex;
        z-index: 130;
    }

    .cta-group {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        justify-content: center;
    }

    .hero-desc {
        margin-bottom: 2rem;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

    .timeline {
        padding-left: 20px;
    }

    .timeline-marker {
        left: -27px;
    }

    section {
        padding: 60px 0;
    }

    #hero {
        text-align: center;
    }

    #hero::before {
        display: none;
    }

    .hero-content {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .social-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.85rem;
        max-width: 420px;
        margin: 2rem auto 0;
    }

    .social-grid a {
        min-width: 0;
        width: 100%;
        padding: 11px 14px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

    .reveal {
        opacity: 1;
        transform: none;
    }
}
