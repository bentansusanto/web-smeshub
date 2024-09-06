"use client";
import React from "react";
import HeroSection from "./Section/HeroSection";
import PersentaseSection from "./Section/PersentaseSection";
// import EcosystemSection from './Section/EcosystemSection'
import MediaLiputSection from "./Section/MediaLiputSection";
import GoodPeoples from "./Section/GoodPeoples";
import ClientsSmeshub from "./Section/ClientsSmeshub";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <PersentaseSection />
      <ClientsSmeshub/>
      <GoodPeoples />
      {/* <ProgramSmeshub /> */}
      {/* <EcosystemSection/> */}
      <MediaLiputSection />
    </>
  );
};

export default Homepage;
