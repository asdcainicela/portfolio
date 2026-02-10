import * as THREE from 'three';
import { Renderer } from '@/three/core/Renderer';
import { Camera } from './Camera';
// import { Lights } from './Lights'; // Unused
import { AssetLoader } from '@/utils/AssetLoader';
import { Materials } from '../materials/Materials';
// import { ParticleSystem } from '../objects/ParticleSystem';
import { MouseParallax } from '@/utils/MouseParallax';
import { Capybara } from '../objects/Capybara';
import { KleinBottle } from '../objects/KleinBottle';
import { StatsBoxes } from '../objects/StatsBoxes';
import { SkillOrbs } from '../objects/SkillOrbs';
import { ExperienceTimeline } from '../objects/ExperienceTimeline';
import { ScrollController } from '@/utils/ScrollController';

export class Scene {
    public scene: THREE.Scene;
    public camera: Camera;
    public renderer: Renderer;
    public materials: Materials;
    public clock: THREE.Clock;
    public assetLoader: AssetLoader;
    public mouseParallax: MouseParallax;

    // Objects
    public capybara!: Capybara;
    public kleinBottle!: KleinBottle;
    public statsBoxes!: StatsBoxes;
    public skillOrbs!: SkillOrbs;
    private experienceTimeline!: ExperienceTimeline;
    private scrollController: ScrollController;

    constructor(canvas: HTMLCanvasElement) {
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x050505);

        this.renderer = new Renderer(canvas);
        this.camera = new Camera();

        this.materials = new Materials();
        this.mouseParallax = new MouseParallax();
        this.assetLoader = new AssetLoader();

        // Init Objects
        this.kleinBottle = new KleinBottle(this.scene);
        // this.capybara = new Capybara(this.scene); // Deactivated
        // this.statsBoxes = new StatsBoxes(this.scene); // Deactivated
        this.skillOrbs = new SkillOrbs(this.scene);
        this.experienceTimeline = new ExperienceTimeline(this.scene);
        this.scrollController = ScrollController.getInstance();

        // ...
        this.update();
    }

    // ...

    private update() {
        const delta = this.clock.getDelta();
        const elapsedTime = this.clock.getElapsedTime();

        this.materials.update(delta);
        // this.particles.update(elapsedTime);
        // this.capybara.update(elapsedTime, this.mouseParallax.position); // Deactivated
        this.kleinBottle.update(elapsedTime, this.mouseParallax.position);
        // this.statsBoxes.update(elapsedTime); // Deactivated
        this.skillOrbs.update(elapsedTime);
        this.experienceTimeline.update(elapsedTime);

        // Scroll Logic
        const scrollProg = this.scrollController.progress;

        let targetCamPos = new THREE.Vector3(0, 0, 10); // Default Hero

        // Simple section detection & Camera Move
        if (scrollProg < 0.2) {
            // Hero
            this.kleinBottle.setSection('hero');
            // this.capybara.mesh.visible = true; // Deactivated
            // this.statsBoxes.animateOut();
            this.skillOrbs.setVisible(false);
            this.experienceTimeline.setVisible(false);
            targetCamPos.set(0, 0, 10);
        } else if (scrollProg < 0.4) {
            // Profile
            this.kleinBottle.setSection('profile');
            // this.capybara.mesh.visible = false;
            // this.statsBoxes.animateIn();
            this.skillOrbs.setVisible(true);
            this.experienceTimeline.setVisible(false);
            targetCamPos.set(0, 0, 14);
        } else if (scrollProg < 0.6) {
            // Experience
            this.kleinBottle.setSection('experience');
            // this.capybara.mesh.visible = false;
            // this.statsBoxes.animateOut();
            this.skillOrbs.setVisible(false);
            this.experienceTimeline.setVisible(true);

            // Camera position for Timeline
            targetCamPos.set(0, 0, 12);
        } else if (scrollProg < 0.8) {
            // Projects
            this.kleinBottle.setSection('projects');
            // this.capybara.mesh.visible = false;
            this.skillOrbs.setVisible(false);
            this.experienceTimeline.setVisible(false); // Hide timeline
            targetCamPos.set(0, -20, 15);
        } else {
            // Contact
            this.kleinBottle.setSection('contact');
            // this.capybara.mesh.visible = false;
            this.skillOrbs.setVisible(false);
            this.experienceTimeline.setVisible(false);
            targetCamPos.set(0, -30, 10);
        }

        // Smoothly interpolate camera position
        this.camera.instance.position.lerp(targetCamPos, 0.05);

        // Parallax Camera (Additive)
        const parallaxX = this.mouseParallax.position.x * 0.5;
        const parallaxY = this.mouseParallax.position.y * 0.5;

        this.camera.instance.position.x += (parallaxX - this.camera.instance.position.x + targetCamPos.x) * 0.1;
        this.camera.instance.position.y += (parallaxY - this.camera.instance.position.y + targetCamPos.y) * 0.1;

        this.camera.instance.lookAt(0, targetCamPos.y, 0); // Look at center but follow Y level

        this.renderer.instance.render(this.scene, this.camera.instance);
        requestAnimationFrame(this.update.bind(this));
    }
}
