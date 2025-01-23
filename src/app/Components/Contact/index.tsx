import React from 'react'
import Image from 'next/image'
import ContactForm from '../ContactForm'
export default function Contact() {
    return (
        <div id='contact' className='md:mx-5 bg-[#0B0E18] text-white rounded-lg md:p-10 p-5'>
            <div className='bg-white rounded-lg p-5 bg-opacity-5'>
                <p className='text-center md:text-lg  text-[10px] font-poppins my-3 font-[300]'>Reach out, and let&apos;s create a universe of possibilities together!</p>
                <div className='lg:flex flex-row justify-center  '>
                    <section>
                        <h1 className='md:text-2xl text-2xl font-poppins font-bold text-center'>Let&apos;s connect constellations</h1>
                        <p className='md:text-sm text-[10px] font-poppins font-[300] text-center'>Let&apos;s align our constellations! Reach out and let the magic of collaboration illuminate our skies.</p>
                        <ContactForm/>
                    </section>
                    <section className='flex justify-center'>
                        <Image src='/Images/contact.png' alt='Contact' width={400} height={500} className='md:m-12 m-5' />
                    </section>
                </div>
            </div>
        </div>
    )
}
