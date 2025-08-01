/* eslint-disable @next/next/no-img-element */
"use client"

import * as React from "react"

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function CarouselDApiDemo() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const pastors = [
        {
            name: "Apostle Gabriel Clement",
            image: "/apostle-gabriel-clement.jpeg",
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
            <Carousel setApi={setApi} className="w-[250px] sm:w-[300px] md:w-lg lg:w-3xl xl:w-5xl max-w-full mx-auto">
                <CarouselContent>
                    {pastors.map((pastor, index) => (
                        <CarouselItem key={index} >
                            <Card className="flex flex-col items-center text-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 border-0 bg-accent">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 relative mb-4 rounded-full overflow-hidden">
                                    <img
                                        src={pastor.image}
                                        alt={pastor.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                                    {pastor.name}
                                </h3>
                                <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-md">
                                    {pastor.about}
                                </p>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="text-center mt-4 text-xs sm:text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}