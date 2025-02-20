import React from 'react';

export default function Joinus() {
    return (
        <div 
            className="relative h-[350px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/Community.png')" }} // Replace with your actual image path
        >
            {/* Overlay */} 
            <div className="absolute inset-0 bg-[#25435C] opacity-70"></div>

            {/* Text */}
            <div className="flex flex-col items-center">
                <h1 className="relative text-white text-4xl md:text-6xl font-bold text-center">
                Join the Movement
                </h1>
                <p className="relative text-gray-300 md:mx-[10%] mt-5 text-center">Step into a world where youth leadership ignites change. Discover how you can be a part of our transformative community.</p>
            </div>
        </div>
    );
}
