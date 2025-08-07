"use client"

import { motion } from "framer-motion"
import { useSidebar } from "../ui/sidebar"
import { useState, useEffect } from "react"

export const MobileSidebarTrigger = () => {
    const { toggleSidebar, openMobile } = useSidebar()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(openMobile)
    }, [openMobile])

    return (
        <button
            onClick={() => {
                toggleSidebar()
                setIsOpen((prev) => !prev)
            }}
            aria-label="Toggle menu"
            className="relative w-6 h-4 flex flex-col items-center justify-center gap-2 z-[999] overflow-hidden"
        >
            <motion.span
                className="block h-0.5 w-full bg-foreground origin-center"
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
            <motion.span
                className="block h-0.5 w-full bg-foreground origin-center"
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
        </button>
    )
}