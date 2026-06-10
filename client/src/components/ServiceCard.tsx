import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl glass-card hover:border-[color:var(--brand-blue)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(10,132,255,0.4)]">
      {/* Glow no hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0A84FF]/0 to-[#00D4FF]/0 group-hover:from-[#0A84FF]/10 group-hover:to-[#00D4FF]/5 transition-all duration-500 pointer-events-none" />

      <div className="relative">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A84FF]/20 to-[#00D4FF]/10 border border-[color:var(--brand-blue)]/30">
          <Icon size={26} className="text-[color:var(--brand-cyan)]" />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>

        <p className="text-white/65 leading-relaxed text-[15px]">{description}</p>
      </div>
    </div>
  );
}
