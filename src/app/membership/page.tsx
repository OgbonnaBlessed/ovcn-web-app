import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "OVCN Membership | OVCN",
  description: "Become a member & grow in purpose",
  openGraph: {
    title: "OVCN Membership | OVCN",
    description: "Become a member & grow in purpose",
    url: "https://omegavisionchristiannetwork.com/membership",
    siteName: "OVCN",
    images: [
      {
        url: "https://omegavisionchristiannetwork.com/membership.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OVCN Membership  | OVCN",
    description: "Become a member & grow in purpose",
    images: ["https://omegavisionchristiannetwork.com/membership.jpeg"],
  },
};

export default function MinistriesPage() {
  return <MembershipClient />;
}
