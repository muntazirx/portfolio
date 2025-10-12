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
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Muntazir Mehdi — Cyber Security Researcher",
    description:
      "I research, emulate, and remediate attacks to help teams build secure systems.",
    type: "website",
    url: "https://example.com",
  },
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
        <main id="main" className="lg:ml-[40%] xl:ml-[45%] 2xl:ml-[48%]">{children}</main>
      </body>
    </html>
  );
}
