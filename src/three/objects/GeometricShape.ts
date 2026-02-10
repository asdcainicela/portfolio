import * as THREE from 'three';
import gsap from 'gsap';

export class GeometricShape {
    public mesh: THREE.Group;

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();
        scene.add(this.mesh);

        this.createGeometricModel();
    }

    private createGeometricModel() {
        // Material: Glass-like / Wireframe aesthetic
        // Using Icosahedron with detail 1 (80 faces) to satisfy "more than 20 sides" request
        // This approximates the complex crystal/pentakis look
        const geometry = new THREE.IcosahedronGeometry(1.5, 1);

        // Main material - dark semi-transparent with wireframe feel
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x222222,
            metalness: 0.9,
            roughness: 0.1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            transmission: 0.2, // Some glass effect
            opacity: 0.8,
            transparent: true,
            wireframe: false
        });

        // Wireframe overlay for "tech" look
        const wireframeGeo = new THREE.WireframeGeometry(geometry);
        const wireframeMat = new THREE.LineBasicMaterial({ color: 0x00d2ff, opacity: 0.1, transparent: true });
        const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);

        const mainMesh = new THREE.Mesh(geometry, material);

        // Create inner group for local animations (floating)
        const innerGroup = new THREE.Group();
        this.mesh.add(innerGroup);

        // Combine
        innerGroup.add(mainMesh);
        innerGroup.add(wireframe);

        // Initial setup
        this.mesh.position.set(4, -1, 0);
        this.mesh.scale.set(0.75, 0.75, 0.75);

        // Floating animation (on inner group)
        gsap.to(innerGroup.position, {
            y: 0.5, // float up relative to parent
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut'
        });

        // Continuous Rotation (base)
        gsap.to(this.mesh.rotation, {
            y: Math.PI * 2,
            x: Math.PI * 2,
            duration: 25,
            repeat: -1,
            ease: 'none'
        });
    }

    update(_time: number, mousePosition: THREE.Vector2) {
        // Interactive rotation based on mouse
        // We add to the rotation, but keep the base rotation going
        this.mesh.rotation.x += mousePosition.y * 0.005;
        this.mesh.rotation.y += mousePosition.x * 0.005;
    }
}
