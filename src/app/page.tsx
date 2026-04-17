import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import CertificationCard from "@/components/CertificationCard";
import BlogCard from "@/components/BlogCard";
import {
  aboutParagraphs,
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
                  <span className="text-muted"> — {step.detail}</span>
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
          <CertificationCard
            title="Certified Penetration Testing Specialist (CPTS)"
            issuer="Hack The Box · Apr 2026"
            href="https://www.credly.com/badges/b77c41bd-d54f-41af-ba0e-48692865e7ff/public_url"
            logoSrc="/logos/cpts.png"
            logoAlt="CPTS"
          />
          <CertificationCard
            title="Certified Red Team Professional (CRTP)"
            issuer="Altered Security · In progress"
            href="https://www.alteredsecurity.com/adlab"
            logoSrc="/logos/crtp.png"
            logoAlt="CRTP"
          />
          <CertificationCard
            title="Blue Team Level 1 (BTL1)"
            issuer="Security Blue Team"
            href="https://www.credly.com/badges/fbfa4599-ebcd-467a-aa16-fac609d322a4"
            logoSrc="/logos/btl1.png"
            logoAlt="Security Blue Team BTL1"
          />
          <CertificationCard
            title="Junior Penetration Tester (eJPT)"
            issuer="INE / eLearnSecurity"
            href="https://certs.ine.com/1be389d0-2d14-44bd-bbb5-feac61489abc"
            logoSrc="/logos/ejpt.png"
            logoAlt="eJPT"
          />
          <CertificationCard
            title="INE Certified Cloud Associate (ICCA)"
            issuer="INE"
            href="https://certs.ine.com/a2a7eee8-429a-4de2-8b3c-85fc51772a71"
            logoSrc="/logos/icca.png"
            logoAlt="ICCA"
          />
        </div>
      </Section>

      <Section id="labs" number="04" title="labs">
        <p className="text-foreground/80 leading-relaxed text-sm mb-8">
          Where I spend most of my off-hours — end-to-end attack chains against
          realistic corporate and Active Directory environments.
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
