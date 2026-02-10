import { ScrollController } from '@/utils/ScrollController';

export class Navigation {
    private nav: HTMLElement;
    private links: NodeListOf<HTMLAnchorElement>;
    private sections: NodeListOf<HTMLElement>;
    private scrollController: ScrollController;
    private menuToggle: HTMLElement | null;
    private navLinks: HTMLElement | null;

    constructor() {
        this.nav = document.querySelector('.navbar') as HTMLElement;
        this.links = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section');
        this.scrollController = ScrollController.getInstance();
        this.menuToggle = document.querySelector('.menu-toggle');
        this.navLinks = document.querySelector('.nav-links');

        this.initScrollListener();
        this.initSmoothScroll();
        this.initMobileMenu();
    }

    private initScrollListener() {
        // Use Lenis scroll event instead of window scroll
        this.scrollController.lenis.on('scroll', ({ scroll }: { scroll: number }) => {
            if (scroll > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
            this.updateActiveLink();
        });
    }

    private updateActiveLink() {
        let current = '';
        const threshold = window.innerHeight * 0.3; // Increased sensitivity

        this.sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Using scrollY + threshold to find the section
            if (rect.top <= threshold) {
                current = section.id;
            }
        });

        this.links.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            // Check if the link href matches the current section id
            if (href) {
                const targetId = href.startsWith('#') ? href.substring(1) : href;
                if (targetId === current || (current === 'hero' && href === '#hero')) {
                    link.classList.add('active');
                }
            }
        });
    }

    private initSmoothScroll() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Only handle local links
                if (href?.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        this.scrollController.lenis.scrollTo(targetSection, {
                            offset: 0,
                            duration: 1.5,
                        });
                        this.closeMenu();
                    } else if (href === '#') {
                        // Scroll to top
                        this.scrollController.lenis.scrollTo(0, {
                            duration: 1.5
                        });
                        this.closeMenu();
                    }
                }
            });
        });
    }

    private initMobileMenu() {
        if (!this.menuToggle || !this.navLinks) return;

        this.menuToggle.addEventListener('click', () => {
            this.toggleMenu();
        });
    }

    private toggleMenu() {
        this.menuToggle?.classList.toggle('active');
        this.navLinks?.classList.toggle('active');
    }

    private closeMenu() {
        this.menuToggle?.classList.remove('active');
        this.navLinks?.classList.remove('active');
    }
}
