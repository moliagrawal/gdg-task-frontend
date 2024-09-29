import { defineConfig } from 'vite';

// Export Vite configuration
export default defineConfig({
  // Server configuration for dev environment
  server: {
    host: true, // Enable access from external devices
    port: 3000, // Define default port, fallback is 3000 if not available
    open: false, // Automatically open the browser
  },

  // Build configuration
  build: {
    outDir: 'dist', // Output directory for build files
    sourcemap: true, // Generate source maps for debugging
    minify: 'esbuild', // Minify using esbuild (default)
  },
});