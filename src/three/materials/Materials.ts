import * as THREE from 'three';
import holographicVert from '../shaders/holographic.vert';
import holographicFrag from '../shaders/holographic.frag';
import particlesVert from '../shaders/particles.vert';
import particlesFrag from '../shaders/particles.frag';

export class Materials {
    public holographic: THREE.ShaderMaterial;
    public particles: THREE.ShaderMaterial;

    constructor() {
        this.holographic = new THREE.ShaderMaterial({
            vertexShader: holographicVert,
            fragmentShader: holographicFrag,
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color('#00d4ff') },
                uRimPower: { value: 2.0 },
                uRimIntensity: { value: 2.0 }
            },
            transparent: true,
            side: THREE.FrontSide, // Or DoubleSide if needed
            depthWrite: false, // For better transparency sorting
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.ShaderMaterial({
            vertexShader: particlesVert,
            fragmentShader: particlesFrag,
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color('#00ff88') }, // Tech Green/Cyan
                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
                uSize: { value: 100 }
            },
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
    }

    update(deltaTime: number) {
        this.holographic.uniforms.uTime.value += deltaTime;
        this.particles.uniforms.uTime.value += deltaTime;
    }
}
