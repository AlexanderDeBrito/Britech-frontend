import { Code2, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseCard } from '@/components/CaseCard';

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento de Software',
      description: 'Criamos soluções sob medida com tecnologias modernas, focando em escalabilidade, performance e manutenibilidade.',
    },
    {
      icon: Zap,
      title: 'Consultoria em TI',
      description: 'Ajudamos empresas a otimizar processos, arquitetura de sistemas e transformação digital com expertise técnica.',
    },
    {
      icon: Shield,
      title: 'Integrações e APIs',
      description: 'Integramos sistemas complexos e desenvolvemos APIs robustas para conectar sua infraestrutura tecnológica.',
    },
  ];

  const cases = [
    {
      image: '/images/services-pattern.png',
      title: 'Plataforma de E-commerce',
      category: 'E-commerce',
      description: 'Sistema de e-commerce escalável com integração de pagamentos e gestão de inventário em tempo real.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      image: '/images/team-abstract.png',
      title: 'Dashboard Analítico',
      category: 'Analytics',
      description: 'Dashboard interativo para análise de dados em tempo real com visualizações avançadas e relatórios customizados.',
      technologies: ['React', 'D3.js', 'Python', 'BigQuery'],
    },
    {
      image: '/images/cta-accent.png',
      title: 'Aplicativo Mobile',
      category: 'Mobile',
      description: 'Aplicativo mobile nativo para iOS e Android com sincronização em tempo real e offline-first architecture.',
      technologies: ['React Native', 'Firebase', 'Redux'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Transforme seu negócio com tecnologia de ponta"
        subtitle="Software House Profissional"
        description="Desenvolvemos soluções digitais inovadoras e escaláveis para empresas que querem crescer no mundo digital."
        backgroundImage="/images/hero-bg.png"
      />

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos uma gama completa de serviços de desenvolvimento e consultoria para transformar sua visão em realidade.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-foreground">Pronto para começar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vamos conversar sobre como a Britech pode ajudar seu negócio a crescer com tecnologia de qualidade.
            </p>
            <Link href="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3 no-underline">
              Agendar Conversa
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Nossos Cases</h2>
            <p className="text-lg text-muted-foreground">
              Confira alguns projetos que desenvolvemos para clientes em diferentes segmentos.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.title} {...caseItem} />
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link href="/cases" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all no-underline">
              Ver Todos os Cases
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-navy text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <p className="text-white/70">Projetos Entregues</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
              <p className="text-white/70">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8+</div>
              <p className="text-white/70">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-white/70">Dedicação à Qualidade</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
