// Dados de contato centralizados — alterar aqui reflete no site inteiro.
export const CONTACT = {
  phoneDisplay: '(47) 99619-9446',
  phoneE164: '+5547996199446',
  email: 'contato@britech.com.br',
  location: 'Blumenau, SC — Brasil',
  linkedin: 'https://www.linkedin.com/company/britech-solucoes',
} as const;

const WHATSAPP_NUMBER = '5547996199446';
const DEFAULT_MESSAGE =
  'Olá! Vim pelo site da Britech e gostaria de falar sobre um projeto.';

export function whatsappUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
