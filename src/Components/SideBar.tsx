import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../Assets/icon/a41LogoWhite.png";
import { ReactComponent as LogoGreen } from "../Assets/icon/logo_green.svg";
import { ReactComponent as CloseButton } from "../Assets/icon/sidebarCloseButton.svg";
// import { ReactComponent as LogoWhite } from "../Assets/icon/a41LogoWhite.svg";
const SideBar = ({ clickMenu, clickedSideBar }: any) => {
  const [language, setLanguage] = useState("KO");
  const selecLanguage = (language: string) => {
    setLanguage(language);
  };
  return (
    <div className={`${clickedSideBar ? "sidebar active" : "sidebar"}`}>
      <div className="header-wrapper">
        <Link className="category" to="/" onClick={clickMenu}>
          <div id="a41LogoWhite"></div>
        </Link>
        <CloseButton className="sidebar-close-Button" onClick={clickMenu} />
      </div>
      <div className="sidebar-nav-wrapper">
        {/* <div className="language">KO</div>
        <div className="language">EN</div> */}

        <div className="language_box">
          <div
            className={
              language === "KO" ? "selected_language" : "unselected_language"
            }
            onClick={() => selecLanguage("KO")}
          >
            KO
          </div>
          <div
            className={
              language === "EN" ? "selected_language" : "unselected_language"
            }
            onClick={() => selecLanguage("EN")}
          >
            EN
          </div>
        </div>
        <div className={language === "KO" ? "KO-active" : "EN-active"}></div>
      </div>

      <div className="sidebar-category-wrapper">
        <Link
          to="/ourthesis"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          Our thesis
        </Link>
        <Link
          to="/portfolio"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          Portfolio
        </Link>
        <Link
          to="/contents"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          Content
        </Link>
        <Link to="/stake" className="sidebar-item" onClick={() => clickMenu()}>
          Stake
        </Link>
        <Link to="/team" className="sidebar-item" onClick={() => clickMenu()}>
          Team
        </Link>
        <Link
          to="/contact"
          className="sidebar-item"
          onClick={() => clickMenu()}
        >
          Contact
        </Link>
        <div
          className="sidebar-item"
          onClick={() =>
            window.open(
              "https://narrow-cello-dab.notion.site/e91dcad98eea4e15833f62ee9f19ec93?v=1ba105ba44cc450783ab2216b780ab76"
            )
          }
        >
          Career
        </div>
      </div>
    </div>
  );
};

export default SideBar;
