import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { headTagsForPath, type HeadTag } from '@/lib/seo-head';
import { SITE } from '@/lib/seo';

const MANAGED = 'data-seo';

/**
 * Chave estável por tag, para reaproveitar o elemento que o prerender já
 * colocou no HTML em vez de duplicá-lo.
 */
function keyOf(tag: HeadTag): string {
  if (tag.tag === 'title') return 'title';
  if (tag.tag === 'script') return 'script:ld+json';
  const { name, property, rel, hrefLang } = tag.attrs;
  if (name) return `meta:name:${name}`;
  if (property) return `meta:property:${property}`;
  return `link:${rel}${hrefLang ? `:${hrefLang}` : ''}`;
}

function selectorFor(tag: HeadTag): string {
  if (tag.tag === 'title') return 'title';
  if (tag.tag === 'script') return 'script[type="application/ld+json"]';
  const { name, property, rel, hrefLang } = tag.attrs;
  if (name) return `meta[name="${name}"]`;
  if (property) return `meta[property="${property}"]`;
  if (hrefLang) return `link[rel="${rel}"][hreflang="${hrefLang}"]`;
  return `link[rel="${rel}"]`;
}

function applyHeadTags(tags: HeadTag[]) {
  const head = document.head;
  const claimed = new Set<Element>();

  for (const tag of tags) {
    const key = keyOf(tag);
    // 1) elemento que já gerenciamos numa passada anterior;
    // 2) na primeira execução, a tag equivalente vinda do HTML pré-renderizado;
    // 3) caso não exista nenhuma, cria.
    let el = head.querySelector<HTMLElement>(`[${MANAGED}][data-seo-key="${key}"]`);
    if (!el) {
      el =
        Array.from(head.querySelectorAll<HTMLElement>(selectorFor(tag))).find(
          (candidate) => !claimed.has(candidate) && !candidate.dataset.seoKey,
        ) ?? null;
    }
    if (!el) el = head.appendChild(document.createElement(tag.tag));
    claimed.add(el);

    for (const [attr, value] of Object.entries(tag.attrs)) {
      el.setAttribute(attr === 'hrefLang' ? 'hreflang' : attr, value);
    }
    if (tag.children !== undefined) el.textContent = tag.children;
    el.setAttribute(MANAGED, '');
    el.dataset.seoKey = key;
  }
}

/**
 * Mantém o <head> em sincronia durante a navegação client-side. No primeiro
 * carregamento as tags já vêm prontas do HTML gerado no build — este efeito
 * apenas as reaproveita.
 */
export function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    applyHeadTags(headTagsForPath(location));
    document.documentElement.lang = SITE.lang;
  }, [location]);

  return null;
}
