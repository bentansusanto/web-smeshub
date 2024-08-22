'use client'
import React from 'react'
import HeroAbout from './HeroAbout'
import PersentaseSection from '../Hompage/Section/PersentaseSection'
import VisioMision from './VisioMision'
import ContentVisionMision from './ContentVisionMision'
import Location from './Location'

const AboutPage = () => {
  return (
    <div>
        <HeroAbout/>
        <PersentaseSection/>
        <VisioMision/>
        <ContentVisionMision/>
        <Location/>
    </div>
  )
}

export default AboutPage