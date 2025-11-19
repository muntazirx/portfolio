import Image from "next/image";

type Props = {
  title: string;
  year: string;
  readingTime?: string;
  imageSrc?: string;
  href: string;
};

export default function BlogCard({ title, year, readingTime, imageSrc, href }: Props) {
  return (
    <a
      href={href}
      className="group block rounded-xl border border-foreground/10 p-4 hover-panel focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div className="card rounded-xl p-3">
        <div className="flex items-center gap-4">
          <div className="h-16 w-24 rounded-md overflow-hidden bg-foreground/10 flex items-center justify-center">
            {imageSrc ? (
              <Image src={imageSrc} alt={title} width={120} height={80} className="h-16 w-24 object-contain" />
            ) : (
              <div className="h-8 w-12 bg-foreground/20 rounded" />
            )}
          </div>
          <div className="min-w-0">
            <div className="text-muted text-xs">{year}{readingTime ? ` · ${readingTime}` : ""}</div>
            <div className="mt-1 text-heading font-medium truncate">
              {title}
              <span className="inline-block align-middle opacity-0 group-hover:opacity-80 transition-opacity ml-1" aria-hidden>
                ↗
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}


