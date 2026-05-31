"use client";

import Footer from "@/components/shared/Footer";
import Give from "@/components/shared/Give";
import ProjectsCarousel from "@/components/shared/ProjectsCarousel";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const GiveClient = () => {
  return (
    <>
      <div className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        <section
          id="partnership"
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
        >
          <Image
            src="/optimized/about-us.webp"
            fill
            alt="Partnership"
            quality={100}
            preload
            className="object-cover object-center"
          />

          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Soft cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />

          {/* Warm golden glow */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b942]/12 blur-3xl md:h-[520px] md:w-[520px]" />

          {/* Edge vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="mb-6 h-px w-24 bg-white/50" />

              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/70 md:text-sm">
                Give
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                PARTNER WITH US IN ADVANCING GOD&apos;S KINGDOM
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Support the work of the ministry as we spread the Gospel and
                impact lives across communities.
              </p>
            </motion.div>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent" />
        </section>

        <section className="min-h-screen w-full flex items-center justify-center">
          <div className="flex flex-col gap-10 items-center py-14 px-6 lg:p-20">
            <div className="lg:w-6xl w-full lg:text-7xl text-5xl text-center italic font-extralight font-serif">
              Each of you should give what you have decided in your heart to
              give, not reluctantly or under compulsion, for God loves a
              cheerful giver.
            </div>
            <p className="lg:text-xl">2 Corinthians 9:7 (NIV)</p>
          </div>
        </section>

        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-5 py-20 sm:px-6 sm:py-24 lg:px-20">
          <div className="flex w-full max-w-7xl flex-col items-center">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60 sm:text-sm sm:tracking-[0.3em]">
                Latest Projects
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                Advancing God&apos;s Kingdom
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Be a part of what God is doing through Omega Vision Christian
                Network as we impact lives, transform communities and spread the
                Gospel.
              </p>
            </motion.div>

            <div className="mt-12 w-full sm:mt-16 lg:mt-20">
              <ProjectsCarousel />
            </div>
          </div>
        </section>

        <section
          id="give-online"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <Give />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GiveClient;
