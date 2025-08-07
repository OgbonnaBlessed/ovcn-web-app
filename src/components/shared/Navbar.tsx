import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavigationMenuDemo from "./NavigationMenu"
import { ModeToggle } from './ToggleTheme'
import { MobileSidebarTrigger } from './MobileSidebarTrigger'

const Navbar = () => {
    return (
        <div className="w-full fixed flex items-baseline justify-between lg:px-20 px-8 py-4 bg-background/15 backdrop-blur-sm z-50">
            
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

            <div className='flex items-center gap-4'>
                <div className='block md:hidden absolute right-3 top-1/2 transform -translate-1/2'>
                    <MobileSidebarTrigger />
                </div>

                <div className='hidden md:block'>
                    <NavigationMenuDemo />
                </div>

                <div className='hidden md:block absolute top-3 right-3'>
                    <ModeToggle />
                </div>    
            </div>
        </div>
    )
}

export default Navbar