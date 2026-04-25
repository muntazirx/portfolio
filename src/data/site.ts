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
  bullets?: string[];
  skills: string[];
  href?: string;
};

export type LabItem = {
  name: string;
  platform: string;
  status: "Completed" | "In progress";
  note?: string;
  href?: string;
};

export type RoadmapItem = {
  label: string;
  detail: string;
  status: "In progress" | "Next" | "Planned";
};

export type ExperienceBullet = string;

export type CertificationItem = {
  title: string;
  shortName: string;
  issuer: string;
  date?: string;
  status?: string;
  href: string;
  logoSrc: string;
  logoAlt?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  awardedBy?: string;
  awardedByLocation?: string;
};

export const siteMeta = {
  name: "Muntazir Mehdi",
  role: "Offensive Security",
  location: "Eastern Province, Saudi Arabia",
  tagline: "Turned 'access denied' into a career goal",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mntzr" },
  { name: "HackTheBox", href: "https://app.hackthebox.com/users/1843606" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "IT by day, offensive security by night. Based in Saudi Arabia, working as an IT analyst. Most of what I actually care about in security happens after work, on HTB, in AD labs, or whatever I'm reading that week.",
  "Got my CPTS in April 2026 after clearing Dante and Zephyr on HTB. Those were the labs that made things click for me. Currently grinding through CRTP. After that it's Windows internals and C/C++, then MalDev Academy, ODPC, and eventually OSCP. It's a long list, I know.",
  "This site is mostly for me. Writing stuff down keeps me honest about what I actually understand versus what I just skimmed. If you're on the same path, maybe some of it is useful.",
];

export const focusAreas: string[] = [
  "Active Directory & enterprise attack chains",
  "Windows internals & low-level exploitation",
  "Malware development & AV/EDR evasion",
  "C/C++, PowerShell, Python",
];

export const roadmap: RoadmapItem[] = [
  {
    label: "CRTP",
    detail: "Active Directory attack tradecraft, Altered Security",
    status: "In progress",
  },
  {
    label: "Windows Internals + C/C++",
    detail: "Pluralsight and self-study, the unsexy groundwork",
    status: "Next",
  },
  {
    label: "MalDev Academy",
    detail: "Malware dev from the ground up",
    status: "Planned",
  },
  {
    label: "ODPC",
    detail: "Offensive Development Practitioner, White Knight Labs",
    status: "Planned",
  },
  {
    label: "OSCP",
    detail: "OffSec, the one everyone asks about",
    status: "Planned",
  },
];

export const labs: LabItem[] = [
  {
    name: "Dante",
    platform: "Hack The Box Pro Labs",
    status: "Completed",
    note: "My first pro lab. Big, messy, and the one that taught me to take proper notes because without them you end up three pivots deep with no clue where you are.",
    href: "https://www.hackthebox.com/achievement/prolabs/1843606/8",
  },
  {
    name: "Zephyr",
    platform: "Hack The Box Pro Labs",
    status: "Completed",
    note: "Pure AD. This is where Kerberoasting, ACL abuse, and cross-forest trusts stopped being textbook terms and started actually making sense.",
    href: "https://www.hackthebox.com/achievement/prolabs/1843606/17",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "GVS Industrial Company · Dammam, Saudi Arabia",
    role: "IT Analyst",
    start: "Jun 2025",
    end: "Present",
    summary:
      "Run IT for a 25-person office. Active Directory, patching, endpoints, AV coverage, and first response for whatever breaks on any given day. Small enough team that I own most of it end to end, which is honestly how I've been learning the defensive side.",
    bullets: [
      "Run Active Directory, patching, endpoint security, and AV/EDR coverage for a 25-user environment.",
      "Own the user access lifecycle end to end: provisioning, deprovisioning, group policy, and password resets.",
      "First responder on incidents. Triage and resolve hardware, software, and network issues without escalation.",
    ],
    skills: [
      "Active Directory",
      "Endpoint Security",
      "Patch Management",
      "Access Controls",
      "Incident Response",
    ],
  },
  {
    company: "Asia Pacific University · Kuala Lumpur, Malaysia",
    role: "Security Analyst",
    start: "Jan 2024",
    end: "Apr 2024",
    summary:
      "Ran vuln assessments and pentests against the university's lab infrastructure. Found the exploitable stuff, wrote it up with risk ratings and fix steps, and handed it back to IT. First time I did this kind of work for something real.",
    bullets: [
      "Ran vulnerability assessments and penetration tests against university lab infrastructure.",
      "Identified exploitable misconfigurations and weak services. Turned findings into risk-rated reports with concrete remediation paths.",
      "Wrote technical writeups for both IT staff and faculty stakeholders.",
    ],
    skills: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Technical Reporting",
      "Remediation",
    ],
  },
  {
    company: "Asia Pacific University · Kuala Lumpur, Malaysia",
    role: "Cyber Security Internship",
    start: "Sep 2023",
    end: "Jan 2024",
    summary:
      "Imaged and hardened the lab machines, fixed whatever broke for students and staff, wrote procedures that went into APU's internal knowledge base. Sounds boring on paper but it's where I learned how enterprise IT actually holds together.",
    bullets: [
      "Imaged and hardened lab workstations to a standardised security baseline.",
      "Resolved hardware and software tickets for students and staff.",
      "Authored procedures for the university's internal IT knowledge base.",
    ],
    skills: ["Imaging", "Security Baselines", "Troubleshooting", "Documentation"],
  },
];

