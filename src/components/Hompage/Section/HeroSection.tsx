import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { heroData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const { isMobile } = Mobile();
  const [data, setData] = useState<any>({});
  const [images, setImages] = useState<any>({});

  useEffect(() => {
    const getDataSectionHeroHome = async () => {
      try {
        const res = await fetchData(
          `${baseUrlApi}/section1-homepage?populate=bg_section1_homepage`
        );
        setData(res.attributes);
        setImages(
          res.attributes.bg_section1_homepage.data.attributes
        );
      } catch (error) {
        throw new Error(`Error data ${error}`);
      }
    };
    getDataSectionHeroHome();
  }, []);

  return (
    <div
      className={`${
        isMobile
          ? "px-5 flex-col-reverse mt-16"
          : "xl:px-40 lg:px-24 md:px-8 lg:flex-row lg:justify-between mt-20 flex-col-reverse"
      } flex`}
    >
      <div className="space-y-10 xl:max-w-2xl lg:max-w-lg w-auto mt-10 lg:mt-0">
        <div className="space-y-3">
          <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
            {data.subheading}
          </p>
          <h1
            className={`${heading.className} font-bold xl:text-[52px] lg:text-[42px] text-3xl leading-snug`}
          >
            {data.heading}
          </h1>
          <p className=" text-sm text-gray-400 leading-relaxed xl:w-[70%]">
            {data.body}
          </p>
        </div>
        {/* button cta */}
        <div className="flex flex-row items-center gap-3">
          <button className="bg-[#002774] border-[#002774] border py-3 font-medium px-6 rounded-full text-white text-sm">
            Ajak Kolaborasi
          </button>
        </div>
        {/* Success client */}
        {/* <div className="flex items-center space-x-4">
          <Image src={image.SuccessClient} alt="success-client" />
          <div className="space-y-2">
            <h3 className={`${heading.className} font-semibold text-2xl`}>
              {heroData.client_success}
            </h3>
            <p className="text-gray-400 text-sm">Success client</p>
          </div>
        </div> */}
      </div>
      <div className="xl:max-w-3xl max-w-auto">
        <Image
          src={`${baseUrl}${images.url}`}
          width={0}
          height={0}
          alt="bg-herosection"
          className="w-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
