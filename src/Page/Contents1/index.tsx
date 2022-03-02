import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../Style/Contents.scss";
const Contents1 = () => {
  return (
    <div className="contents-page-container">
      <div className="contents-page-title-wrapper">
        <div className="title">Contents</div>
        <div className="icon-box">
          <div className="icon">1</div>
          <div className="icon">1</div>
        </div>
      </div>
      <div className="contents-page-content-wrapper">
        <div className="page-content-box">
          <Link to="/content2/:1" className="item">
            Content
          </Link>
          <Link to="/content2/:2" className="item">
            Content
          </Link>
          <Link to="/content2/:3" className="item">
            Content
          </Link>
          <Link to="/content2/:4" className="item">
            Content
          </Link>
          <Link to="/content2/:5" className="item">
            Content
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Contents1;
