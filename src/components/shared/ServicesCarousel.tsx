"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceCarouselProps {
  images: string[];
  float: "left" | "right";
  borderRadiusPosition: "bottom-left" | "bottom-right";
  subtext: string;
  time: string;
  alignText: "left" | "right";
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({
  images,
  float,
  borderRadiusPosition,
  subtext,
  time,
  alignText,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Watch for visibility using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const node = carouselRef.current;
        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, []);

    // Start slideshow only when visible
    useEffect(() => {
        if (!isInView) return;
            const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Every 5 seconds

        return () => clearInterval(timer);
    }, [images.length, isInView]);

    return (
        <div
            ref={carouselRef}
            className={cn(
                "relative max-w-full lg:w-4xl w-full h-96 overflow-hidden transition-all duration-700",
                float === "right" ? "ml-auto" : "mr-auto",
                borderRadiusPosition === "bottom-left" &&
                "rounded-t-[10rem] rounded-r-[3rem] rounded-bl-none",
                borderRadiusPosition === "bottom-right" &&
                "rounded-t-[10rem] rounded-l-[3rem] rounded-br-none"
            )}
        >
            {/* Image Slides */}
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`slide-${index}`}
                    width={1000}
                    height={500}
                    quality={100}
                    className={cn(
                        "absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out",
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                />
            ))}

            {/* Fixed Subtext Section */}
            <div
                className={cn(
                    "absolute md:bottom-10 bottom-5 text-white md:text-sm text-xs bg-black/60 px-4 py-2 rounded backdrop-blur-sm z-20",
                    alignText === "right" ? "md:right-10 right-5 text-right" : "md:left-10 left-5 text-left"
                )}
            >
                <p>{subtext}</p>
                <p className="font-semibold text-blue-500">{time}</p>
            </div>
        </div>
    );
};

export default ServiceCarousel;