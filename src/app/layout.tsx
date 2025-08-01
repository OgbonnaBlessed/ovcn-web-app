import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/shared/AppSidebar";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Omega Vision Christian Network",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AppSidebar />
        <html lang="en" suppressHydrationWarning>
          <body className={`${dmSans.className}`}>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Toaster />
          </body>
        </html>
      </ThemeProvider>
    </SidebarProvider>
  );
}
