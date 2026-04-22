"use client";

import Footer from "@/components/shared/Footer";
import SermonsCardSkeleton from "@/components/ui/skeleton/SermonsCardSkeleton";
import { sermons } from "@/data/sermons";
import { fadeInUp } from "@/helper/motion";
import { formatFullDate } from "@/utils/format-date";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SermonPageClient = () => {
  const [selectedSermonId, setSelectedSermonId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  // Store audio refs
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredDropdown = sermons.filter((sermon) =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSearch = () => {
    const found = sermons.find(
      (s) => s.title.toLowerCase() === searchTerm.toLowerCase(),
    );

    if (found) {
      setSelectedSermonId(found.id);
      setShow(false);
    } else {
      setSelectedSermonId(null);
    }
  };

  const filteredSermons = selectedSermonId
    ? sermons.filter((s) => s.id === selectedSermonId)
    : sermons;

  // Pause all audios except the one currently playing
  const handlePlay = (id: string) => {
    Object.entries(audioRefs.current).forEach(([key, audio]) => {
      if (key !== id && audio && !audio.paused) {
        audio.pause();
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-screen overflow-x-hidden scroll-smooth"
    >
      <section
        id="sermons-hero"
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
            EACH SERMON IS A TIMELY WORD FOR LIFE AND PURPOSE
          </motion.div>
        </div>
      </section>

      <div className="flex flex-col gap-20 py-14 lg:p-20 px-6">
        <div className="w-full flex items-center justify-center">
          <div
            ref={containerRef}
            className="relative w-full self-center max-w-lg"
          >
            <div className="max-w-lg w-full flex items-center justify-between p-2 bg-[#0A95D012] rounded-full gap-2 text-sm">
              <input
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShow(true);
                  setSelectedSermonId(null);
                }}
                onFocus={() => setShow(true)}
                placeholder="Check out enlightening sermons..."
                className="w-full bg-transparent p-2 outline-none"
              />

              <button
                onClick={handleSearch}
                className="bg-blue-600 py-2 px-4 text-white rounded-full"
              >
                Search
              </button>
            </div>

            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 left-0 w-3xs text-sm bg-white shadow rounded-lg p-2 z-50"
                >
                  {filteredDropdown.length > 0 ? (
                    filteredDropdown.slice(0, 6).map((sermon) => (
                      <div
                        key={sermon.id}
                        className="hover:bg-gray-100 py-2 px-3 rounded-md cursor-pointer"
                        onClick={() => {
                          setSearchTerm(sermon.title);
                          setSelectedSermonId(sermon.id);
                          setShow(false);
                        }}
                      >
                        {sermon.title}
                      </div>
                    ))
                  ) : (
                    <div className="py-2 px-3 text-gray-500 text-sm">
                      Sermon not found
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="lg:text-5xl text-3xl font-bold">Featured Sermons</h1>

          {loading ? (
            <SermonsCardSkeleton />
          ) : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
              <AnimatePresence>
                {filteredSermons.map((sermon) => (
                  <motion.div
                    key={sermon.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <Image
                      src={sermon.thumbnail}
                      alt={sermon.title}
                      width={400}
                      height={250}
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <div className="py-4 flex flex-col gap-2">
                      <h2 className="text-lg">{sermon.title}</h2>
                      <p className="text-sm text-accent-foreground">
                        {sermon.preacher}
                      </p>
                      <p className="text-sm text-accent-foreground">
                        {formatFullDate(sermon.date)}
                      </p>
                      <audio
                        controls
                        ref={(el) => {
                          audioRefs.current[sermon.id] = el;
                        }}
                        onPlay={() => handlePlay(sermon.id)}
                        className="mt-2 w-full"
                      >
                        <source src={sermon.audioUrl} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default SermonPageClient;
