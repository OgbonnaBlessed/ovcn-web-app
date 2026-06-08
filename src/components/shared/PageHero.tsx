"use client";

import { fadeInUp } from "@/helper/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode, useRef } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  bottomColor?: string;
  glowVariant?: "default" | "membership";
};

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
  bottomColor = "#070B18",
  glowVariant = "default",
}: PageHeroProps) => {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/45" />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(7,11,24,0.45), ${bottomColor})`,
        }}
      /> 
      {glowVariant === "membership" ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,45,145,0.35),transparent_35%),radial-gradient(circle_at_top,rgba(255,197,0,0.18),transparent_30%)]" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,62,168,0.45),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,106,0,0.3),transparent_30%)]" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div
        className="absolute bottom-0 left-0 h-40 w-full"
        style={{
          background: `linear-gradient(to top, ${bottomColor}, transparent)`,
        }}
      />

      <motion.div
        style={{ y: textY }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        <div className="mb-6 h-px w-24 bg-white/45" />

        <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/70 md:text-sm">
          {eyebrow}
        </p>

        <h1 className="mt-5 max-w-5xl text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
            {description}
          </p>
        )}

        {children && <div className="mt-9">{children}</div>}
      </motion.div>
    </section>
  );
};

export default PageHero;
