import type { Site, NavLinks } from '@/types'

export const site: Site = {
    name: "Astro Boilerplate",
    description: "Astro Boilerplate with basic integrations including TailwindCSS",
}

export const navlinks: NavLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]