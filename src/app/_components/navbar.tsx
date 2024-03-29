"use client";

import Link from "next/link";
import NavLink from "./navlink";
import MobileMenu from "./mobilemenu";
import Image from "next/image";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ThemeSwitch from "./themeswitch";

const navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Contact",
        href: "/contact"
    }
]

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className="bg-Neutrals/neutrals-5 dark:bg-Neutrals/neutrals-11 border-b-2 border-Neutrals/neutrals-6 dark:border-Neutrals/neutrals-8 shadow-md sticky top-0 bg-opacity-50 dark:bg-opacity-75 backdrop-blur-md font-semibold z-50">
            <nav className="flex flex-wrap items-center align-middle content-center justify-between mx-auto p-1">
                <Link href={"/"} className="max-w-24">
                    <Image src="/logo.png" alt="Logo" width={78} height={78} />
                </Link>
                <div className="mb-menu md:hidden">
                    {
                        !navOpen ? (
                            <button onClick={() => setNavOpen(true)} className="text-Neutrals/neutrals-7 transition flex items-center align-middle px-3 py-2 rounded hover:text-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavOpen(false)} className="text-Neutrals/neutrals-7 transition flex items-center align-middle px-3 py-2 rounded hover:text-white ">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-3 md:p-0 md:flex-row md:space-x-6 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="theme-switch">
                    <ThemeSwitch/>
                </div>

            </nav>
            {
                    navOpen ? <MobileMenu links={navLinks} /> : null
            }
        </header>
    );
  }
  