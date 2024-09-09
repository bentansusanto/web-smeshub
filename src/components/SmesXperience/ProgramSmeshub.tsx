import { baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import image from "@/libs/ImageData";
import { programSmeshub } from "@/libs/SmesExperienceData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";

const ProgramSmeshub = () => {
  const { isMobile } = Mobile();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const dataProgramSmeshub = async () => {
      try {
        const res = await fetchData(`${baseUrlApi}/programsmeshubs`);
        const datas = res.map((list: any) => list.attributes);
        setData(datas);
      } catch (error) {
        throw new Error(`Error data ${error}`);
      }
    };
    dataProgramSmeshub();
  }, []);

  return (
    <div className={`${isMobile ? "px-5" : "xl:px-40 lg:px-20 md:px-8"} mt-32 bg-gray-200 py-10 relative`}>
      <div className="text-start xl:mx-auto xl:text-center space-y-3 max-w-3xl">
        {/* <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
          {programSmeshub.subheading}
        </p> */}
        <h1
          className={`${heading.className} font-bold xl:text-[32px] lg:text-[28px] text-3xl leading-snug`}
        >
          {programSmeshub.heading}
        </h1>
      </div>
      <div className="mt-10 flex flex-col gap-5 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {data.slice(0, 3).map((list: any, idx: any) => (
              <div
               data-aos="zoom-in"
                key={idx}
                className="bg-gradient-to-tl from-[#F6F6F9] to-[#EEEEF560] border    p-5 rounded-md"
              >
                <div className="">
                  <h3 className="text-xl font-semibold">{list.name_program}</h3>
                </div>
                <div className="bg-gray-300 h-[1px] w-full my-4" />
                <div className="space-y-4">
                  {
                    list.detail_program.map((data:any, idx:any) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <IoCheckmarkDone className="text-xl text-blue-500"/>
                        <p className="text-gray-500 font-medium">{data.detail}</p>

                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {data.slice(3, data.length).map((list: any, idx: any) => (
              <div
              data-aos="zoom-in"
                key={idx}
                className="bg-gradient-to-tl from-[#F6F6F9] to-[#EEEEF560] p-5 rounded-md"
              >
                <div className="">
                  <h3 className="text-xl font-semibold">{list.name_program}</h3>
                </div>
                <div className="bg-gray-300 h-[1px] w-full my-3" />
                <div className="space-y-4">
                  {
                    list.detail_program.map((data:any, idx:any) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <IoCheckmarkDone className="text-xl text-blue-500"/>
                        <p className="text-gray-500 font-medium">{data.detail}</p>

                      </div>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
      </div>
      {/* <div className="mt-10">
        {isMobile ? (
          <>
            <div className="grid grid-cols-2 gap-5">
              {currentItems.map((list: any, idx: any) => (
                <div
                  key={idx}
                  className="bg-gradient-to-tl from-gray-100 to-gray-50 p-5 rounded-md"
                >
                  <div className="">
                    <h3 className="text-xl font-semibold">
                      {list.name_program}
                    </h3>
                  </div>
                  <div className="bg-gray-300 h-[1px] w-full my-3" />
                  <p className="text-gray-400">{list.description}</p>
                </div>
              ))}
            </div>
            {loading ? (
              <div className="text-center mt-8">
                <span
                  className="animate-spin inline-block size-4 border-[3px] 
                    border-current border-t-transparent text-center text-blue-500 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </span>
              </div>
            ) : (
              visibleItems < programSmeshub.ecosystem.length && (
                <p
                  onClick={handleShowMore}
                  className="mt-5 text-blue-500 cursor-pointer font-medium text-center px-4 py-2 rounded-md"
                >
                  Lihat Program Selanjutnya
                </p>
              )
            )}
          </>
        ) : (
          <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
            {data.map((list: any, idx: any) => (
              <div
                key={idx}
                className="bg-gradient-to-tl from-gray-100 to-gray-50 p-5 rounded-md"
              >
                <div className="">
                  <h3 className="text-xl font-semibold">{list.name_program}</h3>
                </div>
                <div className="bg-gray-300 h-[1px] w-full my-3" />
                <p className="text-gray-400">{list.description}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}
      <div
        className={`absolute top-0 right-0 xl:w-40 lg:w-28 md:w-28 ${
          isMobile && "hidden"
        }`}
      >
        <Image src={image.Pattern1} alt="pattern-1"  />
      </div>
    </div>
  );
};

export default ProgramSmeshub;
