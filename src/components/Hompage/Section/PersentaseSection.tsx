import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { presentaseData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const PersentaseSection = () => {
 
  return (
    <div className="mt-44">
      <div className="relative bg-[#001236] pb-10">
        <div className="max-w-4xl px-5 mx-auto relative -top-20">
          <Image src={image.BgVideoPersentase} alt="bg-video-persentase" className="rounded-3xl"/>
          <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative">
                  <div className=" animate-ping duration-600 rounded-full bg-[#ffffff70] p-10"/>
                  <FaPlay className="text-2xl text-white absolute inset-0 mx-auto my-auto"/>
              </div>
          </div>
        </div>
        {/* persentase */}
        <div className="flex flex-wrap text-white gap-12 lg:gap-0 lg:flex-row lg:justify-between justify-center xl:max-w-6xl lg:max-w-5xl max-w-2xl mx-auto">
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
  );
};

export default PersentaseSection;
