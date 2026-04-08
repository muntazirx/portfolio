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

export const siteMeta = {
  name: "Muntazir Mehdi",
  title: "Security Researcher",
  tagline:
    "I break things to understand how they work.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mntzr" },
  { name: "HackTheBox", href: "https://app.hackthebox.com/users/1843606" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "I'm an IT Support Analyst with a Cyber Security degree and a recently earned CPTS certification. By day, I manage endpoints, Active Directory, and keep systems running — but my real focus is on the offensive side.",
  "Outside of work, I study how Windows works under the hood, practice attack chains on platforms like Hack The Box, and research how malware operates at a low level. I'm drawn to the intersection of system internals and offensive tradecraft — especially AV and EDR evasion.",
  "Currently studying for: CRTP (Certified Red Team Professional) while digging deeper into Windows internals, malware development, and picking up C/C++ along the way.",
];

export const experiences: ExperienceItem[] = [
  {
    company: "GVS Industrial Company · Dammam, Saudi Arabia",
    role: "IT Support Analyst",
    start: "Jun 2025",
    end: "Present",
    summary:
      "Delivered first‑line support, fixed common hardware/software issues, set up new PCs, installed and updated applications, ensured systems were secure, and handled account management (create/disable/reset passwords). Logged support requests and escalated complex problems to senior IT staff.",
    skills: ["Active Directory", "Windows Security", "Endpoint Protection", "Incident Triage", "Hardware Configuration"],
  },
  {
    company: "Asia Pacific University of Technology & Innovation · Kuala Lumpur, Malaysia",
    role: "Security Analyst",
    start: "Jan 2024",
    end: "Apr 2024",
    summary:
      "Performed vulnerability assessments and penetration testing on APU lab devices, identified and resolved vulnerabilities, and delivered clear reports with findings and remediation steps.",
    skills: ["Vulnerability Assessment", "Penetration Testing", "Reporting", "Remediation"],
  },
  {
    company: "Asia Pacific University of Technology & Innovation · Kuala Lumpur, Malaysia",
    role: "IT Intern · Lab Security Analyst",
    start: "Sep 2023",
    end: "Jan 2024",
    summary:
      "Deployed and supported lab PCs, imaged devices, configured standard accounts, troubleshot hardware and software issues, and created documentation and user guides for the APU Knowledgebase.",
    skills: ["Imaging", "Account Configuration", "Troubleshooting", "Documentation"],
  },
];

// Resume download link
export const resumeUrl = "/Muntazir-Mehdi-CV.pdf";
