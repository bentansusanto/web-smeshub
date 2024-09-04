import { Mobile } from "@/common/MediaQuery";
import React from "react";
// import CTASection from "../Hompage/Section/CTASection";
import Image from "next/image";
import image from "@/libs/ImageData";
import { PiTiktokLogo } from "react-icons/pi";
import { contactCompany, footerData, navData } from "@/libs/HeadFootData";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiYoutube } from "react-icons/fi";
// import { programSmeshub } from "@/libs/SmesExperienceData";

const Footer = () => {
  const { isMobile } = Mobile();
  const date = new Date().getFullYear()
  return (
    <div className="bg-[#001236] w-screen h-full relative md:py-10 pb-5">
      {/* <CTASection /> */}
      <div
        className={`${
          isMobile
            ? "flex-col px-5 py-10"
            : "mt-10 xl:px-56 lg:px-20 px-8 flex-row justify-between gap-10"
        } flex`}
      >
        <div className="space-y-5">
          <div className="w-32">
            <Image src={image.LogoSmeshubWhite} alt="logo-white" />
          </div>
          <div className="space-y-3 max-w-md">
              <p className="text-gray-400">{contactCompany.address}</p>
              <p className="text-gray-400">{contactCompany.phone_number}</p>
            </div>
        </div>
        <div className="flex md:flex-row flex-col xl:space-x-40 lg:space-x-20 md:space-x-20 mt-10 md:mt-0 md:space-y-0 space-y-10">
          {/* Quicklink */}
          <div className="space-y-5 text-white">
            <p className="text-lg font-semibold">Quicklinks</p>
            <ul className="space-y-3">
              {footerData.map((list, idx) => (
                <li key={idx} className="text-gray-400 hover:text-white">
                  <Link href={list.link}>{list.page}</Link>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Quicklink */}
          <div className="space-y-5 text-white max-w-sm">
            <p className="text-lg font-semibold">Follow Us</p>
            <ul className="flex items-center space-x-3">
            {contactCompany.socialMedia.map((list, idx) => (
              <li
                key={idx}
                className=" bg-white p-3 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-300"
              >
                <Link href={list.link}>
                  {list.name === "instagram" ? (
                    <FaInstagram className="text-xl" />
                  ) : list.name === "twitter" ? (
                    <FiLinkedin className="text-xl" />
                  ) : list.name === "youtube" ? (
                    <FiYoutube className="text-xl" />
                  ) : (
                    <PiTiktokLogo className="text-xl" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <footer className="text-gray-400 text-sm text-center mt-5 md:mt-12">
        ©{date}, Smeshub Indonesia | All Right Reserved
      </footer>
    </div>
  );
};

export default Footer;
