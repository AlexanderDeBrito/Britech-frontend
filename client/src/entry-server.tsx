import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import App from './App';

/**
 * Renderiza uma rota como HTML estático. Usado apenas em tempo de build
 * (scripts/prerender.mjs) para que cada URL do site seja entregue ao
 * crawler já com o conteúdo pronto, sem depender de execução de JavaScript.
 */
export function render(url: string): string {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}

export { INDEXABLE_PATHS, PAGES, SITE, absoluteUrl, getPageSeo } from './lib/seo';
export { headTagsForPath, renderHeadTags } from './lib/seo-head';
