import React from "react";
import "../../Style/Main.scss";
import ContentComponent from "./ContentComponent";
import TeamComponent from "./TeamComponent";
import column1_row1 from "../../Assets/image/mainPage/column1_row1.png";
import { ReactComponent as AlexLogo } from "../../Assets/image/mainPage/alexLogo.svg";
import { ReactComponent as ApricotLogo } from "../../Assets/image/mainPage/apricotLogo.svg";
import { ReactComponent as ArkadikoLogo } from "../../Assets/image/mainPage/arkadikoLogo.svg";
import { ReactComponent as BlockSurveLogo } from "../../Assets/image/mainPage/blockSurveLogo.svg";
import { ReactComponent as BribeLogo } from "../../Assets/image/mainPage/bribeLogo.svg";
// import snsLogo from "../../Assets/image/mainPage/sns.svg";
import { ReactComponent as SnsLogo } from "../../Assets/image/mainPage/sns.svg";
import team_thumbnail from "../../Assets/image/mainPage/team_thumbnail.png";
const Main = () => {
  return (
    <>
      <section className="container">
        <section className="container-bg">
          <section className="main-title">
            <div className="main-title-wrapper">
              <article className="title">
                We are the sidekicks of heroes
              </article>
              <article className="title">building digital innovation</article>
            </div>
          </section>
        </section>
      </section>
      <section className="container">
        <section className="container-bg" id="opacity-bg">
          <section className="main-ventures">
            <div className="main-ventures-wrapper">
              <article className="title">a41 Ventures</article>
              <article className="content">
                a41 invests in disruptive technologies that will lead the next
                digital innovation. We believe that those who do the heavy
                lifting on the ground - members of the projects that we invest
                in - are the true heroes that should stand out, with the help of
                sidekicks like us. Members of a41 are dedicated to becoming the
                bridge and catalyst of the next digital innovation.
              </article>
            </div>
          </section>
        </section>
      </section>
      <section className="container">
        <section className="container-bg" id="opacity-bg">
          <section className="main-ourThesis">
            <div className="main-ourThesis-wrapper">
              <article className="title">our thesis</article>
              <div className="content-box">
                <article className="dark-content">
                  Winning the next era of
                </article>
                <article className="light-content">internet - Web 3, </article>
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
        </section>
      </section>
      <section className="container-white">
        <section className="container-bg-white">
          <section className="main-portfolio">
            <div className="main-portfolio-wrapper">
              <article className="title">portfolio</article>
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
              <article className="title">Contents</article>
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
              <article className="title">Team</article>
              <article className="main-team-box">
                <TeamComponent
                  thumbnail={team_thumbnail}
                  enName="John Park"
                  koName="박광성"
                  position="Co-Founder | Managing Partner"
                  sns={SnsLogo}
                />
                <TeamComponent
                  thumbnail={team_thumbnail}
                  enName="John Park"
                  koName="박광성"
                  position="Co-Founder | Managing Partner"
                  sns={SnsLogo}
                />
                <TeamComponent
                  thumbnail={team_thumbnail}
                  enName="John Park"
                  koName="박광성"
                  position="Co-Founder | Managing Partner"
                  sns={SnsLogo}
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
