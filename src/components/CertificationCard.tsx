import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  issuer: string;
  href: string;
  logoSrc: string;
  logoAlt?: string;
};

export default function CertificationCard({ title, issuer, href, logoSrc, logoAlt }: Props) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 transition-all">
      {/* Left Column: Logo */}
      <div className="flex flex-col items-start md:items-end pt-1">
        <div className="relative h-12 w-12 flex items-center justify-center rounded-md bg-foreground/5 border border-foreground/10 group-hover:border-accent/20 transition-colors">
          <Image src={logoSrc} alt={logoAlt ?? `${title} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
        </div>
      </div>
      
      {/* Right Column: Content */}
      <div className="relative flex flex-col">
        <h3 className="text-heading font-medium text-lg tracking-tight mb-1">
          <a 
            href={href} 
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-baseline gap-1 hover:text-accent transition-colors"
          >
            {title}
            <ArrowUpRight className="h-3.5 w-3.5 translate-y-0.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
          </a>
        </h3>
        <div className="text-sm text-muted">
          {issuer.includes("In progress") ? (
            <>
              {issuer.replace(" · In progress", "")}
              <span className="ml-1 text-accent-secondary font-medium"> · In progress</span>
            </>
          ) : (
            issuer
          )}
        </div>
      </div>
    </div>
  );
}
