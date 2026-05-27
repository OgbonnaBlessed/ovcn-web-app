"use client";

import CarouselDemo from "@/components/shared/Carousel";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { campuses } from "@/data/locations";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import { Clock, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const AboutClient = () => {
  return (
    <>
      <main className="w-full max-w-screen overflow-x-hidden scroll-smooth">
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

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {["Worship", "Word", "Encounter"].map((item) => (
                  <div
                    key={item}
                    className="rounded-full bg-white/10 px-5 py-2 text-xs font-medium tracking-[0.22em] text-white/85 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-300 hover:bg-white/15 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="our-history"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 md:gap-10 py-14 px-6 lg:p-20">
            <h2 className="lg:text-5xl text-3xl font-bold">Our History</h2>
            <div className="w-full flex flex-col gap-5 md:gap-10 text-lg leading-relaxed">
              <div className="flex items-center gap-10">
                <div className="hidden md:block flex-1 md:h-96 relative">
                  <Image
                    src="/history-1.jpg"
                    fill
                    alt="Early days"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex-1 h-52 md:h-96 relative">
                  <Image
                    src="/history-2.jpg"
                    fill
                    alt="Early days"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row align-top justify-between gap-5 md:gap-10 text-sm md:text-base">
                <p>
                  In 2010, driven by a hunger for a true encounter with God,
                  Apostle Gabriel Clement began a journey rooted in prayer and
                  dependence on the Holy Spirit. What started as a small
                  gathering soon became a place of powerful transformation.
                </p>

                <p>
                  As the vision unfolded, the ministry grew, drawing people
                  seeking truth and purpose. Through the Word and spiritual
                  encounters, the church became a strong foundation for faith
                  and discipleship.
                </p>

                <p>
                  Today, Omega Vision Christian Network is a thriving community,
                  committed to raising believers who reflect Christ. From humble
                  beginnings, our mission remains clear, to shine God’s light
                  and impact lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-vision"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 md:gap-10 py-14 px-6 lg:p-20">
            <h2 className="lg:text-5xl text-3xl font-bold">Vision</h2>
            <div className="w-full flex flex-col gap-5 md:gap-10 text-lg leading-relaxed">
              <div className="w-full flex items-center gap-10">
                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/mission-1.png"
                    fill
                    alt="Teaching the Word"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative flex-1 h-52 md:h-96">
                  <Image
                    src="/mission-2.png"
                    fill
                    alt="Discipleship and growth"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/about-us.png"
                    fill
                    alt="Discipleship and growth"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row align-top justify-between gap-5 md:gap-10 text-sm md:text-base">
                <p className="text-start">
                  Our vision is to be a beacon of God’s light, where lives are
                  transformed through the power of the Holy Spirit and the
                  unchanging truth of His Word. We exist to create an atmosphere
                  where people can genuinely encounter God, grow in intimacy
                  with Him, and walk in the fullness of their divine purpose.
                </p>
                <p>
                  We are devoted to proclaiming the Gospel with clarity,
                  nurturing spiritual growth through sound teaching, building a
                  strong and united community, and empowering believers to serve
                  and make meaningful impact in their families, communities, and
                  beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-mission"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 md:gap-10 py-14 px-6 lg:p-20">
            <h1 className="lg:text-5xl text-3xl font-bold">Mission</h1>
            <div className="w-full flex flex-col gap-5 md:gap-10 text-lg leading-relaxed">
              <div className="w-full flex items-center gap-10">
                <div className="relative flex-1 h-52 md:h-96">
                  <Image
                    src="/mission-1.png"
                    fill
                    alt="Teaching the Word"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/mission-2.png"
                    fill
                    alt="Discipleship and growth"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/about-us.png"
                    fill
                    alt="Discipleship and growth"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row align-top justify-between gap-5 md:gap-10 text-sm md:text-base">
                <p className="text-start">
                  Our mission is to glorify God by raising disciples who are
                  firmly rooted in the teachings of Jesus Christ and guided
                  daily by the Holy Spirit. We exist to lead people into a
                  deeper relationship with God and a life that reflects His
                  truth.
                </p>
                <p>
                  We are committed to proclaiming the Gospel with clarity and
                  power, nurturing spiritual growth through sound teaching, and
                  equipping believers to live lives of purpose, faith, and
                  impact in every sphere of influence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-services"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col gap-10 py-14 px-6 lg:p-20">
            <div className="flex items-start md:items-center flex-col md:flex-row gap-5 md:gap-0 justify-between">
              <div className="w-full max-w-lg flex flex-col md:gap-2 gap-1">
                <h2 className="lg:text-5xl text-3xl font-bold w-full">
                  Our Services
                </h2>
                <p className="text-sm md:text-base">
                  You can be a part of us and be present in any of our services
                  at Omega Vision Christian Network.
                </p>
              </div>

              <Link href="/online">
                <Button className="h-11 rounded-full bg-blue-600 px-7 text-white cursor-pointer">
                  Join us online
                </Button>
              </Link>
            </div>
            <div className="w-full flex flex-col gap-5 md:flex-row items-center justify-between">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src={service.image}
                    fill
                    alt={service.name}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute left-5 bottom-5 flex flex-col text-white z-10">
                    <h3 className="font-medium">{service.name}</h3>
                    <div className="flex items-baseline-last gap-2 text-sm font-light">
                      <p>{service.day}</p>
                      <div className="flex items-center gap-1 text-xs text-[#0A42D0]">
                        <Clock size={12} />
                        <p>{service.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="hear-from-our-members"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col gap-10 py-14 px-6 lg:p-20">
            <div className="w-full flex items-start md:items-center flex-col md:flex-row gap-5 md:gap-0 justify-between">
              <div className="w-full max-w-xl flex flex-col md:gap-2 gap-1">
                <h2 className="lg:text-5xl text-3xl font-bold w-full">
                  Hear from our members{" "}
                </h2>
                <p className="text-sm md:text-base">
                  Our members have shared their experience over time.
                </p>
              </div>

              <Link href="/online">
                <Button className="h-11 rounded-full bg-blue-600 px-7 text-white cursor-pointer">
                  Join us online
                </Button>
              </Link>
            </div>
            <CarouselDemo />
          </div>
        </section>

        <section
          id="leadership"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col gap-5 md:gap-10 py-14 px-6 lg:p-20">
            <h1 className="lg:text-5xl text-3xl font-bold">Leadership</h1>
            <div className="w-full flex flex-col items-center gap-10 md:gap-20">
              <div className="relative h-80 lg:h-[30rem] aspect-square">
                <Image
                  src="/apostle.jpeg"
                  alt="Apostle Gabriel Clement"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col items-center text-center gap-2 md:gap-5">
                <h1 className="lg:text-4xl text-xl font-bold">
                  Apostle Gabriel Clement
                </h1>

                <div className="max-w-2xl w-full flex flex-col items-center gap-5 text-sm md:text-base">
                  <p>
                    Apostle Gabriel Clement is a devoted servant of God with a
                    strong passion for revealing Christ and raising a generation
                    rooted in truth and empowered by the Holy Spirit. His
                    ministry is marked by a deep commitment to prayer, sound
                    teaching, and the demonstration of God’s power.
                  </p>

                  <p>
                    Through his leadership, Omega Vision Christian Network has
                    grown into a vibrant community where lives are changed,
                    faith is strengthened, and individuals are empowered to
                    reflect Christ in every area of life.
                  </p>

                  <div className="flex items-center gap-5">
                    <Link
                      href="https://www.facebook.com/share/17Fv9oBnBW/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="bg-white text-blue-500 p-3 rounded-full shadow shadow-gray-300">
                        <FaFacebookF
                          size={16}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                    <Link
                      href="https://www.instagram.com/officialgabrielclement?igsh=cTVoemM2ZzNoOTFx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="p-2.5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 inline-flex">
                        <Instagram className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </Link>
                    <Link
                      href="https://x.com/omegavision_?s=21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="bg-white p-3 rounded-full shadow shadow-gray-300">
                        <FaXTwitter
                          size={16}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>{" "}
                    </Link>
                    <Link
                      href="https://www.youtube.com/@Apostlegabrielclement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="bg-red-600 p-2.5 rounded-full flex items-center justify-center">
                        <FaYoutube className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-locations"
          className="relative w-full min-h-screen flex items-center justify-center pb-20"
        >
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 py-14 px-6 lg:p-20">
            <div className="w-full max-w-md flex flex-col md:gap-2 gap-1">
              <h2 className="lg:text-5xl text-3xl font-bold w-full">
                Our Locations
              </h2>
              <p className="text-sm md:text-base">
                A place prepared for you. You are always welcome at Omega Vision
                Christian Network.
              </p>
            </div>
            <div className="w-full flex flex-col gap-12 sm:gap-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {campuses.map((campus, i) => (
                  <div key={i} className="flex flex-col md:gap-2 gap-1">
                    <p className="font-medium text-base md:text-lg">
                      {campus.region}
                    </p>
                    <p className="text-sm md:text-base text-accent-foreground font-light">
                      {campus.address}
                    </p>
                    <a
                      href={campus.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center cursor-pointer gap-2"
                    >
                      <FaHandPointRight />
                      <p className="hover:underline transition-all duration-300 ease-in-out">
                        Click to view on map
                      </p>
                    </a>
                  </div>
                ))}
              </div>

              <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.93889887012!2d3.316951186017996!3d6.654495730100726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91061c06ec5b%3A0xd3d733689d6e564d!2sOMEGA%20VISION%20CHRISTIAN%20NETWORK!5e0!3m2!1sen!2sng!4v1753849642067!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
