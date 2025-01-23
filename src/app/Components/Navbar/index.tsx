'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full py-5 lg:px-10  px-5  fixed top-0 left-0 z-50 navbar">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="cursor-pointer">
                    <Link href="/">
                    <Image src={"Images/navlogo.svg"} alt="Logo" width={50} height={50}/>
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden flex items-center" onClick={toggleMenu}>
                    <button className="text-black">
                        <span className="block w-6 h-1 bg-[#1D2C4E] rounded-lg mb-1"></span>
                        <span className="block w-6 h-1 bg-[#1D2C4E] rounded-lg mb-1"></span>
                        <span className="block w-6 h-1 bg-[#1D2C4E] rounded-lg"></span>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 text-black items-center">
                    <Link href="#features" className="hover:text-[#29467F] transition duration-300">
                        Features
                    </Link>
                    <Link
                        href="#about"
                        className="hover:text-[#29467F] transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-[#29467F] transition duration-300"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/"
                        className="hover:text-[#29467F] transition duration-300"
                    >
                        <button className="text-white bg-buttonbg rounded-lg py-2 px-6 hover:bg-[#3978D7] transition duration-300">Sign In</button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-0 left-0 w-full bg-[#1D2C4E] text-white transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center py-6">
                    <Link
                        href="#features"
                        className="py-2 hover:text-[#29467F] transition duration-300"
                        onClick={toggleMenu}
                    >
                        Features
                    </Link>
                    <Link
                        href="#about"
                        className="py-2 hover:text-[#29467F] transition duration-300"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="py-2 hover:text-[#29467F] transition duration-300"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/#signin"
                        className="py-2 hover:text-[#29467F] transition duration-300"
                        onClick={toggleMenu}
                    >
                        <button className="text-white bg-buttonbg rounded-lg py-2 px-6 hover:bg-[#3978D7] transition duration-300">Sign In</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
