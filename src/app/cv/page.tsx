import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, MapPin, Mail, ExternalLink } from "lucide-react";
import {
  certifications,
  contactEmail,
  cvSummary,
  education,
  experiences,
  labs,
  resumeUrl,
  roadmap,
  siteMeta,
  skillGroups,
  socialLinks,
} from "@/data/site";

export const metadata: Metadata = {
  title: "CV — Muntazir Mehdi",
  description:
    "Curriculum Vitae for Muntazir Mehdi. Junior offensive security professional. CPTS, BTL1, eJPT, CRTP in progress. Eastern Province, Saudi Arabia.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV — Muntazir Mehdi",
    description:
      "Curriculum Vitae for Muntazir Mehdi. CPTS-certified, working through CRTP, hands-on with HTB Pro Labs.",
    type: "profile",
    url: "https://muntazirmehdi.com/cv",
  },
};

const formatRange = (start: string, end: string) => `${start} – ${end}`;

const stripProtocol = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function CvPage() {
  const github = socialLinks.find((s) => s.name === "GitHub");
  const linkedin = socialLinks.find((s) => s.name === "LinkedIn");
  const htb = socialLinks.find((s) => s.name === "HackTheBox");

  return (
    <div className="cv-page max-w-3xl mx-auto px-6 sm:px-8 py-12 lg:py-20">
      {/* Top action bar — hidden when printing */}
      <div className="cv-actions flex items-center justify-between mb-10 print:hidden">
        <Link
          href="/"
          className="unstyled inline-flex items-center gap-2 mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          back
        </Link>
        <Link
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="Muntazir-Mehdi-CV.pdf"
          className="unstyled inline-flex items-center gap-2 mono text-xs uppercase tracking-widest text-foreground border border-accent/60 px-4 py-2 rounded-md hover:bg-accent/10 hover:text-accent hover:border-accent transition-all"
        >
          <Download className="h-3.5 w-3.5" />
          download.pdf
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12">
        <div className="mono text-xs text-accent mb-3">
          <span className="text-muted">$</span> cat cv.md
        </div>
        <h1 className="text-[2.25rem] sm:text-[2.6rem] font-semibold tracking-tight text-heading leading-none">
          {siteMeta.name}
        </h1>
        <div className="mt-3 mono text-sm text-accent">{siteMeta.role}</div>
        <div className="mt-1 mono text-xs text-muted flex items-center gap-1.5">
          <MapPin className="h-3 w-3" />
          {siteMeta.location}
        </div>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-6 mono text-xs text-muted">
          <li className="flex items-center gap-2">
            <Mail className="h-3 w-3 text-accent/80" />
            <a
              href={`mailto:${contactEmail}`}
              className="unstyled hover:text-accent transition-colors"
            >
              {contactEmail}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <ExternalLink className="h-3 w-3 text-accent/80" />
            <a
              href="https://muntazirmehdi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="unstyled hover:text-accent transition-colors"
            >
              muntazirmehdi.com
            </a>
          </li>
          {github && (
            <li className="flex items-center gap-2">
              <ExternalLink className="h-3 w-3 text-accent/80" />
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="unstyled hover:text-accent transition-colors"
              >
                {stripProtocol(github.href)}
              </a>
            </li>
          )}
          {linkedin && (
            <li className="flex items-center gap-2">
              <ExternalLink className="h-3 w-3 text-accent/80" />
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="unstyled hover:text-accent transition-colors"
              >
                {stripProtocol(linkedin.href)}
              </a>
            </li>
          )}
          {htb && (
            <li className="flex items-center gap-2">
              <ExternalLink className="h-3 w-3 text-accent/80" />
              <a
                href={htb.href}
                target="_blank"
                rel="noopener noreferrer"
                className="unstyled hover:text-accent transition-colors"
              >
                hackthebox / muntazir
              </a>
            </li>
          )}
        </ul>
      </header>

      {/* Summary */}
      <CvSection title="summary">
        <p className="text-foreground/90 leading-relaxed">{cvSummary}</p>
      </CvSection>

      {/* Experience */}
      <CvSection title="experience">
        <div className="space-y-8">
          {experiences.map((job) => (
            <article key={`${job.company}-${job.start}`}>
              <header className="mb-3">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="text-heading font-medium tracking-tight">
                    {job.role}
                    <span className="text-foreground/70 font-normal">
                      {" "}at{" "}
                    </span>
                    {job.company.split(" · ")[0]}
                  </h3>
                  <div className="mono text-xs text-muted whitespace-nowrap">
                    {formatRange(job.start, job.end)}
                  </div>
                </div>
                {job.company.includes(" · ") && (
                  <div className="mono text-xs text-muted mt-0.5">
                    {job.company.split(" · ")[1]}
                  </div>
                )}
              </header>
              {job.bullets && (
                <ul className="space-y-1.5 text-sm text-foreground/85 leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b} className="cv-bullet pl-5 relative">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </CvSection>

      {/* Certifications */}
      <CvSection title="certifications">
        <ul className="space-y-2 text-sm">
          {certifications.map((c) => (
            <li
              key={c.shortName}
              className="grid grid-cols-[auto_1fr_auto] gap-x-3 items-baseline"
            >
              <span className="mono text-xs text-accent w-12">
                {c.shortName}
              </span>
              <span className="text-foreground/90">
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="unstyled hover:text-accent transition-colors"
                  >
                    {c.title}
                  </a>
                ) : (
                  c.title
                )}
                <span className="text-muted">, {c.issuer}</span>
              </span>
              <span className="mono text-[0.7rem] text-muted whitespace-nowrap">
                {c.date ?? c.status ?? ""}
              </span>
            </li>
          ))}
        </ul>
      </CvSection>

      {/* Labs */}
      <CvSection title="labs">
        <ul className="space-y-3 text-sm">
          {labs.map((lab) => (
            <li key={lab.name}>
              <div className="flex items-baseline gap-2">
                <span className="text-heading font-medium">{lab.name}</span>
                <span className="mono text-xs text-muted">/ {lab.platform}</span>
              </div>
              {lab.note && (
                <p className="text-foreground/80 leading-relaxed mt-1">
                  {lab.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </CvSection>

      {/* What's next */}
      <CvSection title="what's next">
        <ol className="space-y-2 text-sm">
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
      </CvSection>

      {/* Skills */}
      <CvSection title="skills">
        <dl className="space-y-3 text-sm">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4"
            >
              <dt className="mono text-xs uppercase tracking-wider text-muted pt-0.5">
                {group.label}
              </dt>
              <dd className="text-foreground/85 leading-relaxed">
                {group.items.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </CvSection>

      {/* Education */}
      <CvSection title="education">
        <div className="text-sm">
          <div className="text-heading font-medium">{education.degree}</div>
          <div className="mono text-xs text-muted mt-0.5">
            {education.school}, {education.location}
          </div>
          {education.awardedBy && (
            <div className="mono text-xs text-muted mt-0.5">
              Awarded by {education.awardedBy}
              {education.awardedByLocation
                ? `, ${education.awardedByLocation}`
                : ""}
            </div>
          )}
        </div>
      </CvSection>

      {/* Footer */}
      <footer className="mt-16 pt-6 border-t border-foreground/10 mono text-[0.7rem] text-muted flex items-center justify-between">
        <span>last build: {new Date().toISOString().split("T")[0]}</span>
        <span className="print:hidden">
          rendered from{" "}
          <Link
            href="/"
            className="unstyled hover:text-accent transition-colors"
          >
            muntazirmehdi.com
          </Link>
        </span>
      </footer>
    </div>
  );
}

function CvSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="cv-heading mono text-xs uppercase tracking-[0.25em] text-muted mb-4 flex items-center gap-3">
        <span className="text-accent/70">#</span>
        <span>{title}</span>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </h2>
      {children}
    </section>
  );
}
