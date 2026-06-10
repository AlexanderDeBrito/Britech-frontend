import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { CaseCard } from '@/components/CaseCard';
import { CASES } from '@/lib/cases';
import { ArrowRight, Quote } from 'lucide-react';

export default function Cases() {
  const highlights = [
    {
      title: 'Do briefing ao deploy',
      description:
        'Cada um destes projetos começou com uma conversa sobre o problema — não sobre tecnologia. A solução veio depois, sob medida.',
    },
    {
      title: 'Operação real, valor real',
      description:
        'CRM, controle de vendas, produto de saúde: sistemas em uso diário por equipes reais, não provas de conceito.',
    },
    {
      title: 'Parceria que continua',
      description:
        'Clientes que voltam para evoluir o sistema são a melhor métrica que temos. Suporte e evolução fazem parte da entrega.',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Clientes que já confiam na Britech"
        highlightWord="confiam"
        subtitle="Portfolio"
        description="Projetos reais entregues para empresas reais — de CRM sob medida a produto de gestão de saúde."
        showSecondary={false}
      />

      {/* Cases reais */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* Como entregamos */}
      <section className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Por trás dos projetos
            </span>
            <h2 className="mb-4 text-white">O que esses cases têm em comum</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="p-8 rounded-2xl glass-card">
                <Quote size={22} className="text-[color:var(--brand-cyan)] mb-4" />
                <h3 className="mb-3 text-xl font-semibold text-white">{h.title}</h3>
                <p className="text-white/65 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/15 via-transparent to-[#00D4FF]/10 -z-0" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">
            Seu projeto pode ser o <span className="text-gradient-brand">próximo</span>
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Conte sua ideia. Vamos transformar em algo concreto.
          </p>
          <Link
            href="/contato"
            className="btn-brand inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold no-underline"
          >
            Iniciar projeto
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
