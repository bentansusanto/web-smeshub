import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { pelatihanUMKM } from "@/libs/SmesExperienceData";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const PelatihanUMKM = () => {
  const { isMobile } = Mobile();
  return (
    <div
      className={`${
        isMobile
          ? "px-5 mt-40 mb-56 flex-col gap-10"
          : "xl:px-32 lg:px-20 md:px-8 mt-40 mb-64 lg:flex-row flex-col lg:items-center xl:gap-20 gap-10"
      } flex`}
    >
      <div className="xl:max-w-3xl lg:max-w-xl">
        <Image
          src={require(`@/assets/${pelatihanUMKM.bg_pelatihan_umkm}`)}
          alt="bg-kompetisi-bisnis"
        />
      </div>
      <div className="space-y-5 max-w-xl">
        <div>
          <Image
            src={require(`@/assets/${pelatihanUMKM.icon}`)}
            alt="icon-kompetisi-bisnis"
          />
        </div>
        <div className="space-y-3">
          <h2
            className={`${heading.className} font-semibold leading-snug text-3xl`}
          >
            {pelatihanUMKM.heading}
          </h2>
          <p className="text-gray-400">{pelatihanUMKM.body}</p>
        </div>
        <button className="text-[#002774] py-3 flex items-center space-x-2 rounded-full text-sm font-medium">
          <p>Pelajari Lebih Lanjut</p>
          <BsArrowRight className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default PelatihanUMKM;
