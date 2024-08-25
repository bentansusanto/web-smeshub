import { heading } from '@/common/FontFamily';
import { Mobile } from '@/common/MediaQuery'
import { heroSmesPeopleData as heroData } from '@/libs/SmesPeopleData';
import image from '@/libs/ImageData';
import Image from 'next/image';
import React from 'react'

const HeroSmesPeople = () => {
    const { isMobile } = Mobile();
  return (
    <div
      className={`${
        isMobile
          ? "px-5 flex-col-reverse mt-16"
          : "xl:px-32 lg:px-24 md:px-8 lg:flex-row lg:justify-between mt-20 mb-56 flex-col-reverse"
      } flex`}
    >
      <div className="space-y-10 xl:max-w-xl lg:max-w-lg w-auto mt-10 lg:mt-0">
        <div className="space-y-3">
          <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
            {heroData.subheading}
          </p>
          <h1
            className={`${heading.className} font-bold xl:text-[42px] lg:text-[42px] text-3xl leading-snug`}
          >
            {heroData.heading}
          </h1>
          <p className=" text-sm text-gray-400 leading-relaxed">
            {heroData.body}
          </p>
        </div>
        {/* button cta */}
        <div className="flex flex-row items-center gap-3">
          <button className="bg-[#002774] border-[#002774] border py-3 font-medium px-6 rounded-full text-white text-sm">
            Gabung Komunitas
          </button>
        </div>
        {/* Success client */}
        <div className="flex items-center space-x-4">
            <Image src={image.SuccessClient} alt="success-client"/>
            <div className="space-y-2">
                <h3 className={`${heading.className} font-semibold text-2xl`}>{heroData.client_success}</h3>
                <p className="text-gray-400 text-sm">Success client</p>
            </div>
        </div>
      </div>
      <div className="xl:max-w-2xl max-w-auto">
        <Image src={image.BgSmesPeople} alt="bg-home-herosection" />
      </div>
    </div>
  );
}

export default HeroSmesPeople