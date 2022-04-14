import React from 'react';
import '../../Style/StakeCard.scss';

interface StakeProps {
    chainName: string;
    thumbnail: string;
    desc: string;
    url: string;
    id: string;
}

const StakeCard = ({chainName, thumbnail, desc, url, id}: StakeProps) => {
    return (
        <>
            <div className={"card_container"}>
                <img src={thumbnail} alt={"thumbnail" + chainName} className={"stake_thumbnail"}/>
                <div className={"staking_title"}>{chainName}</div>
                <div className={"staking_desc"}>{desc}</div>
                <a href={url} rel={"noreferrer"} target={"_blank"}>
                    <div className={"stake_button"}>Stake now!</div>
                </a>
            </div>
        </>)
}

export default StakeCard;