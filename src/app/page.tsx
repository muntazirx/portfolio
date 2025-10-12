import Section from "@/components/Section";
import { aboutParagraphs, experiences, certifications, writings } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import ExternalLink from "@/components/ExternalLink";
import CredlyBadge from "@/components/CredlyBadge";
import CertificationCard from "@/components/CertificationCard";

export default function Home() {
  return (
    <div id="home" className="pt-10 lg:pt-20">

      <Section id="about" title="About" hideTitle>
        <div className="space-y-4">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <Timeline items={experiences} />
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <ul className="space-y-3">
            {writings.map((w) => (
              <li key={`${w.title}-${w.year}`} className="flex items-baseline justify-between gap-4">
                <span>
                  <ExternalLink href={w.href ?? "#"}>{w.title}</ExternalLink>
                </span>
                <span className="text-foreground/60 text-sm">{w.year}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      
    </div>
  );
}
