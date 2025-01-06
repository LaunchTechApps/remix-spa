import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
   plugins: [react({ exclude: [] }), tsconfigPaths()],
   build: {
      outDir: "build",
      assetsDir: "assets",
   },
   base: "remix-spa",
});
