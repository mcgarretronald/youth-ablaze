'use client';

import React from 'react';
import { FaTiktok, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Stars from '../../stars';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Landing() {
    return (
        <div className='pt-[90px] pb-5 bg-[#E8FFFB] px-5 md:px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
            <section className='text-center md:text-left'>
                <div className='text-4xl md:text-5xl pb-3 flex flex-col gap-2 font-[600]'>
                    <h1>Ignite Your</h1>
                    <h1>Potential with</h1>
                    <h1>Youth Ablaze</h1>
                </div>
                <p className='text-lg leading-tight lg:pr-[20%]'>
                    Join us in a journey of empowerment and leadership, where vibrant initiatives transform dreams into reality.
                </p>
                <Link href={'/getinvolved'}>
                    <button className='bg-[#008080] text-white py-3 my-4 px-4 rounded hover:bg-[#0a5f5f] transition-all duration-300'>
                        Join the Movement
                    </button>
                </Link>
                <div className='flex justify-center md:justify-start gap-5 text-2xl '>

                    <Link href={'https://www.tiktok.com/@youthablaze'}><FaTiktok className='hover:text-[#000000] cursor-pointer' /></Link>
                    <Link href={'https://twitter.com/YouthAblaze'}><FaTwitter className='hover:text-blue-700 cursor-pointer' /></Link>
                </div>

                <div className='mt-3 '>
                    <div className="flex justify-center md:justify-start">
                        <Stars />
                    </div>
                    <h1 className='text-lg font-semibold pt-1'>A Life-Changing Experience!</h1>
                    <p className='text-sm'>
                        Every human being has a purpose and a destiny connected to the purpose. Missing the purpose is equivalent to missing a destiny. <span className='italic'>The greatest tragedy in life is not death but rather living a life without purpose.</span> - Dr. Myles Munroe. Whether your purpose is connected to your community, family, church, or school, you can still create an impact by discovering that unique purpose for your life.
                    </p>
                    <p className='text-sm font-semibold mt-1'>
                        You were not created by accident. Your purpose is waiting. Step into it, and transform the world.
                    </p>
                    <div className='flex gap-2 items-center py-2 justify-center md:justify-start'>
                        <Image src='/profile.png' alt='Youth Ablaze' width={40} height={40} className='rounded-full w-[30px] h-[30px]' />
                        <p className='text-sm font-[300]'>PST OUMA JOHN</p>
                    </div>
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <Image
                    src='/hero.png'
                    alt='Youth Ablaze'
                    width={500}
                    height={400}
                    className='w-full rounded-lg'
                />
            </motion.section>
        </div>
    );
}
