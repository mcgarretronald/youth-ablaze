import React from 'react'
import AboutHero from '../Components/AboutusPageComponents/Hero'
import Transformative from '../Components/AboutusPageComponents/Empower'
import Leaders from '../Components/AboutusPageComponents/Leaders/Index'

export default function AboutUs() {
    return (
        <div className='pt-[90px]'>
            <AboutHero/>
            <Transformative/>
            <Leaders/>
        </div>

    )
}
