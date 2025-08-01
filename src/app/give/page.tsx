import Footer from '@/components/shared/Footer'
import Give from '@/components/shared/Give'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='w-full max-w-screen overflow-x-hidden scroll-smooth'>
            <section id="partnership" className="relative min-h-screen min-w-screen overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/about-us.jpg"
                        fill
                        alt="About us"
                        priority
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-fit">
                    <div className="font-bold lg:text-7xl text-5xl lg:w-6xl w-full text-center">
                        PARTNER WITH US IN ADVANCING GOD&lsquo;S KINGDOM
                    </div>
                </div>
            </section>
            <div className='min-h-screen w-full flex items-center justify-center px-8 lg:px-20 py-24'>
                <div className='flex flex-col gap-10 items-center'>
                    <div className='lg:text-7xl text-5xl lg:w-6xl w-full text-center italic font-extralight font-serif'>
                        Each of you should give what you have decided in your heart to give, not reluctantly
                        or under compulsion, for God loves a cheerful giver.
                    </div>
                    <p className='lg:text-xl'>2 Corinthians 9:7 (NIV)</p>
                </div>
            </div>
            <section id="give-online" className='py-24 px-8 lg:px-20'>
                <Give />
            </section>
            <Footer />
        </div>
    )
}

export default page