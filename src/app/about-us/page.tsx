import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "OVCN About | OVCN",
  description: "Get to know who we are",
  openGraph: {
    title: "OVCN About | OVCN",
    description: "Get to know who we are",
    url: "https://ovcn-web-app.vercel.app/about-us/",
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

const AboutUs = () => {
  return <AboutClient />;
};

export default AboutUs;
