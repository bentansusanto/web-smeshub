import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { visionMission } from "@/libs/AboutData";
import { presentaseData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const ContentVisionMision = () => {
  const { isMobile } = Mobile();
  return (
    <div className="mt-40 pb-10 bg-[#001236] w-screen">
      <div className="max-w-4xl -top-20 px-5 mx-auto relative">
        <div className="relative">
          <Image
            src={image.BgVideoPersentase}
            alt="bg-video-persentase"
            className="rounded-3xl"
          />
          <div className="bg-blue-800 opacity-50 absolute inset-0 w-full h-full rounded-3xl" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative">
            <div className=" animate-ping duration-600 rounded-full bg-[#ffffff70] p-10" />
            <FaPlay className="text-2xl text-white absolute inset-0 mx-auto my-auto" />
          </div>
        </div>
      </div>
      <div className=" text-white xl:px-56 lg:px-20 px-5 mt-10">
        <div>
          <h1
            className={`${heading.className} font-semibold lg:text-4xl text-2xl text-center`}
          >
            Continuation of Vision, Mission and Values
          </h1>
        </div>
        {/* Vision & Mission */}
        <div className="flex lg:flex-row flex-col-reverse gap-5 items-center justify-between lg:mt-40 mt-20">
          <div className="space-y-5 max-w-lg lg:mt-0 mt-10">
            <h2
              className={`${heading.className} font-semibold leading-snug text-3xl`}
            >
              {visionMission.vision_mission.heading}
            </h2>
            <div className="space-y-4">
              {visionMission.vision_mission.list_vision_mision.map(
                (list, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-[#6D794550] text-[#D3F954]">
                      <FaCheck className="text-xs" />
                    </div>
                    <p className="text-gray-300">{list}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="max-w-2xl">
            <Image src={image.BgVision} alt="bg-vision" />
          </div>
        </div>
        {/* Values */}
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-between mt-56">
          <div className="max-w-2xl">
            <Image src={image.BgVision} alt="bg-vision" />
          </div>
          <div className="space-y-5 max-w-lg">
            <h2
              className={`${heading.className} font-semibold leading-snug text-3xl`}
            >
              {visionMission.values.heading}
            </h2>
            <div className="space-y-4">
              {visionMission.values.list_value.map(
                (list, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-[#6D794550] text-[#D3F954]">
                      <FaCheck className="text-xs" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300 font-semibold">{list.title}</p>
                      <p className="text-gray-400">{list.desc}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentVisionMision;
