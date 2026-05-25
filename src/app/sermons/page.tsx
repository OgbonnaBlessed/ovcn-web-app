import { Metadata } from "next";
import SermonPageClient from "./SermonPageClient";

export const metadata: Metadata = {
  title: "OVCN Sermons | OVCN",
  description: "What God is saying now",
  openGraph: {
    title: "OVCN Sermons | OVCN",
    description: "What God is saying now",
    url: "/sermons",
    siteName: "OVCN",
    images: [
      {
        url: "/sermon-icon.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sermons | OVCN",
    description: "What God is saying now",
    images: ["/sermon-icon.jpg"],
  },
};

export default function SermonsPage() {
  return <SermonPageClient />;
}
