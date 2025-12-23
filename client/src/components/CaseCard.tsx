import { ArrowRight } from 'lucide-react';

interface CaseCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

export function CaseCard({
  image,
  title,
  category,
  description,
  technologies,
}: CaseCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all hover:shadow-lg">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <div className="flex items-center gap-2 text-white font-semibold">
            Ver Detalhes
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-primary/10 rounded-full">
          <span className="text-xs font-semibold text-primary uppercase">{category}</span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
