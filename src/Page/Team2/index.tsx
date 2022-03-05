import React from "react";
import H0 from "../../Components/H0";
import {data} from "../Team1/teamlistdata";
import {useLocation} from "react-router-dom";
import '../../Style/Team2.scss';
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import {ReactComponent as LinkedIn} from "../../Assets/linkedin.svg";
import ArticleCard from "../Portfolio2/ArticleCard";

const Team2 = () => {
    const {pathname} = useLocation();
    const id: number = Number(pathname.substring(pathname.length - 1));

    return <div className={"container_bk"}>
        <div className={"content_box"}>
            <H0 title={data[id].enName}/>
            <div className={"profile_box"}>
                <img src={data[id].img} alt={"profile_img"} className={"big_profile_img"}/>
                <div>
                <div className={"row_box"}>
                    <div className={"en_name"}>{data[id].enName}</div>
                    <div className={"ko_name"}>{data[id].koName}</div>
                </div>
                {data[id].position.length === 1 ? <div className={"position"}>{data[id].position[0]}</div> :
                    <div className={"position"}>{data[id].position[0]} | {data[id].position[1]}</div>}
                <a href={data[id].twit} target={"_blank"} rel={"noreferrer"}>
                    <Twitter/>
                </a>
                <a href={data[id].linkedIn} target={"_blank"} rel={"noreferrer"}>
                    <LinkedIn/>
                </a>
                </div>
                <div className={'big_img_border_box'} />
            </div>
            <hr />
            <div className={"profile_article"}>
                {data[id].profile.map((p,idx) => {
                    if (Array.isArray(p)) {
                        return <ul>
                            {p.map((li,idx) => {
                                return <li key={idx}>{li}</li>}
                            )}
                        </ul>
                    } else {
                        return <div className={"profile_section"} key={idx}>
                            {p}
                        </div>
                    }

                }
                )}
            </div>
            <div className={"article_title_box"}>
                <div className={"article_title"}>article</div>
                <span className={"article_count"}>{data[id].article.length}</span>
            </div>
            <div className={"grid_box"}>
                {data[id].article.map(e => {
                    return <ArticleCard title={e.title} img={e.img} link={e.link} summary={e.summary} author={e.author}
                                        date={e.date} key={e.title}/>
                })}
            </div>
        </div>
    </div>
};
export default Team2;
