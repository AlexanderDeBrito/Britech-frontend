import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-8 bg-white border border-border rounded-lg hover:shadow-lg transition-all hover:border-primary/30 group">
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Icon size={28} className="text-primary" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
