import { CASES } from './cases';
import { CONTACT } from './contact';
import { FAQ } from './faq';

/** Identidade do site — fonte única para meta tags, JSON-LD e sitemap. */
export const SITE = {
  url: 'https://britechsolucoes.com',
  name: 'Britech',
  legalName: 'Britech Soluções',
  tagline: 'Não são os agentes, são os gates.',
  locale: 'pt_BR',
  lang: 'pt-BR',
  ogImage: '/og-image.png',
  themeColor: '#0B1220',
  foundingYear: '2023',
  city: 'Blumenau',
  region: 'SC',
  regionName: 'Santa Catarina',
  country: 'BR',
  postalCode: '89010-000',
  latitude: -26.9194,
  longitude: -49.0661,
} as const;

/**
 * URL absoluta com barra final. O Cloudflare Pages serve `sobre/index.html` em
 * `/sobre/` e responde 308 para `/sobre`; canonical, og:url e sitemap precisam
 * apontar para a URL final, não para o redirect.
 */
export const absoluteUrl = (path: string) => {
  if (path.startsWith('http')) return path;
  const clean = path.replace(/\/+$/, '');
  if (clean === '') return `${SITE.url}/`;
  // Arquivos (logo.png, og-image.png…) não ganham barra.
  return /\.[a-z0-9]+$/i.test(clean) ? `${SITE.url}${clean}` : `${SITE.url}${clean}/`;
};

export interface PageSeo {
  path: string;
  /** <title> completo — mantenha até ~60 caracteres para não truncar na SERP. */
  title: string;
  /** meta description — alvo de 150-160 caracteres. */
  description: string;
  keywords: string[];
  /** Trilha de navegação (a home é adicionada automaticamente). */
  breadcrumb?: { name: string; path: string }[];
  /** Nós extras do @graph do JSON-LD desta página. */
  graph?: () => Record<string, unknown>[];
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Fora do sitemap e marcada como noindex (ex.: 404). */
  noindex?: boolean;
}

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const FOUNDER_ID = `${SITE.url}/#alexander-brito`;

/** Atendimento remoto para todo o Brasil, com base em Blumenau (SC). */
const AREA_SERVED = [{ '@type': 'Country', name: 'Brasil' }];

export const SERVICES_CATALOG = [
  {
    name: 'Implantação do DAG — Desenvolvimento Autônomo Governado',
    description:
      'Agentes de IA executam a tarefa inteira (especificação, código, 4 revisões independentes, deploy e testes com revert automático) e as pessoas decidem nos gates.',
  },
  {
    name: 'Arquitetura de SaaS e sistemas B2B',
    description:
      'Modelo de dados, isolamento entre clientes, autenticação e permissões e escalabilidade tratados como decisões de negócio: crescer sem reescrever.',
  },
  {
    name: 'Integrações e pagamentos',
    description:
      'WhatsApp (API oficial), meios de pagamento, sistemas regulados e APIs de parceiros com confiabilidade, rastreabilidade e menos operação manual.',
  },
  {
    name: 'Infraestrutura em nuvem e custos',
    description:
      'Revisão de arquitetura, observabilidade e FinOps para que a conta da nuvem acompanhe a receita, não o contrário.',
  },
];

export function founderNode(): Record<string, unknown> {
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Alexander Brito',
    image: absoluteUrl('/images/alexander-brito.webp'),
    jobTitle: 'Fundador e arquiteto de software',
    worksFor: { '@id': ORGANIZATION_ID },
    knowsAbout: [
      'Arquitetura de software',
      'SaaS B2B',
      'Desenvolvimento acelerado por IA',
      'Sistemas de pagamento',
    ],
  };
}

/** Organização/negócio local — o nó mais importante para o Google entender quem é a Britech. */
export function organizationNode(): Record<string, unknown> {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description:
      'Consultoria enxuta de arquitetura e desenvolvimento acelerado por IA para empresas que constroem SaaS e produtos B2B. Criadora do DAG (Desenvolvimento Autônomo Governado). Blumenau (SC).',
    slogan: SITE.tagline,
    foundingDate: SITE.foundingYear,
    founder: { '@id': FOUNDER_ID },
    email: CONTACT.email,
    telephone: CONTACT.phoneE164,
    image: absoluteUrl(SITE.ogImage),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
      width: 512,
      height: 512,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    areaServed: AREA_SERVED,
    knowsLanguage: ['pt-BR'],
    sameAs: [CONTACT.linkedin],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: CONTACT.phoneE164,
        email: CONTACT.email,
        areaServed: 'BR',
        availableLanguage: ['Portuguese'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços da Britech',
      itemListElement: SERVICES_CATALOG.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          provider: { '@id': ORGANIZATION_ID },
          areaServed: AREA_SERVED,
        },
      })),
    },
  };
}

