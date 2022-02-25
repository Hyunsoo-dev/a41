import React from "react";
const TeamComponent = ({ thumbnail, enName, koName, position, sns }: any) => {
  return (
    <section className="team-container">
      <section className="team-column1">
        <img src={thumbnail} />
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
          <article className="sns-logo">logo</article>
          <article className="sns-name">in</article>
        </section>
      </section>
    </section>
  );
};
export default TeamComponent;
