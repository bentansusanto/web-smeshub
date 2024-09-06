import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { testimoniData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const GoodPeoples = () => {
  const { isMobile } = Mobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const cardsPerPage = isMobile? 1 : 2;

  useEffect(() => {
    const dataGoodPeople = async () => {
      try {
        const res = await fetchData(
          `${baseUrlApi}/kutipan-orang-pentings?populate=picture`
        );
        const datas = res.map((list: any) => list.attributes);
        console.log(datas)
        setData(datas);
      } catch (error) {
        throw new Error(`Error data ${error}`);
      }
    };
    dataGoodPeople();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + cardsPerPage >= data.length ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex, data.length]);

  return (
    <div
      className={`${
        isMobile ? "px-5 mt-28" : "xl:px-32 lg:px-20 md:px-8 mt-20"
      }`}
    >
      <div className="space-y-3 ">
        {/* <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
          {testimoniData.subheading}
        </p> */}
        <div className="flex items-center justify-between">
          <h1
            className={`${heading.className} font-bold xl:text-[32px] lg:text-[28px] text-3xl leading-snug`}
          >
            {testimoniData.heading}
          </h1>
          
        </div>
      </div>
      {/* data testimoni */}
      <div className=" mt-10">
        <div className={`${isMobile&&"overflow-hidden"} flex gap-4`}>
          {data
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((list: any, idx: any) => (
              <div key={idx} className="bg-blue-800 h-auto rounded-lg shadow-md w-full flex items-end relative">
                <div className="absolute top-0" style={{zIndex: 0}}>
                  <h2 className={`${heading.className} font-bold text-[8rem] text-white opacity-5`}>{list.name}</h2>
                </div>
                <div className="flex lg:flex-row flex-col-reverse gap-x-5 pt-20 items-end justify-start" style={{zIndex: 1}}>
                  <div className="mx-auto w-[90%]">
                  <Image
                  src={`${baseUrl}${list.picture.data.attributes.url}`}
                  width={0}
                  height={0}
                  alt="image-testimoni"
                  className="w-auto"
                />
                  </div>
                  <div className="space-y-5  text-white p-5">
                      <h4 className="text-2xl font-bold leading-relaxed">{list.message}</h4>
                    <div className="space-y-2">
                      <p className="text-white font-semibold">{list.name}</p>
                      <p className="text-gray-400">{list.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GoodPeoples;
