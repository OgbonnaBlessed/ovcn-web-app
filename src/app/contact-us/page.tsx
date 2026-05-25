import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "OVCN Contact | OVCN",
  description: "You can reach us anytime",
  openGraph: {
    title: "OVCN Contact | OVCN",
    description: "You can reach us anytime",
    url: "/contact-us",
    siteName: "OVCN",
    images: [
      {
        url: "/contact.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | OVCN",
    description: "You can reach us anytime",
    images: ["/contact.png"],
  },
};

const page = () => {
  return <ContactClient />;
};

export default page;
