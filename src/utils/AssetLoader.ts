import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

export class AssetLoader {
    private manager: THREE.LoadingManager;
    private gltfLoader: GLTFLoader;
    private textureLoader: THREE.TextureLoader;
    private fontLoader: FontLoader;

    public assets: any = {};

    constructor() {
        this.manager = new THREE.LoadingManager(
            () => {
                console.log('Assets loaded');
                window.dispatchEvent(new Event('assetsLoaded'));
            },
            (url, loaded, total) => {
                console.log(`Loading... ${(loaded / total * 100).toFixed(0)}%`);
            }
        );

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

        this.gltfLoader = new GLTFLoader(this.manager);
        this.gltfLoader.setDRACOLoader(dracoLoader);

        this.textureLoader = new THREE.TextureLoader(this.manager);
        this.fontLoader = new FontLoader(this.manager);
    }

    loadGLTF(path: string, name: string) {
        this.gltfLoader.load(path, (gltf) => {
            this.assets[name] = gltf;
        });
    }

    loadTexture(path: string, name: string) {
        this.textureLoader.load(path, (texture) => {
            this.assets[name] = texture;
        });
    }

    loadFont(path: string, name: string) {
        this.fontLoader.load(path, (font) => {
            this.assets[name] = font;
        });
    }
}
