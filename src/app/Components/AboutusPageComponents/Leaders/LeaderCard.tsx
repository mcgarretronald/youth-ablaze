import React from 'react'
import Image from 'next/image'
export default function LeaderCard({ image, name, role, location }: LeaderCardProps) {
    return (
        <div className="py-3 flex-col">
            <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="rounded-lg md:w-[500px]" />
            <h3 className="text-lg mt-4 font-semibold text-[#ffffffe6]">{name}</h3>
            <p className=" text-[#ffffffb3]">{role}</p>
            <p className="text-[12px] text-[#ffffffb3]">{location}</p>
        </div>
    )
}

interface LeaderCardProps {
    image: string
    name: string
    role: string
    location: string
}

