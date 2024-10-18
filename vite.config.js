import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // You can optimize chunking if necessary
        manualChunks: undefined,
      },
    },
    // This helps avoid the chunk size warnings in build
    chunkSizeWarningLimit: 1500, // Adjust as necessary
  },
  server: {
    // Ensures that Vite will fallback to `index.html` for SPA routing
    historyApiFallback: true,
  },
  // Optional: Customize public path if deploying to a subdirectory
  base: "/",
});
