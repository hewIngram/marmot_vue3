import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "marmot",
      fileName: "marmot",
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'src/global.css', dest: 'dist/styles' },
          ],
          hook: "writeBundle",
          copyOnce: true,
        })
      ],
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
