import type { Metadata } from "next";
import JoinClient from "./JoinClient";

export const metadata: Metadata = {
  title: "OVCN Join | OVCN",
  description:
    "Explore Omega Vision Christian Network ministries, departments and upcoming programs.",
  openGraph: {
    title: "OVCN Join | OVCN",
    description:
      "Explore Omega Vision Christian Network ministries, departments and upcoming programs.",
    url: "/join",
    siteName: "OVCN",
    images: [
      {
        url: "/ministries.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVCN Join | OVCN",
    description:
      "Explore Omega Vision Christian Network ministries, departments and upcoming programs.",
    images: ["/ministries.png"],
  },
};

export default function MinistriesPage() {
  return <JoinClient />;
}
