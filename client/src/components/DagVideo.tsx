import { DAG_VIDEO } from '@/lib/dag';

/**
 * Player do vídeo explicativo do DAG. Sem autoplay e com preload="none": nada é
 * baixado até a pessoa dar play. Largura/altura e aspect-ratio fixos evitam CLS.
 */
export function DagVideoPlayer({ className = '' }: { className?: string }) {
  if (!DAG_VIDEO) return null;
  const { src, poster, width, height, title, caption } = DAG_VIDEO;
  return (
    <figure className={className}>
      <div className="rounded-3xl p-1.5 md:p-2 glass-card brand-glow">
        <video
          className="block w-full h-auto rounded-[1.25rem] bg-[#070D18]"
          style={{ aspectRatio: `${width} / ${height}` }}
          controls
          playsInline
          preload="none"
          poster={poster}
          width={width}
          height={height}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Seu navegador não reproduz vídeo.{' '}
          <a href={src}>Baixe o vídeo</a>.
        </video>
      </div>
      <figcaption className="mt-4 text-sm text-white/70 text-center">
        <span className="text-white/85 font-medium">{title}</span> · {caption}
      </figcaption>
    </figure>
  );
}

/** Seção do vídeo em /dag. Não renderiza nada enquanto não houver vídeo. */
export function DagVideo() {
  if (!DAG_VIDEO) return null;
  return (
    <section aria-labelledby="video-titulo" className="py-20 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 id="video-titulo" className="mb-4 text-white text-center">
            Veja o DAG <span className="text-gradient-brand">funcionando</span>
          </h2>
          <p className="mb-10 text-lg text-white/75 text-center max-w-2xl mx-auto">
            Uma tarefa atravessando o fluxo inteiro, dos agentes aos gates em que as pessoas decidem.
          </p>
          <DagVideoPlayer />
        </div>
      </div>
    </section>
  );
}
