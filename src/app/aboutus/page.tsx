import React from 'react'
import AboutHero from '../Components/AboutusPageComponents/Hero'
import Transformative from '../Components/AboutusPageComponents/Empower'
import Leaders from '../Components/AboutusPageComponents/Leaders/Index'
import CoreValues from '../Components/AboutusPageComponents/CoreValues'
import FreqQuiz from '../Components/AboutusPageComponents/FreqQuiz'

export default function AboutUs() {
    return (
        <div className='pt-[90px]'>
            <AboutHero/>
            <Transformative/>
            <Leaders/>
            <CoreValues/>
            <FreqQuiz/>
        </div>

    )
}
