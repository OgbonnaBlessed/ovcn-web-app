import { Metadata } from "next";
import GiveClient from "./GiveClient";

export const metadata: Metadata = {
  title: "OVCN Give | OVCN",
  description: "Partner with us to impact lives",
  openGraph: {
    title: "OVCN Give | OVCN",
    description: "Partner with us to impact lives",
    url: "/give",
    siteName: "OVCN",
    images: [
      {
        url: "/partnership.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Give | OVCN",
    description: "Partner with us to impact lives",
    images: ["/partnership.png"],
  },
};

const page = () => {
  return <GiveClient />;
};

export default page;
