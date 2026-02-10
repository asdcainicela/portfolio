import * as THREE from 'three';

export class Lights {
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.init();
    }

    private init() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = true;
        this.scene.add(directionalLight);

        const rimLight = new THREE.SpotLight(0x00d4ff, 2);
        rimLight.position.set(0, 5, -10);
        rimLight.lookAt(0, 0, 0);
        this.scene.add(rimLight);
    }
}
