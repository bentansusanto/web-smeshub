'use client'
import React, { useEffect, useRef } from "react";

export const AnimateInfiniteScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroller = scrollRef.current;
    function addAnimation() {
      if (!scroller) return;
      const innerScroller = scroller.querySelector(".scroller_inner");
      if (!innerScroller) return;
      if (innerScroller.getAttribute("data-cloned") === "true") return;
      const innerScrollerChildren = Array.from(innerScroller.children);
      innerScrollerChildren.forEach((item) => {
        const extendLogos = item.cloneNode(true) as HTMLElement;
        innerScroller.appendChild(extendLogos);
      });
      innerScroller.setAttribute("data-cloned", "true");
    }
    addAnimation();
  }, []);
  return {scrollRef};
};
