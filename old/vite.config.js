// @ts-check
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    target: "esnext",
  },
  root: __dirname,
  plugins: [vue()],
});
