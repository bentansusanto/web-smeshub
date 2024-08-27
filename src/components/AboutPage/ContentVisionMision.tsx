import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import image from "@/libs/ImageData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const ContentVisionMision = () => {

  const [dataVision, setDataVision] = useState<any>({})
  const [dataValues, setDataValues] = useState<any>({})
  const [imagesVision, setImagesVision] = useState<any>({})
  const [imagesValues, setImagesValues] = useState<any>({})
  
  const getDataVisionMission = async() => {
    try {
      const res = await fetchData(`${baseUrlApi}/vision-smeshub?populate=bg_vision_mission`)
      setDataVision(res.attributes)
      setImagesVision(res.attributes.bg_vision_mission.data.attributes)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  const getDataValues = async() => {
    try {
      const res = await fetchData(`${baseUrlApi}/value-smeshub?populate=bg_values`)
      setDataValues(res.attributes)
      setImagesValues(res.attributes.bg_values.data.attributes)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  
  useEffect(() => {
    getDataVisionMission()
    getDataValues()
  },[])

  return (
    <div className="mt-40 pb-10 bg-[#001236] w-screen">
      <div className="max-w-4xl -top-20 px-5 mx-auto relative">
        <div className="relative">
          <Image
            src={image.BgVideoPersentase}
            alt="bg-video-persentase"
            className="rounded-3xl"
          />
          <div className="bg-blue-800 opacity-50 absolute inset-0 w-full h-full rounded-3xl" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative">
            <div className=" animate-ping duration-600 rounded-full bg-[#ffffff70] p-10" />
            <FaPlay className="text-2xl text-white absolute inset-0 mx-auto my-auto" />
          </div>
        </div>
      </div>
      <div className=" text-white xl:px-56 lg:px-20 px-5 mt-10">
        <div>
          <h1
            className={`${heading.className} font-semibold lg:text-4xl text-2xl text-center`}
          >
            Continuation of Vision, Mission and Values
          </h1>
        </div>
        {/* Vision & Mission */}
        <div className="flex lg:flex-row flex-col-reverse gap-5 items-center justify-between lg:mt-40 mt-20">
          <div className="space-y-5 max-w-lg lg:mt-0 mt-10">
            <h2
              className={`${heading.className} font-semibold leading-snug text-3xl`}
            >
              {dataVision.heading}
            </h2>
            <div className="space-y-4">
              {dataVision.visionmission?.map(
                (list:any, idx:any) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-[#6D794550] text-[#D3F954]">
                      <FaCheck className="text-xs" />
                    </div>
                    <p className="text-gray-300">{list.data}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="max-w-2xl">
            <Image src={`${baseUrl}${imagesVision.url}`} width={0} height={0} className="w-auto" alt="bg-vision" />
          </div>
        </div>
        {/* Values */}
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-between mt-56">
          <div className="max-w-2xl">
          <Image src={`${baseUrl}${imagesValues.url}`} width={0} height={0} className="w-auto" alt="bg-values" />
          </div>
          <div className="space-y-5 max-w-lg">
            <h2
              className={`${heading.className} font-semibold leading-snug text-3xl`}
            >
              {dataValues.heading}
            </h2>
            <div className="space-y-4">
              {dataValues.valuedata?.map(
                (list:any, idx:any) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-[#6D794550] text-[#D3F954]">
                      <FaCheck className="text-xs" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300 font-semibold">{list.title}</p>
                      <p className="text-gray-400">{list.desc}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentVisionMision;
