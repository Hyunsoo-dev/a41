import React from "react";
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import {ReactComponent as LinkedIn} from "../../Assets/linkedin.svg";
import '../../Style/TeamList.scss';
import {useLocation, useNavigate} from "react-router-dom";

type TeamListProps = {
    id: number;
    img: string;
    enName: string;
    koName: string;
    position: string[];
    twit: string;
    linkedIn: string;
}

const TeamList = ({id, img, enName, koName, position, twit, linkedIn}: TeamListProps) => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    return <div className={"list_box"} onClick={() => {
        if (pathname === "/team") {
            return navigate(`${id}`);
        }
        ;
        return;
    }
    }>
        <img src={img} alt={"profile_img"}/>
        <div className={"row_box"}>
            <div className={"en_name"}>{enName}</div>
            <div className={"ko_name"}>{koName}</div>
        </div>
        {/*{position.length === 1 ? <div className={"position"}>{position[0]}</div> : <div className={"position"}>{position[0]} | {position[1]}</div>}*/}
        <div className={"position"}>{position} </div>
        <div className={"row_box"}>
            {twit && <a href={twit} target={"_blank"} rel={"noreferrer"}>
                <Twitter/>
            </a>}
            {linkedIn &&
                <a href={linkedIn} target={"_blank"} rel={"noreferrer"}>
                    <LinkedIn/>
                </a>}
        </div>
        <div className={'img_border_box'}></div>
    </div>
}

export default TeamList;