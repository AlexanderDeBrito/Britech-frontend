import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/lib/faq';

/**
 * Usa <details>/<summary> em vez de um accordion controlado por estado: o texto
 * das respostas fica sempre no HTML, que é o que o Google precisa ler para
 * validar o FAQPage do JSON-LD — um accordion que desmonta o conteúdo fechado
 * deixaria a marcação sem respaldo na página.
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5"
    >
      <div className="container">
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
            Dúvidas frequentes
          </span>
          <h2 id="faq-titulo" className="mb-5 text-white">
            Perguntas que sempre nos fazem
          </h2>
          <p className="text-lg text-white/70">
            Se a sua dúvida não estiver aqui, fale com a gente pelo WhatsApp — respondemos em até
            24 horas.
          </p>
        </div>

        <div className="max-w-3xl flex flex-col gap-3">
          {FAQ.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group rounded-2xl glass-card overflow-hidden transition-colors hover:border-[color:var(--brand-blue)]/40"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 text-white font-semibold text-lg marker:content-['']">
                <h3 className="text-base md:text-lg font-semibold">{item.question}</h3>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="flex-shrink-0 text-[color:var(--brand-cyan)] transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 -mt-1">
                <p className="text-white/70 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
