/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/components/shared/Footer";
import JoinSheet from "@/components/shared/JoinSheet";
import UpcomingProgramsCarousel from "@/components/shared/UpcomingProgramsCarousel";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const joinSections = [
  {
    title: "MAP",
    subtitle: "Meet And Pray",
    description:
      "MAP is a family-based prayer gathering where believers meet in smaller groups to pray, study the Word, build fellowship and grow spiritually within their local environment.",
    images: ["/meet-and-pray.png", "/service-1.jpg"],
    cta: "Join MAP",
  },
  {
    title: "PAM",
    subtitle: "Parents, Adults, and Married",
    description:
      "PAM exists to strengthen homes, marriages and families through biblical wisdom, godly counsel, prayer, fellowship and spiritual growth for adults and married believers.",
    images: ["/service-2.jpg", "/about-us.png"],
    cta: "Join PAM",
  },
  {
    title: "Singles and Married",
    subtitle: "Purpose, maturity and godly relationships",
    description:
      "This ministry helps singles and married members grow in purpose, emotional maturity, spiritual discipline and godly relationship values rooted in the Word of God.",
    images: ["/service-3.jpg", "/history-2.jpg"],
    cta: "Join Singles and Married",
  },
  {
    title: "Teenage Ministry",
    subtitle: "Raising young lights",
    description:
      "The Teenage Ministry is designed to help teenagers know God personally, discover their identity in Christ, build strong values and walk boldly in purpose.",
    images: ["/mission-1.png", "/mission-2.png"],
    cta: "Join Teenage Ministry",
  },
  {
    title: "Church Department",
    subtitle: "Serve with your gift",
    description:
      "Church Departments give you the opportunity to serve faithfully with your gifts, time and commitment. Whether in music, media, prayer, protocol, welfare or other areas of service, there is a place for you to contribute to what God is doing through the church.",
    images: ["/service-1.jpg", "/service-2.jpg"],
    cta: "Join a Department",
  },
];

const JoinClient = () => {
  return (
    <>
      <main className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
          <Image
            src="/meet-and-pray.png"
            fill
            alt="Join"
            quality={100}
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />
          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="mb-6 h-px w-24 bg-white/50" />

              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/70 md:text-sm">
                Join
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                FIND YOUR FAMILY, GROW IN PURPOSE
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                There is a place for you at Omega Vision Christian Network.
                Connect, grow, serve and walk with others in faith.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full px-6 py-20 lg:px-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-20">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Belong
              </p>
              <h2 className="mt-4 text-4xl font-bold lg:text-6xl">
                Find Your Place
              </h2>
              <p className="mt-5 text-sm leading-7 text-accent-foreground md:text-base">
                Whether you are a teenager, single, married, a parent, or simply
                looking for a prayer family, there is a community prepared for
                you.
              </p>
            </div>

            <div className="flex flex-col gap-24">
              {joinSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeInUp}
                  custom={index}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-14 py-5 md:py-14"
                >
                  <div
                    className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-sm sm:aspect-[3/4]">
                      <Image
                        src={section.images[0]}
                        alt={section.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <div className="relative hidden aspect-[3/4] overflow-hidden rounded-3xl bg-muted shadow-sm sm:block sm:translate-y-10">
                      <Image
                        src={section.images[1]}
                        alt={section.subtitle}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground">
                      {section.subtitle}
                    </p>

                    <h3 className="mt-4 text-4xl font-bold tracking-tight lg:text-6xl">
                      {section.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-accent-foreground md:text-base md:leading-8">
                      {section.description}
                    </p>

                    <JoinSheet
                      type={section.title as any}
                      buttonText={section.cta}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-5 py-20 sm:px-6 sm:py-24 lg:px-20">
          <div className="flex w-full max-w-7xl flex-col items-center">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60 sm:text-sm sm:tracking-[0.3em]">
                Upcoming Programs
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                Moments You Shouldn&apos;t Miss
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Stay connected to upcoming gatherings, meetings and special
                programs at Omega Vision Christian Network.
              </p>
            </motion.div>

            <div className="mt-12 w-full sm:mt-16 lg:mt-20">
              <UpcomingProgramsCarousel />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JoinClient;
