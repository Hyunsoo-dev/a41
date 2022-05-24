import React, { useState, useEffect, useRef } from "react";
import "../../Style/Main.scss";
import ContentComponent from "./ContentComponent";
import TeamComponent from "./TeamComponent";
import column1_row1 from "../../Assets/image/mainPage/column1_row1.png";
import column2_row1 from "../../Assets/image/mainPage/column2_row1.png";
import AlexLogo from "../../Assets/image/mainPage/alexLogo.png";
import ApricotLogo from "../../Assets/image/mainPage/apricotLogo.png";
import ArkadikoLogo from "../../Assets/image/mainPage/arkadikoLogo.png";
import BlockSurveLogo from "../../Assets/image/mainPage/blockSurveLogo.png";
import BribeLogo from "../../Assets/image/mainPage/bribeLogo.png";
import { ReactComponent as GreenDot } from "../../Assets/image/mainPage/greenDot.svg";
import { ReactComponent as SnsLogo } from "../../Assets/image/mainPage/sns.svg";
import RightArrow from "../../Assets/image/mainPage/rightArrowIcon.png";
import { ReactComponent as ViewMoreIcon } from "../../Assets/image/mainPage/viewMoreIcon.svg";
import ViewMoreIconMobile from "../../Assets/image/mainPage/viewMoreIconMobile.png";
import team_thumbnail from "../../Assets/image/mainPage/team_thumbnail.png";
import H0 from "../../Components/H0";
import { getAllMemberInfo, getMemberInfo } from "../../Contentful/Contentful";
import ViewMoreButton from "../../Components/ViewMoreButton";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
import { Link } from "react-router-dom";
import { getContents } from "../../Contentful/Contentful";

