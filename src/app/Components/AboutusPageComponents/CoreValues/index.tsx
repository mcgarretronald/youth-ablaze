"use client";
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import CorevaluesCard from './values'

export default function CoreValues() {
    return (
        <div className='my-10 '>

            <h1 className='text-4xl text-center font-semibold'>Our Core Values</h1>
            <div className="text-center text-sm my-5">
                <p>Youth Ablaze is built on a foundation of integrity, innovation, and inclusivity.</p>
                <p>Explore the values that guide our mission.</p>
            </div>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: 'easeOut' }}
                className='pt-10'
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10  my-5 mx-[10%]'>
                    <CorevaluesCard image={'/integrity.svg'} title={'Integrity'} description={'Upholding the highest standards of honesty and ethical behavior in all our actions.'} />
                    <CorevaluesCard image={'/innovation.svg'} title={'Innovation'} description={'Fostering a culture of creativity and forward-thinking to drive impactful change.'} />
                    <CorevaluesCard image={'/inclusivity.svg'} title={'Inclusivity'} description={'Creating a welcoming environment where all voices are heard and valued.'} />
                    <CorevaluesCard image={'/empowervalue.svg'} title={'Empowerment'} description={'Enabling youth to take charge of their future and lead with confidence.'} />
                </div>
            </motion.section>
            <div className='flex flex-col md:flex-row gap-10 my-10 mx-[10%] items-center'>
                <section>
                    <Image
                        src={'/youth.png'}
                        alt="Contact"
                        width={200}
                        height={100}
                        className='rounded-full'
                        />
                </section>
                <section className=''>
                    <h4 className='text-xl'>Youth Ablaze has transformed my perspective on leadership. The skills and confidence I&apos;ve gained are invaluable.</h4>
                    <h3 className='font-semibold mt-5'>Jenny Wilson</h3>
                    <p className='text-sm'>Youth Leader at Youth Ablaze</p>
                </section>
            </div>
        </div>
    )
}
