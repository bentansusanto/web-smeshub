import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { presentaseData } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

const PersentaseSection = () => {
  const { isMobile } = Mobile();
  const pathName = usePathname();
  return (
    <div className="mt-44">
      <div className="relative bg-[#001236] pb-10">
        <div data-aos="fade-up" className="max-w-4xl px-5 mx-auto relative -top-20">
          <Image
            src={image.BgVideoPersentase}
            alt="bg-video-persentase"
            className="rounded-3xl"
          />
          <div
            className="absolute inset-0 flex justify-center items-center"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-slide-down-animation-modal"
            data-hs-overlay="#hs-slide-down-animation-modal"
          >
            <div className="relative">
              <div className=" animate-ping duration-600 rounded-full bg-[#ffffff70] p-10" />
              <FaPlay className="text-2xl text-white absolute inset-0 mx-auto my-auto" />
            </div>
          </div>
        </div>
        {/* persentase */}
        <div data-aos="fade-up" className="flex flex-wrap text-white gap-12 lg:gap-0 lg:flex-row lg:justify-between justify-center xl:max-w-6xl lg:max-w-5xl max-w-2xl mx-auto">
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
        id="hs-slide-down-animation-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        aria-labelledby="hs-slide-down-animation-modal-label"
      >
        <div className="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3
                id="hs-slide-down-animation-modal-label"
                className="font-bold text-gray-800 dark:text-white"
              >
                Modal title
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                data-hs-overlay="#hs-slide-down-animation-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="mt-1 text-gray-800 dark:text-neutral-400">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                data-hs-overlay="#hs-slide-down-animation-modal"
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersentaseSection;
