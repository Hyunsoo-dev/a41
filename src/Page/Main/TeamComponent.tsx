import React from "react";
const TeamComponent = ({ thumbnail, enName, koName, position, Sns }: any) => {
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
          <article className="sns-logo">
            <Sns />
          </article>
        </section>
      </section>
    </section>
  );
};
export default TeamComponent;
