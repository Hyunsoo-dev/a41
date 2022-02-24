import React from "react";
import "../../Style/Portfolio1.scss";
import {data} from './portfolio';
import PortfolioList from "./PortfolioList";
import H0 from "../../Components/H0";

const Portfolio1 = () => {

    return <div className={"container_bk"}>
        <div className={"content_box"}>
            <div className={"portfolio1_title"}>
                <H0 title={"portfolio"} />
            </div>
            {data.map((data) => {
                return <PortfolioList img={data.img} title={data.title} protocol={data.protocol}
                                      contents={data.contents} tags={data.tags} sns={data.sns} web={data.web} flex={true} size={"150"} id={data.id} key={data.id}/>
            })}
        </div>
    </div>;
};
export default Portfolio1;
