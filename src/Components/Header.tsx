import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../Assets/icon/logo_white.svg";
import { ReactComponent as LogoGreen } from "../Assets/icon/logo_green.svg";
import { ReactComponent as MenuBlack } from "../Assets/icon/menu_black.svg";
import { ReactComponent as MenuWhite } from "../Assets/icon/menu_white.svg";
import "../Style/Header.scss";
import { useRecoilState } from "recoil";
import { colorTheme } from "../GlobalState/recoil";
const Header = ({ clickMenu, clickedSideBar }: any) => {
  const categoryWrapper = useRef<any>();
  const [language, setLanguage] = useState("KO");
  const selecLanguage = (language: string) => {
    setLanguage(language);
  };
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
  const [scrollPosition, setScrollPosition] = useState(0);
  // hover, clicked 된 category는 색깔을 입혀줘야함
  const [selectedCategory, setSelectedCategory] = useState("");
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
  const onClickedCategory = (event: any) => {
    if (event.currentTarget.className === "logo_wrapper") {
      categoryWrapper.current.childNodes.forEach((item: any) =>
        item.classList.remove("selected")
      );
      return;
    }

    const parentElement = event.currentTarget;
    const element = event.target;
    const selectedItem = event.target.id;
    const selectedCategoryIdx = Array.from(parentElement.childNodes).findIndex(
      (ele: any) => ele.classList[1] === "selected"
    );
    if (selectedCategoryIdx !== -1) {
      parentElement.childNodes[selectedCategoryIdx].classList.remove(
        "selected"
      );
    }
    element.classList.add("selected");
    setSelectedCategory(selectedItem);
  };
  const updateScroll = () => {
    setScrollPosition(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => {};
  }, []);

  return (
    <div
      className={
        headerColor === "black"
          ? "header-container-black"
          : "header-container-white"
      }
    >
      <div className="wrapper">
        <div className="logo_wrapper" onClick={onClickedCategory}>
          <Link className="category" to="/">
            {scrollPosition > 3400 ? <LogoWhite /> : <LogoWhite />}
            {/* {toggleLogo(location)} */}
          </Link>
        </div>
        <div
          ref={categoryWrapper}
          className="category_wrapper"
          onClick={onClickedCategory}
        >
          <Link id="headerOurthesis" className="category" to="/ourthesis">
            our thesis
          </Link>
          <Link id="headerPortfolio" className="category" to="/portfolio">
            portfolio
          </Link>
          <Link id="headerContents" className="category" to="/contents">
            content
          </Link>
          <Link id="headerStake" className="category" to="/stake">
            stake
          </Link>
          <Link id="headerTeam" className="category" to="/team">
            team
          </Link>
          <Link id="headerContact" className="category" to="/contact">
            contact
          </Link>
        </div>

        <div
          className={
            headerColor === "black"
              ? "language_wrapper-black"
              : "language_wrapper-white"
          }
        >
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
        <div className="menu" onClick={() => clickMenu()}>
          {toggleMenu(location)}
          {/* {scrollPosition > 3400 ? <MenuBlack /> : <MenuWhite />} */}
        </div>
      </div>
    </div>
  );
};
export default Header;
