import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Desculpe, a página que você está procurando não existe ou foi removida.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3 no-underline">
          Voltar para Home
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
