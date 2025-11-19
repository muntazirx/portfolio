import { ExternalLink } from "lucide-react";

type Item = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  skills: string[];
  href?: string; // optional external link for the role/company
};

type Props = {
  items: Item[];
};

export default function Timeline({ items }: Props) {
  return (
    <div className="space-y-10">
      {items.map((item, idx) => (
        <div key={`${item.company}-${idx}`} className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 transition-all">
          {/* Date Column */}
          <div className="text-xs font-mono uppercase tracking-wider text-muted pt-1.5 md:text-right">
            <span className="whitespace-nowrap">{item.start} — {item.end}</span>
          </div>

          {/* Content Column */}
          <div className="relative">
            <div className="flex items-center gap-2">
              <h3 className="text-heading font-medium text-lg tracking-tight">
                {item.role}
              </h3>
              {item.href && item.href !== "#" && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={`Link to ${item.company}`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            
            <div className="text-accent font-medium text-sm mb-3">
              {item.company}
            </div>

            <p className="text-foreground/80 leading-relaxed text-sm mb-4">
              {item.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/70 border border-foreground/10 group-hover:border-accent/20 group-hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


