import React, {useEffect, useState} from "react";
import H0 from "../../Components/H0";
import {createClient} from "contentful";
import {useParams} from "react-router-dom";
import '../../Style/Team2.scss';
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import {ReactComponent as LinkedIn} from "../../Assets/linkedin.svg";
import ArticleCard from "../Portfolio2/ArticleCard";

const Team2 = () => {

    const [data, setData] = useState<any>();
    let {id} = useParams();

    useEffect(() => {
        const client = createClient({
            space: "wx3giiipzhrz",
            accessToken: "lUlFHBlFhQmeCT_AjNIm51f422G0xb-pVA7XxeV9fNQ"
        });

        client.getEntry(id as string).then(res =>
            setData(res.fields)
        );
        return () => {
        };
    }, []);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
        return () => {
        }
    }, []);


    return <div className={"container_bk"}>
        <div className={"content_box"}>
            {data && <>
                <H0 title={data.name}/>
                <div className={"profile_box"}>
                    <img src={data.profileImage.fields.file.url} alt={"profile_img"} className={"big_profile_img"}/>
                    <div>
                        <div className={"row_box"}>
                            <div className={"en_name"}>{data.name}</div>
                            <div className={"ko_name"}>{data.koreanName}</div>
                        </div>
                        <div className={"position"}>{data.position}</div>
                        <a href={data.sns.twitter} target={"_blank"} rel={"noreferrer"}>
                            <Twitter/>
                        </a>
                        <a href={data.sns.linkedin} target={"_blank"} rel={"noreferrer"}>
                            <LinkedIn/>
                        </a>
                    </div>
                    <div className={'big_img_border_box'}></div>
                </div>
                <hr/>
                <div className={"profile_article"}>
                    {data && data.introduction.content.map((p: any, idx: number) => {
                            return <div className={"profile_section"} key={idx}>
                                {p.content[0].value}
                            </div>
                        }
                    )}
                </div>
                <div className={"article_title_box"}>
                    <div className={"article_title"}>article</div>
                    <span className={"article_count"}>{data.article && data.article.length}</span>
                </div>
                <div className={"grid_box"}>
                    {data.article && data.article.map((e: any) => {
                        return <ArticleCard title={e.title} img={e.img} link={e.link} summary={e.summary}
                                            author={e.author}
                                            date={e.date} key={e.title}/>
                    })}
                </div>
            </>}
        </div>
    </div>
};
export default Team2;
