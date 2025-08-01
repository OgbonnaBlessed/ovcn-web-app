"use client";

import { CarouselDApiDemo } from "@/components/shared/CarouselDemo";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import React from "react";
import { FaHandPointRight } from "react-icons/fa6"

const AboutUs = () => {
    const campuses = [
        {
            region: "Main Worship Center",
            address: "14 Felicia Coker Street, Pipeline, Fagba, Lagos State",
            mapLink: "https://www.google.com/maps?q=14+Felicia+Coker+Street,+Pipeline,+Fagba,+Lagos+State"
        },
        {
            region: "Ikorodu Campus",
            address: "Destiny Castle Hotel, Ikorodu, Lagos State.",
            mapLink: "https://www.google.com/maps?q=Destiny+Castle+Hotel,+Ikorodu,+Lagos+State"
        },
        {
            region: "Unilag Campus",
            address: "Otunba Payne Street, Akoka, Lagos State.",
            mapLink: "https://www.google.com/maps?q=Otunba+Payne+Street,+Akoka,+Lagos+State"
        },
        {
            region: "UI Campus",
            address: "University of Ibadan Post, Ibadan, Oyo State.",
            mapLink: "https://www.google.com/maps?q=University+of+Ibadan,+Ibadan,+Oyo+State"
        },
    ];
    
    return (
        <>
            <main className="w-full max-w-screen overflow-x-hidden scroll-smooth">
                <section id="who-we-are" className="relative min-h-screen min-w-screen overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/about-us.jpg"
                            fill
                            alt="About us"
                            priority
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="absolute flex flex-col gap-5 lg:px-20 px-8 top-1/2 transform -translate-0.5 text-white w-full">
                        <div className="flex items-center sm:gap-10 gap-5 flex-wrap">
                            <div className="flex items-center gap-2">
                                <Image 
                                    src="/star.png"
                                    width={20}
                                    height={20}
                                    alt="star"
                                />
                                <p>Worship</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/star.png"
                                    width={20}
                                    height={20}
                                    alt="star"
                                />
                                <p>Word</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image 
                                    src="/star.png"
                                    width={20}
                                    height={20}
                                    alt="star"
                                />
                                <p>Encounter</p>
                            </div>
                        </div>
                        <div className="font-bold lg:text-7xl md:text-4xl text-3xl lg:w-2xl w-full">
                            WE ARE A BEACON OF GOD&lsquo;S LIGHT
                        </div>
                        <div className="lg:w-xl md:text-xl text-[16px] w-full">
                            Called to shine in a world of darkness - reflecting Christ&lsquo;s love, truth and hope in all we do.
                        </div>
                    </div>
                </section>

                <section id="our-history" className="relative py-24 px-8 lg:px-20">
                    <h2 className="lg:text-7xl text-5xl font-bold mb-10">Our History</h2>
                    <div className="relative w-full text-lg leading-relaxed">
                        <div className="float-left mr-6 mb-6 w-full max-w-xs sm:w-72 sm:h-72 h-64 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/about-us.jpg"
                                fill
                                alt="Early days"
                                className="object-cover object-center"
                            />
                        </div>

                        <p>
                            Our journey began with a divine call, a burden birthed in the heart of our founder to raise a people
                            who would reveal Christ in power and purity. With humble beginnings and unwavering faith, what started
                            as a small fellowship quickly grew into a movement of spiritual awakening. Grounded in prayer, worship,
                            and the Word, we witnessed lives transformed, souls won, and destinies aligned with God’s purpose.
                        </p>

                        <p className="mt-4">
                            As the fire spread, more hands were joined, and the vision expanded beyond city walls. Camps turned into
                            centers, and centers into branches, reaching lives across Nigeria and beyond. Testimonies of healing,
                            deliverance, and restoration began pouring in as God confirmed His word with signs following (Mark 16:20).
                        </p>

                        <p className="mt-4">
                            Our history is not just a record of the past, but a testament to God’s faithfulness and a prophecy of greater
                            things ahead. Each season, God adds to us, new leaders, new territories, new expressions of His grace.
                            Through every trial and triumph, we’ve remained anchored in our divine mandate.
                        </p>

                        <p className="mt-4">
                            Today, we continue to press forward, building a legacy of faith, love, and kingdom impact. Our arms are open
                            to the nations, our hearts fixed on Christ, and our eyes set on eternity. What God began, He will complete
                            (Philippians 1:6), and we invite you to be a part of this unfolding story.
                        </p>
                    </div>
                </section>

                <section id="our-mission" className="relative py-24 px-8 lg:px-20">
                    <h2 className="lg:text-7xl text-5xl font-bold mb-10">Our Mission</h2>
                    <div className="relative w-full text-lg leading-relaxed">
                        {/* Right-aligned image at the beginning */}
                        <div className="md:float-right md:ml-6 mb-6 w-full max-w-xs sm:w-72 sm:h-72 h-64 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/about-us.jpg"
                                fill
                                alt="Teaching the Word"
                                className="object-cover object-center"
                            />
                        </div>

                        <p>
                            Our mission is clear and unwavering, to raise Kingdom giants. We are committed to shaping a generation
                            that carries the presence, power, and principles of God into every sphere of life. Through sound teaching,
                            discipleship, and consistent spiritual encounters, we equip men and women to grow in stature, wisdom, and
                            alignment with divine purpose (Luke 2:52).
                        </p>

                        <p className="mt-4">
                            We believe that every believer is called to impact their world with the life of Christ. That is why we
                            intentionally create platforms for spiritual development, leadership training, and kingdom deployment. 
                            In a world drowning in confusion and compromise, we strive to raise a people of clarity, conviction,
                            and character, ambassadors of heaven, grounded in truth and aflame with purpose.
                        </p>

                        {/* Left-aligned image toward the end */}
                        <div className="float-left mr-6 mt-6 mb-6 w-full max-w-xs sm:w-72 sm:h-72 h-64 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/about-us.jpg"
                                fill
                                alt="Discipleship and growth"
                                className="object-cover object-center"
                            />
                        </div>

                        <p className="mt-4">
                            Everything we do is centered on Christ and fueled by the Spirit. From local gatherings to global outreaches,
                            from quiet mentorship to mass impartation, our mission flows through every channel of our ministry. We are
                            building a legacy of transformed lives, aligned with Heaven’s agenda and equipped to advance God’s kingdom
                            on earth (Matthew 6:10).
                        </p>

                        <p className="mt-4">
                            We are not just raising followers, we are raising voices, vessels, and visionaries. This is more than a
                            mandate; it is a movement. And we invite you to walk with us as we build lives, shape destinies, and
                            establish the reign of Christ in every heart, home, and nation.
                        </p>
                    </div>
                </section>

                <section id="our-vision" className="relative py-24 px-8 lg:px-20">
                    <h2 className="lg:text-7xl text-5xl font-bold mb-10">Our Vision</h2>
                    <div className="relative w-full text-lg leading-relaxed">
                        {/* Right-aligned image at the beginning */}
                        <div className="float-left mr-6 mb-6 w-full max-w-xs sm:w-72 sm:h-72 h-64 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/about-us.jpg"
                                fill
                                alt="Teaching the Word"
                                className="object-cover object-center"
                            />
                        </div>

                        <p>
                            Our mission is clear and unwavering, to raise Kingdom giants. We are committed to shaping a generation
                            that carries the presence, power, and principles of God into every sphere of life. Through sound teaching,
                            discipleship, and consistent spiritual encounters, we equip men and women to grow in stature, wisdom, and
                            alignment with divine purpose (Luke 2:52).
                        </p>

                        <p className="mt-4">
                            We believe that every believer is called to impact their world with the life of Christ. That is why we
                            intentionally create platforms for spiritual development, leadership training, and kingdom deployment. 
                            In a world drowning in confusion and compromise, we strive to raise a people of clarity, conviction,
                            and character, ambassadors of heaven, grounded in truth and aflame with purpose.
                        </p>

                        {/* Left-aligned image toward the end */}
                        <div className="md:float-right md:ml-6 mt-6 mb-6 w-full max-w-xs sm:w-72 sm:h-72 h-64 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/about-us.jpg"
                                fill
                                alt="Discipleship and growth"
                                className="object-cover object-center"
                            />
                        </div>

                        <p className="mt-4">
                            Everything we do is centered on Christ and fueled by the Spirit. From local gatherings to global outreaches,
                            from quiet mentorship to mass impartation, our mission flows through every channel of our ministry. We are
                            building a legacy of transformed lives, aligned with Heaven’s agenda and equipped to advance God’s kingdom
                            on earth (Matthew 6:10).
                        </p>

                        <p className="mt-4">
                            We are not just raising followers, we are raising voices, vessels, and visionaries. This is more than a
                            mandate; it is a movement. And we invite you to walk with us as we build lives, shape destinies, and
                            establish the reign of Christ in every heart, home, and nation.
                        </p>
                    </div>
                </section>

                <section 
                    id="leadership"
                    className="relative flex flex-col gap-10 lg:gap-20 py-24 lg:px-20 px-8 w-full"
                >
                    <div className="flex flex-col md:gap-4 gap-2 w-full">
                        <h2 className="lg:text-7xl text-5xl font-bold w-full">Leadership</h2>
                        <p className="text-base sm:text-lg">
                            Meet the spiritual leaders and mentors behind our ministry, equipped and ordained for this generation.
                        </p>
                    </div>

                    <CarouselDApiDemo />
                </section>

                <section 
                    id="our-locations" 
                    className="relative flex flex-col lg:flex-row gap-10 lg:gap-20 py-24 px-8 lg:px-20 w-full"
                >
                    <div className="flex flex-col md:gap-6 gap-2 w-full lg:w-1/2">
                        <h2 className="lg:text-7xl text-4xl font-bold w-full">Our Locations</h2>
                        <p className="text-base sm:text-lg">
                            A place prepared for you. You are always welcome at Omega Vision Christian Network.
                        </p>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex flex-col gap-12 sm:gap-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {campuses.map((campus, i) => (
                                <div key={i} className="flex flex-col md:gap-2 gap-1">
                                    <p className="font-medium text-lg">{campus.region}</p>
                                    <p className="text-accent-foreground font-light">{campus.address}</p>
                                    <a 
                                        href={campus.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs flex items-center cursor-pointer gap-2"
                                    >
                                        <FaHandPointRight />
                                        <p className="hover:underline transition-all duration-300 ease-in-out">Click to view on map</p>
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

export default AboutUs;