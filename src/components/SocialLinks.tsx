import type { SocialLink } from "@/data/site";

type Props = {
  links: SocialLink[];
  className?: string;
};

export default function SocialLinks({ links, className }: Props) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.name} className="inline-block mr-4 last:mr-0">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 rounded-sm"
            aria-label={link.name}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}


