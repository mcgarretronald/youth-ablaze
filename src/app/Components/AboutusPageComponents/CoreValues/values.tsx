import React from 'react';
import Image from 'next/image';

type ProgramsProps = {
    image: string;
    title: string;
    description: string;
};

export default function CorevaluesCard({ image, title, description}: ProgramsProps) {
    return (
        <div className={`flex flex-col border-[1px] p-5 rounded-lg border-gray-300 `}>
            <Image 
                src={image} 
                alt={title}
                width={30} 
                height={25}
                className='mb-4'
            />
            <h1 className='text-lg font-semibold pb-3'>{title}</h1>
            <p className='text-[12px] '>{description}</p>
        </div>
    );
}
