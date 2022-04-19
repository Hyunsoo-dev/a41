import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as LinkedIn } from "../../Assets/image/mainPage/linkedIn.svg";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";

const TeamComponent = ({ id, thumbnail, enName, koName, position, sns }: any) => {
  // console.log("sns :", sns);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = () => {
    if (pathname === "/") {
      return navigate(`/team/${id}`);
    }
    return;
  };
  return (
    <section className="team-container">
      <section className="team-column1">
        <div className="thumbnail-circle" onClick={handleClick}></div>

        <img onClick={handleClick} className="thumbnail" src={thumbnail} />
      </section>
      <section className="team-column2">
        <section className="name-box" onClick={handleClick}>
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
