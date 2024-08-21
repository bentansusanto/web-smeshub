import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { ecosystemData } from '@/libs/HomeData'
import Link from 'next/link'
import React from 'react'

const EcosystemSection = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${isMobile? "mt-40 px-5" : "xl:px-32 lg:px-20 md:px-8 mt-40"}`}>
        <div className="text-start space-y-3 max-w-3xl">
        <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
          {ecosystemData.subheading}
        </p>
        <h1
          className={`${heading.className} font-bold xl:text-[32px] lg:text-[28px] text-3xl leading-snug`}
        >
          {ecosystemData.heading}
        </h1>
      </div>
      {/* List Ecosystem */}
      <div className='flex flex-col gap-5 mt-10'>
        <div className='flex lg:flex-row flex-col gap-5'>
            {
                ecosystemData.ecosystem.slice(0, 3).map((list, idx) => (
                    <div key={idx} className='bg-gradient-to-tl from-gray-100 to-gray-50 p-5 rounded-md'>
                        <div className=''>
                            <h1 className='text-2xl font-semibold'>{list.name}</h1>
                        </div>
                        <div className='bg-gray-300 h-[1px] w-full my-3'/>
                        <p className='text-gray-400'>{list.desc}</p>
                    </div>
                ))
            }
        </div>
        <div className='flex lg:flex-row flex-col gap-5'>
            {
                ecosystemData.ecosystem.slice(3, 5).map((list, idx) => (
                    <div key={idx} className=' bg-gradient-to-tl from-gray-100 to-gray-50 p-5 rounded-md'>
                        <div className=''>
                            <h1 className='text-2xl font-semibold'>{list.name}</h1>
                        </div>
                        <div className='bg-gray-300 h-[1px] w-full my-3'/>
                        <p className='text-gray-400'>{list.desc}</p>
                    </div>
                ))
            }
        </div>
      </div>
      <div className='mt-5'>
        <p className='text-center text-gray-400 text-sm'><Link href={'/'} className='text-blue-600 font-semibold'>Join Sekarang</Link> dan dapatkan benefit dari mentor terbaik kami</p>
      </div>
    </div>
  )
}

export default EcosystemSection