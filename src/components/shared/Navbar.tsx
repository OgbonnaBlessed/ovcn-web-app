import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavigationMenuDemo from "./NavigationMenu"
import { SidebarTrigger } from '../ui/sidebar'
import { ModeToggle } from './ToggleTheme'

const Navbar = () => {
    return (
        <div className="w-full fixed flex items-baseline justify-between lg:px-20 px-8 py-4  bg-background/15 backdrop-blur-sm z-50">
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
                <div className='max-md:text-xs max-lg:text-sm'>
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

                <div className='hidden md:block absolute top-3 right-3'>
                    <ModeToggle />
                </div>    
            </div>
        </div>
    )
}

export default Navbar