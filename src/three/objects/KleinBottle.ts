import * as THREE from 'three';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';

export class KleinBottle {
    public mesh: THREE.Group; // Changed to Group to hold multiple layers
    private outerMesh: THREE.Mesh;
    private innerMesh: THREE.Mesh;

    private kleinGeo: ParametricGeometry;
    private torusGeo: THREE.TorusKnotGeometry;
    private torusInnerGeo: THREE.TorusKnotGeometry;

    // Materials
    private wireframeMat: THREE.MeshBasicMaterial;
    private glassMat: THREE.MeshPhysicalMaterial;
    private metalMat: THREE.MeshStandardMaterial;
    private techBlueMat: THREE.MeshStandardMaterial; // Outer shell
    private energyMat: THREE.MeshStandardMaterial;    // Inner glow

    // State
    private currentSection: string = 'hero';
    private currentScale: number = 3;
    private targetScale: number = 3;
    private centerY: number = 0; // Base Y position

    // Mouse Interaction
    private mouseRotation = new THREE.Vector2(0, 0);

    constructor(scene: THREE.Scene) {
        this.mesh = new THREE.Group();

        // 1. Geometries
        this.kleinGeo = new ParametricGeometry(this.kleinFunction, 48, 48);
        this.kleinGeo.center();

        // Experience Geometries (Layered)
        this.torusGeo = new THREE.TorusKnotGeometry(1.5, 0.4, 128, 32);
        this.torusGeo.center();

        this.torusInnerGeo = new THREE.TorusKnotGeometry(1.48, 0.15, 128, 32);
        this.torusInnerGeo.center();

        // 2. Materials
        this.wireframeMat = new THREE.MeshBasicMaterial({
            color: 0x00aaff,
            wireframe: true,
            transparent: true,
            opacity: 0.03,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        this.glassMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transmission: 1.0,
            thickness: 0.5,
            roughness: 0.1,
            ior: 1.5,
            side: THREE.DoubleSide
        });

        this.metalMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            metalness: 0.9,
            roughness: 0.3,
            side: THREE.DoubleSide
        });

        // Experience Shell (Wireframe/Semi-transparent Blue)
        this.techBlueMat = new THREE.MeshStandardMaterial({
            color: 0x00d4ff,
            emissive: 0x00d4ff,
            emissiveIntensity: 0.3,
            metalness: 0.9,
            roughness: 0.1,
            wireframe: true, // Wireframe shell to show inner core
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });

        // Experience Inner Core (Glowing Energy)
        this.energyMat = new THREE.MeshStandardMaterial({
            color: 0x00ffff,
            emissive: 0x00ffff,
            emissiveIntensity: 2.0,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        // 3. Meshes
        this.outerMesh = new THREE.Mesh(this.kleinGeo, this.wireframeMat);
        this.innerMesh = new THREE.Mesh(this.torusInnerGeo, this.energyMat);
        this.innerMesh.visible = false; // Only visible in experience

        this.mesh.add(this.outerMesh);
        this.mesh.add(this.innerMesh);

        this.mesh.scale.set(3, 3, 3);
        scene.add(this.mesh);
    }

    private kleinFunction(u: number, v: number, target: THREE.Vector3) {
        u *= Math.PI * 2;
        v *= Math.PI * 2;
        const a = 2;
        const b = 1;
        const c = 1;
        const cosV2 = Math.cos(v / 2);
        const sinV2 = Math.sin(v / 2);
        const sinU = Math.sin(u);
        const sin2u = Math.sin(2 * u);
        const cosV = Math.cos(v);
        const sinV = Math.sin(v);
        const r = a + b * cosV2 * sinU - c * sinV2 * sin2u;
        const x = r * cosV;
        const y = r * sinV;
        const z = b * sinV2 * sinU + c * cosV2 * sin2u;
        target.set(x, y, z);
    }

    public setY(y: number) {
        this.centerY = y;
    }

    public update(time: number, mouseTarget?: THREE.Vector2) {
        // Continuous idle rotation
        this.mesh.rotation.y += 0.001;
        this.mesh.rotation.x += 0.0005;

        // Base position + float
        this.mesh.position.y = this.centerY + Math.sin(time * 0.5) * 0.2;

        // Mouse follow logic (Inertia)
        if (mouseTarget) {
            // Target rotation based on mouse pos
            const targetRotX = mouseTarget.y * 0.3;
            const targetRotY = mouseTarget.x * 0.3;

            this.mouseRotation.x = THREE.MathUtils.lerp(this.mouseRotation.x, targetRotX, 0.05);
            this.mouseRotation.y = THREE.MathUtils.lerp(this.mouseRotation.y, targetRotY, 0.05);

            // Apply hover tilt
            this.mesh.rotation.x = 0.0005 * time + this.mouseRotation.x;
            this.mesh.rotation.y = 0.001 * time + this.mouseRotation.y;
        }

        // Smooth Scale transition
        this.currentScale = THREE.MathUtils.lerp(this.currentScale, this.targetScale, 0.05);
        this.mesh.scale.set(this.currentScale, this.currentScale, this.currentScale);

        // Pulstating effect for inner core in experience
        if (this.currentSection === 'experience') {
            const pulse = 1.0 + Math.sin(time * 3) * 0.1;
            this.innerMesh.scale.set(pulse, pulse, pulse);
            this.energyMat.emissiveIntensity = 1.5 + Math.sin(time * 3) * 0.5;
        }
    }

    public setSection(section: 'hero' | 'profile' | 'experience' | 'projects' | 'contact') {
        if (this.currentSection === section) return;
        this.currentSection = section;

        console.log(`Switching 3D Energy Core to ${section}`);

        switch (section) {
            case 'hero':
                this.outerMesh.geometry = this.kleinGeo;
                this.outerMesh.material = this.wireframeMat;
                this.innerMesh.visible = false;
                this.targetScale = 3;
                break;
            case 'profile':
                this.outerMesh.geometry = this.kleinGeo;
                this.outerMesh.material = this.glassMat;
                this.innerMesh.visible = false;
                this.targetScale = 3;
                break;
            case 'experience':
                this.outerMesh.geometry = this.torusGeo;
                this.outerMesh.material = this.techBlueMat;
                this.innerMesh.visible = true;
                this.innerMesh.geometry = this.torusInnerGeo;
                this.targetScale = 2.0;
                break;
            case 'projects':
                this.outerMesh.geometry = this.kleinGeo;
                this.outerMesh.material = this.metalMat;
                this.innerMesh.visible = false;
                this.targetScale = 3;
                break;
            case 'contact':
                this.outerMesh.geometry = this.kleinGeo;
                this.outerMesh.material = this.wireframeMat;
                this.innerMesh.visible = false;
                this.targetScale = 3;
                break;
        }
    }
}
