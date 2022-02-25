import React from "react";
import '../../Style/ArticleCard.scss'


type ArticleCardProps = {
    img: string;
    link: string;
    title: string;
    summary: string;
    author: string;
    date: string;
}

const ArticleCard = ({img, link, title, summary, author, date}: ArticleCardProps) => {
    return <div className={"card_box"}>
        <a href={link}>
            <img src={img} alt={"article"}/>
            <div className={"card_title"}>{title}</div>
            <div className={"card_summary"}>{summary}</div>
            <div className={"author_box"}>
                <span>Author</span>
                <span>{author}</span>
                <span>.</span>
                <span>{date}</span>
            </div>
        </a>
    </div>

}

export default ArticleCard;