import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/iPhone15-Website-Three.js/",
  build: {
    outDir: "./docs", // More explicit relative path
    sourcemap: true,
  },

  // //build: {
  //   sourcemap: true,
  // },
});
