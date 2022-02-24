import React from "react";
import {useLocation} from "react-router-dom";
import {data} from "../Portfolio1/portfolio";
import PortfolioList from "../Portfolio1/PortfolioList";
import H0 from "../../Components/H0";
import '../../Style/Portfolio1.scss';

const Portfolio2 = () => {
    const {pathname} = useLocation();
    const id: number = Number(pathname.substring(pathname.length - 1));


    return (
        <div className={"container_bk"}>
            <div className={"content_box"}>
                <H0 title={data[id].title}/>
                <PortfolioList img={data[id].img} title={data[id].title} protocol={data[id].protocol}
                               contents={data[id].contents} tags={data[id].tags} sns={data[id].sns} web={data[id].web}
                               flex={false} size={"240"} id={id}/>
            </div>
        </div>)
};


export default Portfolio2;
