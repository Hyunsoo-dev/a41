import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import {ReactComponent as VisitWeb} from "../../Assets/icon/visit web.svg";
import Tags from "./Tags";
import '../../Style/PortfolioIist.scss';

type PortfolioDetailProps = {
    img: string;
    title: string;
    chain: string;
    abstract: string;
    contents: string;
    tags: string[];
    sns: string;
    web: string;
    flex: boolean;
    size: string;
    id: number;
    isGrid: boolean;
}

const PortfolioList = ({
                           img,
                           title,
                           chain,
                           abstract,
                           contents,
                           tags,
                           sns,
                           web,
                           flex,
                           size,
                           id,
                           isGrid
                       }: PortfolioDetailProps) => {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
        return () => {
            setIsLoading(true);
        }
    }, []);

    const handleNavigate = () => {
        if (pathname === "/portfolio") {
            setIsLoading(true);
            return navigate(`${id}`);
        }
        return;
    }

    return <>
        {isLoading ? null : isGrid ? (
            <div className={"container_box_column grid"}>
                <img className={"portfolio1_logo_150 grid"} src={img && img}
                     alt={`${title}logo`} onClick={handleNavigate}/>
                <div className={"text_box grid"} onClick={handleNavigate}>
                    <span className={"name"}>{title}</span>
                    <div className={"chainAndAbstractBox"}>
                        <div className={"column_box"}>
                            <span className={"chain_title"}>chain</span>
                            <span className={"chain"}>{chain}</span>
                        </div>
                        <div className={"column_box"}>
                            <span className={"abstract_title"}>abstract</span>
                            <span className={"abstract"}>{abstract}</span>
                        </div>
                    </div>
                </div>
                <div className={"contents grid"}
                     onClick={handleNavigate}>{contents.length > 50 ? contents.slice(0, 50) + "..." : contents}</div>
                <div className={"tag_box"}>{tags && tags.map((tag, idx) => <Tags tag={tag} key={idx}/>)}</div>
                <div className={"icon_box"}>
                    <a href={web} target={"_blank"} rel={"noreferrer"}>
                        <VisitWeb className={"goToWeb"}/>
                    </a>
                    <a href={sns} target={"_blank"} rel={"noreferrer"}>
                        <Twitter className={"goTwitter"}/>
                    </a>
                </div>
            </div>) : (<div className={flex ? "container_box" : "container_box_column"}>
            <img className={size === "150" ? "portfolio1_logo_150" : "portfolio1_logo_240"} src={img && img}
                 alt={`${title}logo`} onClick={handleNavigate}/>
            <div className={"text_box"}>
                <div className={pathname === "/portfolio" ? "portfolio_title_box" : "portfolio_title_column_box"}
                     onClick={handleNavigate}>
                    <span className={"name"}>{title}</span>
                    <div className={"chainAndAbstractBox"}>
                        <span className={pathname === "/portfolio" ? "chain_title" : "chain_title_shown"}>chain</span>
                        <span className={"chain"}>{chain}</span>
                    </div>
                    <div className={"chainAndAbstractBox"}>
                        <span
                            className={pathname === "/portfolio" ? "abstract_title" : "abstract_title_shown"}>abstract</span>
                        <span className={"abstract"}>{abstract}</span>
                    </div>
                </div>
                <div className={pathname === "/portfolio" ? "contents" : "portfolio2_contents"}
                     onClick={handleNavigate}>{contents}</div>
                <div className={"tag_box"}>{
                    tags &&
                    tags.map((tag, idx) => <Tags tag={tag} key={idx}/>)
                }</div>
                <div className={"icon_box"}>
                    <a href={web} target={"_blank"} rel={"noreferrer"}>
                        <VisitWeb className={"goToWeb"}/>
                    </a>
                    <a href={sns} target={"_blank"} rel={"noreferrer"}>
                        <Twitter className={"goTwitter"}/>
                    </a>
                </div>
            </div>
        </div>)}
    </>
}

export default PortfolioList;