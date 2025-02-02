'use client';

import React from 'react';
import Programscard from './programs';
import { motion } from 'framer-motion';

export default function Programs() {
    return (
        <div className='p-5 md:p-10 lg:p-20'>
            <h1 className='text-3xl md:text-4xl font-semibold text-center'>Our Transformative Programs</h1>
            <p className='text-sm md:text-base pt-2 text-center'>
                Youth Ablaze offers unique programs designed to empower and inspire the next generation of leaders.
            </p>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: 'easeOut' }}
                className='pt-10'
                viewport={{ once: true, amount: 0.3 }} 
            >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                    <Programscard
                        image="/programs/innovative.svg"
                        title="Innovative Workshops"
                        description="Engage in creative workshops that ignite your passion and potential."
                        borderStyle="md:md:border-r md:border-b"
                    />
                    <Programscard
                        image="/programs/Community.svg"
                        title="Community Leadership"
                        description="Lead initiatives that make a real impact in your community."
                        borderStyle="lg:border-r md:border-b"
                    />
                    <Programscard
                        image="/programs/Skill.svg"
                        title="Skill Development"
                        description="Acquire essential skills for personal and professional growth."
                        borderStyle="md:border-b md:border-r lg:border-r-0"
                    />
                    <Programscard
                        image="/programs/Global.svg"
                        title="Global Networking"
                        description="Connect with like-minded peers and mentors from around the world."
                        borderStyle="lg:border-r md:border-b lg:border-b-0 "
                    />
                    <Programscard
                        image="/programs/Empathy.svg"
                        title="Empathy Building"
                        description="Cultivate empathy and understanding through diverse experiences."
                        borderStyle="md:border-r"
                    />
                    <Programscard
                        image="/programs/Achievement.svg"
                        title="Achievement Recognition"
                        description="Celebrate your successes and milestones with us."
                    />
                </div>
            </motion.section>
        </div>
    );
}
