import * as THREE from 'three';

export class SkillOrbs {
    public mesh: THREE.Group;
    private orbs!: THREE.InstancedMesh;
    private count = 50;

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();
        this.createOrbs();

        this.mesh.visible = false;
        scene.add(this.mesh);
    }

    private createOrbs() {
        const geometry = new THREE.IcosahedronGeometry(0.2, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x00ff88,
            roughness: 0.4,
            metalness: 0.6,
            emissive: 0x00ff88,
            emissiveIntensity: 0.4
        });

        this.orbs = new THREE.InstancedMesh(geometry, material, this.count);

        const dummy = new THREE.Object3D();
        for (let i = 0; i < this.count; i++) {
            // Random orbit positions
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 3 + Math.random() * 2; // Radius 3-5

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            dummy.position.set(x, y, z);
            dummy.updateMatrix();
            this.orbs.setMatrixAt(i, dummy.matrix);
        }

        this.mesh.add(this.orbs);
    }

    public update(time: number) {
        this.mesh.rotation.y = time * 0.1;
        this.mesh.rotation.z = time * 0.05;
    }

    public setVisible(visible: boolean) {
        this.mesh.visible = visible;
    }
}
