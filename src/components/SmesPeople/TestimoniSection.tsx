import { fetchDataTestimoniSmesPeople } from '@/common/FetchData'
import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import { testimoniSmesPeople } from '@/libs/SmesPeopleData'
import React, { useEffect, useState } from 'react'

const TestimoniSection = () => {
    const {isMobile, isTablet} = Mobile()
    const currentPage = isMobile? 1 : isTablet ? 2 : 3
    const [currentIndex, setCurrentIndex] = useState(0);
    const {data} = fetchDataTestimoniSmesPeople()
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + currentPage >= data.length ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 5 seconds
  
      return () => clearInterval(interval); // Clean up the interval on unmount
    }, [currentIndex, data.length]);
    
  return (
    <div className='mt-24'>
        <div className='text-center max-w-2xl mx-auto'>
          <h1 className={`${heading.className} font-semibold lg:text-3xl text-2xl leading-snug`}>{testimoniSmesPeople.heading}</h1>
        </div>
        {/* list testimoni */}
        <div className='flex gap-5 xl:px-32 md:px-8 p-5 lg:px-20 mt-10'>
          {
              data.slice(currentIndex, currentPage + currentIndex).map((list:any, idx:any) => (
                <div key={idx} className='bg-white w-full rounded-xl'>
                    <div className='bg-blue-500 rounded-tl-xl w-1/2 rounded-br-xl p-3'>
                      <div className='space-y-3 text-white'>
                        <p className='text-lg font-semibold'>{list.name}</p>
                        <p className='text-gray-300'>{list.title}</p>
                      </div>
                    </div>
                      <div className='mt-5 p-3'>
                        <p className='text-lg font-semibold'>{list.message}</p>
                      </div>
                </div>
              ))
          }
        </div>
    </div>
  )
}

export default TestimoniSection