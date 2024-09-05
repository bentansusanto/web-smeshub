import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import '@/app/globals.css'
import { kolaborasiCompany } from "@/libs/KolaborasiData";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { baseUrl, fetchDataCommunityCompany } from "@/common/FetchData";

const KolaborasiCompany = () => {
  const { isMobile } = Mobile();
  const scrollRef = useRef<HTMLDivElement>(null)
  const {data} = fetchDataCommunityCompany()
  
  useEffect(() => {
    const scroller = scrollRef.current
    function addAnimation() {
      if(!scroller) return;
      const innerScroller = scroller.querySelector(".scroller_inner")
      if(!innerScroller) return;
      if(innerScroller.getAttribute("data-cloned") === "true") return;
      const innerScrollerChildren = Array.from(innerScroller.children)
      innerScrollerChildren.forEach((item) => {
        const extendLogos = item.cloneNode(true) as HTMLElement;
        innerScroller.appendChild(extendLogos)
      })
      innerScroller.setAttribute("data-cloned", "true")
    }
    addAnimation()
  },[])

  return (
    <div className={`${isMobile ? "px-5 mt-20" : " mt-32"}`}>
      <div className="text-center mx-auto space-y-3 max-w-3xl">
        <h1
          className={`${heading.className} font-medium xl:text-[18px] lg:text-[18px] text-xl leading-snug`}
        >
          {kolaborasiCompany.heading}
        </h1>
      </div>
      <div className="space-y-8 mt-10">
      <div ref={scrollRef} className="flex items-center max-w-4xl mx-auto scroller overflow-hidden space-x-5">
        <div className="flex flex-nowrap scroller_inner items-center w-full space-x-5 animate-infinite_scroll_right ">
          {data.slice(0,25).map((list:any, idx:any) => (
            <div key={idx} className="w-32">
              <Image src={`${baseUrl}${list.url}`} width={0} height={0} className="w-full" alt="image-data" />
            </div>
          ))}
        </div>
      </div>
      <div ref={scrollRef}  className="flex items-center max-w-3xl mx-auto scroller overflow-hidden space-x-5">
        <div className="flex flex-nowrap scroller_inner items-center w-full space-x-5 animate-infinite_scroll_left">
          {data.slice(25, data.length).map((list:any, idx:any) => (
            <div key={idx} className="w-32">
              <Image src={`${baseUrl}${list.url}`} width={0} height={0} className="w-full" alt="image-data" />
            </div>
          ))}
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default KolaborasiCompany;
