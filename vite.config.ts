import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    plugins: [glsl()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    base: '/portfolio/', // For GitHub Pages
    build: {
        minify: true,
        sourcemap: false,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('three')) return 'three';
                        if (id.includes('gsap')) return 'gsap';
                        return 'vendor'; // Split other node_modules into vendor
                    }
                }
            }
        }
    },
    server: {
        host: true
    }
});
