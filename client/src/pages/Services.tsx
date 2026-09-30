import { Link } from 'wouter';
import {
  ArrowRight,
  Bot,
  Layers,
  Plug,
  Cloud,
  AlertCircle,
  Check,
  X,
  AlertTriangle,
  GitPullRequest,
  Wallet,
  Search,
  ClipboardList,
  FlaskConical,
  TrendingUp,
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { CtaSection, SectionHeader } from '@/components/Section';
import { DagFlow } from '@/components/DagFlow';
import { FaqSection } from '@/components/FaqSection';
import { MetricGrid } from '@/components/Metrics';
import { FAQ } from '@/lib/faq';
import { RENKE_MAIN } from '@/lib/dag';
import { ROUTES } from '@/lib/contact';

interface Service {
  icon: typeof Bot;
  title: string;
  description: string;
  items: string[];
  signal: string;
  result: string;
  href?: string;
}

const linkArrow =
  'inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline';

export default function Services() {
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

  const steps = [
    { icon: Search, title: 'Diagnóstico gratuito (30 min)', description: 'Mapeamos o fluxo atual e onde o DAG se aplica.' },
    { icon: ClipboardList, title: 'Diagnóstico (1 semana)', description: 'Linha de base de métricas, gates e plano de implantação.' },
    { icon: FlaskConical, title: 'Implantação (2–3 semanas)', description: 'DAG configurado no seu stack, num fluxo piloto.' },
    { icon: TrendingUp, title: 'Piloto medido (30 dias)', description: 'Antes e depois com os dados do seu próprio tracker.' },
  ];

  const flagship: Service = {
    icon: Bot,
    title: 'Implantação do DAG',
    description:
      'O DAG (Desenvolvimento Autônomo Governado) instalado no seu time: agentes de IA executam a tarefa inteira — especificação, código, 4 revisões independentes (uma por um modelo de outro fornecedor), deploy e testes Playwright com revert automático — e as pessoas decidem nos gates.',
    items: [
      'Diagnóstico de 1 semana com linha de base de métricas',
      'Implantação de 2–3 semanas no seu repositório, tracker e pipeline',
      'Piloto medido de 30 dias com relatório antes e depois',
    ],
    signal: 'O time já usa IA para programar, mas a revisão virou gargalo e a qualidade oscila.',
    result: 'Mais entrega por pessoa, com critério de aceite e revisão garantidos por gates.',
    href: ROUTES.dag,
  };

  const services: Service[] = [
    {
      icon: Layers,
      title: 'Arquitetura de SaaS e B2B',
      description:
        'Revisão e desenho da arquitetura do produto: modelo de dados, isolamento entre clientes, autenticação e permissões, filas e escalabilidade.',
      items: ['Revisão de arquitetura com relatório de riscos', 'Decisões registradas com critério e dono', 'Plano de evolução sem reescrever do zero'],
      signal: 'Cada cliente novo exige ajuste manual, ou o sistema fica mais lento a cada mês.',
      result: 'Crescer em clientes sem crescer na mesma proporção em custo e retrabalho.',
    },
    {
      icon: Plug,
      title: 'Integrações e pagamentos',
      description:
        'Integrações que não podem falhar: WhatsApp (API oficial), meios de pagamento, sistemas regulados e APIs de parceiros.',
      items: ['Idempotência, reprocessamento e conciliação', 'Observabilidade de ponta a ponta', 'Experiência com sistemas regulados pelo Banco Central'],
      signal: 'Parte da operação ainda é conferência manual de pagamentos ou mensagens perdidas.',
      result: 'Menos operação manual e integrações que se recuperam sozinhas.',
    },
    {
      icon: Cloud,
      title: 'Nuvem e custos',
      description:
        'Revisão da infraestrutura, observabilidade e FinOps para que a conta da nuvem acompanhe a receita.',
      items: ['Mapa de custo por componente', 'Ajustes de arquitetura com impacto medido', 'Alertas e painéis do que importa'],
      signal: 'A fatura da nuvem cresce mais rápido que a base de clientes.',
      result: 'Custo de infraestrutura proporcional ao uso e previsível.',
    },
  ];

  const Card = ({ s, big = false }: { s: Service; big?: boolean }) => {
    const Icon = s.icon;
    return (
      <div className={`p-8 md:p-10 rounded-3xl glass-card flex flex-col ${big ? 'brand-glow' : ''}`}>
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
          <Icon size={26} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
        </div>
        <h3 className={`mb-4 font-semibold text-white ${big ? 'text-3xl' : 'text-2xl'}`}>{s.title}</h3>
        <p className="text-white/80 leading-relaxed mb-6">{s.description}</p>
        <ul className="space-y-2.5 mb-6">
          {s.items.map((it) => (
            <li key={it} className="flex gap-3 text-white/80">
              <Check size={18} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-1" />
              {it}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-3 pt-5 border-t border-white/10 text-sm">
          <p className="flex gap-2 text-white/80">
            <AlertCircle size={16} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-0.5" />
            <span>
              <strong className="text-white">Sinal de que você precisa:</strong> {s.signal}
            </span>
          </p>
          <p className="text-white/80">
            <strong className="text-white">Resultado:</strong> {s.result}
          </p>
        </div>
        {s.href && (
          <Link href={s.href} className="mt-6 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline">
            Como o DAG funciona
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Consultoria: mais entrega com IA, sem perder a arquitetura"
        highlightWord="sem perder a arquitetura"
        subtitle="Consultoria Britech · Não são os agentes, são os gates."
        description="Para empresas que constroem SaaS e produtos B2B. Implantamos o DAG, o nosso método de desenvolvimento acelerado por IA, e cuidamos do que o produto precisa para crescer sem reescrever: arquitetura, integrações e nuvem."
        ctaText="Agendar diagnóstico gratuito (30 min)"
        secondary={{ text: 'Conhecer o DAG', href: ROUTES.dag }}
      />

      {/* O problema */}
      <section aria-labelledby="problema-titulo" className="py-20 md:py-28 border-y border-white/5 bg-[#070D18]/40">
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

      {/* Método */}
      <section aria-labelledby="principal-titulo" className="py-20 md:py-28">
        <div className="container">
          <SectionHeader
            id="principal-titulo"
            eyebrow="O método: DAG"
            title="Desenvolvimento acelerado por IA, com governança"
            lead="O DAG (Desenvolvimento Autônomo Governado) é o método que a Britech implanta no seu time. Os agentes executam a tarefa inteira; as pessoas decidem nos gates."
          />
          <Card s={flagship} big />
          <div className="mt-12">
            <DagFlow compact />
          </div>
        </div>
      </section>

      {/* Como começamos */}
      <section aria-labelledby="comeco-titulo" className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
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
          <Link href={ROUTES.diagnostico} className={`${linkArrow} mt-10`}>
            Ver detalhes do diagnóstico
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Resultados */}
      <section aria-labelledby="resultados-titulo" className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              id="resultados-titulo"
              eyebrow="Resultados · case CRM Renke"
              title="O DAG em produção, medido pelo tracker do cliente"
            />
            <Link href={ROUTES.caseRenke} className={`${linkArrow} mb-14 flex-shrink-0`}>
              Ler o case
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <MetricGrid metrics={RENKE_MAIN} />
        </div>
      </section>

      {/* Outros serviços */}
      <section aria-labelledby="outros-titulo" className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="outros-titulo"
            eyebrow="Arquitetura"
            title="Para quem constrói SaaS e produtos B2B"
            lead="Serviços contratados sozinhos ou como parte da implantação do DAG — sempre começando pelo diagnóstico gratuito."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section aria-labelledby="fit-titulo" className="py-20 md:py-28">
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

      <FaqSection
        items={FAQ}
        title="Dúvidas sobre a consultoria e o DAG"
        lead="Se a sua dúvida não estiver aqui, traga para o diagnóstico gratuito de 30 minutos."
      />

      <CtaSection />
    </div>
  );
}
