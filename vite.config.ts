import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [["@swc/plugin-emotion", {}]],
    }),
  ],
  server: {
    proxy: {
      "/shioriapi": {
        target: "http://localhost:6001",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/shioriapi/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/app/components",
      "@core": "/src/app/core",
      "@api": "/src/app/api",
      "@env": "/src/environments",
    },
  },
});
