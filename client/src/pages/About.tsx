import { Link } from 'wouter';
import { HeroSection } from '@/components/HeroSection';
import { Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada projeto é desenvolvido com o objetivo claro de gerar valor real para o negócio do cliente.',
    },
    {
      icon: Zap,
      title: 'Inovação Contínua',
      description: 'Estamos sempre atualizados com as tecnologias mais recentes e melhores práticas da indústria.',
    },
    {
      icon: Users,
      title: 'Parceria Genuína',
      description: 'Tratamos nossos clientes como parceiros, buscando entender profundamente seus desafios.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Sobre a Britech"
        subtitle="Conhecer Nossa História"
        description="Somos uma software house brasileira dedicada a transformar negócios através de tecnologia de qualidade."
      />

      {/* History Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-foreground">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A Britech foi fundada por profissionais apaixonados por tecnologia e com vasta experiência no mercado de software. Nossa missão é transformar a visão de nossos clientes em realidade através de soluções digitais inovadoras.
                </p>
                <p>
                  Com mais de 8 anos de atuação, desenvolvemos soluções para empresas de diversos segmentos, desde startups até grandes corporações. Cada projeto é uma oportunidade para criar impacto real e positivo.
                </p>
                <p>
                  Acreditamos que a excelência técnica, aliada a uma comunicação clara e transparente, é a base para parcerias duradouras e projetos bem-sucedidos.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center">
              <img
                src="/images/team-abstract.png"
                alt="Equipe Britech"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground">
              Os valores que guiam nossa atuação e definem quem somos como empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="p-8 bg-white rounded-lg border border-border">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground">
              Profissionais experientes e apaixonados por tecnologia, trabalhando juntos para criar soluções extraordinárias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="mb-4 w-32 h-32 mx-auto bg-slate-200 rounded-full flex items-center justify-center">
                  <Users size={64} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Profissional {i}</h3>
                <p className="text-primary font-medium mb-2">Especialista em Desenvolvimento</p>
                <p className="text-muted-foreground text-sm">
                  Profissional com vasta experiência em desenvolvimento de software e arquitetura de sistemas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-foreground">Tecnologias</h2>
            <p className="text-lg text-muted-foreground">
              Utilizamos as tecnologias mais modernas e confiáveis para garantir soluções robustas e escaláveis.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'React',
              'Next.js',
              'Node.js',
              'TypeScript',
              'PostgreSQL',
              'MongoDB',
              'AWS',
              'Docker',
              'Kubernetes',
              'GraphQL',
              'REST APIs',
              'Python',
            ].map((tech) => (
              <div
                key={tech}
                className="p-4 bg-white rounded-lg border border-border text-center font-medium text-foreground hover:border-primary/30 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
