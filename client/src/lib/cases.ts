export interface CaseItem {
  image: string;
  title: string;
  client: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
}

// Clientes reais que já consumiram serviços da Britech.
export const CASES: CaseItem[] = [
  {
    image: '/images/services-pattern.png',
    title: 'CRM personalizado',
    client: 'Renke Studio',
    category: 'CRM sob medida',
    description:
      'CRM construído do zero para a operação da Renke Studio: gestão de clientes, pipeline e rotinas do estúdio em um só lugar, do jeito que o time trabalha.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://renkestudio.com.br/',
  },
  {
    image: '/images/cta-accent.png',
    title: 'Webpage + controle de vendas',
    client: 'Troca Fácil',
    category: 'Web app',
    description:
      'Presença digital e aplicação interna de controle de vendas: cadastro, acompanhamento e visão consolidada da operação comercial em tempo real.',
    technologies: ['React', 'Node.js', 'Railway'],
    link: 'https://troca-facil-production.up.railway.app/',
  },
  {
    image: '/images/team-abstract.png',
    title: 'Previva — gestão de saúde',
    client: 'Datainfo',
    category: 'Health tech',
    description:
      'Atuação como braço de desenvolvimento no Previva, produto de gestão de saúde da Datainfo — evolução de funcionalidades com qualidade de produto.',
    technologies: ['Desenvolvimento de produto', 'Squad dedicada'],
    link: 'https://www.datainfo.inf.br/produto/previva/',
  },
];
