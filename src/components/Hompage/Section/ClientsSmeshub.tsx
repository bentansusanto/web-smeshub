import { baseUrl, FecthDataClientSmeshub } from '@/common/FetchData'
import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { clientSmeshubData, presentaseData } from '@/libs/HomeData'
import image from '@/libs/ImageData'
import Image from 'next/image'
import React from 'react'

const ClientsSmeshub = () => {
    const {isMobile} = Mobile()
    const {data} = FecthDataClientSmeshub()
    
  return (
    <div className={`${isMobile? "px-5" : "xl:px-40 lg:px-20 px-8"} mt-32 relative`}>
        <div data-aos="fade-up" className="text-center mx-auto space-y-3 max-w-2xl">
        <h1
          className={`${heading.className} font-semibold xl:text-[20px] lg:text-[18px] text-xl leading-snug`}
        >
          {clientSmeshubData.heading}
        </h1>
      </div>
      <div data-aos="fade-up" className="flex flex-wrap max-w-5xl items-center mx-auto mt-10 justify-center gap-8">
              {
                  data.map((list:any, idx:any) => (
                      <div key={idx} className="xl:w-32 lg:w-28 w-28">
                          <Image src={`${baseUrl}${list.url}`} width={0} height={0} className='w-auto' alt="company-image"/>
                      </div>
                  ))
              }
            </div>
            <div className={`absolute bottom-0 left-0 xl:w-auto lg:w-24 md:w-20 ${isMobile&&"hidden"}`}>
              <Image src={image.Pattern1} alt='pattern-1' />
            </div>
    </div>
  )
}

export default ClientsSmeshub