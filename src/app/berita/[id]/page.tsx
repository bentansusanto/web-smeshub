import { baseUrlApi, fetchData } from "@/common/FetchData";
import DetailArticle from "@/components/Articles/DetailArticle";
import Layouts from "@/layouts/Layouts";
import React from "react";

export async function generateStaticParams() {
  const response = await fetch(`${baseUrlApi}/articles?populate=thubnail_article`);
  const datas = await response.json();

  console.log(datas.data)
  return datas.data.map((list: any) => ({
    id: list.id.toString(),
  }));
}

const Project = async ({ params }: { params: { id: string } }) => {
  return (
    <Layouts>
      <h1>Hello</h1>
      <DetailArticle id={params.id} />
    </Layouts>
  );
};

export default Project;
