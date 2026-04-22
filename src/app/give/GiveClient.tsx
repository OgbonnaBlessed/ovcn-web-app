"use client";

import Footer from "@/components/shared/Footer";
import Give from "@/components/shared/Give";
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
            src="/about-us.jpg"
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
