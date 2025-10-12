import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function ExternalLink({ href, children, className, ariaLabel }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        ariaLabel ?? (typeof children === "string" ? `${children} (opens in new tab)` : undefined)
      }
      className={`inline-flex items-center gap-1 text-accent hover:underline underline-offset-4 ${className ?? ""}`}
    >
      {children}
      <span className="sr-only">(opens in new tab)</span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-[14px] w-[14px] opacity-80"
        fill="currentColor"
      >
        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"></path>
        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"></path>
      </svg>
    </a>
  );
}


