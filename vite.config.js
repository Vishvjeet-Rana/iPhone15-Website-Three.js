import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/gsap_with_threejs", // Add a leading and trailing slash
  build: {
    outDir: "./docs", // Specify the output directory
  },

  // //build: {
  //   sourcemap: true,
  // },
});
