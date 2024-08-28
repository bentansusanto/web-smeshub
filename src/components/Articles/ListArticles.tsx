import { baseUrl, baseUrlApi, fetchData } from '@/common/FetchData'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const ListArticles = () => {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        const getAllArticles = async() => {
            try {
                const res = await fetchData(`${baseUrlApi}/articles?populate=thubnail_article`)
                const datas = res.map((list: any) => list.attributes)
                const id = res.map((list: any) => list.id)
                console.log(id)
                setData(datas)
            } catch (error) {
                throw new Error(`${error}`)
            }
        }
        getAllArticles()
    },[])
    const router = useRouter()
    const detailArticle = (id: number) => {
        router.push(`/berita/${id}`)
    }
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5 lg:gap-5 lg:mt-40 mt-20'>
        {
            data.map((list:any, idx:any) => (
                <div key={idx} className='space-y-3' onClick={() => detailArticle(list.id)}>
                    
                    <div className='relative'>
                        <Image src={`${baseUrl}${list.thubnail_article.data.attributes.url}`} width={0} height={0} alt='bg-article' className='w-auto rounded-lg'/>
                        <div className='bg-orange-500 px-6 py-3 rounded-lg absolute bottom-3 left-3'>
                            <p className='text-white font-semibold text-sm capitalize'>{list.category}</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='font-semibold text-lg'>{list.name_article}</h2>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ListArticles