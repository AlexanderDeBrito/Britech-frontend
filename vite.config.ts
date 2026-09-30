import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, type Plugin } from "vite";

/**
 * Injeta o script do Umami somente quando endpoint e id estão configurados.
 * Antes o snippet ficava fixo no index.html com placeholders `%VITE_*%`; sem as
 * variáveis definidas o Vite os deixava crus e toda visita disparava uma
 * requisição quebrada.
 */
function analyticsPlugin(env: Record<string, string | undefined>): Plugin {
  return {
    name: "britech-analytics",
    transformIndexHtml() {
      const { VITE_ANALYTICS_ENDPOINT: endpoint, VITE_ANALYTICS_WEBSITE_ID: websiteId } = env;
      if (!endpoint || !websiteId) return [];
      return [
        {
          tag: "script",
          injectTo: "body" as const,
          attrs: { defer: true, src: `${endpoint}/umami`, "data-website-id": websiteId },
        },
      ];
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), analyticsPlugin(process.env)],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
      },
    },
    envDir: path.resolve(import.meta.dirname),
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
      cssCodeSplit: false,
    },
    server: {
      port: 3000,
      strictPort: false,
      host: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
