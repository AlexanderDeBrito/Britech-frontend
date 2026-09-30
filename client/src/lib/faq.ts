export interface FaqItem {
  question: string;
  answer: string;
}

// Ficam visíveis na página E viram FAQPage no JSON-LD — o Google exige que a
// resposta esteja no HTML para considerar o rich result.
export const FAQ: FaqItem[] = [
  {
    question: 'O que é o DAG?',
    answer:
      'DAG é o Desenvolvimento Autônomo Governado: um harness em que agentes de IA executam a tarefa inteira — especificação, código, quatro revisões independentes (uma delas feita por um modelo de outro fornecedor), deploy e testes automatizados com revert automático. As pessoas não conduzem cada passo; elas decidem nos gates.',
  },
  {
    question: 'O código continua sendo meu?',
    answer:
      'Sim. O código, os repositórios, a infraestrutura e os dados são da sua empresa. O DAG roda dentro do seu ambiente e das suas ferramentas, sem dependência obrigatória da Britech para continuar.',
  },
  {
    question: 'Os agentes têm acesso à produção?',
    answer:
      'Não. Cada tarefa roda num ambiente isolado, com guardas em código que bloqueiam comandos destrutivos e vazamento de credenciais. O deploy automático vai para o ambiente de desenvolvimento; publicar em produção continua sendo uma decisão humana, num gate.',
  },
  {
    question: 'Funciona com o meu stack?',
    answer:
      'O DAG não depende de linguagem ou framework específico: ele precisa de um repositório versionado, um tracker de tarefas e uma forma automatizada de rodar build e testes. No diagnóstico avaliamos o que já existe e o que falta.',
  },
  {
    question: 'Preciso trocar o meu time?',
    answer:
      'Não. O DAG muda o papel do time, não o time: menos tempo digitando código e revisando linha a linha, mais tempo definindo critérios de aceite, priorizando e homologando nos gates.',
  },
  {
    question: 'Como vocês medem o resultado?',
    answer:
      'Com os dados do seu próprio tracker: horas estimadas entregues por mês, ciclo mediano e proporção de entregas via DAG, comparando uma janela antes e outra depois da implantação. Por isso o piloto é medido desde o primeiro dia.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'Depende do escopo: tamanho do time, número de fluxos e maturidade do pipeline atual. Não publicamos tabela de preço; o escopo e o investimento são definidos depois do diagnóstico gratuito de 30 minutos, sem compromisso.',
  },
];
