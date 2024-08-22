import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { mediaLiputData } from '@/libs/HomeData'
import image from '@/libs/ImageData'
import Image from 'next/image'
import React from 'react'

const MediaLiputSection = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "px-5" : "xl:px-32 lg:px-20 md:px-8"} mt-40 mb-64`}>
        <div className="text-center mx-auto space-y-3 max-w-3xl">
        <h1
          className={`${heading.className} font-semibold xl:text-[24px] lg:text-[18px] text-2xl leading-snug`}
        >
          {mediaLiputData.heading}
        </h1>
      </div>
      <div className='max-w-5xl mx-auto flex gap-5 mt-10'>
        <div className={` ${isMobile&&"hidden"} h-auto flex w-28 justify-evenly items-end`}>
            <Image src={image.PatternDots} alt='pattern-dots'/>
        </div>
            <div className='flex flex-wrap gap-x-10 gap-y-8 justify-center'>
                {
                    mediaLiputData.mediaLiput.map((list, idx) => (
                        <div key={idx} className='w-28'>
                            <Image src={require(`@/assets/${list}`)} alt='image-data'/>
                        </div>
                    ))
                }
            </div>
            <div className={` ${isMobile&&"hidden"} h-auto flex justify-evenly items-start w-28`}>
            <Image src={image.PatternDots} alt='pattern-dots' className='rotate-180'/>
        </div>
      </div>
    </div>
  )
}

export default MediaLiputSection