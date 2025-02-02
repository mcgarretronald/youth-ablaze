import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

const texts = [
    'Impactful community initiatives',
    'Collaborative and supportive environment',
    'Opportunities for personal growth',
    'Leadership development programs',
]
export default function EmpowerSection() {
    return (
        <div className="bg-[#0C4A53] lg:p-20">
            <div 
                className='shadow-2xl bg-[#305553] rounded-xl flex flex-col items-center justify-center gap-8 md:p-10 p-5  lg:flex-row md:gap-20'>
                <section>
                    <Image
                        src={'/empower.png'}
                        alt="Empower"
                        width={300}
                        height={500}
                        className='rounded-lg w-full'
                    />
                </section>
                <section>
                    <h1 className='text-3xl font-semibold text-white'>Empower Change, Inspire Growth</h1>
                    <p className='text-[#D1D5DB] text-lg mt-5'>Be a part of our mission to foster leadership and empower youth. Your
                        involvement can spark transformation.</p>
                    <div className="md:grid md:grid-cols-2 gap-5 flex flex-col my-5">
                        {texts.map((text, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <Image
                                    src={'/check.svg'}
                                    alt="Check"
                                    width={15}
                                    height={15}
                                />
                                <p className='text-white text-sm flex items-center'>{text}</p>
                            </div>
                        ))}
                    </div>
                    <Link href='/getinvolved'>
                        <button className="flex  text-[#1C9995] hover:text-teal-400 cursor-pointer items-center gap-1 group align-middle justify-center rounded-full  md:py-5 transition-all duration-300">
                            Join us
                            <FaArrowRight className="transform transition-transform mt-1 duration-300 ease-in-out group-hover:translate-x-1" />
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    )
}
