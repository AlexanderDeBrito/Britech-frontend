import { Link } from 'wouter';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppButton';
import { CONTACT, ROUTES, WHATSAPP_MESSAGES, whatsappUrl } from '@/lib/contact';

const linkClass =
  'text-sm text-white/75 hover:text-[color:var(--brand-cyan)] transition-colors no-underline';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#070D18] mt-24">
      <div className="absolute inset-x-0 top-0 brand-lines" />

      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Marca */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href={ROUTES.home} className="no-underline hover:opacity-90 transition-opacity w-fit">
              <Logo size={38} />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed">
              Empresa de desenvolvimento de software. Construímos para quem desenvolve SaaS e
              produtos B2B, e construímos os nossos próprios produtos.
            </p>
          </div>

          {/* Consultoria */}
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-white text-sm uppercase tracking-wider">Consultoria</h2>
            <ul className="flex flex-col gap-2.5">
              {[
                ['Visão geral', ROUTES.servicos],
                ['DAG — Desenvolvimento Autônomo Governado', ROUTES.dag],
                ['Diagnóstico gratuito', ROUTES.diagnostico],
                ['Case CRM Renke', ROUTES.caseRenke],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-white text-sm uppercase tracking-wider">Produtos</h2>
            <ul className="flex flex-col gap-2.5">
              {[
                ['Todos os produtos', ROUTES.produtos],
                ['Razão · lançamentos de extrato', ROUTES.produtoLancamentos],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-white text-sm uppercase tracking-wider">Empresa</h2>
            <ul className="flex flex-col gap-2.5">
              {[
                ['Sobre', ROUTES.sobre],
                ['Cases', ROUTES.cases],
                ['Contato', ROUTES.contato],
                ['Política de Privacidade', ROUTES.privacidade],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-white text-sm uppercase tracking-wider">Contato</h2>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${CONTACT.email}`} className={`flex items-center gap-2 break-all ${linkClass}`}>
                <Mail size={15} aria-hidden="true" className="flex-shrink-0" />
                {CONTACT.email}
              </a>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/75 hover:text-[#25D366] transition-colors no-underline"
              >
                <span className="text-[#25D366]"><WhatsAppIcon size={15} /></span>
                {CONTACT.phoneDisplay} (WhatsApp)
              </a>
              <a href={`tel:${CONTACT.phoneE164}`} className={`flex items-center gap-2 ${linkClass}`}>
                <Phone size={15} aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
              <address className="flex items-start gap-2 text-sm text-white/75 not-italic">
                <MapPin size={15} aria-hidden="true" className="mt-0.5 flex-shrink-0" />
                <span>
                  Britech Soluções
                  <br />
                  Blumenau — Santa Catarina, Brasil
                </span>
              </address>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${linkClass}`}
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm text-white/70">
            © {currentYear} Britech Soluções. Todos os direitos reservados.{' '}
            <Link href={ROUTES.privacidade} className="text-white/80 hover:text-[color:var(--brand-cyan)]">
              Política de Privacidade
            </Link>
          </p>
          <p className="text-sm text-white/70">
            Blumenau, SC · atendimento remoto em todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
