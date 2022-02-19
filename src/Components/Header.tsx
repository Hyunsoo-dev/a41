import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoGreen } from "../Assets/icon/logo_green.svg";
import "../Style/Header.scss";

const Header = () => {
  const [language, setLanguage] = useState("KO");
  const selecLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <div className="container_black">
      <div className="wrapper_black">
        <div className="logo_wrapper">
          <Link className="category" to="/main">
            <LogoGreen />
          </Link>
        </div>
        <div className="category_wrapper">
          <Link className="category" to="/ourthesis">
            our thesis
          </Link>
          <Link className="category" to="/portfolio">
            portfolio
          </Link>
          <Link className="category" to="/content">
            content
          </Link>
          <Link className="category" to="/team">
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
      </div>
    </div>
  );
};
export default Header;
