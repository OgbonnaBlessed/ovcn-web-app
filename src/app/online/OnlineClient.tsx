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
    mixlr: false,
  });

  const meetings = ["Sunday", "Wednesday", "3rd Friday"];

  return (
    <>
      <div className="w-full overflow-x-hidden scroll-smooth">
        {/* Hero Section */}
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
              EACH SERVICE IS A KAIROS MOMENT FOR LIFE AND PURPOSE.
            </motion.div>
          </div>
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
                Live Coverage on Mixlr
              </h2>
              <p className="text-sm md:text-base">
                Join services via Mixlr on Sundays by 12:00PM, Wednesdays by
                5:30PM, and 3rd fridays by 6:00PM
              </p>
            </div>

            <div className="flex justify-center gap-8 flex-wrap min-w-full">
              {meetings.map((meeting, i) => (
                <div key={i} className="flex flex-col gap-2 items-start">
                  <div className="flex justify-start items-center gap-2 bg-[#41413F] text-sm text-white px-6 py-4 cursor-pointer min-w-[12rem] rounded-lg ">
                    <Play fill="#fff" className="p-1 text-white" />
                    <p>{isLive.mixlr ? "Live" : "Offline"}</p>
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
