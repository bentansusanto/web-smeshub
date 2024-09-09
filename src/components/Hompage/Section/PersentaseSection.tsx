import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { presentaseData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const PersentaseSection = () => {
  const { isMobile } = Mobile();
  const pathName = usePathname();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <div className="mt-44">
      <div className="relative bg-[#001236] pb-10">
        <div
          data-aos="fade-up"
          className="max-w-4xl px-5 mx-auto relative -top-20"
        >
          <Image
            src={image.BgVideoPersentase}
            alt="bg-video-persentase"
            className="rounded-3xl"
          />
          <div
            onClick={handleOpenModal}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="relative">
              <div className=" animate-ping duration-600 rounded-full bg-[#ffffff70] p-10" />
              <FaPlay className="text-2xl text-white absolute inset-0 mx-auto my-auto" />
            </div>
          </div>
        </div>
        {/* persentase */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap text-white gap-12 lg:gap-0 lg:flex-row lg:justify-between justify-center xl:max-w-6xl lg:max-w-5xl max-w-2xl mx-auto"
        >
          {presentaseData.presentase.map((list, idx) => (
            <div key={idx} className="text-center space-y-2">
              <h2
                className={`${heading.className} font-semibold xl:text-6xl lg:text-5xl text-4xl`}
              >
                {list.value}
              </h2>
              <p className="text-gray-400">{list.title}</p>
            </div>
          ))}
        </div>
        {pathName === "about-us/" && (
          <div
            className={`absolute lg:top-0 md:bottom-0 right-0 xl:w-auto lg:w-24 md:w-24 ${
              isMobile && "hidden"
            }`}
          >
            <Image src={image.Pattern1} alt="pattern-1" />
          </div>
        )}
      </div>
      {/* modal video */}
      <div
        className={`${
          !openModal && "hidden"
        } fixed top-0 w-screen h-screen bg-[#08080880]`}
      >
        <div className="flex h-screen items-center justify-center">
          <iframe
            width="1259"
            height="708"
            src="https://www.youtube.com/embed/fkd_4R2G3rI"
            title="How To Embed YouTube Videos in React / Gatsby (and make them Responsive)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PersentaseSection;
