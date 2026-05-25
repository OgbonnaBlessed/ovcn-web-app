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
<<<<<<< HEAD
        url: "/contact.png",
=======
        url: "/about-us.jpg",
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
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
<<<<<<< HEAD
    images: ["/contact.png"],
=======
    images: ["/about-us.jpg"],
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
  },
};

const page = () => {
  return <ContactClient />;
};

export default page;
