import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as LogoGreen } from "../Assets/icon/logo_green.svg";
import { ReactComponent as LogoWhite } from "../Assets/icon/logo_white.svg";
import { ReactComponent as MenuBlack } from "../Assets/icon/menu_black.svg";
import { ReactComponent as MenuWhite } from "../Assets/icon/menu_white.svg";
import "../Style/Header.scss";

const Header = ({ dark }: any) => {
  const [language, setLanguage] = useState("KO");
  const selecLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <div className={dark ? "container_black" : "container_white"}>
      <div className="wrapper">
        <div className="logo_wrapper">
          <Link className="category" to="/">
            {dark ? <LogoWhite /> : <LogoGreen />}
          </Link>
        </div>
        <div className="category_wrapper">
          <Link className="category" to="/ourthesis">
            our thesis
          </Link>
          <Link className="category" to="/portfolio1">
            portfolio
          </Link>
          <Link className="category" to="/content1">
            content
          </Link>
          <Link className="category" to="/team1">
            team
          </Link>
          <Link className="category" to="/contact">
            contact
          </Link>
        </div>

        <div className="language_wrapper">
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
        <div className="menu">{dark ? <MenuWhite /> : <MenuBlack />}</div>
      </div>
    </div>
  );
};
export default Header;
