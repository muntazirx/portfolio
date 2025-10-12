type Props = {
  title: string;
  summary: string;
  tech: string[];
  href?: string;
};

export default function ProjectCard({ title, summary, tech, href }: Props) {
  const content = (
    <div className="border border-foreground/10 rounded-lg p-4 h-full hover:shadow-sm transition-shadow">
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-foreground/80 text-sm">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-foreground/5">
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 rounded-lg"
      >
        {content}
      </a>
    );
  }
  return content;
}


