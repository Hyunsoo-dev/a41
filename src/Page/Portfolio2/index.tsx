import React from "react";
import {useLocation} from "react-router-dom";
import {data} from "../Portfolio1/portfolio";
import PortfolioList from "../Portfolio1/PortfolioList";
import H0 from "../../Components/H0";
import '../../Style/Portfolio1.scss';
import '../../Style/Portfolio2.scss';
import ArticleCard from "./ArticleCard";

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
                <div className={"article_title_box"}>
                <div className={"article_title"}>article</div>
                <span className={"article_count"}>{data[id].article.length}</span>
                </div>
                <div className={"grid_box"}>
                {data[id].article.map(e => {
                    return <ArticleCard title={e.title} img={e.img} link={e.link} summary={e.summary} author={e.author}
                                        date={e.date} key={e.title}/>
                })}
                </div>
            </div>
        </div>)
};


export default Portfolio2;
