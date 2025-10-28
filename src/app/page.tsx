import Section from "@/components/Section";
import { aboutParagraphs, experiences, writings } from "@/data/site";
import BlogCard from "@/components/BlogCard";
import Timeline from "@/components/Timeline";
import CertificationCard from "@/components/CertificationCard";

export default function Home() {
  const highlightPhrases = [
    "IT Support Specialist",
    "Microsoft 365",
    "Active Directory",
    "Azure AD",
    "Windows",
    "Linux",
    "Intune",
    "VPN",
    "Wi‑Fi",
    "MFA",
    "EDR",
    "CPTS",
    "Hack The Box",
    "TryHackMe",
    "homelab",
  ];

  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlightText = (text: string) => {
    let parts: (string | React.JSX.Element)[] = [text];
    for (const phrase of highlightPhrases) {
      const regex = new RegExp(`(${escapeRegExp(phrase)})`, "gi");
      parts = parts.flatMap((part, i) => {
        if (typeof part !== "string") return [part];
        const split = part.split(regex);
        return split.map((chunk, idx) =>
          regex.test(chunk)
            ? (
                <span key={`${phrase}-${i}-${idx}`} className="text-heading font-medium">
                  {chunk}
                </span>
              )
            : chunk
        );
      });
    }
    return parts;
  };

  return (
    <div id="home" className="pt-10 lg:pt-20">
      <h1 className="sr-only">Muntazir Mehdi — Cyber Security Researcher</h1>

      <Section id="about" title="About" hideTitle>
        <div className="space-y-4">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{highlightText(p)}</p>
          ))}
        </div>
        <div className="mt-6">
          <div className="text-muted text-sm mb-2">Here are a few technologies I’ve been working with recently:</div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-foreground/90">
            {[
              "Windows & Linux administration",
              "Active Directory & Microsoft 365",
              "Docker & virtualization",
              "Network configuration & troubleshooting",
              "Scripting for repeatable fixes (PowerShell/Bash)",
            ].map((t) => (
              <li key={t} className="before:content-['▹'] before:text-accent before:mr-2">{t}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <Timeline items={experiences} />
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CertificationCard
            title="Certified Penetration Testing Specialist (CPTS)"
            issuer="Hack The Box · In progress"
            href="https://academy.hackthebox.com/preview/certifications/HTB-CPTS"
            logoSrc="/logos/hackthebox.jpeg"
            logoAlt="CPTS"
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

      <Section id="blog" title="Blog">
        {writings.length === 0 ? (
          <p className="text-foreground/70">No posts yet.</p>
        ) : (
          <div className="space-y-4">
            {writings.map((w) => (
              <BlogCard
                key={`${w.title}-${w.year}`}
                title={w.title}
                year={w.year}
                readingTime={w.readingTime}
                imageSrc={w.imageSrc}
                href={w.slug ? `/blog/${w.slug}` : w.href ?? "#"}
              />
            ))}
          </div>
        )}
      </Section>

      
    </div>
  );
}
