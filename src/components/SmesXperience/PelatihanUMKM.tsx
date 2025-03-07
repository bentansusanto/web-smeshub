import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { pelatihanUMKM } from "@/libs/SmesExperienceData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const PelatihanUMKM = () => {
  const { isMobile } = Mobile();
  const [data, setData] = useState<any>({})
  const [images, setImages] = useState<any>({})
  const [icon, setIcon] = useState<any>({})
  useEffect(() => {
    const getDataPelatihanUMKM = async() => {
      try {
        const res = await fetchData(`${baseUrlApi}/pelatihan-umkm?populate=bg_pelatihan_umkm&populate=icon_pelatihan_umkm`)
        setData(res.attributes)
        setImages(res.attributes.bg_pelatihan_umkm.data.attributes)
        setIcon(res.attributes.icon_pelatihan_umkm.data.attributes)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    getDataPelatihanUMKM()
  },[]) 
  return (
    <div
      className={`${
        isMobile
          ? "px-5 mt-40 mb-56 flex-col gap-10"
          : "xl:px-32 lg:px-20 md:px-8 mt-28 mb-40 lg:flex-row flex-col lg:items-center xl:gap-20 gap-10"
      } flex`}
    >
      <div data-aos="fade-right" className="xl:max-w-3xl lg:max-w-xl">
      <Image
          src={`${baseUrl}${images.url}`}
          width={0}
          height={0}
          className='w-auto'
          alt="bg-pelatihan-umkm"
        />
      </div>
      <div data-aos="fade-left" className="space-y-5 max-w-xl">
        <div>
        <Image
          src={`${baseUrl}${icon.url}`}
          width={0}
          height={0}
          className='w-auto'
          alt="icon-pelatihan-umkm"
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
          <p>Pelajari Lebih Lanjut</p>
          <BsArrowRight className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default PelatihanUMKM;
