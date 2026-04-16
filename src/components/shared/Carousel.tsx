/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const CarouselDemo = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const testimonies = [
    {
      name: "Apostle Gabriel Clement",
      image: "/apostle.jpeg",
      about:
        "Apostle Gabriel is the founder and senior pastor of OVCN, a passionate teacher of the Word, and a prophetic voice to the nations.",
    },
    {
      name: "Dr. Pastor Gabriel Priscillia",
      image: "/pastor-priscillia-gabriel.jpeg",
      about:
        "An optomerist and woman of God, Dr. Priscillia is a healing evangelist and intercessor, raising women of virtue and purpose.",
    },
    {
      name: "Pastor Mark Williams",
      image: "/pastor-mark-williams.jpeg",
      about:
        "Pastor Mark is known for his deep insights into scripture and his compassionate shepherding, bringing clarity and direction to many lives.",
    },
    {
      name: "Pastor Ifeanyi Agwu",
      image: "/pastor-ify.jpeg",
      about:
        "With a strong pastoral heart and a burden for spiritual growth, Pastor Ifeanyi labors to see believers rooted in truth and love.",
    },
  ];

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{ align: "start" }}
        className="w-[300px] md:w-lg lg:w-3xl xl:w-5xl max-w-full flex flex-col gap-5 mx-auto"
      >
        <CarouselContent>
          {testimonies.map((t, index) => (
            <CarouselItem key={index} className="basis-full lg:basis-1/2">
              <Card className="w-full max-w-full flex flex-col items-start p-8 md:p-8! border-0 bg-[#0A42D0]/10">
                <div className="relative w-16 aspect-square rounded-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-muted-foreground text-base w-full">
                  {t.about}
                </p>
                <h3 className="text-lg mt-5">
                  {t.name}
                </h3>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-5 mt-10">
          <CarouselPrevious className="border-none bg-[#0A42D0]/80 hover:bg-[#0A42D0]/40 hover:text-white text-white size-10 transition-all duration-300 ease-in-out" />
          <CarouselNext className="border-none bg-[#0A42D0]/80 hover:bg-[#0A42D0]/40 hover:text-white text-white size-10 transition-all duration-300 ease-in-out" />
        </div>
      </Carousel>

      <div className="hidden text-center mt-4 text-xs sm:text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default CarouselDemo;
