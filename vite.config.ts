import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { join } from "node:path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), basicSsl()],
  build: {
    outDir: "./docs",
  },
  base: "./",
  resolve: {
    alias: {
      "@": join(__dirname, "./src/"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
  },
});
