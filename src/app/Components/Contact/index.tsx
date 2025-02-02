import React from 'react';
import Image from 'next/image';
import Contactcard from './Contactcard';

export default function Contact() {
    return (
        <div id="contact" className="min-h-screen bg-[#E8FFFB] py-10 md:py-20 gap-10 grid grid-cols-1 lg:grid-cols-2">
            {/* First Section with Image */}
            <section className="flex  relative mt-16">
            <div className=''> 
                <Image
                    src="/contact.png"
                    alt="Contact"
                    width={500}
                    height={300}
                    className=" top-[-70px] md:ml-[5%]  flex items-center justify-center absolute "
                />
                <div className=" lg:w-[600px]  md:w-full overflow-x-hidden md:h-[350px]  lg:h-[450px] h-[300px] rounded-lg bg-[#A7E6DD]"></div>
                </div>
            </section>

            {/* Second Section with Text and Contact Cards */}
            <section className="mt-1 md:mt-0 mx-5 md:mx-10 lg:mx-20">
                <h1 className="text-3xl md:text-4xl  font-semibold text-center md:text-left">
                    Connect with Youth Ablaze
                </h1>
                <div className="mt-6 md:mt-10">
                    <section>
                        <Contactcard />
                    </section>
                </div>
            </section>
        </div>
    );
}
