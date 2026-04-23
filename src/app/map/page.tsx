import { Metadata } from "next";
import MapClient from "./MapClient";

export const metadata: Metadata = {
  title: "OVCN Map | OVCN",
  description: "Explore our map locations",
  openGraph: {
    title: "OVCN Map | OVCN",
    description: "Explore our map locations",
    url: "https://omegavisionchristiannetwork.com/map/",
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

  twitter: {
    card: "summary_large_image",
    title: "Map | OVCN",
    description: "Explore our map locations",
    images: ["https://omegavisionchristiannetwork.com/about-us.jpg"],
  },
};

const page = () => {
  return <MapClient />;
};

export default page;
