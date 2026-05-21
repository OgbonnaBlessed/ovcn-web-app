import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "OVCN About | OVCN",
  description: "Get to know who we are",
  openGraph: {
    title: "OVCN About | OVCN",
    description: "Get to know who we are",
    url: "/about-us",
    siteName: "OVCN",
    images: [
      {
        url: "/about-us.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | OVCN",
    description: "Get to know who we are",
    images: ["/about-us.png"],
  },
};

const AboutUs = () => {
  return <AboutClient />;
};

export default AboutUs;
