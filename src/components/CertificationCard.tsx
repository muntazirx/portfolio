type Props = {
  title: string;
  issuer: string;
  href: string;
  icon?: "btl1" | "ejpt" | "icca";
  logoSrc?: string;
  logoAlt?: string;
};

function Icon({ type }: { type: NonNullable<Props["icon"]> }) {
  const common = "h-7 w-7 text-heading";
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

import Image from "next/image";

export default function CertificationCard({ title, issuer, href, icon, logoSrc, logoAlt }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-panel block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-xl"
    >
      <div className="card rounded-xl p-4 transition-all duration-300 min-h-[100px]">
          <div className="flex items-center gap-4">
          <div className="shrink-0 h-7 w-7 flex items-center justify-center">
            {logoSrc ? (
              <Image src={logoSrc} alt={logoAlt ?? `${title} logo`} width={28} height={28} className="h-7 w-7 object-contain" />
            ) : icon ? (
              <Icon type={icon} />
            ) : null}
          </div>
          <div>
            <div className="font-semibold text-heading">{title}</div>
            <div className="text-foreground/70 text-sm">{issuer}</div>
          </div>
        </div>
      </div>
    </a>
  );
}


