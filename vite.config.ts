import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode })=> (
  {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@context": path.resolve(__dirname, "./src/context"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@api": path.resolve(__dirname, "./src/API"),
      }
    },
    test: {
      globals: true,
      env: loadEnv(mode, process.cwd(), ''),
      environment: 'jsdom',
    }
  }
))
