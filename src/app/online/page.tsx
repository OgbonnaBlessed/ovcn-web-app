import { Metadata } from "next";
import OnlineClient from "./OnlineClient";

export const metadata: Metadata = {
  title: "OVCN Online | OVCN",
  description: "Join us online",
  openGraph: {
    title: "OVCN Online | OVCN",
    description: "Join us online",
    url: "https://omegavisionchristiannetwork.com/online/",
    siteName: "OVCN",
    images: [
      {
        url: "https://omegavisionchristiannetwork.com/sermon-icon.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  // --- Twitter (X) Card metadata ---
  twitter: {
    card: "summary_large_image",
    title: "Online | OVCN",
    description: "Join us online",
    images: ["https://omegavisionchristiannetwork.com/sermon-icon.jpg"],
  },
};

const page = () => {
  return <OnlineClient />;
};

export default page;
