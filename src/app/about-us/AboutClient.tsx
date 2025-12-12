"use client";

import Footer from "@/components/shared/Footer";
import { campuses } from "@/data/campuses";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    FaFacebook,
    FaHandPointRight,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa6";

const AboutClient = () => {
  return (
    <>
      <main className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        <section
          id="who-we-are"
          className="relative min-h-screen min-w-screen overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/about-us.jpg"
              fill
              alt="About us"
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute flex flex-col gap-5 lg:px-20 px-8 top-1/2 transform -translate-y-1/4 text-white w-full">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center sm:gap-10 gap-5 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <Image src="/star.png" width={20} height={20} alt="star" />
                <p>Worship</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/star.png" width={20} height={20} alt="star" />
                <p>Word</p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/star.png" width={20} height={20} alt="star" />
                <p>Encounter</p>
              </div>
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
              Called to shine in a world of darkness - reflecting Christ&lsquo;s
              love, truth and hope in all we do.
            </motion.div>
          </div>
        </section>

        <section id="our-history" className="relative py-24 px-8 lg:px-20">
          <h2 className="lg:text-7xl text-5xl font-bold mb-10">Our History</h2>
          <div className="w-full text-lg leading-relaxed">
            <div className="w-full min-h-96 relative">
              <Image
                src="/history.png"
                fill
                alt="Early days"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col md:flex-row align-top justify-between gap-8">
              <p className="mt-8">
                In 2010, driven by a deep desire to encounter the realities of
                the Spirit, Apostle Clement Gabriel embarked on a journey that
                would forever transform lives. The foundation of our ministry
                was laid in fervent prayer, as Apostle
              </p>

              <p className="md:mt-8">
                Clement, inspired by Jeremiah 33:3, called upon God for guidance
                and power: &quot;Call to me and I will answer you and tell you
                great and unsearchable things you do not
              </p>

              <p className="md:mt-8">
                Clement, inspired by Jeremiah 33:3, called upon God for guidance
                and power: &quot;Call to me and I will answer you and tell you
                great and unsearchable things you do not
              </p>
            </div>
          </div>
        </section>

        <section id="our-mission" className="relative py-24 px-8 lg:px-20">
          <h2 className="lg:text-7xl text-5xl font-bold mb-10">
            Vision & Mission
          </h2>
          <div className="w-full text-lg leading-relaxed">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center items-center gap-10">
              <div className="w-full max-w-xs sm:w-[400px] h-64 sm:h-72 relative overflow-hidden">
                <Image
                  src="/mission-1.png"
                  fill
                  alt="Teaching the Word"
                  className="object-cover object-center"
                />
              </div>

              <div className="w-full max-w-xs sm:w-[400px] h-64 sm:h-72 relative overflow-hidden">
                <Image
                  src="/mission-2.png"
                  fill
                  alt="Discipleship and growth"
                  className="object-cover object-center"
                />
              </div>

              <div className="w-full max-w-xs sm:w-[400px] h-64 sm:h-72 relative overflow-hidden">
                <Image
                  src="/about-us.jpg"
                  fill
                  alt="Discipleship and growth"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row align-top justify-between gap-8 mt-8">
              <p>
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
        </section>

        <section
          id="leadership"
          className="relative flex flex-col gap-10 lg:gap-20 py-24 lg:px-20 px-8 w-full"
        >
          <h1 className="lg:text-7xl text-5xl font-bold w-full">Leadership</h1>
          <div className="w-full flex flex-col xl:flex-row items-start gap-20">
            <div className="w-full relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/sermon-icon.jpg"
                alt="Apostle Gabriel Clement"
                fill
                className="object-center object-cover"
              />
            </div>

            <div className="flex flex-col gap-8">
              <h1 className="lg:text-5xl text-3xl font-bold">
                Apostle Gabriel Clement
              </h1>

              <div className="flex flex-col gap-5 text-lg">
                <p>
                  Our mission is to glorify God by making disciples of all
                  nations, rooted in the teachings of Jesus Christ and guided by
                  the Holy Spirit. We are committed to: Proclaiming the Gospel,
                  Fostering Spiritual Growth, Building a Community of Believers,
                  Empowering for Service, Impacting the Community.
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
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/officialgabrielclement?igsh=cTVoemM2ZzNoOTFx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://x.com/omegavision_?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-locations"
          className="relative flex flex-col lg:flex-row gap-10 lg:gap-20 py-24 px-8 lg:px-20 w-full"
        >
          <div className="flex flex-col md:gap-6 gap-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-4xl font-bold w-full">
              Our Locations
            </h2>
            <p className="text-base sm:text-lg">
              A place prepared for you. You are always welcome at Omega Vision
              Christian Network.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-12 sm:gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {campuses.map((campus, i) => (
                <div key={i} className="flex flex-col md:gap-2 gap-1">
                  <p className="font-medium text-lg">{campus.region}</p>
                  <p className="text-accent-foreground font-light">
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutClient;
