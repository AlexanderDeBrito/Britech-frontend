import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'wouter';
import { UserCheck, Bot, ArrowLeft, ArrowRight, MousePointerClick } from 'lucide-react';
import { DAG_FLOW } from '@/lib/dag';
import { ROUTES } from '@/lib/contact';

const TOTAL = DAG_FLOW.length;

/**
 * Fluxo do DAG como stepper interativo: 7 cards (abas) e um painel de detalhe.
 * O estado inicial é o passo 1, o mesmo que vai no HTML pré-renderizado.
 * Teclado: setas, Home e End movem entre os passos (padrão WAI-ARIA de abas).
 */
export function DagFlow({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabId = (i: number) => `${uid}-passo-${i + 1}`;
  const panelId = `${uid}-painel`;

  /** Ativa um passo e, na fileira rolável do mobile, traz o card para a vista sem mexer no scroll da página. */
  const go = (i: number, focus = false) => {
    const next = Math.max(0, Math.min(TOTAL - 1, i));
    setActive(next);
    const tab = tabRefs.current[next];
    const list = listRef.current;
    if (tab && list && list.scrollWidth > list.clientWidth) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      list.scrollTo({ left: tab.offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth' });
    }
    if (focus) tab?.focus({ preventScroll: true });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = {
      ArrowRight: i + 1,
      ArrowDown: i + 1,
      ArrowLeft: i - 1,
      ArrowUp: i - 1,
      Home: 0,
      End: TOTAL - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      go(keys[e.key], true);
    }
  };

  const step = DAG_FLOW[active];
  const progress = ((active + 1) / TOTAL) * 100;

  return (
    <div>
      <p className="mb-4 inline-flex items-center gap-2 text-sm text-white/75">
        <MousePointerClick size={16} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
        Clique nos passos para ver como funciona
      </p>

      {/* Barra de progresso até o passo ativo */}
      <div aria-hidden="true" className="mb-4 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0A84FF] transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        ref={listRef}
        role="tablist"
        aria-label="Passos do DAG"
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pt-1 pb-2 -mt-1 -mb-2 lg:grid lg:grid-cols-7 lg:overflow-visible [scrollbar-width:thin]"
      >
        {DAG_FLOW.map((s, i) => {
          const Icon = s.human ? UserCheck : Bot;
          const isActive = i === active;
          const lit = i <= active;
          return (
            <button
              key={s.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={tabId(i)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => go(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`group relative snap-start flex-shrink-0 w-[9.5rem] lg:w-auto text-left p-4 xl:p-5 rounded-2xl flex flex-col gap-3 cursor-pointer border-2 transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] ${
                isActive
                  ? 'bg-[#00D4FF]/15 border-[color:var(--brand-cyan)] shadow-[0_0_32px_-8px_rgba(0,212,255,0.6)]'
                  : lit
                    ? 'bg-[#00D4FF]/10 border-[color:var(--brand-cyan)]/60 hover:border-[color:var(--brand-cyan)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06]'
              } motion-safe:hover:-translate-y-0.5`}
            >
              <span className="flex items-center justify-between gap-2">
                <span className={`text-xs font-bold ${lit ? 'text-[color:var(--brand-cyan)]' : 'text-white/70'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon
                  size={18}
                  aria-hidden="true"
                  className={lit ? 'text-[color:var(--brand-cyan)]' : 'text-white/70'}
                />
              </span>
              <span lang="pt-BR" className="text-base font-semibold text-white leading-snug hyphens-auto">
                {s.title}
              </span>
              <span
                className={`mt-auto text-[11px] font-bold uppercase tracking-wider ${
                  lit ? 'text-[color:var(--brand-cyan)]' : 'text-white/70'
                }`}
              >
                {s.human ? 'Pessoa decide' : 'Agente executa'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Painel do passo ativo */}
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId(active)}
        aria-live="polite"
        className="mt-6 p-6 md:p-8 rounded-3xl glass-card"
      >
        <div key={active} className="animate-in fade-in slide-in-from-bottom-1 duration-300 motion-reduce:animate-none">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            {step.human ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D4FF]/15 border border-[color:var(--brand-cyan)]/50 text-sm font-semibold text-[color:var(--brand-cyan)]">
                <UserCheck size={16} aria-hidden="true" />
                Você decide aqui
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-sm font-semibold text-white/85">
                <Bot size={16} aria-hidden="true" className="text-[color:var(--brand-cyan)]" />
                Este passo é executado pelo DAG
              </span>
            )}
            <span className="text-sm text-white/70 tabular-nums">
              {`Passo ${active + 1} de ${TOTAL}`}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
          <p className={`text-white/80 leading-relaxed max-w-3xl ${compact ? '' : 'text-lg'}`}>
            {compact ? step.description : step.detail}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/15 bg-white/5 text-white cursor-pointer hover:bg-white/10 hover:border-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/5"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Anterior
          </button>
          {active < TOTAL - 1 ? (
            <button
              type="button"
              onClick={() => go(active + 1)}
              className="btn-brand inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
            >
              Próximo
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <Link
              href={ROUTES.diagnostico}
              className="btn-brand inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold no-underline"
            >
              Agendar diagnóstico gratuito
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

      <p className="mt-6 text-white/80 text-base">
        <strong className="text-white">Os agentes executam. Você decide nos gates.</strong> Entre um
        gate humano e outro, cada passo só avança se os gates automáticos estiverem verdes.
      </p>
    </div>
  );
}
