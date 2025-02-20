import React from 'react';
import Image from 'next/image'; 
export default function ContactInvolve() {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-white py-10 px-6 lg:px-20">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold text-[#1A202C] mb-4">
                    Connect with Us
                </h1>
                <p className="text-lg text-gray-600">
                    We&apos;re here to answer your questions and help you get involved with our community initiatives.
                </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2">
                <Image
                    src={"/connect.png"} // Replace with the actual image path
                    alt="Community members interacting"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}
