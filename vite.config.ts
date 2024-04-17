import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { join } from "node:path";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
// 引入postcss-pxtorem
import pxtorem from "postcss-pxtorem";

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
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
        pxtorem({
          rootValue: 37.5, // 设计稿宽度/10，这里以设计稿宽度为750px为例
          propList: ["*"], // 需要转换的属性，这里选择转换所有属性
        }),
      ],
    },
  },
});
