"use client";

import CarouselDemo from "@/components/shared/Carousel";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { campuses } from "@/data/locations";
import { fadeInUp } from "@/helper/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  FaFacebookF,
  FaHandPointRight,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const services = [
  {
    image: "/service-1.jpg",
    name: "Moment of Encounter",
    day: "Sunday Service",
    date: "12:00PM",
  },
  {
    image: "/service-2.jpg",
    name: "Service of Sound",
    day: "Wednesday Service",
    date: "5:00PM",
  },
  {
    image: "/service-3.jpg",
    name: "Monthly Mega Meeting",
    day: "Third Fridays of the month",
    date: "6:00PM",
  },
];

const aboutSections = [
  {
    id: "our-history",
    label: "Our Story",
    title: "From hunger to a house of encounter",
    images: ["/history-1.jpg", "/history-2.jpg"],
    paragraphs: [
      "In 2010, driven by a hunger for a true encounter with God, Apostle Gabriel Clement began a journey rooted in prayer and dependence on the Holy Spirit.",
      "What started as a small gathering soon became a place of transformation, drawing people seeking truth, purpose, and the reality of God’s presence.",
      "Today, Omega Vision Christian Network stands as a thriving community committed to raising believers who reflect Christ and shine God’s light.",
    ],
  },
  {
    id: "our-vision",
    label: "Vision",
    title: "A people formed by light, truth and encounter",
    images: ["/mission-1.png", "/mission-2.png"],
    paragraphs: [
      "Our vision is to be a beacon of God’s light, where lives are transformed through the power of the Holy Spirit and the unchanging truth of His Word.",
      "We exist to create an atmosphere where people can genuinely encounter God, grow in intimacy with Him, and walk in the fullness of divine purpose.",
    ],
  },
  {
    id: "our-mission",
    label: "Mission",
    title: "Raising disciples rooted in Christ",
    images: ["/mission-2.png", "/about-us.png"],
    paragraphs: [
      "Our mission is to glorify God by raising disciples who are firmly rooted in the teachings of Jesus Christ and guided daily by the Holy Spirit.",
      "We are committed to proclaiming the Gospel with clarity and power, nurturing spiritual growth through sound teaching, and equipping believers for lives of faith and impact.",
    ],
  },
];

const values = ["Worship", "Word", "Encounter", "Prayer", "Light", "Purpose"];

const ParallaxImage = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.02]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
};

