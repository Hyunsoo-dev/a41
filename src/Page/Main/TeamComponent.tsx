import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedIn } from "../../Assets/image/mainPage/linkedIn.svg";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";

const TeamComponent = ({ thumbnail, enName, koName, position, sns }: any) => {
  // console.log("sns :", sns);
  return (
    <section className="team-container">
      <section className="team-column1">
        <div className="thumbnail-circle"></div>
        <img className="thumbnail" src={thumbnail} />
      </section>
      <section className="team-column2">
        <section className="name-box">
          <article className="enName">{enName}</article>
          <article className="koName">{koName}</article>
        </section>
        <section className="job-box">
          <article>{position}</article>
        </section>
        <section className="sns-box">
          <Twitter className="sns" onClick={() => window.open(`${sns.twitter}`, "_blank")} />
          <LinkedIn className="sns" onClick={() => window.open(`${sns.linkedin}`, "_blank")} />
        </section>
      </section>
    </section>
  );
};
export default TeamComponent;
