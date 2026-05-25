"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Church Auditorium Expansion",
    description:
      "Partner with us as we expand our worship auditorium to accommodate more lives and souls.",
    image: "/service-1.jpg",
  },
  {
    id: 2,
    title: "Community Outreach",
    description:
      "Reaching communities with food, support, prayer and the Gospel of Jesus Christ.",
    image: "/service-2.jpg",
  },
  {
    id: 3,
    title: "Media & Broadcast",
    description:
      "Helping spread the Gospel globally through media, livestreams and digital ministry.",
    image: "/service-3.jpg",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const ProjectsCarousel = () => {
  const [cards, setCards] = useState(PROJECTS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const updated = [...prev];
        const first = updated.shift();

        if (first) {
          updated.push(first);
        }

        return updated;
      });
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-[650px] w-full items-center justify-center overflow-hidden">
      {cards.map((project, index) => {
        const isActive = index === 0;

        return (
          <AnimatePresence key={project.id}>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: 100,
              }}
              animate={{
                opacity: 1 - index * 0.15,
                scale: 1 - index * 0.05,
                x: index * 40,
                y: -(index * 25),
                zIndex: cards.length - index,
              }}
              exit={{
                opacity: 0,
                x: -200,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className={`absolute h-[500px] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl ${
                isActive ? "shadow-black/40" : ""
              }`}
            >
              <div className="relative h-[60%] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex h-[40%] flex-col justify-between p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-white/75 leading-7">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 h-[4px] w-20 rounded-full bg-white/70" />
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default ProjectsCarousel;
