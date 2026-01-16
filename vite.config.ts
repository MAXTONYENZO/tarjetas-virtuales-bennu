import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // IPv6 - equivalente a 0.0.0.0 para IPv4
    port: 8080,
    hmr: {
      overlay: false,
    },
    // AÑADE ESTA LÍNEA ↓ para solucionar el error de ngrok
    allowedHosts: [
      "unmineralized-chae-biweekly.ngrok-free.dev",
      ".ngrok-free.dev", // Permite todos los subdominios ngrok
      "localhost",
      "127.0.0.1",
      "[::1]", // IPv6 localhost
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // OPCIONAL: Configuración para build si aún tienes problemas
  build: {
    rollupOptions: {
      external: [], // Asegúrate que framer-motion NO esté aquí
    },
  },
}));
