/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { campuses } from "@/data/locations";
import { fadeInUp } from "@/helper/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa6";
import { toast } from "sonner";
import { COUNTRY_CODES } from "@/data/country-codes";

const ContactClient = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+234");

  const normalizePhoneNumber = (phone: string) => {
    return phone.replace(/[^\d]/g, "");
  };

  const fullPhoneNumber = `${countryCode}${normalizePhoneNumber(formData.phone)}`;

  const handleForm = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: fullPhoneNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      setCountryCode("+234");

      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      });

      toast.success("Message sent. We’ll get back to you shortly.");
    } catch (error) {
      console.log(error);

      toast.error("Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-screen overflow-x-hidden scroll-smooth">
        <section id="contact" className="relative min-h-screen w-full bg-black">
          <Image
            src="/contact-us.png"
            id="partnership"
            className="relative min-h-screen w-full bg-black"
            fill
            alt="Partnership"
            quality={100}
            preload
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-fit">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-bold lg:text-7xl text-5xl lg:w-6xl w-full text-center"
            >
              WE ARE ALWAYS READY TO HELP AND ANSWER YOUR QUESTIONS
            </motion.div>
          </div>
        </section>

        <section className="relative w-full min-h-screen flex items-center justify-center">
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 py-14 px-6 lg:p-20 pb-20">
            <div className="flex flex-col md:gap-4 gap-2 w-full lg:w-1/2">
              <h2 className="lg:text-5xl text-3xl font-bold w-full">
                Get in touch
              </h2>
              <p className="text-sm md:text-base">
                omegavision.reach@gmail.com
              </p>
              <p className="text-sm md:text-base">+234 818 890 5792</p>
              <p className="text-sm md:text-base lg:w-md">
                14th Felicia Coker Street, Pipeline Fagba, Lagos State, Nigeria.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-1/2 flex flex-col gap-12 sm:gap-16"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-12 sm:gap-16">
                <div className="flex flex-col gap-2 w-full">
                  <h3>First Name</h3>
                  <Input
                    type="text"
                    id="firstname"
                    autoComplete="off"
                    value={formData.firstname}
                    onChange={handleForm}
                    className="border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <h3>Last Name</h3>
                  <Input
                    type="text"
                    id="lastname"
                    autoComplete="off"
                    value={formData.lastname}
                    onChange={handleForm}
                    className="border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Phone Number</h3>

                <div className="flex items-end gap-3">
                  <Select
                    value={countryCode}
                    onValueChange={setCountryCode}
                    disabled={loading}
                  >
                    <SelectTrigger className="h-10 w-[120px] rounded-none border-0 border-b-2 border-accent-foreground bg-transparent px-0 shadow-none focus:ring-0 focus:ring-offset-0 outline-none focus:outline-none cursor-pointer">
                      <SelectValue placeholder="+234" />
                    </SelectTrigger>

                    <SelectContent
                      align="start"
                      className="rounded-xl !border !border-gray-300 !bg-background p-1 !shadow-xl"
                    >
                      {COUNTRY_CODES.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          className="cursor-pointer rounded-lg"
                        >
                          <div className="flex w-full items-center justify-between gap-3">
                            <span className="text-sm font-medium">
                              {country.code}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {country.label}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="off"
                    disabled={loading}
                    placeholder={
                      COUNTRY_CODES.find(
                        (country) => country.code === countryCode,
                      )?.placeholder
                    }
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^\d\s()-]/g, "");

                      setFormData((prevData) => ({
                        ...prevData,
                        phone: value,
                      }));
                    }}
                    className="border-0 border-b-2 border-accent-foreground outline-none focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3>Email</h3>
                <Input
                  id="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleForm}
                  className="border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <h3>Message</h3>
                <Textarea
                  id="message"
                  autoComplete="off"
                  rows={10}
                  value={formData.message}
                  onChange={handleForm}
                  className="border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out min-w-[12rem] rounded-none shadow-none px-0 resize-none w-full"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-fit self-start cursor-pointer rounded-full px-8 py-5 active:scale-95 transition-all duration-300 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
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
      </div>
      <Footer />
    </>
  );
};

export default ContactClient;
