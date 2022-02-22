import React from "react";
import Twitter from "../../Assets/twitter.svg";
import Tags from "./Tags";
import '../../Style/PortfolioDetail.scss';

type PortfolioDetailProps = {
    img: string;
    title: string;
    protocol: string;
    contents: string;
    tags: string[];
    sns: string;
    web: string;
}

const PortfolioDetail = ({img, title, protocol, contents, tags, sns, web}: PortfolioDetailProps) => {

    const handleClick = (url: string) => {
        return window.open(
            url,
            '_blank'
        );
    }

    return <div className={"container_box"}>
        <img className={"portfolio1_logo"} src={img} alt={`logo${title}`} />
        <div className={"text_box"}>
            <div className={"portfolio_title_box"}>
                <span className={"name"}>{title}</span>
                <span className={"protocol"}>{protocol}</span>
            </div>
            <div className={"contents"}>{contents}</div>
            <div className={"tag_box"}>{
                tags.map((tag,idx) => <Tags tag={tag} key={idx} />)
            }</div>
            <a href={sns} target={"_blank"}>
                <img src={Twitter} alt={"snsButton"} className={"goTwitter"}/>
            </a>
            <div className={"goToWeb"} onClick={() => handleClick(web)}>visit web</div>
        </div>
    </div>
}

export default PortfolioDetail;