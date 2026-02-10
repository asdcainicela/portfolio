import * as THREE from 'three';

export class Renderer {
    public instance: THREE.WebGLRenderer;

    constructor(canvas: HTMLCanvasElement) {
        this.instance = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true
        });

        this.configure();
        this.setResizeHandler();
    }

    private configure() {
        this.instance.setSize(window.innerWidth, window.innerHeight);
        this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.instance.toneMapping = THREE.ACESFilmicToneMapping;
        this.instance.toneMappingExposure = 1.2;
        this.instance.shadowMap.enabled = true;
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    private setResizeHandler() {
        window.addEventListener('resize', () => {
            this.instance.setSize(window.innerWidth, window.innerHeight);
            this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    }
}
