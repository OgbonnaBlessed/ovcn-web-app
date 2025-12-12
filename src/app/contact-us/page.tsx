import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "OVCN Contact | OVCN",
  description: "You can reach us anytime",
};

const page = () => {
  return <ContactClient />;
};

export default page;
