"use client";

import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======

const HOME_VIDEO_URL =
  "https://res.cloudinary.com/dtfkmchkw/video/upload/f_auto,q_auto/v1779360268/ovcn_gkvojw.mp4";
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======

const HOME_VIDEO_URL =
  "https://res.cloudinary.com/dtfkmchkw/video/upload/f_auto,q_auto/v1779360268/ovcn_gkvojw.mp4";
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8

const HomePage = () => {
  const [canPlayVideo, setCanPlayVideo] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCanPlayVideo(false);
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Background Image Fallback */}
=======
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home.png')" }}
      />

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Background Video */}
      {canPlayVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/ovcn.mp4"
=======
=======
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
      {canPlayVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HOME_VIDEO_URL}
<<<<<<< HEAD
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
          poster="/home.png"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setCanPlayVideo(false)}
          aria-hidden="true"
        />
      )}

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_75%)]" />

      {/* Content */}
=======
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_75%)]" />

>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_75%)]" />

>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
        >
          EXPERIENCE GOD&apos;S PRESENCE
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
<<<<<<< HEAD
<<<<<<< HEAD
          className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
=======
          className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base"
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
          className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base"
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
        >
          Join services either online & onsite every Sunday by 12:00pm,
          Wednesdays by 5:00pm and 3rd Fridays by 6:00pm.
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-7 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/online">
<<<<<<< HEAD
<<<<<<< HEAD
            <Button className="h-11 rounded-full bg-white px-7 text-black hover:bg-white/90 cursor-pointer">
=======
            <Button className="h-11 rounded-full bg-white px-7 text-black hover:bg-white/90">
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
            <Button className="h-11 rounded-full bg-white px-7 text-black hover:bg-white/90">
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
              Join us online
            </Button>
          </Link>

          <Link href="/about-us">
            <Button
              variant="outline"
<<<<<<< HEAD
<<<<<<< HEAD
              className="h-11 rounded-full border-white/70 bg-transparent px-7 text-white  cursor-pointer hover:bg-white/10 hover:text-white"
=======
              className="h-11 rounded-full border-white/70 bg-transparent px-7 text-white hover:bg-white hover:text-black"
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
              className="h-11 rounded-full border-white/70 bg-transparent px-7 text-white hover:bg-white hover:text-black"
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
            >
              Learn more
            </Button>
          </Link>
        </motion.div>
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Footer */}
      <footer className="absolute bottom-0 z-10 w-full px-6 py-5 text-center text-sm lg:px-20">
=======
      <footer className="absolute bottom-0 z-10 w-full px-6 py-5 text-center text-xs text-white/75 lg:px-20">
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
=======
      <footer className="absolute bottom-0 z-10 w-full px-6 py-5 text-center text-xs text-white/75 lg:px-20">
>>>>>>> 866240b55cae6e309e8ceccbe70f8b1243e01ff8
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row"
        >
          <p>Omega Vision Christian Network</p>
          <p>
            &copy; {new Date().getFullYear()} Omega Vision Christian Network.
            All Rights Reserved.
          </p>
        </motion.div>
      </footer>
    </section>
  );
};

export default HomePage;