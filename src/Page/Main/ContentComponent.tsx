import React from "react";
import { ReactComponent as ViewMoreBtn } from "../../Assets/icon/viewmorebtn.svg";
import { Link } from "react-router-dom";

const ContentComponent = ({ entryId, thumbnail, title, subtitle, author, date }: any) => {
  return (
    <Link to={`/content/${entryId}`}>
      <div className="content-container">
        <img className="content-thumbnail" src={thumbnail} />
        <div className="content-box">
          <div className="content-title">{title}</div>
          <div className="content-subtitle">{subtitle}</div>
          <div className="content-author-date-box">
            <div className="content-author">Author {author}</div>
            <div className="content-date">{date}</div>
          </div>
        </div>
        {/* <ViewMoreBtn className={"plus-btn"} /> */}
      </div>
    </Link>
  );
};
export default ContentComponent;
