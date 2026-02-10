import * as THREE from 'three';
import { experience } from '@/data/experience';

export class ExperienceTimeline {
    public mesh: THREE.Group;
    private nodes: THREE.Mesh[] = [];
    private line!: THREE.Line;

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();

        this.createTimeline();
        scene.add(this.mesh);
        this.mesh.visible = false; // Hidden by default, shown in Experience section
    }

    private createTimeline() {
        // Vertical Timeline
        const lineGeo = new THREE.BufferGeometry();
        const linePoints: THREE.Vector3[] = [];

        experience.forEach((_exp, index) => {
            // Position nodes vertically
            const y = -index * 4; // Spacing
            const x = index % 2 === 0 ? 1.2 : -1.2; // Narrower Zig-zag

            /* 
            // Create Node (Sphere) - Deactivated for now as per user feedback
            const geometry = new THREE.IcosahedronGeometry(0.45, 1);
            const material = this.materials[index % this.materials.length];
            const node = new THREE.Mesh(geometry, material);

            node.position.set(x, y, 0);
            this.mesh.add(node);
            this.nodes.push(node);
            */

            linePoints.push(new THREE.Vector3(x, y, 0));

            // Optional: Add connecting small spheres or particles
        });

        // Create Line
        lineGeo.setFromPoints(linePoints);
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
        this.line = new THREE.Line(lineGeo, lineMat);
        this.mesh.add(this.line);

        // Center the group roughly
        // 3 items: 0, -4, -8. Center Y is -4.
        this.mesh.position.y = 4; // Pull it up so the first item is visible
    }

    public update(time: number) {
        if (!this.mesh.visible) return;

        // Animate nodes
        this.nodes.forEach((node, i) => {
            node.rotation.y = time * 0.5 + i;
            node.rotation.z = time * 0.2;

            // Floating effect
            node.position.y += Math.sin(time + i) * 0.005;
        });
    }

    public setVisible(visible: boolean) {
        this.mesh.visible = visible;
    }
}
