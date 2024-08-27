import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { visionMission } from '@/libs/AboutData'
import React from 'react'
import ContentVisionMision from './ContentVisionMision'

const VisioMision = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "px-5 mt-80" : "xl:px-32 lg:px-20 md:px-8 mt-40"}`}>
        <div className='space-y-3 text-center max-w-4xl mx-auto'>
        <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
            {visionMission.subheading}
          </p>
          <h1
            className={`${heading.className} font-bold xl:text-[36px] lg:text-[42px] text-2xl leading-snug`}
          >
            {visionMission.heading}
          </h1>
          <p className=" text-sm text-gray-400 leading-relaxed">
            {visionMission.body}
          </p>
        </div>
    </div>
  )
}

export default VisioMision