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
  description?: string; // SEO description for blog posts
  keywords?: string[]; // SEO keywords for the post
  year: string;
  slug?: string; // internal blog slug (e.g. "/blog/my-post")
  imageSrc?: string; // thumbnail path in public
  readingTime?: string; // e.g., "5 min read"
  href?: string; // external link fallback
};

export const siteMeta = {
  name: "Muntazir Mehdi",
  title: "Cyber Security Practitioner",
  tagline:
    "I secure systems, troubleshoot infrastructure, and actively develop offensive security skills through hands-on labs and simulations.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/muntazirx" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muntazirx" },
  { name: "Email", href: "mailto:info@muntazirmehdi.com" },
];

export const aboutParagraphs: string[] = [
  "Hello! I’m Muntazir, a Cybersecurity graduate currently working as an IT Support Analyst. I am building my career path toward Offensive Security, driven by the belief that deep knowledge of infrastructure and defense is the prerequisite for effective exploitation.",
  "In my current role, I am gaining hands-on experience with enterprise systems and troubleshooting. I complement this operational foundation by actively training for the CPTS certification and conducting security research in self-hosted environments, where I simulate attack vectors and test advanced methodologies.",
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

export const certifications: CertificationItem[] = [
  { name: "eJPT" },
  { name: "BTL1" },
  { name: "RH124" },
];

export const writings: WritingItem[] = [
  {
    title: "How I Scored 95% in the Blue Team Level 1 (BTL1) Exam on My Second Attempt",
    description: "My journey from failing the BTL1 exam to scoring 95% on my second attempt. Learn about my preparation strategy, key mistakes, and tips for success.",
    keywords: ["BTL1", "Blue Team Level 1", "cybersecurity certification", "Security Blue Team", "SOC analyst", "incident response", "Splunk", "Autopsy", "Wireshark", "penetration testing", "cybersecurity exam"],
    year: "2025",
    slug: "btl1-95-second-attempt",
    imageSrc: "/logos/btl1.png",
    readingTime: "5 min read",
  },
];

// Resume download link
export const resumeUrl = "/Syed%20Muntazir%20Mehdi%20CV.pdf"; // Public path must be URL-encoded


