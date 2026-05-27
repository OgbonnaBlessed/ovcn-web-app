"use client";

import Footer from "@/components/shared/Footer";
import { map_locations } from "@/data/locations";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa6";

const MapClient = () => {
  return (
    <>
      <div className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        <section
          id="partnership"
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
        >
          <Image
            src="/meet-and-pray.png"
            fill
            alt="Meet and Pray"
            quality={100}
            preload
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent" />

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
                Meet And Pray
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                JOIN MAP FAMILY CLOSEST TO YOU
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Find a prayer family near you and grow in fellowship, faith and
                the Word.
              </p>
            </motion.div>
          </div>
        </section>

        <section
          id="our-locations"
          className="relative w-full min-h-screen flex items-center justify-center pb-20"
        >
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 py-14 px-6 lg:p-20">
            <div className="w-full max-w-md flex flex-col md:gap-2 gap-1">
              <h2 className="lg:text-5xl text-3xl font-bold w-full">
                Our Map Locations
              </h2>
              <p className="text-sm md:text-base">
                A place prepared for you. You are always welcome at Omega Vision
                Christian Network.
              </p>
            </div>
            <div className="w-full flex flex-col gap-12 sm:gap-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {map_locations.map((map, i) => (
                  <div key={i} className="flex flex-col md:gap-2 gap-1">
                    <p className="font-medium text-base md:text-lg">
                      {map.region}
                    </p>
                    <p className="text-sm md:text-base text-accent-foreground font-light">
                      {map.address}
                    </p>
                    <a
                      href={map.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center cursor-pointer gap-2"
                    >
                      <FaHandPointRight />
                      <p className="hover:underline transition-all duration-300 ease-in-out">
                        Click to view on map
                      </p>
                    </a>
                  </div>
                ))}
              </div>

              <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.93889887012!2d3.316951186017996!3d6.654495730100726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91061c06ec5b%3A0xd3d733689d6e564d!2sOMEGA%20VISION%20CHRISTIAN%20NETWORK!5e0!3m2!1sen!2sng!4v1753849642067!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MapClient;
