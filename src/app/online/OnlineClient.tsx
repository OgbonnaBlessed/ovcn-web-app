"use client";

import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const YOUTUBE_CHANNEL_ID = "UCz2KfMn-6phYxlFVPWa3QhA";
const WAYSTREAM_URL =
  "https://app.waystream.io/live/omegavisionchristiannetwork";

const services = [
  {
    day: "Sunday",
    time: "1:00PM",
    description: "Join our Sunday service live.",
  },
  {
    day: "Wednesday",
    time: "6:00PM",
    description: "Connect for our midweek service.",
  },
  {
    day: "3rd Friday",
    time: "6:00PM",
    description: "Join our monthly third Friday meeting.",
  },
];

const OnlineClient = () => {
  const [playYoutube, setPlayYoutube] = useState(false);

  return (
    <>
      <div className="w-full overflow-x-hidden scroll-smooth">
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
          <Image
            src="/join-us.png"
            fill
            alt="Join us online"
            quality={100}
            preload
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b942]/12 blur-3xl md:h-[520px] md:w-[520px]" />

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

          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent" />
        </section>

        <section className="relative flex min-h-screen w-full items-center justify-center px-6 py-20 lg:px-20">
          <div className="flex w-full max-w-6xl flex-col gap-10">
            <div className="mx-auto flex max-w-2xl flex-col gap-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                YouTube Live
              </p>

              <h2 className="text-4xl font-bold lg:text-6xl">
                Live Coverage on YouTube
              </h2>

              <p className="text-sm leading-7 text-accent-foreground md:text-base">
                Watch our live services on YouTube when we are broadcasting.
              </p>
            </div>

            <Card className="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-3xl border-none bg-black shadow-2xl">
              <CardContent className="h-full w-full p-0">
                {playYoutube ? (
                  <iframe
                    src={`https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CHANNEL_ID}&autoplay=1`}
                    title="Omega Vision Christian Network YouTube Live"
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayYoutube(true)}
                    className="group flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_45%)] text-white"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Play fill="currentColor" className="ml-1 h-8 w-8" />
                    </span>
                  </button>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="relative flex min-h-screen w-full items-center justify-center bg-[#F8F9FB] px-6 py-20 lg:px-20">
          <div className="flex w-full max-w-7xl flex-col gap-12">
            <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Waystream Live
              </p>

              <h2 className="text-4xl font-bold text-black lg:text-6xl">
                Live Coverage on Waystream
              </h2>

              <p className="text-sm leading-7 text-accent-foreground md:text-base">
                Join our services on Waystream every Sunday by 1:00PM,
                Wednesdays by 6:00PM, and every third Friday by 6:00PM.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.day}
                  className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-accent-foreground">
                    {service.day}
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-black">
                    {service.time}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-accent-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto flex flex-col items-center gap-4 text-center">
              <Link
                href={WAYSTREAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 rounded-full bg-blue-700 px-8 text-white hover:bg-blue-600">
                  <Play fill="currentColor" className="mr-2 h-4 w-4" />
                  Open Waystream
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <p className="max-w-xl text-xs leading-6 text-accent-foreground">
                If the live stream has not started yet, the Waystream page may
                show as offline until service begins.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default OnlineClient;
