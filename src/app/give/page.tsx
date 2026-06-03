import { Metadata } from "next";
import GiveClient from "./GiveClient";

export const metadata: Metadata = {
  title: "OVCN Give | OVCN",
  description: "Partner with us to impact lives",
  openGraph: {
    title: "OVCN Give | OVCN",
    description: "Partner with us to impact lives",
    url: "https://omegavisionchristiannetwork.com/give",
    siteName: "OVCN",
    images: [
      {
        url: "https://omegavisionchristiannetwork.com/give.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OVCN Give | OVCN",
    description: "Partner with us to impact lives",
    images: ["https://omegavisionchristiannetwork.com/give.jpeg"],
  },
};

const page = () => {
  return <GiveClient />;
};

export default page;
