import { heading } from "@/common/FontFamily";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";
import { TbWorld } from "react-icons/tb";

const CTASection = () => {
  return (
    <div className="lg:max-w-4xl md:max-w-3xl rounded-3xl bg-[#002774] w-full mx-auto md:p-10 p-8 -top-24 relative ">
      <div className="flex md:flex-row flex-col-reverse items-start justify-between ">
        {/* Content */}
        <div className="space-y-8 md:max-w-sm md:mt-0 mt-10">
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
          </div>
        </div>
        {/* Image */}
        <div className="max-w-xl md:w-[50%] w-full">
          <Image src={image.BgCta} alt="bg-cta" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
