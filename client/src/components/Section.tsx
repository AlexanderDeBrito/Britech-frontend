import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import { ROUTES, whatsappUrl } from '@/lib/contact';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-3xl mb-14">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mb-5 text-white">
        {title}
      </h2>
      {lead && <p className="text-lg text-white/75">{lead}</p>}
    </div>
  );
}

/** CTA final padrão: diagnóstico gratuito + WhatsApp secundário. */
export function CtaSection({
  title = (
    <>
      Descubra em 30 minutos onde o <span className="text-gradient-brand">DAG</span> destrava o
      seu time
    </>
  ),
  text = 'Uma conversa objetiva sobre o seu fluxo de desenvolvimento atual, onde os gates fazem diferença e qual seria o primeiro piloto. Gratuita e sem compromisso.',
}: {
  title?: ReactNode;
  text?: string;
}) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/15 via-transparent to-[#00D4FF]/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[400px] rounded-full bg-[#0A84FF]/20 blur-[120px]" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl glass-card brand-glow">
          <h2 className="mb-6 text-white">{title}</h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">{text}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ROUTES.diagnostico}
              className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold no-underline"
            >
              Agendar diagnóstico gratuito (30 min)
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all no-underline"
            >
              <WhatsAppIcon size={18} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
