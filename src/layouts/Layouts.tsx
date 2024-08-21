"use client";
import { body } from "@/common/FontFamily";
import Footer from "@/components/HeadFoot/Footer";
import Header from "@/components/HeadFoot/Header";
import Maintentance from "@/components/Maintentance/Maintentance";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Layouts: React.FC<Props> = ({ children }) => {
  const isMaintenance = false;

  return (
    <div className={`${body.className}`}>
      <Header />
      {isMaintenance ? (
        <>
          <Maintentance />
        </>
      ) : (
        <main>{children}</main>
      )}
      <Footer/>
    </div>
  );
};

export default Layouts;
