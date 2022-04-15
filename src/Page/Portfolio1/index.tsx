import React, {useEffect, useState} from "react";
import "../../Style/Portfolio1.scss";
import PortfolioList from "./PortfolioList";
import H0 from "../../Components/H0";
import {getAllPortfolioInfo} from "../../Contentful/Contentful";
import {useRecoilState} from "recoil";
import {colorTheme} from "../../GlobalState/recoil";
import {ReactComponent as Grid} from "../../Assets/icon/grid view.svg";
import {ReactComponent as List} from "../../Assets/icon/list view.svg";

const Portfolio1 = () => {
    const [portfolio, setPortfolio] = useState<any>([]);
    const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
    const [isGrid, setIsGrid] = useState(false);

    useEffect(() => {
        setHeaderColor("black");
    });

    useEffect(() => {
        const ac = new AbortController();
        getAllPortfolioInfo().then((r) =>
            setPortfolio(
                r.items.sort((a, b) => {
                    return a.fields.index - b.fields.index;
                })
            )
        );
        return () => ac.abort();
    }, []);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "auto"});
        return () => {
        };
    }, []);

    const handleClick = (e: any) => {
        e.preventDefault();
        setIsGrid(prevState => !prevState);
    }

    return (
        <div className={"container_bk"}>
            <div className={"content_box"}>
                <div className={"portfolio1_title"}>
                    <H0 title={"portfolio"}/>
                    {isGrid ? <List className={"view_icon"} onClick={handleClick}/> : <Grid className={"view_icon"} onClick={handleClick}/>}
                </div>
                <div className={isGrid ?  "portfolio1_grid_container" :  "portfolio_content_box"}>
                    {portfolio.map((data: any) => {
                        return (
                            <PortfolioList
                                img={
                                    data.fields.image === undefined
                                        ? ""
                                        : data.fields.image.fields.file.url
                                }
                                title={data.fields.name}
                                chain={data.fields.chain}
                                abstract={data.fields.abstract}
                                contents={
                                    data.fields.introduction === undefined
                                        ? ""
                                        : data.fields.introduction.content[0].content[0].value
                                }
                                tags={null}
                                sns={data.fields.sns === undefined ? "" : data.fields.sns.twitter}
                                web={data.fields.webUrl}
                                flex={true}
                                size={"150"}
                                id={data.sys.id}
                                key={data.sys.id}
                                isGrid={isGrid}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio1;
