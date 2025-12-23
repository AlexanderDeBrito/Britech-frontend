import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText = 'Começar Agora',
  ctaHref = '/contato',
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-white/95" />
      )}

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary">{subtitle}</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-foreground leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ctaHref} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3 no-underline">
              {ctaText}
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
