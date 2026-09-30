// Conteúdo do DAG e números do case CRM Renke — fonte única para home, /dag e
// /cases/crm-renke. Números: painel "Impacto do DAG" da Renke (jan–set/2026).

export interface FlowStep {
  title: string;
  description: string;
  /** Ponto em que uma pessoa decide. */
  human?: boolean;
}

export const DAG_FLOW: FlowStep[] = [
  {
    title: 'Gate de entrada',
    description: 'Alguém do time prioriza a tarefa e diz "pode ir". O agente não escolhe o que fazer.',
    human: true,
  },
  {
    title: 'Especificação',
    description:
      'O agente escreve a spec com critério de aceite executável, antes de qualquer linha de código.',
  },
  {
    title: 'Código',
    description:
      'Implementação num ambiente isolado por tarefa, com lint, build e testes rodando a cada passo.',
  },
  {
    title: '4 revisões independentes',
    description:
      'Quem implementa não verifica. Quatro revisões separadas, uma delas feita por um modelo de outro fornecedor.',
  },
  {
    title: 'Deploy',
    description: 'Merge e publicação no ambiente de desenvolvimento só com todos os gates automáticos verdes.',
  },
  {
    title: 'Testes Playwright',
    description:
      'Testes ponta a ponta no ambiente real. Se algo reprova, o próprio DAG faz o revert automaticamente.',
  },
  {
    title: 'Gate de homologação',
    description: 'A pessoa recebe a entrega pronta, com a prova de cada item, e decide se aceita.',
    human: true,
  },
];

export const DAG_GATES: { title: string; description: string }[] = [
  {
    title: 'Verificação única',
    description: 'Lint, build e testes num comando só, igual para agente e para gente. Vermelho não passa.',
  },
  {
    title: 'Critério de aceite executável',
    description: 'O "pronto" é definido na spec como algo que roda, não como opinião.',
  },
  {
    title: 'Cobertura item a item',
    description: 'Cada item do escopo precisa de prova. Entrega parcial com teste verde não conta como entregue.',
  },
  {
    title: 'Régua de severidade',
    description: 'Achados críticos ou altos em qualquer revisão seguram o merge até serem resolvidos.',
  },
  {
    title: 'Verificação independente',
    description: 'Revisores separados de quem implementou, incluindo um modelo de outro fornecedor.',
  },
  {
    title: 'Revert automático',
    description: 'Se os testes ponta a ponta reprovam depois do deploy, a mudança é desfeita sozinha.',
  },
];

export interface Metric {
  label: string;
  before: string;
  after: string;
  note?: string;
}

/** Frente principal do CRM Renke, conduzida por Alexander Brito. */
export const RENKE_MAIN: Metric[] = [
  { label: 'Horas estimadas entregues por mês', before: '16h', after: '194h', note: '≈ 12×' },
  { label: 'Ciclo mediano por tarefa', before: '22 dias', after: '12 dias', note: '−45%' },
  { label: 'Tarefas entregues por mês*', before: '13,5', after: '98' },
];

/** Desenvolvedor de outra vertical, após ~10 dias de DAG. */
export const RENKE_OTHER: Metric[] = [
  { label: 'Ciclo mediano por tarefa', before: '2,7 dias', after: '1,3 dia', note: '−52%' },
  { label: 'Tarefas entregues por mês*', before: '17', after: '80' },
];

export const RENKE_FOOTNOTE =
  '* O DAG divide o trabalho em subtarefas, o que infla a contagem de tarefas. Por isso lideramos com horas estimadas (soma das estimativas das tarefas entregues) e ciclo mediano. Janelas da frente principal: antes = jan e abr–jun/2026; depois = ago–set/2026. Outra vertical: antes = jan–ago/2026; depois = set/2026, com cerca de 10 dias de DAG — sinal forte, mas ainda cedo.';

/** Horas estimadas entregues por mês na frente principal (2026). fev–mar sem dados. */
export const RENKE_MONTHLY_HOURS: { month: string; dag: number; manual: number }[] = [
  { month: 'jan', dag: 0, manual: 17.9 },
  { month: 'abr', dag: 0, manual: 4.2 },
  { month: 'mai', dag: 0.4, manual: 10.4 },
  { month: 'jun', dag: 0, manual: 30.1 },
  { month: 'jul', dag: 45.5, manual: 83 },
  { month: 'ago', dag: 132.9, manual: 81 },
  { month: 'set', dag: 126.7, manual: 48 },
];
