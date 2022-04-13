import React, { useEffect } from "react";
import "swiper/css";
import "../../Style/Stake.scss";
import H0 from "../../Components/H0";
import StakeCard from "./StakeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
SwiperCore.use([Pagination]);

const Stake = () => {
  const idx = [0, 1, 2, 3, 4];
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("black");
  });
  return (
    <div className={"container_bk"} style={{ minHeight: "110gvh" }}>
      <div className={"content_box"}>
        <H0 title={"stake"} />
        <div className={"stake_title"}>Stake token and Earn reward!</div>
        <div className={"stake_subtitle"}>
          a41 is running full node and validator in various blockchains.
        </div>
        <div className={"stake_grid_box"}>
          {idx.map((i) => {
            return <StakeCard key={i} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Stake;
