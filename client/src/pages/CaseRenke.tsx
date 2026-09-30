import { Link } from 'wouter';
import { ArrowLeft, Building2, Target, Wrench } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { MetricGrid } from '@/components/Metrics';
import { CtaSection, SectionHeader } from '@/components/Section';
import { ROUTES } from '@/lib/contact';
import { RENKE_FOOTNOTE, RENKE_MAIN, RENKE_MONTHLY_HOURS, RENKE_OTHER } from '@/lib/dag';

const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 0 });

function HoursChart() {
  const max = Math.max(...RENKE_MONTHLY_HOURS.map((m) => m.dag + m.manual));
  return (
    <figure className="p-6 md:p-8 rounded-2xl glass-card">
      <figcaption className="mb-6">
        <h3 className="text-lg font-semibold text-white">Horas estimadas entregues por mês</h3>
        <p className="text-sm text-white/75">
          Frente principal do CRM, 2026. DAG em escala a partir de julho. Fevereiro e março sem
          dados.
        </p>
      </figcaption>
      <div className="flex items-end gap-2 sm:gap-4 h-64" role="list">
        {RENKE_MONTHLY_HOURS.map((m) => {
          const total = m.dag + m.manual;
          return (
            <div
              key={m.month}
              role="listitem"
              aria-label={`${m.month}: ${fmt(total)} horas estimadas, ${fmt(m.dag)} via DAG`}
              className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
            >
              <span className="text-xs font-semibold text-white/80">{fmt(total)}h</span>
              <div className="w-full max-w-[56px] flex flex-col justify-end" style={{ height: `${(total / max) * 85}%` }}>
                <div className="w-full rounded-t-md bg-gradient-to-t from-[#0A84FF] to-[#00D4FF]" style={{ height: `${(m.dag / total) * 100}%` }} />
                <div className={`w-full bg-white/25 ${m.dag === 0 ? 'rounded-t-md' : ''}`} style={{ height: `${(m.manual / total) * 100}%` }} />
              </div>
              <span className="text-xs font-medium text-white/75 uppercase">{m.month}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-gradient-to-t from-[#0A84FF] to-[#00D4FF]" /> via DAG
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-white/25" /> manual
        </span>
      </div>
    </figure>
  );
}

export default function CaseRenke() {
  const context = [
    {
      icon: Building2,
      title: 'Contexto',
      text: 'A Renke Studio, cliente da Britech, opera um CRM SaaS B2B em produção, com clientes usando o sistema todos os dias e um time dividido em verticais de produto.',
    },
    {
      icon: Target,
      title: 'Desafio',
      text: 'Aumentar o volume de entrega sem transformar a revisão em gargalo nem deixar a arquitetura se desfazer com código gerado por IA sem controle.',
    },
    {
      icon: Wrench,
      title: 'O que foi implantado',
      text: 'O DAG, conduzido por Alexander Brito: tarefas priorizadas no tracker, especificação, código, 4 revisões independentes, deploy e testes ponta a ponta com revert automático. As pessoas ficaram nos gates de entrada e de homologação.',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="CRM Renke: 12× mais horas entregues com o DAG"
        highlightWord="12× mais horas"
        subtitle="Case · Renke Studio"
        description="Em poucos meses de DAG em escala, a frente principal do CRM passou de 16h para 194h estimadas entregues por mês, e o ciclo mediano caiu de 22 para 12 dias — com as pessoas decidindo só nos gates."
        secondary={{ text: 'Como o DAG funciona', href: ROUTES.dag }}
      />

      <section className="py-20 md:py-28">
        <div className="container">
          <Link href={ROUTES.cases} className="mb-10 inline-flex items-center gap-2 text-sm text-white/80 hover:text-[color:var(--brand-cyan)] no-underline">
            <ArrowLeft size={16} aria-hidden="true" />
            Todos os cases
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {context.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-8 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h2 className="mb-3 text-xl md:text-2xl font-semibold text-white">{title}</h2>
                <p className="text-white/80 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="numeros-titulo" className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="numeros-titulo"
            eyebrow="Antes e depois"
            title="Os números"
            lead="Medidos no tracker do próprio cliente, comparando janelas antes e depois do DAG."
          />

          <h3 className="text-lg font-semibold text-white mb-5">Frente principal do CRM (conduzida por Alexander Brito)</h3>
          <MetricGrid metrics={RENKE_MAIN} />
          <p className="mt-4 text-sm text-white/75">
            Em agosto e setembro, 81% das entregas dessa frente passaram pelo DAG (antes: 0%).
          </p>

          <div className="mt-12">
            <HoursChart />
          </div>

          <h3 className="text-lg font-semibold text-white mt-14 mb-5">
            Desenvolvedor de outra vertical, após ~10 dias de DAG
          </h3>
          <MetricGrid metrics={RENKE_OTHER} />
          <p className="mt-4 text-sm text-white/75">
            Com pouco tempo de uso, o ciclo mediano caiu pela metade. É um sinal forte, mas ainda
            cedo — a janela depois tem só um mês.
          </p>

          <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-base font-semibold text-white mb-2">Como ler estes números</h3>
            <p className="text-sm text-white/75 leading-relaxed">{RENKE_FOOTNOTE}</p>
            <p className="mt-3 text-sm text-white/75 leading-relaxed">
              Horas rastreadas ficaram de fora porque são registradas de forma irregular; horas
              estimadas são a soma das estimativas das tarefas entregues no mês.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="licoes-titulo" className="py-24 md:py-32">
        <div className="container">
          <SectionHeader
            id="licoes-titulo"
            eyebrow="O que aprendemos"
            title="O ganho veio do processo, não do modelo"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Volume e tamanho', 'O ganho aparece no volume e no tamanho do que é entregue — não só em tarefas pequenas feitas mais rápido.'],
              ['Gates primeiro', 'Cada gate foi adicionado depois de uma falha real. Sem eles, mais volume significaria mais retrabalho.'],
              ['Pessoas no controle', 'Priorizar e homologar continuaram sendo decisões humanas. O que mudou foi todo o trabalho entre uma coisa e outra.'],
            ].map(([t, d]) => (
              <div key={t} className="p-8 rounded-2xl glass-card">
                <h3 className="mb-3 text-xl font-semibold text-white">{t}</h3>
                <p className="text-white/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<>Quer números assim no <span className="text-gradient-brand">seu</span> time?</>}
        text="No diagnóstico gratuito de 30 minutos olhamos o seu fluxo atual e desenhamos um piloto medido com os dados do seu próprio tracker."
      />
    </div>
  );
}
