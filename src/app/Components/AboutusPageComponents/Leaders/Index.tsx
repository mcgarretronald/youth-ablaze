"use client";
import { motion } from 'framer-motion';
import React from 'react'
import LeaderCard from './LeaderCard'

export default function Leaders() {
  return (
    <div className='bg-[#004B57] px-[8%] py-[5%]'>
      <div className="pb-10">
        <h1 className='text-[#ffffffe6] text-4xl py-4 font-semibold'>Meet Our Visionary Leaders</h1>
        <p className='text-[#ffffffe6] text-sm md:mr-[50%]'>Our team of dedicated leaders is passionate about empowering the next generation to drive meaningful change.</p>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className='pt-10'
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='flex gap-10 md:flex-row flex-col items-center'>
          <LeaderCard image={'/Leaders/lesslie.png'} name={'Leslie Alexander'} role={'Founder / Visionary Leader'} location={'Global'} />
          <LeaderCard image={'/Leaders/jordan.png'} name={'Jordan Silva'} role={'Youth Engagement Director'} location={'Global'} />
          <LeaderCard image={'/Leaders/casey.png'} name={'Casey Li'} role={'Innovation Strategist'} location={'Global'} />
          <LeaderCard image={'/Leaders/alexa.png'} name={'Alexa Richardson'} role={'Community Outreach Coordinator'} location={'Global'} />
        </div>
      </motion.section>
    </div>
  )
}
