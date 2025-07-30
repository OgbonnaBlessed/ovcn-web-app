"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from "../ui/sidebar";
import {
  Home,
  Users,
  CalendarClock,
  BookOpen,
  Wallet,
  ChevronRight,
  PanelLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useState } from "react";
import { ModeToggle } from "./ToggleTheme";

const AppSidebar = () => {
    const pathname = usePathname();
    const { toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();

    const [openIndex, setOpenIndex] = useState<number | null>(null); // track which dropdown is open

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index)); // close if already open
    };

    const navLinks = [
        {
            icon: Home,
            label: "Home",
            href: "/",
        },
        {
            icon: Users,
            label: "About us",
            sub: [
                { label: "Who we are", href: "/about-us/#" },
                { label: "Our History", href: "/about-us/#our-history" },
                { label: "Our Mission", href: "/about-us/#our-mission" },
                { label: "Our Vision", href: "/about-us/#our-vision" },
                { label: "Find us", href: "/about-us/#find-us" },
                { label: "Leadership", href: "/about-us/#leadership" },
            ],
        },
        {
            icon: CalendarClock,
            label: "Services",
            sub: [
                { label: "Sunday Services", href: "/services/#sunday-services" },
                { label: "Wednesdays", href: "/services/#wednesday" },
                { label: "MMM", href: "/services/#mmm" },
            ],
        },
        {
            icon: BookOpen,
            label: "Sermons",
            href: "/sermons",
        },
        {
            icon: Wallet,
            label: "Give",
            sub: [
                { label: "Give Online", href: "/give/#online" },
                { label: "Partner with Us", href: "/give/#partner" },
            ],
        },
    ];

    return (
        <div className="block md:hidden">
            <Sidebar
                collapsible="icon"
                className="bg-white border-none shadow-md"
                style={{ height: "100vh" }}
            >
                <SidebarHeader>
                    <SidebarMenu className='mt-5 group-data-[collapsible=icon]:mt-7'>
                        <SidebarMenuItem>
                            <SidebarMenuButton
                                size="lg"
                                onClick={() => toggleSidebar()}
                                className='group'
                            >
                                <div className='w-full flex justify-end items-center gap-5 pl-3 pr-1 h-10 group-data-[collapsible=icon]:ml-1 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:px-0 group'>
                                    <PanelLeft className='text-gray-400 w-5 h-5 group-data-[collapsible=icon]:hidden cursor-pointer' />
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarMenu className="mt-6 space-y-1">
                        {navLinks.map((link, index) => {
                            const isActive = pathname.startsWith(link.href || "");

                            // Dropdown menu
                            if (link.sub) {
                                const isOpen = openIndex === index;

                                return (
                                    <Collapsible key={index} open={isOpen} onOpenChange={() => handleToggle(index)} className="group">
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuItem
                                                className={cn(
                                                    "hover:bg-accent/20 px-4 py-3 rounded-md transition-colors cursor-pointer",
                                                    isActive && "bg-accent/10"
                                                )}
                                            >
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex items-center gap-3">
                                                        <link.icon className="w-5 h-5" />
                                                        <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">
                                                            {link.label}
                                                        </span>
                                                    </div>
                                                    <ChevronRight
                                                        className={cn(
                                                            "w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-90",
                                                            isOpen && "rotate-90"
                                                        )}
                                                    />
                                                </div>
                                            </SidebarMenuItem>
                                        </CollapsibleTrigger>

                                        <CollapsibleContent
                                            className={cn(
                                                "overflow-hidden transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                            )}
                                        >
                                            <SidebarMenuSub className="pl-8 pt-1">
                                                {link.sub.map((sublink, subIdx) => (
                                                    <SidebarMenuSubItem key={subIdx} className="my-1">
                                                        <Link
                                                            href={sublink.href}
                                                            onClick={() => isMobile && toggleSidebar()}
                                                            className={cn(
                                                            "block px-2 py-1 rounded text-sm hover:bg-accent/10 transition-colors",
                                                            pathname === sublink.href &&
                                                                "text-primary font-semibold"
                                                            )}
                                                        >
                                                            {sublink.label}
                                                        </Link>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </Collapsible>
                                );
                            }

                            // Simple link
                            return (
                                <SidebarMenuItem
                                    key={index}
                                    className={cn(
                                        "hover:bg-accent/20 px-4 py-3 rounded-md transition-colors",
                                        isActive && "bg-accent/10"
                                    )}
                                >
                                    <Link
                                        href={link.href!}
                                        onClick={() => isMobile && toggleSidebar()}
                                        className="flex items-center gap-3 w-full"
                                    >
                                        <link.icon className="w-5 h-5" />
                                        <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">
                                            {link.label}
                                        </span>
                                    </Link>
                                </SidebarMenuItem>
                            );
                        })}
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter>
                    <ModeToggle />
                </SidebarFooter>
            </Sidebar>
        </div>
    );
};

export default AppSidebar;