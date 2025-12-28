import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  year: string;
  readingTime?: string;
  description?: string;
  imageSrc?: string;
  href: string;
};

export default function BlogCard({ title, year, readingTime, description, imageSrc, href }: Props) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 transition-all">
      {/* Left Column: Badge OR Year */}
      <div className="flex flex-col items-start md:items-end pt-1">
        {imageSrc ? (
          <div className="relative h-24 w-32 md:w-full">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain object-left-top md:object-right-top"
            />
          </div>
        ) : (
          <div className="text-xs font-mono uppercase tracking-wider text-muted md:text-right">
            <span className="whitespace-nowrap">{year}</span>
          </div>
        )}
      </div>

      {/* Content Column */}
      <div className="relative flex flex-col">
        <h3 className="text-heading font-medium text-lg tracking-tight mb-1">
          <Link href={href} className="unstyled group/link inline-flex items-baseline gap-1 hover:text-accent transition-colors">
            {title}
            <ArrowUpRight className="h-3.5 w-3.5 translate-y-0.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
          </Link>
        </h3>
        
        <div className="text-muted text-xs mb-3 font-mono flex items-center gap-2">
          {imageSrc && (
            <>
              <span>{year}</span>
              <span className="text-foreground/20">·</span>
            </>
          )}
          {readingTime && <span>{readingTime}</span>}
        </div>

        {description && (
          <p className="text-foreground/80 leading-relaxed text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
