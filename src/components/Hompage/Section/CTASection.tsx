import { heading } from "@/common/FontFamily";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";
import { TbWorld } from "react-icons/tb";

const CTASection = () => {
  return (
    <div className="xl:max-w-5xl lg:max-w-4xl md:max-w-3xl rounded-3xl bg-[#002774] w-full mx-auto md:p-10 p-8 -top-24 relative ">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between ">
        {/* Content */}
        <div className="space-y-8 md:max-w-sm md:mt-0 mt-10">
          <div className=" md:max-w-[90%] max-w-sm justify-center flex items-center space-x-3 bg-white py-2.5 rounded-full">
            <div>
              <TbWorld className="text-2xl" />
            </div>
            <p className="text-sm font-semibold">
              We host more than 120,000 websites
            </p>
          </div>
          <div className="space-y-3 text-white">
            <h1
              className={`${heading.className} font-bold leading-snug text-[36px]`}
            >
              Start Growing Today
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide a variety of servers to grow your users acquisition
              much user-friendly and boosting up sales.
            </p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button className="bg-[#FF961A] border-[#FF961A] border py-3 px-6 rounded-full text-black font-medium text-sm">
              Gabung Sekarang
            </button>
            <button className="border-[#002774] text-white font-medium border py-4 px-6 rounded-full text-sm">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="max-w-xl md:w-[70%] w-auto">
          <Image src={image.BgCta} alt="bg-cta" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
