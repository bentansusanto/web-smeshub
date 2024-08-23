"use client";
import React from "react";
import HeroSmesExperience from "./HeroSmesExperience";
import KompetisiBisnis from "./KompetisiBisnis";
import PendampinganUMKM from "./PendampinganUMKM";
import PelatihanUMKM from "./PelatihanUMKM";
import ProgramSmeshub from "./ProgramSmeshub";

const SmesExperiencePage = () => {
  return (
    <div>
      <HeroSmesExperience />
      <ProgramSmeshub/>
      <KompetisiBisnis/>
      <PendampinganUMKM/>
      <PelatihanUMKM/>
    </div>
  );
};

export default SmesExperiencePage;
