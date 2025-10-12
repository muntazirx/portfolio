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
    <ol className="relative ml-4 border-l border-foreground/10">
      {items.map((item, idx) => (
        <li key={`${item.company}-${idx}`} className="mb-10 ml-4 hover-panel">
          <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-accent" aria-hidden />
          <div className="card rounded-xl p-5 transition-all duration-300">
          <div className="flex items-start justify-between gap-4">
            <div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pl-0 pr-2 py-1 rounded border border-transparent group-hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 text-heading font-medium"
                  style={{letterSpacing: "-0.01em"}}
                >
                  {item.role}
                  <svg aria-hidden viewBox="0 0 24 24" className="h-[14px] w-[14px] opacity-80" fill="currentColor">
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"></path>
                    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"></path>
                  </svg>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 pl-0 pr-2 py-1 rounded border border-transparent group-hover:border-accent/60 text-heading font-medium" style={{letterSpacing: "-0.01em"}}>
                  {item.role}
                </span>
              )}
              <p className="text-muted mt-1 leading-tight">{item.company}</p>
            </div>
            <span className="text-foreground/60 text-xs whitespace-nowrap tracking-wide mt-[2px]">
              {item.start} — {item.end}
            </span>
          </div>
          <p className="mt-2 text-foreground/80 leading-relaxed">{item.summary}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.skills.map((s) => (
              <span
                key={s}
                className="text-xs px-2 py-1 rounded-full bg-foreground/5 border border-black/5 dark:border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
          </div>
        </li>
      ))}
    </ol>
  );
}


