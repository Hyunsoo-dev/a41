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
          <div className={language === "KO" ? "selected_language" : "unselected_language"} onClick={() => selecLanguage("KO")}>
            KO
          </div>
          <div className={language === "EN" ? "selected_language" : "unselected_language"} onClick={() => selecLanguage("EN")}>
            EN
          </div>
        </div>
        <div className={language === "KO" ? "KO-active" : "EN-active"}></div>
      </div>

      <div className="sidebar-category-wrapper">
        <Link to="/ourThesis" className="sidebar-item" onClick={() => clickMenu()}>
          our thesis
        </Link>
        <Link to="/portfolio" className="sidebar-item" onClick={() => clickMenu()}>
          portfolio
        </Link>
        <Link to="/contents" className="sidebar-item" onClick={() => clickMenu()}>
          content
        </Link>
        <Link to="/team" className="sidebar-item" onClick={() => clickMenu()}>
          team
        </Link>
        <Link to="/contact" className="sidebar-item" onClick={() => clickMenu()}>
          contact
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
