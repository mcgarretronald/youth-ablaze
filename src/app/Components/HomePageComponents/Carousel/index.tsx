"use client";
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { motion } from 'framer-motion';
const carouselData = [
    {
        image: '/Community.png', 
        heading: 'Community Events',
        subtext: 'Engage in events that drive community change and impact',
    },
    {
        image: '/Leadership.png',
        heading: 'Leadership Conferences',
        subtext: 'Participate in conferences that shape future leaders.',
    },
    {
        image: '/Empowerment.png',
        heading: 'Empowerment Workshops',
        subtext: 'Join our dynamic workshops designed to inspire and empower.',
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    return (
        <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className='pt-10'
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="relative md:w-3/4 w-full justify-center md:mx-[10%] h-[600px] rounded-lg  my-5 overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${carouselData[currentIndex].image})` }}
            >
                {/* Background image */}
            </div>

            {/* Carousel Buttons and Text */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-10">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="bg-white p-2 rounded-full shadow-md opacity-50 hover:opacity-100"
                >
                    <IoIosArrowBack size={24}  />
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="bg-white p-2 rounded-full shadow-md opacity-50 hover:opacity-100"
                >
                    <IoIosArrowForward size={24} />
                </button>
            </div>

            {/* Text at the bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center mb-6 text-white px-4">
                <h2 className="text-3xl font-bold text-white">{carouselData[currentIndex].heading}</h2>
                <p className="text-sm mt-2">{carouselData[currentIndex].subtext}</p>
            </div>
        </div>
        </motion.section>
    );
}
