/**
 * Gera HTML estático para cada rota depois do build do cliente.
 *
 * Sem isso o site é entregue como um <div id="root"> vazio: o Google até
 * executa JavaScript, mas o faz numa segunda passada, com atraso e sem
 * garantia — e nenhum outro crawler (redes sociais, Bing, agentes de IA)
 * executa. Com o prerender cada URL responde com o conteúdo já montado, o
 * <title>/description corretos e o JSON-LD da página.
 */
import { build } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const clientOut = path.join(root, 'dist/public');
const ssrOut = path.join(root, 'dist/server');

const log = (msg) => console.log(`\x1b[36m[prerender]\x1b[0m ${msg}`);

async function buildSsrBundle() {
  log('compilando bundle de SSR…');
  await build({
    configFile: path.join(root, 'vite.config.ts'),
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'client/src/entry-server.tsx'),
      outDir: ssrOut,
      emptyOutDir: true,
      cssCodeSplit: false,
      // O CSS já vem do build do cliente; aqui só interessa o HTML.
      cssMinify: false,
      reportCompressedSize: false,
    },
  });
}

/** Substitui o bloco marcado no template pelas tags reais da rota. */
function injectHead(template, headHtml) {
  const start = template.indexOf('<!--seo:start-->');
  const end = template.indexOf('<!--seo:end-->');
  if (start === -1 || end === -1) {
    throw new Error('marcadores <!--seo:start--> / <!--seo:end--> ausentes no index.html');
  }
  return template.slice(0, start) + headHtml.trimStart() + template.slice(end + '<!--seo:end-->'.length);
}

function outputFileFor(routePath) {
  return routePath === '/'
    ? path.join(clientOut, 'index.html')
    : path.join(clientOut, routePath.replace(/^\//, ''), 'index.html');
}

async function main() {
  await buildSsrBundle();

  const entry = pathToFileURL(path.join(ssrOut, 'entry-server.js')).href;
  const { render, INDEXABLE_PATHS, absoluteUrl, getPageSeo, headTagsForPath, renderHeadTags } =
    await import(entry);

  const template = await fs.readFile(path.join(clientOut, 'index.html'), 'utf8');

  // Rotas indexáveis + a página de erro, que o Cloudflare Pages serve com
  // status 404 real quando existe um 404.html na raiz.
  const routes = [...INDEXABLE_PATHS, '/404'];

  for (const routePath of routes) {
    // Renderiza na URL final (com barra), a mesma que o navegador hidrata.
    const appHtml = render(routePath === '/' || routePath === '/404' ? routePath : `${routePath}/`);
    const headHtml = renderHeadTags(headTagsForPath(routePath));

    let html = injectHead(template, headHtml);
    html = html.replace('<div id="root"><!--app-html--></div>', `<div id="root">${appHtml}</div>`);

    const file = routePath === '/404' ? path.join(clientOut, '404.html') : outputFileFor(routePath);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, html, 'utf8');

    const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
    log(`${routePath.padEnd(18)} → ${path.relative(root, file)} (${kb} kB)`);
  }

  // Sitemap sempre em sincronia com as rotas realmente geradas.
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...INDEXABLE_PATHS.map((p) => {
      const page = getPageSeo(p);
      return [
        '  <url>',
        `    <loc>${absoluteUrl(p)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${page.changefreq}</changefreq>`,
        `    <priority>${page.priority.toFixed(1)}</priority>`,
        '  </url>',
      ].join('\n');
    }),
    '</urlset>',
    '',
  ].join('\n');

  await fs.writeFile(path.join(clientOut, 'sitemap.xml'), sitemap, 'utf8');
  log(`sitemap.xml com ${INDEXABLE_PATHS.length} URLs`);

  await fs.rm(ssrOut, { recursive: true, force: true });
  log('concluído');
}

main().catch((err) => {
  console.error('\x1b[31m[prerender] falhou\x1b[0m');
  console.error(err);
  process.exit(1);
});
