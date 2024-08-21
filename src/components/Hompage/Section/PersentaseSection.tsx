import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { presentaseData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const PersentaseSection = () => {
  const { isMobile } = Mobile();
  return (
    <div className="h-screen mt-56 ">
      <div className="relative">
        <div className="max-w-4xl px-5 mx-auto relative">
          <Image src={image.BgVideoPersentase} alt="bg-video-persentase" className="rounded-3xl"/>
          <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative">
                  <div className=" animate-ping duration-600 rounded-full bg-[#ffffff70] p-10"/>
                  <FaPlay className="text-2xl text-white absolute inset-0 mx-auto my-auto"/>
              </div>
          </div>
        </div>
        <div
          className="bg-[#001236] w-screen absolute top-24 text-white xl:px-32 lg:px-20 px-5 md:pt-64 pt-40 pb-20"
          style={{ zIndex: "-1" }}
        >
          <div className=" flex lg:flex-row flex-col items-center lg:justify-between space-y-10 lg:space-y-0 justify-center lg:mt-36 md:mt-20">
            <div className="xl:max-w-2xl lg:max-w-md">
              <h1 className={`${heading.className} font-semibold xl:leading-snug leading-relaxed text-center lg:text-start xl:text-3xl lg:text-2xl text-2xl`}>
                {presentaseData.body}
              </h1>
            </div>
            <div className="flex flex-wrap lg:flex-row justify-center lg:justify-start gap-12 xl:max-w-xl lg:max-w-lg max-w-4xl">
              {
                  presentaseData.logo_company.map((list, idx) => (
                      <div key={idx} className="xl:w-36 lg:w-28 w-28">
                          <Image src={require(`@/assets/${list}`)} alt="company-image"/>
                      </div>
                  ))
              }
            </div>
          </div>
          {/* persentase */}
          <div className="flex flex-wrap gap-12 lg:gap-0 lg:flex-row lg:justify-between justify-center xl:max-w-6xl lg:max-w-5xl max-w-2xl mt-32 mx-auto">
              {
                  presentaseData.presentase.map((list, idx) => (
                      <div key={idx} className="text-center space-y-2">
                          <h2 className={`${heading.className} font-semibold xl:text-6xl lg:text-5xl text-4xl`}>{list.value}</h2>
                          <p className="text-gray-400">{list.title}</p>
                      </div>
                  ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersentaseSection;
