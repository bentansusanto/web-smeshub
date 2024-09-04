import { AnimateInfiniteScroll } from '@/common/AnimateInfiniteScroll'
import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { mediaLiputData } from '@/libs/HomeData'
import image from '@/libs/ImageData'
import Image from 'next/image'
import React from 'react'

const MediaLiputSection = () => {
    const {isMobile} = Mobile()
    const {scrollRef} = AnimateInfiniteScroll()
  return (
    <div className={`${isMobile? "px-5" : "xl:px-32 lg:px-20 md:px-8"} my-20`}>
        <div className="text-center mx-auto space-y-3 max-w-3xl">
        <h1
          className={`${heading.className} font-medium xl:text-[18px] lg:text-[18px] text-2xl leading-snug`}
        >
          {mediaLiputData.heading}
        </h1>
      </div>
      <div className='max-w-5xl mx-auto flex gap-5 mt-10'>
        <div className={` ${isMobile&&"hidden"} h-auto flex w-28 justify-evenly items-end`}>
            <Image src={image.PatternDots} alt='pattern-dots'/>
        </div>
        <div className='space-y-8'>
          <div ref={scrollRef} className='flex items-center max-w-3xl mx-auto scroller overflow-hidden space-x-5'>
              <div className='flex flex-nowrap scroller_inner items-center space-x-5 animate-infinite_scroll_right'>
                  {
                      mediaLiputData.mediaLiput.map((list, idx) => (
                          <div key={idx} className='w-28'>
                              <Image src={require(`@/assets/${list}`)} alt='image-data'/>
                          </div>
                      ))
                  }
              </div>
          </div>
          <div ref={scrollRef} className='flex items-center max-w-xl mx-auto scroller overflow-hidden space-x-5'>
              <div className='flex flex-nowrap scroller_inner items-center space-x-5 animate-infinite_scroll_left'>
                  {
                      mediaLiputData.mediaLiput.map((list, idx) => (
                          <div key={idx} className='w-28'>
                              <Image src={require(`@/assets/${list}`)} alt='image-data'/>
                          </div>
                      ))
                  }
              </div>
          </div>

        </div>
            <div className={` ${isMobile&&"hidden"} h-auto flex justify-evenly items-start w-28`}>
            <Image src={image.PatternDots} alt='pattern-dots' className='rotate-180'/>
        </div>
      </div>
    </div>
  )
}

export default MediaLiputSection