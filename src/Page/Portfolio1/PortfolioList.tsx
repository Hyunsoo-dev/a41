import React, {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
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
                           id
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


    const handleClick = (url: string) => {
        return window.open(
            url,
            '_blank'
        );
    }
    const handleNavigate = () => {
        if (pathname === "/portfolio") {
            setIsLoading(true);
            return navigate(`${id}`);
        }
        return;
    }

    return <>
        {isLoading ? null : (<div className={flex ? "container_box" : "container_box_column"} onClick={handleNavigate}>
                <img className={size === "150" ? "portfolio1_logo_150" : "portfolio1_logo_240"} src={img && img} alt={`${title}logo`}/>
                <div className={"text_box"}>
                    <div className={pathname === "/portfolio" ? "portfolio_title_box" : "portfolio_title_column_box"}>
                        <span className={"name"}>{title}</span>
                        <div className={"chainAndAbstractBox"}>
                            <span className={pathname === "/portfolio" ? "chain_title" : "chain_title_shown"}>chain</span>
                            <span className={"chain"}>{chain}</span>
                        </div>
                        <div className={"chainAndAbstractBox"}>
                            <span className={pathname === "/portfolio" ? "abstract_title" : "abstract_title_shown"}>abstract</span>
                            <span className={"abstract"}>{abstract}</span>
                        </div>
                    </div>
                    <div className={pathname === "/portfolio" ? "contents" : "portfolio2_contents"}>{contents}</div>
                    <div className={"tag_box"}>{
                        tags &&
                        tags.map((tag, idx) => <Tags tag={tag} key={idx}/>)
                    }</div>
                    <a href={sns} target={"_blank"} rel={"noreferrer"}>
                        <Twitter className={"goTwitter"}/>
                    </a>
                    <div className={pathname === "/portfolio" ? "goToWeb" : "portfolio2_goToWeb"}
                         onClick={() => handleClick(web)}>visit web
                    </div>
                </div>
            </div>)}
        </>
}

export default PortfolioList;