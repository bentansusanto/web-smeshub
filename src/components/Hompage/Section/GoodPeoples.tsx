import { baseUrl, baseUrlApi, fetchData } from "@/common/FetchData";
import { heading } from "@/common/FontFamily";
import { Mobile } from "@/common/MediaQuery";
import { testimoniData } from "@/libs/HomeData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const GoodPeoples = () => {
  const { isMobile } = Mobile();
  const [data, setData] = useState<any>([]);
  const currentPage = isMobile ? 1 : 2;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: currentPage,
    slidesToShow: currentPage,
  };

  useEffect(() => {
    const dataGoodPeople = async () => {
      try {
        const res = await fetchData(
          `${baseUrlApi}/kutipan-orang-pentings?populate=picture`
        );
        const datas = res.map((list: any) => list.attributes);
        setData(datas);
      } catch (error) {
        throw new Error(`Error data ${error}`);
      }
    };
    dataGoodPeople();
  }, []);

  return (
    <div
      className={`${
        isMobile ? "px-5 mt-28" : "xl:px-32 lg:px-20 md:px-8 mt-20"
      }`}
    >
      <div className="space-y-3 ">
        {/* <p className=" text-sm text-orange-500 leading-relaxed font-semibold">
          {testimoniData.subheading}
        </p> */}
        <div className="md:text-start text-center">
          <h1
            className={`${heading.className} font-bold xl:text-[32px] lg:text-[28px] text-3xl leading-snug`}
          >
            {testimoniData.heading}
          </h1>
        </div>
      </div>
      {/* data testimoni */}
      <div className=" mt-10">
        <Slider {...settings}>
          {data.map((list: any, idx: any) => (
            <div
              key={idx}
              className={`${isMobile? "h-[70vh]" : "xl:h-[50vh] h-[60vh]"} bg-blue-800   rounded-lg shadow-md w-full flex items-end relative`}
            >
              <div className="absolute top-0" style={{ zIndex: 0 }}>
                <h2
                  className={`${heading.className} font-bold text-[8rem] text-white opacity-5`}
                >
                  {list.name}
                </h2>
              </div>
              <div
                className="grid lg:grid-cols-2 grid-cols-1 gap-5 pt-20 mx-5 mt-5 items-end justify-start absolute bottom-0 "
                style={{ zIndex: 1 }}
              >
                <div className="mx-auto xl:w-[100%] lg:w-[100%] w-[75%] ">
                  <Image
                    src={`${baseUrl}${list.picture.data.attributes.url}`}
                    width={0}
                    height={0}
                    alt="image-testimoni"
                    className="w-auto"
                  />
                </div>
                <div className="space-y-5  text-white pb-5 ">
                  <h4 className="xl:text-xl lg:text-xl md:text-[18px] text-[17px] font-bold leading-relaxed">
                    {list.message}
                  </h4>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">{list.name}</p>
                    <p className="text-gray-400">{list.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GoodPeoples;