export const cvSummary =
  "IT analyst by day, offensive security after hours. CPTS-certified, with two HTB Pro Labs cleared (Dante and Zephyr). Working through CRTP now, with Windows internals, C/C++, MalDev Academy, ODPC, and OSCP lined up after that. Open to offensive security, red team, or detection-engineering roles in Saudi Arabia where the work is actually technical and not just running reports.";

export const certifications: CertificationItem[] = [
  {
    title: "Certified Penetration Testing Specialist",
    shortName: "CPTS",
    issuer: "Hack The Box",
    date: "Apr 2026",
    href: "https://www.credly.com/badges/b77c41bd-d54f-41af-ba0e-48692865e7ff/public_url",
    logoSrc: "/logos/cpts.png",
    logoAlt: "CPTS",
  },
  {
    title: "Certified Red Team Professional",
    shortName: "CRTP",
    issuer: "Altered Security",
    status: "in progress",
    href: "https://www.alteredsecurity.com/adlab",
    logoSrc: "/logos/crtp.png",
    logoAlt: "CRTP",
  },
  {
    title: "Blue Team Level 1",
    shortName: "BTL1",
    issuer: "Security Blue Team",
    status: "95%, second attempt",
    href: "https://www.credly.com/badges/fbfa4599-ebcd-467a-aa16-fac609d322a4",
    logoSrc: "/logos/btl1.png",
    logoAlt: "BTL1",
  },
  {
    title: "Junior Penetration Tester",
    shortName: "eJPT",
    issuer: "INE / eLearnSecurity",
    href: "https://certs.ine.com/1be389d0-2d14-44bd-bbb5-feac61489abc",
    logoSrc: "/logos/ejpt.png",
    logoAlt: "eJPT",
  },
  {
    title: "INE Certified Cloud Associate",
    shortName: "ICCA",
    issuer: "INE",
    href: "https://certs.ine.com/a2a7eee8-429a-4de2-8b3c-85fc51772a71",
    logoSrc: "/logos/icca.png",
    logoAlt: "ICCA",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Offensive",
    items: [
      "Active Directory attacks",
      "Internal network pentesting",
      "Web app testing",
      "Privilege escalation",
      "Lateral movement",
      "Post-exploitation",
    ],
  },
  {
    label: "Defensive",
    items: [
      "Log analysis",
      "SIEM workflows",
      "Disk and traffic forensics",
      "Incident response fundamentals",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Nmap",
      "Burp Suite",
      "BloodHound",
      "NetExec",
      "Impacket",
      "Metasploit",
      "Mimikatz",
      "Splunk",
      "Autopsy",
      "Wireshark",
    ],
  },
  {
    label: "Systems",
    items: ["Windows internals", "Active Directory", "Linux", "Endpoint hardening"],
  },
  {
    label: "Languages",
    items: ["PowerShell", "Python", "C/C++"],
  },
];

export const education: EducationItem = {
  degree: "BSc (Hons) Cyber Security",
  school: "Asia Pacific University (APU)",
  location: "Kuala Lumpur, Malaysia",
  awardedBy: "De Montfort University",
  awardedByLocation: "Leicester, United Kingdom",
};

export const contactEmail = "info@muntazirmehdi.com";

export const resumeUrl = "/Muntazir-Mehdi-CV.pdf";
