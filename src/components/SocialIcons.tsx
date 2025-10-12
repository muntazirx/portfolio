import { socialLinks } from "@/data/site";
import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.793 23.396c.6.111.82-.261.82-.58 0-.287-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.808 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.624-5.478 5.922.43.37.815 1.096.815 2.21 0 1.595-.015 2.882-.015 3.276 0 .321.217.696.826.578A12.001 12.001 0 0 0 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.184h.054c.535-1.013 1.842-2.082 3.794-2.082 4.059 0 4.806 2.674 4.806 6.152V24h-4v-7.422c0-1.77-.032-4.046-2.466-4.046-2.469 0-2.846 1.93-2.846 3.924V24h-4V8z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden>
      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2 .5v.4l8 5.6 8-5.6v-.4H4zm16 2.8-7.37 5.16a2 2 0 0 1-2.26 0L3 8.3V19h17.99L20 8.3z" />
    </svg>
  ),
};

export default function SocialIcons() {
  return (
    <ul className="flex items-center gap-4 text-muted">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            target={link.name === "Email" ? undefined : "_blank"}
            rel={link.name === "Email" ? undefined : "noopener noreferrer"}
            className="inline-flex h-10 w-10 items-center justify-center rounded hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label={link.name}
          >
            {icons[link.name] ?? <span className="h-1.5 w-1.5 rounded-full bg-current" />}
          </a>
        </li>
      ))}
    </ul>
  );
}


