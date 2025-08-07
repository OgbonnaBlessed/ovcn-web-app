import type { Metadata } from "next";
import React from "react";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: 'OVCN About | OVCN',
    description: 'Get to know who we are'
}

const AboutUs = () => {
    
    return <AboutClient />
};

export default AboutUs;