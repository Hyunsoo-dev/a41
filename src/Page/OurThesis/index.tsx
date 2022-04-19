import React, { useEffect, useRef } from "react";
import "../../Style/OurThesis.scss";
import { useScroll } from "../../Hooks/useScroll";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";

const OurThesis = () => {
  const { scrollY } = useScroll();
  const innerWidth = window.innerWidth;
  const titleRef = useRef<HTMLDivElement>(null);
  let divTop = titleRef.current?.offsetHeight;
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("trans");
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);

  const thesis1ContentControl = () => {
    let className;
    if (scrollY < 150) {
      className = "thesis1_action1";
    } else if (scrollY >= 250 && scrollY < 375) {
      className = "thesis1_action3";
    } else if (scrollY >= 375) {
      className = "thesis1_action4";
    }
    return className;
  };

  const thesis2ContentControl = () => {
    let className;
    if (scrollY > 375 && scrollY < 480) {
      className = "thesis2_action1";
    } else if (scrollY >= 480 && scrollY < 600) {
      className = "thesis2_action2";
    } else if (scrollY >= 600) {
      className = "thesis2_action3";
    }
    return className;
  };
  return (
    <div
      className={
        scrollY >= 250 ? "container_img background_action1" : "container_img"
      }
    >
      <div className="content-box">
        <div
          ref={titleRef}
          className={"title_box"}
          style={
            scrollY > 785
              ? innerWidth > 768
                ? 232 - (scrollY - 645 - (divTop as number)) > 110 ? { top: `${232 - (scrollY - 645 - (divTop as number))}px` } : {top: '110px'}
                : 160 - (scrollY - 633 - (divTop as number)) > 110 ? { top: `${160 - (scrollY - 633 - (divTop as number))}px` } : {top: '110px'}
              : {}
          }
        >
          <div className="thesis_h0">We make investments based on</div>
          <div className="thesis_h0">
            our thesis<span className="dot">.</span>
          </div>
        </div>
        <div className={`thesis_content_box ${thesis1ContentControl()}`}>
          <div className="thesis_content">
            <span className="thesis_headline_gray2">
              Winning the next era of
            </span>
            <span className="thesis_headline_gray5">internet - Web 3, </span>
          </div>
          <div className="thesis_content">
            <span className="thesis_headline_gray2">
              Winning the next era of
            </span>
            <span className="thesis_headline_gray5">
              finance - Open Finance{" "}
            </span>
          </div>
          <div className="thesis_content">
            <span className="thesis_headline_gray2">
              Winning the next era of
            </span>
            <span className="thesis_headline_gray5">
              digital experience - Metaverse
            </span>
          </div>
        </div>
        <div
          className={`thesis_2nd_content_box ${thesis2ContentControl()}`}
          style={
            scrollY > 785
              ? innerWidth > 768
                ? 390 - (scrollY - 645 - (divTop as number)) > 268 ? { top: `${390 - (scrollY - 645 - (divTop as number))}px` } : {top : '268px'}
                : 350 - (scrollY - 633 - (divTop as number)) > 294 ? { top: `${350 - (scrollY - 633 - (divTop as number))}px` } : {top : '294px'}
              : {}
          }
        >
          <div className={"thesis_2nd_content"}>
            In our publications, we will be sharing our thoughts on our investment,
            <br /> technical writings on projects and our ideas regarding the future.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurThesis;
