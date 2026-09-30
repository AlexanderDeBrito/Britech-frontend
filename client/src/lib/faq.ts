export interface FaqItem {
  question: string;
  answer: string;
}

// Ficam visíveis na página E viram FAQPage no JSON-LD — o Google exige que a
// resposta esteja no HTML para considerar o rich result.

/** Dúvidas gerais, exibidas na home. */
export const HOME_FAQ: FaqItem[] = [
  {
    question: 'O que a Britech faz?',
    answer:
      'A Britech é uma empresa de desenvolvimento de software de Blumenau (SC). Trabalhamos em duas frentes: consultoria de arquitetura e desenvolvimento acelerado por IA para empresas que constroem SaaS e produtos B2B, e produtos próprios, que desenvolvemos e levamos ao mercado.',
  },
  {
    question: 'Como começa um trabalho de consultoria?',
    answer:
      'Com um diagnóstico gratuito de 30 minutos. Se fizer sentido seguir, vêm o diagnóstico de 1 semana, a implantação de 2 a 3 semanas e um piloto medido de 30 dias, cada etapa terminando com uma decisão sua sobre continuar ou não.',
  },
  {
    question: 'O que é o DAG?',
    answer:
      'DAG é o Desenvolvimento Autônomo Governado, o método que usamos na consultoria: agentes de IA executam a tarefa inteira — especificação, código, quatro revisões independentes, deploy e testes com revert automático — e as pessoas decidem nos gates.',
  },
  {
    question: 'Quais produtos a Britech tem?',
    answer:
      'O primeiro é o Assistente de Lançamentos (nome provisório), para escritórios de contabilidade pequenos: classifica o extrato bancário no plano de contas de cada cliente e mostra a confiança de cada lançamento. Ele está em validação, com piloto nos primeiros escritórios.',
  },
  {
    question: 'O código continua sendo meu?',
    answer:
      'Na consultoria, sim. O código, os repositórios, a infraestrutura e os dados são da sua empresa, e tudo roda no seu ambiente, sem dependência obrigatória da Britech para continuar.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'Na consultoria, depende do escopo: tamanho do time, número de fluxos e maturidade do pipeline atual. Não publicamos tabela de preço; o investimento é definido depois do diagnóstico gratuito. Nos produtos, o preço de lançamento ainda está em definição.',
  },
];

/** Dúvidas da consultoria / DAG, exibidas em /servicos. */
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
