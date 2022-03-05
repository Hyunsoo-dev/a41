import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../Assets/icon/logo_white.svg";
import { ReactComponent as LogoGreen } from "../Assets/icon/logo_green.svg";
import { ReactComponent as MenuBlack } from "../Assets/icon/menu_black.svg";
import { ReactComponent as MenuWhite } from "../Assets/icon/menu_white.svg";
import { Contents1 } from "../Page/index";
import "../Style/Header.scss";

const Header = () => {
  const [language, setLanguage] = useState("KO");
  const selecLanguage = (language: string) => {
    setLanguage(language);
  };

  const [headerTheme, setHeaderTheme] = useState("black");
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  console.log(scrollPosition);
  return (
    <div
      className={
        scrollPosition > 3400
          ? "header-container-white"
          : "header-container-black"
      }
    >
      <div className="wrapper">
        <div className="logo_wrapper">
          <Link className="category" to="/">
            {scrollPosition > 3400 ? <LogoWhite /> : <LogoGreen />}
          </Link>
        </div>
        <div className="category_wrapper">
          <Link className="category" to="/ourthesis">
            our thesis
          </Link>
          <Link className="category" to="/portfolio">
            portfolio
          </Link>
          <Link className="category" to="/content1">
            content1
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
        <div className="menu">
          {scrollPosition > 3400 ? <MenuBlack /> : <MenuWhite />}
        </div>
      </div>
    </div>
  );
};
export default Header;
