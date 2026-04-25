import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import CertificationCard from "@/components/CertificationCard";
import BlogCard from "@/components/BlogCard";
import {
  aboutParagraphs,
  certifications,
  experiences,
  focusAreas,
  labs,
  roadmap,
} from "@/data/site";
import { getAllPosts } from "@/lib/mdx";
import { ArrowUpRight } from "lucide-react";

export default async function Home() {
  const posts = await getAllPosts();

  const highlightPhrases = [
    "CPTS",
    "CRTP",
    "BTL1",
    "eJPT",
    "Hack The Box",
    "Active Directory",
    "Windows internals",
    "Dante",
    "Zephyr",
  ];

  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `(${highlightPhrases.map(escapeRegExp).join("|")})`,
    "g"
  );

  const highlightText = (text: string) => {
    const parts = text.split(pattern);
    return parts.map((part, i) =>
      pattern.test(part) ? (
        <span key={i} className="text-heading font-medium">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div id="home" className="pt-10 lg:pt-20">
      <h1 className="sr-only">Muntazir Mehdi — Offensive Security</h1>

      <Section id="about" number="01" title="about">
        <div className="space-y-4">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{highlightText(p)}</p>
          ))}
        </div>
        <div className="mt-8">
          <div className="mono text-xs uppercase tracking-widest text-muted mb-3">
            ~/focus
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-foreground/90">
            {focusAreas.map((t) => (
              <li key={t} className="focus-bullet">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <div className="mono text-xs uppercase tracking-widest text-muted mb-3">
            ~/next
          </div>
          <ol className="space-y-2.5 text-sm">
            {roadmap.map((step, i) => (
              <li
                key={step.label}
                className="grid grid-cols-[1.5rem_1fr_auto] gap-x-3 items-baseline"
              >
                <span className="mono text-xs text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-foreground/90">
                  <span className="text-heading font-medium">{step.label}</span>
                  <span className="text-muted">, {step.detail}</span>
                </span>
                <span
                  className={`mono text-[0.65rem] uppercase tracking-wider whitespace-nowrap ${
                    step.status === "In progress"
                      ? "text-accent"
                      : step.status === "Next"
                        ? "text-[color:var(--accent-warm)]"
                        : "text-muted"
                  }`}
                >
                  {step.status}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="experience" number="02" title="experience">
        <Timeline items={experiences} />
      </Section>

      <Section id="certifications" number="03" title="certifications">
        <div className="space-y-8">
          {certifications.map((c) => {
            const issuerLine = c.date
              ? `${c.issuer} · ${c.date}`
              : c.status
                ? `${c.issuer} · ${c.status}`
                : c.issuer;
            return (
              <CertificationCard
                key={c.shortName}
                title={`${c.title} (${c.shortName})`}
                issuer={issuerLine}
                href={c.href}
                logoSrc={c.logoSrc}
                logoAlt={c.logoAlt ?? c.shortName}
              />
            );
          })}
        </div>
      </Section>

      <Section id="labs" number="04" title="labs">
        <p className="text-foreground/80 leading-relaxed text-sm mb-8">
          Where I actually spend time outside of coursework. Full attack
          chains, not isolated boxes.
        </p>
        <ul className="space-y-8">
          {labs.map((lab) => (
            <li
              key={lab.name}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6"
            >
              <div className="mono text-xs uppercase tracking-wider text-muted pt-1.5 md:text-right">
                {lab.status}
              </div>
              <div>
                <h3 className="text-heading font-medium text-lg tracking-tight">
                  {lab.href ? (
                    <a
                      href={lab.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="unstyled group/link inline-flex items-baseline gap-1 hover:text-accent transition-colors"
                    >
                      {lab.name}
                      <ArrowUpRight className="h-3.5 w-3.5 translate-y-0.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    lab.name
                  )}
                </h3>
                <div className="text-accent text-sm mb-2">{lab.platform}</div>
                {lab.note && (
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {lab.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="blog" number="05" title="writing">
        {posts.length === 0 ? (
          <p className="text-foreground/70">No posts yet.</p>
        ) : (
          <div className="space-y-10">
            {posts.map((w) => (
              <BlogCard
                key={w.slug}
                title={w.title}
                year={w.year}
                readingTime={w.readingTime}
                description={w.description}
                imageSrc={w.imageSrc}
                href={`/blog/${w.slug}`}
              />
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
