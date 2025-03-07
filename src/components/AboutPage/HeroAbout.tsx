import { baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import ButtonCTA from "@/common/LogicButtonCTA";
import { Mobile } from "@/common/MediaQuery";
import image from "@/libs/ImageData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroAbout = () => {
  const { buttonHref, buttonLabel } = ButtonCTA();
  const { isMobile } = Mobile();
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const getDataHeroAbout = async () => {
      try {
        const res = await fetchData(`${baseUrlApi}/section1-aboutpage`);
        setData(res.attributes);
      } catch (error) {
        throw new Error(`Error data ${error}`);
      }
    };
    getDataHeroAbout();
  }, []);
  return (
    <div
      className={`${
        isMobile ? " mt-10 px-5" : " mt-20"
      } text-center mx-auto relative`}
    >
      <div className="space-y-10 md:max-w-3xl mx-auto">
        <div className="space-y-3">
          <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
            {data.subheading}
          </p>
          <h1
            className={`${heading.className} font-bold xl:text-[52px] lg:text-[42px] text-4xl leading-snug`}
          >
            {data.heading}
          </h1>
          <p className=" text-sm text-gray-400 leading-relaxed">{data.body}</p>
        </div>
        <div className={` ${isMobile && "pt-0"} relative pt-5`}>
          <div className="flex items-center space-x-5 text justify-center">
            <button className="bg-[#002774] border-[#002774] border py-3 font-medium px-6 rounded-full text-white text-sm">
              <Link href={buttonHref}>{buttonLabel}</Link>
            </button>
            <button className="border-[#002774] text-[#002774] border py-3 px-6 rounded-full text-sm font-medium">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className={`${isMobile && "hidden"} absolute -top-5 left-10`}>
            <Image src={image.Arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div
        className={`absolute lg:top-0 md:bottom-0 right-0 xl:w-40 lg:w-28 md:w-28 ${
          isMobile && "hidden"
        }`}
      >
        <Image src={image.Pattern2} alt="pattern-1" />
      </div>
    </div>
  );
};

export default HeroAbout;
