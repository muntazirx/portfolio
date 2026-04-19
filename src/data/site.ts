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
  "I'm a junior offensive security professional based in the Eastern Province of Saudi Arabia. Day-to-day I work as an IT analyst — handling infrastructure, endpoints, and access for a corporate environment — and spend the rest of my time on Hack The Box, Active Directory labs, and the offensive security stack.",
  "I earned my CPTS from Hack The Box in April 2026 after completing two pro labs — Dante and Zephyr. Currently working through CRTP, focused on Active Directory attack chains and Windows internals. BTL1 and eJPT came before that.",
  "For roles, I'm not fixed on one track — pentesting, red teaming, SOC/threat detection, or security engineering. As long as the work is hands-on and technical, I'm interested.",
];

export const focusAreas: string[] = [
  "Active Directory enumeration & attacks",
  "Internal network & web app pentesting",
  "Windows internals & privilege escalation",
  "Log analysis & detection fundamentals",
  "PowerShell, Python, C/C++",
];

export const roadmap: RoadmapItem[] = [
  {
    label: "CRTP",
    detail: "Active Directory attack tradecraft — Altered Security",
    status: "In progress",
  },
  {
    label: "Windows Internals + C/C++",
    detail: "Pluralsight and self-study — low-level foundations",
    status: "Next",
  },
  {
    label: "MalDev Academy",
    detail: "Malware development course",
    status: "Planned",
  },
  {
    label: "ODPC",
    detail: "Offensive Development Practitioner — White Knight Labs",
    status: "Planned",
  },
];

export const labs: LabItem[] = [
  {
    name: "Dante",
    platform: "Hack The Box Pro Labs",
    status: "Completed",
    note: "Internal network compromise — pivoting, post-exploitation, and privilege escalation across a corporate-style network.",
    href: "https://www.hackthebox.com/achievement/prolabs/1843606/8",
  },
  {
    name: "Zephyr",
    platform: "Hack The Box Pro Labs",
    status: "Completed",
    note: "Red team scenario focused on Active Directory attacks — Kerberos abuse, trust relationships, and lateral movement across multiple forests.",
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
      "Run IT and endpoint security for a 25-user corporate environment. Own user access and Active Directory hygiene, patching cadence, and AV/EDR coverage. First line on incidents — triage and resolve hardware, software, and network issues end-to-end.",
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
      "Ran vulnerability assessments and penetration tests against university lab infrastructure. Surfaced exploitable misconfigurations and weak services, then wrote them up with risk ratings and concrete remediation steps the IT team could action.",
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
      "Imaged and hardened lab workstations against a standard security baseline. Handled day-to-day hardware and software issues for students and staff, and wrote up procedures for the university's internal knowledge base.",
    skills: ["Imaging", "Security Baselines", "Troubleshooting", "Documentation"],
  },
];

export const resumeUrl = "/Muntazir-Mehdi-CV.pdf";
