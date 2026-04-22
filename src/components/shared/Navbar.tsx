"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MobileSidebarTrigger } from "./MobileSidebarTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="w-full fixed flex items-baseline justify-between px-6 lg:px-20 py-4 bg-black/20 text-white backdrop-blur-sm z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/new-logo.png"
          width={60}
          height={40}
          alt="Logo"
          style={{ height: "auto" }}
          priority
        />
        <div className="uppercase text-xs leading-tight">
          <p className="font-bold text-base">Omega Vision</p>
          <p className="tracking-wider">Christian Network</p>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <div className="block md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
          <MobileSidebarTrigger
            isOpen={open}
            toggle={() => setOpen((prev) => !prev)}
          />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/give">Give</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/map">Map</Link>
        </div>

        <div className="block md:hidden">
          <AnimatePresence>
            {open && (
              <>
                {/* OVERLAY */}
                <motion.div
                  className="fixed min-h-screen inset-0 bg-black/40 z-40"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0, transition: { duration: 0.5 } }}
                  exit={{
                    x: "-100%",
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  onClick={() => setOpen(false)}
                />

                {/* SIDEBAR */}
                <motion.div
                  ref={menuRef}
                  className="fixed top-0 left-0 min-h-screen w-[75%] max-w-xs bg-white text-black z-50 shadow-2xl flex flex-col p-6"
                  initial={{ x: "-100%" }}
                  animate={{
                    x: 0,
                    transition: {
                      delay: 0.4,
                      duration: 0.5,
                    },
                  }}
                  exit={{
                    x: "-100%",
                    transition: {
                      duration: 0.5,
                    },
                  }}
                >
                  {/* HEADER */}
                  <div className="self-end mb-8">
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-full p-2"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-col items-center gap-10">
                    <Link href="/" onClick={() => setOpen(false)}>
                      Home
                    </Link>
                    <Link href="/about-us" onClick={() => setOpen(false)}>
                      About us
                    </Link>
                    <Link href="/give" onClick={() => setOpen(false)}>
                      Give
                    </Link>
                    <Link href="/sermons" onClick={() => setOpen(false)}>
                      Sermons
                    </Link>
                    <Link href="/map" onClick={() => setOpen(false)}>
                      Map
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
