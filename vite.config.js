import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    sentryVitePlugin({
      org: "jsm-9zy",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
