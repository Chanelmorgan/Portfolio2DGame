import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio2DGame/', // Ensure this matches your repository name
  build: {
    outDir: 'dist', // Ensure this matches the publish_dir in your GitHub Actions
    minify: 'terser',
  },
});