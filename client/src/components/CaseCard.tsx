import { ArrowUpRight } from 'lucide-react';

interface CaseCardProps {
  image: string;
  title: string;
  client?: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
}

export function CaseCard({
  image,
  title,
  client,
  category,
  description,
  technologies,
  link,
}: CaseCardProps) {
  const card = (
    <div className="group h-full flex flex-col overflow-hidden rounded-2xl glass-card hover:border-[color:var(--brand-blue)]/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#0B1220]">
        <img
          src={image}
          alt={`${title}${client ? ` — projeto desenvolvido pela Britech para ${client}` : ''}`}
          width={900}
          height={585}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B1220]/80 backdrop-blur border border-[color:var(--brand-blue)]/40">
          <span className="text-[11px] font-bold text-[color:var(--brand-cyan)] uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {client && (
          <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">
            {client}
          </span>
        )}
        <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-[color:var(--brand-cyan)] transition-colors">
          {title}
        </h3>

        <p className="mb-4 text-white/65 text-sm leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-white/5 text-white/80 rounded-md border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {link && (
          <div className="flex items-center gap-2 text-[color:var(--brand-cyan)] font-semibold text-sm group-hover:gap-3 transition-all">
            Visitar projeto
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline block h-full">
        {card}
      </a>
    );
  }

  return card;
}
