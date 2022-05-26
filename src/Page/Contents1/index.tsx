import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Style/Contents.scss";
import { ReactComponent as GreenDot } from "../../Assets/image/mainPage/greenDot.svg";
import { ReactComponent as GrayDot } from "../../Assets/image/content/grayDot.svg";
import { ReactComponent as SearchIcon } from "../../Assets/image/content/searchIcon.svg";
import { ReactComponent as FilterIcon } from "../../Assets/image/content/filterIcon.svg";
import { ReactComponent as ViewMoreBtn } from "../../Assets/icon/viewmorebtn.svg";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
import H0 from "../../Components/H0";
import { getContents } from "../../Contentful/Contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOptions = {
  // renderNode: {
  //   [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
  //     console.log("node.content :", node.content);
  //     // let str = node.content.reduce(
  //     //   (acc: any, cur: any) => acc.value + cur.value
  //     // );
  //     // console.log("str:", str);
  //     return <></>;
  //   },
  // },
};

const Contents1 = () => {
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
  const [contents, setContents] = useState<any[]>([]);
  useEffect(() => {
    // setHeaderColor("trans");
    setHeaderColor("white");
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);

  useEffect(() => {
    getContents().then((res) => {
      setContents([...res.items]);
    });
  }, []);
  // console.log("contents:", contents);

  return (
    <div className="contents-container">
      <div className="contents-page-container">
        <div className="contents-page-title-wrapper">
          <div className="main-title-wrapper">
            {/* Contents <GreenDot className="greenDot" /> */}
            <H0 title="Contents" />
          </div>
          <div className="icon-box">
            <SearchIcon id="search-icon" />
            {/* <FilterIcon /> */}
          </div>
        </div>
        <div className="contents-page-list-wrapper">
          <div className="page-content-box">
            {contents &&
              contents.map((element, idx): any => (
                <Link
                  key={idx}
                  to={`/content/${element.sys.id}`}
                  className="item"
                >
                  <div className="column1">
                    <div className="title">{element.fields.title}</div>
                    <div className="subTitle">{element.fields.subTitle}</div>
                    <div className="content">
                      {/* In a journey of personal growth, it’s easy to lose sight
                      of just how far you’ve come. */}

                      {/* {element.fields.content.content.forEach((ele: any) =>
                        console.log("ele :", ele)
                      )} */}
                      {/* 
                      {element.fields.content.content.reduce(
                        (acc: any, cur: any) =>
                          acc.content[0].value +
                          cur.content.reduce(
                            (x: any, y: any) => x.value + y.value
                          )

                        
                      )} */}
                      {/* {documentToReactComponents(
                        element.fields.content.content[0],
                        renderOptions
                      )} */}
                    </div>
                    <div className="tag-box">
                      {element.fields.tags ? (
                        element.fields.tags.map((element: any, idx: any) => (
                          <div key={idx} className="tag">
                            {element}
                          </div>
                        ))
                      ) : (
                        <div className="no-tag"></div>
                      )}
                    </div>
                    <div className="content-info-box">
                      <div className="author">
                        Author: {element.fields.author}
                      </div>
                      <GrayDot className="gray-dot" />
                      <div className="date">
                        {new Date(
                          element.fields.createdAt
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="column2">
                    <img
                      src={element.fields.thumbnail.fields.file.url}
                      className="thumbnail"
                    ></img>
                  </div>
                </Link>
              ))}
            {/* <Link to="/content/1" className="item">
              <div className="column1">
                <div className="title">[Research] Pricing Everlasting Options</div>
                <div className="subTitle">This post explores ways to price everlasting options.</div>
                <div className="content">
                  In a journey of personal growth, it’s easy to lose sight of just how far you’ve come.
                </div>
                <div className="tag-box">
                  <div className="tag">#tag1</div>
                  <div className="tag">#tag2</div>
                </div>
                <div className="content-info-box">
                  <div className="author">Author: Steve Kim</div>
                  <GrayDot className="gray-dot" />
                  <div className="date">Dec 24, 2021</div>
                </div>
              </div>
              <div className="column2">
                <div className="thumbnail"></div>
              </div>
            </Link>
            <Link to="/content/1" className="item">
              <div className="column1">
                <div className="title">[Research] Pricing Everlasting Options</div>
                <div className="subTitle">This post explores ways to price everlasting options.</div>
                <div className="content">
                  In a journey of personal growth, it’s easy to lose sight of just how far you’ve come.
                </div>
                <div className="tag-box">
                  <div className="tag">#tag1</div>
                  <div className="tag">#tag2</div>
                </div>
                <div className="content-info-box">
                  <div className="author">Author: Steve Kim</div>
                  <GrayDot className="gray-dot" />
                  <div className="date">Dec 24, 2021</div>
                </div>
              </div>
              <div className="column2">
                <div className="thumbnail"></div>
              </div>
            </Link>
            <Link to="/content/1" className="item">
              <div className="column1">
                <div className="title">[Research] Pricing Everlasting Options</div>
                <div className="subTitle">This post explores ways to price everlasting options.</div>
                <div className="content">
                  In a journey of personal growth, it’s easy to lose sight of just how far you’ve come.
                </div>
                <div className="tag-box">
                  <div className="tag">#tag1</div>
                  <div className="tag">#tag2</div>
                </div>
                <div className="content-info-box">
                  <div className="author">Author: Steve Kim</div>
                  <GrayDot className="gray-dot" />
                  <div className="date">Dec 24, 2021</div>
                </div>
              </div>
              <div className="column2">
                <div className="thumbnail"></div>
              </div>
            </Link>
            <Link to="/content/1" className="item">
              <div className="column1">
                <div className="title">[Research] Pricing Everlasting Options</div>
                <div className="subTitle">This post explores ways to price everlasting options.</div>
                <div className="content">
                  In a journey of personal growth, it’s easy to lose sight of just how far you’ve come.
                </div>
                <div className="tag-box">
                  <div className="tag">#tag1</div>
                  <div className="tag">#tag2</div>
                </div>
                <div className="content-info-box">
                  <div className="author">Author: Steve Kim</div>
                  <GrayDot className="gray-dot" />
                  <div className="date">Dec 24, 2021</div>
                </div>
              </div>
              <div className="column2">
                <div className="thumbnail"></div>
              </div>
            </Link>
            <Link to="/content/1" className="item">
              <div className="column1">
                <div className="title">[Research] Pricing Everlasting Options</div>
                <div className="subTitle">This post explores ways to price everlasting options.</div>
                <div className="content">
                  In a journey of personal growth, it’s easy to lose sight of just how far you’ve come.
                </div>
                <div className="tag-box">
                  <div className="tag">#tag1</div>
                  <div className="tag">#tag2</div>
                </div>
                <div className="content-info-box">
                  <div className="author">Author: Steve Kim</div>
                  <GrayDot className="gray-dot" />
                  <div className="date">Dec 24, 2021</div>
                </div>
              </div>
              <div className="column2">
                <div className="thumbnail"></div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents1;
