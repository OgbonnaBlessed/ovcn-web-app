import React from "react";
import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: 'OVCN Services | OVCN',
    description: 'Worship with us'
}

const page = () => {
    return <ServicesClient />
};

export default page;