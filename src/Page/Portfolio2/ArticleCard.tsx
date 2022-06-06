import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/ArticleCard.scss";

type ArticleCardProps = {
  img: string;
  link: string;
  title: string;
  summary: string;
  author: string;
  date: string;
};

const ArticleCard = ({ img, link, title, summary, author, date }: ArticleCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`../../content/${link}`);
  };

  return (
    <div className={"card_box"}>
      <div onClick={handleClick}>
        <img src={img} alt={"article"} />
        <div className={"card_title"}>{title}</div>
        <div className={"card_summary"}>{summary}</div>
        <div className={"author_box"}>
          <span>Author</span>
          <span>{author}</span>
          <span>&#183;</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
