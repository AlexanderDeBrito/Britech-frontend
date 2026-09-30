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

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Links internos com barra final: é a URL que o Cloudflare Pages serve sem redirecionar. */
export const ROUTES = {
  home: '/',
  dag: '/dag/',
  servicos: '/servicos/',
  cases: '/cases/',
  caseRenke: '/cases/crm-renke/',
  sobre: '/sobre/',
  diagnostico: '/diagnostico/',
  contato: '/contato/',
  privacidade: '/privacidade/',
} as const;
