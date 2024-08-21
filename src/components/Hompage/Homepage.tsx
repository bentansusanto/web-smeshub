'use client'
import React from 'react'
import HeroSection from './Section/HeroSection'
import PersentaseSection from './Section/PersentaseSection'
import TestimoniSection from './Section/TestimoniSection'
import EcosystemSection from './Section/EcosystemSection'
import MediaLiputSection from './Section/MediaLiputSection'

const Homepage = () => {
   return(
    <>
        <HeroSection/>
        <PersentaseSection/>
        <TestimoniSection/>
        <EcosystemSection/>
        <MediaLiputSection/>
    </>
   )
}

export default Homepage