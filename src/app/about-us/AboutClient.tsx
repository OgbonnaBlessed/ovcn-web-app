"use client";

import CarouselDemo from "@/components/shared/Carousel";
import Footer from "@/components/shared/Footer";
import { campuses } from "@/data/campuses";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import { Clock, Instagram, Play } from "lucide-react";
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
          className="relative min-h-screen w-full bg-black"
        >
          <Image
            src="/about-us.jpg"
            fill
            alt="About us"
            quality={100}
            preload
            className="object-cover object-top"
          />
          <div className="absolute flex flex-col gap-5 lg:px-20 px-8 top-1/2 transform -translate-y-1/4 text-white w-full">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center sm:gap-10 gap-5 flex-wrap"
            >
              {["Worship", "Word", "Encounter"].map((a) => (
                <div key={a} className="flex items-center gap-3">
                  <Image
                    src="/star.png"
                    width={20}
                    height={20}
                    alt="star"
                    preload
                  />
                  <p>{a}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-bold lg:text-7xl md:text-4xl text-3xl lg:w-2xl w-full"
            >
              WE ARE A BEACON OF GOD&lsquo;S LIGHT
            </motion.div>
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:w-xl md:text-xl text-[16px] w-full"
            >
              Called to shine in a world of darkness, reflecting Christ&lsquo;s
              love, truth and hope in all we do.
            </motion.div>
          </div>
        </section>

        <section
          id="our-history"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 md:gap-10 py-20 px-6 lg:px-20">
            <h2 className="lg:text-5xl text-3xl font-bold">Our History</h2>
            <div className="w-full flex flex-col gap-5 md:gap-10 text-lg leading-relaxed">
              <div className="flex items-center gap-10">
                <div className="hidden md:block flex-1 md:h-96 relative">
                  <Image
                    src="/history-1.jpg"
                    fill
                    alt="Early days"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex-1 h-52 md:h-96 relative">
                  <Image
                    src="/history-2.jpg"
                    fill
                    alt="Early days"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row align-top justify-between gap-5 md:gap-10 text-sm md:text-base">
                <p>
                  In 2010, driven by a deep desire to encounter the realities of
                  the Spirit, Apostle Clement Gabriel embarked on a journey that
                  would forever transform lives. The foundation of our ministry
                  was laid in fervent prayer, as Apostle
                </p>

                <p>
                  Clement, inspired by Jeremiah 33:3, called upon God for
                  guidance and power: &quot;Call to me and I will answer you and
                  tell you great and unsearchable things you do not
                </p>

                <p>
                  Clement, inspired by Jeremiah 33:3, called upon God for
                  guidance and power: &quot;Call to me and I will answer you and
                  tell you great and unsearchable things you do not
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-vision"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 md:gap-10 py-20 px-6 lg:px-20">
            <h2 className="lg:text-5xl text-3xl font-bold">Vision</h2>
            <div className="w-full flex flex-col gap-5 md:gap-10 text-lg leading-relaxed">
              <div className="w-full flex items-center gap-10">
                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/mission-1.png"
                    fill
                    alt="Teaching the Word"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative flex-1 h-52 md:h-96">
                  <Image
                    src="/mission-2.png"
                    fill
                    alt="Discipleship and growth"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/about-us.jpg"
                    fill
                    alt="Discipleship and growth"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row align-top justify-between gap-5 md:gap-10 text-sm md:text-base">
                <p className="text-start">
                  Our vision is to be a beacon of God&apos;s light, transforming
                  lives through the power of the Holy Spirit and the unchanging
                  Word of God. We aspire to create an environment where
                  individuals can encounter God intimately, experience His love
                  profoundly, and be equipped to live victoriously in Christ.
                </p>
                <p>
                  Our mission is to glorify God by making disciples of all
                  nations, rooted in the teachings of Jesus Christ and guided by
                  the Holy Spirit. We are committed to: Proclaiming the Gospel,
                  Fostering Spiritual Growth, Building a Community of Believers,
                  Empowering for Service, Impacting the Community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-mission"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-5 md:gap-10 py-20 px-6 lg:px-20">
            <h1 className="lg:text-5xl text-3xl font-bold">Mission</h1>
            <div className="w-full flex flex-col gap-5 md:gap-10 text-lg leading-relaxed">
              <div className="w-full flex items-center gap-10">
                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/mission-1.png"
                    fill
                    alt="Teaching the Word"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative flex-1 h-52 md:h-96">
                  <Image
                    src="/mission-2.png"
                    fill
                    alt="Discipleship and growth"
                    className="object-cover object-center"
                  />
                </div>

                <div className="relative hidden md:block flex-1 h-96">
                  <Image
                    src="/about-us.jpg"
                    fill
                    alt="Discipleship and growth"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row align-top justify-between gap-5 md:gap-10 text-sm md:text-base">
                <p className="text-start">
                  Our vision is to be a beacon of God&apos;s light, transforming
                  lives through the power of the Holy Spirit and the unchanging
                  Word of God. We aspire to create an environment where
                  individuals can encounter God intimately, experience His love
                  profoundly, and be equipped to live victoriously in Christ.
                </p>
                <p>
                  Our mission is to glorify God by making disciples of all
                  nations, rooted in the teachings of Jesus Christ and guided by
                  the Holy Spirit. We are committed to: Proclaiming the Gospel,
                  Fostering Spiritual Growth, Building a Community of Believers,
                  Empowering for Service, Impacting the Community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-services"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col gap-10 py-20 px-6 lg:px-20">
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
                <div className="flex items-center gap-2 text-xs md:text-sm p-3 bg-[#0A42D0] text-white rounded-md">
                  <p>Join us online</p>
                  <Play size={14} />
                </div>
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
          <div className="w-full flex flex-col gap-10 py-20 px-6 lg:px-20">
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
                <div className="flex items-center gap-2 text-xs md:text-sm p-3 bg-[#0A42D0] text-white rounded-md">
                  <p>Join us online</p>
                  <Play size={14} />
                </div>
              </Link>
            </div>
            <CarouselDemo />
          </div>
        </section>

        <section
          id="leadership"
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col gap-5 md:gap-10 py-20 px-6 lg:px-20">
            <h1 className="lg:text-5xl text-3xl font-bold">Leadership</h1>
            <div className="w-full flex flex-col items-center gap-10 md:gap-20">
              <div className="relative h-80 lg:h-[30rem] aspect-square">
                <Image
                  src="/apostle.jpeg"
                  alt="Apostle Gabriel Clement"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col items-center text-center gap-2 md:gap-5">
                <h1 className="lg:text-4xl text-xl font-bold">
                  Apostle Gabriel Clement
                </h1>

                <div className="max-w-2xl w-full flex flex-col items-center gap-5 text-sm md:text-base">
                  <p>
                    Our mission is to glorify God by making disciples of all
                    nations, rooted in the teachings of Jesus Christ and guided
                    by the Holy Spirit. We are committed to: Proclaiming the
                    Gospel, Fostering Spiritual Growth, Building a Community of
                    Believers, Empowering for Service, Impacting the Community.
                  </p>

                  <p>
                    Our mission is grounded in the belief that every life can be
                    transformed by the power of the Gospel. Our mission is
                    grounded in the belief that every life can be transformed by
                    the power of the Gospel.
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
          className="relative w-full min-h-screen flex items-center justify-center"
        >
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 py-20 px-6 lg:px-20 pb-20">
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
