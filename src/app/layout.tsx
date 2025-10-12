import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muntazir Mehdi — Cyber Security Researcher",
  description:
    "I research, emulate, and remediate attacks to help teams build secure systems.",
  metadataBase: new URL("https://your-domain.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Muntazir Mehdi — Cyber Security Researcher",
    description:
      "I research, emulate, and remediate attacks to help teams build secure systems.",
    type: "website",
    url: "https://your-domain.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muntazir Mehdi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muntazir Mehdi — Cyber Security Researcher",
    description: "I research, emulate, and remediate attacks to help teams build secure systems.",
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
        <Sidebar />
        <main id="main" className="lg:ml-[38%] xl:ml-[43%] 2xl:ml-[46%] pr-4 sm:pr-6 lg:pr-10 xl:pr-14 2xl:pr-20">{children}</main>
      </body>
    </html>
  );
}
