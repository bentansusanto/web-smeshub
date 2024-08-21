"use client";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { maintainData } from "@/libs/MaintenanceData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Maintentance = () => {
  const { isMobile } = Mobile();
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`${
          isMobile ? "px-5" : ""
        } flex flex-col justify-between items-center`}
      >
        <Image
          src={require(`@/assets/bg-maintenance.svg`)}
          alt="bg-maintenance"
        />
        <div className="mx-auto mt-10 space-y-3 text-center">
          <h1
            className={`${heading.className} font-extrabold text-5xl text-[#002774]`}
          >
            {maintainData.heading}
          </h1>
          <p className="text-gray-400 lg:max-w-[90%] max-w-[100%] mx-auto">
            Kami sedang menyiapkan sesuatu untuk UMKM dan anak muda Indonesia.
            Sebentar lagi ya.. <br /> Ikuti terus informasi terbaru kegiatan
            Smeshub Indonesia melalui instagram{" "}
            <Link
              href={"https://www.instagram.com/smeshub.id/"}
              className="text-orange-500"
            >
              @smeshub.id
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintentance;
