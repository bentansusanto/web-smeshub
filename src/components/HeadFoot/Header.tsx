"use client";
import { Mobile } from "@/common/MediaQuery";
import { navData } from "@/libs/HeadFootData";
import image from "@/libs/ImageData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const { isMobile } = Mobile();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenuMobile = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${isMobile ? "" : "xl:px-32 lg:px-28 md:px-8 py-4"}`}
    >
      {isMobile ? (
        // Mobile Device
        <div className="relative">
          <div className={`${open? "bg-gray-100" : "bg-ray-50"} transition-all duration-300 flex items-center justify-between px-5 py-4`}>
            <Link href={"/"}>
              <Image
                src={image.LogoSmeshub}
                alt="logo-smeshub"
                className="w-28 md:w-auto"
              />
            </Link>
            <div
              className={`${open && "rotate-180"} transition-all duration-300`}
            >
              {open ? (
                <IoClose onClick={() => setOpen(false)} className="text-2xl" />
              ) : (
                <LuMenu onClick={handleOpenMenuMobile} className="text-2xl" />
              )}
            </div>
          </div>
          <div className={`${open? "top-14" : "-top-[500px]"} absolute bg-gray-100 py-5 w-full left-0 transition-all duration-300`}>
            <ul className="space-y-3">
                {
                    navData.map((list, idx) => (
                        <li key={idx} className="px-5 py-3 transition-all duration-300 py-23 hover:bg-gray-200">
                            <Link href={list.link}>{list.page}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="px-5">
                <button className="bg-[#002774] py-3 font-semibold text-center w-full mt-5 text-white rounded-full">
                    Contact Us
                </button>
            </div>
          </div>
        </div>
      ) : (
        // Desktop & Tablet
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src={image.LogoSmeshub} alt="logo-smeshub" />
          </Link>
          <ul className="flex items-center space-x-10">
            {navData.map((list, idx) => (
              <li key={idx} className="text-sm font-medium">
                <Link href={list.link}>{list.page}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
