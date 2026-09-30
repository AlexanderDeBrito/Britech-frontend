import { Link } from 'wouter';
import { ArrowRight, Bot, Layers, Plug, Cloud, AlertCircle, Check } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { CtaSection, SectionHeader } from '@/components/Section';
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

export default function Services() {
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
        title="Serviços: DAG e arquitetura para SaaS e B2B"
        highlightWord="DAG"
        subtitle="Arquitetura como decisão de negócio"
        description="A oferta principal é a implantação do DAG. Em volta dela, o que um produto B2B precisa para crescer sem reescrever: arquitetura, integrações e nuvem sob controle."
        secondary={{ text: 'Conhecer o DAG', href: ROUTES.dag }}
      />

      <section aria-labelledby="principal-titulo" className="py-20 md:py-28">
        <div className="container">
          <SectionHeader id="principal-titulo" eyebrow="Oferta principal" title="Desenvolvimento acelerado por IA, com governança" />
          <Card s={flagship} big />
        </div>
      </section>

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

      <CtaSection />
    </div>
  );
}
