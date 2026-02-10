import * as THREE from 'three';
import gsap from 'gsap';

export class StatsBoxes {
    public mesh: THREE.Group;
    private boxes: THREE.Mesh[] = [];
    private connectingLines!: THREE.LineSegments;

    private readonly stats = [
        { label: 'Repos', value: '47+' },
        { label: 'Contribs', value: '3.8k+' },
        { label: 'Exp', value: '3+ Yrs' },
        { label: 'Certs', value: '19+' }
    ];

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();
        this.createBoxes();
        this.createConnections();

        // Initially hide
        this.mesh.visible = false;
        scene.add(this.mesh);
    }

    private createBoxes() {
        const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const material = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            metalness: 0.8,
            roughness: 0.2,
            emissive: 0x00d4ff,
            emissiveIntensity: 0.2
        });

        // Positions for 4 boxes in a semi-random or structured layout
        const positions = [
            new THREE.Vector3(-2, 1, 0),
            new THREE.Vector3(2, 2, -1),
            new THREE.Vector3(-2, -2, 1),
            new THREE.Vector3(2, -1, 0)
        ];

        this.stats.forEach((_, i) => {
            const box = new THREE.Mesh(geometry, material.clone());
            box.position.copy(positions[i]);

            // Add Text (Conceptual - normally would use texture or separate text object)
            // For now, simpler boxes with different glowing colors

            this.boxes.push(box);
            this.mesh.add(box);
        });
    }

    private createConnections() {
        // Create lines connecting the boxes
        const geometry = new THREE.BufferGeometry();
        const positions: number[] = [];

        // Connect each box to the next
        for (let i = 0; i < this.boxes.length; i++) {
            const current = this.boxes[i].position;
            const next = this.boxes[(i + 1) % this.boxes.length].position;

            positions.push(current.x, current.y, current.z);
            positions.push(next.x, next.y, next.z);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        const material = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.3 });

        this.connectingLines = new THREE.LineSegments(geometry, material);
        this.mesh.add(this.connectingLines);
    }

    public animateIn() {
        this.mesh.visible = true;
        gsap.to(this.mesh.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'back.out' });

        this.boxes.forEach((box, i) => {
            gsap.from(box.position, {
                y: box.position.y - 5,
                duration: 1,
                delay: i * 0.1,
                ease: 'power2.out'
            });
            gsap.to(box.rotation, {
                x: Math.PI * 2,
                y: Math.PI * 2,
                duration: 2,
                delay: i * 0.1
            });
        });
    }

    public animateOut() {
        gsap.to(this.mesh.scale, { x: 0, y: 0, z: 0, duration: 0.5, onComplete: () => { this.mesh.visible = false; } });
    }

    public update(time: number) {
        this.boxes.forEach((box, i) => {
            box.rotation.x += 0.005 + (i * 0.001);
            box.rotation.y += 0.003 + (i * 0.001);
            box.position.y += Math.sin(time + i) * 0.01; // Floating
        });
    }
}
