import { MapPin, Building2, Video } from 'lucide-react';
import { Link } from 'wouter';
import { CONTACT } from '@/lib/contact';

const CIDADES = [
  'Blumenau',
  'Gaspar',
  'Indaial',
  'Timbó',
  'Pomerode',
  'Brusque',
  'Itajaí',
  'Balneário Camboriú',
  'Joinville',
  'Florianópolis',
];

/**
 * Sinal de SEO local: relaciona a marca à região de forma explícita e em texto
 * corrido, que é o que o Google usa para conectar a empresa a buscas com
 * intenção geográfica ("software house em Blumenau", "empresa de sistemas SC").
 */
export function LocalSection() {
  return (
    <section aria-labelledby="atuacao-titulo" className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="inline-block text-xs font-bold text-[color:var(--brand-cyan)] uppercase tracking-[0.2em] mb-4">
              Onde atuamos
            </span>
            <h2 id="atuacao-titulo" className="mb-6 text-white">
              Software house em <span className="text-gradient-brand">Blumenau</span>, atendendo
              todo o Brasil
            </h2>
            <div className="space-y-4 text-lg text-white/70 leading-relaxed">
              <p>
                A Britech é uma software house sediada em <strong className="text-white/90">Blumenau, Santa
                Catarina</strong>, no coração do Vale do Itajaí — um dos maiores polos de tecnologia do
                país. É daqui que desenvolvemos sistemas sob medida, automações e integrações para
                indústrias, comércios e empresas de serviço.
              </p>
              <p>
                Atendemos presencialmente clientes de{' '}
                {CIDADES.slice(0, 6).join(', ')} e região, e trabalhamos de forma totalmente remota
                com empresas de todo o Brasil. Reuniões por vídeo, entregas semanais e comunicação
                direta com quem escreve o código — a distância nunca foi um problema para os nossos
                projetos.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {CIDADES.map((cidade) => (
                <span
                  key={cidade}
                  className="px-3.5 py-1.5 rounded-full text-sm text-white/70 border border-white/10 bg-white/5"
                >
                  {cidade}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {[
              {
                icon: MapPin,
                title: 'Base em Blumenau, SC',
                text: `${CONTACT.location}. Reuniões presenciais para clientes do Vale do Itajaí e do litoral catarinense.`,
              },
              {
                icon: Video,
                title: 'Projetos 100% remotos',
                text: 'Atendemos empresas de qualquer estado com o mesmo processo: entregas semanais, ambiente de homologação e acompanhamento contínuo.',
              },
              {
                icon: Building2,
                title: 'Experiência com a indústria da região',
                text: 'Conhecemos a realidade de operações têxteis, metalmecânicas, logísticas e de serviço — o vocabulário do seu negócio não é novidade para nós.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-6 rounded-2xl glass-card">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
                  <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{text}</p>
              </div>
            ))}

            <p className="text-sm text-white/50 lg:col-span-1">
              É da região e prefere conversar pessoalmente?{' '}
              <Link href="/contato" className="text-[color:var(--brand-cyan)] font-medium">
                Agende uma conversa
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
