import { socialLinks } from "@/data/site";
import { Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

const ICON_BUTTON_SIZE = "h-10 w-10"; // click target size
const GLYPH_SIZE = "h-5 w-5"; // base glyph size

const icons: Record<string, ReactNode> = {
  GitHub: <Github className={GLYPH_SIZE} />,
  LinkedIn: <Linkedin className={GLYPH_SIZE} />,
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
            aria-label={link.name}
          >
            {icons[link.name] ?? <span className="h-1.5 w-1.5 rounded-full bg-current" />}
          </a>
        </li>
      ))}
    </ul>
  );
}


