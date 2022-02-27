import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import Tags from "./Tags";
import '../../Style/PortfolioIist.scss';

type PortfolioDetailProps = {
    img: string;
    title: string;
    protocol: string;
    contents: string;
    tags: string[];
    sns: string;
    web: string;
    flex: boolean;
    size: string;
    id: number;
}

const PortfolioList= ({img, title, protocol, contents, tags, sns, web, flex, size, id}: PortfolioDetailProps) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const handleClick = (url: string) => {
        return window.open(
            url,
            '_blank'
        );
    }

    return <div className={flex ? "container_box" : "container_box_column"} onClick={() => {
        if (pathname === "/portfolio") {
            return navigate(`${id}`);
        } return;
        }
    }>
        <img className={size === "150" ? "portfolio1_logo_150" : "portfolio1_logo_240"} src={img} alt={`${title}logo`} />
        <div className={"text_box"}>
            <div className={"portfolio_title_box"}>
                <span className={"name"}>{title}</span>
                <span className={"protocol"}>{protocol}</span>
            </div>
            <div className={"contents"}>{contents}</div>
            <div className={"tag_box"}>{
                tags.map((tag,idx) => <Tags tag={tag} key={idx} />)
            }</div>
            <a href={sns} target={"_blank"} rel={"noreferrer"}>
                <Twitter className={"goTwitter"}/>
            </a>
            <div className={"goToWeb"} onClick={() => handleClick(web)}>visit web</div>
        </div>
    </div>
}

export default PortfolioList;