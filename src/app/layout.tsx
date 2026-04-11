import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omega Vision Christian Network",
  description: "The Adullam of Destiny",
  openGraph: {
    title: "Omega Vision Christian Network",
    description: "The Adullam of Destiny",
    url: "https://omegavisionchristiannetwork.com/",
    siteName: "OVCN",
    images: [
      {
        url: "https://omegavisionchristiannetwork.com/about-us.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  // --- Twitter (X) Card metadata ---
  twitter: {
    card: "summary_large_image",
    title: "About Us | OVCN",
    description: "Get to know who we are",
    images: ["https://omegavisionchristiannetwork.com/about-us.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Toaster />
      </body>
    </html>
  );
}
