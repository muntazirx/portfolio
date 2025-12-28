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
  title: "Cyber Security Practitioner",
  tagline:
    "I build to understand. I break to learn.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muntazirx" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "I'm an IT Support Analyst with a Cyber Security degree. Right now, I spend my days fixing endpoints, managing Active Directory, and keeping systems running. But that's only half the story.",
  "After hours, I'm in my home lab—breaking into machines, studying for CPTS, and building out attack scenarios. I self-host everything I can because there's no better way to learn than by running your own infrastructure and then trying to compromise it.",
  "Currently digging into: Offensive Security, Linux internals, and malware development.",
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


