"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Who we are",
        href: "/about-us/#who-we-are",
        description:
        "Get to know who we are, and the role we play in the body of Christ.",
    },
    {
        title: "Our History",
        href: "/about-us/#our-history",
        description:
        "Learn of how we have been carried on the wings of the spirit.",
    },
    {
        title: "Our Mission",
        href: "/about-us/#our-mission",
        description:
        "Discover the light we have been given, and how you can join us.",
    },
    {
        title: "Our Vision",
        href: "/about-us/#our-vision",
        description: "Come learn what drives us.",
    },
    {
        title: "Leadership",
        href: "/about-us/#leadership",
        description:
        "Our Gifts of men.",
    },
    {
        title: "Our Locations",
        href: "/about-us/#our-locations",
        description:
        "Discover our fellowships near you.",
    },
]

const NavigationMenuDemo = () => {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent className="left-1/2 -translate-x-1/2 absolute z-50 mt-2 w-max max-w-[95vw]">
                        <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="from-blue-600 via-blue-200 to-white flex h-full w-full flex-col justify-center rounded-md bg-linear-to-br p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            Experience God&lsquo;s Presence
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Plan to attend">
                                Fill the form and we will guide you through
                            </ListItem>
                            <ListItem href="/" title="Prayer request">
                                Trust God with whatever is in your heart
                            </ListItem>
                            <ListItem href="/" title="Join us online">
                                Follow us on our social media handles
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                    <NavigationMenuContent className="left-1/2 -translate-x-1/2 absolute z-50 mt-2 w-max max-w-[95vw]">
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent className="left-1/2 -translate-x-1/2 absolute z-50 mt-2 w-max max-w-[95vw]">
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/services/#sunday-services">
                                        <div className="font-medium">Sunday services</div>
                                        <div className="text-muted-foreground">
                                            Encounter Jesus
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/services/#wednesday">
                                            <div className="font-medium">Wednesdays</div>
                                            <div className="text-muted-foreground">
                                                Service of Sound
                                            </div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="/services/#mmm">
                                        <div className="font-medium">MMM</div>
                                        <div className="text-muted-foreground">
                                            Monthly Mega Meeting
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/sermons">Sermons</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Give</NavigationMenuTrigger>
                    <NavigationMenuContent className="left-1/2 -translate-x-1/2 absolute z-50 mt-2 w-max max-w-[95vw]">
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/give/#partnership" className="font-medium">Partner with us</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="/give/#give-online" className="font-medium">Give online</Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default NavigationMenuDemo