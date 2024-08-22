import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { heroAboutData } from "@/libs/AboutData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";

const HeroAbout = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${
        isMobile ? " mt-10 px-5" : " mt-20 max-w-3xl"
      } text-center mx-auto`}
    >
      <div className="space-y-10">
        <div className="space-y-3">
          <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
            {heroAboutData.subheading}
          </p>
          <h1
            className={`${heading.className} font-bold xl:text-[52px] lg:text-[42px] text-4xl leading-snug`}
          >
            {heroAboutData.heading}
          </h1>
          <p className=" text-sm text-gray-400 leading-relaxed">
            {heroAboutData.body}
          </p>
        </div>
        <div className={` ${isMobile&& "pt-0"} relative pt-10`}>
          <div className="flex items-center space-x-5 text justify-center">
            <button className="bg-[#002774] border-[#002774] border py-3 font-medium px-6 rounded-full text-white text-sm">
              Gabung Sekarang
            </button>
            <button className="border-[#002774] text-[#002774] border py-3 px-6 rounded-full text-sm font-medium">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className={`${isMobile&&"hidden"} absolute top-0 left-10`}>
            <Image src={image.Arrow} alt="arrow"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
