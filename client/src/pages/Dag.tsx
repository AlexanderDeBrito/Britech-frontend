import { Link } from 'wouter';
import {
  ArrowRight,
  ShieldCheck,
  ListOrdered,
  Eye,
  FileCheck2,
  Repeat,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { DagFlow } from '@/components/DagFlow';
import { DagVideo } from '@/components/DagVideo';
import { MetricGrid } from '@/components/Metrics';
import { CtaSection, SectionHeader } from '@/components/Section';
import { ROUTES } from '@/lib/contact';
import { DAG_GATES, RENKE_FOOTNOTE, RENKE_MAIN, RENKE_OTHER } from '@/lib/dag';

export default function Dag() {
  const differentials = [
    {
      icon: ListOrdered,
      title: 'O agente não escolhe a tarefa',
      description: 'A fila é determinística e vem do tracker do time. Prioridade é decisão humana.',
    },
    {
      icon: Eye,
      title: 'Quem implementa não verifica',
      description: 'Quatro revisões independentes, uma delas por um modelo de outro fornecedor, para não repetir os mesmos pontos cegos.',
    },
    {
      icon: FileCheck2,
      title: 'Prova de entrega, não só teste verde',
      description: 'Critério de aceite executável e cobertura do escopo item a item antes do merge.',
    },
    {
      icon: ShieldCheck,
      title: 'Guardas em código, não em prompt',
      description: 'Bloqueios automáticos de comandos destrutivos, vazamento de credenciais e logins interativos.',
    },
    {
      icon: Repeat,
      title: 'Cada gate tem um incidente atrás',
      description: 'As regras nascem de falhas reais e são revistas a cada ciclo. O harness aprende com o uso.',
    },
    {
      icon: Users,
      title: 'Executores intercambiáveis',
      description: 'Funciona com diferentes ferramentas e fornecedores de IA, com troca automática quando um deles falha.',
    },
  ];

  const deliverables = [
    'DAG instalado e configurado no seu repositório, tracker e pipeline',
    'Régua de severidade e gates adaptados ao domínio do seu produto',
    'Linha de base de métricas e painel de acompanhamento antes/depois',
    'Playbook de operação e treinamento do time nos gates humanos',
    'Piloto medido em um fluxo real, com relatório de resultados',
  ];

  const prerequisites = [
    'Repositório versionado (Git) e um fluxo de pull requests',
    'Tracker de tarefas em uso pelo time',
    'Build e testes que rodam de forma automatizada (ou disposição para criar)',
    'Um ambiente de desenvolvimento ou homologação separado da produção',
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="DAG: Desenvolvimento Autônomo Governado"
        highlightWord="Autônomo Governado"
        subtitle="Consultoria Britech · Não são os agentes, são os gates."
        description="No uso comum de IA, o desenvolvedor conduz cada passo e a IA sugere. No DAG é o contrário: o agente faz a tarefa inteira — da especificação ao código revisado, publicado e testado — e as pessoas decidem nos gates."
        secondary={{ text: 'Ver resultados', href: ROUTES.caseRenke }}
        trust={['Spec, código e deploy por agentes', '4 revisões independentes', 'Revert automático']}
      />

      {/* Em uma frase */}
      <section aria-labelledby="oque-titulo" className="py-20 md:py-24 border-y border-white/5 bg-[#070D18]/40">
        <div className="container">
          <div className="max-w-4xl">
            <h2 id="oque-titulo" className="sr-only">O que é o DAG</h2>
            <p className="text-2xl md:text-3xl font-semibold text-white leading-snug">
              O DAG é o harness que o Alexander Brito construiu e usa em produção:{' '}
              <span className="text-gradient-brand">
                autonomia para os agentes, governança nos gates, decisão com as pessoas.
              </span>
            </p>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Autonomia sem gate é dívida técnica em velocidade industrial. O que torna o DAG
              replicável não são os agentes — é o conjunto de gates que decide o que avança.
            </p>
          </div>
        </div>
      </section>

      {/* Vídeo explicativo (configurado em DAG_VIDEO, lib/dag.ts) */}
      <DagVideo />

      {/* Como funciona */}
      <section aria-labelledby="fluxo-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader
            id="fluxo-titulo"
            eyebrow="Como funciona"
            title="Uma tarefa, do início ao fim, sem ninguém conduzir cada passo"
            lead="Dois gates humanos nas pontas; entre eles, o agente executa e os gates automáticos decidem o que avança."
          />
          <DagFlow />
        </div>
      </section>

      {/* Gates */}
      <section aria-labelledby="gates-titulo" className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="gates-titulo"
            eyebrow="Os gates"
            title={<>Seis gates automáticos entre o <span className="text-gradient-brand">“pode ir”</span> e o aceite</>}
            lead="Nenhum depende da boa vontade do agente: todos são verificações executáveis, com critério de aprovação explícito."
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAG_GATES.map((g, i) => (
              <li key={g.title} className="p-7 rounded-2xl glass-card">
                <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">
                  Gate {i + 1}
                </span>
                <h3 className="mt-2 mb-3 text-xl font-semibold text-white">{g.title}</h3>
                <p className="text-white/75 leading-relaxed">{g.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Diferenciais */}
      <section aria-labelledby="dif-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader
            id="dif-titulo"
            eyebrow="Diferente de só usar um assistente de código"
            title="O que o DAG faz que um agente sozinho não faz"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-7 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section aria-labelledby="res-titulo" className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="res-titulo"
            eyebrow="Resultados"
            title="Em produção no CRM Renke"
            lead="Números do tracker do cliente, comparando uma janela antes e outra depois do DAG em escala."
          />
          <h3 className="text-lg font-semibold text-white mb-5">Frente principal do CRM</h3>
          <MetricGrid metrics={RENKE_MAIN} />
          <h3 className="text-lg font-semibold text-white mt-12 mb-5">
            Desenvolvedor de outra vertical, após ~10 dias de DAG
          </h3>
          <MetricGrid metrics={RENKE_OTHER} />
          <p className="mt-8 text-sm text-white/70 leading-relaxed max-w-4xl">{RENKE_FOOTNOTE}</p>
          <Link href={ROUTES.caseRenke} className="mt-8 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline">
            Ler o case completo
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* O que muda e o que a implantação entrega */}
      <section aria-labelledby="impl-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader
            id="impl-titulo"
            eyebrow="Implantação"
            title="O que muda para o time — e o que você recebe"
            lead="O papel do time sai de digitar e revisar código linha a linha para definir critério, priorizar e homologar. A implantação é conduzida junto com vocês, no seu ambiente."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-xl font-semibold text-white mb-5">A implantação entrega</h3>
              <ul className="space-y-3">
                {deliverables.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <CheckCircle2 size={20} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-xl font-semibold text-white mb-5">Pré-requisitos</h3>
              <ul className="space-y-3">
                {prerequisites.map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <CheckCircle2 size={20} aria-hidden="true" className="text-white/70 flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/70">
                Falta algum? O diagnóstico mostra o caminho mais curto para chegar lá.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
