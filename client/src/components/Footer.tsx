import { Link } from 'wouter';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppButton';
import { CONTACT, whatsappUrl } from '@/lib/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#070D18] mt-24">
      <div className="absolute inset-x-0 top-0 brand-lines" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="no-underline hover:opacity-90 transition-opacity w-fit">
              <Logo size={38} />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Software house brasileira. Tecnologia que ilumina soluções para empresas que
              querem evoluir.
            </p>
          </div>

          {/* Serviços */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                ['Software sob medida', '/servicos'],
                ['Automação de processos', '/servicos'],
                ['Sites e landing pages', '/servicos'],
                ['Integrações e APIs', '/servicos'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/sobre" className="text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors no-underline">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors no-underline">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors no-underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors no-underline"
              >
                <Mail size={15} />
                {CONTACT.email}
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[#25D366] transition-colors no-underline"
              >
                <span className="text-[#25D366]"><WhatsAppIcon size={15} /></span>
                {CONTACT.phoneDisplay} (WhatsApp)
              </a>
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors no-underline"
              >
                <Phone size={15} />
                {CONTACT.phoneDisplay}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin size={15} />
                {CONTACT.location}
              </div>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-[color:var(--brand-cyan)] transition-colors"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} Britech. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors no-underline">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors no-underline">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
