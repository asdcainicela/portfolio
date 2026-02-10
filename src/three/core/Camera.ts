import * as THREE from 'three';

export class Camera {
    public instance: THREE.PerspectiveCamera;

    constructor() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        this.instance.position.set(0, 0, 10);
        this.setResizeHandler();
    }

    private setResizeHandler() {
        window.addEventListener('resize', () => {
            this.instance.aspect = window.innerWidth / window.innerHeight;
            this.instance.updateProjectionMatrix();
        });
    }
}
