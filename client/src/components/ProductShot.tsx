import type { ProductShot as Shot } from '@/lib/products';
import { RAZAO_SHOT_CAPTION } from '@/lib/products';

/**
 * Captura do protótipo numa moldura de janela de navegador, no estilo do site.
 * WebP em dois tamanhos (srcset), lazy por padrão e com dimensões fixas para não causar CLS.
 */
export function ProductShot({
  shot,
  eager = false,
  caption = RAZAO_SHOT_CAPTION,
  sizes = '(min-width: 1280px) 1100px, 100vw',
  className = '',
}: {
  shot: Shot;
  eager?: boolean;
  caption?: string | null;
  sizes?: string;
  className?: string;
}) {
  const base = `/images/produtos/${shot.file}`;
  return (
    <figure className={className}>
      <div className="rounded-2xl md:rounded-3xl p-1.5 md:p-2 glass-card brand-glow">
        <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <img
          src={`${base}-960.webp`}
          srcSet={`${base}-960.webp 960w, ${base}-1600.webp 1600w`}
          sizes={sizes}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="block w-full h-auto rounded-xl md:rounded-2xl bg-white"
        />
      </div>
      {caption && <figcaption className="mt-3 text-xs text-white/70 text-center">{caption}</figcaption>}
    </figure>
  );
}
