import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  issuer: string;
  href: string;
  icon?: "btl1" | "ejpt" | "icca";
  logoSrc?: string;
  logoAlt?: string;
};

function Icon({ type }: { type: NonNullable<Props["icon"]> }) {
  const common = "h-8 w-8 text-heading";
  if (type === "btl1") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <path d="M12 2l7 3v6c0 5.25-3.5 8.75-7 11-3.5-2.25-7-5.75-7-11V5l7-3z" />
      </svg>
    );
  }
  if (type === "ejpt") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
        <path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 17l-5.5 2.5 1-6.2L3 8.9 9 8l3-6z" />
      </svg>
    );
  }
  // icca
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
      <path d="M7 17h10a4 4 0 0 0 0-8 5 5 0 0 0-9.7-1.7A4.5 4.5 0 0 0 7 17z" />
    </svg>
  );
}

export default function CertificationCard({ title, issuer, href, icon, logoSrc, logoAlt }: Props) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 transition-all">
      {/* Left Column: Logo */}
      <div className="flex flex-col items-start md:items-end pt-1">
        <div className="relative h-12 w-12 flex items-center justify-center rounded-md bg-foreground/5 border border-foreground/10 group-hover:border-accent/20 transition-colors">
          {logoSrc ? (
            <Image src={logoSrc} alt={logoAlt ?? `${title} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
          ) : icon ? (
            <Icon type={icon} />
          ) : null}
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


