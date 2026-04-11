"use client";

import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const MobileSidebarTrigger = ({ isOpen, toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="relative w-6 h-4 flex flex-col items-center justify-center gap-2 text-white z-[999] overflow-hidden"
    >
      <motion.span
        className="block h-0.5 w-full bg-white origin-center"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block h-0.5 w-full bg-white origin-center"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};