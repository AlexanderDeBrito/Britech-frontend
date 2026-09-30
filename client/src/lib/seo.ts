import { CASES } from './cases';
import { CONTACT } from './contact';
import { FAQ, HOME_FAQ, type FaqItem } from './faq';
import { LANCAMENTOS, LANCAMENTOS_FAQ, PRODUCTS } from './products';
import { DAG_VIDEO } from './dag';

/** Identidade do site — fonte única para meta tags, JSON-LD e sitemap. */
export const SITE = {
  url: 'https://britechsolucoes.com',
  name: 'Britech',
  legalName: 'Britech Soluções',
  tagline: 'Construímos software — para a sua empresa e para o mercado.',
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
      'Empresa de desenvolvimento de software de Blumenau (SC), com duas frentes: consultoria de arquitetura e desenvolvimento acelerado por IA para quem constrói SaaS e produtos B2B, com o DAG (Desenvolvimento Autônomo Governado) como método, e produtos próprios, como o Assistente de Lançamentos para escritórios de contabilidade.',
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
      name: 'Consultoria e produtos da Britech',
      itemListElement: [
        ...SERVICES_CATALOG.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.description,
            provider: { '@id': ORGANIZATION_ID },
            areaServed: AREA_SERVED,
          },
        })),
        ...PRODUCTS.map((p) => ({
          '@type': 'Offer',
          itemOffered: { '@id': `${absoluteUrl(p.href)}#software` },
        })),
      ],
    },
  };
}

export function websiteNode(): Record<string, unknown> {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: `${SITE.name} — empresa de desenvolvimento de software: consultoria para SaaS e B2B e produtos próprios.`,
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

function faqNode(path: string, items: FaqItem[]): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Produto próprio. Sem `offers`: o preço ainda não foi definido. */
function softwareNode(): Record<string, unknown> {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(LANCAMENTOS.href)}#software`,
    name: LANCAMENTOS.name,
    alternateName: 'Assistente de lançamentos para escritórios contábeis',
    url: absoluteUrl(LANCAMENTOS.href),
    description: LANCAMENTOS.summary,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Contabilidade',
    operatingSystem: 'Web',
    inLanguage: SITE.lang,
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Escritórios contábeis de pequeno e médio porte, com até 30 pessoas',
    },
    creator: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
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
    title: 'Britech — Desenvolvimento de software: consultoria e produtos',
    description:
      'Empresa de software de Blumenau (SC): consultoria de arquitetura e desenvolvimento com IA para SaaS e B2B, e produtos próprios para escritórios contábeis.',
    keywords: [
      'empresa de desenvolvimento de software',
      'desenvolvimento de software blumenau',
      'consultoria de arquitetura de software',
      'desenvolvimento acelerado por ia',
      'arquitetura saas',
      'software para escritório de contabilidade',
    ],
    changefreq: 'weekly',
    priority: 1.0,
    graph: () => [faqNode('/', HOME_FAQ)],
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
      ...(DAG_VIDEO
        ? [
            {
              '@type': 'VideoObject',
              '@id': `${SITE.url}/dag/#video`,
              name: DAG_VIDEO.title,
              description: DAG_VIDEO.description,
              thumbnailUrl: [absoluteUrl(DAG_VIDEO.thumbnail)],
              uploadDate: DAG_VIDEO.uploadDate,
              duration: DAG_VIDEO.duration,
              contentUrl: absoluteUrl(DAG_VIDEO.src),
              inLanguage: SITE.lang,
              width: DAG_VIDEO.width,
              height: DAG_VIDEO.height,
              publisher: { '@id': ORGANIZATION_ID },
            },
          ]
        : []),
    ],
  }),
  '/servicos': page('/servicos', ['Serviços'], {
    title: 'Consultoria de arquitetura e desenvolvimento com IA | Britech',
    description:
      'Consultoria para SaaS e B2B: implantação do DAG, arquitetura, integrações, pagamentos e nuvem. Diagnóstico de 1 semana, implantação e piloto medido de 30 dias.',
    keywords: [
      'consultoria de arquitetura de software',
      'consultoria desenvolvimento com ia',
      'arquitetura saas',
      'integração de pagamentos',
      'finops aws',
      'desenvolvimento acelerado por ia',
    ],
    changefreq: 'monthly',
    priority: 0.9,
    graph: () => [
      ...SERVICES_CATALOG.map((s) => ({
        '@type': 'Service',
        name: s.name,
        description: s.description,
        serviceType: s.name,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: AREA_SERVED,
      })),
      faqNode('/servicos', FAQ),
    ],
  }),
  '/produtos': page('/produtos', ['Produtos'], {
    title: 'Produtos Britech: software próprio com IA',
    description:
      'Software que a Britech constrói e leva ao mercado. Primeiro produto: Assistente de Lançamentos, que classifica extratos no plano de contas de cada cliente.',
    keywords: [
      'produtos britech',
      'software para escritório de contabilidade',
      'classificação de extrato bancário',
      'automação contábil com ia',
    ],
    changefreq: 'monthly',
    priority: 0.9,
    graph: () => [
      {
        '@type': 'ItemList',
        '@id': `${SITE.url}/produtos/#list`,
        name: 'Produtos da Britech',
        itemListElement: PRODUCTS.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: absoluteUrl(p.href),
          name: p.name,
        })),
      },
    ],
  }),
  '/produtos/assistente-de-lancamentos': page(
    '/produtos/assistente-de-lancamentos',
    ['Produtos', 'Assistente de Lançamentos'],
    {
      title: 'Assistente de Lançamentos: pare de digitar extrato | Britech',
      description:
        'Para escritórios de contabilidade: suba o extrato (PDF, foto ou OFX) e receba os lançamentos no plano de contas do cliente, com a confiança de cada um. Em piloto.',
      keywords: [
        'classificação de extrato bancário',
        'lançamento de extrato contábil',
        'extrato para lançamento contábil',
        'software para escritório de contabilidade',
      ],
      changefreq: 'monthly',
      priority: 0.9,
      graph: () => [softwareNode(), faqNode('/produtos/assistente-de-lancamentos', LANCAMENTOS_FAQ)],
    },
    ['/produtos', '/produtos/assistente-de-lancamentos'],
  ),
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
      'Empresa de desenvolvimento de software fundada em 2023 em Blumenau (SC): consultoria e produtos próprios. Conduzida por Alexander Brito, 8+ anos em engenharia.',
    keywords: ['sobre a britech', 'alexander brito', 'empresa de software blumenau', 'consultoria de arquitetura blumenau'],
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
    description: `Fale com a Britech pelo WhatsApp ${CONTACT.phoneDisplay} ou pelo e-mail ${CONTACT.email}: diagnóstico gratuito de 30 minutos ou teste dos nossos produtos.`,
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
