import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/gsap_with_threejs/", // Ensure a trailing slash

  build: {
    outDir: "./docs", // Output directory
    sourcemap: true, // Enable source maps
  },

  // //build: {
  //   sourcemap: true,
  // },
});
