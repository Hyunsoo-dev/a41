import React from "react";
import "../../Style/Portfolio1.scss";
import { data } from './portfolio';
import PortfolioDetail from "./PortfolioDetail";

const Portfolio1 = () => {
  return <div className={"container_bk"}>
    <div className={"content_box"}>
      <div className={"portfolio1_title"}>portfolio<span className={"dot"}>.</span></div>
      {data.map((data, idx) => {
      return <PortfolioDetail img={data.img} title={data.title} protocol={data.protocol} contents={data.contents} tags={data.tags} sns={data.sns} web={data.web} />
      })}
    </div>
  </div>;
};
export default Portfolio1;
