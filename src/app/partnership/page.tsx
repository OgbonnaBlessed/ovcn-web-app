import { Metadata } from "next";
import GiveClient from "./PartnershipClient";

export const metadata: Metadata = {
  title: "OVCN Give | OVCN",
  description: "Partner with us",
};

const page = () => {
  return <GiveClient />;
};

export default page;
