import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../Assets/icon/logo_white.svg";
import { ReactComponent as LogoGreen } from "../Assets/icon/logo_green.svg";
import { ReactComponent as MenuBlack } from "../Assets/icon/menu_black.svg";
import { ReactComponent as MenuWhite } from "../Assets/icon/menu_white.svg";
import "../Style/Header.scss";
import { useRecoilState } from "recoil";
import { colorTheme } from "../GlobalState/recoil";
const Header = ({ clickMenu }: any) => {
  const [language, setLanguage] = useState("KO");
  const selecLanguage = (language: string) => {
    setLanguage(language);
  };
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
  const [scrollPosition, setScrollPosition] = useState(0);

  /*
    locations.pathname === "/content1" || "/content/number" 라면 
    header의 className을 header-container-white로 바꿔준다
    또한 스크롤에 따라 header의 bgColor가 바뀌는 것은 main page에서만 적용되어야 하기 때문에 
    locations.pathname === "/"인 경우만 해당 header를 넣어준다.
  */

  const location = useLocation();
  const toggleMenu = (locations: any) => {
    const parsedCurrentPathname = locations.pathname.slice(0, 8);
    switch (parsedCurrentPathname) {
      case "/":
        return scrollPosition > 3400 ? <MenuBlack /> : <MenuWhite />;
      default:
        console.log("!!");
        return headerColor === "black" ? <MenuWhite /> : <MenuBlack />;
    }
  };

  const updateScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {};
  }, []);

  return (
    <div className={headerColor === "black" ? "header-container-black" : "header-container-white"}>
      <div className="wrapper">
        <div className="logo_wrapper">
          <Link className="category" to="/">
            {scrollPosition > 3400 ? <LogoWhite /> : <LogoWhite />}
            {/* {toggleLogo(location)} */}
          </Link>
        </div>
        <div className="category_wrapper">
          <Link className="category" to="/ourthesis">
            our thesis
          </Link>
          <Link className="category" to="/portfolio">
            portfolio
          </Link>
          <Link className="category" to="/contents">
            content
          </Link>
          <Link className="category" to="/stake">
            stake
          </Link>
          <Link className="category" to="/team">
            team
          </Link>
          <Link className="category" to="/contact">
            contact
          </Link>
        </div>

        <div className="language_wrapper">
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
        <div className="menu" onClick={() => clickMenu()}>
          {toggleMenu(location)}
          {/* {scrollPosition > 3400 ? <MenuBlack /> : <MenuWhite />} */}
        </div>
      </div>
    </div>
  );
};
export default Header;
