'use client'
import { baseUrlApi, fetchData } from '@/common/FetchData';
import React, { useEffect, useState } from 'react'

const DetailArticle = ({id}:{id:string}) => {
    const [data, setData] = useState<any>({});
    useEffect(() => {
        const fetchArticle = async () => {
          try {
            const res = await fetchData(`${baseUrlApi}/articles/${id}?populate=thubnail_article`);
            setData(res.attributes);
          } catch (error) {
            console.error('Failed to fetch article:', error);
          }
        };
    
        fetchArticle();
      }, [id]);
    
  return (
    <div>
        <h1>Hello world</h1>
    </div>
  )
}

export default DetailArticle