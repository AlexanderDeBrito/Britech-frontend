import { ROUTES } from './contact';
import type { FaqItem } from './faq';

export interface Product {
  slug: string;
  name: string;
  /** Descrição curta que acompanha o nome (o nome ainda é provisório). */
  descriptor: string;
  /** O nome ainda não é definitivo. */
  provisionalName?: boolean;
  tagline: string;
  audience: string;
  status: string;
  summary: string;
  href: string;
}

/**
 * Produtos que a própria Britech constrói e leva ao mercado.
 *
 * Regra de comunicação (vale para todo texto de produto): nada de percentual de
 * acerto, "100% automático", "sem revisão", "substitui o analista", "integra
 * com todos os sistemas", data de lançamento, preço ou nome de concorrente.
 */
export const PRODUCTS: Product[] = [
  {
    slug: 'assistente-de-lancamentos',
    name: 'Razão',
    descriptor: 'Assistente de lançamentos de extrato',
    provisionalName: true,
    tagline: 'Pare de digitar extrato.',
    audience: 'Escritórios contábeis de pequeno e médio porte (até 30 pessoas)',
    status: 'Em validação · piloto com os primeiros escritórios',
    summary:
      'O analista sobe o extrato bancário do cliente e recebe os lançamentos já classificados no plano de contas daquele cliente, com o nível de confiança de cada um, prontos para revisar e importar no sistema contábil.',
    href: ROUTES.produtoLancamentos,
  },
];

export const LANCAMENTOS = PRODUCTS[0];

export interface ProductShot {
  /** Base do arquivo em /images/produtos/ (gera -1600.webp e -960.webp). */
  file: string;
  alt: string;
  width: number;
  height: number;
}

const shot = (file: string, alt: string): ProductShot => ({ file, alt, width: 1600, height: 1000 });

/** Capturas do protótipo de design do Razão (dados fictícios, tema claro, 1440×900). */
export const RAZAO_SHOTS = {
  envio: shot(
    'razao-envio',
    'Tela Enviar extratos do Razão: escolha do cliente e do mês e área para arrastar PDFs, fotos ou arquivos OFX',
  ),
  revisao: shot(
    'razao-revisao',
    'Tela Revisão do extrato do Razão: movimentos com a conta sugerida, selo de confiança alta ou revisar e o painel que explica por que a conta foi sugerida',
  ),
  regras: shot(
    'razao-regras',
    'Tela Regras do analista do Razão: regras como "quando a descrição contém J SILVA, lançar em Salários a pagar", com prioridade e liga/desliga',
  ),
  exportacoes: shot(
    'razao-exportacoes',
    'Tela Exportações do Razão: histórico de arquivos gerados por cliente, com formatos de sistemas contábeis marcados como em validação',
  ),
} as const;

export const RAZAO_SHOT_CAPTION = 'Protótipo de design · dados fictícios';

export interface RazaoVideo {
  src: string;
  poster: string;
  thumbnail: string;
  width: number;
  height: number;
  title: string;
  description: string;
  caption: string;
  duration: string;
  uploadDate: string;
}

/**
 * Vídeo principal do Razão (arquivos em client/public/videos/). Alimenta o
 * player de /produtos/assistente-de-lancamentos/ e o VideoObject do JSON-LD.
 * Com `null`, a seção de vídeo some da página.
 *
 * Atenção: a versão publicada é editada a partir do original para esconder o
 * aviso de preço que aparece na tela Início do protótipo (o site não mostra preço).
 */
export const RAZAO_VIDEO: RazaoVideo | null = {
  src: '/videos/razao-como-funciona.mp4',
  poster: '/videos/razao-como-funciona.webp',
  thumbnail: '/videos/razao-como-funciona.jpg',
  width: 1920,
  height: 1080,
  title: 'Como funciona o Razão',
  description:
    'O Razão em um minuto e meio: envie os extratos, revise os lançamentos sugeridos no plano de contas do cliente com o nível de confiança, crie regras do analista e exporte no formato do seu sistema. Protótipo com dados fictícios.',
  caption: 'Vídeo com narração · 1min34s · protótipo com dados fictícios',
  duration: 'PT1M34S',
  uploadDate: '2026-10-01',
};

/** Teaser curto (30s) do Razão, usado no card de /produtos/. */
export const RAZAO_TEASER: RazaoVideo | null = {
  src: '/videos/razao-teaser.mp4',
  poster: '/videos/razao-teaser.webp',
  thumbnail: '/videos/razao-teaser.jpg',
  width: 1920,
  height: 1080,
  title: 'Razão em 30 segundos',
  description:
    'Teaser do Razão: o extrato entra e os lançamentos saem prontos para revisar, no plano de contas do cliente. Protótipo com dados fictícios.',
  caption: 'Teaser · 30s',
  duration: 'PT30S',
  uploadDate: '2026-10-01',
};

/** Dúvidas do Razão (assistente de lançamentos) — respostas honestas, de quem está em piloto. */
export const LANCAMENTOS_FAQ: FaqItem[] = [
  {
    question: 'E se a IA errar?',
    answer:
      'Por isso cada lançamento vem com o nível de confiança, e você revisa o que ficou duvidoso antes de exportar. Estamos em piloto justamente para medir o acerto com extratos reais dos primeiros escritórios.',
  },
  {
    question: 'Funciona no meu sistema contábil?',
    answer:
      'Estamos levantando os formatos de importação agora. Diga qual sistema você usa (Domínio, Alterdata, Questor, Conta Azul ou outro) para priorizarmos o seu.',
  },
  {
    question: 'Já uso um conversor de extrato. Qual a diferença?',
    answer:
      'Conversor transforma PDF em OFX. Nós classificamos cada movimento no plano de contas do cliente e mostramos a confiança de cada classificação, para você revisar só o que precisa.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'O preço de lançamento está em definição, com pré-venda para os primeiros escritórios. A ideia é uma assinatura mensal simples, contratada direto pelo site.',
  },
  {
    question: 'Por que uma assinatura mensal?',
    answer:
      'Porque o assistente aprende com o histórico de cada cliente do escritório e precisa de manutenção contínua: quanto mais você usa, mais ele conhece o jeito de lançar de cada empresa.',
  },
  {
    question: 'Como posso testar?',
    answer:
      'Mande 1 extrato de um cliente, com os dados sensíveis cobertos, e devolvemos os lançamentos classificados para você avaliar. Sem compromisso.',
  },
];
