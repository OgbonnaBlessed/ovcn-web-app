"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { toast } from "sonner";

const Footer = () => {
    const [email, setEmail] = useState<string | null>(null);

    const sections = [
        {
            title: "Connect",
            navLinks: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Give", href: "/give" },
                { name: "Download Mobile App", href: "/" },
            ]
        },
        {
            title: "Media",
            navLinks: [
                { name: "Watch on YouTube", href: "https://youtube.com/@apostlegabrielclement?si=fcJrps-PvCdtetbh" },
                { name: "Watch on Instagram", href: "https://www.instagram.com/apostlegabrielclement?igsh=cTVoemM2ZzNoOTFx" },
                { name: "Listen on Mixlr", href: "/" },
                { name: "Sermons", href: "/sermons" },
            ]
        },
        {
            title: "Connect With Us",
            navLinks: [
                {
                    name: "Facebook",
                    href: "https://www.facebook.com/apostlegabrielclement",
                    icon: FaFacebook,
                },
                {
                    name: "Instagram",
                    href: "https://www.instagram.com/apostlegabrielclement?igsh=cTVoemM2ZzNoOTFx",
                    icon: FaSquareInstagram,
                },
                {
                    name: "Twitter",
                    href: "https://x.com/OmegaVision_?t=dNI83evEloXPUmI-Jgb2BQ&s=09",
                    icon: FaXTwitter,
                },
            ]
        },
    ]

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter an email address");
            return;
        }

        if (!isValidEmail(email ?? "")) {
            toast.error("Please enter a valid email address");
            return;
        }

        toast.success(`Subscribed successfully with ${email}`);
        setEmail("");
    }

    return (
        <div className='flex flex-col gap-10 bg-accent py-20 lg:px-20 px-8'>
            <div className='w-full flex flex-col gap-10'>
                <div className='w-full flex justify-between flex-wrap gap-10'>
                    <div className='flex flex-col gap-2'>
                        <Link 
                            href="/"
                            className='flex items-center gap-2'
                        >
                            <Image
                                src="/Logo.png" 
                                width={60}
                                height={40}
                                alt='Logo'
                                style={{ height: "auto" }}
                            />
                            <div className='uppercase text-xs leading-tight'>
                                <p className='font-bold text-base'>Omega Vision</p>
                                <p className='tracking-wider'>Christian Network</p>
                            </div>
                        </Link>
                        <p>14 Felicia Coker Street, Pipeline, Fagba, Lagos.</p>
                    </div>

                    {sections.map((section, i) => (
                        <div
                            key={i}
                            className='flex flex-col gap-5'
                        >
                            <p className='font-medium text-xl text-blue-500'>{section.title}</p>
                            {section.title === "Connect With Us" ? (
                                <div className='flex gap-4 text-2xl'>
                                    {section.navLinks.map((navLink, idx) => (
                                        'icon' in navLink ? (
                                            <Link
                                                key={idx}
                                                href={navLink.href}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label={navLink.name}
                                            >
                                                <navLink.icon />
                                            </Link>
                                        ) : null
                                    ))}
                                </div>
                            ) : (
                                <div className='flex flex-col gap-2 text-sm'>
                                    {section.navLinks.map((navLink, idx) => (
                                        <Link
                                            key={idx}
                                            href={navLink.href}
                                            className='hover:underline'
                                        >
                                            {navLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5 md:self-end self-start'>
                    <p className='font-medium text-xl text-blue-500'>NewsLetter</p>
                    <div className='sm:w-sm w-[18rem] max-w-full rounded-full h-14 border relative overflow-hidden'>
                        <input 
                            name="email"
                            type='text'
                            value={email ?? ""}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                            placeholder='Enter your email'
                            className='w-full h-full px-5 outline-none focus:ring-0'
                        />
                        <Button 
                            className='rounded-full absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer active:scale-90 transition-all duration-500 ease-in-out'
                            onClick={handleSubmit}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>

            <div className='text-sm'>
                &copy; Copyright {new Date().getFullYear()} Omega Vision Christian Network. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer