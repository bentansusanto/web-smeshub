import { fetchDataTestimoniSmesPeople } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { testimoniSmesPeople } from "@/libs/SmesPeopleData";
import React from "react";
import Slider from "react-slick";

const TestimoniSection = () => {
  const { isMobile, isTablet } = Mobile();
  const currentPage = isMobile ? 1 : isTablet ? 2 : 3;
  const { data } = fetchDataTestimoniSmesPeople();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: currentPage,
    slidesToShow: currentPage,
  };

  return (
    <div className="mt-24">
      <div className="text-center max-w-2xl md:px-0 px-5 mx-auto">
        <h1
          className={`${heading.className} font-semibold lg:text-3xl text-2xl leading-snug`}
        >
          {testimoniSmesPeople.heading}
        </h1>
      </div>
      {/* list testimoni */}
      <div className="xl:px-40 lg:px-20 md:px-8 px-5 mt-10">
        <Slider {...settings}>
          {data.map((list: any, idx: any) => (
            <div key={idx} className="bg-white w-full rounded-xl">
              <div className="bg-blue-500 rounded-tl-xl w-1/2 rounded-br-xl p-3">
                <div className="space-y-3 text-white">
                  <p className="text-lg font-semibold">{list.name}</p>
                  <p className="text-gray-300">{list.title}</p>
                </div>
              </div>
              <div className="mt-5 p-3">
                <p className="text-lg font-semibold">{list.message}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimoniSection;
