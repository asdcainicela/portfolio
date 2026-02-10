import * as THREE from 'three';
import gsap from 'gsap';

export class Capybara {
    public mesh: THREE.Group;

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();
        scene.add(this.mesh);

        this.createGeometricModel();
    }

    private createGeometricModel() {
        const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.7 }); // Brown
        const headMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.7 });
        const snoutMaterial = new THREE.MeshStandardMaterial({ color: 0x5D2E0B, roughness: 0.8 }); // Darker brown
        const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

        // Body: Elongated rounded box
        const bodyGeo = new THREE.BoxGeometry(1.2, 0.8, 0.7);
        const body = new THREE.Mesh(bodyGeo, bodyMaterial);
        body.position.set(0, 0, 0);
        this.mesh.add(body);

        // Head: Blocky but smaller than body
        const headGeo = new THREE.BoxGeometry(0.5, 0.6, 0.6);
        const head = new THREE.Mesh(headGeo, headMaterial);
        head.position.set(0.7, 0.3, 0);
        this.mesh.add(head);

        // Snout: characteristic flat capybara snout
        const snoutGeo = new THREE.BoxGeometry(0.3, 0.4, 0.5);
        const snout = new THREE.Mesh(snoutGeo, snoutMaterial);
        snout.position.set(1.0, 0.2, 0);
        this.mesh.add(snout);

        // Ears: Small little things
        const earGeo = new THREE.BoxGeometry(0.1, 0.15, 0.1);
        const leftEar = new THREE.Mesh(earGeo, bodyMaterial);
        leftEar.position.set(0.65, 0.6, 0.2);
        this.mesh.add(leftEar);

        const rightEar = new THREE.Mesh(earGeo, bodyMaterial);
        rightEar.position.set(0.65, 0.6, -0.2);
        this.mesh.add(rightEar);

        // Eyes
        const eyeGeo = new THREE.SphereGeometry(0.04, 8, 8);
        const leftEye = new THREE.Mesh(eyeGeo, eyeMaterial);
        leftEye.position.set(0.85, 0.45, 0.25);
        this.mesh.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, eyeMaterial);
        rightEye.position.set(0.85, 0.45, -0.25);
        this.mesh.add(rightEye);

        // Legs: 4 little feet
        const legGeo = new THREE.BoxGeometry(0.15, 0.3, 0.15);
        const positions = [
            [-0.4, -0.4, 0.25], [-0.4, -0.4, -0.25],
            [0.4, -0.4, 0.25], [0.4, -0.4, -0.25]
        ];

        positions.forEach(pos => {
            const leg = new THREE.Mesh(legGeo, bodyMaterial);
            leg.position.set(pos[0], pos[1], pos[2]);
            this.mesh.add(leg);
        });

        // Initial setup
        this.mesh.position.set(4, -1, 0); // Position to the right and slightly down
        this.mesh.scale.set(1.5, 1.5, 1.5);

        // Add floating animation
        gsap.to(this.mesh.position, {
            y: -0.7,
            duration: 2.5,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });

        // Add subtle rotation
        gsap.to(this.mesh.rotation, {
            y: 0.2,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });
    }

    update(time: number, mousePosition: THREE.Vector2) {
        // Look at mouse (very subtle)
        this.mesh.rotation.y = mousePosition.x * 0.2;
        this.mesh.rotation.x = -mousePosition.y * 0.1;
    }
}
