import { CASES } from './cases';
import { CONTACT } from './contact';
import { FAQ } from './faq';

/** Identidade do site — fonte única para meta tags, JSON-LD e sitemap. */
export const SITE = {
  url: 'https://britechsolucoes.com',
  name: 'Britech',
  legalName: 'Britech Soluções',
  tagline: 'Tecnologia que ilumina soluções',
  locale: 'pt_BR',
  lang: 'pt-BR',
  ogImage: '/og-image.png',
  themeColor: '#0B1220',
  foundingYear: '2017',
  city: 'Blumenau',
  region: 'SC',
  regionName: 'Santa Catarina',
  country: 'BR',
  postalCode: '89010-000',
  latitude: -26.9194,
  longitude: -49.0661,
} as const;

export const absoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${SITE.url}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

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

/** Área geográfica atendida — reforça o sinal de SEO local. */
const AREA_SERVED = [
  { '@type': 'City', name: 'Blumenau' },
  { '@type': 'City', name: 'Joinville' },
  { '@type': 'City', name: 'Florianópolis' },
  { '@type': 'City', name: 'Itajaí' },
  { '@type': 'AdministrativeArea', name: 'Vale do Itajaí' },
  { '@type': 'State', name: 'Santa Catarina' },
  { '@type': 'Country', name: 'Brasil' },
];

export const SERVICES_CATALOG = [
  {
    name: 'Desenvolvimento de software sob medida',
    description:
      'Sistemas web e desktop construídos para o processo da sua empresa, com arquitetura escalável e código próprio.',
  },
  {
    name: 'Automação de processos empresariais',
    description:
      'Eliminação de tarefas manuais e repetitivas conectando sistemas, planilhas e ferramentas já usados pela equipe.',
  },
  {
    name: 'Criação de sites e landing pages',
    description:
      'Sites institucionais e landing pages rápidos, responsivos e otimizados para SEO e conversão.',
  },
  {
    name: 'Integração de sistemas e APIs',
    description:
      'Integração com ERPs, CRMs, gateways de pagamento e serviços externos através de APIs REST e GraphQL.',
  },
  {
    name: 'Desenvolvimento de aplicativos mobile',
    description:
      'Aplicativos iOS e Android multiplataforma em React Native, com uma única base de código.',
  },
  {
    name: 'Consultoria e modernização de sistemas legados',
    description:
      'Avaliação de arquitetura, refatoração, ganho de performance e segurança em sistemas já existentes.',
  },
];

/** Organização/negócio local — o nó mais importante para o Google entender quem é a Britech. */
export function organizationNode(): Record<string, unknown> {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description:
      'Software house brasileira sediada em Blumenau (SC), especializada em desenvolvimento de software sob medida, automação de processos, integrações e criação de sites.',
    slogan: SITE.tagline,
    foundingDate: SITE.foundingYear,
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
    priceRange: '$$',
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
      name: 'Serviços de desenvolvimento de software',
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
    description: `${SITE.name} — ${SITE.tagline}`,
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

export const PAGES: Record<string, PageSeo> = {
  '/': {
    path: '/',
    title: 'Britech — Software House em Blumenau | Sistemas Sob Medida',
    description:
      'Software house em Blumenau (SC). Desenvolvemos sistemas sob medida, automação de processos, integrações e sites profissionais. Orçamento gratuito em até 24h.',
    keywords: [
      'software house blumenau',
      'desenvolvimento de software sob medida',
      'empresa de software blumenau',
      'sistemas sob medida',
      'automação de processos',
      'criação de sites blumenau',
      'fábrica de software santa catarina',
    ],
    changefreq: 'weekly',
    priority: 1.0,
    graph: () => [faqNode()],
  },
  '/servicos': {
    path: '/servicos',
    title: 'Serviços de Desenvolvimento de Software | Britech',
    description:
      'Desenvolvimento de software sob medida, automação de processos, criação de sites, integrações, APIs, apps mobile e consultoria técnica. Blumenau (SC) e todo o Brasil.',
    keywords: [
      'desenvolvimento de sistemas',
      'automação de processos empresariais',
      'criação de sites profissionais',
      'integração de sistemas api',
      'desenvolvimento de aplicativos mobile',
      'consultoria em tecnologia',
    ],
    breadcrumb: [{ name: 'Serviços', path: '/servicos' }],
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
  },
  '/sobre': {
    path: '/sobre',
    title: 'Sobre a Britech | Software House em Blumenau, SC',
    description:
      'Conheça a Britech: software house brasileira em Blumenau (SC) com mais de 8 anos de experiência, 50+ projetos entregues e foco em software sob medida sem caixa preta.',
    keywords: [
      'sobre a britech',
      'software house brasileira',
      'empresa de tecnologia blumenau',
      'desenvolvedores blumenau',
    ],
    breadcrumb: [{ name: 'Sobre', path: '/sobre' }],
    changefreq: 'monthly',
    priority: 0.7,
    graph: () => [{ '@type': 'AboutPage', '@id': `${SITE.url}/sobre#about` }],
  },
  '/cases': {
    path: '/cases',
    title: 'Cases e Portfólio de Projetos | Britech',
    description:
      'CRM sob medida, controle de vendas e produto de gestão de saúde: veja projetos de software reais entregues pela Britech para empresas de Santa Catarina e do Brasil.',
    keywords: [
      'cases de software',
      'portfólio desenvolvimento de sistemas',
      'crm sob medida',
      'projetos de software blumenau',
    ],
    breadcrumb: [{ name: 'Cases', path: '/cases' }],
    changefreq: 'monthly',
    priority: 0.8,
    graph: () => [
      {
        '@type': 'ItemList',
        '@id': `${SITE.url}/cases#list`,
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
            ...(c.link ? { url: c.link } : {}),
          },
        })),
      },
    ],
  },
  '/contato': {
    path: '/contato',
    title: 'Contato | Fale com a Britech — Blumenau, SC',
    description:
      `Fale com a Britech pelo WhatsApp ${CONTACT.phoneDisplay} ou por e-mail. Orçamento gratuito, sem compromisso e com resposta em até 24h para o seu projeto de software.`,
    keywords: ['contato britech', 'orçamento desenvolvimento de software', 'software house contato'],
    breadcrumb: [{ name: 'Contato', path: '/contato' }],
    changefreq: 'yearly',
    priority: 0.8,
    graph: () => [
      {
        '@type': 'ContactPage',
        '@id': `${SITE.url}/contato#contact`,
        mainEntity: { '@id': ORGANIZATION_ID },
      },
    ],
  },
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
