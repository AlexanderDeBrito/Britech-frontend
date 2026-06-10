import { Link } from 'wouter';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0A84FF]/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00D4FF]/15 blur-[120px]" />
      </div>

      <div className="text-center max-w-md relative z-10">
        <h1 className="mb-4 text-7xl md:text-8xl font-extrabold text-gradient-brand">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-white">Página não encontrada</h2>
        <p className="mb-10 text-white/65">
          A página que você procura não existe ou foi movida. Vamos te levar para um lugar conhecido.
        </p>
        <Link
          href="/"
          className="btn-brand inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold no-underline"
        >
          <Home size={18} />
          Voltar para o início
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
