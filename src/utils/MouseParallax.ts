import * as THREE from 'three';

export class MouseParallax {
    public position: THREE.Vector2;
    public target: THREE.Vector2;

    constructor() {
        this.position = new THREE.Vector2(0, 0);
        this.target = new THREE.Vector2(0, 0);

        window.addEventListener('mousemove', this.onMouseMove.bind(this));

        // Start update loop
        this.update();
    }

    private onMouseMove(event: MouseEvent) {
        // Normalize -1 to 1
        this.target.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.target.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    private update() {
        // Smooth interpolation
        this.position.x += (this.target.x - this.position.x) * 0.05;
        this.position.y += (this.target.y - this.position.y) * 0.05;

        requestAnimationFrame(this.update.bind(this));
    }
}
