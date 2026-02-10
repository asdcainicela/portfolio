import * as THREE from 'three';
import { Materials } from '../materials/Materials';

export class ParticleSystem {
    private mesh: THREE.Points;
    private count: number = 1000;

    constructor(scene: THREE.Scene, materials: Materials) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.count * 3);
        const scales = new Float32Array(this.count);

        for (let i = 0; i < this.count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Spread vertically
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            scales[i] = Math.random();
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

        this.mesh = new THREE.Points(geometry, materials.particles);
        scene.add(this.mesh);
    }

    update(time: number) {
        this.mesh.rotation.y = time * 0.05;
        this.mesh.rotation.x = time * 0.02;
    }
}
