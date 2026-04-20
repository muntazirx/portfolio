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
    skills: ["Imaging", "Security Baselines", "Troubleshooting", "Documentation"],
  },
];

export const resumeUrl = "/Muntazir-Mehdi-CV.pdf";
