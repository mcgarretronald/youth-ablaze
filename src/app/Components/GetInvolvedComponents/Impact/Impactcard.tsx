import React from 'react';
import Image from 'next/image';

type ImpactProps = {
    image: string;

    description: string;
};

export default function Impactcard({ image, description }: ImpactProps) {
    return (
        <div className={`flex flex-col lg:w-[250px] w-[320px] border-[1px] border-gray-300 px-5 py-3  rounded-lg pt-3 cursor-pointer bg-white`}>
            <Image 
                src={image} 
                alt={description}
                width={40} 
                height={25}
                className='mb-[25%]'
            />

            <p className='text-sm  font-semibold'>{description}</p>
        </div>
    );
}