const AboutClient = () => {
  return (
    <>
      <main className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        {/* Hero Section — unchanged */}
        <section
          id="who-we-are"
          className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black"
        >
          <Image
            src="/about-us.png"
            fill
            alt="About us"
            priority
            sizes="100vw"
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
                About Us
              </p>

              <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                WE ARE A BEACON OF GOD&apos;S LIGHT
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Raising believers through worship, the Word and
                life-transforming encounters with God.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story / Vision / Mission */}
        <section className="relative w-full overflow-hidden bg-white px-6 py-24 lg:px-20">
          <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute bottom-40 left-0 h-96 w-96 rounded-full bg-yellow-100/50 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-28">
            {aboutSections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeInUp}
                custom={index}
                className="flex flex-col gap-10"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <ParallaxImage
                    src={section.images[0]}
                    alt={section.title}
                    className="aspect-[4/3] rounded-3xl bg-muted shadow-sm"
                  />

                  <ParallaxImage
                    src={section.images[1]}
                    alt={section.label}
                    className="hidden aspect-[4/3] rounded-3xl bg-muted shadow-sm md:block md:translate-y-10"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground">
                      {section.label}
                    </p>

                    <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid gap-5 text-sm leading-7 text-accent-foreground md:text-base md:leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="relative overflow-hidden bg-black px-6 py-24 text-white lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,66,208,0.18),transparent_55%)]" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              What Defines Us
            </p>

            <h2 className="max-w-4xl text-4xl font-bold leading-tight lg:text-6xl">
              We are built around God’s presence, His Word, and transformed
              lives.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-md"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="our-services" className="w-full px-6 py-24 lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                  Gather With Us
                </p>

                <h2 className="mt-4 text-4xl font-bold lg:text-6xl">
                  Our Services
                </h2>

                <p className="mt-5 text-sm leading-7 text-accent-foreground md:text-base">
                  Every service is an opportunity to encounter God, receive the
                  Word, and grow in fellowship.
                </p>
              </div>

              <Link href="/online">
                <Button className="h-11 rounded-full bg-blue-600 px-7 text-white">
                  Join us online
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      fill
                      alt={service.name}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="text-xl font-semibold">
                        {service.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-sm text-white/75">
                        <p>{service.day}</p>
                        <span className="h-1 w-1 rounded-full bg-white/50" />
                        <div className="flex items-center gap-1">
                          <Clock size={13} />
                          <p>{service.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="hear-from-our-members"
          className="w-full px-6 py-24 lg:px-20"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                  Testimonies
                </p>

                <h2 className="mt-4 text-4xl font-bold lg:text-6xl">
                  Hear from our members
                </h2>

                <p className="mt-5 text-sm leading-7 text-accent-foreground md:text-base">
                  Our members have shared their experiences over time.
                </p>
              </div>

              <Link href="/online">
                <Button className="h-11 rounded-full bg-blue-600 px-7 text-white">
                  Join us online
                </Button>
              </Link>
            </div>

            <CarouselDemo />
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="w-full px-6 py-24 lg:px-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
            <ParallaxImage
              src="/apostle.jpeg"
              alt="Apostle Gabriel Clement"
              className="aspect-[4/5] w-full max-w-md rounded-[2rem]"
            />

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Leadership
              </p>

              <h2 className="mt-4 text-3xl font-bold lg:text-5xl">
                Apostle Gabriel Clement
              </h2>

              <div className="mx-auto mt-6 grid max-w-3xl gap-5 text-sm leading-7 text-accent-foreground md:text-base md:leading-8">
                <p>
                  Apostle Gabriel Clement is a devoted servant of God with a
                  strong passion for revealing Christ and raising a generation
                  rooted in truth and empowered by the Holy Spirit.
                </p>

                <p>
                  Through his leadership, Omega Vision Christian Network has
                  grown into a vibrant community where lives are changed, faith
                  is strengthened, and individuals are empowered to reflect
                  Christ.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-5">
                <Link
                  href="https://www.facebook.com/share/17Fv9oBnBW/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <div className="rounded-full bg-white p-3 text-blue-500 shadow">
                    <FaFacebookF size={16} />
                  </div>
                </Link>

                <Link
                  href="https://www.instagram.com/officialgabrielclement?igsh=cTVoemM2ZzNoOTFx"
                  target="_blank"
                >
                  <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2.5">
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                </Link>

                <Link href="https://x.com/omegavision_?s=21" target="_blank">
                  <div className="rounded-full bg-white p-3 shadow">
                    <FaXTwitter size={16} />
                  </div>
                </Link>

                <Link
                  href="https://www.youtube.com/@Apostlegabrielclement"
                  target="_blank"
                >
                  <div className="rounded-full bg-red-600 p-2.5">
                    <FaYoutube className="h-5 w-5 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section
          id="our-locations"
          className="relative w-full px-6 py-24 lg:px-20"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Visit Us
              </p>

              <h2 className="mt-4 text-4xl font-bold lg:text-6xl">
                Our Locations
              </h2>

              <p className="mt-5 text-sm leading-7 text-accent-foreground md:text-base">
                A place prepared for you. You are always welcome at Omega Vision
                Christian Network.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {campuses.map((campus, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <p className="font-medium text-base md:text-lg">
                      {campus.region}
                    </p>

                    <p className="text-sm text-accent-foreground md:text-base">
                      {campus.address}
                    </p>

                    <a
                      href={campus.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex cursor-pointer items-center gap-2 text-xs"
                    >
                      <FaHandPointRight />
                      <p className="transition-all duration-300 hover:underline">
                        Click to view on map
                      </p>
                    </a>
                  </div>
                ))}
              </div>

              <div className="h-[300px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[350px] lg:h-[400px] lg:rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.93889887012!2d3.316951186017996!3d6.654495730100726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91061c06ec5b%3A0xd3d733689d6e564d!2sOMEGA%20VISION%20CHRISTIAN%20NETWORK!5e0!3m2!1sen!2sng!4v1753849642067!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutClient;
