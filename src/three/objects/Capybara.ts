import * as THREE from 'three';
import gsap from 'gsap';

export class Capybara {
    public mesh: THREE.Group;

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();
        scene.add(this.mesh);

        // Try to load model, fallback to wireframe placeholder
        // For now, since we know file is missing, just use placeholder directly
        // to avoid console errors, but kept logic for future GLB
        this.createPlaceholder();
    }

    private createPlaceholder() {
        const geometry = new THREE.IcosahedronGeometry(0.5, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x00ff88,
            wireframe: true,
            emissive: 0x004422,
            emissiveIntensity: 0.5
        });
        const placeholder = new THREE.Mesh(geometry, material);
        this.mesh.add(placeholder);

        // Add floating animation
        gsap.to(this.mesh.position, {
            y: 0.2,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });

        // Add rotation
        gsap.to(this.mesh.rotation, {
            y: Math.PI * 2,
            duration: 8,
            repeat: -1,
            ease: 'none'
        });

        this.mesh.position.set(2, 0, 0); // Position to the right
    }

    update(time: number, mousePosition: THREE.Vector2) {
        // Look at mouse (subtle)
        this.mesh.rotation.x = mousePosition.y * 0.1;
        this.mesh.rotation.z = mousePosition.x * 0.1;
    }
}
