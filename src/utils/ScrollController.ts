import Lenis from 'lenis';


export class ScrollController {
    private static instance: ScrollController;
    public lenis: Lenis;
    public scrollY: number = 0;
    public maxScroll: number = 0;
    public progress: number = 0;

    private constructor() {
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        this.init();
    }

    public static getInstance(): ScrollController {
        if (!ScrollController.instance) {
            ScrollController.instance = new ScrollController();
        }
        return ScrollController.instance;
    }

    private init() {
        this.updateMaxScroll();
        window.addEventListener('resize', () => {
            this.updateMaxScroll();
        });

        // Ensure maxScroll is correct after images/assets load
        window.addEventListener('load', () => this.updateMaxScroll());

        requestAnimationFrame(this.raf.bind(this));
    }

    private updateMaxScroll() {
        this.maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    }

    private raf(time: number) {
        this.lenis.raf(time);

        this.scrollY = this.lenis.scroll;
        this.progress = this.maxScroll > 0 ? this.scrollY / this.maxScroll : 0;

        /* 
        // Infinite Scroll / Loop Logic - Deactivated as per user request
        if (this.introComplete && this.maxScroll > 500 && this.scrollY >= this.maxScroll - 5) {
            this.lenis.scrollTo(0, { duration: 2, lock: true });
        }
        */

        requestAnimationFrame(this.raf.bind(this));
    }
}
