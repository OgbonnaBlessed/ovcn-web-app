"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const sections = [
    {
      title: "Connect",
      navLinks: [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about-us" },
        { name: "Give", href: "/give" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Download mobile app", href: "/" },
      ],
    },
    {
      title: "Media",
      navLinks: [
        {
          name: "Watch on YouTube",
          href: "https://youtube.com/@apostlegabrielclement?si=fcJrps-PvCdtetbh",
        },
        {
          name: "Watch on Instagram",
          href: "https://www.instagram.com/apostlegabrielclement?igsh=cTVoemM2ZzNoOTFx",
        },
        { name: "Listen on way stream", href: "/" },
        { name: "Sermons", href: "/sermons" },
      ],
    },
    {
      title: "Connect With Us",
      navLinks: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/apostlegabrielclement",
          icon: FaFacebookF,
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/apostlegabrielclement?igsh=cTVoemM2ZzNoOTFx",
          icon: Instagram,
        },
        {
          name: "Twitter",
          href: "https://x.com/OmegaVision_?t=dNI83evEloXPUmI-Jgb2BQ&s=09",
          icon: FaXTwitter,
        },
        {
          name: "Youtube",
          href: "https://www.youtube.com/@Apostlegabrielclement",
          icon: FaYoutube,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-16 bg-black text-white py-20 lg:px-20 px-8">
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex justify-between flex-wrap gap-10">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/new-logo.png"
                width={60}
                height={40}
                alt="Logo"
                style={{ height: "auto" }}
              />
              <div className="uppercase text-xs leading-tight">
                <p className="font-bold text-base">Omega Vision</p>
                <p className="tracking-wider">Christian Network</p>
              </div>
            </Link>
            <p className="text-sm md:text-base">14 Felicia Coker Street, Pipeline, Fagba, Lagos.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-2 md:gap-5">
                <p className="font-medium text-base md:text-xl text-blue-500">
                  {section.title}
                </p>
                {section.title === "Connect With Us" ? (
                  <div className="flex gap-4 text-2xl">
                    {section.navLinks.map((navLink, idx) =>
                      "icon" in navLink ? (
                        <Link
                          key={idx}
                          href={navLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={navLink.name}
                        >
                          <navLink.icon size={18} />
                        </Link>
                      ) : null,
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 text-sm">
                    {section.navLinks.map((navLink, idx) => (
                      <Link
                        key={idx}
                        href={navLink.href}
                        className="hover:underline"
                      >
                        {navLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-sm text-center">
        &copy; Copyright {new Date().getFullYear()} Omega Vision Christian
        Network. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
