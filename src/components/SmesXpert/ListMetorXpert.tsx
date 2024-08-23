import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { listMentor } from "@/libs/SmesXpertData";
import Image from "next/image";
import React, { useState } from "react";

const ListMetorXpert = () => {
  const { isMobile } = Mobile();
  const [visibleItems, setVisibleItems] = useState(4); // Mulai dengan 4 item
  const [loading, setLoading] = useState(false);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
        setVisibleItems(visibleItems + 4); // Tambah 4 item lagi setiap kali diklik
      setLoading(false);
    }, 1500); // Simulasi loading selama 1 detik
  };

  const currentItems = listMentor.mentor.slice(0, visibleItems);

  return (
    <div
      className={`${
        isMobile ? " px-5 mt-20" : "xl:px-32 lg:px-20 md:px-8 mt-20"
      } mb-56`}
    >
        {/* Heading */}
      <div className="text-center mx-auto max-w-2xl">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
              {listMentor.subheading}
            </p>
            <h1
              className={`${heading.className} font-bold xl:text-[42px] lg:text-[36px] text-3xl leading-snug`}
            >
              {listMentor.heading}
            </h1>
            <p className=" text-sm text-gray-400 leading-relaxed">
              {listMentor.body}
            </p>
          </div>
        </div>
      </div>
      {/* List Mentor */}
      <div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:mt-20 mt-12 gap-x-5 gap-y-10">
        {
            currentItems.map((list, idx) => (
                <div key={idx} className="space-y-3">
                    <div>
                        <Image src={require(`@/assets/${list.picture}`)} alt="foto-mentor"/>
                    </div>
                    <div className="space-y-2">
                        <p className="text-font-semibold">{list.name}</p>
                        <p className="text-font text-gray-400 text-sm">{list.posisi}</p>
                    </div>
                </div>
            ))
        }
      </div>
      {loading ? (
                <div className="text-center mt-8">
                    <span
                    className="animate-spin inline-block size-4 border-[3px] 
                    border-current border-t-transparent text-center text-blue-500 rounded-full"
                    role="status"
                    aria-label="loading"
                    >
                    <span className="sr-only">Loading...</span>
                    </span>
                </div>
            ) : (
              visibleItems < listMentor.mentor.length && (
                <p
                  onClick={handleShowMore}
                  className="mt-5 text-blue-500 cursor-pointer text-medium text-center px-4 py-2 rounded-md"
                >
                  Lihat Mentor Selanjutnya
                </p>
              )
            )}
      </div>
    </div>
  );
};

export default ListMetorXpert;
