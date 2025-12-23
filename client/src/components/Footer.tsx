import { Link } from 'wouter';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-border mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity w-fit">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <span className="text-lg font-bold text-white">B</span>
              </div>
              <span className="font-bold text-lg text-foreground">Britech</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transformando empresas com soluções digitais inovadoras e escaláveis.
            </p>
          </div>

          {/* Serviços */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Serviços</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                  Desenvolvimento de Software
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                  Consultoria em TI
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                  Integrações
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Empresa</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contato@britech.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
              >
                <Mail size={16} />
                contato@britech.com.br
              </a>
              <a
                href="tel:+5547999338663"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
              >
                <span className="text-base">📞</span>
                (47) 9 99338663
              </a>
              <a
                href="https://www.linkedin.com/company/britech-solucoes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Britech Soluções. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
