import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  issuer: string;
  href: string;
  icon?: "btl1" | "ejpt" | "icca";
  logoSrc?: string;
  logoAlt?: string;
};

function Icon({ type }: { type: NonNullable<Props["icon"]> }) {
  const common = "h-6 w-6 text-heading";
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-foreground/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
    >
      <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-foreground/5 border border-foreground/10 group-hover:border-accent/20 transition-colors">
        {logoSrc ? (
          <Image src={logoSrc} alt={logoAlt ?? `${title} logo`} width={24} height={24} className="h-6 w-6 object-contain" />
        ) : icon ? (
          <Icon type={icon} />
        ) : null}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="font-medium text-heading truncate group-hover:text-accent transition-colors">
          {title}
        </div>
        <div className="text-sm text-muted truncate">
          {issuer}
        </div>
      </div>

      <ChevronRight className="h-4 w-4 text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
    </a>
  );
}


