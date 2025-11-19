import { ExternalLink as ExternalLinkIcon } from "lucide-react";
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
      className={`inline-flex items-center gap-1 hover:underline underline-offset-4 ${className ?? ""}`}
    >
      {children}
      <span className="sr-only">(opens in new tab)</span>
      <ExternalLinkIcon className="h-[14px] w-[14px] opacity-80" />
    </a>
  );
}


