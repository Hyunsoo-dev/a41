import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LeftArrowIcon from "../../Assets/image/content/leftArrowIcon.png";
import RightArrowIcon from "../../Assets/image/content/rightArrowIcon.png";
import ContentThumbnail from "../../Assets/image/content/content_thumbnail.png";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
import "../../Style/Content.scss";
import { getContent } from "../../Contentful/Contentful";
import MarkdownRenderer from "../../Components/MarkdownRenderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      // return <li>{node.content[0].content[0].content[0].value}</li>;
      return node.content.map((element: any, idx: any) => (
        <li key={idx}>{element.content[0].content[0].value}</li>
      ));
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      return node.content.map((element: any, idx: any) => (
        <li key={idx}>{element.content[0].content[0].value}</li>
      ));
    },
    [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
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
          // height={
          //   node.data.target.fields.file.details.image.width > 780 ? "auto" : node.data.target.fields.file.details.image.height
          // }
          // width={node.data.target.fields.file.details.image.width > 780 ? 780 : node.data.target.fields.file.details.image.width}
          height={"auto"}
          width={"100%"}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

const Content = () => {
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderColor("white");
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);

  const params = useParams();

  const contentId = params.contentId as string;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [height, setHeight] = useState(0);
  const [content, setContent] = useState<any>();
  const updateScrollPosition = () => {
    setScrollPosition(
      document.body.scrollTop || document.documentElement.scrollTop
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  });

  useEffect(() => {
    const winHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setHeight(winHeight);
  });

  useEffect(() => {
    getContent(contentId).then((res) => {
      // console.log("res.fields :", res.fields);
      setContent(res.fields);
    });
  }, []);

  const handleClickAuthor = () => {
    if (content.author === "a41") return;

    content && navigate(`../../team/${content.authorReference.sys.id}`);
  };

  return (
    <div className="content-page-container">
      {content && (
        <>
          <div className="content-page-wrapper">
            <div className="content-page-header-wrapper">
              <div className="title">{content.title}</div>
              <div className="subtitle">{content.subTitle}</div>
              <div className="content-info-box">
                <div className="author" onClick={handleClickAuthor}>
                  Author: {content.author}
                </div>
                <div className="date">{content.createAt}</div>
              </div>
            </div>
            <div className="content-page-progress-bar-wrapper">
              <div className="test">
                <div
                  className="content-page-progress-bar"
                  style={{ width: `${(scrollPosition / height) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="content-page-content-wrapper">
              {content.content &&
                documentToReactComponents(content.content, renderOptions)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Content;
