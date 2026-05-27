"use client";

import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const OnlineClient = () => {
  const [isLive, setIsLive] = useState({
    youtube: false,
    waystream: false,
  });

  const meetings = ["Sunday", "Wednesday", "3rd Friday"];

  return (
    <>
      <div className="w-full overflow-x-hidden scroll-smooth">
        {/* Hero Section */}
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
          <Image
            src="/join-us.png"
            fill
            alt="Join us online"
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
                Join Us Online
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                EACH SERVICE IS A KAIROS MOMENT FOR LIFE AND PURPOSE
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Worship with us live from anywhere in the world and experience
                the presence of God together as one family.
              </p>
            </motion.div>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent" />
        </section>

        {/* YouTube Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center">
          <div className="w-full flex flex-col gap-10 py-14 px-6 lg:p-20">
            <div className="w-full max-w-2xl flex flex-col md:gap-2 gap-1 text-center mx-auto">
              <h2 className="lg:text-5xl text-3xl font-bold w-full">
                Live Coverage on Youtube
              </h2>
              <p className="text-sm md:text-base">
                Join services via Youtube on Sundays by 12:00PM, Wednesdays by
                5:30PM, and 3rd fridays by 6:00PM
              </p>
            </div>

            <Card className="w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl bg-accent shadow-none border-none">
              <CardContent className="w-full h-full p-0 border-none">
                {isLive.youtube ? (
                  <iframe
                    src="https://www.youtube.com/embed/live_stream?channel=UCz2KfMn-6phYxlFVPWa3QhA&autoplay=1"
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="flex items-center bg-gray-300 text-black rounded-full p-2">
                      <Play
                        fill="#000"
                        onClick={() => setIsLive({ ...isLive, youtube: true })}
                        className="p-1 cursor-pointer"
                      />
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mixlr Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center pb-20">
          <div className="w-full flex flex-col gap-10 py-14 px-6 lg:p-20">
            <div className="w-full max-w-2xl flex flex-col md:gap-2 gap-1 text-center mx-auto">
              <h2 className="lg:text-5xl text-3xl font-bold w-full">
                Live Coverage on Waystream
              </h2>
              <p className="text-sm md:text-base">
                Join services via Waystream on Sundays by 12:00PM, Wednesdays by
                5:30PM, and 3rd fridays by 6:00PM
              </p>
            </div>

            <div className="flex justify-center gap-8 flex-wrap min-w-full">
              {meetings.map((meeting, i) => (
                <div key={i} className="flex flex-col gap-2 items-start">
                  <div className="flex justify-start items-center gap-2 bg-[#41413F] text-sm text-white px-6 py-4 cursor-pointer min-w-[12rem] rounded-lg ">
                    <Play fill="#fff" className="p-1 text-white" />
                    <p>{isLive.waystream ? "Live" : "Offline"}</p>
                  </div>
                  <div>{meeting}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OnlineClient;
