import { HeroSection } from '@/components/HeroSection';
import { Users, Target, Zap, Code2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Foco em resultado',
      description:
        'Cada projeto é desenvolvido para gerar valor real. Tecnologia é meio, não fim.',
    },
    {
      icon: Zap,
      title: 'Inovação contínua',
      description:
        'Stack moderna, melhores práticas e curiosidade técnica que renova nossas entregas.',
    },
    {
      icon: Users,
      title: 'Parceria genuína',
      description:
        'Tratamos clientes como parceiros — entendemos a operação antes de propor solução.',
    },
  ];

  const stack = [
    'React', 'Next.js', 'TypeScript', 'Node.js',
    'Python', 'PostgreSQL', 'MongoDB', 'Redis',
    'AWS', 'Cloudflare', 'Docker', 'Kubernetes',
    'GraphQL', 'REST APIs', 'React Native', 'Tailwind',
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Sobre a Britech, software house em Blumenau"
        highlightWord="Blumenau"
        subtitle="Conheça nossa história"
        description="Software house brasileira sediada em Blumenau (SC), dedicada a transformar negócios com tecnologia de qualidade — sob medida, sem caixa preta."
        showSecondary={false}
      />

      {/* História */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
                Nossa história
              </span>
              <h2 className="mb-8 text-white">
                Tecnologia que <span className="text-gradient-brand">ilumina</span> soluções
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  A Britech nasceu da convicção de que software bem feito muda operações inteiras.
                  Reunimos profissionais apaixonados por tecnologia e com experiência real em
                  ambientes de produção.
                </p>
                <p>
                  Trabalhamos para empresas que querem mais que um sistema genérico — querem uma
                  solução que reflete exatamente como elas operam e que cresce junto com elas.
                </p>
                <p>
                  Excelência técnica, comunicação clara e proximidade real com o cliente. É assim
                  que construímos parcerias duradouras.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-[#0A84FF]/30 to-[#00D4FF]/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-square rounded-3xl glass-card overflow-hidden flex items-center justify-center p-12">
                <img
                  src="/images/team-abstract.webp"
                  alt="Equipe de desenvolvimento da Britech, software house em Blumenau, Santa Catarina"
                  width={1100}
                  height={733}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Nossos valores
            </span>
            <h2 className="mb-4 text-white">O que nos guia no dia a dia</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-8 rounded-2xl glass-card">
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
                    <Icon size={26} className="text-[color:var(--brand-cyan)]" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{v.title}</h3>
                  <p className="text-white/65 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {[
              ['50+', 'Projetos entregues'],
              ['30+', 'Clientes atendidos'],
              ['8+', 'Anos de experiência'],
              ['100%', 'Dedicação a cada cliente'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-brand mb-2">
                  {num}
                </div>
                <p className="text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 md:py-28 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Stack
            </span>
            <h2 className="mb-4 text-white">Tecnologias que usamos</h2>
            <p className="text-lg text-white/70">
              Ferramentas modernas, maduras e bem estabelecidas — escolhidas pelo encaixe com o problema,
              não pela moda.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {stack.map((tech) => (
              <div
                key={tech}
                className="px-4 py-4 rounded-xl glass-card text-center font-medium text-white/85 hover:border-[color:var(--brand-blue)]/40 hover:text-[color:var(--brand-cyan)] transition-colors flex items-center justify-center gap-2"
              >
                <Code2 size={16} className="text-[color:var(--brand-cyan)]/70" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
