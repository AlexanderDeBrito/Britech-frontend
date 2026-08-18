import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, type Plugin } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

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

export default defineConfig(({ command, mode }) => {
  const isProd = command === "build" && mode !== "development";

  // Ferramentas de autoria da plataforma Manus: úteis no editor, puro peso em
  // produção (o runtime sozinho injeta ~366 kB de script inline em cada página
  // e o jsx-loc marca todo elemento JSX com atributos `data-loc`).
  const authoringPlugins = isProd ? [] : [jsxLocPlugin(), vitePluginManusRuntime()];

  return {
    plugins: [react(), tailwindcss(), ...authoringPlugins, analyticsPlugin(process.env)],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
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
      strictPort: false, // Will find next available port if 3000 is busy
      host: true,
      allowedHosts: [
        ".manuspre.computer",
        ".manus.computer",
        ".manus-asia.computer",
        ".manuscomputer.ai",
        ".manusvm.computer",
        "localhost",
        "127.0.0.1",
      ],
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
