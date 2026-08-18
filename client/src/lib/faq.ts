export interface FaqItem {
  question: string;
  answer: string;
}

// Perguntas reais de quem chega pelo Google. Ficam visíveis na página E viram
// FAQPage no JSON-LD — o Google exige que a resposta esteja no HTML para
// considerar o rich result.
export const FAQ: FaqItem[] = [
  {
    question: 'Quanto custa desenvolver um software sob medida?',
    answer:
      'O valor depende do escopo, das integrações necessárias e do prazo. Um sistema interno simples costuma ficar bem abaixo de um produto completo com múltiplos perfis de usuário. Fazemos um diagnóstico gratuito do seu caso e devolvemos uma estimativa de faixa de investimento em até 24 horas, sem compromisso.',
  },
  {
    question: 'Quanto tempo leva para desenvolver um sistema?',
    answer:
      'Projetos menores, como uma automação ou uma landing page, saem em 2 a 4 semanas. Sistemas internos e CRMs sob medida costumam levar de 2 a 4 meses. Trabalhamos com entregas semanais, então você usa as primeiras funcionalidades muito antes do projeto terminar.',
  },
  {
    question: 'A Britech atende empresas fora de Blumenau e de Santa Catarina?',
    answer:
      'Sim. Somos sediados em Blumenau (SC) e atendemos clientes de todo o Brasil de forma remota. Para empresas do Vale do Itajaí e da região de Florianópolis e Joinville também fazemos reuniões presenciais quando o projeto pede.',
  },
  {
    question: 'Qual a diferença entre software sob medida e um sistema pronto?',
    answer:
      'Um sistema pronto obriga sua empresa a se adaptar ao software e cobra mensalidade por usuário para sempre. Um software sob medida é construído em cima do processo que você já tem, sem funcionalidades que você não usa, e o código é seu. Faz sentido quando a operação tem particularidades que nenhuma ferramenta de prateleira cobre.',
  },
  {
    question: 'Vocês dão suporte depois que o sistema entra no ar?',
    answer:
      'Sim. Entrega não é o fim do projeto. Oferecemos suporte, monitoramento e evolução contínua do sistema. A maior parte dos nossos clientes segue conosco evoluindo o produto depois do lançamento.',
  },
  {
    question: 'O código-fonte fica com a minha empresa?',
    answer:
      'Fica. Você é dono do código, da infraestrutura e dos dados. Entregamos tudo documentado e versionado, sem dependência técnica obrigatória da Britech para continuar o projeto.',
  },
  {
    question: 'Quais tecnologias a Britech usa?',
    answer:
      'Trabalhamos principalmente com React, TypeScript, Node.js, Python, PostgreSQL e React Native, com deploy em AWS, Google Cloud ou Cloudflare. A escolha da stack sempre parte do problema a resolver, não da tecnologia da moda.',
  },
];
