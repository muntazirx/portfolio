import { socialLinks } from "@/data/site";

const icons: Record<string, JSX.Element> = {
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 .5a12 12 0 0 0-3.793 23.396c.6.111.82-.261.82-.58 0-.287-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.808 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.624-5.478 5.922.43.37.815 1.096.815 2.21 0 1.595-.015 2.882-.015 3.276 0 .321.217.696.826.578A12.001 12.001 0 0 0 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zm7 0h3.84v2.184h.054c.535-1.013 1.842-2.082 3.794-2.082 4.059 0 4.806 2.674 4.806 6.152V24h-4v-7.422c0-1.77-.032-4.046-2.466-4.046-2.469 0-2.846 1.93-2.846 3.924V24h-4V8z" />
    </svg>
  ),
  CodePen: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2 1 8v8l11 6 11-6V8L12 2zm7.5 6.964-4.714-2.57L12.75 8.5l3.643 2.429 3.107-1.965zM12 10.607 8.357 8.178 4.25 10.143 8.893 13 12 11.036 15.107 13 19.75 10.143 15.643 8.178 12 10.607zM11.25 8.5 9.214 6.393 4.5 8.964l3.107 1.965L11.25 8.5zM4.25 13.857l4.107 2.036L11.25 14.5l-3.143-2.107-3.857 1.464zM12.75 14.5l2.893 1.393 4.357-2.036-3.107-1.964L12.75 14.5z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM18 6.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  ),
  Goodreads: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12.05 17.9c2.96 0 4.3-1.81 4.3-4.5V2h-1.72v1.72h-.04c-.63-1.22-2-2-3.62-2C7.13 1.72 5 4.22 5 8c0 3.8 2.24 6.3 5.97 6.3 1.63 0 3.02-.76 3.62-1.9h.04v1c0 2-1.1 3.1-3.22 3.1-1.53 0-2.68-.63-3.06-1.5H6.5c.6 1.79 2.45 2.9 5.55 2.9zM12 12.84c-2.12 0-3.62-1.74-3.62-4.34 0-2.57 1.5-4.34 3.62-4.34 2.1 0 3.62 1.77 3.62 4.34 0 2.6-1.52 4.34-3.62 4.34z" />
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
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label={link.name}
          >
            {icons[link.name] ?? <span className="h-1.5 w-1.5 rounded-full bg-current" />}
          </a>
        </li>
      ))}
    </ul>
  );
}


