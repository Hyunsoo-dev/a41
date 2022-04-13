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

    const handleClick = () => {
        if (pathname === "/team") {
            return navigate(`${id}`);
        }
        return;
    }


    return <div className={"list_box"} >
        <div className={"pointer_box"} onClick={handleClick}>
        <img src={img} alt={"profile_img"} />
        <div className={"row_box"}>
            <div className={"en_name"}>{enName}</div>
            <div className={"ko_name"}>{koName}</div>
        </div>
        <div className={"position"}>{position} </div>
        </div>
        <div className={"row_box"}>
            {twit && <a href={twit} target={"_blank"} rel={"noreferrer"}>
                <Twitter className={"team_twitter"}/>
            </a>}
            {linkedIn &&
                <a href={linkedIn} target={"_blank"} rel={"noreferrer"}>
                    <LinkedIn className={"team_linkedIn"}/>
                </a>}
        </div>
    </div>
}

export default TeamList;