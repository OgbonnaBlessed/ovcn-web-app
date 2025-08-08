"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Variants } from 'framer-motion';
import { Play, Radio, Youtube } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/ui/button';

const OnlineClient = () => {
    const [isLive, setIsLive] = useState({
        youtube: true, // simulate for now
        mixlr: true    // simulate for now
    });

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 1,
                ease: [0.42, 0, 0.58, 1],
            },
        }),
    };

    const meetings = ["Sunday", "Wednesday", "Friday"];

    return (
        <>
            <div className="w-full overflow-x-hidden scroll-smooth">
                {/* Hero Section */}
                <section className="relative min-h-screen min-w-screen">
                    <div className="absolute inset-0">
                        <Image
                            src="/sermon-icon.jpg"
                            fill
                            alt="Sermons"
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
                    >
                        <div className="font-bold lg:text-7xl text-5xl lg:w-6xl w-full text-center uppercase">
                            Join us online
                        </div>
                    </motion.div>
                </section>

                {/* YouTube Section */}
                <section className="py-24 px-8 lg:px-20 text-center space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
                            Live Coverage on YouTube
                        </h2>
                        <p className="max-w-lg mx-auto mt-2">
                            Join services on Sundays by 12:00PM, Wednesdays by 5:30PM, and 3rd Fridays by 6:00PM.
                        </p>
                    </div>

                    <Card className="w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-md bg-accent">
                        <CardContent className="w-full h-full p-0">
                            {isLive.youtube ? (
                                <iframe
                                    src="https://www.youtube.com/embed/live_stream?channel=UCz2KfMn-6phYxlFVPWa3QhA&autoplay=1"
                                    width="100%"
                                    height="100%"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                    <p>We’re currently offline. Check back during service hours.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </section>

                {/* Mixlr Section */}
                <section className="py-24 px-8 lg:px-20 text-center space-y-8 w-full">
                    <div>
                        <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
                            Live Coverage on Mixlr
                        </h2>
                        <p className="max-w-lg mx-auto mt-2">
                            Join services via Mixlr on Sundays by 12:00PM, Wednesdays by 5:30PM, and 3rd fridays by 6:00PM 
                        </p>
                    </div>

                    
                    <div className="flex justify-center gap-8 flex-wrap min-w-full">
                        {meetings.map((meeting, i) => (
                            <div
                                key={i}
                                className='flex flex-col gap-2 items-start'
                            >
                                <div
                                    className="flex justify-start items-center gap-2 bg-accent text-sm px-6 py-4 cursor-pointer min-w-[12rem] rounded-lg "
                                >
                                    <Play className='p-1 text-card-foreground'/> 
                                    <p>
                                        {isLive.mixlr ? "Live" : "Offline"}
                                    </p>
                                </div>
                                <div>
                                    {meeting}
                                </div>
                            </div>

                        ))}
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};

export default OnlineClient;