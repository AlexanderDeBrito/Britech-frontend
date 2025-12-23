import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { CaseCard } from '@/components/CaseCard';

export default function Cases() {
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
    {
      image: '/images/hero-bg.png',
      title: 'Sistema de Gestão',
      category: 'Enterprise',
      description: 'Sistema ERP completo para gestão de processos empresariais com integração de múltiplos módulos.',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Angular'],
    },
    {
      image: '/images/services-pattern.png',
      title: 'Plataforma SaaS',
      category: 'SaaS',
      description: 'Plataforma SaaS multi-tenant com autenticação, billing e gerenciamento de usuários.',
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Vercel'],
    },
    {
      image: '/images/team-abstract.png',
      title: 'API de Integrações',
      category: 'Integrations',
      description: 'API robusta para integração com múltiplos serviços e plataformas externas.',
      technologies: ['Node.js', 'GraphQL', 'Redis', 'Docker'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}\n      <HeroSection
        title="Nossos Cases"
        subtitle="Portfolio de Projetos"
        description="Confira alguns projetos que desenvolvemos para clientes em diferentes segmentos e tecnologias."
      />

      {/* Cases Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem) => (
              <CaseCard key={caseItem.title} {...caseItem} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container text-center">
          <h2 className="mb-6 text-foreground">Quer um projeto como este?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos transformar sua ideia em realidade.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors no-underline">
            Iniciar Projeto
          </Link>
        </div>
      </section>
    </div>
  );
}
