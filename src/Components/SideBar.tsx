import React from "react";
import { Link } from "react-router-dom";
const SideBar = ({ clickMenu, clickedSideBar }: any) => {
  return (
    <div className={`${clickedSideBar ? "sidebar active" : "sidebar"}`}>
      <div className="sidebar-nav-wrapper">
        <div className="language">KO</div>
        <div className="language">EN</div>
      </div>
      <div className="sidebar-category-wrapper">
        <Link
          to="/ourThesis"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          our thesis
        </Link>
        <Link
          to="/portfolio"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          portfolio
        </Link>
        <Link
          to="/contents"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          content
        </Link>
        <Link to="/team" className="sidebar-item" onClick={() => clickMenu()}>
          team
        </Link>
        <Link
          to="/contact"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
