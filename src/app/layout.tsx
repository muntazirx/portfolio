import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppShell from "@/components/AppShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muntazir Mehdi — Cyber Security Practitioner",
  description:
    "I build to understand. I break to learn. IT Support Analyst exploring offensive security through home labs, CPTS training, and hands-on experimentation.",
  keywords: ["cybersecurity", "IT support", "penetration testing", "blue team", "security analyst", "cyber security practitioner", "BTL1", "eJPT", "CPTS", "SOC analyst", "offensive security", "home lab"],
  metadataBase: new URL("https://muntazirmehdi.com"),
  alternates: {
    canonical: "./",
  },
  icons: { icon: "/profile.png" },
  openGraph: {
    title: "Muntazir Mehdi — Cyber Security Practitioner",
    description:
      "I build to understand. I break to learn. IT Support Analyst exploring offensive security through home labs and hands-on experimentation.",
    type: "website",
    url: "https://muntazirmehdi.com",
    siteName: "Muntazir Mehdi",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Muntazir Mehdi" }],
  },
  twitter: {
    card: "summary",
    title: "Muntazir Mehdi — Cyber Security Practitioner",
    description:
      "I build to understand. I break to learn. IT Support Analyst exploring offensive security through home labs and hands-on experimentation.",
    images: ["/profile.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muntazir Mehdi",
    jobTitle: "Cyber Security Practitioner",
    description: "I build to understand. I break to learn. IT Support Analyst exploring offensive security through home labs and hands-on experimentation.",
    url: "https://muntazirmehdi.com",
    sameAs: [
      "https://github.com/muntazirx",
      "https://www.linkedin.com/in/muntazirx",
    ],
  };

  return (
    <html lang="en" className="bg-background" suppressHydrationWarning={true}>
      <body className={`${inter.variable} antialiased`}> 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:p-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-foreground/40 rounded z-50"
        >
          Skip to content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
