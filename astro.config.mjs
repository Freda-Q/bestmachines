import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import path from "node:path";

export default defineConfig({
  integrations: [react()],
  outDir: "./dist/public",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./client/src"),
      },
    },
  },
});
