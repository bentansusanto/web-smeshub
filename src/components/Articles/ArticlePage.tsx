'use client'
import { baseUrl, baseUrlApi, fetchData } from '@/common/FetchData'
import { heading } from '@/common/FontFamily'
import { Mobile } from '@/common/MediaQuery'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ListArticles from './ListArticles'

const ArticlePage = () => {
    const {isMobile} = Mobile()
    const [data, setData] = useState<any>([])
    useEffect(() => {
        const getAllArticles = async() => {
            try {
                const res = await fetchData(`${baseUrlApi}/articles?populate=thubnail_article`)
                const datas = res.map((list: any) => list.attributes)
                setData(datas)
            } catch (error) {
                throw new Error(`${error}`)
            }
        }
        getAllArticles()
    },[])

    const latestArticle = data.filter((article: any) => 
        new Date(article.createdAt).getTime() === Math.max(...data.map((a: any) => new Date(a.createdAt).getTime()))
    )[0];

  return (
    <div className={`${isMobile? "px-5 mt-20" : "xl:px-32 lg:px-20 md:px-8 mt-20"}`}>
        {/* Latest Articles */}
        <div className='flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center gap-5 lg:gap-0'>
            <div className='space-y-3'>
                <h1 className={`${heading.className} font-semibold lg:text-4xl text-xl capitalize`}>{latestArticle?.name_article}</h1>
                    <p className='text-sm text-gray-500 capitalize font-semibold'>{latestArticle?.category}</p>
            </div>
            <div className='max-w-2xl'>
                <Image src={`${baseUrl}${latestArticle?.thubnail_article?.data.attributes.url}`} width={0} height={0} alt='bg-article' className='w-auto rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl'/>
            </div>
        </div>
        {/* List Articles */}
        <ListArticles />
    </div>
  )
}

export default ArticlePage