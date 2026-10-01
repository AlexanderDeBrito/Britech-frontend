import { UserCheck } from 'lucide-react';
import { DAG_FLOW } from '@/lib/dag';

const AGENT_BAND_LABEL = 'O agente executa (gates automáticos)';

/** Nó numerado da linha do tempo: cheio para gate humano, vazado para etapa do agente. */
function Node({ n, human }: { n: number; human?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold tabular-nums flex-shrink-0 ${
        human
          ? 'bg-[color:var(--brand-cyan)] text-[#0B1220] shadow-[0_0_0_6px_rgba(0,212,255,0.15)]'
          : 'bg-[#0B1220] text-white/85 border-2 border-white/35'
      }`}
    >
      {String(n).padStart(2, '0')}
    </span>
  );
}

function HumanBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">
      <UserCheck size={14} aria-hidden="true" />
      Você decide
    </span>
  );
}

/**
 * Fluxo do DAG como linha do tempo: diagrama informativo, sem nada clicável.
 * Horizontal a partir de `lg`, vertical no mobile. As etapas 02–06 ficam sob
 * uma faixa "o agente executa"; 01 e 07 são gates humanos.
 */
export function DagFlow({ compact = false }: { compact?: boolean }) {
  const last = DAG_FLOW.length - 1;
  const firstAgent = DAG_FLOW.findIndex((s) => !s.human);
  const lastAgent = DAG_FLOW.length - 1 - [...DAG_FLOW].reverse().findIndex((s) => !s.human);

  return (
    <div className="cursor-default select-text">
      {/* Legenda */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm text-white/80">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="w-3.5 h-3.5 rounded-full bg-[color:var(--brand-cyan)]" />
          Você decide (gate humano)
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="w-3.5 h-3.5 rounded-full border-2 border-white/50" />
          {AGENT_BAND_LABEL}
        </span>
      </div>

      {/* Chave sobre as etapas do agente (desktop) */}
      <div aria-hidden="true" className="hidden lg:grid grid-cols-7 mb-4">
        <div
          className="flex flex-col items-center"
          style={{ gridColumn: `${firstAgent + 1} / ${lastAgent + 2}` }}
        >
          <span className="mb-2 text-[11px] font-bold uppercase tracking-wider text-white/70">
            {AGENT_BAND_LABEL}
          </span>
          <span className="block w-[calc(100%-2.5rem)] h-3 border-t-2 border-x-2 border-white/25 rounded-t-lg" />
        </div>
      </div>

      <ol className="flex flex-col lg:grid lg:grid-cols-7">
        {DAG_FLOW.map((step, i) => {
          const agent = !step.human;
          const bandTop = i === firstAgent;
          const bandBottom = i === lastAgent;
          return (
            <li
              key={step.title}
              className={`relative flex gap-4 pt-3 pb-8 lg:flex-col lg:items-center lg:text-center lg:gap-3 lg:pt-0 lg:pb-0 lg:px-2 ${
                agent
                  ? `max-lg:bg-white/[0.035] max-lg:-mx-3 max-lg:px-3 ${bandTop ? 'max-lg:rounded-t-xl' : ''} ${bandBottom ? 'max-lg:rounded-b-xl max-lg:pb-5' : ''}`
                  : ''
              }`}
            >
              {/* Segmento até o próximo nó: vertical no mobile, horizontal no desktop */}
              {i < last && (
                <span
                  aria-hidden="true"
                  className={`absolute top-8 w-0.5 h-full -translate-x-1/2 lg:translate-x-0 lg:left-1/2 lg:top-5 lg:h-0.5 lg:w-full lg:-translate-y-1/2 bg-gradient-to-b lg:bg-gradient-to-r from-[color:var(--brand-cyan)]/70 to-[color:var(--brand-blue)]/60 ${
                    agent ? 'left-8' : 'left-5'
                  }`}
                />
              )}

              <Node n={i + 1} human={step.human} />

              <div className="min-w-0 pt-1.5 lg:pt-0">
                {agent && bandTop && (
                  <p aria-hidden="true" className="lg:hidden mb-2 text-[11px] font-bold uppercase tracking-wider text-white/70">
                    {AGENT_BAND_LABEL}
                  </p>
                )}
                <h3 lang="pt-BR" className="text-base font-semibold text-white leading-snug hyphens-auto">
                  {step.title}
                </h3>
                <div className="mt-1.5">
                  {step.human ? <HumanBadge /> : <span className="sr-only">O agente executa</span>}
                </div>
                {!compact && (
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">{step.description}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-8 text-white/80 text-base">
        <strong className="text-white">Os agentes executam. Você decide nos gates.</strong> Entre um
        gate humano e outro, cada passo só avança se os gates automáticos estiverem verdes.
      </p>
    </div>
  );
}
