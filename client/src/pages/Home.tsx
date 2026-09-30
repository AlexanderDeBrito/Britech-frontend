import {
  ArrowRight,
  AlertTriangle,
  GitPullRequest,
  Wallet,
  Layers,
  Plug,
  Cloud,
  Search,
  ClipboardList,
  FlaskConical,
  TrendingUp,
  Check,
  X,
} from 'lucide-react';
import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { FaqSection } from '@/components/FaqSection';
import { DagFlow } from '@/components/DagFlow';
import { MetricGrid } from '@/components/Metrics';
import { CtaSection, SectionHeader } from '@/components/Section';
import { ROUTES } from '@/lib/contact';
import { RENKE_FOOTNOTE, RENKE_MAIN, RENKE_OTHER } from '@/lib/dag';

export default function Home() {
  const pains = [
    {
      icon: AlertTriangle,
      title: 'Débito técnico acelerado',
      description:
        'Agente sem gate produz código rápido — e dívida técnica na mesma velocidade. A arquitetura se desfaz em semanas.',
    },
    {
      icon: GitPullRequest,
      title: 'Revisão vira gargalo',
      description:
        'Quando o volume de PRs multiplica, as pessoas que revisam linha a linha passam a ser o limite do time.',
    },
    {
      icon: Wallet,
      title: 'Custo fora de controle',
      description:
        'Decisões técnicas tomadas no automático aparecem depois na conta da nuvem, no retrabalho e no prazo.',
    },
  ];

  const services = [
    {
      icon: Layers,
      title: 'Arquitetura de SaaS e B2B',
      description:
        'Modelo de dados, isolamento entre clientes, autenticação e permissões pensados para crescer sem reescrever.',
    },
    {
      icon: Plug,
      title: 'Integrações e pagamentos',
      description:
        'WhatsApp (API oficial), meios de pagamento, sistemas regulados e APIs de parceiros com rastreabilidade.',
    },
    {
      icon: Cloud,
      title: 'Nuvem e custos',
      description:
        'Revisão de arquitetura, observabilidade e FinOps: a conta da nuvem acompanhando a receita.',
    },
  ];

  const steps = [
    { icon: Search, title: 'Diagnóstico gratuito (30 min)', description: 'Mapeamos o fluxo atual e onde o DAG se aplica.' },
    { icon: ClipboardList, title: 'Diagnóstico (1 semana)', description: 'Linha de base de métricas, gates e plano de implantação.' },
    { icon: FlaskConical, title: 'Implantação (2–3 semanas)', description: 'DAG configurado no seu stack, num fluxo piloto.' },
    { icon: TrendingUp, title: 'Piloto medido (30 dias)', description: 'Antes e depois com os dados do seu próprio tracker.' },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Não são os agentes, são os gates."
        highlightWord="são os gates."
        subtitle="Arquitetura e desenvolvimento acelerado por IA para SaaS e B2B"
        description="Implantamos o DAG (Desenvolvimento Autônomo Governado) no seu time: agentes de IA executam a tarefa inteira — especificação, código, 4 revisões independentes, deploy e testes — e as pessoas decidem nos gates. Mais entrega, sem perder o controle da arquitetura."
        ctaText="Agendar diagnóstico gratuito (30 min)"
        secondary={{ text: 'Ver como funciona o DAG', href: ROUTES.dag }}
      />

      {/* Faixa de prova */}
      <section aria-label="Resultados do DAG em produção" className="relative py-14 border-y border-white/5 bg-[#070D18]/40">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              ['16h → 194h', 'horas estimadas entregues por mês'],
              ['22 → 12 dias', 'de ciclo mediano por tarefa'],
              ['Em produção', 'num CRM SaaS B2B — case CRM Renke'],
            ].map(([num, desc]) => (
              <div key={desc} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient-brand mb-2">{num}</div>
                <p className="text-sm text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O problema */}
      <section aria-labelledby="problema-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader
            id="problema-titulo"
            eyebrow="O problema"
            title={
              <>
                IA gerando código é fácil. Difícil é manter{' '}
                <span className="text-gradient-brand">arquitetura e previsibilidade</span> quando o
                volume multiplica.
              </>
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tese */}
      <section aria-labelledby="tese-titulo" className="py-24 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-4xl">
            <SectionHeader eyebrow="Nossa tese" id="tese-titulo" title={<>Arquitetura como <span className="text-gradient-brand">decisão de negócio</span></>} />
            <div className="-mt-6 space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                Cada escolha técnica — como os dados de clientes ficam separados, como as integrações
                falham, onde a infraestrutura roda — aparece depois na margem, no prazo e no risco.
                Tratamos essas escolhas como decisões de negócio, com critério explícito e dono
                definido.
              </p>
              <p>
                O DAG aplica a mesma ideia ao próprio desenvolvimento: a IA faz o trabalho, e as
                decisões que importam ficam com pessoas, em pontos de controle claros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como o DAG funciona */}
      <section aria-labelledby="dag-titulo" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="dag-titulo"
              eyebrow="Como o DAG funciona"
              title="Da tarefa priorizada à entrega homologada"
              lead="Uma tarefa atravessa o fluxo inteiro sem ninguém conduzir cada passo. As pessoas entram onde a decisão é delas."
            />
            <Link href={ROUTES.dag} className="mb-14 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline flex-shrink-0">
              Conhecer o DAG
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <DagFlow compact />
        </div>
      </section>

      {/* Resultados */}
      <section aria-labelledby="resultados-titulo" className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="resultados-titulo"
              eyebrow="Resultados · case CRM Renke"
              title="O DAG em produção, medido pelo tracker do cliente"
            />
            <Link href={ROUTES.caseRenke} className="mb-14 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline flex-shrink-0">
              Ler o case
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <h3 className="text-lg font-semibold text-white mb-5">Frente principal do CRM</h3>
          <MetricGrid metrics={RENKE_MAIN} />

          <h3 className="text-lg font-semibold text-white mt-12 mb-5">
            Desenvolvedor de outra vertical, após ~10 dias de DAG
          </h3>
          <MetricGrid metrics={RENKE_OTHER} />

          <p className="mt-8 text-sm text-white/70 leading-relaxed max-w-4xl">{RENKE_FOOTNOTE}</p>
        </div>
      </section>

      {/* Outros serviços */}
      <section aria-labelledby="servicos-titulo" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="servicos-titulo"
              eyebrow="Além do DAG"
              title="Arquitetura para quem constrói SaaS e B2B"
            />
            <Link href={ROUTES.servicos} className="mb-14 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline flex-shrink-0">
              Ver serviços
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como começamos */}
      <section aria-labelledby="comeco-titulo" className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="comeco-titulo"
            eyebrow="Como começamos"
            title="Do primeiro papo ao piloto medido"
            lead="Sem proposta genérica: cada etapa termina com uma decisão sua sobre seguir ou não."
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <li key={title} className="relative p-6 rounded-2xl glass-card">
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-[#0B1220] border border-[color:var(--brand-blue)]/40 flex items-center justify-center text-[color:var(--brand-cyan)] font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{description}</p>
              </li>
            ))}
          </ol>
          <Link href={ROUTES.diagnostico} className="mt-10 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline">
            Ver detalhes do diagnóstico
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Para quem é */}
      <section aria-labelledby="fit-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader id="fit-titulo" eyebrow="Encaixe" title="Para quem é — e para quem não é" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-xl font-semibold text-white mb-5">É para você se…</h3>
              <ul className="space-y-3">
                {[
                  'sua empresa constrói um SaaS ou produto B2B que já está em produção;',
                  'existe um time de desenvolvimento próprio (ou em formação);',
                  'você quer entregar mais sem abrir mão de qualidade e de arquitetura;',
                  'prefere decidir com números a decidir com opinião.',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <Check size={20} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-xl font-semibold text-white mb-5">Não é para você se…</h3>
              <ul className="space-y-3">
                {[
                  'você procura um site institucional ou uma landing page;',
                  'quer uma fábrica de software cobrando por hora;',
                  'espera que a IA substitua o time sem ninguém decidir nada.',
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-white/80">
                    <X size={20} aria-hidden="true" className="text-white/70 flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      <CtaSection />
    </div>
  );
}
