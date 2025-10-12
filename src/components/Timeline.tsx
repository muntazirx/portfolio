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
        <li key={`${item.company}-${idx}`} className="mb-10 ml-4 hover-panel group">
          <div className="absolute -left-2 top-1 w-3 h-3 rounded-full bg-accent" aria-hidden />
          <div className="card rounded-xl p-5 transition-all duration-300">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-heading font-medium" style={{letterSpacing: "-0.01em"}}>
                {item.role}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="unstyled inline-flex items-center gap-1 mt-1 text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded group-hover:underline underline-offset-4 group-hover:text-foreground"
                >
                  {item.company}
                  <svg aria-hidden viewBox="0 0 24 24" className="h-[14px] w-[14px] opacity-0 group-hover:opacity-60 transition-opacity" fill="currentColor">
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"></path>
                    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"></path>
                  </svg>
                </a>
              ) : (
                <p className="text-muted mt-1 leading-tight group-hover:text-foreground transition-colors">{item.company}</p>
              )}
            </div>
            <span className="text-muted text-xs whitespace-nowrap tracking-wide mt-[2px]">
              {item.start} — {item.end}
            </span>
          </div>
          <p className="mt-2 text-foreground leading-relaxed">{item.summary}</p>
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


