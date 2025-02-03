import React from 'react';
import Image from 'next/image';

export default function Testimony() {
    return (
        <div 
            style={{ backgroundImage: "url('/testimonyng.png')", backgroundSize: "cover", backgroundPosition: "center" }} 
            className='shadow-xl my-5 flex flex-col items-center h-[400px] justify-center gap-5 py-10 px-5 md:px-[10%]'
        >
            <h1 className='text-2xl font-normal text-center'>
                Youth Ablaze has empowered me to take charge of my future and make a difference in my community.
            </h1>
            <div className='flex gap-2 items-center py-2 justify-center md:justify-start'>
                <Image src='/profile.png' 
                alt='Youth Ablaze' 
                width={40} 
                height={40} 
                className='rounded-full w-[30px] h-[30px]' />
                <p className='text-sm font-light '>Pst Ouma John -Youth Ambassador</p>
            </div>
        </div>
    );
}