export function websiteNode(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: `${SITE.name} — arquitetura e desenvolvimento acelerado por IA. ${SITE.tagline}`,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: SITE.lang,
  };
}

function breadcrumbNode(page: PageSeo): Record<string, unknown> {
  const trail = [{ name: 'Início', path: '/' }, ...(page.breadcrumb ?? [])];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(page.path)}#breadcrumb`,
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function webPageNode(page: PageSeo): Record<string, unknown> {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(page.path)}#webpage`,
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    inLanguage: SITE.lang,
    breadcrumb: { '@id': `${absoluteUrl(page.path)}#breadcrumb` },
  };
}

function faqNode(): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

const page = (
  path: string,
  crumbs: string[],
  rest: Omit<PageSeo, 'path' | 'breadcrumb'>,
  crumbPaths: string[] = [path],
): PageSeo => ({
  path,
  breadcrumb: crumbs.map((name, i) => ({ name, path: crumbPaths[i] })),
  ...rest,
});

export const PAGES: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: 'Britech — Arquitetura e desenvolvimento acelerado por IA',
    description:
      'Implantamos o DAG: agentes de IA executam, pessoas decidem nos gates. Arquitetura para SaaS e B2B, integrações e nuvem. Diagnóstico gratuito de 30 min.',
    keywords: [
      'desenvolvimento com agentes de ia',
      'desenvolvimento acelerado por ia',
      'consultoria de arquitetura de software',
      'arquitetura saas',
      'governança de ia no desenvolvimento',
      'dag desenvolvimento autônomo governado',
    ],
    changefreq: 'weekly',
    priority: 1.0,
    graph: () => [faqNode()],
  },
  '/dag': page('/dag', ['DAG'], {
    title: 'DAG — Desenvolvimento Autônomo Governado | Britech',
    description:
      'Agentes de IA fazem a tarefa inteira: spec, código, 4 revisões independentes, deploy e testes com revert automático. Pessoas decidem nos gates. Conheça o DAG.',
    keywords: [
      'dag desenvolvimento autônomo governado',
      'agentes de ia para desenvolvimento de software',
      'governança de ia no desenvolvimento',
      'code review com ia',
      'desenvolvimento acelerado por ia',
    ],
    changefreq: 'monthly',
    priority: 0.95,
    graph: () => [
      {
        '@type': 'Service',
        '@id': `${SITE.url}/dag/#service`,
        name: 'DAG — Desenvolvimento Autônomo Governado',
        serviceType: 'Implantação de desenvolvimento acelerado por IA',
        description: SERVICES_CATALOG[0].description,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: AREA_SERVED,
      },
    ],
  }),
  '/servicos': page('/servicos', ['Serviços'], {
    title: 'Serviços: DAG, arquitetura SaaS, integrações | Britech',
    description:
      'Implantação do DAG, arquitetura para SaaS e sistemas B2B, integrações e pagamentos, infraestrutura em nuvem e custos. Arquitetura como decisão de negócio.',
    keywords: [
      'consultoria de arquitetura de software',
      'arquitetura saas',
      'integração de pagamentos',
      'finops aws',
      'desenvolvimento acelerado por ia',
    ],
    changefreq: 'monthly',
    priority: 0.9,
    graph: () =>
      SERVICES_CATALOG.map((s) => ({
        '@type': 'Service',
        name: s.name,
        description: s.description,
        serviceType: s.name,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: AREA_SERVED,
      })),
  }),
  '/cases': page('/cases', ['Cases'], {
    title: 'Cases: DAG e produtos SaaS em produção | Britech',
    description:
      'Resultados medidos: no CRM Renke, 16h → 194h estimadas entregues por mês e ciclo mediano de 22 → 12 dias com o DAG. Veja os cases da Britech.',
    keywords: ['cases dag', 'resultados desenvolvimento com ia', 'case saas b2b', 'crm renke'],
    changefreq: 'monthly',
    priority: 0.8,
    graph: () => [
      {
        '@type': 'ItemList',
        '@id': `${SITE.url}/cases/#list`,
        name: 'Cases de clientes da Britech',
        itemListElement: CASES.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'CreativeWork',
            name: `${c.title} — ${c.client}`,
            description: c.description,
            about: c.category,
            keywords: c.technologies.join(', '),
            creator: { '@id': ORGANIZATION_ID },
            ...(c.href ? { url: absoluteUrl(c.href) } : c.link ? { url: c.link } : {}),
          },
        })),
      },
    ],
  }),
  '/cases/crm-renke': page(
    '/cases/crm-renke',
    ['Cases', 'CRM Renke'],
    {
      title: 'Case CRM Renke: 12× mais horas entregues com o DAG | Britech',
      description:
        'Como o DAG levou o CRM Renke de 16h para 194h estimadas entregues por mês e cortou o ciclo mediano de 22 para 12 dias, com pessoas decidindo nos gates.',
      keywords: ['case dag', 'crm renke', 'produtividade com agentes de ia', 'resultados dag'],
      changefreq: 'monthly',
      priority: 0.85,
      graph: () => [
        {
          '@type': 'Article',
          '@id': `${SITE.url}/cases/crm-renke/#article`,
          headline: 'Case CRM Renke: o DAG em produção',
          inLanguage: SITE.lang,
          author: { '@id': FOUNDER_ID },
          publisher: { '@id': ORGANIZATION_ID },
          about: { '@id': `${SITE.url}/dag/#service` },
          datePublished: '2026-09-30',
        },
      ],
    },
    ['/cases', '/cases/crm-renke'],
  ),
  '/sobre': page('/sobre', ['Sobre'], {
    title: 'Sobre a Britech e quem conduz: Alexander Brito',
    description:
      'Consultoria enxuta de arquitetura fundada em 2023 em Blumenau (SC). Conduzida por Alexander Brito: 8+ anos em engenharia de software, pagamentos e SaaS.',
    keywords: ['sobre a britech', 'alexander brito', 'consultoria de arquitetura blumenau'],
    changefreq: 'monthly',
    priority: 0.7,
    graph: () => [{ '@type': 'AboutPage', '@id': `${SITE.url}/sobre/#about` }, founderNode()],
  }),
  '/diagnostico': page('/diagnostico', ['Diagnóstico'], {
    title: 'Diagnóstico gratuito de 30 min | Britech',
    description:
      'Em 30 minutos mapeamos seu fluxo de desenvolvimento e onde o DAG destrava o time. Depois: diagnóstico de 1 semana, implantação e piloto medido de 30 dias.',
    keywords: ['diagnóstico desenvolvimento com ia', 'implantação dag', 'piloto desenvolvimento com agentes'],
    changefreq: 'monthly',
    priority: 0.9,
  }),
  '/contato': page('/contato', ['Contato'], {
    title: 'Contato | Fale com a Britech',
    description: `Fale com a Britech pelo WhatsApp ${CONTACT.phoneDisplay} ou pelo e-mail ${CONTACT.email}. Agende o diagnóstico gratuito de 30 minutos.`,
    keywords: ['contato britech', 'agendar diagnóstico', 'consultoria de arquitetura contato'],
    changefreq: 'yearly',
    priority: 0.7,
    graph: () => [
      {
        '@type': 'ContactPage',
        '@id': `${SITE.url}/contato/#contact`,
        mainEntity: { '@id': ORGANIZATION_ID },
      },
    ],
  }),
  '/privacidade': page('/privacidade', ['Privacidade'], {
    title: 'Política de Privacidade (LGPD) | Britech',
    description:
      'Como a Britech Soluções trata os dados pessoais recebidos pelo site e pelo formulário de contato, com base na LGPD: finalidade, base legal, retenção e direitos.',
    keywords: [],
    changefreq: 'yearly',
    priority: 0.3,
  }),
  '/404': {
    path: '/404',
    title: 'Página não encontrada | Britech',
    description: 'A página que você procura não existe ou foi movida.',
    keywords: [],
    changefreq: 'yearly',
    priority: 0.1,
    noindex: true,
  },
};

/** Rotas indexáveis, na ordem em que entram no sitemap. */
export const INDEXABLE_PATHS = Object.values(PAGES)
  .filter((p) => !p.noindex)
  .map((p) => p.path);

export const getPageSeo = (path: string): PageSeo => {
  const clean = path.replace(/\/+$/, '') || '/';
  return PAGES[clean] ?? PAGES['/404'];
};

/** Monta o @graph completo do JSON-LD de uma página. */
export function buildJsonLd(page: PageSeo) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(),
      websiteNode(),
      webPageNode(page),
      breadcrumbNode(page),
      ...(page.graph?.() ?? []),
    ],
  };
}
