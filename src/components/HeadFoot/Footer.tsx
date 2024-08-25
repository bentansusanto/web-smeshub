import { Mobile } from "@/common/MediaQuery";
import React from "react";
import CTASection from "../Hompage/Section/CTASection";
import Image from "next/image";
import image from "@/libs/ImageData";
import { PiTiktokLogo } from "react-icons/pi";
import { contactCompany, navData } from "@/libs/HeadFootData";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiYoutube } from "react-icons/fi";
import { programSmeshub } from "@/libs/SmesExperienceData";

const Footer = () => {
  const { isMobile } = Mobile();
  const date = new Date().getFullYear()
  return (
    <div className="bg-[#001236] w-screen h-full relative md:pb-10 pb-5">
      <CTASection />
      <div
        className={`${
          isMobile
            ? "flex-col mt-5 px-5 pb-10"
            : "mt-20 xl:px-32 lg:px-20 px-8 pb-10 flex-row justify-between gap-10"
        } flex`}
      >
        <div className="space-y-5">
          <div className="w-32">
            <Image src={image.LogoSmeshubWhite} alt="logo-white" />
          </div>
          <div className="max-w-sm">
            <p className="text-gray-400 text-sm leading-relaxed">
              We host your empire business today using the latest technologies.
            </p>
          </div>
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
        <div className="flex lg:flex-row flex-col md:mt-0 mt-14 gap-10 lg:justify-between xl:max-w-4xl w-full">
          {/* Quicklink */}
          <div className="space-y-5 text-white">
            <p className="text-lg font-semibold">Quicklinks</p>
            <ul className="space-y-3">
              {navData.map((list, idx) => (
                <li key={idx} className="text-gray-400 hover:text-white">
                  <Link href={list.link}>{list.page}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Quicklink */}
          <div className="space-y-5 text-white">
            <p className="text-lg font-semibold">Smeshub Program</p>
            <ul className="space-y-3">
              {programSmeshub.ecosystem.map((list, idx) => (
                <li key={idx} className="text-gray-400 hover:text-white">
                   {list.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Quicklink */}
          <div className="space-y-5 text-white max-w-sm">
            <p className="text-lg font-semibold">Company</p>
            <div className="space-y-3">
              <p className="text-gray-400">{contactCompany.address}</p>
              <p className="text-gray-400">{contactCompany.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-gray-400 text-sm text-center mt-12">
        ©{date}, Smeshub Indonesia | All Right Reserved
      </footer>
    </div>
  );
};

export default Footer;
