import { Link } from 'wouter';
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, Search, Wrench, LineChart } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeader } from '@/components/Section';
import { WhatsAppIcon } from '@/components/WhatsAppButton';
import { CONTACT, ROUTES, whatsappUrl } from '@/lib/contact';

export default function Diagnostico() {
  const call = [
    'Mapa rápido do seu fluxo atual: da tarefa priorizada ao deploy',
    'Onde o volume trava hoje — revisão, testes, homologação ou arquitetura',
    'Onde o DAG se aplica primeiro e o que precisaria estar pronto',
    'Próximos passos concretos, mesmo que a resposta seja “ainda não”',
  ];

  const phases = [
    {
      icon: Search,
      duration: '1 semana',
      title: 'Diagnóstico',
      description:
        'Levantamento do repositório, do tracker, do pipeline e da arquitetura. Linha de base de métricas (horas estimadas entregues, ciclo mediano) e escolha do fluxo piloto.',
      output: 'Relatório com gates propostos, riscos e plano de implantação.',
    },
    {
      icon: Wrench,
      duration: '2–3 semanas',
      title: 'Implantação',
      description:
        'DAG instalado no seu ambiente: fila, especificação, revisões independentes, deploy e testes com revert. Régua de severidade adaptada ao seu domínio e time treinado nos gates humanos.',
      output: 'DAG rodando no fluxo piloto, com playbook de operação.',
    },
    {
      icon: LineChart,
      duration: '30 dias',
      title: 'Piloto medido',
      description:
        'O time opera com o DAG no dia a dia enquanto acompanhamos os números e ajustamos os gates. Comparação antes e depois com os dados do seu tracker.',
      output: 'Relatório de resultados e recomendação para escalar (ou não).',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Diagnóstico gratuito de 30 minutos"
        highlightWord="gratuito"
        subtitle="Comece por aqui"
        description="Uma conversa objetiva com quem desenha a arquitetura. Você sai sabendo onde o DAG destrava o seu time, o que precisa estar pronto e qual seria o primeiro piloto."
        ctaText="Agendar pelo WhatsApp"
        ctaHref={whatsappUrl()}
        secondary={{ text: 'Conhecer o DAG', href: ROUTES.dag }}
        trust={['30 minutos, por vídeo', 'Gratuito e sem compromisso', 'Com Alexander Brito']}
      />

      <section aria-labelledby="call-titulo" className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <SectionHeader id="call-titulo" eyebrow="Nos 30 minutos" title="O que acontece na conversa" />
              <ul className="-mt-4 space-y-4">
                {call.map((t) => (
                  <li key={t} className="flex gap-3 text-lg text-white/80">
                    <CheckCircle2 size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)] flex-shrink-0 mt-1" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-10 rounded-3xl glass-card brand-glow">
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[color:var(--brand-blue)]/15">
                <CalendarCheck size={26} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Agende o seu diagnóstico</h2>
              <p className="text-white/80 mb-8">
                Mande uma mensagem com o nome da empresa e o melhor horário. Respondemos em até 1 dia
                útil para marcar a conversa.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold no-underline"
                >
                  <WhatsAppIcon size={20} />
                  Agendar pelo WhatsApp
                </a>
                <Link
                  href={ROUTES.contato}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all no-underline"
                >
                  Preencher o formulário
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-6 text-sm text-white/75">
                Prefere e-mail?{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-[color:var(--brand-cyan)]">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="fases-titulo" className="py-24 md:py-32 bg-[#070D18]/60 border-y border-white/5">
        <div className="container">
          <SectionHeader
            id="fases-titulo"
            eyebrow="Depois da conversa"
            title="Três etapas, cada uma com uma decisão sua no final"
            lead="O escopo e o investimento de cada etapa são definidos depois do diagnóstico gratuito, de acordo com o tamanho do time e do fluxo."
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map(({ icon: Icon, duration, title, description, output }) => (
              <li key={title} className="p-8 rounded-2xl glass-card flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[color:var(--brand-blue)]/15">
                    <Icon size={22} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-cyan)]">
                    <Clock size={15} aria-hidden="true" />
                    {duration}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
                <p className="text-white/75 leading-relaxed flex-1">{description}</p>
                <p className="mt-6 pt-4 border-t border-white/10 text-sm text-white/85">
                  <strong className="text-white">Você recebe:</strong> {output}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
