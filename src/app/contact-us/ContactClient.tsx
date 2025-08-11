/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react'
import type { Variants } from 'framer-motion'
import Image from 'next/image'
import { motion } from "framer-motion"
import { FaHandPointRight } from 'react-icons/fa6'
import { campuses } from '@/data/campuses'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactClient = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleForm = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        const formDataForSubmission = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataForSubmission.append(key, value);
        });

        try {
            const response = await fetch("https://formspree.io/f/mwpqyevk", {
                method: "POST",
                body: formDataForSubmission,
                headers: {
                    "Accept": "application/json",
                },
            });

            if (response.ok) {
                // Reset form data on successful submission
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    message: "",
                });

                toast.success("Your message has been sent successfully!");

            } else {
                // Handle failure (if needed)
                toast.error("Something went wrong. Please try again.");
            }

        } catch (error) {
            toast.error("There was an error sending your message");
            console.log("Error sending message:", error);
        }
    }

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 1,
                ease: [0.42, 0, 0.58, 1], // easeOut
            },
        }),
    };

    return (
        <>
            <div className='w-full max-w-screen overflow-x-hidden scroll-smooth'>
                <div className="relative min-h-screen min-w-screen overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/sermon-icon.jpg"
                            fill
                            alt="About us"
                            priority
                            className="object-cover object-center"
                        />
                    </div>
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
                </div>

                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 py-24 px-8 lg:px-20 w-full'>
                    <div className="flex flex-col md:gap-4 gap-2 w-full lg:w-1/2">
                        <h2 className="lg:text-7xl text-4xl font-bold w-full">Get in touch</h2>
                        <p className="text-base sm:text-lg">
                            email@omegavision.com
                        </p>
                        <p className="text-base sm:text-lg">
                            +234 (0XX) XXX XXX
                        </p>
                        <p className="text-base sm:text-lg lg:w-md">
                            14th Felicia Coker Street, Pipeline Fagba, Lagos State, Nigeria.
                        </p>
                    </div>

                    <form 
                        onSubmit={handleSubmit} 
                        className="w-full lg:w-1/2 flex flex-col gap-12 sm:gap-16"
                    >
                        <div className='flex flex-col md:flex-row md:items-center gap-12 sm:gap-16'>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>First Name</h3>
                                <Input 
                                    type='text'
                                    id='firstname'
                                    autoComplete='off'
                                    value={formData.firstname}
                                    onChange={handleForm}
                                    className='border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0 w-full'
                                />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <h3>Last Name</h3>
                                <Input 
                                    type='text'
                                    id='lastname'
                                    autoComplete='off'
                                    value={formData.lastname}
                                    onChange={handleForm}
                                    className='border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0 w-full'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3>Email</h3>
                            <Input 
                                id='email'
                                autoComplete='off'
                                value={formData.email}
                                onChange={handleForm}
                                className='border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out rounded-none shadow-none px-0'
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h3>Message</h3>
                            <Textarea
                                id='message'
                                autoComplete='off'
                                rows={10}
                                value={formData.message}
                                onChange={handleForm}
                                className='border-0 border-b-2 border-accent-foreground outline-none fous:ring-0 focus:outline-none transition-all duration-300 ease-in-out min-w-[12rem] rounded-none shadow-none px-0 resize-none w-full'
                            />
                        </div>
                        <Button
                            type="submit"
                            className='w-fit self-start cursor-pointer rounded-full px-8 py-5 active:scale-80 transition-all duration-500 ease-in-out'
                        >
                            Submit
                        </Button>
                    </form>
                </div>

                <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-20 py-24 px-8 lg:px-20 w-full">
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactClient