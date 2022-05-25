import React, { useEffect, useState } from "react";
import H0 from "../../Components/H0";
import { useParams } from "react-router-dom";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import { ReactComponent as LinkedIn } from "../../Assets/linkedin.svg";
import ArticleCard from "../Portfolio2/ArticleCard";

import "../../Style/Team2.scss";
import { getMemberInfo } from "../../Contentful/Contentful";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
import MarkdownRenderer from "../../Components/MarkdownRenderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
const renderOptions = {
  renderNode: {
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      // return <li>{node.content[0].content[0].content[0].value}</li>;
      return node.content.map((element: any, idx: any) => <li key={idx}>{element.content[0].content[0].value}</li>);
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return node.content.map((element: any, idx: any) => <li key={idx}>{element.content[0].content[0].value}</li>);
    },
    [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return <a href={`/blog/${node.data.target.fields.slug}`}> {node.data.target.fields.title}</a>;
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={"auto"}
          width={"100%"}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

const Team2 = () => {
  const [detail, setDetail] = useState<any>();
  let { id } = useParams();
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("black");
  });
  useEffect(() => {
    const ac = new AbortController();
    getMemberInfo(id).then((res) => setDetail(res.fields));
    return () => {
      return ac.abort();
    };
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);
  // console.log("detail :", detail);
  return (
    <div className={"container_bk"}>
      <div className={"content_box"}>
        {detail && (
          <>
            <H0 title={detail.name} />
            <div className={"profile_box"}>
              <img src={detail.profileImage.fields.file.url} alt={"profile_img"} className={"big_profile_img"} />
              <div>
                <div className={"row_box"}>
                  <div className={"en_name"}>{detail.name}</div>
                  <div className={"ko_name"}>{detail.koreanName}</div>
                </div>
                <div className={"position"}>{detail.position}</div>
                <a href={detail.sns.twitter} target={"_blank"} rel={"noreferrer"}>
                  <Twitter className={"team_twitter"} />
                </a>
                <a href={detail.sns.linkedin} target={"_blank"} rel={"noreferrer"}>
                  <LinkedIn className={"team_linkedIn"} />
                </a>
              </div>
            </div>
            <hr />
            <div className={"profile_article"}>
              {
                <div className={"profile_section"}>{documentToReactComponents(detail.introduction, renderOptions)}</div>
                //   return (
                //     <div className={"profile_section"} key={idx}>
                //       {/* {p.content[0].value} */}
                //       {/* <MarkdownRenderer markdown={p.content[0].value} /> */}
                //     </div>
                //   );
              }
            </div>
            <div className={"article_title_box"}>
              <div className={"article_title"}>article</div>
              <span className={"article_count"}>{detail.article ? detail.article.length : 0}</span>
            </div>
            {detail.article === undefined ? (
              <div className={"no_article"}>No article</div>
            ) : (
              <div className={"grid_box"}>
                {detail.article.map((e: any) => {
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

export default Team2;
