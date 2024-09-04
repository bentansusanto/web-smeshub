import { heading } from "@/common/FontFamily";
import { greetingMessage } from "@/common/GreetingMessage";
import { Mobile } from "@/common/MediaQuery";
import { packageMentor } from "@/libs/SmesXpertData";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";


const PackageMentor = () => {
  const { isMobile } = Mobile();
  const phoneNumber = "+6285716629957"
  const handleOrderPackage = (list:any) => { 
    const message = `
        ${greetingMessage()} smeshub, saya mau order paket ${list.name_package} ${list.sesi}. Terima kasih
        *Order Summary:*
        Name Package: *${list.name_package}*,
        Price: *${list.price}*
        Sesi: *${list.sesi}*
    `
    const directWhatapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
    return directWhatapp;
  }
  return (
    <div id="package-mentor" className={`${isMobile ? "my-20" : "my-24"}`}>
      <div className="space-y-3 text-center mx-auto xl:max-w-xl">
        <h1
          className={`${heading.className} font-bold xl:text-[32px] lg:text-[36px] text-3xl leading-snug`}
        >
          {packageMentor.heading}
        </h1>
        <p className=" text-sm text-gray-400 leading-relaxed">
          {packageMentor.body}
        </p>
      </div>
      {/* List Package */}
      <div className="flex items-center md:flex-row flex-col gap-8 justify-center mt-10 md:max-w-3xl px-5 md:px-0 mx-auto">
        {packageMentor.package.map((list, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0 ? "bg-[#003DB6] text-white" : "bg-white"
            } p-5 rounded-lg relative w-full space-y-10`}
          >
            {idx === 0 ? (
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h2 className="font-semibold text-lg">
                    {list.name_package}
                  </h2>
                  <h4 className="font-semibold text-lg">{list.sesi}</h4>
                </div>
                <span className="bg-orange-500 p-3 rounded-full">Popular</span>
              </div>
            ) : (
              <div className="space-y-2">
                <h2 className="font-semibold text-lg w-[55%]">
                  {list.name_package}
                </h2>
                <h4 className="font-semibold text-lg">{list.sesi}</h4>
              </div>
            )}
            <h4 className={`${heading.className} text-3xl font-bold`}>{list.price}</h4>
            {/* benefit */}
            <div className="space-y-2">
                <p className="font-semibold">Yang anda dapatkan:</p>
                <div className="space-y-3">
                    {
                        list.benefit.map((data, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <div className="bg-green-600 p-1.5 rounded-full">
                                    <FaCheck className="text-sm text-white"/>
                                </div>
                                <p>{data}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* button cta */}
            <div>
                <Link href={handleOrderPackage(list)} target="_blank">
                {
                    idx === 0 ? 
                    (<button className="bg-white py-4 w-full text-blue-700 font-semibold rounded-lg">Konsultasi Sekarang</button>) : 
                    (<button className="bg-[#003DB6] py-4 w-full text-white border border-[#003DB6] font-semibold rounded-lg">Konsultasi Sekarang</button>)
                }
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageMentor;
