import React from 'react'
import Image from 'next/image'
export default function About() {
    return (
        <div id='about' className='pt-[5%] mx-5'>
            <h1 className='text-4xl font-poppins font-semibold m text-center'>About</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10'>
                <section className='flex flex-col justify-center gap-5 text-xl font-roboto font-[300]'>
                    <p className='text-[#1D2C4E]' >AcademiX was born out of a need to tackle the growing challenges in school management.</p>
                    <p className='text-[#3978D7]'>In many schools, administrative tasks often become cumbersome, requiring a significant amount of manual work and coordination. </p>
                    <p>Teachers are bogged down with attendance sheets, fee records, and exam schedules, while parents struggle to stay updated on their children&apos;s progress.</p>
                </section>
                <section className='flex flex-col justify-center items-center'>
                    <Image src='/Images/about.svg' alt='About' width={300} height={500} className='md:m-12 m-5' />
                </section>
            </div>
        </div>
    )
}
