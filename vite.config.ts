import { defineConfig } from "vite";
import { resolve } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { cwd } from "process";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      dts: "src/auto-imports.d.ts",
      imports: ["vue", "vue-router"],
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: "src/components.d.ts",
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(cwd(), "src/assets/images/icons")],
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
