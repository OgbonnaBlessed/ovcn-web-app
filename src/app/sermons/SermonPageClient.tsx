"use client";

import Footer from '@/components/shared/Footer'
import { SermonSearch } from '@/components/shared/SermonSearch'
import { sermons } from "@/data/sermons"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from 'framer-motion';

const SermonPageClient = () => {
    const [selectedSermonId, setSelectedSermonId] = useState<string | null>(null);

    // Store audio refs
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

    const filteredSermons = selectedSermonId
        ? sermons.filter((sermon) => sermon.id === selectedSermonId)
        : sermons

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

    // Pause all audios except the one currently playing
    const handlePlay = (id: string) => {
        Object.entries(audioRefs.current).forEach(([key, audio]) => {
            if (key !== id && audio && !audio.paused) {
                audio.pause();
            }
        });
    };

    return (
        <div className='w-full max-w-screen overflow-x-hidden scroll-smooth'>
            <section className="relative min-h-screen min-w-screen overflow-hidden">
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
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-fit"
                >
                    <div className="font-bold lg:text-7xl text-5xl lg:w-6xl w-full text-center uppercase">
                        Each sermon is a timely Word for life and purpose
                    </div>
                </motion.div>
            </section>
            <div className='flex flex-col gap-20 py-24 lg:px-20 px-8'>
                <div className='self-center'>
                    <SermonSearch 
                        sermons={sermons}
                        onSelect={setSelectedSermonId}
                    />
                </div>

                <div className='flex flex-col gap-10'>
                    <h1 className='lg:text-7xl text-5xl font-bold'>Featured Sermons</h1>

                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        <AnimatePresence>
                            {filteredSermons.map((sermon) => (
                                <motion.div 
                                    key={sermon.id} 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="overflow-hidden"
                                >
                                    <Image
                                        src={sermon.thumbnail}
                                        alt={sermon.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-60 object-cover rounded-xl"
                                    />
                                    <div className="py-4 flex flex-col gap-2">
                                        <h2 className="text-xl font-semibold">{sermon.title}</h2>
                                        <p className="text-sm text-accent-foreground">{sermon.preacher}</p>
                                        <p className="text-sm text-accent-foreground">
                                            {new Date(sermon.date).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric"
                                            })}
                                        </p>
                                        <audio 
                                            controls 
                                            ref={(el) => { audioRefs.current[sermon.id] = el; }}
                                            onPlay={() => handlePlay(sermon.id)}
                                            className="mt-2 w-full"
                                        >
                                            <source src={sermon.audioUrl} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SermonPageClient