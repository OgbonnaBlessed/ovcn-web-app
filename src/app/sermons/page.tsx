import { Metadata } from "next";
import SermonPageClient from "./SermonPageClient";

export const metadata: Metadata = {
  title: "OVCN Sermons | OVCN",
  description: "What God is saying now",
  openGraph: {
    title: "OVCN Sermons | OVCN",
    description: "What God is saying now",
    url: "https://omegavisionchristiannetwork.com/sermons",
    siteName: "OVCN",
    images: [
      {
        url: "https://omegavisionchristiannetwork.com/sermons.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OVCN Sermons | OVCN",
    description: "What God is saying now",
    images: ["https://omegavisionchristiannetwork.com/sermons.jpeg"],
  },
};

export default function SermonsPage() {
  return <SermonPageClient />;
}
