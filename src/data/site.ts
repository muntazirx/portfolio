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
  tagline: "Trying, failing, learning, repeating.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mntzr" },
  { name: "HackTheBox", href: "https://app.hackthebox.com/users/1843606" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "I work as an IT analyst in Saudi Arabia. Outside work, most of my time goes into HTB, AD labs, and studying whatever I am currently weak at.",
  "I completed CPTS in April 2026 after finishing Dante and Zephyr on HTB. Those labs changed how I approach learning. Right now I am focused on CRTP and building a stronger AD foundation.",
  "From there I am moving into Windows internals and C/C++, then MalDev Academy, ODPC, and finally OSCP. This site is my personal notebook. I use it to track what I can actually do, not just what I have read.",
];

export const focusAreas: string[] = [
  "Active Directory attack paths and privilege escalation",
  "Windows internals and endpoint behavior",
  "Offensive tooling with PowerShell, Python, and C/C++",
  "Malware development and AV/EDR evasion roadmap",
];

export const roadmap: RoadmapItem[] = [
  {
    label: "CRTP",
    detail: "Active Directory attack tradecraft, Altered Security",
    status: "In progress",
  },
  {
    label: "Windows Internals + C/C++",
    detail: "Pluralsight and self-study",
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
    note: "My first pro lab. Big and messy. It taught me to keep clean notes because three pivots later you can lose track fast.",
    href: "https://www.hackthebox.com/achievement/prolabs/1843606/8",
  },
  {
    name: "Zephyr",
    platform: "Hack The Box Pro Labs",
    status: "Completed",
    note: "Pure AD. This is where Kerberoasting, ACL abuse, and cross-forest trusts stopped being theory and started making practical sense.",
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
      "I run IT for a 25-person office. That includes Active Directory, patching, endpoints, AV coverage, and first response for whatever breaks. The team is small enough that I own most of it end to end, which is how I have been learning the defensive side properly.",
    bullets: [
      "Manage Active Directory, patching, endpoint security, and AV/EDR coverage for a 25-user office.",
      "Own the full access lifecycle: provisioning, deprovisioning, group policy hygiene, and password resets.",
      "Handle first-response IT incidents and resolve hardware, software, and network issues without escalation.",
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
      "I ran vuln assessments and pentests against the university lab infrastructure. I found exploitable misconfigurations, wrote risk-rated reports with fix steps, and handed them back to IT. It was my first time doing this kind of work for a real environment.",
    bullets: [
      "Performed vulnerability assessments and penetration tests against university lab infrastructure.",
      "Identified exploitable misconfigurations and weak services, then produced risk-rated reports with remediation steps.",
      "Delivered technical writeups for both IT staff and faculty stakeholders.",
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
      "I imaged and hardened lab machines, fixed day-to-day issues for students and staff, and wrote procedures for APU's internal knowledge base. It sounds basic on paper, but it is where I learned how enterprise IT actually holds together.",
    bullets: [
      "Imaged and hardened lab workstations to a standardised security baseline.",
      "Resolved day-to-day hardware and software tickets for students and staff.",
      "Documented repeatable procedures for the university's internal IT knowledge base.",
    ],
    skills: ["Imaging", "Security Baselines", "Troubleshooting", "Documentation"],
  },
];

export const cvSummary =
  "IT analyst by day, offensive security after hours. CPTS-certified, with Dante and Zephyr completed on HTB Pro Labs. Currently working through CRTP, followed by Windows internals and C/C++, then MalDev Academy, ODPC, and OSCP. Open to offensive security, red team, and detection engineering roles in Saudi Arabia where the work is technical and hands-on.";

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

// Analytics. Privacy-friendly, no cookies, no consent banner needed.
// Sign up at https://www.goatcounter.com (free for personal sites), then
// paste your site code below. Stats live at https://<code>.goatcounter.com.
// In your GoatCounter site settings, enable "Allow access to public stats"
// so per-post view counts can render on each blog page.
// Leave blank to disable analytics entirely.
export const analytics = {
  goatcounterCode: "" as string,
};
