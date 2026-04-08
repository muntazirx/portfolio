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
  title: "Muntazir Mehdi — Security Researcher",
  description:
    "CPTS-certified Security Researcher focused on red teaming, Windows internals, AV/EDR evasion, and malware research.",
  keywords: ["cybersecurity", "security researcher", "penetration testing", "red team", "CPTS", "CRTP", "BTL1", "eJPT", "offensive security", "Windows internals", "malware development", "AV evasion", "EDR evasion", "Hack The Box"],
  metadataBase: new URL("https://muntazirmehdi.com"),
  alternates: {
    canonical: "./",
  },
  icons: { icon: "/profile.png" },
  openGraph: {
    title: "Muntazir Mehdi — Security Researcher",
    description:
      "CPTS-certified Security Researcher focused on red teaming, Windows internals, and malware research.",
    type: "website",
    url: "https://muntazirmehdi.com",
    siteName: "Muntazir Mehdi",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Muntazir Mehdi" }],
  },
  twitter: {
    card: "summary",
    title: "Muntazir Mehdi — Security Researcher",
    description:
      "CPTS-certified Security Researcher focused on red teaming, Windows internals, and malware research.",
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
    jobTitle: "Security Researcher",
    description: "CPTS-certified Security Researcher focused on red teaming, Windows internals, and malware research.",
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