const Main = () => {
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [allMemberInfo, setAllMemberInfo] = useState<any[]>([]);

  const mainTitle1 = useRef(null);
  const mainTitle2 = useRef(null);
  const updateScrollPosition = () => {
    // if (window.pageYOffset > 4000 && headerColor !== "white") {
    if (window.pageYOffset > 7500 && headerColor !== "white") {
      setHeaderColor("white");
      setScrollPosition(window.scrollY);
      // } else if (window.pageYOffset <= 4000 && headerColor !== "black") {
    } else if (window.pageYOffset <= 7500 && headerColor !== "black") {
      setHeaderColor("black");
      setScrollPosition(window.scrollY);
    } else {
      setScrollPosition(window.scrollY);
    }

    // console.log(
    //   "window.pageYOffset :",
    //   window.pageYOffset,
    //   "headerColor :",
    //   headerColor
    // );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);
  useEffect(() => {
    setHeaderColor("black");
    getAllMemberInfo().then((res) => {
      // console.log("res :", res);
      res.items.sort((itemA, itemB) => {
        return itemA.fields.index - itemB.fields.index;
      });
      setAllMemberInfo([...allMemberInfo, ...res.items.slice(0, 4)]);
    });
    getContents().then((res) => {
      console.log();
    });
    return () => {};
  }, []);
  // console.log("allMemberInfo :", allMemberInfo);
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });
  const controlMainTitle = (element: any, scrollPosition: number): any => {
    let className = "";
    let suffix = "";
    if (element.current !== null) {
      if (element.current.className.slice(0, 6) === "title1") {
        suffix = "n";
      } else if (element.current.className.slice(0, 6) === "title2") {
        suffix = "p";
      }
      // if (scrollPosition > 100 && scrollPosition <= 400) {
      //   className = `main-title-action-${suffix}1`;
      // } else if (scrollPosition > 400 && scrollPosition <= 600) {
      //   className = `main-title-action-${suffix}2`;
      // } else if (scrollPosition > 600 && scrollPosition <= 800) {
      //   className = `main-title-action-${suffix}3`;
      // } else if (scrollPosition > 800 && scrollPosition <= 1000) {
      //   className = `main-title-action-${suffix}4`;
      // }
      if (scrollPosition > 200 && scrollPosition <= 500) {
        className = `main-title-action-${suffix}1`;
      } else if (scrollPosition > 500 && scrollPosition <= 1000) {
        className = `main-title-action-${suffix}2`;
      } else if (scrollPosition > 1000 && scrollPosition <= 1700) {
        className = `main-title-action-${suffix}3`;
      } else if (scrollPosition > 1700 && scrollPosition <= 2000) {
        className = `main-title-action-${suffix}4`;
      }
    }
    return className;
  };

  const controlVentures = (scrollPosition: number): any => {
    let className = "";
    // if (scrollPosition > 1000 && scrollPosition <= 1200) {
    //   className = "main-ventures-action1";
    // } else if (scrollPosition > 1200 && scrollPosition <= 1700) {
    //   className = "main-ventures-action2";
    // } else if (scrollPosition > 1700 && scrollPosition <= 2000) {
    //   className = "main-ventures-action3";
    // }
    if (scrollPosition > 2000 && scrollPosition <= 2300) {
      className = "main-ventures-action1";
    } else if (scrollPosition > 2300 && scrollPosition <= 1700) {
      className = "main-ventures-action2";
    } else if (scrollPosition > 3700 && scrollPosition <= 4000) {
      className = "main-ventures-action3";
    }
    return className;
  };
  const controlOurThesis = (scrollPosition: number): any => {
    let className = "";
    // if (scrollPosition > 2000 && scrollPosition <= 2200) {
    //   className = "main-our-thesis-action1";
    // } else if (scrollPosition > 2200 && scrollPosition <= 2700) {
    //   className = "main-our-thesis-action2";
    // } else if (scrollPosition > 2700 && scrollPosition <= 3000) {
    //   className = "main-our-thesis-action3";
    // }
    if (scrollPosition > 4000 && scrollPosition <= 4300) {
      className = "main-our-thesis-action1";
    } else if (scrollPosition > 4300 && scrollPosition <= 5700) {
      className = "main-our-thesis-action2";
    } else if (scrollPosition > 5700 && scrollPosition <= 6500) {
      className = "main-our-thesis-action3";
    }
    return className;
  };

  console.log("scrollPosition :", scrollPosition);
  return (
    <>
      <section className="sticky-container">
        <section className="sticky">
          <section
            id={
              // scrollPosition > 1000 && scrollPosition <= 4000
              scrollPosition > 2000 && scrollPosition <= 7400 ? "opacity-bg" : ""
            }
            className="slide-container"
          >
            <article
              id="main-vision-visible"
              className={`slide ${
                // scrollPosition < 1000 ? "visible" : "hidden"
                scrollPosition < 2000 ? "visible" : "hidden"
              }`}
            >
              <section className="main-vision">
                <div className="main-vision-wrapper">
                  <article ref={mainTitle1} className={`title1 ${controlMainTitle(mainTitle1, scrollPosition)}`}>
                    We are the sidekicks of heroes
                  </article>
                  <article ref={mainTitle2} className={`title2 ${controlMainTitle(mainTitle2, scrollPosition)}`}>
                    building digital innovation
                  </article>
                </div>
              </section>
            </article>
            <article
              className={`slide ${
                // scrollPosition > 1000 && scrollPosition <= 2000
                scrollPosition > 2000 && scrollPosition <= 4000 ? "visible" : "hidden"
              }`}
            >
              <section className="main-ventures">
                <div className={`main-ventures-wrapper ${controlVentures(scrollPosition)}`}>
                  <div className="main-sticky-title-wrapper">
                    a41 Ventures
                    <span className={"dot"}>.</span>
                  </div>
                  <article className="content">
                    a41 invests in disruptive technologies that will lead the next digital innovation. We believe that those who
                    do the heavy lifting on the ground - members of the projects that we invest in - are the true heroes that
                    should stand out, with the help of sidekicks like us. Members of a41 are dedicated to becoming the bridge and
                    catalyst of the next digital innovation.
                  </article>
                </div>
              </section>
            </article>
            <article
              className={`slide ${
                // scrollPosition > 2000 && scrollPosition <= 3000
                scrollPosition > 4000 && scrollPosition <= 6500 ? "visible" : "hidden"
              }`}
            >
              <section className="main-ourThesis">
                <div className={`main-ourThesis-wrapper ${controlOurThesis(scrollPosition)}`}>
                  <div className="main-sticky-title-wrapper">
                    our thesis
                    <span className={"dot"}>.</span>
                  </div>
                  <div className="content-wrapper">
                    <div className="main-content-box">
                      <article className="dark-content">Winning the next era of&nbsp;&nbsp;</article>
                      <article className="light-content">internet - Web 3,</article>
                    </div>
                    <div className="main-content-box">
                      <article className="dark-content">Winning the next era of&nbsp;&nbsp;</article>
                      <article className="light-content">finance - Open Finance</article>
                    </div>
                    <div className="main-content-box">
                      <article className="dark-content">Winning the next era of&nbsp;&nbsp;</article>
                      <article className="light-content">digital experience - Metaverse</article>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </section>
        </section>
      </section>
      <section className="container-white">
        <section className="container-bg-white">
          <section className="main-portfolio">
            <div className="main-title-wrapper">
              <H0 title="Portfolio" />
              <ViewMoreButton pathname="portfolio" />
            </div>
            <div className="main-portfolio-wrapper">
              <div className="portfolio-box">
                <article className="portfolio-logo">
                  <img src={AlexLogo} alt="" />
                </article>
                <article className="portfolio-logo">
                  <img src={ApricotLogo} alt="" />
                </article>
                <article className="portfolio-logo">
                  <img src={ArkadikoLogo} alt="" />
                </article>
                <article className="portfolio-logo">
                  <img src={BlockSurveLogo} alt="" />
                </article>
                <article className="portfolio-logo">
                  <img src={BribeLogo} alt="" />
                </article>
                <article className="view-more-button-box">
                  <Link to="/portfolio">
                    <img src={ViewMoreIconMobile} alt="" />
                  </Link>
                </article>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="container-white">
        <section className="container-bg-white">
          <section className="main-contents">
            <div className="main-title-wrapper">
              <H0 title="Contents" />
              <ViewMoreButton pathname="contents" />
            </div>
            <div className="main-contents-wrapper">
              <div className="contents-box">
                <div className="contents-box-column1">
                  <ContentComponent
                    thumbnail={column2_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={"This post explores ways to price everlasting options."}
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                  <ContentComponent
                    thumbnail={column2_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={"This post explores ways to price everlasting options."}
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                </div>
                <div className="contents-box-column2">
                  <ContentComponent
                    thumbnail={column2_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={"This post explores ways to price everlasting options."}
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                  <ContentComponent
                    thumbnail={column2_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={"This post explores ways to price everlasting options."}
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                </div>
              </div>
              <article className="view-more-button-box">
                <Link to="/contents">
                  <img src={ViewMoreIconMobile} alt="" />
                </Link>
              </article>
            </div>
          </section>
        </section>
      </section>
      <section className="container-white">
        <section className="container-bg-white">
          <section className="main-team">
            <div className="main-title-wrapper">
              <H0 title="Team" />
              <ViewMoreButton pathname="team" />
            </div>
            <div className="main-team-wrapper">
              <article className="main-team-box">
                {allMemberInfo.map((info: any) => {
                  return (
                    <TeamComponent
                      key={info.sys.id}
                      id={info.sys.id}
                      thumbnail={info.fields.profileImage.fields.file.url}
                      enName={info.fields.name}
                      koName={info.fields.koreanName}
                      position={info.fields.position}
                      sns={info.fields.sns}
                    />
                  );
                })}
              </article>
              <article className="view-more-button-box">
                <Link to="/team">
                  <img src={ViewMoreIconMobile} alt="" />
                </Link>
              </article>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default Main;
