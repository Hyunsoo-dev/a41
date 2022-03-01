import React from "react";
import H0 from "../../Components/H0";
import {data} from "./teamlistdata";
import TeamList from "./TeamList";
import '../../Style/Team1.scss';

const Team1 = () => {
  return <div className={'container_bk'}>
    <div className={"content_box"}>
    <H0 title={"team"} />
      <div className={"grid_box"}>
      {data.map(el => {
      return <TeamList id={el.id} img={el.img} enName={el.enName} koName={el.koName} position={el.position} twit={el.twit} linkedIn={el.linkedIn} key={el.id} />}
      )}
    </div>
    </div>
  </div>;
};
export default Team1;
