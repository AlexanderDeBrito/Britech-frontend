import { Code2, Zap, Workflow, Database, Cloud, Smartphone, Globe2, Cpu, ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';

export default function Services() {
  const mainServices = [
    {
      icon: Code2,
      title: 'Software sob medida',
      description:
        'Sistemas web e desktop exclusivos para o seu processo. Arquitetura escalável, código limpo e foco em manutenibilidade.',
    },
    {
      icon: Workflow,
      title: 'Automação de processos',
      description:
        'Conectamos sistemas, eliminamos retrabalho e digitalizamos fluxos manuais. Mais produtividade com menos erros.',
    },
    {
      icon: Globe2,
      title: 'Sites e landing pages',
      description:
        'Sites profissionais, performáticos e otimizados para SEO e conversão. Identidade visual alinhada à sua marca.',
    },
  ];

  const additionalServices = [
    {
      icon: Cpu,
      title: 'Aplicações específicas',
      description: 'Ferramentas internas, dashboards e portais customizados para resolver um problema preciso.',
    },
    {
      icon: Database,
      title: 'Integrações e APIs',
      description: 'Integração com ERPs, CRMs, gateways de pagamento e qualquer serviço externo com API.',
    },
    {
      icon: Cloud,
      title: 'Infraestrutura em nuvem',
      description: 'Deploy, monitoramento e gestão em AWS, Google Cloud, Azure ou Cloudflare.',
    },
    {
      icon: Smartphone,
      title: 'Aplicativos mobile',
      description: 'Apps multiplataforma com React Native — iOS e Android com uma única base de código.',
    },
    {
      icon: Zap,
      title: 'Otimização e refatoração',
      description: 'Damos uma sobrevida ao sistema legado — performance, segurança e manutenibilidade.',
    },
    {
      icon: Code2,
      title: 'Consultoria técnica',
      description: 'Avaliação de arquitetura, code review e direcionamento técnico para o seu time.',
    },
  ];

  const differentials = [
    {
      title: 'Expertise técnica',
      items: [
        'Stack moderna e escalável',
        'Arquitetura limpa e bem documentada',
        'Testes automatizados como padrão',
        'Boas práticas de segurança',
      ],
    },
    {
      title: 'Parceria de verdade',
      items: [
        'Comunicação direta com quem desenvolve',
        'Entregas semanais, sempre',
        'Suporte e evolução após o lançamento',
        'Transparência total de prazos e custos',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Serviços que entregam resultado"
        highlightWord="resultado"
        subtitle="Soluções completas"
        description="Uma gama completa de serviços para transformar sua visão em sistema funcionando — do briefing à manutenção contínua."
        showSecondary={false}
      />

      {/* Principais */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Por que Britech
            </span>
            <h2 className="mb-4 text-white">O que nos torna diferentes</h2>
            <p className="text-lg text-white/70">
              Expertise técnica é o mínimo. O que muda o jogo é como aplicamos isso na realidade de cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((d) => (
              <div key={d.title} className="p-8 rounded-2xl glass-card">
                <h3 className="mb-5 text-2xl font-semibold text-white">{d.title}</h3>
                <ul className="space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-[color:var(--brand-blue)]/15 border border-[color:var(--brand-blue)]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-[color:var(--brand-cyan)]" />
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adicionais */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Mais serviços
            </span>
            <h2 className="mb-4 text-white">Especializações complementares</h2>
            <p className="text-lg text-white/70">
              Para projetos com requisitos específicos, ampliamos nosso escopo com serviços especializados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/15 via-transparent to-[#00D4FF]/10 -z-0" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">
            Vamos <span className="text-gradient-brand">trabalhar juntos</span>?
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Conte sobre seu desafio. Em até 24h respondemos com um direcionamento.
          </p>
          <Link
            href="/contato"
            className="btn-brand inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold no-underline"
          >
            Iniciar conversa
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
