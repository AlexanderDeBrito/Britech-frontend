import {
  Code2,
  Zap,
  Workflow,
  Globe2,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Lightbulb,
  Rocket,
} from 'lucide-react';
import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseCard } from '@/components/CaseCard';
import { CASES } from '@/lib/cases';

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: 'Software sob medida',
      description:
        'Sistemas web e desktop construídos exatamente para o seu processo. Nada de soluções genéricas — apenas o que sua operação precisa.',
    },
    {
      icon: Workflow,
      title: 'Automação de processos',
      description:
        'Eliminamos tarefas repetitivas conectando seus sistemas, planilhas e ferramentas. Sua equipe foca no que gera valor.',
    },
    {
      icon: Globe2,
      title: 'Sites e landing pages',
      description:
        'Presença digital profissional, rápida e otimizada para conversão. Do institucional ao e-commerce, com identidade própria.',
    },
    {
      icon: Cpu,
      title: 'Aplicações específicas',
      description:
        'Ferramentas internas, dashboards e portais sob demanda — feitos para resolver o problema certo do jeito certo.',
    },
    {
      icon: Database,
      title: 'Integrações e APIs',
      description:
        'Conectamos seu ERP, CRM e serviços externos com APIs robustas. Dados fluindo onde precisam estar, em tempo real.',
    },
    {
      icon: Zap,
      title: 'Digitalização de operações',
      description:
        'Transformamos processos em papel ou planilhas em fluxos digitais auditáveis, escaláveis e acessíveis de qualquer lugar.',
    },
  ];

  const process = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Entendemos o problema',
      description:
        'Conversamos a fundo para mapear a operação, dores e oportunidades. Nada de proposta pronta.',
    },
    {
      icon: Lightbulb,
      step: '02',
      title: 'Projetamos a solução',
      description:
        'Desenhamos a arquitetura, fluxos e protótipos validando cada decisão antes de uma linha de código.',
    },
    {
      icon: Code2,
      step: '03',
      title: 'Desenvolvemos com você',
      description:
        'Entregas semanais, código limpo, testes automatizados e feedback constante. Você acompanha tudo.',
    },
    {
      icon: Rocket,
      step: '04',
      title: 'Lançamos e evoluímos',
      description:
        'Deploy, monitoramento e suporte contínuo. A solução cresce junto com o seu negócio.',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Tecnologia que ilumina soluções"
        highlightWord="ilumina"
        subtitle="Software house brasileira"
        description="Otimizamos, automatizamos e digitalizamos processos. Sistemas sob medida, integrações e sites profissionais para empresas que querem evoluir."
      />

      {/* Diferenciais — referência aos ícones do manual */}
      <section className="relative py-20 border-y border-white/5 bg-[#070D18]/40">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ['Sob medida', 'Cada projeto único, do briefing à entrega'],
              ['Rápidos', 'Sprints curtos, valor entregue toda semana'],
              ['Seguros', 'Boas práticas, testes e código auditável'],
              ['Próximos', 'Comunicação direta com quem desenvolve'],
            ].map(([title, desc]) => (
              <div key={title} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient-brand mb-2">
                  {title}
                </div>
                <p className="text-sm text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              O que fazemos
            </span>
            <h2 className="mb-5 text-white">
              Soluções que transformam <span className="text-gradient-brand">operações em resultado</span>
            </h2>
            <p className="text-lg text-white/70">
              Da automação de uma planilha crítica até o sistema interno completo da sua empresa —
              entregamos tecnologia que resolve o problema certo, sem inflar escopo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0A84FF]/10 blur-[140px] pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Como trabalhamos
            </span>
            <h2 className="mb-5 text-white">Um processo claro, do primeiro contato ao lançamento</h2>
            <p className="text-lg text-white/70">
              Sem caixa preta. Você sabe exatamente em que ponto seu projeto está e para onde ele vai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="relative p-6 rounded-2xl glass-card hover:border-[color:var(--brand-blue)]/40 transition-colors"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-[#0B1220] border border-[color:var(--brand-blue)]/40 flex items-center justify-center text-[color:var(--brand-cyan)] font-bold">
                    {p.step}
                  </div>
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[color:var(--brand-blue)]/15">
                    <Icon size={22} className="text-[color:var(--brand-cyan)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
                Quem já confia na Britech
              </span>
              <h2 className="text-white">Projetos reais, clientes reais</h2>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline"
            >
              Ver todos os cases
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/15 via-transparent to-[#00D4FF]/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#0A84FF]/20 blur-[120px]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl glass-card brand-glow">
            <h2 className="mb-6 text-white">
              Pronto para <span className="text-gradient-brand">iluminar</span> o seu próximo projeto?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Conte o que você precisa. Em até 24h respondemos com um direcionamento — gratuito, sem
              compromisso e direto ao ponto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold no-underline"
              >
                Fale com um especialista
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all no-underline"
              >
                Ver todos os serviços
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
              {['Resposta em até 24h', 'Orçamento gratuito', 'Sem compromisso'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[color:var(--brand-cyan)]" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
