"use client";

import { Play } from "lucide-react";
import React from "react";
import ServicesCarousel from "@/components/shared/ServicesCarousel";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const sundayImages = ["/sunday-1.jpeg", "/sunday-2.jpeg", "/sunday-3.jpeg"];
const wednesdayImages = ["/wednesday-1.jpeg", "/wednesday-2.jpeg", "/wednesday-3.jpeg"];
const mmmImages = ["/mmm-1.jpeg", "/mmm-2.jpeg", "/mmm-3.jpeg"];

const ServicesClient = () => {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 1,
                ease: [0.42, 0, 0.58, 1], // easeOut
            },
        }),
    };

    return (
        <>
            <div className="w-full min-w-screen overflow-x-hidden scroll-smooth px-8 lg:px-20">
                <div id="sunday-services"  className="py-28">
                    {/* Header Section */}
                    <section className="flex flex-col gap-14 mb-24">
                        <div className="flex md:flex-row flex-col gap-10 md:items-end items-start justify-between w-full">
                            <div className="flex flex-col md:gap-4 gap-2">
                                <motion.h1 
                                    custom={0}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    className="lg:text-7xl text-5xl font-bold"
                                >
                                    Our Services
                                </motion.h1>
                                <motion.p 
                                    custom={1}
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    className="sm:text-lg text-sm lg:w-xl w-[20rem] max-w-full"
                                >
                                    You can be a part of us and be present in any of our services at Omega Vision Christian Network
                                </motion.p>
                            </div>

                            <Link 
                                href="/"
                                className="bg-blue-500 hover:bg-blue-500 flex items-center justify-center gap-5 text-white rounded-md cursor-pointer px-6 py-4 active:scale-90 transition-all duration-500 ease-in-out"
                            >
                                <p>Join us online</p>
                                <Play />
                            </Link>
                        </div>
                    </section>

                    {/* Sunday Services Carousel */}
                    <section>
                        <ServicesCarousel
                            images={sundayImages}
                            float="right"
                            borderRadiusPosition="bottom-left"
                            subtext="Join our Sunday Services"
                            time="1:00 PM"
                            alignText="right"
                        />
                    </section>
                </div>

                {/* Wednesday Services Carousel */}
                <section id="wednesday" className="py-28">
                    <ServicesCarousel
                        images={wednesdayImages}
                        float="left"
                        borderRadiusPosition="bottom-right"
                        subtext="Service of Sound - Midweek service"
                        time="5:30 PM"
                        alignText="left"
                    />
                </section>

                {/* MMM Carousel */}
                <section id="mmm" className="py-28">
                    <ServicesCarousel
                        images={mmmImages}
                        float="right"
                        borderRadiusPosition="bottom-left"
                        subtext="Monthly Mega Meeting – 12 Hours"
                        time="3rd Friday of every month – 6:00 PM"
                        alignText="right"
                    />
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default ServicesClient;