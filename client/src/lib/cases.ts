import { ROUTES } from './contact';

export interface CaseItem {
  image: string;
  title: string;
  client: string;
  category: string;
  description: string;
  technologies: string[];
  /** Link externo (abre em nova aba). */
  link?: string;
  /** Página interna do case. */
  href?: string;
}

// Clientes reais que já consumiram serviços da Britech.
export const CASES: CaseItem[] = [
  {
    image: '/images/services-pattern.webp',
    title: 'CRM Renke: DAG em produção',
    client: 'Renke Studio',
    category: 'DAG · SaaS B2B',
    description:
      'Implantação do DAG num CRM SaaS em produção: 16h → 194h estimadas entregues por mês e ciclo mediano de 22 → 12 dias, com as pessoas decidindo só nos gates.',
    technologies: ['DAG', 'Arquitetura SaaS', 'Revisão multi-modelo'],
    href: ROUTES.caseRenke,
  },
  {
    image: '/images/team-abstract.webp',
    title: 'Previva — gestão de saúde',
    client: 'Datainfo',
    category: 'SaaS de saúde',
    description:
      'Atuação como braço de desenvolvimento no Previva, produto de gestão de saúde da Datainfo — evolução de funcionalidades com qualidade de produto.',
    technologies: ['Desenvolvimento de produto', 'Squad dedicada'],
    link: 'https://institucional.datainfo.inf.br/produto/previva/',
  },
];
