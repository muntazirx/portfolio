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
    "I support, secure, and optimize systems while continuously building my skills in cybersecurity and infrastructure.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muntazirx" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "Hello! I’m Muntazir, a Cybersecurity graduate currently working as an IT Support Specialist. I enjoy building, securing, and experimenting with technology, and I’m driven by a desire to understand how systems connect and how to protect them.",
  "Since graduating, I’ve been gaining hands-on experience in IT support — assisting users, managing systems, and learning the real-world side of infrastructure and security. I’m also pursuing the CPTS certification on Hack The Box and building my own homelab, where I explore tools, containerize services, and automate secure self-hosted environments.",
];

export const experiences: ExperienceItem[] = [
  {
    company: "GVS Industrial Company · Dammam, Saudi Arabia",
    role: "IT Support Analyst",
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


