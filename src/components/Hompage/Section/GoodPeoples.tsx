import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { testimoniData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GoodPeoples = () => {
  const { isMobile } = Mobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<any>([])
  
  useEffect(() => {
    const dataGoodPeople = async() => {
      try {
        const res = await fetchData(`${baseUrlApi}/kutipan-orang-pentings?populate=picture`)
        const datas = res.map((list:any) => list.attributes)
        setData(datas)
      } catch (error) {
        throw new Error(`Error data ${error}`)
      }
    }
    dataGoodPeople()
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex, data]);

  return (
    <div
      className={`${
        isMobile ? "px-5 mt-28" : "xl:px-32 lg:px-20 md:px-8 mt-40"
      }`}
    >
      <div className="text-center mx-auto space-y-3 max-w-3xl">
        {/* <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
          {testimoniData.subheading}
        </p> */}
        <h1
          className={`${heading.className} font-bold xl:text-[32px] lg:text-[28px] text-3xl leading-snug`}
        >
          {testimoniData.heading}
        </h1>
      </div>
      {/* data testimoni */}
      <div className={`lg:mt-10 mt-40`}>
        <div className="relative xl:max-w-5xl lg:max-w-3xl md:max-w-2xl mx-auto">
          <div className={` ${isMobile?"pt-40" : "lg:pt-10 lg:pb-10 md:pt-40"} bg-[#1D3C7A] xl:h-auto h-full p-10 w-full rounded-3xl relative`}>
            <div className="space-y-8 xl:max-w-2xl lg:max-w-xl mx-auto">
              <div className="relative text-white">
                <div className="z-20 relative max-w-3xl justify-center flex items-center">
                  <h2
                    className={`${heading.className} font-semibold lg:text-[36px] text-[28px]`}
                  >
                    {data[currentIndex]?.message}
                  </h2>
                </div>
                <Image
                  src={image.Quotes}
                  alt="quotes"
                  className="absolute bottom-0 right-0"
                  style={{ zIndex: "0" }}
                />
                <Image
                  src={image.Quotes}
                  alt="quotes"
                  className="absolute top-0 left-0 rotate-180"
                  style={{ zIndex: "0" }}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-white font-semibold">
                    {data[currentIndex]?.name}
                  </p>
                  <p className="text-gray-400">
                    {data[currentIndex]?.title}
                  </p>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
              {data.map((_:any, index:any) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></div>
              ))}
            </div>
              </div>
            </div>
          </div>
          <div className={` ${isMobile? "w-full -top-24" : "lg:w-auto w-full"} absolute lg:top-0 md:-top-20 xl:-left-20 lg:-left-28 left-0`}>
            <div className="overflow-hidden w-52 h-64 mx-auto">
              <Image
                src={`${baseUrl}${data[currentIndex]?.picture.data.attributes.url}`}
                width={0}
                height={0}
                alt="image-testimoni"
                className=" w-full h-full rounded-xl mx-auto object-top object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodPeoples;
