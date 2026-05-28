"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Auditorium Expansion",
    description:
      "Partner with us as we expand our worship auditorium to accommodate more lives.",
    image: "/about-us.png",
  },
  {
    id: 2,
    title: "Infrastructure Upgrade",
    description:
      "Supporting worship through the installation of a 40KVA generator and standing AC systems.",
    image: "/generator.png",
  },
  {
    id: 3,
    title: "Epikaizo Devotionals",
    description:
      "Providing secondary school students with the Epikaizo devotional for spiritual growth and discipleship.",
    image: "/epikaizo-devotionals.png",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const orderedProjects = useMemo(() => {
    return PROJECTS.map((_, index) => {
      return PROJECTS[(activeIndex + index) % PROJECTS.length];
    });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto flex h-[520px] w-full max-w-[95vw] items-center justify-center overflow-visible sm:h-[560px] md:h-[620px] lg:h-[680px]">
      <AnimatePresence mode="popLayout">
        {orderedProjects.map((project, index) => {
          const isActive = index === 0;

          return (
            <motion.article
              key={project.id}
              initial={{
                opacity: 0,
                scale: 0.92,
                x: 80,
                y: 20,
              }}
              animate={{
                opacity: 1 - index * 0.16,
                scale: 1 - index * 0.055,
                x: index * 18,
                y: -(index * 18),
                rotate: index * 1.8,
                zIndex: PROJECTS.length - index,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                x: -120,
                y: 35,
                rotate: -4,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-1/2 h-[440px] w-[min(88vw,680px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl sm:h-[470px] md:h-[520px] lg:h-[560px]"
            >
              <div className="relative h-[55%] w-full sm:h-[58%] md:h-[60%]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 680px, 680px"
                  className="object-cover"
                  priority={isActive}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>

              <div className="flex h-[45%] flex-col justify-between bg-[#080808] p-5 sm:h-[42%] sm:p-7 md:h-[40%] md:p-8">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/45">
                    Project {project.id}
                  </p>

                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 h-[4px] w-16 rounded-full bg-white/70 sm:w-20" />
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsCarousel;
