import React, { useEffect, useState } from "react";
import H0 from "../../Components/H0";
import TeamList from "./TeamList";
import "../../Style/Team1.scss";
import { getAllMemberInfo } from "../../Contentful/Contentful";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
const Team1 = () => {
  const [data, setData] = useState<any[]>([]);
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("black");
  });
  useEffect(() => {
    const ac = new AbortController();
    getAllMemberInfo().then((r) =>
      setData(
        r.items.sort((a, b) => {
          return a.fields.index - b.fields.index;
        })
      )
    );
    return () => {
      return ac.abort();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);
  // console.log("data :", data);
  return (
    <div className={"container_bk"}>
      <div className={"content_box"}>
        <H0 title={"team"} />
        <div className={"team_grid_box"}>
          {data &&
            data.map((el: any, idx) => {
              return (
                <TeamList
                  id={el.sys.id}
                  img={el.fields.profileImage.fields.file.url}
                  enName={el.fields.name}
                  koName={el.fields.koreanName}
                  position={el.fields.position}
                  twit={el.fields.sns && el.fields.sns.twitter}
                  linkedIn={el.fields.sns && el.fields.sns.linkedin}
                  key={el.sys.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Team1;
