import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import AppShell from "@/components/AppShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muntazir Mehdi — Offensive Security",
  description:
    "Junior offensive security professional based in Saudi Arabia. CPTS, BTL1, eJPT, CRTP in progress. Pentesting, red teaming, and detection work.",
  keywords: [
    "cybersecurity",
    "offensive security",
    "penetration testing",
    "red team",
    "CPTS",
    "CRTP",
    "BTL1",
    "eJPT",
    "Active Directory",
    "Hack The Box",
    "Saudi Arabia cybersecurity",
    "SOC",
    "threat detection",
    "security engineering",
  ],
  metadataBase: new URL("https://muntazirmehdi.com"),
  alternates: { canonical: "./" },
  icons: { icon: "/profile.png" },
  openGraph: {
    title: "Muntazir Mehdi — Offensive Security",
    description:
      "Junior offensive security professional based in Saudi Arabia. CPTS-certified, working through CRTP, hands-on with Active Directory and HTB Pro Labs.",
    type: "website",
    url: "https://muntazirmehdi.com",
    siteName: "Muntazir Mehdi",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Muntazir Mehdi" }],
  },
  twitter: {
    card: "summary",
    title: "Muntazir Mehdi — Offensive Security",
    description:
      "Junior offensive security professional based in Saudi Arabia. CPTS, BTL1, eJPT, CRTP in progress.",
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
    jobTitle: "Offensive Security",
    description:
      "Junior offensive security professional based in Saudi Arabia. CPTS-certified, working through CRTP.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
    url: "https://muntazirmehdi.com",
    sameAs: [
      "https://github.com/muntazirx",
      "https://www.linkedin.com/in/mntzr",
      "https://app.hackthebox.com/users/1843606",
    ],
  };

  return (
    <html lang="en" className="bg-background" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
