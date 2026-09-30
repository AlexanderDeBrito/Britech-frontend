import { Link } from 'wouter';
import { ArrowRight, Linkedin, ShieldCheck, KeyRound, BarChart3, MapPin } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { CtaSection, SectionHeader } from '@/components/Section';
import { CONTACT, ROUTES } from '@/lib/contact';

export default function About() {
  const principles = [
    {
      icon: ShieldCheck,
      title: 'Gates acima de automação cega',
      description:
        'Automatizar é o fácil. O valor está nos pontos de controle que decidem o que avança — e em quem decide.',
    },
    {
      icon: KeyRound,
      title: 'Código e dados são do cliente',
      description:
        'Tudo roda no seu ambiente, versionado e documentado. Nada de caixa preta nem dependência obrigatória da Britech.',
    },
    {
      icon: BarChart3,
      title: 'Métricas antes de opinião',
      description:
        'Começamos por uma linha de base e medimos o antes e o depois com os dados do seu próprio tracker.',
    },
  ];

  const facts = [
    ['8+ anos', 'em engenharia de software (desde 2018)'],
    ['8 empresas', 'na trajetória de quem conduz, incluindo pagamentos e SaaS de saúde'],
    ['2023', 'fundação da Britech, em Blumenau (SC)'],
    ['DAG', 'harness próprio, em produção num SaaS B2B'],
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Uma consultoria enxuta, conduzida por quem desenha a arquitetura"
        highlightWord="quem desenha a arquitetura"
        subtitle="Sobre a Britech"
        description="A Britech é uma consultoria de arquitetura e desenvolvimento acelerado por IA para empresas que constroem SaaS e produtos B2B. Fundada em 2023, em Blumenau (SC), atende empresas de todo o Brasil."
        secondary={{ text: 'Conhecer o DAG', href: ROUTES.dag }}
      />

      {/* Quem conduz */}
      <section aria-labelledby="quem-titulo" className="py-20 md:py-28 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
            <div className="p-8 rounded-3xl glass-card brand-glow flex flex-col items-center text-center gap-5">
              <picture className="block w-32 h-32 rounded-full overflow-hidden border border-white/15 shadow-lg">
                <source
                  type="image/webp"
                  srcSet="/images/alexander-brito.webp 1x, /images/alexander-brito@2x.webp 2x"
                />
                <img
                  src="/images/alexander-brito.jpg"
                  alt="Alexander Brito, fundador da Britech Soluções"
                  width={256}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </picture>
              <div>
                <p className="text-2xl font-bold text-white">Alexander Brito</p>
                <p className="text-white/80">Fundador · Arquiteto de software</p>
              </div>
              <p className="flex items-center gap-2 text-sm text-white/75">
                <MapPin size={15} aria-hidden="true" />
                Blumenau, SC
              </p>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-cyan)] no-underline"
              >
                <Linkedin size={16} aria-hidden="true" />
                Britech no LinkedIn
              </a>
            </div>

            <div>
              <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
                Quem conduz
              </span>
              <h2 id="quem-titulo" className="mb-8 text-white">
                Você fala com quem <span className="text-gradient-brand">desenha a arquitetura</span>
              </h2>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  Alexander Brito trabalha com engenharia de software desde 2018. Nesses mais de 8
                  anos passou por 8 empresas e construiu sistemas regulados pelo Banco Central,
                  plataformas de pagamento e SaaS de saúde — ambientes em que uma decisão de
                  arquitetura errada custa caro.
                </p>
                <p>
                  Em 2023 fundou a Britech para levar essa experiência a empresas que constroem SaaS e
                  produtos B2B. É dele o DAG (Desenvolvimento Autônomo Governado), o harness em que
                  agentes de IA executam a tarefa inteira e as pessoas decidem nos gates — hoje em
                  produção no CRM da Renke Studio, cliente da Britech.
                </p>
                <p>
                  O modelo é enxuto de propósito: sem camadas de gerente de conta entre você e a
                  decisão técnica. Quem faz o diagnóstico é quem desenha e acompanha a implantação.
                </p>
              </div>
              <Link
                href={ROUTES.caseRenke}
                className="mt-8 inline-flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold hover:gap-3 transition-all no-underline"
              >
                Ver o case CRM Renke
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fatos */}
      <section aria-label="A Britech em números" className="py-16 md:py-20 border-y border-white/5 bg-[#070D18]/40">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map(([num, label]) => (
              <div key={num}>
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-brand mb-2">{num}</div>
                <p className="text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section aria-labelledby="principios-titulo" className="py-20 md:py-28">
        <div className="container">
          <SectionHeader
            id="principios-titulo"
            eyebrow="Princípios"
            title="Arquitetura como decisão de negócio"
            lead="Cada escolha técnica afeta margem, prazo e risco. Por isso trabalhamos com três princípios fixos."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-2xl glass-card">
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
                  <Icon size={26} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onde estamos */}
      <section aria-labelledby="onde-titulo" className="py-20 md:py-24 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Onde estamos" id="onde-titulo" title="Base em Blumenau, atuação em todo o Brasil" />
            <p className="-mt-6 text-lg text-white/80 leading-relaxed">
              A Britech tem base em Blumenau, Santa Catarina, e trabalha de forma remota com empresas
              de todo o país: diagnóstico e acompanhamento por vídeo, implantação no ambiente do
              cliente e comunicação direta com quem conduz o projeto.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
