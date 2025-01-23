import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800 py-8">
            {/* Top Section */}
            <div className="text-center px-6 lg:px-20 mb-10">
                <h1 className="text-2xl lg:text-4xl font-poppins font-bold">
                    Academi X School Management System
                </h1>
                <p className="text-sm lg:text-base font-roboto font-[300] mt-4 mb-6">
                    AcademiX aims to bring efficiency to schools by automating routine
                    tasks and providing real-time access to important school data. Our
                    mission is to create a more connected, transparent, and collaborative
                    educational environment for everyone involved — administrators,
                    teachers, students, and parents.
                </p>
                <button className="bg-buttonbg text-white rounded-lg py-2 px-6 lg:py-3 lg:px-8">
                    Contact Us
                </button>
                <p className="text-xs lg:text-sm font-roboto font-[100] mt-6">
                    © 2025 Mcgarret
                </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20">
                {/* Logo */}
                <div className="mb-6 lg:mb-0">
                    <Image
                        src={"/Images/navlogo.svg"}
                        alt="Academi X"
                        width={100}
                        height={200}
                    />
                </div>

                {/* Links */}
                <div className="mb-6 lg:mb-0">
                    <Link href={"https://ronaldmcgarret.vercel.app/"}>
                        <p className="text-sm lg:text-base hover:underline">Team</p>
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6 text-3xl text-gray-600">
                    <Link href={"https://www.linkedin.com/company/acdemix/"}>
                        <p className="hover:text-blue-600 transition-colors duration-300">
                            <TiSocialLinkedinCircular />
                        </p>
                    </Link>
                    <Link href={"https://www.facebook.com/AcademiX-109743828445441"}>
                        <p className="hover:text-blue-700 transition-colors duration-300">
                            <CiFacebook />
                        </p>
                    </Link>
                    <Link href={"https://www.instagram.com/acdemix/?hl=en"}>
                        <p className="hover:text-pink-500 transition-colors duration-300">
                            <CiInstagram />
                        </p>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UCq4F2XqhvQL3QsG7h4fZgGQ"}>
                        <p className="hover:text-red-600 transition-colors duration-300">
                            <FaYoutube />
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
