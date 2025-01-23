import React from 'react'
import Image from 'next/image'

const data = [
    {
        index: 1,
        title: "Dashboard",
        image: "Images/Features/dashboard.png",
    },
    {
        index: 2,
        title: "Event Management",
        image: "Images/Features/eventmanagment.png",
    },
    {
        index: 3,
        title: "Performance Tracking",
        image: "Images/Features/performance.png",
    },
    {
        index: 4,
        title: "Communication Hub",
        image: "Images/Features/comm.png",
    },
    {
        index: 5,
        title: "Student Management",
        image: "Images/Features/student.png",
    },
    {
        index: 6,
        title: "Task Management",
        image: "Images/Features/task.png",
    },
]

export default function Features() {
    return (
        <div id="features" className='h-screen pt-[5%] ' >
            <h1 className='text-4xl font-poppins font-semibold mt-5 text-center'>Features</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 p-10">
            {data.map((item) => (
                <div key={item.index} className="border-2 lg:mx-10 mx-5 border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex flex-col items-center">
                        {/* Dynamically render the image */}
                        <Image
                            src={"/" + item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="rounded-lg"
                        />
                        {/* Feature Title */}
                        <h2 className="mt-4 text-xl font-poppins font-semibold text-center">{item.title}</h2>
                    </div>
                </div>
            ))}
            </div>
         
        </div>
    )
}
