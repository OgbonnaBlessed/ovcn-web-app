'use client';

import { Button } from '@/components/ui/button';
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
  // Moved inside to avoid server-client function passing issue
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
    <div className="relative h-screen min-w-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/home_video.mp4" // Ensure this is in your /public folder
        autoPlay
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center px-4">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="lg:w-2xl text-5xl md:text-7xl font-bold text-center leading-tight"
        >
          EXPERIENCE GOD‘S PRESENCE
        </motion.h1>
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="sm:w-xl text-center mt-4"
        >
          Join services either online & onsite every Sunday by 12:00pm, Wednesdays by 5:00pm and 3rd Fridays by 6:00pm.
        </motion.p>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center gap-5 mt-5"
        >
          <Link
            href="/online"
          >
            <Button className="cursor-pointer bg-white hover:bg-white text-black">
              Join us online
            </Button>
          </Link>
          <Link
            href="/about-us"
          >
            <Button className="cursor-pointer bg-transparent hover:bg-transparent border-1 border-white text-white">
              Learn more
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center lg:px-20 px-8 py-4 text-sm">
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full flex lg:flex-row flex-col gap-5 justify-between items-center"
        >
          <p>Omega Vision Christian Network</p>
          <p>&copy; {new Date().getFullYear()} Omega Vision Christian Network. All Rights Reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default HomePage;