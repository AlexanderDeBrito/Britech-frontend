import { Code2, Zap, Shield, Database, Cloud, Smartphone } from 'lucide-react';
import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';

export default function Services() {
  const mainServices = [
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

  const additionalServices = [
    {
      icon: Database,
      title: 'Arquitetura de Banco de Dados',
      description: 'Design e otimização de bancos de dados para alta performance e escalabilidade.',
    },
    {
      icon: Cloud,
      title: 'Infraestrutura em Nuvem',
      description: 'Migração e gerenciamento de infraestrutura em AWS, Google Cloud e Azure.',
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento Mobile',
      description: 'Apps nativos e cross-platform para iOS e Android com experiência excepcional.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Serviços Especializados"
        subtitle="Soluções Completas"
        description="Oferecemos uma gama completa de serviços de desenvolvimento e consultoria para transformar sua visão em realidade."
      />

      {/* Main Services */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Por que escolher a Britech?</h2>
            <p className="text-lg text-muted-foreground">
              Nossa abordagem combina expertise técnica com entendimento profundo do negócio dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Expertise Técnica</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Tecnologias modernas e escaláveis</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Arquitetura robusta e bem documentada</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Testes automatizados e qualidade garantida</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">Parceria Real</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Comunicação clara e transparente</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Suporte contínuo e manutenção</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-muted-foreground">Entrega no prazo e dentro do orçamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Serviços Adicionais</h2>
            <p className="text-lg text-muted-foreground">
              Além dos serviços principais, oferecemos soluções especializadas para necessidades específicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-white">Vamos trabalhar juntos?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar seu negócio a crescer.
          </p>
          <Link href="/contato" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors no-underline">
            Iniciar Conversa
          </Link>
        </div>
      </section>
    </div>
  );
}
