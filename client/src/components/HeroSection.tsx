import { Link } from 'wouter';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  highlightWord?: string;
  showSecondary?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = 'Fale com um especialista',
  ctaHref = '/contato',
  highlightWord,
  showSecondary = true,
}: HeroSectionProps) {
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
      {/* Blobs animados */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-[#0A84FF]/25 blur-[120px] animate-float-slow" />
        <div className="absolute top-20 right-0 w-[420px] h-[420px] rounded-full bg-[#00D4FF]/20 blur-[120px] animate-float-slower" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#0A84FF]/15 blur-[140px]" />
      </div>

      {/* Grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge subtitle */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={14} className="text-[color:var(--brand-cyan)]" />
            <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-white leading-[1.05]">
            {renderTitle()}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaHref}
              className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base no-underline"
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
            {showSecondary && (
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all no-underline"
              >
                Conhecer serviços
              </a>
            )}
          </div>

          {/* Trust line */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)] shadow-[0_0_12px_#00D4FF]" />
              Software sob medida
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)] shadow-[0_0_12px_#00D4FF]" />
              Automação de processos
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[color:var(--brand-cyan)] shadow-[0_0_12px_#00D4FF]" />
              Sites e aplicações web
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
