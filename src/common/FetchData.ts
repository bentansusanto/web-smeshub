
// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

export const baseUrl = "https://admin.smeshub.co.id";
export const baseUrlApi = "https://admin.smeshub.co.id/api";

// logic fetch Data
export const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// fetch data logo community&company partners
export const fetchDataCommunityCompany = () => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const fetchDatas = async() => {
      try {
        const res = await fetchData(`${baseUrlApi}/community-company-partners?populate=logo&pagination[page]=1&pagination[pageSize]=53`)
        const datas = res.map((list:any) => list.attributes.logo.data.attributes)
        setData(datas)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    fetchDatas()
  },[])
  return {data}
}

// fetch data logo client smeshub
export const fecthDataClientSmeshub = () => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const fetchDatas = async() => {
      try {
        const res = await fetchData(`${baseUrlApi}/client-smeshubs?populate=logo_client`)
        const datas = res.map((list:any) => list.attributes.logo_client.data.attributes)
        setData(datas)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    fetchDatas()
  },[])
  return {data}
}

// fetch data logo media liputan
export const fetchMediaLiputan = () => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const fetchDatas = async() => {
      try {
        const res = await fetchData(`${baseUrlApi}/media-liputans?populate=logo_media&pagination[page]=1&pagination[pageSize]=50`)
        const datas = res.map((list:any) => list.attributes.logo_media.data.attributes)
        setData(datas)
      } catch (error) {
        throw new Error(`${error}`)
      }
    }
    fetchDatas()
  },[])
  return {data}
}

// logic get data content heroSection in homepage
// export const fetchDataHeroHome = () => {
//   const [data, setData] = useState<any>({});
//   const [images, setImages] = useState<any>({});

//   useEffect(() => {
//     const getDataHeroHome = async () => {
//       try {
//         const res = await fetchData(
//           `${baseUrlApi}/section1-homepage?populate=bg_section1_homepage`
//         );
//         console.log(res.attributes);
//         setData(res.attributes)
//         setImages(res.attributes.bg_section1_homepage.data.attributes)
//       } catch (error) {
//         throw new Error(`${error}`);
//       }
//     };
//     getDataHeroHome();
//   }, []);
//   return { data, images };
// };

// logic get data content cta home
// export const fetchDataCtaHome = () => {
//   const [dataHome, setDataHome] = useState<any>({});
//   const [imagesHome, setImagesHome] = useState<any>({});
//   useEffect(() => {
//     const getDataCTAHome = async () => {
//       try {
//         const res = await fetchData(
//           `${baseUrlApi}/cta-homepage?populate=bg_cta_home`
//         );
//         console.log(res.attributes);
//         setDataHome(res.attributes);
//         setImagesHome(res.attributes.bg_cta_home.data.attributes);
//       } catch (error) {
//         throw new Error(`${error}`);
//       }
//     };
//     getDataCTAHome();
//   }, []);
//   return { dataHome, imagesHome };
// };

// logic get data content cta smes xperience
// export const fetchDataCtaSmesXperience = () => {
//   const [dataSmesXpeerience, setDataSmesXpeerience] = useState<any>({});
//   const [imagesSmesXpeerience, setImagesSmesXpeerience] = useState<any>({});
//   useEffect(() => {
//     const getDataCTAXperience = async () => {
//       try {
//         const res = await fetchData(
//           `${baseUrlApi}/cta-smes-xperience?populate=bg_cta_smes_xperience`
//         );
//         console.log(res.attributes);
//         setDataSmesXpeerience(res.attributes);
//         setImagesSmesXpeerience(
//           res.attributes.bg_cta_smes_xperience.data.attributes
//         );
//       } catch (error) {
//         throw new Error(`${error}`);
//       }
//     };
//     getDataCTAXperience();
//   }, []);
//   return { dataSmesXpeerience, imagesSmesXpeerience };
// };

// logic get data content cta smes people
// export const fetchDataCtaSmesPeople = () => {
//   const [dataSmesPeople, setDataSmesPeople] = useState<any>({});
//   const [imagesSmesPeople, setImagesSmesPeople] = useState<any>({});
//   useEffect(() => {
//     const getDataCTAPeople = async () => {
//       try {
//         const res = await fetchData(
//           `${baseUrlApi}/cta-smes-people?populate=bg_cta_smes_people`
//         );
//         console.log(res.attributes);
//         setDataSmesPeople(res.attributes);
//         setImagesSmesPeople(res.attributes.bg_cta_smes_people.data.attributes);
//       } catch (error) {
//         throw new Error(`${error}`);
//       }
//     };
//     getDataCTAPeople();
//   }, []);
//   return { dataSmesPeople, imagesSmesPeople };
// };

// export const fetchDataHeroAbout = () => {
  
// }