"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const PROGRAMS = [
  {
    id: 1,
    title: "Night of Encounter",
    description:
      "A powerful atmosphere of worship, prayer and deep encounters with God.",
    image: "/service-1.jpg",
  },
  {
    id: 2,
    title: "Worship & Word Conference",
    description:
      "A gathering designed to stir hunger for God’s presence and His Word.",
    image: "/service-2.jpg",
  },
  {
    id: 3,
    title: "Youth Revival Meeting",
    description: "Raising a generation burning with purpose, purity and power.",
    image: "/service-3.jpg",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const UpcomingProgramsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const orderedPrograms = useMemo(() => {
    return PROGRAMS.map((_, index) => {
      return PROGRAMS[(activeIndex + index) % PROGRAMS.length];
    });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROGRAMS.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-7xl items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        {orderedPrograms.map((program, index) => {
          const isActive = index === 0;

          return (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.8, x: 280 }}
              animate={{
                opacity: isActive ? 1 : 0.45,
                scale: isActive ? 1 : 0.78,
                x: index * 260,
                zIndex: PROGRAMS.length - index,
              }}
              exit={{
                opacity: 0,
                scale: 0.68,
                x: -260,
              }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute h-[440px] w-[min(86vw,640px)] overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <div className="relative h-full w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 86vw, 640px"
                  priority={isActive}
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.45 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8"
                  >
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/60">
                      Upcoming Program
                    </p>

                    <h3 className="text-3xl font-bold sm:text-4xl">
                      {program.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                      {program.description}
                    </p>

                    <Button className="mt-6 rounded-full bg-white px-7 text-black hover:bg-white/90">
                      Join Program
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default UpcomingProgramsCarousel;
