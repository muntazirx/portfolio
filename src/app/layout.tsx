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
  title: "Muntazir Mehdi — Cyber Security Researcher",
  description:
    "I support, secure, and optimize systems while continuously building my skills in cybersecurity and infrastructure.",
  metadataBase: new URL("https://your-domain.com"),
  icons: { icon: "/profile.png" },
  openGraph: {
    title: "Muntazir Mehdi — Cyber Security Researcher",
    description:
      "I support, secure, and optimize systems while continuously building my skills in cybersecurity and infrastructure.",
    type: "website",
    url: "https://your-domain.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muntazir Mehdi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muntazir Mehdi — Cyber Security Researcher",
    description:
      "I support, secure, and optimize systems while continuously building my skills in cybersecurity and infrastructure.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}> 
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:p-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-foreground/40 rounded"
        >
          Skip to content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
