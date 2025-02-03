"use client";
import Image from 'next/image'
import React from 'react'
import TransformCard from './TransformCards'
import { motion } from 'framer-motion';

export default function EmpowermentPath() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[12%] pb-12 lg:ml-[6%]">
            <div className="px-[8%]">
                <p className="text-[#007276] font-bold">Empowerment in Action</p>
                <h1 className="md:text-5xl text-3xl py-2 md:py-3 mb-2 font-[500]">Our Empowerment Path</h1>
                <p className="text-[#334151] leading-8 mb-20 text-xl">
                    From humble beginnings to a movement of change, explore how our initiatives empower the youth to lead with purpose.
                </p>
                <p className="leading-5 mb-10 text-sm">
                    Youth Ablaze is a beacon of hope and empowerment, fostering leadership through vibrant programs and initiatives. Our journey is a
                    testament to the power of youth-driven transformation.
                </p>
                <div className="flex flex-col gap-8 mr-5">
                    <TransformCard
                        image="/Ignite.svg"
                        title="Ignite Potential"
                        text="Empowering young minds to unleash their full potential through purpose-driven leadership training."
                    />
                    <TransformCard
                        image="/Comm.svg"
                        title="Community Impact"
                        text="Building stronger communities by equipping youth with the skills to lead and inspire change."
                    />
                    <TransformCard
                        image="/Inno.svg"
                        title="Innovative Solutions"
                        text="Encouraging creative thinking and problem-solving to address the challenges of tomorrow."
                    />
                </div>
                <div className="py-5 mt-5">
                    <h2 className="text-xl pb-3 font-semibold">No Barriers, Just Opportunities</h2>
                    <p className="text-[#334151] text-sm">
                        Youth Ablaze believes in breaking down barriers to provide equal opportunities for all young leaders.
                    </p>
                </div>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="pt-10"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src="/transform.png"
                    alt="Empower"
                    width={900}
                    height={800}
                    className="rounded-lg h-full"
                />
            </motion.section>
        </section>
    );
}
