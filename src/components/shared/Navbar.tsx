import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavigationMenuDemo from "./NavigationMenu"
import { SidebarTrigger } from '../ui/sidebar'

const Navbar = () => {
    return (
        <div className="w-full flex items-baseline justify-between lg:px-20 px-8 py-4 relative bg-white/20 backdrop-blur-sm">
            <Link 
                href="/"
                className='flex items-center gap-2'
            >
                <Image
                    src="/Logo.png" 
                    width={60}
                    height={40}
                    alt='Logo'
                />
                <div className='max-md:text-xs max-lg:text-sm font-serif'>
                    <p className='uppercase'>Omega Vision Christian Network</p>
                    <p>(The Adullam of destiny)</p>
                </div>
            </Link>

            <div className='flex items-center gap-4'>
                <div className='block md:hidden absolute right-3 top-3'>
                    <SidebarTrigger />
                </div>

                <div className='hidden md:block'>
                    <NavigationMenuDemo />
                </div>
            </div>
        </div>
    )
}

export default Navbar