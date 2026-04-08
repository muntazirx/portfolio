import { socialLinks } from "@/data/site";
import { Github, Mail } from "lucide-react";
import type { ReactNode } from "react";

const ICON_BUTTON_SIZE = "h-10 w-10"; // click target size
const GLYPH_SIZE = "h-5 w-5"; // base glyph size

/* Modern LinkedIn icon (filled "in" mark) */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.47 2H3.53A1.45 1.45 0 0 0 2 3.47v17.06A1.45 1.45 0 0 0 3.47 22h17.06A1.45 1.45 0 0 0 22 20.53V3.47A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.34h-3v-9h2.89v1.23h.04a3.16 3.16 0 0 1 2.85-1.56c3.05 0 3.61 2 3.61 4.61v4.72Z" />
    </svg>
  );
}

/* Hack The Box icon (cube/box shape) */
function HackTheBoxIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  GitHub: <Github className={GLYPH_SIZE} />,
  LinkedIn: <LinkedInIcon className={GLYPH_SIZE} />,
  HackTheBox: <HackTheBoxIcon className={GLYPH_SIZE} />,
  Email: <Mail className={GLYPH_SIZE} />,
};

export default function SocialIcons() {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            target={link.name === "Email" ? undefined : "_blank"}
            rel={link.name === "Email" ? undefined : "noopener noreferrer"}
            className={`inline-flex ${ICON_BUTTON_SIZE} items-center justify-center rounded text-muted hover:text-accent hover:-translate-y-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40`}
            aria-label={link.name === "HackTheBox" ? "Hack The Box" : link.name}
          >
            {icons[link.name] ?? <span className="h-1.5 w-1.5 rounded-full bg-current" />}
          </a>
        </li>
      ))}
    </ul>
  );
}
