import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { Materials } from '../materials/Materials';
import gsap from 'gsap';

export class HolographicText {
    private mesh: THREE.Mesh;
    private materials: Materials;

    constructor(scene: THREE.Scene, font: Font, text: string, materials: Materials) {
        this.materials = materials;

        const geometry = new TextGeometry(text, {
            font: font,
            size: 0.8,
            depth: 0.2, // Depth
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });

        geometry.computeBoundingBox();
        geometry.center(); // Center the text

        this.mesh = new THREE.Mesh(geometry, this.materials.holographic);
        this.mesh.position.set(0, 0, 0);
        this.mesh.rotation.x = 0;

        // Initial hidden state
        this.mesh.scale.set(0, 0, 0);

        scene.add(this.mesh);

        this.animateIn();
    }

    private animateIn() {
        gsap.to(this.mesh.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1.5,
            ease: 'elastic.out(1, 0.3)'
        });

        gsap.from(this.mesh.rotation, {
            y: Math.PI,
            duration: 2,
            ease: 'power3.out'
        });
    }

    update(time: number) {
        // Floating animation
        this.mesh.position.y = Math.sin(time) * 0.1;
        this.mesh.rotation.y = Math.sin(time * 0.5) * 0.1;
    }
}
