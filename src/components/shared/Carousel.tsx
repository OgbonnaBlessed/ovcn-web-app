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
      name: "Micheal Toafeek",
      image: "/taofeek-micheal.png",
      about:
        "I joined Omega Vision as a young teenager searching for meaning. Through the Holy Ghost, Apostle’s teachings and the atmosphere, I found clarity, growth, strength and purpose.",
    },
    {
      name: "Isaiah Ojo",
      image: "/isaiah-ojo.jpeg",
      about:
        "Omega Vision became home to me. Through seasoned prayers, revelation from God’s Word and Apostle’s teachings, I experienced alignment, growth and even saw healing ministered through prayer.",
    },
    {
      name: "Oyindamola Animashaun",
      image: "/oyindamola-animashaun.jpeg",
      about:
        "Omega Vision gave me more than a church; it gave me direction, identity and family. Through Apostle’s teachings, my prayer life, ministry, career and vision were transformed.",
    },
    {
      name: "Victor Etaze",
      image: "/victor-etaze.jpeg",
      about:
        "I came to Omega Vision as a secondary school boy, but through the teachings and atmosphere, I discovered righteousness in Christ, spiritual stability and a deeper walk with God.",
    },
    
    {
      name: "Mechie Joy",
      image: "/joy-mechie.jpeg",
      about:
        "Through Omega Vision, I moved from knowing about God to truly knowing Him. Apostle’s timely teachings brought direction, strength, correction and deep spiritual growth to my life.",
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
              <Card className="w-full max-w-full flex flex-col items-start p-8 md:p-8! border-0 bg-blue-100">
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
                <h3 className="text-lg mt-5">{t.name}</h3>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-5 mt-10">
          <CarouselPrevious className="border-none bg-[#0A42D0] hover:bg-[#0A42D0]/50 hover:text-white text-white size-10 transition-all duration-300 ease-in-out" />
          <CarouselNext className="border-none bg-[#0A42D0] hover:bg-[#0A42D0]/50 hover:text-white text-white size-10 transition-all duration-300 ease-in-out" />
        </div>
      </Carousel>

      <div className="hidden text-center mt-4 text-xs sm:text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default CarouselDemo;
