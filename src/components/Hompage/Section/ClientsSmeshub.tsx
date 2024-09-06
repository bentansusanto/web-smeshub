import { baseUrl, fecthDataClientSmeshub } from '@/common/FetchData'
import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { clientSmeshubData, presentaseData } from '@/libs/HomeData'
import Image from 'next/image'
import React from 'react'

const ClientsSmeshub = () => {
    const {isMobile} = Mobile()
    const {data} = fecthDataClientSmeshub()
    
  return (
    <div className={`${isMobile? "px-5" : "xl:px-40 lg:px-20 px-8"} mt-32`}>
        <div className="text-center mx-auto space-y-3 max-w-3xl">
        <h1
          className={`${heading.className} font-medium xl:text-[20px] lg:text-[18px] text-2xl leading-snug`}
        >
          {clientSmeshubData.heading}
        </h1>
      </div>
      <div className="flex flex-wrap max-w-5xl items-center mx-auto mt-10 justify-center gap-8">
              {
                  data.map((list:any, idx:any) => (
                      <div key={idx} className="xl:w-32 lg:w-28 w-28">
                          <Image src={`${baseUrl}${list.url}`} width={0} height={0} className='w-auto' alt="company-image"/>
                      </div>
                  ))
              }
            </div>
    </div>
  )
}

export default ClientsSmeshub