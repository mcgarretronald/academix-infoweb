import React from "react";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Hero() {
    return (
        <div
            className="bg-no-repeat bg-center relative h-screen bg-cover"
            style={{ backgroundImage: "url('Images/herobg.png')" }}
        >
            <Navbar />
            {/* Hero Content */}
            <div className="text-center flex justify-center gap-5 items-center flex-col h-full ">
                <section className="lg:text-6xl md:text-4xl text-3xl font-poppins ">
                    <h1 className="bg-gradient-to-r from-[#1D2C4E] to-[#A347EB] bg-clip-text pb-2 text-transparent">
                        Simplifying School Management
                    </h1>
                    <h1 className="bg-gradient-to-r from-[#1D2C4E] to-[#A347EB] bg-clip-text text-transparent">
                        One Click at a Time
                    </h1>
                </section>
                <section className="text-sm  font-roboto font-[300] mx-[10%] lg:mx-[20%]">
                    <p>
                    AcademiX
                        streamlines school management with an all-in-one platform that
                        simplifies administration, enhances communication, and boosts
                        engagement for schools, parents, and students.
                    </p>
                </section>
                <section className="flex gap-5 font-poppins">
                    <Link href="/#">
                        <button className="border-2 border-black rounded-lg py-3 px-8 ">
                            Learn More
                        </button>
                    </Link>
                    <Link href="/#">
                        <button className="rounded-lg py-3 px-14 bg-buttonbg text-white">
                            Demo
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    );
}
