import { ROUTES } from './contact';
import type { FaqItem } from './faq';

export interface Product {
  slug: string;
  name: string;
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
    name: 'Assistente de Lançamentos',
    provisionalName: true,
    tagline: 'Pare de digitar extrato.',
    audience: 'Escritórios de contabilidade pequenos',
    status: 'Em validação · piloto com os primeiros escritórios',
    summary:
      'O analista sobe o extrato bancário do cliente e recebe os lançamentos já classificados no plano de contas daquele cliente, com o nível de confiança de cada um, prontos para revisar e importar no sistema contábil.',
    href: ROUTES.produtoLancamentos,
  },
];

export const LANCAMENTOS = PRODUCTS[0];

/** Dúvidas do Assistente de Lançamentos — respostas honestas, de quem está em piloto. */
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
