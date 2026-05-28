"use client";

import JoinSheet from "@/components/shared/JoinSheet";
import { motion } from "framer-motion";
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
  {
    id: 4,
    title: "Prayer and Prophetic Meeting",
    description:
      "A sacred gathering for prayer, prophetic direction and spiritual renewal.",
    image: "/meet-and-pray.png",
  },
];

const ACTIVE_DURATION = 3800;
const REVEAL_DURATION = 850;
const SHIFT_DURATION = 950;

type Phase = "active" | "reveal" | "shift";

const UpcomingProgramsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("active");
  const [cardGap, setCardGap] = useState(440);

  useEffect(() => {
    const updateGap = () => {
      const width = window.innerWidth;

      if (width < 640) setCardGap(290);
      else if (width < 1024) setCardGap(390);
      else setCardGap(520);
    };

    updateGap();
    window.addEventListener("resize", updateGap);

    return () => window.removeEventListener("resize", updateGap);
  }, []);

  const orderedPrograms = useMemo(() => {
    return PROGRAMS.map((_, index) => {
      return PROGRAMS[(activeIndex + index) % PROGRAMS.length];
    });
  }, [activeIndex]);

  const activeProgram = orderedPrograms[0];

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setPhase("reveal");
    }, ACTIVE_DURATION);

    const shiftTimer = setTimeout(() => {
      setPhase("shift");
    }, ACTIVE_DURATION + REVEAL_DURATION);

    const nextTimer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % PROGRAMS.length);
      setPhase("active");
    }, ACTIVE_DURATION + REVEAL_DURATION + SHIFT_DURATION);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(shiftTimer);
      clearTimeout(nextTimer);
    };
  }, [activeIndex]);

  // const handleManualSelect = (index: number) => {
  //   if (index === activeIndex) return;

  //   setPhase("active");
  //   setActiveIndex(index);
  // };

  const isActivePhase = phase === "active";

  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center overflow-hidden">
      <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden sm:h-[430px] lg:h-[520px]">
        <div className="pointer-events-none absolute left-0 top-0 z-40 h-full w-16 bg-gradient-to-r from-black to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-40 h-full w-16 bg-gradient-to-l from-black to-transparent sm:w-28" />

        {orderedPrograms.map((program, index) => {
          const isCurrent = index === 0;
          const isNext = index === 1;
          const isVisibleInLine = !isActivePhase && index <= 3;

          const xPosition =
            index * cardGap - (phase === "shift" ? cardGap : 0);

          return (
            <motion.article
              key={`${program.id}-${activeIndex}`}
              initial={false}
              animate={{
                x: xPosition,
                y: isActivePhase && isCurrent ? 0 : 34,
                scale:
                  isActivePhase && isCurrent
                    ? 1.08
                    : phase === "shift" && isNext
                      ? 0.78
                      : 0.72,
                opacity: isActivePhase
                  ? isCurrent
                    ? 1
                    : 0
                  : isVisibleInLine
                    ? index === 3
                      ? 0.35
                      : 1
                    : 0,
                filter:
                  isActivePhase && isCurrent
                    ? "blur(0px)"
                    : "blur(0.15px)",
                zIndex: isActivePhase && isCurrent ? 30 : PROGRAMS.length - index,
              }}
              transition={{
                x: {
                  duration: phase === "shift" ? 0.95 : 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: phase === "shift" ? 0.9 : 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.45,
                  ease: "easeOut",
                },
                y: {
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="absolute h-[245px] w-[min(78vw,340px)] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/30 sm:h-[315px] sm:w-[min(70vw,470px)] lg:h-[370px] lg:w-[580px]"
            >
              <Image
                src={program.image}
                alt={program.title}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 70vw, 580px"
                priority={isCurrent}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.article>
          );
        })}
      </div>

      <motion.div
        key={activeProgram.id}
        initial={false}
        animate={{
          opacity: isActivePhase ? 1 : 0,
          y: isActivePhase ? 0 : 18,
          filter: isActivePhase ? "blur(0px)" : "blur(3px)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="pointer-events-auto mt-8 flex min-h-[220px] w-full max-w-3xl flex-col items-center text-center text-white"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Upcoming Program
        </p>

        <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {activeProgram.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
          {activeProgram.description}
        </p>

        {isActivePhase && (
          <JoinSheet
            type="Upcoming Program"
            programTitle={activeProgram.title}
            buttonText="Join Program"
          />
        )}
      </motion.div>

      {/* <div className="mt-3 flex items-center justify-center gap-2">
        {PROGRAMS.map((program, index) => (
          <button
            key={program.id}
            onClick={() => handleManualSelect(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-8 bg-white" : "w-2 bg-white/35"
            }`}
            aria-label={`Show ${program.title}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default UpcomingProgramsCarousel;