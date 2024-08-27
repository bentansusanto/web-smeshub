import { useState } from "react";

export const baseUrl = 'https://admin.smeshub.co.id'
export const baseUrlApi = 'https://admin.smeshub.co.id/api'


export const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json()
      return data.data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };


