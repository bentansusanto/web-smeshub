import { Mobile } from "@/common/MediaQuery";
import React from "react";

const Location = () => {
  const { isMobile } = Mobile();
  return (
    <div className={`${isMobile ? " pb-56 pt-20" : " pb-64 pt-36"} bg-[#001236] w-screen`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.13088166821746!2d106.8358314850239!3d-6.241824638648871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3cf37d65dbb%3A0x96efed1f6f040368!2sSmeshub%20Indonesia!5e0!3m2!1sid!2sid!4v1724294325765!5m2!1sid!2sid"
        className="w-screen h-[50vh]"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Location;
