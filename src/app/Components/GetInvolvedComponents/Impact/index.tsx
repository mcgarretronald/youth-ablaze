"use client";
import React from 'react'
import Impactcard from './Impactcard'
import { motion } from 'framer-motion';
import Contribute from './Contribute';
export default function ImpactSect() {
    return (
        <div className='bg-[#E8FFFB] lg:p-16 md:p-10'>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: 'easeOut' }}
                className='pt-10'
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="mb-[10%]  ">
                    <h1 className='text-center md:text-5xl text-3xl py-4 font-semibold'>Your Path to Impact</h1>
                    <p className='text-center  lg:mx-[30%]'>Follow these steps to become a change-maker in our community. Your journey towards making a difference starts here.</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-10 mx-[5%]'>
                    <Impactcard
                        image="/Comm.svg"
                        description="Volunteer Your Time"
                    />
                    <Impactcard
                        image="/share.svg"
                        description="Share Your Expertise"
                    />
                    <Impactcard
                        image="/programs/Empathy.svg"
                        description="Support Our Initiatives"
                    />
                    <Impactcard
                        image="/programs/Community.svg"
                        description="Join Our Events"
                    />
                </div>
            </motion.section>
            <div>
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: 'easeOut' }}
                    className='pt-10'
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Contribute />
                </motion.section>
            </div>
        </div>
    )
}
