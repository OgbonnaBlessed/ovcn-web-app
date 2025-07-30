import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
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

    return (
        <div className='flex flex-col gap-10 bg-accent py-20 lg:px-20 px-8'>
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
                        <div className='max-md:text-xs max-lg:text-sm font-serif'>
                            <p className='uppercase'>Omega Vision Christian Network</p>
                            <p>(The Adullam of destiny)</p>
                        </div>
                    </Link>
                    <p>14 Felicia Coker Street, Pipeline, Fagba, Lagos.</p>
                </div>

                {sections.map((section, i) => (
                    <div
                        key={i}
                        className='flex flex-col gap-5'
                    >
                        <p className='font-medium text-xl'>{section.title}</p>
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

            <div className='text-sm'>
                © Copyright 2025 Omega Vision Christian Network. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer