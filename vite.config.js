import { defineConfig } from 'vite';
export default defineConfig({base:'./',server:{host:'0.0.0.0',port:5181},preview:{host:'0.0.0.0',port:5181},build:{chunkSizeWarningLimit:700,rollupOptions:{output:{manualChunks(id){if(id.includes('node_modules/three/'))return 'three';}}}}});
