import type { Metric } from '@/lib/dag';

export function MetricCard({ metric, highlight = false }: { metric: Metric; highlight?: boolean }) {
  return (
    <div
      className={`p-6 rounded-2xl flex flex-col gap-3 ${
        highlight ? 'glass-card brand-glow border-[color:var(--brand-blue)]/40' : 'glass-card'
      }`}
    >
      <p className="text-sm font-medium text-white/80">{metric.label}</p>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-xl font-semibold text-white/70 line-through decoration-white/40">
          {metric.before}
        </span>
        <span aria-hidden="true" className="text-white/70">→</span>
        <span className="sr-only">para</span>
        <span className="text-4xl md:text-5xl font-extrabold text-gradient-brand">{metric.after}</span>
      </div>
      {metric.note && (
        <span className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-cyan)]">
          {metric.note}
        </span>
      )}
    </div>
  );
}

export function MetricGrid({ metrics, highlightFirst = true }: { metrics: Metric[]; highlightFirst?: boolean }) {
  return (
    <div className={`grid grid-cols-1 gap-5 ${metrics.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {metrics.map((m, i) => (
        <MetricCard key={m.label} metric={m} highlight={highlightFirst && i < Math.min(2, metrics.length - 1)} />
      ))}
    </div>
  );
}
