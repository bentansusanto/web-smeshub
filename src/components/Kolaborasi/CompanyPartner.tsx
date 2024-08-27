import { baseUrl, baseUrlApi, fetchData } from '@/common/FetchData';
import { heading } from '@/common/FontFamily';
import { Mobile } from '@/common/MediaQuery';
import { companyPartner } from '@/libs/KolaborasiData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';

const CompanyPartner = () => {
    const { isMobile } = Mobile();
    const [data, setData] = useState<any>({})
    const [images, setImages] = useState<any>({})
    const [icon, setIcon] = useState<any>({})
    useEffect(() => {
      const getDataCompanyPartner = async() => {
          try {
            const res = await fetchData(`${baseUrlApi}/join-as-company?populate=bg_join_company&populate=icon_company`)
            setData(res.attributes)
            setImages(res.attributes.bg_join_company.data.attributes)
            setIcon(res.attributes.icon_company.data.attributes)
          } catch (error) {
            throw new Error(`${error}`)
          }
      }
      getDataCompanyPartner()
    },[])
    return (
      <div
        className={`${
          isMobile
            ? "px-5 mt-20 flex-col gap-10"
            : "xl:px-32 lg:px-20 md:px-8 mt-40 lg:flex-row flex-col lg:items-center xl:gap-20 gap-10"
        } flex`}
      >
        <div className="xl:max-w-3xl lg:max-w-xl">
        <Image
          src={`${baseUrl}${images.url}`}
          width={0}
          height={0}
          className='w-auto'
          alt="bg-pendampingan-umkm"
        />
        </div>
        <div className="space-y-5 max-w-xl">
          <div>
          <Image
          src={`${baseUrl}${icon.url}`}
          width={0}
          height={0}
          className='w-auto'
          alt="bg-pendampingan-umkm"
        />
          </div>
          <div className="space-y-3">
            <h2
              className={`${heading.className} font-semibold leading-snug text-3xl`}
            >
              {data.heading}
            </h2>
            <p className="text-gray-400">{data.body}</p>
          </div>
          <button className="text-[#002774] py-3 flex items-center space-x-2 rounded-full text-sm font-medium">
            <p>Daftar Sekarang</p>
            <BsArrowRight className="text-xl"/>
          </button>
        </div>
      </div>
    );
}

export default CompanyPartner