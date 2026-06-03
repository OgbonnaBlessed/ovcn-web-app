import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "OVCN About | OVCN",
  description: "Get to know who we are",
  openGraph: {
    title: "OVCN About | OVCN",
    description: "Get to know who we are",
    url: "https://omegavisionchristiannetwork.com/about-us",
    siteName: "OVCN",
    images: [
      {
        url: "https://omegavisionchristiannetwork.com/about-us.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OVCN About | OVCN",
    description: "Get to know who we are",
    images: ["https://omegavisionchristiannetwork.com/about-us.jpeg"],
  },
};

const AboutUs = () => {
  return <AboutClient />;
};

export default AboutUs;
