import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'framer-motion-vendor': ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
          'lucide-icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
});
