"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
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
import { useEffect, useState } from "react";
import { ModeToggle } from "./ToggleTheme";

const AppSidebar = () => {
    const pathname = usePathname();
    const { toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();
    const [sidebarClicked, setSidebarClicked] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null); // track which dropdown is open

    // Only close sidebar when route changes from a sidebar click
    useEffect(() => {
        if (isMobile && sidebarClicked) {
            setOpenIndex(null);
            toggleSidebar();
            setSidebarClicked(false); // reset after action
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    
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
                { label: "Leadership", href: "/about-us/#leadership" },
                { label: "Our Locations", href: "/about-us/#our-locations" },
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
                    <div
                        onClick={() => toggleSidebar()}
                        className='flex items-end justify-end mt-7 py-2'
                    >
                        <PanelLeft className='text-gray-400 w-5 h-5 group-data-[collapsible=icon]:hidden cursor-pointer self-end'/>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <div>
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
                                                                "w-4 h-4 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-90",
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
                                                                onClick={() => setSidebarClicked(true)}
                                                                className={cn(
                                                                    "block px-2 py-1 rounded text-sm hover:bg-accent/10 transition-colors",
                                                                    pathname === sublink.href && "text-primary font-semibold"
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
                                            onClick={() => setSidebarClicked(true)}
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
                    </div>
                </SidebarContent>

                <SidebarFooter className="mb-2 ml-2">
                    <ModeToggle />
                </SidebarFooter>
            </Sidebar>
        </div>
    );
};

export default AppSidebar;