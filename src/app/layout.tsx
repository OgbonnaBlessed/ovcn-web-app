import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/AppSidebar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";

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
    url: "https://ovcn-web-app.vercel.app/",
    siteName: "OVCN",
    images: [
      {
        url: "https://ovcn-web-app.vercel.app/about-us.jpg",
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
    images: ["https://ovcn-web-app.vercel.app/about-us.jpg"],
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
        <SidebarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppSidebar />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Toaster />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
