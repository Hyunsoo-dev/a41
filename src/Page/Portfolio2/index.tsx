import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PortfolioList from "../Portfolio1/PortfolioList";
import H0 from "../../Components/H0";
import ArticleCard from "./ArticleCard";
import { getPortfolioInfo } from "../../Contentful/Contentful";
import "../../Style/Portfolio1.scss";
import "../../Style/Portfolio2.scss";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";

const Portfolio2 = () => {
  const [pf, setPf] = useState<any>();
  const { id } = useParams();
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("black");
  });

  useEffect(() => {
    const ac = new AbortController();
    getPortfolioInfo(id).then((res) => setPf(res));
    return () => ac.abort();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);

  return (
    <div className={"container_bk"}>
      <div className={"content_box"}>
        {pf && (
          <>
            <H0 title={pf.fields.name} />
            <PortfolioList
              img={
                pf.fields.image === undefined
                  ? ""
                  : pf.fields.image.fields.file.url
              }
              title={pf.fields.name}
              chain={pf.fields.chain}
              abstract={pf.fields.abstract}
              contents={
                pf.fields.introduction === undefined
                  ? ""
                  : pf.fields.introduction.content[0].content[0].value
              }
              tags={["tag1", "tag2"]}
              sns={pf.fields.sns === undefined ? "" : pf.fields.sns.twitter}
              web={pf.fields.webUrl}
              flex={false}
              size={"150"}
              id={pf.sys.id}
              key={pf.sys.id}
            />
            <div className={"article_title_box"}>
              <div className={"article_title"}>article</div>
              <span className={"article_count"}>
                {pf.fields.article === undefined ? 0 : pf.fields.article.length}
              </span>
            </div>
            {pf.fields.article && (
              <div className={"grid_box"}>
                {pf.fields.article.map((e: any) => {
                  return (
                    <ArticleCard
                      title={e.title}
                      img={e.img}
                      link={e.link}
                      summary={e.summary}
                      author={e.author}
                      date={e.date}
                      key={e.title}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Portfolio2;
