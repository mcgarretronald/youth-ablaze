import React from 'react';
import Image from 'next/image';

type ProgramsProps = {
    image: string;
    title: string;
    description: string;
    borderStyle?: string; // Accept border style as a prop
};

export default function Programscard({ image, title, description, borderStyle }: ProgramsProps) {
    return (
        <div className={`flex flex-col p-10 text-center  cursor-pointer  items-center justify-center border-black/10 ${borderStyle}`}>
            <Image 
                src={image} 
                alt={title}
                width={25} 
                height={25}
                className='mb-8'
            />
            <h1 className='text-xl font-semibold pb-1'>{title}</h1>
            <p className='text-sm mx-10'>{description}</p>
        </div>
    );
}
