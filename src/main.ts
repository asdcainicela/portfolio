import './styles/main.scss';
import { Scene } from '@/three/core/Scene';
import { Navigation } from '@/components/Navigation';
import { ScrollController } from '@/utils/ScrollController';
import { Loader } from '@/components/Loader';

// Init UI Components first to ensure feedback
// Init UI Components first to ensure feedback
const loader = new Loader();
new Navigation();

try {
    ScrollController.getInstance(); // Start scroll logic early

    const canvas = document.querySelector('#webgl') as HTMLCanvasElement;
    if (canvas) {
        new Scene(canvas);
    } else {
        console.error('Canvas #webgl not found');
    }
} catch (error) {
    console.error('CRITICAL APP ERROR:', error);
    // If scene/scroll fails, force loader to finish so user isn't stuck
    setTimeout(() => loader.finish(), 2000);
}

