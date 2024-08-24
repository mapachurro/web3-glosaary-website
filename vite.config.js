import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  const base = process.env.VITE_BASE_URL || '/';

  return {
    base: base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      fs: {
        allow: ['..'],
      },
      historyApiFallback: true, // Ensure fallback for SPA routing in dev
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-router-dom'],
          },
        },
      },
    },
  };
});
