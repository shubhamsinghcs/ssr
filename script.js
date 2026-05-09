document.addEventListener('DOMContentLoaded', () => {

    const staggerGroups = [
        '.project-card',
        '.timeline-item',
        '.skill-block',
        '.social-grid a'
    ];

    staggerGroups.forEach((selector) => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.classList.add('reveal');
            item.style.setProperty('--stagger-index', String(index));
        });
    });

    // 0. Theme Mode (Light/Dark)
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    const setTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        if (!themeToggle) {
            return;
        }

        const icon = themeToggle.querySelector('i');
        themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        if (icon) {
            icon.className = theme === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
        }
    };

    setTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', nextTheme);
            setTheme(nextTheme);
        });
    }

    // 0.5 Active section state while scrolling
    const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sectionIds = Array.from(sectionLinks)
        .map((link) => link.getAttribute('href'))
        .filter(Boolean)
        .map((href) => href.slice(1));
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section);

    const setActiveNav = (id) => {
        sectionLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (!href) {
                return;
            }
            link.classList.toggle('active', href === `#${id}`);
        });
    };

    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible.length > 0) {
                setActiveNav(visible[0].target.id);
            }
        }, {
            root: null,
            threshold: [0.2, 0.35, 0.5, 0.65],
            rootMargin: '-20% 0px -45% 0px'
        });

        sections.forEach((section) => observer.observe(section));
        setActiveNav(sections[0].id);

        sectionLinks.forEach((link) => {
            link.addEventListener('click', () => {
                const href = link.getAttribute('href');
                if (!href) {
                    return;
                }
                setActiveNav(href.slice(1));
            });
        });
    }

    // 1. Scroll Reveal Logic (Observer-based for smoother performance)
    const reveals = document.querySelectorAll('.reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        reveals.forEach((reveal) => reveal.classList.add('active'));
    } else if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -12% 0px'
        });

        reveals.forEach((reveal) => revealObserver.observe(reveal));
    } else {
        reveals.forEach((reveal) => reveal.classList.add('active'));
    }

    // 2. Navbar Glassmorphism Shrink Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Handling
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.setAttribute('aria-expanded', 'false');

        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            const isOpen = navLinks.classList.contains('mobile-open');
            mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.classList.toggle('nav-open', isOpen);
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navLinks.classList.contains('mobile-open')) {
                navLinks.classList.remove('mobile-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 800 && navLinks.classList.contains('mobile-open')) {
                navLinks.classList.remove('mobile-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });
    }

    // 4. Project card pointer glow tracking
    const projectCards = document.querySelectorAll('.project-card');
    if (!reduceMotion && projectCards.length > 0) {
        projectCards.forEach((card) => {
            card.addEventListener('pointermove', (event) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }
});
