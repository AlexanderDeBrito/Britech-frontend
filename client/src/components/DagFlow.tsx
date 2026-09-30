import { UserCheck, Bot } from 'lucide-react';
import { DAG_FLOW } from '@/lib/dag';

/**
 * Fluxo do DAG em linha (desktop) ou coluna (mobile), com os gates humanos
 * destacados. Lista ordenada para leitores de tela.
 */
export function DagFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
        {DAG_FLOW.map((step, i) => {
          const Icon = step.human ? UserCheck : Bot;
          return (
            <li
              key={step.title}
              className={`relative p-5 rounded-2xl flex flex-col gap-3 ${
                step.human
                  ? 'bg-[#00D4FF]/10 border-2 border-[color:var(--brand-cyan)]/70'
                  : 'glass-card'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-white/70">{String(i + 1).padStart(2, '0')}</span>
                <Icon
                  size={18}
                  aria-hidden="true"
                  className={step.human ? 'text-[color:var(--brand-cyan)]' : 'text-white/70'}
                />
              </div>
              <h3 lang="pt-BR" className="text-base font-semibold text-white leading-snug hyphens-auto">{step.title}</h3>
              {!compact && <p className="text-sm text-white/75 leading-relaxed">{step.description}</p>}
              <span
                className={`mt-auto text-[11px] font-bold uppercase tracking-wider ${
                  step.human ? 'text-[color:var(--brand-cyan)]' : 'text-white/70'
                }`}
              >
                {step.human ? 'Pessoa decide' : 'Agente executa'}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-white/80 text-base">
        <strong className="text-white">Os agentes executam. Você decide nos gates.</strong> Entre um
        gate humano e outro, cada passo só avança se os gates automáticos estiverem verdes.
      </p>
    </div>
  );
}
