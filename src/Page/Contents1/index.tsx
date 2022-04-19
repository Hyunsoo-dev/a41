import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "../../Style/Contents.scss";
import {ReactComponent as GreenDot} from "../../Assets/image/mainPage/greenDot.svg";
import {ReactComponent as GrayDot} from "../../Assets/image/content/grayDot.svg";
import {ReactComponent as SearchIcon} from "../../Assets/image/content/searchIcon.svg";
import {ReactComponent as FilterIcon} from "../../Assets/image/content/filterIcon.svg";
import {ReactComponent as ViewMoreBtn} from "../../Assets/icon/viewmorebtn.svg";
import {useRecoilState} from "recoil";
import {colorTheme} from "../../GlobalState/recoil";
import H0 from "../../Components/H0";

const Contents1 = () => {
    const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

    useEffect(() => {
        setHeaderColor("trans");
    });

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "auto"});
        return () => {
        };
    }, []);

    return (
        <div className="contents-container">
            <div className="contents-page-container">
                <div className="contents-page-title-wrapper">
                    <div className="main-title-wrapper">
                        {/* Contents <GreenDot className="greenDot" /> */}
                        <H0 title="Contents"/>
                    </div>
                    <div className="icon-box">
                        <SearchIcon id="search-icon"/>
                        {/* <FilterIcon /> */}
                    </div>
                </div>
                <div className="contents-page-list-wrapper">
                    <div className="page-content-box">
                        <Link to="/content/1" className="item">
                            <div className="column1">
                                <div className="title">[Research] Pricing Everlasting Options</div>
                                <div className="subTitle">This post explores ways to price everlasting options.</div>
                                <div className="content">
                                    In a journey of personal growth, it’s easy to lose sight of just how far you’ve
                                    come.
                                </div>
                                <div className="tag-box">
                                    <div className="tag">#tag1</div>
                                    <div className="tag">#tag2</div>
                                </div>
                                <div className="content-info-box">
                                    <div className="author">Author: Steve Kim</div>
                                    <GrayDot className="gray-dot"/>
                                    <div className="date">Dec 24, 2021</div>
                                </div>
                                <ViewMoreBtn className={"plus-btn"} />
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
                                    In a journey of personal growth, it’s easy to lose sight of just how far you’ve
                                    come.
                                </div>
                                <div className="tag-box">
                                    <div className="tag">#tag1</div>
                                    <div className="tag">#tag2</div>
                                </div>
                                <div className="content-info-box">
                                    <div className="author">Author: Steve Kim</div>
                                    <GrayDot className="gray-dot"/>
                                    <div className="date">Dec 24, 2021</div>
                                </div>
                                <ViewMoreBtn className={"plus-btn"} />
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
                                    In a journey of personal growth, it’s easy to lose sight of just how far you’ve
                                    come.
                                </div>
                                <div className="tag-box">
                                    <div className="tag">#tag1</div>
                                    <div className="tag">#tag2</div>
                                </div>
                                <div className="content-info-box">
                                    <div className="author">Author: Steve Kim</div>
                                    <GrayDot className="gray-dot"/>
                                    <div className="date">Dec 24, 2021</div>
                                </div>
                                <ViewMoreBtn className={"plus-btn"} />
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
                                    In a journey of personal growth, it’s easy to lose sight of just how far you’ve
                                    come.
                                </div>
                                <div className="tag-box">
                                    <div className="tag">#tag1</div>
                                    <div className="tag">#tag2</div>
                                </div>
                                <div className="content-info-box">
                                    <div className="author">Author: Steve Kim</div>
                                    <GrayDot className="gray-dot"/>
                                    <div className="date">Dec 24, 2021</div>
                                </div>
                                <ViewMoreBtn className={"plus-btn"} />
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
                                    In a journey of personal growth, it’s easy to lose sight of just how far you’ve
                                    come.
                                </div>
                                <div className="tag-box">
                                    <div className="tag">#tag1</div>
                                    <div className="tag">#tag2</div>
                                </div>
                                <div className="content-info-box">
                                    <div className="author">Author: Steve Kim</div>
                                    <GrayDot className="gray-dot"/>
                                    <div className="date">Dec 24, 2021</div>
                                </div>
                                <ViewMoreBtn className={"plus-btn"} />
                            </div>
                            <div className="column2">
                                <div className="thumbnail"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contents1;
