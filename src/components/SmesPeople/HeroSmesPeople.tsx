import { heading } from '@/common/FontFamily';
import { Mobile } from '@/common/MediaQuery'
import { heroSmesPeopleData as heroData } from '@/libs/SmesPeopleData';
import image from '@/libs/ImageData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { baseUrl, baseUrlApi, fetchData } from '@/common/FetchData';
import Link from 'next/link';

const HeroSmesPeople = () => {
    const { isMobile } = Mobile();
    const [data, setData] = useState<any>({})
    const [images, setImages] = useState<any>({})
    useEffect(() => {
      const getDataHeroSmesPeople = async() => {
        try {
          const res = await fetchData(`${baseUrlApi}/section1-smes-people?populate=bg_section1_smespeople`)
          setData(res.attributes)
          setImages(res.attributes.bg_section1_smespeople.data.attributes)
        } catch (error) {
          throw new Error(`${error}`)
        }
      }
      getDataHeroSmesPeople()
    },[])
  return (
    <div
      className={`${
        isMobile
          ? "px-5 flex-col-reverse mt-16"
          : "xl:px-32 lg:px-24 md:px-8 lg:flex-row lg:justify-between mt-20 flex-col-reverse"
      } flex`}
    >
      <div data-aos="fade-right" className="space-y-10 xl:max-w-xl lg:max-w-lg w-auto mt-10 lg:mt-0">
        <div className="space-y-3">
          <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
            {data.subheading}
          </p>
          <h1
            className={`${heading.className} font-bold xl:text-[42px] lg:text-[42px] text-3xl leading-snug`}
          >
            {data.heading}
          </h1>
          <p className=" text-sm text-gray-400 leading-relaxed">
            {data.body}
          </p>
        </div>
        {/* button cta */}
        <div className="flex flex-row items-center gap-3">
          <button className="bg-[#002774] border-[#002774] border py-3 font-medium px-6 rounded-full text-white text-sm">
            <Link href={'https://t.me/komunitasumkmsmeshub'}>
              Gabung Komunitas
            </Link>
          </button>
        </div>
      </div>
      <div data-aos="fade-left" className="xl:max-w-2xl max-w-auto">
        <Image src={`${baseUrl}${images.url}`} width={0} height={0} className='w-auto' alt="bg-home-herosection" />
      </div>
    </div>
  );
}

export default HeroSmesPeople