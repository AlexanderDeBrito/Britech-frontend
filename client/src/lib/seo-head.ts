import { SITE, absoluteUrl, buildJsonLd, getPageSeo, type PageSeo } from './seo';

export interface HeadTag {
  tag: 'title' | 'meta' | 'link' | 'script';
  attrs: Record<string, string>;
  children?: string;
}

/**
 * Descrição declarativa do <head> de uma rota. Uma única fonte alimenta tanto o
 * HTML gerado no build (prerender) quanto a atualização em tempo de execução
 * durante a navegação client-side — os dois nunca divergem.
 */
export function headTags(page: PageSeo): HeadTag[] {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(SITE.ogImage);
  const robots = page.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const tags: HeadTag[] = [
    { tag: 'title', attrs: {}, children: page.title },
    { tag: 'meta', attrs: { name: 'description', content: page.description } },
    { tag: 'meta', attrs: { name: 'robots', content: robots } },
    { tag: 'link', attrs: { rel: 'canonical', href: url } },

    // Open Graph
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
    { tag: 'meta', attrs: { property: 'og:title', content: page.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: page.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: `${SITE.name} — ${SITE.tagline}` } },

    // Twitter / X
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: page.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: page.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },

    // Sinais de localização (SEO local)
    { tag: 'meta', attrs: { name: 'geo.region', content: `${SITE.country}-${SITE.region}` } },
    { tag: 'meta', attrs: { name: 'geo.placename', content: SITE.city } },
    {
      tag: 'meta',
      attrs: { name: 'geo.position', content: `${SITE.latitude};${SITE.longitude}` },
    },
    { tag: 'meta', attrs: { name: 'ICBM', content: `${SITE.latitude}, ${SITE.longitude}` } },
    { tag: 'meta', attrs: { name: 'author', content: SITE.legalName } },

    { tag: 'link', attrs: { rel: 'alternate', hrefLang: 'pt-BR', href: url } },
    { tag: 'link', attrs: { rel: 'alternate', hrefLang: 'x-default', href: url } },
  ];

  if (page.keywords.length) {
    tags.splice(2, 0, {
      tag: 'meta',
      attrs: { name: 'keywords', content: page.keywords.join(', ') },
    });
  }

  tags.push({
    tag: 'script',
    attrs: { type: 'application/ld+json' },
    children: JSON.stringify(buildJsonLd(page)),
  });

  return tags;
}

export const headTagsForPath = (path: string) => headTags(getPageSeo(path));

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * JSON embutido em <script> só precisa neutralizar a sequência que fecharia a
 * tag; escapar como HTML corromperia o JSON.
 */
const escapeJsonLd = (value: string) => value.replace(/</g, '\\u003c');

/** Serializa as tags para o HTML estático gerado no build. */
export function renderHeadTags(tags: HeadTag[], indent = '    '): string {
  return tags
    .map((t) => {
      const attrs = Object.entries(t.attrs)
        .map(([k, v]) => `${k === 'hrefLang' ? 'hreflang' : k}="${escapeHtml(v)}"`)
        .join(' ');
      const open = attrs ? `<${t.tag} ${attrs}>` : `<${t.tag}>`;
      if (t.tag === 'meta' || t.tag === 'link') return `${indent}${open.replace(/>$/, ' />')}`;
      const body = t.tag === 'script' ? escapeJsonLd(t.children ?? '') : escapeHtml(t.children ?? '');
      return `${indent}${open}${body}</${t.tag}>`;
    })
    .join('\n');
}
