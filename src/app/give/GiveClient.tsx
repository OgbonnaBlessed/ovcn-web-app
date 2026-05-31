"use client";

import Footer from "@/components/shared/Footer";
import Give from "@/components/shared/Give";
import { PartnerSheet } from "@/components/shared/PartnerSheet";
import ProjectsCarousel from "@/components/shared/ProjectsCarousel";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const GiveClient = () => {
  return (
    <>
      <div className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        <section
          id="partnership"
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
        >
          <Image
            src="/give.png"
            fill
            alt="Partnership"
            quality={100}
            preload
            className="object-cover object-center"
          />

          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Soft cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />

          {/* Warm golden glow */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5b942]/12 blur-3xl md:h-[520px] md:w-[520px]" />

          {/* Edge vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.45)_100%)]" />

          {/* Content */}
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
                Give
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                PARTNER WITH US IN ADVANCING GOD&apos;S KINGDOM
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Support the work of the ministry as we spread the Gospel and
                impact lives across communities.
              </p>
            </motion.div>
          </div>

          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/60 to-transparent" />
        </section>

        <section className="min-h-screen w-full flex items-center justify-center">
          <div className="flex flex-col gap-10 items-center py-14 px-6 lg:p-20">
            <div className="lg:w-6xl w-full lg:text-7xl text-5xl text-center italic font-extralight font-serif">
              Each of you should give what you have decided in your heart to
              give, not reluctantly or under compulsion, for God loves a
              cheerful giver.
            </div>
            <p className="lg:text-xl">2 Corinthians 9:7 (NIV)</p>
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
                Latest Projects
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                Advancing God&apos;s Kingdom
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Be a part of what God is doing through Omega Vision Christian
                Network as we impact lives, transform communities and spread the
                Gospel.
              </p>
            </motion.div>

            <div className="mt-12 w-full sm:mt-16 lg:mt-20">
              <ProjectsCarousel />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F8F9FB] px-6 py-24 lg:px-20">
          <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              custom={0}
              className="relative h-[340px] overflow-hidden rounded-[2rem] bg-muted shadow-xl shadow-black/5 sm:h-[440px] lg:h-[560px]"
            >
              <Image
                src="/apostle.jpeg"
                alt="Apostle Gabriel Clement"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              custom={1}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Honour
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 lg:text-6xl">
                Give to our Man of God
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Honour Apostle Gabriel Clement and support the grace, labour,
                and spiritual covering God has placed over this house.
              </p>

              <div className="mt-8 max-w-xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-black/5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Account Details
                </p>

                <div className="mt-6 grid gap-5 text-sm md:text-base">
                  <div>
                    <p className="text-slate-500">Account Name</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      Gabriel Owoholeyi Clement
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Account Number</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      0247797519
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Bank</p>
                    <p className="mt-1 font-semibold text-slate-950">
                      Guaranty Trust Bank
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-20">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-100/60 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              custom={0}
              className="lg:order-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Partnership
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 lg:text-6xl">
                Become a Partner
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Partner with Omega Vision Christian Network as we spread the
                Gospel, raise disciples, support projects, and impact lives
                across communities.
              </p>

              <div className="mt-8 max-w-xl rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/15">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                  Partnership Giving
                </p>

                <div className="mt-6 grid gap-5 text-sm md:text-base">
                  <div>
                    <p className="text-white/50">Account Name</p>
                    <p className="mt-1 font-semibold">
                      Omegavision Network G.S - Partnership
                    </p>
                  </div>

                  <div>
                    <p className="text-white/50">Account Number</p>
                    <p className="mt-1 font-semibold">4001355658</p>
                  </div>

                  <div>
                    <p className="text-white/50">Bank</p>
                    <p className="mt-1 font-semibold">Moniepoint MFB</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <PartnerSheet />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeInUp}
              custom={1}
              className="relative h-[340px] overflow-hidden rounded-[2rem] bg-muted shadow-xl shadow-black/5 sm:h-[440px] lg:h-[560px]"
            >
              <Image
                src="/partnership.png"
                alt="Become a partner"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </section>
        <section
          id="give-online"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <Give />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GiveClient;
