export type SocialLink = {
  name: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  skills: string[];
  href?: string;
};

export type ProjectItem = {
  title: string;
  summary: string;
  tech: string[];
  href?: string;
  imageAlt?: string;
};

export type CertificationItem = {
  name: string;
  issuer?: string;
  year?: string;
  href?: string;
};

export type WritingItem = {
  title: string;
  year: string;
  slug?: string; // internal blog slug (e.g. "/blog/my-post")
  imageSrc?: string; // thumbnail path in public
  readingTime?: string; // e.g., "5 min read"
  href?: string; // external link fallback
};

export const siteMeta = {
  name: "Muntazir Mehdi",
  title: "Cyber Security Researcher",
  tagline:
    "I research, emulate, and remediate attacks to help teams build secure systems.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muntazirx" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "I’m a Cyber Security Researcher focused on blue‑team operations, threat hunting, DFIR, and security testing. I analyze telemetry across hosts, networks, and cloud platforms to detect adversary activity, emulate attacker tradecraft, and help teams harden their systems.",
  "I currently work as an IT Support Specialist at Vision Industrial Company (Dammam, Saudi Arabia), delivering first‑line support, securing endpoints, and managing user accounts. I set up new PCs, install and update applications, and ensure systems remain stable and secure while escalating complex issues to senior staff.",
  "Previously at Asia Pacific University of Technology & Innovation (APU) in Kuala Lumpur, I served as a Security Analyst performing vulnerability assessments and penetration testing in the lab environment, produced clear reports with remediation steps, worked as an IT Intern / Lab Security Analyst imaging devices and troubleshooting hardware/software, and completed SOC Analyst Training using MSSGard SIEM to run searches, create content, and triage alerts.",
];

export const experiences: ExperienceItem[] = [
  {
    company: "Vision Industrial Company · Dammam, Saudi Arabia",
    role: "IT Support Specialist",
    start: "Jun 2025",
    end: "Present",
    summary:
      "Delivered first‑line support, fixed common hardware/software issues, set up new PCs, installed and updated applications, ensured systems were secure, and handled account management (create/disable/reset passwords). Logged support requests and escalated complex problems to senior IT staff.",
    skills: ["Windows", "Endpoint Security", "Account Management", "Helpdesk", "Troubleshooting"],
    href: "#",
  },
  {
    company: "Asia Pacific University of Technology & Innovation · Kuala Lumpur, Malaysia",
    role: "Security Analyst",
    start: "Jan 2024",
    end: "Apr 2024",
    summary:
      "Performed vulnerability assessments and penetration testing on APU lab devices, identified and resolved vulnerabilities, and delivered clear reports with findings and remediation steps.",
    skills: ["Vulnerability Assessment", "Penetration Testing", "Reporting", "Remediation"],
    href: "#",
  },
  {
    company: "Asia Pacific University of Technology & Innovation · Kuala Lumpur, Malaysia",
    role: "IT Intern · Lab Security Analyst",
    start: "Sep 2023",
    end: "Jan 2024",
    summary:
      "Deployed and supported lab PCs, imaged devices, configured standard accounts, troubleshot hardware and software issues, and created documentation and user guides for the APU Knowledgebase.",
    skills: ["Imaging", "Account Configuration", "Troubleshooting", "Documentation"],
    href: "#",
  },
];

export const certifications: CertificationItem[] = [
  { name: "eJPT" },
  { name: "BTL1" },
  { name: "RH124" },
];

export const writings: WritingItem[] = [
  {
    title: "How I Scored 95% in the Blue Team Level 1 (BTL1) Exam on My Second Attempt",
    year: "2025",
    slug: "btl1-95-second-attempt",
    imageSrc: "/logos/btl1.png",
    readingTime: "5 min read",
  },
];


