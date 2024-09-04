import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { listMentor } from "@/libs/SmesXpertData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ListMetorXpert = () => {
  const { isMobile } = Mobile();
  const [visibleItems, setVisibleItems] = useState(4); // Mulai dengan 4 item
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>({})
  const [dataMentor, setDataMentor] = useState<any>([])

  const getHeadingMentor = async() => {
    try {
      const res = await fetchData(`${baseUrlApi}/section1-smes-epert`)
      setData(res.attributes)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  const getDataMentor = async() =>{
    try {
      const res = await fetchData(`${baseUrlApi}/mentor-smeshubs?populate=foto_mentor`)
      const datas = res.map((list: any) => list.attributes)
      setDataMentor(datas)
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  useEffect(() => {
    getHeadingMentor()
    getDataMentor()
  },[])

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
        setVisibleItems(visibleItems + 4); // Tambah 4 item lagi setiap kali diklik
      setLoading(false);
    }, 1500); // Simulasi loading selama 1 detik
  };

  const currentItems = dataMentor.slice(0, visibleItems);

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
            {/* <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
              {data.subheading}
            </p> */}
            <h1
              className={`${heading.className} font-bold xl:text-[42px] lg:text-[36px] text-3xl leading-snug`}
            >
              {data.heading}
            </h1>
            <p className=" text-sm text-gray-400 leading-relaxed">
              {data.body}
            </p>
          </div>
        </div>
      </div>
      {/* List Mentor */}
      <div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:mt-20 mt-12 gap-x-5 gap-y-10">
        {
            currentItems.map((list:any, idx:any) => (
                <div key={idx} className="space-y-3">
                    <div className="space-y-3 mx-auto overflow-hidden rounded-full w-72 h-72 bg-gray-100 transition-all duration-500 hover:bg-blue-600">
                        <Image src={`${baseUrl}${list.foto_mentor.data.attributes.url}`} width={0} height={0} className="w-auto object-cover object-center" alt="foto-mentor"/>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold capitalize text-[18px] text-center">{list.name_mentor}</p>
                        <p className=" text-gray-500 text-center">{list.title}</p>
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
              visibleItems < dataMentor.length && (
                <p
                  onClick={handleShowMore}
                  className="mt-5 text-blue-500 cursor-pointer font-medium text-center px-4 py-2 rounded-md"
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
