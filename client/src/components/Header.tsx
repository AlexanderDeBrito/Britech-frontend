import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { Logo } from './Logo';
import { ROUTES } from '@/lib/contact';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { label: 'DAG', href: ROUTES.dag },
    { label: 'Serviços', href: ROUTES.servicos },
    { label: 'Cases', href: ROUTES.cases },
    { label: 'Sobre', href: ROUTES.sobre },
  ];

  // Compara sem a barra final; /cases/crm-renke também marca "Cases".
  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  const isActive = (href: string) => {
    const here = norm(location);
    const target = norm(href);
    return here === target || here.startsWith(`${target}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1220]/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container flex items-center justify-between h-20"
      >
        <Link
          href={ROUTES.home}
          aria-label="Britech — página inicial"
          className="no-underline hover:opacity-90 transition-opacity"
        >
          <Logo size={38} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium no-underline transition-colors ${
                  active ? 'text-[color:var(--brand-cyan)]' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <Link
            href={ROUTES.diagnostico}
            className="btn-brand inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm no-underline"
          >
            Agendar diagnóstico
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors text-white"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="menu-mobile"
          className="md:hidden border-t border-white/10 bg-[#0B1220]/95 backdrop-blur-xl"
        >
          <div className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-[color:var(--brand-cyan)] transition-colors font-medium no-underline block py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ROUTES.diagnostico}
              className="btn-brand mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold no-underline"
            >
              Agendar diagnóstico
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
