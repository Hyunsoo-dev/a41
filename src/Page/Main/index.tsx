import React, { useState, useEffect, useRef } from "react";
import "../../Style/Main.scss";
import ContentComponent from "./ContentComponent";
import TeamComponent from "./TeamComponent";
import column1_row1 from "../../Assets/image/mainPage/column1_row1.png";
import { ReactComponent as AlexLogo } from "../../Assets/image/mainPage/alexLogo.svg";
import { ReactComponent as ApricotLogo } from "../../Assets/image/mainPage/apricotLogo.svg";
import { ReactComponent as ArkadikoLogo } from "../../Assets/image/mainPage/arkadikoLogo.svg";
import { ReactComponent as BlockSurveLogo } from "../../Assets/image/mainPage/blockSurveLogo.svg";
import { ReactComponent as BribeLogo } from "../../Assets/image/mainPage/bribeLogo.svg";
import { ReactComponent as GreenDot } from "../../Assets/image/mainPage/greenDot.svg";
import { ReactComponent as SnsLogo } from "../../Assets/image/mainPage/sns.svg";
import team_thumbnail from "../../Assets/image/mainPage/team_thumbnail.png";
const Main = () => {
  console.log(window.scrollY);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };
  const mainTitle1 = useRef(null);
  const mainTitle2 = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
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
      if (scrollPosition > 100 && scrollPosition <= 400) {
        className = `main-title-action-${suffix}1`;
      } else if (scrollPosition > 400 && scrollPosition <= 600) {
        className = `main-title-action-${suffix}2`;
      } else if (scrollPosition > 600 && scrollPosition <= 800) {
        className = `main-title-action-${suffix}3`;
      } else if (scrollPosition > 800 && scrollPosition <= 1100) {
        className = `main-title-action-${suffix}4`;
      }
    }
    return className;
  };

  const controlVentures = (scrollPosition: number): any => {
    let className = "";
    if (scrollPosition > 1100 && scrollPosition <= 1300) {
      className = "main-ventures-action1";
    } else if (scrollPosition > 1300 && scrollPosition <= 1800) {
      className = "main-ventures-action2";
    } else if (scrollPosition > 1800 && scrollPosition <= 2000) {
      className = "main-ventures-action3";
    }
    return className;
  };
  const controlOurThesis = (scrollPosition: number): any => {
    let className = "";
    if (scrollPosition > 2000 && scrollPosition <= 2200) {
      className = "main-our-thesis-action1";
    } else if (scrollPosition > 2200 && scrollPosition <= 2800) {
      className = "main-our-thesis-action2";
    } else if (scrollPosition > 2900 && scrollPosition <= 3000) {
      className = "main-our-thesis-action3";
    }
    return className;
  };
  return (
    <>
      {/* <section className="container">
        <section className="container-bg">
          <section className="main-title">
            <div className="main-title-wrapper">
              <article className="title">We are the sidekicks of heroes</article>
              <article className="title">building digital innovation</article>
            </div>
          </section>
        </section>
      </section>
      <section className="container">
        <section className="container-bg" id="opacity-bg">
          <section className="main-ventures">
            <div className="main-ventures-wrapper">
              <article className="title">
                a41 Ventures
                <GreenDot className="greenDot" />
              </article>
              <article className="content">
                a41 invests in disruptive technologies that will lead the next digital innovation. We believe that those who do
                the heavy lifting on the ground - members of the projects that we invest in - are the true heroes that should
                stand out, with the help of sidekicks like us. Members of a41 are dedicated to becoming the bridge and catalyst of
                the next digital innovation.
              </article>
            </div>
          </section>
        </section>
      </section>
      <section className="container">
        <section className="container-bg" id="opacity-bg">
          <section className="main-ourThesis">
            <div className="main-ourThesis-wrapper">
              <article className="title">
                our thesis <GreenDot className="greenDot" />
              </article>
              <div className="content-box">
                <article className="dark-content">Winning the next era of</article>
                <article className="light-content">internet - Web 3, </article>
              </div>
              <div className="content-box">
                <article className="dark-content">Winning the next era of</article>
                <article className="light-content">finance - Open Finance</article>
              </div>
              <div className="content-box">
                <article className="dark-content">Winning the next era of</article>
                <article className="light-content">digital experience - Metaverse</article>
              </div>
            </div>
          </section>
        </section>
      </section> */}
      <section className="sticky-container">
        <section className="sticky">
          <section
            id={
              scrollPosition > 1100 && scrollPosition <= 3800
                ? "opacity-bg"
                : ""
            }
            className="slide-container"
          >
            <article
              className={`slide ${
                scrollPosition < 1100 ? "visible" : "hidden"
              }`}
            >
              <section className="main-title">
                <div className="main-title-wrapper">
                  <article
                    ref={mainTitle1}
                    className={`title1 ${controlMainTitle(
                      mainTitle1,
                      scrollPosition
                    )}`}
                  >
                    We are the sidekicks of heroes
                  </article>
                  <article
                    ref={mainTitle2}
                    className={`title2 ${controlMainTitle(
                      mainTitle2,
                      scrollPosition
                    )}`}
                  >
                    building digital innovation
                  </article>
                </div>
              </section>
            </article>
            <article
              className={`slide ${
                scrollPosition > 1100 && scrollPosition <= 2000
                  ? "visible"
                  : "hidden"
              }`}
            >
              <section className="main-ventures">
                <div
                  className={`main-ventures-wrapper ${controlVentures(
                    scrollPosition
                  )}`}
                >
                  <article className="title">
                    a41 Ventures
                    <GreenDot className="greenDot" />
                  </article>
                  <article className="content">
                    a41 invests in disruptive technologies that will lead the
                    next digital innovation. We believe that those who do the
                    heavy lifting on the ground - members of the projects that
                    we invest in - are the true heroes that should stand out,
                    with the help of sidekicks like us. Members of a41 are
                    dedicated to becoming the bridge and catalyst of the next
                    digital innovation.
                  </article>
                </div>
              </section>
            </article>
            <article
              className={`slide ${
                scrollPosition > 2000 && scrollPosition < 3000
                  ? "visible"
                  : "hidden"
              }`}
            >
              <section className="main-ourThesis">
                <div
                  className={`main-ourThesis-wrapper ${controlOurThesis(
                    scrollPosition
                  )}`}
                >
                  <article className="title">
                    our thesis <GreenDot className="greenDot" />
                  </article>
                  <div className="content-box">
                    <article className="dark-content">
                      Winning the next era of
                    </article>
                    <article className="light-content">
                      internet - Web 3,{" "}
                    </article>
                  </div>
                  <div className="content-box">
                    <article className="dark-content">
                      Winning the next era of
                    </article>
                    <article className="light-content">
                      finance - Open Finance
                    </article>
                  </div>
                  <div className="content-box">
                    <article className="dark-content">
                      Winning the next era of
                    </article>
                    <article className="light-content">
                      digital experience - Metaverse
                    </article>
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
            <div className="main-portfolio-wrapper">
              <article className="title">
                portfolio <GreenDot className="greenDot" />
              </article>
              <div className="portfolio-box">
                <article className="portfolio-logo">
                  <ArkadikoLogo />
                </article>
                <article className="portfolio-logo">
                  <ArkadikoLogo />
                </article>
                <article className="portfolio-logo">
                  <ArkadikoLogo />
                </article>
                <article className="portfolio-logo">
                  <BlockSurveLogo />
                </article>
                <article className="portfolio-logo">
                  <BribeLogo />
                </article>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="container-white">
        <section className="container-bg-white">
          <section className="main-contents">
            <div className="main-contents-wrapper">
              <article className="title">
                Contents <GreenDot className="greenDot" />
              </article>
              <div className="contents-box">
                <div className="contents-box-column1">
                  <ContentComponent
                    thumbnail={column1_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={
                      "This post explores ways to price everlasting options."
                    }
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                  <ContentComponent
                    thumbnail={column1_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={
                      "This post explores ways to price everlasting options."
                    }
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                </div>
                <div className="contents-box-column2">
                  <ContentComponent
                    thumbnail={column1_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={
                      "This post explores ways to price everlasting options."
                    }
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                  <ContentComponent
                    thumbnail={column1_row1}
                    title={"[Research] Pricing Everlasting Options"}
                    subtitle={
                      "This post explores ways to price everlasting options."
                    }
                    author={"Steve Kim"}
                    date={"Dec 24, 2021"}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="container-white">
        <section className="container-bg-white">
          <section className="main-team">
            <div className="main-team-wrapper">
              <article className="title">
                Team <GreenDot className="greenDot" />
              </article>
              <article className="main-team-box">
                <TeamComponent
                  thumbnail={team_thumbnail}
                  enName="John Park"
                  koName="박광성"
                  position="Co-Founder | Managing Partner"
                  Sns={SnsLogo}
                />
                <TeamComponent
                  thumbnail={team_thumbnail}
                  enName="John Park"
                  koName="박광성"
                  position="Co-Founder | Managing Partner"
                  Sns={SnsLogo}
                />
                <TeamComponent
                  thumbnail={team_thumbnail}
                  enName="John Park"
                  koName="박광성"
                  position="Co-Founder | Managing Partner"
                  Sns={SnsLogo}
                />
              </article>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
export default Main;
