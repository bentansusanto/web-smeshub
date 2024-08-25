import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { fasilitatorData } from '@/libs/SmesPeopleData'
import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const FasilitatorSection = () => {
    const {isMobile} = Mobile()
  return (
    <div className={`${
        isMobile
          ? "px-5 mt-40 flex-col gap-10"
          : "xl:px-32 lg:px-20 md:px-8 mt-40 lg:flex-row flex-col lg:items-center xl:justify-between gap-10"
      } flex mb-56`}>
      <div className="space-y-5 max-w-xl">
        <div>
          <Image
            src={require(`@/assets/${fasilitatorData.icon}`)}
            alt="icon-pendampingan-umkm"
          />
        </div>
        <div className="space-y-3">
          <h2
            className={`${heading.className} font-semibold leading-snug text-3xl`}
          >
            {fasilitatorData.heading}
          </h2>
          <p className="text-gray-400">{fasilitatorData.body}</p>
        </div>
        <button className="text-[#002774] py-3 flex items-center space-x-2 rounded-full text-sm font-medium">
          <p>Gabung Sekarang</p>
          <BsArrowRight className="text-xl"/>
        </button>
      </div>
      <div className="xl:max-w-3xl lg:max-w-xl">
        <Image
          src={require(`@/assets/${fasilitatorData.bg_fasilitator}`)}
          alt="bg-pendampingan-umkm"
        />
      </div>
    </div>
  )
}

export default FasilitatorSection