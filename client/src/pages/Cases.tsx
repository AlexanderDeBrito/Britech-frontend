import { HeroSection } from '@/components/HeroSection';
import { CaseCard } from '@/components/CaseCard';
import { CtaSection } from '@/components/Section';
import { CASES } from '@/lib/cases';
import { ROUTES } from '@/lib/contact';

export default function Cases() {
  return (
    <div className="flex flex-col">
      <HeroSection
        title="Cases com números, não com adjetivos"
        highlightWord="números"
        subtitle="Cases da Britech"
        description="Resultados medidos nos dados dos próprios clientes. O destaque é o CRM Renke, onde o DAG está em produção desde julho de 2026."
        ctaText="Ler o case CRM Renke"
        ctaHref={ROUTES.caseRenke}
        secondary={{ text: 'Agendar diagnóstico', href: ROUTES.diagnostico }}
      />

      <section aria-labelledby="portfolio-titulo" className="py-20 md:py-28">
        <div className="container">
          <h2 id="portfolio-titulo" className="sr-only">
            Cases da Britech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {CASES.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<>O próximo case pode ser o <span className="text-gradient-brand">seu</span></>}
        text="Começamos pelo diagnóstico gratuito de 30 minutos e, se fizer sentido, por um piloto medido de 30 dias."
      />
    </div>
  );
}
