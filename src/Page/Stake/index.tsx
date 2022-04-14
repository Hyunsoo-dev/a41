import React, {useEffect, useState} from "react";
import "swiper/css";
import "../../Style/Stake.scss";
import H0 from "../../Components/H0";
import StakeCard from "./StakeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";
import {getAllPortfolioInfo, getAllStake} from "../../Contentful/Contentful";
import stake from "./index";
SwiperCore.use([Pagination]);

const Stake = () => {
  const [stakeInfo, setStakeInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("black");
    return () => {};
  });

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);
    getAllStake().then((r) =>
        setStakeInfo(
            r.items.sort((a, b) => {
              return a.fields.index - b.fields.index;
            })
        )
    );
    setIsLoading(false);
    return () => ac.abort();
  }, []);

  return (
      isLoading ? <></> : <div className={"container_bk"} style={{ minHeight: "110gvh" }}>
      <div className={"content_box"}>
        <H0 title={"stake"} />
        <div className={"stake_title"}>Stake token and Earn reward!</div>
        <div className={"stake_subtitle"}>
          a41 is running full node and validator in various blockchains.
        </div>
        <div className={"stake_grid_box"}>
          {stakeInfo && stakeInfo.map((i: any) => {
            return <StakeCard chainName={i.fields.chainName} thumbnail={i.fields.thumbnail.fields.file.url} desc={i.fields.shortIntroduction.content[0].content[0].value} url={i.fields.url} id={i.sys.id} key={i.sys.id} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Stake;
