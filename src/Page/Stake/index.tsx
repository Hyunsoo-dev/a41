import React from 'react';
import "swiper/css";
import "../../Style/Stake.scss";
import H0 from "../../Components/H0";
import StakeCard from "./StakeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

// install Swiper modules
// import Swiper core and required modules
// Import Swiper styles



const Stake = () => {
    const idx = [0, 1, 2, 3, 4];
    return (<div className={"container_bk"} style={{minHeight: "110gvh"}}>
        <div className={"content_box"}>
            <H0 title={"stake"}/>
            <div className={"stake_title"}>Stake token and Earn reward!</div>
            <div className={"stake_subtitle"}>a41 is running full node and validator in various blockchains.</div>
            <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    className="mySwiper">
                {idx.map(i => {
                    return <SwiperSlide key={i}>
                        <StakeCard />
                    </SwiperSlide>
                })}
            </Swiper>


        </div>
    </div>);
};

export default Stake;