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
          className="relative min-h-screen w-full bg-black"
        >
          <Image
            src="/partnership.png"
            fill
            alt="Partnership"
            quality={100}
            preload
            className="object-cover object-top"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-fit">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-bold lg:text-7xl text-5xl lg:w-6xl w-full text-center"
            >
              PARTNER WITH US IN ADVANCING GOD&lsquo;S KINGDOM
            </motion.div>
          </div>
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
