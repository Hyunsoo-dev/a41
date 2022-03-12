import React from "react";
import '../../Style/OurThesis.scss';
import {useScroll} from "../../Hooks/useScroll";

const OurThesis = () => {
    const {scrollY} = useScroll();
    const innerHeight = window.innerHeight;


    const scrollContent1 = (scrollY: number): string => {
        let className;
        if (scrollY >= 700) {
            className = "thesis-action2";
        } else {
            className = "thesis-action1";
        }
        return className;
    };

    const scrollContent2 = (scrollY: number): string => {
        let className;
        if (scrollY >= innerHeight / 3) {
            className = "thesis2-action1";
        } else {
            className = "thesis2-action2";
        }
        return className;
    }

    return (
        <div className={scrollY >= 500 ? "container_bk" : "container_img"}>
            <div className="content-box">
                <div className="title_box">
                    <div className="thesis_h0">
                        We make investments based on
                    </div>
                    <div className="thesis_h0">our thesis<span className="dot">.</span>
                    </div>
                </div>
                <div className={scrollY >= 700 ? "thesis_content_box_hidden" : "thesis_content_box"}>
                    <div className={scrollContent1(scrollY)}>
                        <div className={"thesis_content"}>
                            <span className="thesis_headline_gray2">Winning the next era of</span>
                            <span className="thesis_headline_gray5">internet - Web 3, </span>
                        </div>
                        <div className="thesis_content">
                            <span className="thesis_headline_gray2">Winning the next era of</span>
                            <span className="thesis_headline_gray5">finance - Open Finance </span>
                        </div>
                        <div className="thesis_content">
                            <span className="thesis_headline_gray2">Winning the next era of</span>
                            <span className="thesis_headline_gray5">digital experience - Metaverse</span>
                        </div>
                    </div>
                </div>
                <div
                    className={scrollY >= 750 ? "thesis_2nd_content_box" : "thesis_2nd_content_box_hidden"}>
                    <div className={scrollContent2(scrollY)}>
                        <div className={"thesis_2nd_content"}>
                            In our publications,<br/>
                            we will be sharing our thoughts on our investment,<br/>
                            technical writings on projects and our ideas regarding the future.
                        </div>
                    </div>
                </div>
            </div>
            s
        </div>
    );
};

export default OurThesis;
