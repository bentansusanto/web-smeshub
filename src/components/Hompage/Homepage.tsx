"use client";
import React from "react";
import HeroSection from "./Section/HeroSection";
import PersentaseSection from "./Section/PersentaseSection";
// import EcosystemSection from './Section/EcosystemSection'
import MediaLiputSection from "./Section/MediaLiputSection";
import ProgramSmeshub from "../SmesXperience/ProgramSmeshub";
import GoodPeoples from "./Section/GoodPeoples";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <PersentaseSection />
      <GoodPeoples />
      {/* <ProgramSmeshub /> */}
      {/* <EcosystemSection/> */}
      <MediaLiputSection />
    </>
  );
};

export default Homepage;
