// Dados de contato centralizados — alterar aqui reflete no site inteiro.
export const CONTACT = {
  phoneDisplay: '(47) 99619-9446',
  phoneE164: '+5547996199446',
  email: 'contato@britechsolucoes.com',
  location: 'Blumenau, SC — Brasil',
  linkedin: 'https://www.linkedin.com/company/britech-solucoes',
} as const;

const WHATSAPP_NUMBER = '5547996199446';
const DEFAULT_MESSAGE =
  'Olá! Vim pelo site da Britech e gostaria de agendar o diagnóstico gratuito de 30 minutos.';

/** Mensagens prontas para o WhatsApp, por assunto. */
export const WHATSAPP_MESSAGES = {
  diagnostico: DEFAULT_MESSAGE,
  geral: 'Olá! Vim pelo site da Britech e gostaria de conversar.',
  lancamentosTeste:
    'Olá! Tenho um escritório de contabilidade e quero testar o Assistente de Lançamentos com 1 extrato (com os dados sensíveis cobertos).',
  lancamentosPreVenda:
    'Olá! Tenho um escritório de contabilidade e quero entrar na pré-venda do Assistente de Lançamentos.',
} as const;

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Links internos com barra final: é a URL que o Cloudflare Pages serve sem redirecionar. */
export const ROUTES = {
  home: '/',
  dag: '/dag/',
  servicos: '/servicos/',
  produtos: '/produtos/',
  produtoLancamentos: '/produtos/assistente-de-lancamentos/',
  cases: '/cases/',
  caseRenke: '/cases/crm-renke/',
  sobre: '/sobre/',
  diagnostico: '/diagnostico/',
  contato: '/contato/',
  privacidade: '/privacidade/',
} as const;
