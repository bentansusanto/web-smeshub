import React, { useEffect } from 'react'
import Aos from 'aos';
export const AOSAnimation = () => {
  useEffect(() => {
    Aos.init();
  },[])
}
