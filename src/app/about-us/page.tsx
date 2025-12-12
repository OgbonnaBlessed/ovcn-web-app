import type { Metadata } from "next";
import React from "react";
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
        url: "/about-us.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const AboutUs = () => {
    
    return <AboutClient />
};

export default AboutUs;